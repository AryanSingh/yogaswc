import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { courses } from "../data/siteContent";

export default function CoursesPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        Programs
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Goa Yoga Teacher Training Courses
      </h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        Explore our 100-hour and 200-hour Yoga Alliance aligned programs in
        Agonda Beach, Goa.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {courses.map((course) => (
          <Card
            key={course.slug}
            className="overflow-hidden border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover"
            />
            <CardHeader>
              <p className="text-xs uppercase tracking-[0.14em] text-[#8e5a3a] dark:text-[#d3a57c]">
                {course.level}
              </p>
              <CardTitle className="text-xl">{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{course.duration}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{course.subtitle}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-semibold text-[#6a4a33] dark:text-[#efddca]">
                  {course.fee}
                </p>
                <Link to={`/courses/${course.slug}`}>
                  <Button variant="outline">Course details</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
