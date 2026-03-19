import { Link } from "react-router-dom";

import { accommodationFeatures } from "../data/siteContent";
import { Button } from "../components/ui/button";

export default function AccommodationPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        Life At School
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        Accommodation & Food
      </h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        Residential facilities are designed for focused study, healthy routine,
        and peaceful recovery during training.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {accommodationFeatures.map((feature) => (
          <article
            key={feature.title}
            className="overflow-hidden rounded-xl border border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{feature.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-[#d8c6ae] bg-[#fffaf3] p-6 dark:border-[#5f4938] dark:bg-[#21180f]">
        <h2 className="text-xl font-semibold">Stay Details</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Accommodation includes AC deluxe cottages and eco-friendly wooden
          bungalow options with attached bathrooms, hot water, Wi-Fi, and a
          location just a short walk from the Arabian Sea.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/schedule">
          <Button variant="outline">Check Intake Dates</Button>
        </Link>
        <Link to="/admissions">
          <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
            Start Application
          </Button>
        </Link>
      </div>
    </section>
  );
}
