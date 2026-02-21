import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { BadgeDollarSign, Landmark, Briefcase, Car, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const createInquiry = useCreateInquiry();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await createInquiry.mutateAsync({ email });
      toast({
        title: "Subscribed!",
        description: "You've successfully signed up for updates.",
      });
      setEmail("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to subscribe. Please try again.",
      });
    }
  };

  const products = [
    {
      title: "Debt Paydown Loan",
      icon: <BadgeDollarSign className="w-10 h-10" />,
      features: ["Pay off high-interest debt", "Fixed rates & fixed terms", "Check rate without impacting credit score"],
      ctaText: "Check Your Rate",
      onClick: () => console.log("Debt Loan clicked"),
      highlight: true
    },
    {
      title: "Banking & Savings",
      icon: <Landmark className="w-10 h-10" />,
      features: ["High-yield savings accounts", "Rewards checking", "Award-winning mobile app"],
      ctaText: "Open Account",
      onClick: () => console.log("Banking clicked")
    },
    {
      title: "Business Loans",
      icon: <Briefcase className="w-10 h-10" />,
      features: ["Small business financing", "Commercial lending", "Equipment financing solutions"],
      ctaText: "See Options",
      onClick: () => console.log("Business clicked")
    },
    {
      title: "Auto Refinance",
      icon: <Car className="w-10 h-10" />,
      features: ["Lower your monthly payment", "Fast & easy application", "No hidden fees"],
      ctaText: "View Rates",
      onClick: () => console.log("Auto clicked")
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />

        {/* Value Proposition Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#0077B3] font-bold tracking-wide uppercase text-sm mb-2 block">Why LendingClub?</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#113B5E] mb-6 leading-tight">
                  We're rewriting the rules of traditional banking.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We've created a marketplace that connects borrowers and investors directly, cutting out the high costs of traditional banking. This means better rates for borrowers and solid returns for investors.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-100 p-3 rounded-full h-fit">
                      <ShieldCheck className="w-6 h-6 text-[#0077B3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#113B5E] text-lg">Secure & Private</h4>
                      <p className="text-gray-600">Bank-level security protecting your personal data.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-100 p-3 rounded-full h-fit">
                      <Clock className="w-6 h-6 text-[#0077B3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#113B5E] text-lg">Fast & Easy</h4>
                      <p className="text-gray-600">Online application takes just minutes to complete.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-100 p-3 rounded-full h-fit">
                      <CheckCircle2 className="w-6 h-6 text-[#0077B3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#113B5E] text-lg">No Hidden Fees</h4>
                      <p className="text-gray-600">Transparent terms so you always know what you owe.</p>
                    </div>
                  </div>
                </div>

                <Button className="mt-10 bg-[#113B5E] hover:bg-[#0E2E4A] text-white font-bold px-8 py-6 rounded-full">
                  Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#0077B3]/20 to-[#EE5F3F]/20 rounded-2xl transform rotate-3 blur-lg"></div>
                 {/* HTML comment for stock image replacement */}
                 {/* Mobile banking app on phone screen */}
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" 
                  alt="Mobile banking app" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover h-[600px]"
                />
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-[#0077B3]">4.8</div>
                    <div className="flex flex-col">
                      <div className="flex text-yellow-400 text-sm">★★★★★</div>
                      <span className="text-sm font-medium text-gray-600">App Store Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-[#0077B3]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay in the know</h2>
            <p className="text-white/80 mb-8 text-lg">
              Get the latest financial tips and news delivered straight to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                disabled={createInquiry.isPending}
                className="bg-[#113B5E] hover:bg-[#0E2E4A] text-white font-bold px-8 py-6 rounded-full whitespace-nowrap"
              >
                {createInquiry.isPending ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </form>
            <p className="text-white/60 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
