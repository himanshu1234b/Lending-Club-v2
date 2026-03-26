import { Link } from "wouter";

export function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Investor Relations",
        "Media Center",
        "Social Impact",
      ],
    },
    {
      title: "Products",
      links: [
        "Personal Loans",
        "Business Loans",
        "Auto Refinancing",
        "Patient Solutions",
        "LevelUp Checking",
        "LevelUp Savings",
        "CDs",
      ],
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Resource Center",
        "Rates & Fees",
        "Help Center",
        "Contact Us",
        "Security",
      ],
    },
    {
      title: "Legal",
      links: [
        "Terms of Use",
        "Privacy Policy",
        "Patriot Act",
        "Accessibility",
        "Licenses",
        "Preference Center",
      ],
    },
  ];

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

        {/* Logo + Address */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="bg-[#0077B3] p-1.5 rounded-sm">
              <div className="w-5 h-5 border-2 border-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-[#113B5E] tracking-tight">LendingClub</span>
          </Link>
          <p className="text-sm text-gray-500">88 Kearny Street, Suite 600</p>
          <p className="text-sm text-gray-500">San Francisco, CA 94108</p>
          <p className="text-xs text-gray-500 mt-2">
            If you have special access needs and are having problems accessing this website, please call{" "}
            <a href="tel:888-596-3157" className="text-[#0077B3] hover:underline font-medium">888-596-3157</a>.
          </p>
        </div>

        {/* Top Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[#113B5E] font-bold mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-[#0077B3] text-sm transition-colors"
                    >
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

        {/* Social + Badges */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div className="flex gap-5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#0077B3] hover:border-[#0077B3] transition-colors text-xs font-bold"
                data-testid={`link-social-${s.label.toLowerCase()}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2FTFLaSnHm8EWhnLFLztUHs%2Fcf998fae6a2af55c30d47f77ada17b05%2Fequal-housing-d16d75efa073487c9240a00f63c0dff3__1_.svg&w=256&q=75"
              alt="Equal Housing Lender"
              className="h-8"
              data-testid="badge-equal-housing"
            />
            <img
              src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F3DJ0HimAiud33PTGEkoyy0%2Ffe8dd5993d3cfa41cced566e7dc9bcfc%2Faccredited-business-e985aa65c32c383c9fc3937216b214cd.svg&w=256&q=75"
              alt="Accredited Business"
              className="h-8"
              data-testid="badge-accredited"
            />
            <img
              src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F6HUat6EBbfWqRaS4F3MyNq%2F113ff004c08829e8fa0965233a534834%2Fveri-sign-9f261f90e9b94fff5a44feb82f07c280.svg&w=480&q=75"
              alt="VeriSign Secured"
              className="h-8"
              data-testid="badge-verisign"
            />
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="border-t border-gray-100 pt-8 text-xs text-gray-400 space-y-3 leading-relaxed">
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
