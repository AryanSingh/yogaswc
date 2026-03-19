import { Link } from "react-router-dom";

import { courses } from "../data/siteContent";
import { Button } from "./ui/button";

export default function HomeCourses() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-[#2f2920] md:text-5xl dark:text-[#f2e8d6]">
            Yoga Teacher Training Courses
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#8e5a3a] dark:bg-[#b17752]" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {courses.map((course) => (
            <div 
              key={course.slug}
              className="group relative overflow-hidden rounded-2xl border border-[#d8c6ae] bg-[#fffaf3] transition-all duration-300 hover:shadow-xl dark:border-[#5f4938] dark:bg-[#21180f]"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-[#8e5a3a]/10 px-3 py-1 text-xs font-bold text-[#8e5a3a] uppercase dark:bg-[#d3a57c]/10 dark:text-[#d3a57c]">
                    {course.duration}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Agonda, Goa</span>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-[#2f2920] md:text-2xl dark:text-[#f2e8d6]">
                  {course.title}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {course.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <Link to={`/courses/${course.slug}`}>
                    <Button variant="outline" className="border-[#8e5a3a] text-[#8e5a3a] hover:bg-[#8e5a3a] hover:text-white dark:border-[#d3a57c] dark:text-[#d3a57c] dark:hover:bg-[#d3a57c] dark:hover:text-[#21180f]">
                      Course Details
                    </Button>
                  </Link>
                  <Link to="/enquiry">
                    <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
