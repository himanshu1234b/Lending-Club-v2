import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Borrowing", href: "#", hasDropdown: true },
    { name: "Banking", href: "#", hasDropdown: true },
    { name: "Business", href: "#", hasDropdown: true },
    { name: "Investing", href: "#", hasDropdown: true },
    { name: "Resources", href: "#" },
    { name: "Help", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-[#0077B3] p-1.5 rounded-sm">
                <div className="w-5 h-5 border-2 border-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-[#113B5E] tracking-tight">LendingClub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <button className="flex items-center text-[#113B5E] font-semibold hover:text-[#0077B3] transition-colors py-2">
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-[#113B5E] hover:text-[#0077B3]">
              <Search className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-[#0077B3] text-[#0077B3] hover:bg-[#0077B3]/5 font-bold rounded-full px-6"
            >
              Sign In
            </Button>
            <Button 
              className="bg-[#EE5F3F] hover:bg-[#D94E30] text-white font-bold rounded-full px-6 shadow-md hover:shadow-lg transition-all"
            >
              Check Your Rate
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#113B5E] hover:text-[#0077B3] p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-[#113B5E] border-b border-gray-50 hover:bg-gray-50"
              >
                <div className="flex justify-between items-center">
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                </div>
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-3 px-3">
              <Button 
                variant="outline" 
                className="w-full justify-center border-[#0077B3] text-[#0077B3] font-bold rounded-full"
              >
                Sign In
              </Button>
              <Button 
                className="w-full justify-center bg-[#EE5F3F] hover:bg-[#D94E30] text-white font-bold rounded-full"
              >
                Check Your Rate
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
