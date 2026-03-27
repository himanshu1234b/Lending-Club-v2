import { Link } from "wouter";

export function Footer() {
  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/LendingClubTeam", icon: "f" },
    { label: "Twitter", href: "https://twitter.com/LendingClub", icon: "𝕏" },
    { label: "Instagram", href: "https://www.instagram.com/lendingclub", icon: "in" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/lending-club", icon: "li" },
    { label: "Pinterest", href: "https://www.pinterest.com/lendingclub", icon: "p" },
  ];

  const disclaimers = [
    "1. For Personal Loans, APR ranges from 6.53% APR to 35.99% APR and origination/processing fee ranges from 0.00% to 8.00% of the loan amount. APRs and origination/processing fees are determined at the time of application. The lowest APR may be available to borrowers with excellent credit, subject to additional factors including, but not limited to, loan amount, loan term, and sufficient investor commitment. Advertised rates and fees are valid as of January 7, 2026, are subject to change without notice, and may not be available for all Personal Loan products.",
    "2. Savings are not guaranteed and depend upon various factors, including but not limited to interest rates, fees, term length, and making payments as agreed.",
    "3. Checking a rate through us generates a soft inquiry on a person's credit report, which does not impact that person's credit score. A hard credit inquiry, which may affect that person's credit score, only appears on the person's credit report if and when a loan is issued to the person.",
    "4. The APR discounted rate is a discount that some customers may receive for taking out a loan to pay down existing qualifying debt paid directly by LendingClub. Not all applicants will qualify for the discount.",
    "5. Between July 2025 to December 2025, 58% of LendingClub Personal Loans that were approved for funding on a given business day were disbursed within 24 hours. Actual availability of funds may vary.",
    "6. Standard data and message rates may apply to Mobile Banking services.",
    "7. Based on reviews collected by Trustpilot. This is one person's experience. Individual results may vary.",
  ];

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Footer Main Sections (4-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-20">
          
          {/* Column 1: WHAT WE OFFER */}
          <div>
            <h3 className="text-[#113B5E] text-base leading-relaxed uppercase tracking-[1px] font-extrabold mb-6">WHAT WE OFFER</h3>
            <ul className="space-y-3">
              {[
                "Personal Loans", "Personal Banking", "Auto Refinancing", 
                "Financing Solutions", "Business Loans", "Institutional Investing", 
                "Other Types of Loans"
              ].map(link => (
                <li key={link}>
                  <a href="#" className="text-[#0077B3] text-[17px] leading-relaxed font-normal">{link}</a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#" className="text-[#D8412E] text-[17px] font-bold flex items-center gap-1 group">
                  Apply for a Personal Loan <span className="text-[14px] group-hover:translate-x-0.5 transition-transform">❯</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D8412E] text-[17px] font-bold flex items-center gap-1 group">
                  Apply for a Bank Account <span className="text-[14px] group-hover:translate-x-0.5 transition-transform">❯</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: RESOURCES & LEGAL */}
          <div className="space-y-14">
            <div>
              <h3 className="text-[#113B5E] text-base leading-relaxed uppercase tracking-[1px] font-extrabold mb-6">RESOURCES</h3>
              <ul className="space-y-3">
                {["Resource Center", "Personal Loan Rates & Fees", "Member Benefits", "Customer Reviews", "Glossary"].map(link => (
                  <li key={link}>
                    <a href="#" className="text-[#0077B3] text-[17px] leading-relaxed font-normal">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#113B5E] text-base leading-relaxed uppercase tracking-[1px] font-extrabold mb-6">LEGAL</h3>
              <ul className="space-y-3">
                {[
                  "Terms of Use", "Privacy Policy", "California Notice of Collection", 
                  "Data Collection and Use", "Accessibility", "SEC Filing"
                ].map(link => (
                  <li key={link}>
                    <a href="#" className="text-[#0077B3] text-[17px] leading-relaxed font-normal">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: ABOUT US */}
          <div>
            <h3 className="text-[#113B5E] text-base leading-relaxed uppercase tracking-[1px] font-extrabold mb-6">ABOUT US</h3>
            <ul className="space-y-3">
              {[
                "CRA Public File", "Company", "Leadership", "Careers", "Media Center", 
                "Corporate Governance", "Investor Relations", "Contact"
              ].map(link => (
                <li key={link}>
                  <a href="#" className="text-[#0077B3] text-[17px] leading-relaxed font-normal">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: ACCOUNT & PLATFORM */}
          <div>
            <h3 className="text-[#113B5E] text-base leading-relaxed uppercase tracking-[1px] font-extrabold mb-6">ACCOUNT</h3>
            <ul className="space-y-3 mb-10">
              {["Sign In", "Mobile App", "Help"].map(link => (
                <li key={link}>
                  <a href="#" className="text-[#0077B3] text-[17px] leading-relaxed font-normal">{link}</a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <img src="/asset 21.svg" alt="" className="w-8 h-auto" />
                <a href="#" className="text-[#0077B3] text-[17px] leading-relaxed font-normal">Your Privacy Choices</a>
              </li>
            </ul>

            <div className="space-y-6">
              <h4 className="text-[#113B5E] font-bold text-[13px] tracking-wider uppercase leading-tight">
                POWERED BY THE LC<sup>TM</sup><br />PLATFORM
              </h4>
              <div className="flex items-center gap-2 mb-6">
                <img src="/asset 22.png" alt="LC" className="h-7 w-auto" />
              </div>
              
              <div className="flex flex-col gap-3">
                <a href="#" className="inline-block transition-opacity hover:opacity-80">
                  <img src="/asset 23.svg" alt="App Store" className="h-[44px]" />
                </a>
                <a href="#" className="inline-block transition-opacity hover:opacity-80">
                  <img src="/asset 24.svg" alt="Get it on Google Play" className="h-[44px]" />
                </a>
              </div>

              <div className="flex items-center gap-6 pt-10">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} className="text-[#C5D0D9] hover:text-[#0077B3] transition-colors">
                    {social.label === "Twitter" ? (
                      <span className="text-xl">𝕏</span>
                    ) : (
                      <span className="text-xl font-bold">{social.icon}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10"></div>

        {/* Logo/Address | Access Text | Trust Badges (3-Column Layout: 25%, 25%, 50%) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-10">
          {/* Column 1: Logo & Address (25%) */}
          <div className="flex-shrink-0 w-full lg:w-[25%]">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <img
                src="/asset 25.svg"
                alt="LendingClub"
                className="h-10 w-auto"
              />
            </Link>
            <div className="text-sm text-gray-500 space-y-1">
              <p>88 Kearny Street, Suite 600</p>
              <p>San Francisco, CA 94108</p>
            </div>
          </div>

          {/* Column 2: Access Text (25%) */}
          <div className="w-full lg:w-[25%]">
            <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
              If you have special access needs and are having problems accessing this website, please call{" "}
              <a href="tel:888-596-3157" className="text-[#0077B3] hover:underline font-bold">888-596-3157</a>.
            </p>
          </div>

          {/* Column 3: Trust Badges (50%) */}
          <div className="flex flex-wrap items-center gap-16 w-full lg:w-[50%] lg:justify-end">
            <img
              src="/asset 26.svg"
              alt="Equal Housing Lender"
              className="w-[7rem] opacity-90 transition-opacity hover:opacity-100"
              data-testid="badge-equal-housing"
            />
            <img
              src="/asset 27.svg"
              alt="Accredited Business"
              className="w-[7rem] opacity-90 transition-opacity hover:opacity-100"
              data-testid="badge-accredited"
            />
            <img
              src="/asset 28.svg"
              alt="VeriSign Secured"
              className="w-[7rem] opacity-90 transition-opacity hover:opacity-100"
              data-testid="badge-verisign"
            />
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="border-t border-gray-100 pt-8 text-[13px] text-gray-600 space-y-4 leading-relaxed font-medium">
          <p>
            Credit eligibility is not guaranteed. APR and other credit terms depend upon credit score and other key financing characteristics, including but not limited to the amount financed, loan term length, and credit usage and history.
          </p>
          {disclaimers.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
          <p className="pt-2">
            A representative example of payment terms for a Personal Loan is as follows: a borrower receives a loan of $19,658 for a term of 36 months, with an interest rate of 13.24% and a 6.00% origination fee of $1,179 for an APR of 17.63%. In this example, the borrower will receive $18,479 and will make 36 monthly payments of $665. Loan amounts range from $1,000 to $60,000 and loan term lengths range from 24 months to 84 months. Some amounts, rates, and term lengths may be unavailable in certain states.
          </p>
          <p>
            Unless otherwise specified, all credit and deposit products are provided by LendingClub Bank, N.A., Member FDIC, Equal Housing Lender ("LendingClub Bank"), a wholly-owned subsidiary of LendingClub Corporation, NMLS ID 167439. Credit products are subject to credit approval and may be subject to sufficient investor commitment. Deposit products are FDIC-insured up to $250,000 per depositor, per ownership category.
          </p>
          <p className="font-medium text-gray-500">
            "LendingClub," the "LC" symbol, "TopUp," and "DebtIQ" are trademarks of LendingClub Bank.
          </p>
          <p className="font-medium text-gray-500">© 2026 LendingClub Bank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
