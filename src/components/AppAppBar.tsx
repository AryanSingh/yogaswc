import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { contactInfo, courses, socialLinks } from "../data/siteContent";
import { useCustomerAuth } from "../context/useCustomerAuth";
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

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["name"] }) {
  const iconClass = "h-4 w-4";

  if (name === "Facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={iconClass}
        aria-hidden="true"
      >
        <path d="M13.5 8H16V5h-2.5C10.8 5 9 6.8 9 9.5V12H7v3h2v4h3v-4h3l.5-3H12V9.8c0-1 .4-1.8 1.5-1.8z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClass}
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="12"
          cy="12"
          r="3.6"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={iconClass}
        aria-hidden="true"
      >
        <path d="M21.6 8.4c-.2-1-.9-1.7-1.9-1.9C18 6 12 6 12 6s-6 0-7.7.5c-1 .2-1.7.9-1.9 1.9C2 10.2 2 12 2 12s0 1.8.4 3.6c.2 1 .9 1.7 1.9 1.9C6 18 12 18 12 18s6 0 7.7-.5c1-.2 1.7-.9 1.9-1.9.4-1.8.4-3.6.4-3.6s0-1.8-.4-3.6zM10 14.8V9.2L15 12l-5 2.8z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconClass}
      aria-hidden="true"
    >
      <path d="M6.9 8.5h3V18h-3zM8.4 5.1a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM12.2 8.5h2.9v1.3h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7V18h-3v-4.6c0-1.1 0-2.5-1.6-2.5s-1.8 1.2-1.8 2.4V18h-3z" />
    </svg>
  );
}

export default function AppAppBar() {
  const { isAuthenticated, logout, session } = useCustomerAuth();
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
    <header className="sticky inset-x-0 top-0 z-[70] border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="border-b border-border/60 bg-[#f7efe4]/90 text-[#6a4a33] dark:bg-[#1f1711]/90 dark:text-[#d9b89a]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs md:px-6">
          <div className="hidden items-center gap-3 sm:flex">
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">
              {contactInfo.email}
            </a>
            <span aria-hidden="true">|</span>
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="hover:underline"
            >
              {contactInfo.phone}
            </a>
          </div>
          <div className="flex items-center gap-1">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[#8e5a3a] transition hover:bg-[#f0e1cc] hover:text-[#754529] dark:text-[#d3a57c] dark:hover:bg-[#2b2016]"
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[4.5rem] md:px-6">
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
            className="inline-flex h-10 min-w-10 items-center justify-center rounded-md border border-[#d8c6ae] px-2 md:hidden dark:border-[#5f4938]"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-xs font-medium">Menu</span>
          </button>
          <NavLink to="/contact" className="hidden md:inline-flex">
            <Button
              size="sm"
              className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]"
            >
              Inquire Now
            </Button>
          </NavLink>
          <NavLink
            to={isAuthenticated ? "/customer/dashboard" : "/customer/login"}
            className="hidden md:inline-flex"
          >
            <Button size="sm" variant="outline">
              {isAuthenticated ? "My Bookings" : "Login"}
            </Button>
          </NavLink>
          {isAuthenticated ? (
            <button
              type="button"
              onClick={() => void logout()}
              className="hidden rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground md:inline-flex dark:hover:bg-[#2b2016]"
            >
              Logout
            </button>
          ) : null}
        </div>
      </div>
      {mobileMenuOpen ? (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-40 bg-black/35 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-x-3 top-[5.9rem] z-50 max-h-[calc(100vh-7.2rem)] overflow-y-auto rounded-xl border border-[#d8c6ae] bg-[#fffaf3] p-3 shadow-2xl md:hidden dark:border-[#5f4938] dark:bg-[#21180f]">
            <div className="mb-2 flex items-center justify-between border-b border-[#e8d9c4] pb-2 dark:border-[#3d2f24]">
              <p className="text-sm font-semibold">Menu</p>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
              >
                Close
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <button
                type="button"
                onClick={() => setMobileCoursesOpen((prev) => !prev)}
                className="flex min-h-11 w-full items-center justify-between rounded-md px-3 py-2 text-left text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
              >
                <span className="font-medium">Courses</span>
                <span>{mobileCoursesOpen ? "-" : "+"}</span>
              </button>
              {mobileCoursesOpen ? (
                <div className="ml-2 space-y-1 border-l border-[#d8c6ae] pl-3 dark:border-[#5f4938]">
                  {courses.map((course) => (
                    <Link
                      key={course.slug}
                      to={`/courses/${course.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
                    >
                      {course.title}
                    </Link>
                  ))}
                </div>
              ) : null}

              <button
                type="button"
                onClick={() => setMobileAboutOpen((prev) => !prev)}
                className="flex min-h-11 w-full items-center justify-between rounded-md px-3 py-2 text-left text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
              >
                <span className="font-medium">About</span>
                <span>{mobileAboutOpen ? "-" : "+"}</span>
              </button>
              {mobileAboutOpen ? (
                <div className="ml-2 space-y-1 border-l border-[#d8c6ae] pl-3 dark:border-[#5f4938]">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
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
                  className="block min-h-11 rounded-md px-3 py-2 text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="mt-2 flex flex-wrap gap-2 border-t border-[#e8d9c4] pt-3 dark:border-[#3d2f24]">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
                  >
                    <SocialIcon name={social.name} />
                    {social.name}
                  </a>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
                    Inquire Now
                  </Button>
                </Link>
                <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Apply Now
                  </Button>
                </Link>
                <Link
                  to={
                    isAuthenticated ? "/customer/dashboard" : "/customer/login"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                  className="sm:col-span-2"
                >
                  <Button variant="outline" className="w-full">
                    {isAuthenticated
                      ? `My Bookings (${session?.name ?? "User"})`
                      : "Login"}
                  </Button>
                </Link>
                {isAuthenticated ? (
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="sm:col-span-2 rounded-md border border-[#d8c6ae] px-3 py-2 text-sm text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:border-[#5f4938] dark:hover:bg-[#2b2016]"
                  >
                    Logout
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
