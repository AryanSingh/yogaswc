import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";

export default function AboutCertificationPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        About
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Certification & Standards
      </h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        Courses follow Yoga Alliance aligned structures and completion
        requirements. Students who complete attendance and assessments receive
        certification based on their enrolled program.
      </p>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        Training includes practical teaching rounds, alignment reviews,
        foundational anatomy, and yogic philosophy sessions to support teaching
        readiness.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/courses">
          <Button variant="outline">Compare Courses</Button>
        </Link>
        <Link to="/admissions">
          <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
            Start Admissions
          </Button>
        </Link>
      </div>
    </section>
  );
}
