import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";

export default function AboutPhilosophyPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        About
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Our Philosophy
      </h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        We teach yoga as a complete lifestyle practice with equal attention to
        movement, breath, awareness, and self-discipline. Programs are designed
        to support both personal transformation and confident teaching skills.
      </p>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        In Agonda, Goa, students experience structured routines, satsang-style
        reflection, and practical guidance from experienced faculty rooted in
        traditional yogic education.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/about/campus">
          <Button variant="outline">Explore Campus</Button>
        </Link>
        <Link to="/about/certification">
          <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
            View Certification
          </Button>
        </Link>
      </div>
    </section>
  );
}
