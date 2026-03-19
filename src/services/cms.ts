import { supabase } from "../lib/supabaseClient";
import type {
  CmsBlogPost,
  CmsScheduleItem,
  CmsSiteSettings,
  CmsTestimonial,
  CmsVideoTestimonial,
} from "../types/admin";

export const CMS_ASSET_BUCKET = "cms-assets";

function requireSupabase() {
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  return supabase;
}

export async function fetchCmsSiteSettings(): Promise<CmsSiteSettings | null> {
  const client = requireSupabase();
  const { data, error } = await client
    .from("cms_site_settings")
    .select("*")
    .eq("id", 1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  return {
    heroImageUrl: data.hero_image_url,
    goaHeroImageUrl: data.goa_hero_image_url,
    aboutHeroImageUrl: data.about_hero_image_url,
    retreatsHeroImageUrl: data.retreats_hero_image_url,
    logoUrl: data.logo_url,
    yogaAllianceImageUrl: data.yoga_alliance_image_url,
    contactPhone: data.contact_phone,
    contactEmail: data.contact_email,
    contactAddress: data.contact_address,
  };
}

export async function upsertCmsSiteSettings(settings: CmsSiteSettings) {
  const client = requireSupabase();

  const { error } = await client.from("cms_site_settings").upsert(
    {
      id: 1,
      hero_image_url: settings.heroImageUrl,
      goa_hero_image_url: settings.goaHeroImageUrl,
      about_hero_image_url: settings.aboutHeroImageUrl,
      retreats_hero_image_url: settings.retreatsHeroImageUrl,
      logo_url: settings.logoUrl,
      yoga_alliance_image_url: settings.yogaAllianceImageUrl,
      contact_phone: settings.contactPhone,
      contact_email: settings.contactEmail,
      contact_address: settings.contactAddress,
    },
    { onConflict: "id" },
  );

  if (error) {
    throw error;
  }
}

export async function fetchCmsScheduleItems(): Promise<CmsScheduleItem[]> {
  const client = requireSupabase();
  const { data, error } = await client
    .from("cms_schedule_items")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map((item) => ({
    id: item.id,
    courseSlug: item.course_slug,
    course: item.course,
    location: item.location,
    startDate: item.start_date,
    endDate: item.end_date,
    startDateISO: item.start_date_iso ?? undefined,
    endDateISO: item.end_date_iso ?? undefined,
    status: item.status,
    displayOrder: item.display_order ?? 0,
  }));
}

export async function saveCmsScheduleItem(
  item: Omit<CmsScheduleItem, "id"> & { id?: string },
) {
  const client = requireSupabase();
  const payload = {
    id: item.id,
    course_slug: item.courseSlug,
    course: item.course,
    location: item.location,
    start_date: item.startDate,
    end_date: item.endDate,
    start_date_iso: item.startDateISO || null,
    end_date_iso: item.endDateISO || null,
    status: item.status,
    display_order: item.displayOrder,
  };

  const { error } = item.id
    ? await client.from("cms_schedule_items").update(payload).eq("id", item.id)
    : await client.from("cms_schedule_items").insert(payload);

  if (error) {
    throw error;
  }
}

export async function deleteCmsScheduleItem(id: string) {
  const client = requireSupabase();
  const { error } = await client.from("cms_schedule_items").delete().eq("id", id);
  if (error) {
    throw error;
  }
}

export async function fetchCmsTestimonials(): Promise<CmsTestimonial[]> {
  const client = requireSupabase();
  const { data, error } = await client
    .from("cms_testimonials")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map((item) => ({
    id: item.id,
    name: item.name,
    role: item.role,
    quote: item.quote,
    displayOrder: item.display_order ?? 0,
  }));
}

export async function saveCmsTestimonial(
  item: Omit<CmsTestimonial, "id"> & { id?: string },
) {
  const client = requireSupabase();
  const payload = {
    id: item.id,
    name: item.name,
    role: item.role,
    quote: item.quote,
    display_order: item.displayOrder,
  };

  const { error } = item.id
    ? await client.from("cms_testimonials").update(payload).eq("id", item.id)
    : await client.from("cms_testimonials").insert(payload);

  if (error) {
    throw error;
  }
}

export async function deleteCmsTestimonial(id: string) {
  const client = requireSupabase();
  const { error } = await client.from("cms_testimonials").delete().eq("id", id);
  if (error) {
    throw error;
  }
}

export async function fetchCmsVideoTestimonials(): Promise<CmsVideoTestimonial[]> {
  const client = requireSupabase();
  const { data, error } = await client
    .from("cms_video_testimonials")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map((item) => ({
    id: item.id,
    title: item.title,
    student: item.student,
    href: item.href,
    thumbnailUrl: item.thumbnail_url,
    duration: item.duration,
    displayOrder: item.display_order ?? 0,
    isHomepage: item.is_homepage ?? false,
  }));
}

export async function saveCmsVideoTestimonial(
  item: Omit<CmsVideoTestimonial, "id"> & { id?: string },
) {
  const client = requireSupabase();
  const payload = {
    id: item.id,
    title: item.title,
    student: item.student,
    href: item.href,
    thumbnail_url: item.thumbnailUrl,
    duration: item.duration,
    display_order: item.displayOrder,
    is_homepage: item.isHomepage,
  };

  const { error } = item.id
    ? await client
        .from("cms_video_testimonials")
        .update(payload)
        .eq("id", item.id)
    : await client.from("cms_video_testimonials").insert(payload);

  if (error) {
    throw error;
  }
}

export async function deleteCmsVideoTestimonial(id: string) {
  const client = requireSupabase();
  const { error } = await client
    .from("cms_video_testimonials")
    .delete()
    .eq("id", id);
  if (error) {
    throw error;
  }
}

export async function uploadCmsAsset(file: File, folder = "site") {
  const client = requireSupabase();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]+/g, "-");
  const path = `${folder}/${Date.now()}-${safeName}`;

  const { error } = await client.storage
    .from(CMS_ASSET_BUCKET)
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw error;
  }

  const { data } = client.storage.from(CMS_ASSET_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export async function fetchCmsBlogPosts(): Promise<CmsBlogPost[]> {
  const client = requireSupabase();
  const { data, error } = await client
    .from("cms_blog_posts")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    summary: item.summary,
    image: item.image,
    intro: item.intro,
    sections: Array.isArray(item.sections) ? item.sections : [],
    displayOrder: item.display_order ?? 0,
    isPublished: item.is_published ?? true,
  }));
}

export async function saveCmsBlogPost(
  item: Omit<CmsBlogPost, "id"> & { id?: string },
) {
  const client = requireSupabase();
  const payload = {
    id: item.id,
    slug: item.slug,
    title: item.title,
    summary: item.summary,
    image: item.image,
    intro: item.intro,
    sections: item.sections,
    display_order: item.displayOrder,
    is_published: item.isPublished,
  };

  const { error } = item.id
    ? await client.from("cms_blog_posts").update(payload).eq("id", item.id)
    : await client.from("cms_blog_posts").insert(payload);

  if (error) {
    throw error;
  }
}

export async function deleteCmsBlogPost(id: string) {
  const client = requireSupabase();
  const { error } = await client.from("cms_blog_posts").delete().eq("id", id);
  if (error) {
    throw error;
  }
}
