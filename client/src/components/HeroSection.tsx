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
      className="bg-white sm:bg-[#000000] relative text-white overflow-hidden flex flex-col min-h-0 sm:min-h-[680px]"
    >
      {/* ── Background Image ── full cover, top-anchored so face is visible */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="w-auto h-[425px] sm:w-full sm:h-full object-cover object-top max-w-full sm:max-w-none"
        />
        {/*
          Bottom-fade gradient:
          - Top 35%: image fully visible (no overlay)
          - 35→65%: gentle dark ramp
          - 65%→100% (bottom): solid black — this is where text/cards sit
        */}
        {/* Mobile Gradient (White fade) */}
        <div
          className="absolute inset-0 block sm:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, rgba(255,255,255,0.2) 65%, rgba(255,255,255,0.8) 85%, #FFFFFF 95%)",
          }}
        />
        {/* Desktop Gradient (Black fade) */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.92) 82%, #000000 92%)",
          }}
        />
      </div>

      {/* ── Spacer pushes content to the bottom ── */}
      <div className="flex-1" />

      {/* ── Content Container (Responsive Layout) ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col h-full min-h-0 sm:min-h-[680px]">
        
        {/* TOP CONTENT (MOBILE ONLY) */}
        <div className="block sm:hidden px-6 pt-12 pb-6 w-full">
           <h1 className="font-black text-white leading-[1.1] mb-2" style={{ fontSize: "38px" }}>
             Personal loan rates starting as low as
             <br />
             <span style={{ color: "#74CCF4" }}>6.53% APR¹</span>
           </h1>
           <p className="text-white text-lg font-medium leading-tight max-w-[280px]">
             Keep more of what you earn and earn more on what you save.<sup className="text-[10px]">2</sup>
           </p>

           {/* Full-width blurred section wrapper */}
           <div className="mt-8 -mx-6 px-6 pt-10 pb-[45px] backdrop-blur-xl bg-white/40 border-y border-white/20">
             <h2 className="text-base font-bold text-white mb-3">
               What are you looking for?
             </h2>
             <p className="text-xs font-medium text-white/90">
               Check your rate. It won't impact your credit score.<sup>3</sup>
             </p>
           </div>
        </div>

        {/* Spacer to push content (desktop keeps it bottom, mobile has a gap) */}
        <div className="flex-1" />

        {/* BOTTOM CONTENT (Common across both, but headline is hidden on mobile here) */}
        <div className="w-full px-4 sm:px-6 lg:px-10 pb-8 lg:pb-12">
          
          {/* Desktop Headline (Hidden on mobile) */}
          <div className="hidden sm:block">
            <p className="text-xs sm:text-sm font-extrabold mb-3 tracking-wider" style={{ color: "#74CCF4" }}>
              Personal loan rates starting as low as{" "}
              <span className="font-extrabold text-white">6.53% APR¹</span>
            </p>
            <h1
              className="font-black leading-[1.1] mb-4 max-w-2xl"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.03em" }}
            >
              <span className="text-white">Your finances matter to you</span>
              <br className="hidden sm:block" />
              <span style={{ color: "#74CCF4" }}> and that matters to us.</span>
            </h1>
            <p className="text-sm sm:text-base mb-7 max-w-md leading-relaxed" style={{ color: "#B8CDD9" }}>
              Keep more of what you earn and earn more on what you save.<sup className="text-[10px]">2</sup>
            </p>
          </div>

          {/* MOBILE CONTENT WRAPPER - Unified Blurred Semi-transparent area with no border-radius as requested */}
           <div className="block sm:hidden -mx-4 px-4 pt-10 pb-20 backdrop-blur-2xl bg-white shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.3)] relative z-20 -mt-10">
            {/* ── Product Cards ── */}
            <div className="grid grid-cols-1 gap-4 w-full">
              {CARDS.map((card, index) => (
                <div
                  key={card.id}
                  className={`relative flex flex-col rounded-2xl p-5 border border-gray-100 shadow-sm ${
                    index === 0 ? "-mt-[60px] sm:mt-0 z-30" : ""
                  }`}
                  style={{ backgroundColor: "#FFFFFF" }}
                  data-testid={`card-product-${card.id}`}
                >
                  {card.hasBadge && (
                    <span
                      className="absolute -top-3 right-3 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-sm z-10"
                      style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
                    >
                      {card.badge}
                    </span>
                  )}
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-11 h-11 mb-3 shrink-0"
                  />
                  <h3
                    className="font-bold text-base leading-snug mb-2"
                    style={{ color: "#113B5E" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-snug flex-grow mb-4"
                    style={{ color: "#5A7A8E" }}
                  >
                    {card.desc}
                  </p>
                  {card.sub && (
                    <p className="text-xs font-semibold mb-3" style={{ color: "#0077B3" }}>
                      {card.sub}
                    </p>
                  )}
                  <button
                    className="w-full border-2 font-bold rounded-lg py-2.5 text-sm transition-colors"
                    style={{ borderColor: "#0077B3", color: "#0077B3", backgroundColor: "transparent" }}
                    data-testid={`btn-check-rate-${card.id}`}
                  >
                    Check Your Rate
                  </button>
                </div>
              ))}
            </div>

            {/* ── Trust links (Mobile) ── */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-2 text-[10px]" style={{ color: "#5A7A8E" }}>
              <a href="#" className="flex items-center gap-1.5 transition-colors">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Respond to Mail Offer
              </a>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="uppercase tracking-wide font-semibold text-[9px]">
                  Privacy &amp; Security Protection
                </span>
              </div>
            </div>
          </div>

          {/* DESKTOP CONTENT (Hidden on mobile) */}
          <div className="hidden sm:block">
            {/* "What are you looking for?" */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-1">
                What are you looking for?
              </h2>
              <p className="text-sm" style={{ color: "#8BAABB" }}>
                Check your rate. It won't impact your credit score.<sup>3</sup>
              </p>
            </div>

            {/* ── Product Cards ── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 w-full">
              {CARDS.map((card) => (
                <div
                  key={card.id}
                  className="relative flex flex-col rounded-2xl p-5"
                  style={{ backgroundColor: "#F0F4F8" }}
                  data-testid={`card-product-${card.id}`}
                >
                  {card.hasBadge && (
                    <span
                      className="absolute -top-3.5 right-3 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-md z-10"
                      style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
                    >
                      {card.badge}
                    </span>
                  )}
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-11 h-11 mb-3 shrink-0"
                  />
                  <h3
                    className="font-extrabold text-sm leading-snug mb-2"
                    style={{ color: "#113B5E" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[11px] leading-snug flex-grow mb-3"
                    style={{ color: "#5A7A8E" }}
                  >
                    {card.desc}
                  </p>
                  {card.sub && (
                    <p className="text-[10px] font-semibold mb-2" style={{ color: "#0077B3" }}>
                      {card.sub}
                    </p>
                  )}
                  <button
                    className="w-full border font-bold rounded-lg py-2 text-xs transition-colors"
                    style={{ borderColor: "#0077B3", color: "#0077B3", backgroundColor: "transparent" }}
                    data-testid={`btn-check-rate-${card.id}`}
                  >
                    Check Your Rate
                  </button>
                </div>
              ))}
            </div>

            {/* ── Trust links (Desktop) ── */}
            <div className="flex flex-wrap items-center gap-5 text-xs" style={{ color: "#8BAABB" }}>
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
                <span className="uppercase tracking-wide font-semibold text-[9px]">
                  Privacy &amp; Security Protection
                </span>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
