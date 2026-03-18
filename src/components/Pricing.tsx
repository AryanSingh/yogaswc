import { Link } from "react-router-dom";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { courses } from "../data/siteContent";

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
          Course Fees (Euros)
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Choose your Goa program and reserve your seat.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {courses.map((course, index) => (
          <Card
            key={course.slug}
            className={
              index === 0
                ? "yoga-card-lift yoga-soft-glow border-[#a5744f] bg-[#fff7ee] dark:border-[#b3815e] dark:bg-[#2a1f15]"
                : "yoga-card-lift yoga-soft-glow border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]"
            }
          >
            <CardHeader>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.14em] text-[#8e5a3a] dark:text-[#d3a57c]">
                  {course.duration}
                </p>
                {index === 0 ? (
                  <Badge className="bg-[#8e5a3a] text-white">
                    Most Popular
                  </Badge>
                ) : null}
              </div>
              <CardTitle>{course.title}</CardTitle>
              <p className="text-3xl font-semibold text-[#5a3c26] dark:text-[#f0dcc7]">
                {course.fee}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-[#5f4a36] dark:text-[#d7c4ae]">
                {course.highlights.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to={`/courses/${course.slug}`}>
                <Button className="mt-6 w-full bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
                  View Course
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
