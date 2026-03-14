import { Link } from "react-router-dom";

import { teachers } from "../data/siteContent";
import { Button } from "../components/ui/button";

export default function TeachersPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        Faculty
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        Meet Our Teachers
      </h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        Learn from experienced mentors guiding asana, pranayama, meditation,
        philosophy, and teaching methodology.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.map((teacher) => (
          <article
            key={teacher.name}
            className="overflow-hidden rounded-xl border border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{teacher.name}</h2>
              <p className="text-sm text-muted-foreground">{teacher.role}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/admissions">
          <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
            Apply With This Faculty Team
          </Button>
        </Link>
      </div>
    </section>
  );
}
