import { useEffect, useState } from "react";

import { useAdminAuth } from "../context/useAdminAuth";
import type {
  CmsBlogPost,
  CmsScheduleItem,
  CmsSiteSettings,
  CmsTestimonial,
  CmsVideoTestimonial,
} from "../types/admin";
import {
  deleteCmsBlogPost,
  deleteCmsScheduleItem,
  deleteCmsTestimonial,
  deleteCmsVideoTestimonial,
  fetchCmsBlogPosts,
  fetchCmsScheduleItems,
  fetchCmsSiteSettings,
  fetchCmsTestimonials,
  fetchCmsVideoTestimonials,
  saveCmsBlogPost,
  saveCmsScheduleItem,
  saveCmsTestimonial,
  saveCmsVideoTestimonial,
  uploadCmsAsset,
  upsertCmsSiteSettings,
} from "../services/cms";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { contactInfo, siteAssets } from "../data/siteContent";

const defaultSiteSettings: CmsSiteSettings = {
  heroImageUrl: siteAssets.hero,
  goaHeroImageUrl: siteAssets.goaHero,
  aboutHeroImageUrl: siteAssets.aboutHero,
  retreatsHeroImageUrl: siteAssets.retreatsHero,
  logoUrl: siteAssets.logo,
  yogaAllianceImageUrl: siteAssets.yogaAlliance,
  contactPhone: contactInfo.phone,
  contactEmail: contactInfo.email,
  contactAddress: contactInfo.address,
};

function emptyScheduleItem(displayOrder: number): Omit<CmsScheduleItem, "id"> {
  return {
    courseSlug: "",
    course: "",
    location: "Agonda, Goa",
    startDate: "",
    endDate: "",
    startDateISO: "",
    endDateISO: "",
    status: "Open",
    displayOrder,
  };
}

function emptyTestimonial(displayOrder: number): Omit<CmsTestimonial, "id"> {
  return {
    name: "",
    role: "",
    quote: "",
    displayOrder,
  };
}

function emptyVideoTestimonial(
  displayOrder: number,
): Omit<CmsVideoTestimonial, "id"> {
  return {
    title: "",
    student: "",
    href: "",
    thumbnailUrl: "",
    duration: "Video Review",
    displayOrder,
    isHomepage: false,
  };
}

function emptyBlogPost(displayOrder: number): Omit<CmsBlogPost, "id"> {
  return {
    slug: "",
    title: "",
    summary: "",
    image: "",
    intro: "",
    sections: [{ title: "", points: [""] }],
    displayOrder,
    isPublished: true,
  };
}

export default function AdminDashboardPage() {
  const { session, logout, isSupabaseConfigured } = useAdminAuth();

  const [settingsForm, setSettingsForm] =
    useState<CmsSiteSettings>(defaultSiteSettings);
  const [scheduleItems, setScheduleItems] = useState<CmsScheduleItem[]>([]);
  const [testimonials, setTestimonials] = useState<CmsTestimonial[]>([]);
  const [videoTestimonials, setVideoTestimonials] = useState<
    CmsVideoTestimonial[]
  >([]);
  const [blogPosts, setBlogPosts] = useState<CmsBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isUploadingAsset, setIsUploadingAsset] = useState(false);
  const [assetFolder, setAssetFolder] = useState("site");
  const [uploadedAssetUrl, setUploadedAssetUrl] = useState("");

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const [settings, schedule, written, videos, blog] = await Promise.all([
          fetchCmsSiteSettings(),
          fetchCmsScheduleItems(),
          fetchCmsTestimonials(),
          fetchCmsVideoTestimonials(),
          fetchCmsBlogPosts(),
        ]);

        if (!isMounted) {
          return;
        }

        if (settings) {
          setSettingsForm(settings);
        }
        setScheduleItems(schedule);
        setTestimonials(written);
        setVideoTestimonials(videos);
        setBlogPosts(blog);
      } catch (loadError) {
        if (!isMounted) {
          return;
        }
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Could not load CMS data.",
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void load();

    return () => {
      isMounted = false;
    };
  }, [isSupabaseConfigured]);

  const setSuccess = (value: string) => {
    setMessage(value);
    setError("");
  };

  const handleAssetUpload = async (file: File | null) => {
    if (!file) {
      return;
    }

    try {
      setIsUploadingAsset(true);
      setError("");
      const publicUrl = await uploadCmsAsset(file, assetFolder);
      setUploadedAssetUrl(publicUrl);
      setSuccess("Asset uploaded. You can paste the URL into any content field.");
    } catch (uploadError) {
      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "Could not upload asset.",
      );
    } finally {
      setIsUploadingAsset(false);
    }
  };

  const handleSettingsSave = async () => {
    try {
      await upsertCmsSiteSettings(settingsForm);
      setSuccess("Site settings saved.");
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Could not save site settings.",
      );
    }
  };

  if (!session) {
    return null;
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
            Admin CMS
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Welcome, {session.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{session.email}</p>
        </div>
        <Button variant="outline" onClick={() => void logout()}>
          Logout
        </Button>
      </div>

      {!isSupabaseConfigured ? (
        <div className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200">
          Supabase is not configured. Add <code>VITE_SUPABASE_URL</code> and{" "}
          <code>VITE_SUPABASE_ANON_KEY</code>, then run the CMS schema SQL.
        </div>
      ) : null}

      {message ? (
        <p className="mt-4 text-sm text-[#6a4a33] dark:text-[#efddca]">
          {message}
        </p>
      ) : null}
      {error ? (
        <p className="mt-4 text-sm text-red-600 dark:text-red-300">{error}</p>
      ) : null}
      {loading ? (
        <p className="mt-4 text-sm text-muted-foreground">Loading CMS data...</p>
      ) : null}

      <div className="mt-8 space-y-6">
        <Card className="border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
          <CardHeader>
            <CardTitle>Site Settings</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <Input
              placeholder="Hero image URL"
              value={settingsForm.heroImageUrl}
              onChange={(event) =>
                setSettingsForm((prev) => ({
                  ...prev,
                  heroImageUrl: event.target.value,
                }))
              }
            />
            <Input
              placeholder="Goa hero image URL"
              value={settingsForm.goaHeroImageUrl}
              onChange={(event) =>
                setSettingsForm((prev) => ({
                  ...prev,
                  goaHeroImageUrl: event.target.value,
                }))
              }
            />
            <Input
              placeholder="About hero image URL"
              value={settingsForm.aboutHeroImageUrl}
              onChange={(event) =>
                setSettingsForm((prev) => ({
                  ...prev,
                  aboutHeroImageUrl: event.target.value,
                }))
              }
            />
            <Input
              placeholder="Retreats hero image URL"
              value={settingsForm.retreatsHeroImageUrl}
              onChange={(event) =>
                setSettingsForm((prev) => ({
                  ...prev,
                  retreatsHeroImageUrl: event.target.value,
                }))
              }
            />
            <Input
              placeholder="Logo URL"
              value={settingsForm.logoUrl}
              onChange={(event) =>
                setSettingsForm((prev) => ({
                  ...prev,
                  logoUrl: event.target.value,
                }))
              }
            />
            <Input
              placeholder="Yoga Alliance image URL"
              value={settingsForm.yogaAllianceImageUrl}
              onChange={(event) =>
                setSettingsForm((prev) => ({
                  ...prev,
                  yogaAllianceImageUrl: event.target.value,
                }))
              }
            />
            <Input
              placeholder="Contact phone"
              value={settingsForm.contactPhone}
              onChange={(event) =>
                setSettingsForm((prev) => ({
                  ...prev,
                  contactPhone: event.target.value,
                }))
              }
            />
            <Input
              placeholder="Contact email"
              value={settingsForm.contactEmail}
              onChange={(event) =>
                setSettingsForm((prev) => ({
                  ...prev,
                  contactEmail: event.target.value,
                }))
              }
            />
            <div className="md:col-span-2">
              <Input
                placeholder="Contact address"
                value={settingsForm.contactAddress}
                onChange={(event) =>
                  setSettingsForm((prev) => ({
                    ...prev,
                    contactAddress: event.target.value,
                  }))
                }
              />
            </div>
            <div className="md:col-span-2">
              <Button
                onClick={() => void handleSettingsSave()}
                className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]"
              >
                Save Site Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
          <CardHeader>
            <CardTitle>Media Uploads</CardTitle>
            <p className="text-sm text-muted-foreground">
              Upload an image to Supabase Storage, then paste the generated URL
              into site settings, blog posts, or video thumbnails.
            </p>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-[220px_1fr]">
            <Select
              value={assetFolder}
              onChange={(event) => setAssetFolder(event.target.value)}
            >
              <option value="site">Site assets</option>
              <option value="blog">Blog images</option>
              <option value="testimonials">Testimonials</option>
            </Select>
            <Input
              type="file"
              accept="image/*"
              onChange={(event) =>
                void handleAssetUpload(event.target.files?.[0] ?? null)
              }
              disabled={isUploadingAsset}
            />
            <div className="md:col-span-2">
              <Input
                readOnly
                value={uploadedAssetUrl}
                placeholder={
                  isUploadingAsset
                    ? "Uploading..."
                    : "Uploaded asset URL will appear here"
                }
              />
            </div>
          </CardContent>
        </Card>

        <CmsListSection
          title="Schedule Items"
          description="Manage batch dates and retreat schedule rows."
          onAdd={() =>
            setScheduleItems((prev) => [
              ...prev,
              { id: `new-${Date.now()}`, ...emptyScheduleItem(prev.length) },
            ])
          }
        >
          {scheduleItems.map((item, index) => (
            <EditableCard
              key={item.id}
              title={item.course || `Schedule Item ${index + 1}`}
              onDelete={async () => {
                if (!item.id.startsWith("new-")) {
                  await deleteCmsScheduleItem(item.id);
                }
                setScheduleItems((prev) => prev.filter((entry) => entry.id !== item.id));
                setSuccess("Schedule item removed.");
              }}
              onSave={async () => {
                await saveCmsScheduleItem(item);
                setSuccess("Schedule item saved.");
                const refreshed = await fetchCmsScheduleItems();
                setScheduleItems(refreshed);
              }}
            >
              <div className="grid gap-3 md:grid-cols-3">
                <Input
                  placeholder="Course slug"
                  value={item.courseSlug}
                  onChange={(event) =>
                    setScheduleItems((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, courseSlug: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <Input
                  placeholder="Course name"
                  value={item.course}
                  onChange={(event) =>
                    setScheduleItems((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, course: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <Input
                  placeholder="Location"
                  value={item.location}
                  onChange={(event) =>
                    setScheduleItems((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, location: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <Input
                  placeholder="Start date label"
                  value={item.startDate}
                  onChange={(event) =>
                    setScheduleItems((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, startDate: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <Input
                  placeholder="End date label"
                  value={item.endDate}
                  onChange={(event) =>
                    setScheduleItems((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, endDate: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <Select
                  value={item.status}
                  onChange={(event) =>
                    setScheduleItems((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, status: event.target.value }
                          : entry,
                      ),
                    )
                  }
                >
                  <option value="Open">Open</option>
                  <option value="Inquiry">Inquiry</option>
                  <option value="Closed">Closed</option>
                </Select>
                <Input
                  placeholder="Start date ISO"
                  value={item.startDateISO || ""}
                  onChange={(event) =>
                    setScheduleItems((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, startDateISO: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <Input
                  placeholder="End date ISO"
                  value={item.endDateISO || ""}
                  onChange={(event) =>
                    setScheduleItems((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, endDateISO: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <Input
                  placeholder="Display order"
                  type="number"
                  value={item.displayOrder}
                  onChange={(event) =>
                    setScheduleItems((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? {
                              ...entry,
                              displayOrder: Number(event.target.value) || 0,
                            }
                          : entry,
                      ),
                    )
                  }
                />
              </div>
            </EditableCard>
          ))}
        </CmsListSection>

        <CmsListSection
          title="Written Testimonials"
          description="Manage the written reviews used across the site."
          onAdd={() =>
            setTestimonials((prev) => [
              ...prev,
              { id: `new-${Date.now()}`, ...emptyTestimonial(prev.length) },
            ])
          }
        >
          {testimonials.map((item, index) => (
            <EditableCard
              key={item.id}
              title={item.name || `Testimonial ${index + 1}`}
              onDelete={async () => {
                if (!item.id.startsWith("new-")) {
                  await deleteCmsTestimonial(item.id);
                }
                setTestimonials((prev) => prev.filter((entry) => entry.id !== item.id));
                setSuccess("Testimonial removed.");
              }}
              onSave={async () => {
                await saveCmsTestimonial(item);
                setSuccess("Testimonial saved.");
                setTestimonials(await fetchCmsTestimonials());
              }}
            >
              <div className="grid gap-3">
                <Input
                  placeholder="Name"
                  value={item.name}
                  onChange={(event) =>
                    setTestimonials((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, name: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <Input
                  placeholder="Role"
                  value={item.role}
                  onChange={(event) =>
                    setTestimonials((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, role: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <textarea
                  className="min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Quote"
                  value={item.quote}
                  onChange={(event) =>
                    setTestimonials((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, quote: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
              </div>
            </EditableCard>
          ))}
        </CmsListSection>

        <CmsListSection
          title="Video Testimonials"
          description="Manage the testimonial videos shown on the testimonials page and homepage."
          onAdd={() =>
            setVideoTestimonials((prev) => [
              ...prev,
              {
                id: `new-${Date.now()}`,
                ...emptyVideoTestimonial(prev.length),
              },
            ])
          }
        >
          {videoTestimonials.map((item, index) => (
            <EditableCard
              key={item.id}
              title={item.title || `Video Testimonial ${index + 1}`}
              onDelete={async () => {
                if (!item.id.startsWith("new-")) {
                  await deleteCmsVideoTestimonial(item.id);
                }
                setVideoTestimonials((prev) =>
                  prev.filter((entry) => entry.id !== item.id),
                );
                setSuccess("Video testimonial removed.");
              }}
              onSave={async () => {
                await saveCmsVideoTestimonial(item);
                setSuccess("Video testimonial saved.");
                setVideoTestimonials(await fetchCmsVideoTestimonials());
              }}
            >
              <div className="grid gap-3 md:grid-cols-2">
                <Input
                  placeholder="Title"
                  value={item.title}
                  onChange={(event) =>
                    setVideoTestimonials((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, title: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <Input
                  placeholder="Student label"
                  value={item.student}
                  onChange={(event) =>
                    setVideoTestimonials((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, student: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <Input
                  placeholder="YouTube/video URL"
                  value={item.href}
                  onChange={(event) =>
                    setVideoTestimonials((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, href: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <Input
                  placeholder="Thumbnail URL"
                  value={item.thumbnailUrl}
                  onChange={(event) =>
                    setVideoTestimonials((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, thumbnailUrl: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <Input
                  placeholder="Duration label"
                  value={item.duration}
                  onChange={(event) =>
                    setVideoTestimonials((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, duration: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={item.isHomepage}
                    onChange={(event) =>
                      setVideoTestimonials((prev) =>
                        prev.map((entry) =>
                          entry.id === item.id
                            ? { ...entry, isHomepage: event.target.checked }
                            : entry,
                        ),
                      )
                    }
                  />
                  Show on homepage
                </label>
              </div>
            </EditableCard>
          ))}
        </CmsListSection>

        <CmsListSection
          title="Blog Posts"
          description="Manage the replicated blog content shown on the site."
          onAdd={() =>
            setBlogPosts((prev) => [
              ...prev,
              { id: `new-${Date.now()}`, ...emptyBlogPost(prev.length) },
            ])
          }
        >
          {blogPosts.map((item, index) => (
            <EditableCard
              key={item.id}
              title={item.title || `Blog Post ${index + 1}`}
              onDelete={async () => {
                if (!item.id.startsWith("new-")) {
                  await deleteCmsBlogPost(item.id);
                }
                setBlogPosts((prev) => prev.filter((entry) => entry.id !== item.id));
                setSuccess("Blog post removed.");
              }}
              onSave={async () => {
                await saveCmsBlogPost(item);
                setSuccess("Blog post saved.");
                setBlogPosts(await fetchCmsBlogPosts());
              }}
            >
              <div className="grid gap-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <Input
                    placeholder="Slug"
                    value={item.slug}
                    onChange={(event) =>
                      setBlogPosts((prev) =>
                        prev.map((entry) =>
                          entry.id === item.id
                            ? { ...entry, slug: event.target.value }
                            : entry,
                        ),
                      )
                    }
                  />
                  <Input
                    placeholder="Title"
                    value={item.title}
                    onChange={(event) =>
                      setBlogPosts((prev) =>
                        prev.map((entry) =>
                          entry.id === item.id
                            ? { ...entry, title: event.target.value }
                            : entry,
                        ),
                      )
                    }
                  />
                </div>
                <Input
                  placeholder="Image URL"
                  value={item.image}
                  onChange={(event) =>
                    setBlogPosts((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, image: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <textarea
                  className="min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Summary"
                  value={item.summary}
                  onChange={(event) =>
                    setBlogPosts((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, summary: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <textarea
                  className="min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Intro"
                  value={item.intro}
                  onChange={(event) =>
                    setBlogPosts((prev) =>
                      prev.map((entry) =>
                        entry.id === item.id
                          ? { ...entry, intro: event.target.value }
                          : entry,
                      ),
                    )
                  }
                />
                <textarea
                  className="min-h-40 w-full rounded-md border border-input bg-background px-3 py-2 font-mono text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder='Sections JSON: [{"title":"Section","points":["Point 1","Point 2"]}]'
                  value={JSON.stringify(item.sections, null, 2)}
                  onChange={(event) => {
                    try {
                      const next = JSON.parse(event.target.value);
                      setBlogPosts((prev) =>
                        prev.map((entry) =>
                          entry.id === item.id
                            ? { ...entry, sections: Array.isArray(next) ? next : [] }
                            : entry,
                        ),
                      );
                    } catch {
                      // Allow editing without crashing; save will preserve last valid state.
                    }
                  }}
                />
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={item.isPublished}
                    onChange={(event) =>
                      setBlogPosts((prev) =>
                        prev.map((entry) =>
                          entry.id === item.id
                            ? { ...entry, isPublished: event.target.checked }
                            : entry,
                        ),
                      )
                    }
                  />
                  Published
                </label>
              </div>
            </EditableCard>
          ))}
        </CmsListSection>
      </div>
    </section>
  );
}

function CmsListSection({
  title,
  description,
  onAdd,
  children,
}: {
  title: string;
  description: string;
  onAdd: () => void;
  children: React.ReactNode;
}) {
  return (
    <Card className="border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle>{title}</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <Button variant="outline" onClick={onAdd}>
          Add
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}

function EditableCard({
  title,
  children,
  onSave,
  onDelete,
}: {
  title: string;
  children: React.ReactNode;
  onSave: () => Promise<void>;
  onDelete: () => Promise<void>;
}) {
  return (
    <div className="rounded-xl border border-[#e7d8c2] p-4 dark:border-[#4c3a2d]">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => void onDelete()}>
            Delete
          </Button>
          <Button
            onClick={() => void onSave()}
            className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]"
          >
            Save
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
}
