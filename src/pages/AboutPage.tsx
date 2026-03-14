import { Link } from "react-router-dom";

import Highlights from "../components/Highlights";
import { Button } from "../components/ui/button";
import { siteAssets } from "../data/siteContent";

export default function AboutPage() {
  return (
    <div className="py-8">
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <h1 className="text-4xl font-semibold tracking-tight">
          About Purnam Yoga Shala Goa
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          We are a peaceful yoga school in Agonda Beach, South Goa, offering
          traditional yoga education with practical teaching methodology for
          global students.
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Our mission is to support personal growth, mindful living, and
          confident teaching through disciplined practice, satsang, and
          experienced guidance.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <img
            src={siteAssets.logo}
            alt="Purnam Yoga Shala logo"
            className="h-14 w-auto"
          />
          <img
            src={siteAssets.yogaAlliance}
            alt="Yoga Alliance"
            className="h-12 w-auto"
          />
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link to="/about/philosophy">
            <Button variant="outline">Our Philosophy</Button>
          </Link>
          <Link to="/about/campus">
            <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
              Goa Campus
            </Button>
          </Link>
          <Link to="/about/certification">
            <Button variant="outline">Certification</Button>
          </Link>
        </div>
      </section>
      <div className="bg-[#fbf8f1] text-[#2f2920] dark:bg-[#17120d] dark:text-[#f2e8d6]">
        <Highlights />
      </div>
    </div>
  );
}
