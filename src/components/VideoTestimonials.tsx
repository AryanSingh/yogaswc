import { videoTestimonials } from "../data/siteContent";
import { Button } from "./ui/button";

export default function VideoTestimonials() {
  return (
    <section className="bg-[#fbf8f1] py-16 md:py-24 dark:bg-[#17120d]">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:mb-16 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#8e5a3a] uppercase dark:text-[#d3a57c]">
              Student Stories
            </h2>
            <h1 className="text-3xl font-semibold tracking-tight text-[#2f2920] md:text-5xl dark:text-[#f2e8d6]">
              Watch our student experiences
            </h1>
          </div>
          <a
            href="https://youtube.com/@purnamyogaschoolIndia"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline" className="border-[#8e5a3a] text-[#8e5a3a] hover:bg-[#8e5a3a]/5 dark:border-[#d3a57c] dark:text-[#d3a57c]">
              View All Video Reviews
            </Button>
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videoTestimonials.map((video) => (
            <a
              key={video.href}
              href={video.href}
              target="_blank"
              rel="noreferrer"
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-black shadow-lg shadow-black/5"
            >
              <div className="aspect-video overflow-hidden opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <div className="h-0 w-0 border-t-[8px] border-b-[8px] border-l-[14px] border-t-transparent border-b-transparent border-l-white ml-1" />
                </div>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold">{video.title}</h3>
                    <p className="text-[10px] text-white/80">{video.student}</p>
                  </div>
                  <span className="text-[10px] bg-black/40 px-2 py-1 rounded backdrop-blur">
                    {video.duration}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
