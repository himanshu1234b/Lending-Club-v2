import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";

export function useCreateInquiry() {
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || 'Validation failed');
        }
        throw new Error('Failed to submit inquiry');
      }
      
      return res.json();
    },
  });
}
