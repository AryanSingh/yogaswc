import fs from "node:fs";
import path from "node:path";

import { blogPosts, courses } from "../src/data/siteContent.ts";

const cwd = process.cwd();
const distDir = path.join(cwd, "dist");
const siteUrl =
  process.env.VITE_SITE_URL ||
  process.env.SITE_URL ||
  "https://aryansingh.github.io/yogaswc";

const normalizedSiteUrl = siteUrl.endsWith("/")
  ? siteUrl.slice(0, -1)
  : siteUrl;

const staticRoutes = [
  "/",
  "/courses",
  "/retreats",
  "/about",
  "/about/philosophy",
  "/about/campus",
  "/about/certification",
  "/teachers",
  "/accommodation",
  "/schedule",
  "/admissions",
  "/faq",
  "/contact",
  "/enquiry",
  "/testimonials",
  "/blog",
  "/privacy-policy",
];

const courseRoutes = courses.map((course) => `/courses/${course.slug}`);
const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
const allRoutes = [...staticRoutes, ...courseRoutes, ...blogRoutes];

const today = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    const location =
      route === "/"
        ? `${normalizedSiteUrl}/`
        : `${normalizedSiteUrl}${route}`;
    return `  <url>
    <loc>${location}</loc>
    <lastmod>${today}</lastmod>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${normalizedSiteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(distDir, "robots.txt"), robots, "utf8");

console.log(
  JSON.stringify({
    siteUrl: normalizedSiteUrl,
    routes: allRoutes.length,
    files: ["dist/sitemap.xml", "dist/robots.txt"],
  }),
);
