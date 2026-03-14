import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { courses } from "../data/siteContent";
import { Button } from "./ui/button";
import SitemarkIcon from "./SitemarkIcon";

const links = [
  { to: "/retreats", label: "Retreats" },
  { to: "/teachers", label: "Teachers" },
  { to: "/accommodation", label: "Stay" },
  { to: "/schedule", label: "Schedule" },
];

const aboutLinks = [
  { to: "/teachers", label: "Our team" },
  { to: "/faq", label: "FAQ" },
  { to: "/testimonials", label: "Testimonials" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative px-1 py-1 transition after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#8e5a3a] after:transition-transform hover:text-foreground hover:after:scale-x-100 ${
    isActive ? "text-foreground after:scale-x-100" : "text-muted-foreground"
  }`;

export default function AppAppBar() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark = saved ? saved === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextMode = !isDark;
    setIsDark(nextMode);
    document.documentElement.classList.toggle("dark", nextMode);
    window.localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <SitemarkIcon className="h-9 w-9 text-[#8e5a3a] dark:text-[#d3a57c]" />
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Goa
            </p>
            <p className="text-sm font-semibold tracking-wide">
              Purnam Yoga School
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <div className="group relative">
            <NavLink to="/courses" className={navLinkClass}>
              Courses
            </NavLink>
            <div className="invisible absolute top-full left-0 z-50 w-72 rounded-lg border border-[#d8c6ae] bg-[#fffaf3] p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 dark:border-[#5f4938] dark:bg-[#21180f]">
              {courses.map((course) => (
                <Link
                  key={course.slug}
                  to={`/courses/${course.slug}`}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
                >
                  {course.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="group relative">
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <div className="invisible absolute top-full left-0 z-50 w-72 rounded-lg border border-[#d8c6ae] bg-[#fffaf3] p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 dark:border-[#5f4938] dark:bg-[#21180f]">
              {aboutLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              isDark ? "bg-[#8e5a3a]" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                isDark ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#d8c6ae] md:hidden dark:border-[#5f4938]"
            aria-label="Toggle navigation"
          >
            <span className="text-xs">Menu</span>
          </button>
          <NavLink to="/contact" className="hidden md:inline-flex">
            <Button
              size="sm"
              className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]"
            >
              Inquire Now
            </Button>
          </NavLink>
          <NavLink to="/about" className="hidden md:inline-flex">
            <Button
              size="sm"
              variant="outline"
              className="border-[#8e5a3a] text-[#8e5a3a] hover:bg-[#f0e1cc] dark:border-[#d3a57c] dark:text-[#d3a57c] dark:hover:bg-[#2b2016]"
            >
              About Us
            </Button>
          </NavLink>
        </div>
      </div>
      {mobileMenuOpen ? (
        <div className="border-t border-[#d8c6ae] px-4 py-3 md:hidden dark:border-[#5f4938]">
          <div className="space-y-2 text-sm">
            <button
              type="button"
              onClick={() => setMobileCoursesOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
            >
              <span>Courses</span>
              <span>{mobileCoursesOpen ? "-" : "+"}</span>
            </button>
            {mobileCoursesOpen ? (
              <div className="ml-2 space-y-1 border-l border-[#d8c6ae] pl-3 dark:border-[#5f4938]">
                {courses.map((course) => (
                  <Link
                    key={course.slug}
                    to={`/courses/${course.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-md px-2 py-1 text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            ) : null}
            <button
              type="button"
              onClick={() => setMobileAboutOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
            >
              <span>About</span>
              <span>{mobileAboutOpen ? "-" : "+"}</span>
            </button>
            {mobileAboutOpen ? (
              <div className="ml-2 space-y-1 border-l border-[#d8c6ae] pl-3 dark:border-[#5f4938]">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-md px-2 py-1 text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-2 py-2 text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-2">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  size="sm"
                  className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]"
                >
                  Inquire Now
                </Button>
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" variant="outline">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
