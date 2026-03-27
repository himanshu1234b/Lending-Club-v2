import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const PRODUCTS_TABS = [
  { id: "personal", label: "Personal Loans" },
  { id: "auto", label: "Auto Refinancing" },
  { id: "banking", label: "Banking" },
];

const PRODUCTS_CONTENT = {
  personal: {
    image: "/asset 7.jpeg",
    alt: "Mother and daughter sharing a joyful moment in their kitchen",
    heading: "Up to $60,000 with rates starting as low as 6.53% APR¹",
    body: "With the ability to choose a loan amount of up to $60,000, LendingClub offers fixed rates and a monthly repayment plan to fit within your budget. We understand the importance of getting the money you need, so we work to have funds disbursed to you quickly upon loan approval.",
    cta: "Learn More",
    href: "#",
  },
  auto: {
    image: "https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F1yatXHruVG2msVLx4RR6nB%2Fa60707343f988116783a4c832e1157f1%2Fman-and-children.jpg&w=1920&q=75",
    alt: "Man and children happy about auto loan savings",
    heading: "Refinance and drive away with savings",
    body: "Put more money back in your pocket by refinancing your car loan with LendingClub. There are no prepayment penalties with LendingClub auto loan refinancing, and checking your rate will not impact your credit score.",
    cta: "Learn More",
    href: "#",
  },
  banking: {
    image: "https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F2hXsAFbqOgqzWhz3tLHvlH%2Fcd4b261949ad421b85b4b52ae0567c78%2Fwoman-working.jpg&w=1920&q=75",
    alt: "Woman working with LendingClub banking app",
    heading: "LevelUp your earnings with our bank accounts",
    body: "Our award-winning checking and savings products work as hard for your money as you do. Whether it's our rewards-earning LevelUp Checking account or our interest-earning LevelUp Savings account and CDs, we help you take your finances to the next level.",
    cta: "Learn More",
    href: "#",
  },
};

const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Apply online in minutes",
    description: "Get customized loan options based on what you tell us.",
    image: "https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F4WtKE18RnUTV2FNK6g6uXF%2Fd521aea3a8d9b7f8ae75e029358268d0%2FHIW.png&w=1200&q=75",
  },
  {
    number: "02",
    title: "Choose a loan offer",
    description: "Select the rate, term, and payment options you like best.",
    image: "https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F6c9xYnN3ToK8cVWg93eLRK%2Fdae40b25d548a8d857d821c32c2be37c%2FPL_Module_Pg02.png&w=1200&q=75",
  },
  {
    number: "03",
    title: "Get funded in as little as 24 hours",
    description: "Once your loan is approved for funding, we'll pay your creditors directly or send the money in as little as 24 hours.⁵",
    image: "https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2FfZzeGAjnsj6WUnJcLklY8%2Fe5f090f5db66fafd40fa101611767a6c%2FPL_Module_Pg03.png&w=1200&q=75",
  },
];

const FAQ_ITEMS = [
  {
    question: "How is LendingClub different?",
    answer:
      "LendingClub is the leading digital marketplace bank in the U.S., connecting borrowers with investors since 2007. Our LC™ Marketplace Platform has helped more than 5 million members get over $90 billion in personal loans so they can save money, pay down debt, and take control of their financial future. And because we don't have any brick-and-mortar locations, we're able to keep costs low and pass the savings back to you in the form of great interest rates.",
  },
  {
    question: "What is a personal loan?",
    answer:
      "A personal loan is money lent through a financial institution like a bank or an online lending marketplace that can be used to pay down credit cards, consolidate debt, or cover a wide range of expenses. Personal loans come with fixed monthly payments over a set period of time.",
  },
  {
    question: "How is a personal loan different than a credit card?",
    answer:
      "Instead of credit limits, introductory rates, or revolving balances, personal loans come with a fixed rate and payment that you choose up front. No additional interest will be added to your loan once you lock in your rate, so nearly all of your monthly payment goes to quickly reducing your balance and paying down your debt.",
  },
  {
    question: "Will checking my rate hurt my credit score?",
    answer:
      "Checking your rate with LendingClub Bank has absolutely no impact to your credit score because we use a soft credit pull. A hard credit pull that could impact your score will only occur if you continue with your loan and your money is sent.",
  },
  {
    question: "How can I protect myself from scams?",
    answer:
      "Scammers often try to collect personal and/or financial information from consumers by posing as employees of philanthropic organizations or financial services companies. Be cautious about providing personal or financial information to anyone, even if they claim to be from a company you already do business with.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-start w-full text-left group"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${question.slice(0, 20).replace(/\s+/g, "-")}`}
      >
        <span className="text-[#113B5E] font-bold text-base pr-4 group-hover:text-[#0077B3] transition-colors">
          {question}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#0077B3] shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#0077B3] shrink-0 mt-0.5" />
        )}
      </button>
      {open && (
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"personal" | "auto" | "banking">("personal");
  const product = PRODUCTS_CONTENT[activeTab];

  const [activeHiw, setActiveHiw] = useState(0);
  const hiwTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tabTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const restartHiwTimer = () => {
    if (hiwTimerRef.current) clearInterval(hiwTimerRef.current);
    hiwTimerRef.current = setInterval(() => {
      setActiveHiw((prev) => (prev + 1) % HOW_IT_WORKS_STEPS.length);
    }, 4000);
  };

  const restartTabTimer = () => {
    if (tabTimerRef.current) clearInterval(tabTimerRef.current);
    tabTimerRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = PRODUCTS_TABS.findIndex((t) => t.id === prev);
        const nextIndex = (currentIndex + 1) % PRODUCTS_TABS.length;
        return PRODUCTS_TABS[nextIndex].id as any;
      });
    }, 5000);
  };

  useEffect(() => {
    restartHiwTimer();
    restartTabTimer();
    return () => { 
      if (hiwTimerRef.current) clearInterval(hiwTimerRef.current);
      if (tabTimerRef.current) clearInterval(tabTimerRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-[Mulish,sans-serif]">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />

        {/* ── "We're rewriting the rules" ── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[2rem] leading-[1.125em] lg:text-[3rem] lg:leading-[1.0833333333em] font-black text-[#113B5E] text-center mb-[65px] max-w-[990px] mx-auto">
              We're rewriting the rules of traditional banking, and we only win
              when our customers succeed. We've helped over 5 million members
              reach their goals, and we're just getting started!
            </h2>

            {/* Redesigned Tab Row */}
            <div className="hidden sm:flex justify-center flex-wrap gap-8 md:gap-16 lg:gap-24 mb-16 px-4">
              {PRODUCTS_TABS.map((tab) => (
                <div 
                  key={tab.id} 
                  className="flex flex-col items-center group cursor-pointer w-full sm:w-auto" 
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    restartTabTimer();
                  }}
                >
                  <button
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      restartTabTimer();
                    }}
                    data-testid={`tab-${tab.id}`}
                    className={`text-[17px] font-extrabold pb-4 transition-colors duration-500 ${
                      activeTab === tab.id ? "text-[#113B5E]" : "text-[#113B5E]/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                  <div className="relative w-full sm:w-[180px] md:w-[240px] lg:w-[320px] h-[3px] bg-[#D8E1E8] overflow-hidden">
                    <div className={`absolute inset-0 bg-[#EE5F3F] transition-transform duration-700 ease-in-out origin-left ${
                      activeTab === tab.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Image Column (Left on Desktop) */}
              <div className="order-1 lg:order-1 relative group">
                {/* Red Brand Accent */}
                <div className="absolute top-8 left-8 -right-4 -bottom-4 bg-[#EE5F3F] rounded-2xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
                
                <div className="rounded-2xl overflow-hidden shadow-xl relative min-h-[380px] bg-white border border-gray-100">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeTab}
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-[380px] object-cover"
                      data-testid={`img-product-${activeTab}`}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Text Column (Right on Desktop) */}
              <div className="order-2 lg:order-2">
                <h3 className="text-2xl md:text-3xl lg:text-[2.25rem] font-black text-[#113B5E] mb-6 leading-[1.1666666667em]">
                  {product.heading}
                </h3>
                <p className="text-[#4A6A80] text-base leading-relaxed mb-10 max-w-xl">
                  {product.body}
                </p>
                <a
                  href={product.href}
                  data-testid="btn-product-learn-more"
                  className="inline-block font-bold px-12 py-3 text-sm transition-all rounded-lg border border-[#113B5E] text-[#113B5E] hover:bg-[#0077B3] hover:text-white hover:border-[#0077B3]"
                >
                  {product.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── How a Personal Loan Works ── */}
        <section className="py-16 lg:py-20 bg-white" data-testid="section-how-it-works">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

              {/* ── LEFT: Auto-switching app screenshot ── */}
              <div className="w-full lg:w-[48%] shrink-0">
                <div className="relative rounded-3xl overflow-hidden bg-transparent aspect-[4/3]">
                  {HOW_IT_WORKS_STEPS.map((step, i) => (
                    <img
                      key={step.number}
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-700"
                      style={{ opacity: activeHiw === i ? 1 : 0 }}
                      data-testid={`img-hiw-${step.number}`}
                    />
                  ))}

                  {/* Dot indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {HOW_IT_WORKS_STEPS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setActiveHiw(i); restartHiwTimer(); }}
                        className="w-2 h-2 transition-all duration-300"
                        style={{
                          backgroundColor: activeHiw === i ? "#EE5F3F" : "#F5C4B8",
                          transform: activeHiw === i ? "scale(1.2)" : "scale(1)",
                          borderRadius: "2px",
                        }}
                        data-testid={`dot-hiw-${i}`}
                        aria-label={`Show step ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Heading + numbered steps + CTA ── */}
              <div className="w-full lg:w-[52%]">
                <h2
                  className="text-2xl md:text-[30px] font-extrabold leading-tight mb-8"
                  style={{ color: "#113B5E" }}
                  data-testid="heading-how-it-works"
                >
                  How a personal loan with LendingClub works
                </h2>

                {/* Steps */}
                <div className="flex flex-col gap-6 mb-8">
                  {HOW_IT_WORKS_STEPS.map((step) => (
                    <div
                      key={step.number}
                      className="text-left px-2"
                      data-testid={`step-hiw-${step.number}`}
                    >
                      <h3
                        className="font-extrabold text-[20px] leading-snug mb-2"
                        style={{ color: "#0A3A5C" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[16px] leading-relaxed" style={{ color: "#4A6A80" }}>
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/verify"
                  className="inline-block font-bold px-12 py-3 text-sm transition-colors"
                  style={{ backgroundColor: "#ffffff", color: "#113B5E", border: "1px solid #113B5E", borderRadius: "8px" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = "#0077B3";
                    el.style.color = "#ffffff";
                    el.style.borderColor = "#0077B3";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = "#ffffff";
                    el.style.color = "#113B5E";
                    el.style.borderColor = "#113B5E";
                  }}
                  data-testid="btn-start-verification-hiw"
                >
                  Start Verification
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bank Smarter / Awards ── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#113B5E] mb-4 leading-tight">
                  Bank smarter with LendingClub
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Make the most of your money with LendingClub, named 2024's Best Online Bank
                  by GOBankingRates. Our award-winning checking, savings, and loan products
                  are designed to help our members achieve their financial goals.
                </p>
                <button
                  data-testid="btn-learn-more-banking"
                  className="font-bold px-12 py-3 text-sm transition-colors"
                  style={{ backgroundColor: "#ffffff", color: "#113B5E", border: "1px solid #113B5E", borderRadius: "8px" }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.backgroundColor = "#0077B3";
                    btn.style.color = "#ffffff";
                    btn.style.borderColor = "#0077B3";
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.backgroundColor = "#ffffff";
                    btn.style.color = "#113B5E";
                    btn.style.borderColor = "#113B5E";
                  }}
                >
                  Learn More
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F4Mv1ud1qSTRZjXaU4j1qGl%2Fc73533da2d21ff25d1bd5ad7f351ae61%2Fawards2026.png&w=1024&q=75"
                  alt="2026 Awards"
                  className="max-w-sm w-full"
                  data-testid="img-awards"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── App Download ── */}
        <section className="py-24 bg-[#EFF5FA]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image — left side */}
              <div className="flex justify-center order-1 w-full">
                <img
                  src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F14Hq7vxTrLPpeXFCACXMZa%2Ffe41e3745fd28cad2dd657217645d61e%2FGroup_1000002031.svg&w=768&q=75"
                  alt="LendingClub mobile app screens"
                  className="max-w-sm w-full"
                  data-testid="img-app-screens"
                />
              </div>
              {/* Text — right side */}
              <div className="order-2 w-full">
                <h2
                  className="mb-4 font-black"
                  style={{
                    color: "#113B5E",
                    fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                    lineHeight: "1.1666666667em",
                  }}
                >
                  Your membership gets better in the app
                </h2>
                <p className="text-base mb-4" style={{ color: "#4A6A80" }}>
                  Make the smartest money move of the day.
                </p>
                <p className="text-sm mb-8" style={{ color: "#4A6A80" }}>
                  Download the LendingClub app now.⁶
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a href="https://itunes.apple.com/us/app/ft-mobile/id532638447?mt=8" data-testid="link-app-store">
                    <img
                      src="https://images.ctfassets.net/orqped9h4wgz/7Hwvsg30yVjcfTiY2ABJdP/dcb6ed484a4ffb146e5705635015a5e3/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                      alt="Download on the App Store"
                      className="h-10"
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.q2e.firsttradeunionbank3351.mobile.production" data-testid="link-google-play">
                    <img
                      src="https://images.ctfassets.net/orqped9h4wgz/13w2Wt5wiT596O9V3Z3ZZo/1596694c340a3876d2cf07237748fc6d/Google_Play_Store_badge_EN__5_.svg"
                      alt="Get it on Google Play"
                      className="h-10"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials & Stats ── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#113B5E] text-center mb-12">
              Join over 5 million members
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <blockquote className="text-xl md:text-2xl font-semibold text-[#113B5E] leading-relaxed mb-6">
                  "Amazing how efficient and quickly the process was. If you are
                  looking for superior service this company deserves a gold star.
                  Absolutely recommend doing business here!"
                  <sup>7</sup>
                </blockquote>
                <p className="text-gray-600 font-bold mb-6">— Amanda W.</p>
                <a
                  href="#"
                  className="inline-block text-[#0077B3] font-bold text-sm underline underline-offset-2 hover:text-[#0055A3]"
                  data-testid="link-read-more-reviews"
                >
                  Read More Reviews
                </a>

                {/* Stats Row */}
                <div className="flex flex-row items-center mt-10">
                  <div className="flex flex-col items-center flex-1 px-1">
                    <img
                      src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F2Ze1d8RfxR6Zy4MPgzbsfF%2F8828b542cfc44cb29f41452bacaafc86%2F_100B_.svg&w=256&q=75"
                      alt="$100B+"
                      className="h-20"
                      data-testid="stat-100b"
                    />
                  </div>
                  <div className="w-px self-stretch bg-gray-300 mx-1" />
                  <div className="flex flex-col items-center flex-1 px-1">
                    <img
                      src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2FsWxbeO4Wn0aOTOoPJ8NdN%2Fc1ba292d505420fa99be4cd5dc9b0707%2F5M.svg&w=256&q=75"
                      alt="5M+"
                      className="h-20"
                      data-testid="stat-5m"
                    />
                  </div>
                  <div className="w-px self-stretch bg-gray-300 mx-1" />
                  <div className="flex flex-col items-center flex-1 px-1">
                    <img
                      src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F2gFq2AcjbnfazY39dSKhP7%2Fcba1005d5c51c97c547fdcc9aba1b5b5%2F10K_Trustpilot.svg&w=256&q=75"
                      alt="10K+ Trustpilot Reviews"
                      className="h-20"
                      data-testid="stat-trustpilot"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F80cmCydXU92Eabp4rwdQY%2Fac1f6ee08309f9f765d5dc1eaac24002%2FHome_Page_Review_Photo_Updated2025.png&w=3840&q=75"
                  alt="Happy LendingClub member"
                  className="h-auto"
                  style={{ maxWidth: "460px", width: "100%", margin: "0 auto", objectFit: "contain", display: "block", background: "transparent" }}
                  data-testid="img-testimonial-photo"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-[#F3F5F9]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left: Heading — 35% */}
              <div className="lg:sticky lg:top-8 w-full lg:w-[35%] shrink-0">
                <h2 className="text-2xl md:text-[32px] font-extrabold text-[#113B5E] leading-tight mb-4">
                  Questions?<br />We've Got Answers
                </h2>
                <p className="text-gray-500 text-base">
                  Can't find what you're looking for?
                </p>
              </div>
              {/* Right: FAQ items + button — remaining 65% */}
              <div className="w-full lg:flex-1">
                <div className="mb-6">
                  {FAQ_ITEMS.map((item) => (
                    <FAQItem key={item.question} question={item.question} answer={item.answer} />
                  ))}
                </div>
                <button
                  data-testid="link-help-center"
                  className="font-bold px-12 py-3 text-sm transition-colors"
                  style={{ backgroundColor: "#ffffff", color: "#113B5E", border: "1px solid #113B5E", borderRadius: "8px" }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.backgroundColor = "#0077B3";
                    btn.style.color = "#ffffff";
                    btn.style.borderColor = "#0077B3";
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.backgroundColor = "#ffffff";
                    btn.style.color = "#113B5E";
                    btn.style.borderColor = "#113B5E";
                  }}
                >
                  Visit our Help Center
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
