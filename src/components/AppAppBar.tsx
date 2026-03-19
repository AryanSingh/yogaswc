import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { courses, socialLinks } from "../data/siteContent";
import { useCmsContent } from "../context/CmsContentContext";
import { useCustomerAuth } from "../context/useCustomerAuth";
import { Button } from "./ui/button";

const links = [
  { to: "/retreats", label: "Retreats" },
  { to: "/teachers", label: "Teachers" },
  { to: "/accommodation", label: "Stay" },
  { to: "/schedule", label: "Schedule" },
  { to: "/blog", label: "Blog" },
];

const aboutLinks = [
  { to: "/teachers", label: "Our team" },
  { to: "/faq", label: "FAQ" },
  { to: "/testimonials", label: "Testimonials" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative px-1 py-1 font-medium transition after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#8e5a3a] after:transition-transform hover:text-foreground hover:after:scale-x-100 ${
    isActive ? "text-foreground after:scale-x-100" : "text-muted-foreground"
  }`;

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["name"] }) {
  const iconClass = "h-5 w-5";

  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
        <path d="M13.5 8H16V5h-2.5C10.8 5 9 6.8 9 9.5V12H7v3h2v4h3v-4h3l.5-3H12V9.8c0-1 .4-1.8 1.5-1.8z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
        <path d="M21.6 8.4c-.2-1-.9-1.7-1.9-1.9C18 6 12 6 12 6s-6 0-7.7.5c-1 .2-1.7.9-1.9 1.9C2 10.2 2 12 2 12s0 1.8.4 3.6c.2 1 .9 1.7 1.9 1.9C6 18 12 18 12 18s6 0 7.7-.5c1-.2 1.7-.9 1.9-1.9.4-1.8.4-3.6.4-3.6s0-1.8-.4-3.6zM10 14.8V9.2L15 12l-5 2.8z" />
      </svg>
    );
  }

  if (name === "X") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
        <path d="M17.8 3H21l-7 8 8.2 10H16l-5-6.9L5 21H1.8l7.4-8.5L1.3 3H8l4.6 6.3L17.8 3zm-1.1 16h1.8L7 4.9H5.1L16.7 19z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M6.9 8.5h3V18h-3zM8.4 5.1a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM12.2 8.5h2.9v1.3h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7V18h-3v-4.6c0-1.1 0-2.5-1.6-2.5s-1.8 1.2-1.8 2.4V18h-3z" />
    </svg>
  );
}

export default function AppAppBar() {
  const { contactInfo, siteAssets } = useCmsContent();
  const { isAuthenticated, logout, session } = useCustomerAuth();
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1.0);

  useEffect(() => {
    const savedSize = window.localStorage.getItem("fontSize");
    if (savedSize) {
      const size = parseFloat(savedSize);
      setFontSize(size);
      document.documentElement.style.setProperty("--font-size-modifier", size.toString());
    }
  }, []);

  const changeFontSize = (delta: number) => {
    const newSize = Math.max(0.8, Math.min(1.4, fontSize + delta));
    setFontSize(newSize);
    document.documentElement.style.setProperty("--font-size-modifier", newSize.toString());
    window.localStorage.setItem("fontSize", newSize.toString());
  };

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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
    <>
      <div className="relative z-[80] border-b border-border/60 bg-[#f7efe4]/90 text-[#6a4a33] dark:bg-[#1f1711]/90 dark:text-[#d9b89a]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs md:px-6">
          <div className="hidden items-center gap-3 sm:flex">
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">
              {contactInfo.email}
            </a>
            <span aria-hidden="true">|</span>
            <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="hover:underline">
              {contactInfo.phone}
            </a>
            <span aria-hidden="true" className="ml-2">|</span>
            <div className="ml-2 flex items-center gap-1 overflow-hidden rounded-full border border-border/20 bg-background/20 p-0.5">
              <button
                onClick={() => changeFontSize(-0.1)}
                className="px-2 text-[9px] font-bold hover:bg-background/40 transition"
                title="Decrease font size"
              >
                A-
              </button>
              <div className="h-2 w-px bg-border/20" />
              <button
                onClick={() => changeFontSize(0.1)}
                className="px-2 text-[12px] font-bold hover:bg-background/40 transition"
                title="Increase font size"
              >
                A+
              </button>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-2 sm:w-auto sm:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#b6906d]/45 bg-[#fff8ef]/55 text-[#8e5a3a] transition hover:border-[#8e5a3a] hover:bg-[#f0e1cc] hover:text-[#754529] dark:border-[#8b684d] dark:bg-[#21180f]/55 dark:text-[#d3a57c] dark:hover:bg-[#2b2016]"
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-[90] border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:h-28 md:px-6">
          <Link to="/" className="flex shrink-0 items-center gap-x-1.5 pr-2 md:pr-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-border/20 md:h-20 md:w-20">
              <img
                src={siteAssets.logo}
                alt="Purnam Yogashala"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col text-[13px] lg:text-[16px] font-bold leading-[1.1] text-foreground uppercase tracking-wider">
              <span>Purnam</span>
              <span>Yogashala</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-3 md:flex lg:gap-4 xl:gap-6 text-[13px] lg:text-[15px]">
            <div className="group relative flex items-center h-full">
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
            <div className="group relative flex items-center h-full">
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
              className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/40 bg-background/50 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              <div className="relative h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M22 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#d8c6ae] md:hidden dark:border-[#5f4938] hover:bg-accent transition-colors"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <NavLink to="/contact" className="hidden md:inline-flex">
              <Button className="h-9 p-2 bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545] text-xs">
                Enquire Now
              </Button>
            </NavLink>
            <NavLink to={isAuthenticated ? "/customer/dashboard" : "/customer/login"} className="hidden md:inline-flex">
              <Button className="h-9 p-2 text-xs" variant="outline">
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

        {mobileMenuOpen && (
          <>
            <button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 bg-black/35 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="absolute top-full left-0 right-0 z-50 max-h-[85vh] overflow-y-auto border-t border-[#d8c6ae] bg-[#fffaf3] p-3 shadow-2xl md:hidden dark:border-[#5f4938] dark:bg-[#21180f]">
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
                {mobileCoursesOpen && (
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
                )}

                <button
                  type="button"
                  onClick={() => setMobileAboutOpen((prev) => !prev)}
                  className="flex min-h-11 w-full items-center justify-between rounded-md px-3 py-2 text-left text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:hover:bg-[#2b2016]"
                >
                  <span className="font-medium">About</span>
                  <span>{mobileAboutOpen ? "-" : "+"}</span>
                </button>
                {mobileAboutOpen && (
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
                )}

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
                      Enquire Now
                    </Button>
                  </Link>
                  <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Apply Now
                    </Button>
                  </Link>
                  <Link
                    to={isAuthenticated ? "/customer/dashboard" : "/customer/login"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="sm:col-span-2"
                  >
                    <Button variant="outline" className="w-full">
                      {isAuthenticated ? `My Bookings (${session?.name ?? "User"})` : "Login"}
                    </Button>
                  </Link>
                  {isAuthenticated && (
                    <button
                      type="button"
                      onClick={() => {
                        void logout();
                        setMobileMenuOpen(false);
                      }}
                      className="sm:col-span-2 rounded-md border border-[#d8c6ae] px-3 py-2 text-sm text-muted-foreground hover:bg-[#f0e1cc] hover:text-foreground dark:border-[#5f4938] dark:hover:bg-[#2b2016]"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
