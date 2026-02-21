import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  icon: ReactNode;
  features: string[];
  ctaText: string;
  onClick: () => void;
  highlight?: boolean;
}

export function ProductCard({ title, icon, features, ctaText, onClick, highlight }: ProductCardProps) {
  return (
    <div className={`
      relative bg-white rounded-xl p-8 flex flex-col h-full
      border border-gray-100 shadow-sm card-hover-effect
      ${highlight ? 'ring-2 ring-[#0077B3]' : ''}
    `}>
      {highlight && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0077B3] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Most Popular
        </div>
      )}
      
      <div className="mb-6 text-[#0077B3]">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-[#113B5E] mb-4 min-h-[56px] flex items-center">
        {title}
      </h3>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start text-gray-600 text-sm leading-relaxed">
            <span className="mr-2 text-[#0077B3]">•</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <Button 
        onClick={onClick}
        variant="outline"
        className="w-full justify-between group border-[#0077B3] text-[#0077B3] hover:bg-[#0077B3] hover:text-white font-bold rounded-full transition-all duration-300"
      >
        {ctaText}
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}
