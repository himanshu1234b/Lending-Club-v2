import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, X, Menu } from "lucide-react";

const NAV_LINKS = [
  { name: "Borrowing", hasDropdown: true },
  { name: "Banking", hasDropdown: true },
  { name: "Business", hasDropdown: true },
  { name: "Investing", hasDropdown: true },
  { name: "Resources", hasDropdown: false },
  { name: "Help", hasDropdown: false },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2 shrink-0" data-testid="link-logo">
            {/* Official LC logo from their CDN */}
            <img
              src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F430y3e8y3R3HxGyrCyFEIp%2Ff66f71535483f5f7d79ab1bfbe942f2d%2Ffooter-logo-9446281179e20db6c0c3fa91d5683a2e.svg&w=480&q=75"
              alt="LendingClub"
              className="h-8"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = document.createElement("span");
                fallback.className = "text-xl font-extrabold text-[#113B5E]";
                fallback.textContent = "LendingClub";
                e.currentTarget.parentNode?.appendChild(fallback);
              }}
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                className="flex items-center gap-0.5 px-3 py-2 text-sm font-semibold text-[#113B5E] hover:text-[#0077B3] transition-colors rounded-md hover:bg-[#0077B3]/5"
                data-testid={`nav-${link.name.toLowerCase()}`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
              </button>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className="px-5 py-2 text-sm font-bold text-[#0077B3] border border-[#0077B3] rounded-full hover:bg-[#0077B3]/5 transition-colors"
              data-testid="btn-sign-in"
            >
              Sign In
            </button>
            <button
              className="px-5 py-2 text-sm font-bold text-white bg-[#EE5F3F] rounded-full hover:bg-[#D94E30] transition-colors shadow-sm"
              data-testid="btn-check-rate-nav"
            >
              Check Your Rate
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden p-2 text-[#113B5E] hover:text-[#0077B3]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            data-testid="btn-mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="max-w-[1400px] mx-auto px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                className="flex justify-between items-center w-full px-3 py-3.5 text-sm font-semibold text-[#113B5E] border-b border-gray-50 hover:bg-gray-50 rounded-md transition-colors"
                data-testid={`mobile-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                className="w-full py-3 text-sm font-bold text-[#0077B3] border border-[#0077B3] rounded-full hover:bg-[#0077B3]/5 transition-colors"
                data-testid="mobile-btn-sign-in"
              >
                Sign In
              </button>
              <button
                className="w-full py-3 text-sm font-bold text-white bg-[#EE5F3F] rounded-full hover:bg-[#D94E30] transition-colors"
                data-testid="mobile-btn-check-rate"
              >
                Check Your Rate
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
