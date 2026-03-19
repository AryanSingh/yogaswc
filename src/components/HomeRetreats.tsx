import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useCmsContent } from "../context/CmsContentContext";

export default function HomeRetreats() {
  const { siteAssets } = useCmsContent();

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#d3a57c]/10 blur-3xl" />
      
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="flex-1 space-y-6 md:order-2">
            <div className="space-y-2">
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#8e5a3a] uppercase dark:text-[#d3a57c]">
                Wellness & Healing
              </h2>
              <h1 className="text-3xl font-semibold tracking-tight text-[#2f2920] md:text-5xl dark:text-[#f2e8d6]">
                YOGA RETREAT - India
              </h1>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Embark on a transformative Yoga retreat in Goa, India, where you can deepen your practice and gain a comprehensive understanding of yoga philosophy and mindfulness in a serene Agonda beach setting.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/retreats">
                <Button className="w-full bg-[#8e5a3a] text-white hover:bg-[#754529] sm:w-auto dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
                  Learn More
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full border-[#8e5a3a] text-[#8e5a3a] hover:bg-[#8e5a3a]/5 sm:w-auto dark:border-[#d3a57c] dark:text-[#d3a57c] dark:hover:bg-[#d3a57c]/5">
                  Book Your Retreat
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={siteAssets.retreatsHero} 
                alt="Yoga retreat at Purnam Yogashala" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.16em]">Agonda Beach, Goa</p>
                <h3 className="text-xl font-semibold">Transformative Wellness</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
