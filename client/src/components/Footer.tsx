import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Investor Relations", "Media Center", "Social Impact"],
    },
    {
      title: "Products",
      links: ["Personal Loans", "Business Loans", "Auto Refinancing", "Patient Solutions", "Checking", "Savings", "CDs"],
    },
    {
      title: "Resources",
      links: ["Blog", "Resource Center", "Rates & Fees", "Help Center", "Contact Us", "Security"],
    },
    {
      title: "Legal",
      links: ["Terms of Use", "Privacy Policy", "Patriot Act", "Accessibility", "Licenses"],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[#113B5E] font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-[#0077B3] text-sm font-medium transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Social & Badges */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#0077B3]"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-[#0077B3]"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-[#0077B3]"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-[#0077B3]"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-[#0077B3]"><Youtube className="w-5 h-5" /></a>
          </div>
          <div className="flex items-center gap-4">
             <div className="bg-white border border-gray-200 px-3 py-1 rounded text-xs font-bold text-gray-600">
               EQUAL HOUSING LENDER
             </div>
             <div className="bg-white border border-gray-200 px-3 py-1 rounded text-xs font-bold text-gray-600">
               ACCREDITED BUSINESS
             </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="text-xs text-gray-500 space-y-4 leading-relaxed">
          <p>
            © 2024 LendingClub Bank, N.A., Member FDIC. All rights reserved. NMLS ID #167439.
          </p>
          <p>
            "LendingClub" and the "LC" symbol, and "LendingClub Bank" are trademarks of LendingClub Bank, N.A.
          </p>
          <p>
            LendingClub Bank, N.A. is a wholly-owned subsidiary of LendingClub Corporation.
          </p>
          <p>
            To help the government fight the funding of terrorism and money laundering activities, Federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. What this means for you: When you open an account, we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents.
          </p>
        </div>
      </div>
    </footer>
  );
}
