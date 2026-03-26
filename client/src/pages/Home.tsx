import { useState } from "react";
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
    image: "https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F78Ijn41dqqjYyTjJMl87nc%2Fb0876b30a9c54d2908cab2301248fc15%2FLC_Hero_Image_lg.jpg&w=1920&q=75",
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

  return (
    <div className="min-h-screen flex flex-col bg-white font-[Mulish,sans-serif]">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />

        {/* ── "We're rewriting the rules" ── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#113B5E] text-center mb-10 max-w-3xl mx-auto leading-tight">
              We're rewriting the rules of traditional banking, and we only win
              when our customers succeed. We've helped over 5 million members
              reach their goals, and we're just getting started!
            </h2>

            {/* Tab Row */}
            <div className="flex justify-center gap-3 mb-10">
              {PRODUCTS_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "personal" | "auto" | "banking")}
                  data-testid={`tab-${tab.id}`}
                  className={`px-5 py-2 rounded-full font-bold text-sm border transition-all ${
                    activeTab === tab.id
                      ? "bg-[#113B5E] text-white border-[#113B5E]"
                      : "bg-white text-[#113B5E] border-[#113B5E] hover:bg-[#113B5E]/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#113B5E] mb-4 leading-tight">
                  {product.heading}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {product.body}
                </p>
                <Button
                  asChild
                  className="bg-[#EE5F3F] hover:bg-[#D94E30] text-white font-bold rounded-full px-8 py-3 text-sm"
                >
                  <a href={product.href} data-testid="btn-product-learn-more">
                    {product.cta}
                  </a>
                </Button>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-[380px] object-cover"
                  data-testid={`img-product-${activeTab}`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── How a Personal Loan Works ── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section heading */}
            <h2
              className="text-2xl md:text-[32px] font-extrabold text-center mb-14 leading-tight"
              style={{ color: "#113B5E" }}
              data-testid="heading-how-it-works"
            >
              How a personal loan with LendingClub works
            </h2>

            {/* Steps row with connecting line */}
            <div className="relative mb-2">
              {/* Horizontal connector line (desktop only) */}
              <div
                className="hidden md:block absolute h-[2px] top-7 z-0"
                style={{
                  backgroundColor: "#D0E3ED",
                  left: "calc(16.67% + 28px)",
                  right: "calc(16.67% + 28px)",
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {HOW_IT_WORKS_STEPS.map((step) => (
                  <div
                    key={step.number}
                    className="flex flex-col items-center text-center"
                    data-testid={`step-hiw-${step.number}`}
                  >
                    {/* Number circle */}
                    <div
                      className="relative z-10 w-14 h-14 rounded-full text-white flex items-center justify-center font-extrabold text-xl mb-5 shrink-0 shadow-sm"
                      style={{ backgroundColor: "#0A3A5C" }}
                    >
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3
                      className="font-extrabold text-base md:text-[17px] leading-snug mb-2 px-2"
                      style={{ color: "#113B5E" }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] md:text-sm leading-relaxed px-2" style={{ color: "#4A6A80" }}>
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* App screenshot images — one per step */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 mt-8">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div
                  key={`img-${step.number}`}
                  className="rounded-2xl overflow-hidden bg-[#F0F6FB] border border-[#D0E3ED]"
                  data-testid={`img-hiw-${step.number}`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <button
                className="font-bold rounded-full px-10 py-3 text-sm text-white transition-colors"
                style={{ backgroundColor: "#EE5F3F" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#D94E30")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#EE5F3F")}
                data-testid="btn-check-rate-hiw"
              >
                Check Your Rate
              </button>
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
                <Button
                  className="bg-[#EE5F3F] hover:bg-[#D94E30] text-white font-bold rounded-full px-8 py-3 text-sm"
                  data-testid="btn-learn-more-banking"
                >
                  Learn More
                </Button>
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
        <section className="py-16 bg-[#051121] text-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
                  Your membership gets better in the app
                </h2>
                <p className="text-gray-300 text-base mb-4">
                  Make the smartest money move of the day.
                </p>
                <p className="text-gray-300 text-sm mb-8">
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
              <div className="flex justify-center">
                <img
                  src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F14Hq7vxTrLPpeXFCACXMZa%2Ffe41e3745fd28cad2dd657217645d61e%2FGroup_1000002031.svg&w=768&q=75"
                  alt="LendingClub mobile app screens"
                  className="max-w-xs w-full"
                  data-testid="img-app-screens"
                />
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F80cmCydXU92Eabp4rwdQY%2Fac1f6ee08309f9f765d5dc1eaac24002%2FHome_Page_Review_Photo_Updated2025.png&w=3840&q=75"
                  alt="Happy LendingClub member"
                  className="w-full h-[360px] object-cover"
                  data-testid="img-testimonial-photo"
                />
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
              <div className="flex flex-col items-center">
                <img
                  src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F2Ze1d8RfxR6Zy4MPgzbsfF%2F8828b542cfc44cb29f41452bacaafc86%2F_100B_.svg&w=256&q=75"
                  alt="$100B+"
                  className="h-16"
                  data-testid="stat-100b"
                />
                <p className="text-gray-600 text-sm mt-2 text-center">In loans issued</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2FsWxbeO4Wn0aOTOoPJ8NdN%2Fc1ba292d505420fa99be4cd5dc9b0707%2F5M.svg&w=256&q=75"
                  alt="5M+"
                  className="h-16"
                  data-testid="stat-5m"
                />
                <p className="text-gray-600 text-sm mt-2 text-center">Members served</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://www.lendingclub.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Forqped9h4wgz%2F2gFq2AcjbnfazY39dSKhP7%2Fcba1005d5c51c97c547fdcc9aba1b5b5%2F10K_Trustpilot.svg&w=256&q=75"
                  alt="10K+ Trustpilot Reviews"
                  className="h-16"
                  data-testid="stat-trustpilot"
                />
                <p className="text-gray-600 text-sm mt-2 text-center">Trustpilot reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-[#F3F5F9]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#113B5E] text-center mb-10">
              Questions? We've Got Answers
            </h2>
            <div className="bg-white rounded-2xl shadow-sm px-6 py-2">
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-block font-bold text-[#0077B3] underline underline-offset-2 hover:text-[#0055A3] text-sm"
                data-testid="link-help-center"
              >
                Visit our Help Center
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
