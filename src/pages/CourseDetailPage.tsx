import { Link, useParams } from "react-router-dom";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { upcomingScheduleItems } from "../data/courseSchedule";
import { courses } from "../data/siteContent";

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <h1 className="text-3xl font-semibold">Course Not Found</h1>
        <p className="mt-3 text-muted-foreground">
          The requested course does not exist. Please check available programs.
        </p>
        <Link to="/courses">
          <Button className="mt-6">Back to Courses</Button>
        </Link>
      </section>
    );
  }

  const batches = upcomingScheduleItems.filter(
    (item) => item.courseSlug === course.slug,
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <img
            src={course.image}
            alt={course.title}
            className="h-[320px] w-full rounded-2xl object-cover md:h-[430px]"
          />
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
            {course.level}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">
            {course.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            {course.subtitle}
          </p>
          <p className="mt-2 text-sm font-medium text-[#8a6a4f] dark:text-[#d0ae90]">
            Location: {course.location}
          </p>

          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
            {course.overview.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <Card className="mt-8 border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
            <CardHeader>
              <CardTitle>What You Will Study</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {course.modules.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-6 border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
            <CardHeader>
              <CardTitle>Daily Training Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {course.dailySchedule.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-6 border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
            <CardHeader>
              <CardTitle>Course Fee Includes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {course.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-6 border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
            <CardHeader>
              <CardTitle>Not Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {course.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-6 border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
            <CardHeader>
              <CardTitle>Upcoming Batches</CardTitle>
            </CardHeader>
            <CardContent>
              {batches.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Upcoming dates are shared by admissions on request.
                </p>
              ) : (
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {batches.map((item) => (
                    <li key={`${item.course}-${item.startDate}`}>
                      {item.startDate} - {item.endDate} ({item.location})
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
          <CardHeader>
            <CardTitle>Program Snapshot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-medium">Duration:</span> {course.duration}
              </p>
              <p>
                <span className="font-medium">Location:</span> {course.location}
              </p>
              <p>
                <span className="font-medium">Fee:</span> {course.fee}
              </p>
              {course.sourceUrl ? (
                <p className="text-xs text-muted-foreground">
                  Source:{" "}
                  <a
                    href={course.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {course.sourceUrl}
                  </a>
                </p>
              ) : null}
              <ul className="space-y-2 pt-2 text-muted-foreground">
                {course.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/contact">
              <Button className="mt-6 w-full bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
                Apply for this Course
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
