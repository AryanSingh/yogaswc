import { useCmsContent } from "../context/CmsContentContext";

export default function Welcome() {
  const { siteAssets } = useCmsContent();

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#8e5a3a] uppercase dark:text-[#d3a57c]">
                Our Tradition
              </h2>
              <h1 className="text-3xl font-semibold tracking-tight text-[#2f2920] md:text-5xl dark:text-[#f2e8d6]">
                Welcome to Purnam Yogashala
              </h1>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Purnam Yogashala is a Yoga Alliance registered school which provides an insight to Asana, Pranayama and other practices coming from the tradition of Hatha Yoga.
              </p>
              <p>
                Daily asana classes as well as teacher training courses are conducted throughout the year. The classes are deep, spiritual, and informative. At the end of each class, a short talk (Satsang) is given where any questions regarding philosophy, practice, love, life, and everything in between are welcome.
              </p>
              <p>
                Purnam Yogashala is a unique and peaceful yoga school on Agonda Beach, South Goa, India, that offers you USA Yoga Alliance registered 200 hours teacher training (YTTC) and continuing yoga education. Our team consists of qualified and experienced practitioners, Masters of yogic science who have been teaching the ancient wisdom of yoga for many years.
              </p>
            </div>
          </div>
          
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={siteAssets.aboutHero} 
              alt="Yoga practice at Purnam Yogashala" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
