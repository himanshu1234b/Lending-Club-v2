import heroImage from "@assets/LC_Hero_Image_lg.jpg&w=3840&q=75_1771652329889.png";

const CARDS = [
  {
    id: "debt",
    badge: "Up to 5% APR discount⁴",
    hasBadge: true,
    icon: "https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2FGTEk4sbaPlWPqa5HMr3l9%2F8bb90206e28c6ecf63527ce1f2e66cd2%2F_Graphicons_base.svg&w=96&q=75",
    title: "Debt Paydown Loan",
    desc: "A debt consolidation loan up to $60,000 to pay off credit card debt or personal loan balances, with the option to get extra cash.",
    sub: "Rates starting at 6.53% APR¹",
  },
  {
    id: "cash",
    hasBadge: false,
    icon: "https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F1BcDwu8woS0Udh3GtLTBk5%2F7143bfcc9707a58b86d87a6ac72350b0%2F_Graphicons_base__1_.svg&w=96&q=75",
    title: "Cash Loan",
    desc: "A personal loan up to $60,000 to cover expenses like a major purchase, home improvements, life events, etc.",
    sub: "",
  },
  {
    id: "expense",
    hasBadge: false,
    icon: "https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2FPAI9KKYKj07gxZFYHMHXW%2Fe922d5ebc335e99f32446b372485a523%2F_Graphicons_base__2_.svg&w=96&q=75",
    title: "Pay for a Large Expense",
    desc: "Get up to $65,000 to cover medical treatments, wellness services, tutoring, large retail purchases, and more.",
    sub: "",
  },
  {
    id: "auto",
    hasBadge: false,
    icon: "https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F30QRTLfPiWmCM3kndvnwM3%2Fabfe00d3007f15f9770c6f225041d9a6%2FCar_Refi_Loan.svg&w=96&q=75",
    title: "Auto Loan Refinance",
    desc: "Flexible terms and competitive rates could help you pay less than you are right now.",
    sub: "",
  },
];

export function HeroSection() {
  return (
    <section className="relative bg-[#051121] text-white overflow-hidden">
      {/* Background Image — right-aligned, fades to dark on the left */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center md:object-right"
        />
        {/* Strong dark gradient so left text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051121] from-30% via-[#051121]/85 via-55% to-[#051121]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

        {/* ── Rate tag + Headline ── */}
        <p className="text-[#89D3F8] font-bold text-sm mb-3">
          Personal loan rates starting as low as{" "}
          <span className="text-white font-extrabold">6.53% APR¹</span>
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3 max-w-xl">
          Your finances matter to you
          <br />
          <span className="text-[#89D3F8]">and that matters to us.</span>
        </h1>

        <p className="text-gray-300 text-sm md:text-base mb-8 max-w-sm">
          Keep more of what you earn and earn more on what you save.<sup>2</sup>
        </p>

        {/* ── "What are you looking for?" label ── */}
        <div className="mb-5">
          <h2 className="text-base md:text-lg font-bold mb-0.5">What are you looking for?</h2>
          <p className="text-gray-400 text-xs">
            Check your rate. It won't impact your credit score.<sup>3</sup>
          </p>
        </div>

        {/* ── Product Cards ── 
            2 columns on small screens, 4 on xl.
            Cards are fully fluid — no fixed pixel widths.
        ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 w-full">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="relative bg-[#F3F5F9] rounded-2xl p-4 text-[#113B5E] flex flex-col overflow-visible"
              data-testid={`card-product-${card.id}`}
            >
              {/* Green badge — absolute, sits above the card */}
              {card.hasBadge && (
                <span className="absolute -top-3 right-3 bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap z-10">
                  {card.badge}
                </span>
              )}

              {/* Icon */}
              <img
                src={card.icon}
                alt={card.title}
                className="w-10 h-10 mb-3 shrink-0"
              />

              {/* Title */}
              <h3 className="font-extrabold text-sm leading-snug mb-2">{card.title}</h3>

              {/* Description */}
              <p className="text-[11px] text-gray-500 leading-snug flex-grow mb-3">
                {card.desc}
              </p>

              {/* Sub-rate (first card only) */}
              {card.sub && (
                <p className="text-[10px] text-[#0077B3] font-semibold mb-2">{card.sub}</p>
              )}

              {/* CTA */}
              <button
                className="w-full border border-[#0077B3] text-[#0077B3] hover:bg-[#0077B3] hover:text-white font-bold rounded-lg py-2 text-xs transition-colors"
                data-testid={`btn-check-rate-${card.id}`}
              >
                Check Your Rate
              </button>
            </div>
          ))}
        </div>

        {/* ── Bottom Links ── */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-gray-300">
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-white hover:underline transition-colors"
            data-testid="link-mail-offer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Respond to Mail Offer
          </a>
          <div className="flex items-center gap-1.5">
            <img
              src="https://www.lendingclub.com/_next/static/media/heroPrivacySecurityPd.fd7e4b49.svg"
              alt="Privacy & Security Protection"
              className="h-4"
              onError={(e) => {
                const parent = e.currentTarget.parentElement;
                if (parent) parent.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg><span class="ml-1.5">PRIVACY &amp; SECURITY PROTECTION</span>';
              }}
            />
            <span>PRIVACY &amp; SECURITY PROTECTION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
