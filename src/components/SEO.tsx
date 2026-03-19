import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

export default function SEO({ 
  title = "Purnam Yogashala Goa | Authentic Teacher Training & Retreats",
  description = "Discover authentic yoga teacher training and retreats at Purnam Yogashala in Agonda Beach, Goa. 100hr and 200hr TTC programs guided by experienced Indian teachers.",
  keywords = "yoga school goa, yoga teacher training india, 200 hour yoga ttc goa, agonda beach yoga, purnam yogashala, meditation retreats india",
  image = "/assets/py_logo_cropped.png",
  type = "website"
}: SEOProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Update Meta Tags
    const updateMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let element = document.querySelector(`${attr === "name" ? 'meta[name="' : 'meta[property="'}${name}"]`);
      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        element.setAttribute("content", content);
        document.head.appendChild(element);
      }
    };

    updateMeta("description", description);
    updateMeta("keywords", keywords);
    updateMeta("og:title", title, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:image", image, "property");
    updateMeta("og:url", `https://purnamyogashala.com${pathname}`, "property");
    updateMeta("og:type", type, "property");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", image);

    // Schema.org JSON-LD for LocalBusiness on Home Page
    if (pathname === "/") {
      const scriptId = "json-ld-local-business";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        script.text = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Purnam Yogashala",
          "image": "https://purnamyogashala.com/assets/py_logo_cropped.png",
          "description": "Authentic Yoga Teacher Training School and Retreat center in Agonda Beach, Goa.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Agonda Beach (left end)",
            "addressLocality": "Agonda",
            "addressRegion": "Goa",
            "postalCode": "403702",
            "addressCountry": "IN"
          },
          "url": "https://purnamyogashala.com",
          "telephone": "+918219643223",
          "priceRange": "$$",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Yoga Courses",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "200-Hour Yoga Teacher Training",
                  "description": "Comprehensive Yoga Alliance certified training in Goa."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "100-Hour Yoga Teacher Training",
                  "description": "Foundational teacher training immersion in South Goa."
                }
              }
            ]
          }
        });
        document.head.appendChild(script);
      }
    }
  }, [title, description, keywords, image, type, pathname]);

  return null;
}

