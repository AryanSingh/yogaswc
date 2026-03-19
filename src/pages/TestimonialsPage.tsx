import Testimonials from "../components/Testimonials";
import {
  featuredTestimonialQuote,
} from "../data/siteContent";
import { useCmsContent } from "../context/CmsContentContext";

export default function TestimonialsPage() {
  const { videoTestimonials } = useCmsContent();

  return (
    <div className="py-10">
      <section className="mx-auto max-w-5xl px-4 pb-8 md:px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
          Student Testimonials
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Student Testimonials
        </h1>
        <p className="mt-4 max-w-3xl text-lg italic text-muted-foreground">
          "{featuredTestimonialQuote}"
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-6 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {videoTestimonials.map((video) => (
            <a
              key={video.href}
              href={video.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-[#d8c6ae] bg-[#fffaf3] shadow-sm transition hover:shadow-lg dark:border-[#5f4938] dark:bg-[#21180f]"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <div className="ml-1 h-0 w-0 border-t-[9px] border-b-[9px] border-l-[15px] border-t-transparent border-b-transparent border-l-white" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold leading-snug">
                  {video.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {video.student}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
