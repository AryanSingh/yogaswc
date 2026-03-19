import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { useCmsContent } from "../context/CmsContentContext";
import { courses } from "../data/siteContent";

const defaultTitle =
  "Purnam Yogashala Goa | Yoga Teacher Training & Retreats in Agonda";
const defaultDescription =
  "Join authentic yoga teacher training and retreats at Purnam Yogashala in Agonda Beach, Goa. Explore 100 hour and 200 hour TTC programs, retreats, testimonials, and admissions.";

const defaultKeywords = [
  "Purnam Yogashala Goa",
  "yoga teacher training Goa",
  "yoga teacher training India",
  "100 hour yoga teacher training Goa",
  "200 hour yoga teacher training Goa",
  "yoga retreat Goa",
  "Agonda Beach yoga school",
];

function ensureMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function ensureLink(rel: string, href: string) {
  let element = document.head.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
}

function ensureStructuredData(data: object) {
  const id = "seo-structured-data";
  let script = document.getElementById(id) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

function buildAbsoluteUrl(pathname: string) {
  return new URL(pathname, window.location.origin).toString();
}

function normalizeTitle(title: string) {
  return title.includes("Purnam Yogashala")
    ? title
    : `${title} | Purnam Yogashala Goa`;
}

function getSeoForPath(
  pathname: string,
  contactInfo: { phone: string; email: string; address: string },
) {
  if (pathname === "/") {
    return {
      title: defaultTitle,
      description: defaultDescription,
      keywords: defaultKeywords,
      type: "website",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "YogaStudio",
        name: "Purnam Yogashala Goa",
        description: defaultDescription,
        url: buildAbsoluteUrl("/"),
        telephone: contactInfo.phone,
        email: contactInfo.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: contactInfo.address,
          addressLocality: "Agonda",
          addressRegion: "Goa",
          addressCountry: "IN",
        },
      },
    };
  }

  if (pathname === "/courses") {
    return {
      title: "Yoga Teacher Training Courses in Goa",
      description:
        "Compare 100 hour and 200 hour yoga teacher training courses at Purnam Yogashala Goa, including curriculum, schedule, fees, and admissions details.",
      keywords: [
        ...defaultKeywords,
        "yoga courses Goa",
        "200 hour YTT India",
      ],
      type: "website",
    };
  }

  if (pathname === "/retreats") {
    return {
      title: "Yoga Retreats in Goa",
      description:
        "Explore yoga and meditation retreats in Agonda, Goa with daily practice, sound healing, nourishing meals, beachside accommodation, and restorative routines.",
      keywords: [...defaultKeywords, "Goa yoga retreat", "meditation retreat India"],
      type: "website",
    };
  }

  if (pathname === "/about") {
    return {
      title: "About Purnam Yogashala Goa",
      description:
        "Learn about Purnam Yogashala Goa, our philosophy, Agonda Beach campus, traditional yoga teaching approach, and Yoga Alliance aligned training environment.",
      keywords: [...defaultKeywords, "about yoga school Goa"],
      type: "website",
    };
  }

  if (pathname === "/teachers") {
    return {
      title: "Yoga Teachers at Purnam Yogashala Goa",
      description:
        "Meet the teachers at Purnam Yogashala Goa guiding asana, pranayama, philosophy, anatomy, meditation, and teaching methodology.",
      keywords: [...defaultKeywords, "Goa yoga teachers"],
      type: "profile",
    };
  }

  if (pathname === "/accommodation") {
    return {
      title: "Accommodation & Food at Purnam Yogashala Goa",
      description:
        "View accommodation and food details at Purnam Yogashala Goa, including bungalow stay options, vegetarian meals, Wi-Fi, and the Agonda Beach setting.",
      keywords: [...defaultKeywords, "yoga accommodation Goa", "yoga food Goa"],
      type: "website",
    };
  }

  if (pathname === "/schedule") {
    return {
      title: "Upcoming Yoga Course Schedule in Goa",
      description:
        "Check upcoming 100 hour, 200 hour, and retreat dates at Purnam Yogashala Goa with intake windows, locations, and availability.",
      keywords: [...defaultKeywords, "yoga schedule Goa", "upcoming yoga training dates"],
      type: "website",
    };
  }

  if (pathname === "/admissions" || pathname === "/contact" || pathname === "/enquiry") {
    return {
      title: "Admissions & Enquiry | Purnam Yogashala Goa",
      description:
        "Apply for yoga teacher training or retreats at Purnam Yogashala Goa. Contact admissions for batches, fees, accommodation, and booking support.",
      keywords: [...defaultKeywords, "yoga admissions Goa", "Purnam Yogashala enquiry"],
      type: "website",
    };
  }

  if (pathname === "/faq") {
    return {
      title: "Yoga Teacher Training FAQ",
      description:
        "Find answers about yoga teacher training in Goa, including eligibility, certification, styles taught, fees, and admissions.",
      keywords: [...defaultKeywords, "yoga FAQ Goa"],
      type: "website",
    };
  }

  if (pathname === "/testimonials") {
    return {
      title: "Student Testimonials | Purnam Yogashala Goa",
      description:
        "Read student reviews and watch testimonial videos from yoga teacher training and retreat participants at Purnam Yogashala Goa.",
      keywords: [...defaultKeywords, "Purnam Yogashala reviews", "yoga testimonials Goa"],
      type: "website",
    };
  }

  if (pathname === "/blog") {
    return {
      title: "Yoga Blog | Purnam Yogashala Goa",
      description:
        "Explore articles on yoga teacher training in Goa and India, practice transformation, the benefits of Goa, and how to choose the right yoga school.",
      keywords: [...defaultKeywords, "yoga blog Goa", "yoga articles India"],
      type: "website",
    };
  }

  if (pathname === "/privacy-policy") {
    return {
      title: "Privacy Policy | Purnam Yogashala Goa",
      description:
        "Read the privacy policy for Purnam Yogashala Goa, including information on enquiries, admissions, bookings, and data handling.",
      keywords: [...defaultKeywords, "privacy policy yoga school"],
      type: "website",
    };
  }

  return {
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeywords,
    type: "website",
  };
}

export default function SeoManager() {
  const location = useLocation();
  const params = useParams();
  const { blogPosts, contactInfo } = useCmsContent();

  useEffect(() => {
    let title = defaultTitle;
    let description = defaultDescription;
    let keywords = defaultKeywords;
    let structuredData: object | undefined;

    if (location.pathname.startsWith("/courses/")) {
      const course = courses.find((item) => item.slug === params.slug);
      if (course) {
        title = `${course.title} in Goa`;
        description = `${course.title} at Purnam Yogashala Goa. ${course.subtitle}. Explore curriculum, daily schedule, inclusions, exclusions, and upcoming batches.`;
        keywords = [...defaultKeywords, course.title, "yoga curriculum Goa"];
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Course",
          name: course.title,
          description: description,
          provider: {
            "@type": "Organization",
            name: "Purnam Yogashala Goa",
            url: buildAbsoluteUrl("/"),
          },
        };
      }
    } else if (location.pathname.startsWith("/blog/")) {
      const post = blogPosts.find((item) => item.slug === params.slug);
      if (post) {
        title = post.title;
        description = post.summary;
        keywords = [...defaultKeywords, post.title, "yoga blog"];
        structuredData = {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.summary,
          author: {
            "@type": "Organization",
            name: "Purnam Yogashala Goa",
          },
          publisher: {
            "@type": "Organization",
            name: "Purnam Yogashala Goa",
          },
          mainEntityOfPage: buildAbsoluteUrl(location.pathname),
        };
      }
    } else {
      const seo = getSeoForPath(location.pathname, contactInfo);
      title = seo.title;
      description = seo.description;
      keywords = seo.keywords;
      structuredData = seo.structuredData;
    }

    const normalizedTitle = normalizeTitle(title);
    const canonical = buildAbsoluteUrl(location.pathname);
    const ogImage = buildAbsoluteUrl("/assets/py_logo.png");

    document.title = normalizedTitle;

    ensureMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    ensureMeta('meta[name="keywords"]', {
      name: "keywords",
      content: keywords.join(", "),
    });
    ensureMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-image-preview:large",
    });
    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: normalizedTitle,
    });
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    ensureMeta('meta[property="og:type"]', {
      property: "og:type",
      content: location.pathname.startsWith("/blog/") ? "article" : "website",
    });
    ensureMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
    ensureMeta('meta[property="og:image"]', {
      property: "og:image",
      content: ogImage,
    });
    ensureMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    ensureMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: normalizedTitle,
    });
    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    ensureMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: ogImage,
    });
    ensureLink("canonical", canonical);

    if (structuredData) {
      ensureStructuredData(structuredData);
    }
  }, [contactInfo, location.pathname, params.slug]);

  return null;
}
