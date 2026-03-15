import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import ImpactStats from "../components/ImpactStats";
import LogoCollection from "../components/LogoCollection";
import Features from "../components/Features";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import { Button } from "../components/ui/button";

export default function HomePage() {
  return (
    <>
      <div data-reveal data-reveal-delay="0">
        <Hero />
      </div>
      <div data-reveal data-reveal-delay="1">
        <ImpactStats />
      </div>
      <div data-reveal data-reveal-delay="1">
        <LogoCollection />
      </div>
      <div
        data-reveal
        data-reveal-delay="1"
        className="relative overflow-hidden bg-[#f5efe4] text-[#2f2920] dark:bg-[#201a14] dark:text-[#f2e8d6]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(211,165,124,0.18),transparent_45%),radial-gradient(circle_at_80%_100%,rgba(142,90,58,0.12),transparent_50%)]" />
        <Features />
      </div>
      <div
        data-reveal
        data-reveal-delay="2"
        className="relative overflow-hidden bg-[#fbf8f1] text-[#2f2920] dark:bg-[#17120d] dark:text-[#f2e8d6]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(211,165,124,0.2),transparent_42%),radial-gradient(circle_at_10%_90%,rgba(142,90,58,0.12),transparent_45%)]" />
        <Highlights />
        <Testimonials />
      </div>
      <div data-reveal data-reveal-delay="1">
        <Pricing />
      </div>
      <div data-reveal data-reveal-delay="2">
        <FAQ />
      </div>
      <section
        data-reveal
        data-reveal-delay="2"
        className="mx-auto max-w-6xl px-4 pb-16 text-center md:px-6"
      >
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Ready to begin your yoga journey in India?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Review upcoming batches and submit your application request.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/schedule">
            <Button variant="outline">See Full Schedule</Button>
          </Link>
          <Link to="/admissions">
            <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
