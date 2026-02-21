import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative bg-[#113B5E] text-white overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* HTML comment for stock image replacement if needed */}
        {/* Financial growth happy couple reviewing laptop */}
        <img 
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop" 
          alt="Happy couple managing finances" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#113B5E] via-[#113B5E]/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
            Your finances matter to you and that matters to us.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
            Join the millions of members who are saving more, spending less, and earning more with LendingClub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#EE5F3F] hover:bg-[#D94E30] text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              Check Your Rate
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-full bg-transparent">
              Open An Account
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-2 text-sm text-gray-300">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#113B5E] bg-gray-200 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
            </div>
            <p className="font-medium ml-2">Trusted by 4+ million members</p>
          </div>
        </div>
      </div>
    </div>
  );
}
