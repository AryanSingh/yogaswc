import { Link } from "react-router-dom";

import { courses } from "../data/siteContent";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Features() {
  return (
    <section id="courses" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="mb-9 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
          Our Courses
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Traditional yoga education designed for personal and professional
          growth.
        </h2>
        <p className="mt-3 text-[#5f4a36] dark:text-[#d7c4ae]">
          Study in a structured ashram-inspired environment with experienced
          teachers, small groups, and comprehensive curriculum modules.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {courses.map((course) => (
          <Card
            key={course.slug}
            className="border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]"
          >
            <CardHeader>
              <p className="text-xs uppercase tracking-[0.14em] text-[#8e5a3a] dark:text-[#d3a57c]">
                {course.level}
              </p>
              <CardTitle className="mt-2 text-xl leading-snug">
                {course.title}
              </CardTitle>
              <p className="text-sm font-medium text-[#6a4a33] dark:text-[#d9b89a]">
                {course.duration}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#5f4a36] dark:text-[#d7c4ae]">
                {course.subtitle}
              </p>
              <Link to={`/courses/${course.slug}`}>
                <Button
                  variant="outline"
                  className="mt-5 w-full border-[#b6906d] bg-transparent text-[#6a4a33] hover:bg-[#f4e8d8] dark:border-[#a67a57] dark:text-[#efddca] dark:hover:bg-[#2a1e14]"
                >
                  Explore Syllabus
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
