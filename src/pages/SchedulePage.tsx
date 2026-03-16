import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import { upcomingScheduleItems } from "../data/courseSchedule";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

export default function SchedulePage() {
  const courses = useMemo(() => {
    const unique = Array.from(new Set(upcomingScheduleItems.map((i) => i.course)));
    return unique.sort();
  }, []);

  const [activeTab, setActiveTab] = useState(courses[0] || "");

  const filteredItems = useMemo(() => {
    return upcomingScheduleItems.filter((item) => item.course === activeTab);
  }, [activeTab]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        Batch Calendar
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Upcoming Course Schedule
      </h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        Updated intake windows for teacher trainings and retreat formats.
      </p>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap gap-2 border-b border-[#d8c6ae] pb-4 dark:border-[#5f4938]">
        {courses.map((course) => (
          <button
            key={course}
            onClick={() => setActiveTab(course)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all rounded-full",
              activeTab === course
                ? "bg-[#8e5a3a] text-white"
                : "text-muted-foreground hover:bg-[#f3e8d9] dark:hover:bg-[#2a1f15]"
            )}
          >
            {course}
          </button>
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <article
              key={`${item.course}-${item.startDate}`}
              className="rounded-xl border border-[#d8c6ae] bg-[#fffaf3] p-4 dark:border-[#5f4938] dark:bg-[#21180f]"
            >
              <p className="font-medium">{item.course}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.location}
              </p>
              <div className="mt-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium">Start:</span> {item.startDate}
                </p>
                <p>
                  <span className="font-medium">End:</span> {item.endDate}
                </p>
                <p>
                  <span className="font-medium">Status:</span> {item.status}
                </p>
              </div>
            </article>
          ))}
          {filteredItems.length === 0 && (
            <p className="text-sm text-muted-foreground">No upcoming batches for this course.</p>
          )}
        </div>
      </div>

      <div className="mt-8 hidden overflow-x-auto rounded-xl border border-[#d8c6ae] bg-[#fffaf3] md:block dark:border-[#5f4938] dark:bg-[#21180f]">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[#d8c6ae] bg-[#f3e8d9] dark:border-[#5f4938] dark:bg-[#2a1f15]">
            <tr>
              <th className="px-4 py-3 font-medium">Course</th>
              <th className="px-4 py-3 font-medium">Location</th>
              <th className="px-4 py-3 font-medium">Start</th>
              <th className="px-4 py-3 font-medium">End</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr
                key={`${item.course}-${item.startDate}`}
                className="border-b border-[#eadfce] dark:border-[#473727]"
              >
                <td className="px-4 py-3">{item.course}</td>
                <td className="px-4 py-3">{item.location}</td>
                <td className="px-4 py-3">{item.startDate}</td>
                <td className="px-4 py-3">{item.endDate}</td>
                <td className="px-4 py-3 font-medium text-[#8e5a3a] dark:text-[#d3a57c]">
                  {item.status}
                </td>
              </tr>
            ))}
            {filteredItems.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                  No upcoming batches for this course.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <Link to="/admissions">
          <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
            Start Application
          </Button>
        </Link>
      </div>
    </section>
  );
}
