import { Link } from "react-router-dom";

import { applicationSteps } from "../data/siteContent";
import { Button } from "./ui/button";

export default function ApplicationSteps() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
          Admissions Flow
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Book yoga teacher training in Goa in three simple steps
        </h2>
        <p className="mt-3 text-muted-foreground">
          A clear admissions path makes it easier to choose your batch, reserve
          your place, and arrive prepared for the training experience.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {applicationSteps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-2xl border border-[#d8c6ae] bg-[#fffaf3] p-6 dark:border-[#5f4938] dark:bg-[#21180f]"
          >
            <p className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e7d3bd] text-sm font-semibold text-[#5a3c26] dark:bg-[#3a2b20] dark:text-[#f0dcc7]">
              {index + 1}
            </p>
            <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/enquiry">
          <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
            Start Your Enquiry
          </Button>
        </Link>
        <Link to="/schedule">
          <Button variant="outline">Review Upcoming Dates</Button>
        </Link>
      </div>
    </section>
  );
}
