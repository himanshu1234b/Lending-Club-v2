import { Button } from "@/components/ui/button";
import { Mail, ShieldCheck } from "lucide-react";
import heroImage from "@assets/LC_Hero_Image_lg.jpg&w=3840&q=75_1771652329889.png";

export function HeroSection() {
  return (
    <div className="relative bg-[#051121] text-white overflow-hidden min-h-[700px] flex items-start pt-16 md:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="LendingClub Hero" 
          className="w-full h-full object-cover opacity-80 object-[center_right] md:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051121] via-[#051121]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-[1.1] text-white">
            Your finances matter to you <br />
            <span className="text-[#89D3F8]">and that matters to us.</span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 mb-12 max-w-lg">
            Keep more of what you earn and earn more on what you save.<sup>1</sup>
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">What are you looking for?</h2>
            <p className="text-sm text-gray-400">Check your rate. It won't impact your credit score.<sup>2</sup></p>
          </div>
          
          {/* Product Grid inside Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 items-start justify-items-center">
             <div className="bg-[#F3F5F9] rounded-[16px] p-5 text-[#113B5E] relative flex flex-col w-[278px] min-h-[279px] shrink-0">
                <div className="absolute top-0 right-4 -translate-y-1/2 bg-[#D1FAE5] text-[#065F46] text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">
                  Up to 5% APR discount³
                </div>
                <div className="mb-3">
                  <img src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2FGTEk4sbaPlWPqa5HMr3l9%2F8bb90206e28c6ecf63527ce1f2e66cd2%2F_Graphicons_base.svg&w=48&q=75" alt="Debt Paydown" className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-base mb-2 leading-tight">Debt Paydown Loan</h3>
                <p className="text-[11px] text-gray-600 mb-4 flex-grow leading-snug">
                  A debt consolidation loan up to $60,000 to pay off credit card debt or personal loan balances, with the option to get extra cash.
                </p>
                <Button variant="outline" className="w-full border-[#0077B3] text-[#0077B3] hover:bg-[#0077B3] hover:text-white font-bold rounded-md py-4 text-xs h-10">
                  Check Your Rate
                </Button>
             </div>

             <div className="bg-[#F3F5F9] rounded-[16px] p-5 text-[#113B5E] flex flex-col w-[278px] min-h-[279px] shrink-0">
                <div className="mb-3">
                  <img src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F1BcDwu8woS0Udh3GtLTBk5%2F7143bfcc9707a58b86d87a6ac72350b0%2F_Graphicons_base__1_.svg&w=48&q=75" alt="Cash Loan" className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-base mb-2 leading-tight">Cash Loan</h3>
                <p className="text-[11px] text-gray-600 mb-4 flex-grow leading-snug">
                  A personal loan up to $60,000 to cover expenses like a major purchase, home improvements, life events, etc.
                </p>
                <Button variant="outline" className="w-full border-[#0077B3] text-[#0077B3] hover:bg-[#0077B3] hover:text-white font-bold rounded-md py-4 text-xs h-10">
                  Check Your Rate
                </Button>
             </div>

             <div className="bg-[#F3F5F9] rounded-[16px] p-5 text-[#113B5E] flex flex-col w-[278px] min-h-[279px] shrink-0">
                <div className="mb-3">
                  <img src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2FPAI9KKYKj07gxZFYHMHXW%2Fe922d5ebc335e99f32446b372485a523%2F_Graphicons_base__2_.svg&w=48&q=75" alt="Large Expense" className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-base mb-2 leading-tight">Pay for a Large Expense</h3>
                <p className="text-[11px] text-gray-600 mb-4 flex-grow leading-snug">
                  Get up to $65,000 to cover medical treatments, wellness services, tutoring, large retail purchases, and more.
                </p>
                <Button variant="outline" className="w-full border-[#0077B3] text-[#0077B3] hover:bg-[#0077B3] hover:text-white font-bold rounded-md py-4 text-xs h-10">
                  Check Your Rate
                </Button>
             </div>

             <div className="bg-[#F3F5F9] rounded-[16px] p-5 text-[#113B5E] flex flex-col w-[278px] min-h-[279px] shrink-0">
                <div className="mb-3">
                  <img src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F30QRTLfPiWmCM3kndvnwM3%2Fabfe00d3007f15f9770c6f225041d9a6%2FCar_Refi_Loan.svg&w=48&q=75" alt="Auto Loan" className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-base mb-2 leading-tight">Auto Loan Refinance</h3>
                <p className="text-[11px] text-gray-600 mb-4 flex-grow leading-snug">
                  Flexible terms and competitive rates could help you pay less than you are right now.
                </p>
                <Button variant="outline" className="w-full border-[#0077B3] text-[#0077B3] hover:bg-[#0077B3] hover:text-white font-bold rounded-md py-4 text-xs h-10">
                  Check Your Rate
                </Button>
             </div>
          </div>

          <div className="flex items-center gap-8 text-xs text-gray-300 font-medium">
            <a href="#" className="flex items-center gap-2 hover:underline">
              <Mail className="w-4 h-4" /> Respond to Mail Offer
            </a>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> PRIVACY & SECURITY PROTECTION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
