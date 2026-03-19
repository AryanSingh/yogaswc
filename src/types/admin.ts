export type AdminSession = {
  adminId: string;
  email: string;
  name: string;
};

export type CmsSiteSettings = {
  heroImageUrl: string;
  goaHeroImageUrl: string;
  aboutHeroImageUrl: string;
  retreatsHeroImageUrl: string;
  logoUrl: string;
  yogaAllianceImageUrl: string;
  contactPhone: string;
  contactEmail: string;
  contactAddress: string;
};

export type CmsScheduleItem = {
  id: string;
  courseSlug: string;
  course: string;
  location: string;
  startDate: string;
  endDate: string;
  startDateISO?: string;
  endDateISO?: string;
  status: string;
  displayOrder: number;
};

export type CmsTestimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  displayOrder: number;
};

export type CmsVideoTestimonial = {
  id: string;
  title: string;
  student: string;
  href: string;
  thumbnailUrl: string;
  duration: string;
  displayOrder: number;
  isHomepage: boolean;
};

export type CmsBlogPost = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  image: string;
  intro: string;
  sections: {
    title: string;
    points: string[];
  }[];
  displayOrder: number;
  isPublished: boolean;
};
