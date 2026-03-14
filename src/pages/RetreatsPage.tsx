import { Link } from "react-router-dom";

import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import { Button } from "../components/ui/button";
import { siteAssets } from "../data/siteContent";

export default function RetreatsPage() {
  return (
    <div className="py-8">
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <h1 className="text-4xl font-semibold tracking-tight">
          Yoga & Meditation Retreats
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Restore your energy with retreat formats from 5 to 14 days including
          pranayama, meditation, restorative yoga, and mindful routines.
        </p>
        <img
          src={siteAssets.goaHero}
          alt="Goa yoga retreat"
          className="mt-6 h-72 w-full rounded-2xl object-cover"
        />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link to="/schedule">
            <Button variant="outline">Retreat Dates</Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
              Reserve Your Spot
            </Button>
          </Link>
        </div>
      </section>
      <div className="bg-[#fbf8f1] text-[#2f2920] dark:bg-[#17120d] dark:text-[#f2e8d6]">
        <Highlights />
      </div>
      <Testimonials />
    </div>
  );
}
