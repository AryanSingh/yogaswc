import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { isSupabaseConfigured } from "../lib/supabaseClient";
import {
  fetchCmsBlogPosts,
  fetchCmsScheduleItems,
  fetchCmsSiteSettings,
  fetchCmsTestimonials,
  fetchCmsVideoTestimonials,
} from "../services/cms";
import { courseScheduleItems } from "../data/courseSchedule";
import {
  blogPosts as fallbackBlogPosts,
  contactInfo as fallbackContactInfo,
  siteAssets as fallbackSiteAssets,
  testimonials as fallbackTestimonials,
  videoTestimonials as fallbackVideoTestimonials,
} from "../data/siteContent";

function normalizeAssetUrl(url: string) {
  if (!url) {
    return url;
  }

  if (/^(https?:)?\/\//.test(url) || url.startsWith("data:")) {
    return url;
  }

  const baseUrl =
    typeof import.meta !== "undefined" && import.meta.env?.BASE_URL
      ? import.meta.env.BASE_URL
      : "/yogaswc/";
  const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const cleanedUrl = url.startsWith("/") ? url.slice(1) : url;

  return `${base}${cleanedUrl}`;
}

type CmsContentValue = {
  siteAssets: typeof fallbackSiteAssets;
  contactInfo: typeof fallbackContactInfo;
  scheduleItems: typeof courseScheduleItems;
  testimonials: typeof fallbackTestimonials;
  videoTestimonials: typeof fallbackVideoTestimonials;
  homepageVideoTestimonials: typeof fallbackVideoTestimonials;
  blogPosts: typeof fallbackBlogPosts;
};

const fallbackCmsContent: CmsContentValue = {
  siteAssets: fallbackSiteAssets,
  contactInfo: fallbackContactInfo,
  scheduleItems: courseScheduleItems,
  testimonials: fallbackTestimonials,
  videoTestimonials: fallbackVideoTestimonials,
  homepageVideoTestimonials: fallbackVideoTestimonials.slice(0, 3),
  blogPosts: fallbackBlogPosts,
};

const CmsContentContext = createContext<CmsContentValue>(fallbackCmsContent);

export function CmsContentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [siteSettings, setSiteSettings] = useState<{
    heroImageUrl: string;
    goaHeroImageUrl: string;
    aboutHeroImageUrl: string;
    retreatsHeroImageUrl: string;
    logoUrl: string;
    yogaAllianceImageUrl: string;
    contactPhone: string;
    contactEmail: string;
    contactAddress: string;
  } | null>(null);
  const [scheduleItems, setScheduleItems] = useState(courseScheduleItems);
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [videoTestimonials, setVideoTestimonials] = useState(
    fallbackVideoTestimonials,
  );
  const [homepageVideoTestimonials, setHomepageVideoTestimonials] = useState(
    fallbackVideoTestimonials.slice(0, 3),
  );
  const [blogPosts, setBlogPosts] = useState(fallbackBlogPosts);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      return;
    }

    let isMounted = true;

    const load = async () => {
      try {
        const [
          fetchedSettings,
          fetchedSchedule,
          fetchedTestimonials,
          fetchedVideos,
          fetchedBlogPosts,
        ] = await Promise.all([
          fetchCmsSiteSettings().catch(() => null),
          fetchCmsScheduleItems().catch(() => []),
          fetchCmsTestimonials().catch(() => []),
          fetchCmsVideoTestimonials().catch(() => []),
          fetchCmsBlogPosts().catch(() => []),
        ]);

        if (!isMounted) {
          return;
        }

        if (fetchedSettings) {
          setSiteSettings(fetchedSettings);
        }

        if (fetchedSchedule.length > 0) {
          setScheduleItems(
            fetchedSchedule.map((item) => ({
              courseSlug: item.courseSlug,
              course: item.course,
              location: item.location,
              startDate: item.startDate,
              endDate: item.endDate,
              startDateISO: item.startDateISO,
              endDateISO: item.endDateISO,
              status: item.status,
            })),
          );
        }

        if (fetchedTestimonials.length > 0) {
          setTestimonials(
            fetchedTestimonials.map((item) => ({
              name: item.name,
              role: item.role,
              quote: item.quote,
            })),
          );
        }

        if (fetchedVideos.length > 0) {
          const mappedVideos = fetchedVideos.map((item) => ({
            title: item.title,
            duration: item.duration,
            thumbnail: normalizeAssetUrl(item.thumbnailUrl),
            student: item.student,
            href: item.href,
          }));
          const homepageVideos = fetchedVideos
            .filter((item) => item.isHomepage)
            .map((item) => ({
              title: item.title,
              duration: item.duration,
              thumbnail: normalizeAssetUrl(item.thumbnailUrl),
              student: item.student,
              href: item.href,
            }));

          setVideoTestimonials(mappedVideos);
          setHomepageVideoTestimonials(
            homepageVideos.length > 0 ? homepageVideos : mappedVideos.slice(0, 3),
          );
        }

        if (fetchedBlogPosts.length > 0) {
          setBlogPosts(
            fetchedBlogPosts
              .filter((item) => item.isPublished)
              .map((item) => ({
                slug: item.slug,
                title: item.title,
                summary: item.summary,
                image: normalizeAssetUrl(item.image),
                intro: item.intro,
                sections: item.sections,
              })),
          );
        }
      } catch {
        // Keep hardcoded fallbacks when CMS data is unavailable.
      }
    };

    void load();

    return () => {
      isMounted = false;
    };
  }, []);

  const derivedSiteAssets = useMemo(
    () => ({
      ...fallbackSiteAssets,
      hero: normalizeAssetUrl(siteSettings?.heroImageUrl || fallbackSiteAssets.hero),
      goaHero: normalizeAssetUrl(
        siteSettings?.goaHeroImageUrl || fallbackSiteAssets.goaHero,
      ),
      aboutHero: normalizeAssetUrl(
        siteSettings?.aboutHeroImageUrl || fallbackSiteAssets.aboutHero,
      ),
      retreatsHero:
        normalizeAssetUrl(
          siteSettings?.retreatsHeroImageUrl || fallbackSiteAssets.retreatsHero,
        ),
      logo: normalizeAssetUrl(siteSettings?.logoUrl || fallbackSiteAssets.logo),
      yogaAlliance: normalizeAssetUrl(
        siteSettings?.yogaAllianceImageUrl || fallbackSiteAssets.yogaAlliance,
      ),
    }),
    [siteSettings],
  );

  const derivedContactInfo = useMemo(
    () => ({
      phone: siteSettings?.contactPhone || fallbackContactInfo.phone,
      email: siteSettings?.contactEmail || fallbackContactInfo.email,
      address: siteSettings?.contactAddress || fallbackContactInfo.address,
    }),
    [siteSettings],
  );

  const value = useMemo<CmsContentValue>(
    () => ({
      siteAssets: derivedSiteAssets,
      contactInfo: derivedContactInfo,
      scheduleItems,
      testimonials,
      videoTestimonials,
      homepageVideoTestimonials,
      blogPosts,
    }),
    [
      derivedSiteAssets,
      derivedContactInfo,
      scheduleItems,
      testimonials,
      videoTestimonials,
      homepageVideoTestimonials,
      blogPosts,
    ],
  );

  return (
    <CmsContentContext.Provider value={value}>
      {children}
    </CmsContentContext.Provider>
  );
}

export function useCmsContent() {
  return useContext(CmsContentContext);
}
