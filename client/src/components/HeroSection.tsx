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
    <section
      className="relative text-white overflow-hidden min-h-[620px] flex items-stretch"
      style={{ backgroundColor: "#030E1C" }}
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center lg:object-right"
        />
        {/*
          Real LC gradient:
          Left 40%  → solid #030E1C (text is always readable)
          40→60%   → fades to ~70% opacity (transition zone)
          60→100%  → fades to near-transparent (image shows on right)
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #030E1C 0%, #030E1C 38%, rgba(3,14,28,0.92) 48%, rgba(3,14,28,0.72) 60%, rgba(3,14,28,0.18) 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16 flex flex-col justify-center">

        {/* Text block — constrained to left ~55% on desktop so image shows right */}
        <div className="w-full lg:max-w-[56%]">

          {/* Rate pill */}
          <p
            className="text-xs sm:text-sm font-semibold mb-4 tracking-wide"
            style={{ color: "#74CCF4" }}
          >
            Personal loan rates starting as low as{" "}
            <span className="font-extrabold text-white">6.53% APR¹</span>
          </p>

          {/* Main headline */}
          <h1
            className="font-extrabold leading-[1.15] mb-4"
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="text-white">Your finances matter to you</span>
            <br />
            <span style={{ color: "#74CCF4" }}>and that matters to us.</span>
          </h1>

          {/* Sub-text */}
          <p
            className="text-sm sm:text-base mb-8 max-w-md leading-relaxed"
            style={{ color: "#A8C7D8" }}
          >
            Keep more of what you earn and earn more on what you save.
            <sup className="text-[10px]">2</sup>
          </p>

          {/* "What are you looking for?" */}
          <div className="mb-5">
            <h2 className="text-base sm:text-lg font-bold text-white mb-1">
              What are you looking for?
            </h2>
            <p className="text-xs" style={{ color: "#7D9AAE" }}>
              Check your rate. It won't impact your credit score.
              <sup>3</sup>
            </p>
          </div>
        </div>

        {/* ── Product Cards — full width ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-7 w-full">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="relative flex flex-col rounded-2xl p-4 sm:p-5"
              style={{ backgroundColor: "#F0F4F8" }}
              data-testid={`card-product-${card.id}`}
            >
              {/* Badge */}
              {card.hasBadge && (
                <span
                  className="absolute -top-3.5 right-3 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-md z-10"
                  style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
                >
                  {card.badge}
                </span>
              )}

              {/* Icon */}
              <img
                src={card.icon}
                alt={card.title}
                className="w-9 h-9 sm:w-11 sm:h-11 mb-3 shrink-0"
              />

              {/* Title */}
              <h3
                className="font-extrabold text-sm leading-snug mb-2"
                style={{ color: "#113B5E" }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="text-[11px] leading-snug flex-grow mb-3"
                style={{ color: "#5A7A8E" }}
              >
                {card.desc}
              </p>

              {/* Sub-rate */}
              {card.sub && (
                <p
                  className="text-[10px] font-semibold mb-2"
                  style={{ color: "#0077B3" }}
                >
                  {card.sub}
                </p>
              )}

              {/* CTA button */}
              <button
                className="w-full border font-bold rounded-lg py-2 text-[11px] sm:text-xs transition-colors"
                style={{
                  borderColor: "#0077B3",
                  color: "#0077B3",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0077B3";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#0077B3";
                }}
                data-testid={`btn-check-rate-${card.id}`}
              >
                Check Your Rate
              </button>
            </div>
          ))}
        </div>

        {/* ── Bottom trust links ── */}
        <div className="flex flex-wrap items-center gap-5 text-xs" style={{ color: "#7D9AAE" }}>
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            data-testid="link-mail-offer"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Respond to Mail Offer
          </a>

          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="uppercase tracking-wide font-semibold text-[10px]">
              Privacy &amp; Security Protection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
