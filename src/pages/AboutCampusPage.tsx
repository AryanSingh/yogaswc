import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";

const campusHighlights = [
  "Agonda Beach location with a calm practice environment",
  "Walkable access to classes, accommodation, and meals",
  "Focused routine for study, rest, and mindful living",
  "Small cohort settings for closer teacher support",
];

export default function AboutCampusPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        About
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Goa Campus</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        Our school is located at Agonda Beach, Goa, India. The space supports a
        clean daily rhythm across practice, theory, meals, and rest.
      </p>

      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
        {campusHighlights.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/about/philosophy">
          <Button variant="outline">Read Philosophy</Button>
        </Link>
        <Link to="/contact">
          <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
            Ask About Stay Options
          </Button>
        </Link>
      </div>
    </section>
  );
}
