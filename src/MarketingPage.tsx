import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import LogoCollection from "./components/LogoCollection";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function MarketingPage() {
  return (
    <div className="bg-background text-foreground">
      <AppAppBar />
      <Hero />
      <LogoCollection />

      <div className="bg-[#f5efe4] text-[#2f2920] dark:bg-[#201a14] dark:text-[#f2e8d6]">
        <Features />
      </div>

      <div className="bg-[#fbf8f1] text-[#2f2920] dark:bg-[#17120d] dark:text-[#f2e8d6]">
        <Highlights />
        <Testimonials />
      </div>

      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
