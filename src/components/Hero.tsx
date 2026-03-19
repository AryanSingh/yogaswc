import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { submitInquiry } from "../services/formSubmission";
import { useCmsContent } from "../context/CmsContentContext";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Hero() {
  const { siteAssets } = useCmsContent();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      return;
    }

    const onScroll = () => {
      const next = Math.min(window.scrollY * 0.25, 140);
      setParallaxY(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    await submitInquiry({ formType: "hero-brochure", email });
    navigate("/contact", { state: { email } });
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <img
        src={siteAssets.hero}
        alt="Yoga teacher training in India"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        style={{ transform: `translate3d(0, ${parallaxY}px, 0) scale(1.08)` }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/30 will-change-transform"
        style={{ transform: `translate3d(0, ${parallaxY * 0.5}px, 0)` }}
      />

      <div
        className="relative mx-auto max-w-5xl px-4 py-16 text-white sm:py-20 md:px-6 md:py-28"
        style={{ transform: `translate3d(0, ${parallaxY * -0.12}px, 0)` }}
      >
        <Badge className="mb-4 rounded-full bg-[#d3a57c] px-3 py-1 text-[10px] tracking-[0.16em] text-[#2a1d14] uppercase sm:mb-5 sm:px-4 sm:text-xs">
          Yoga Teacher Training in Goa
        </Badge>
        <h1 className="max-w-3xl text-3xl leading-tight font-semibold sm:text-4xl md:text-6xl md:leading-[1.12]">
          Deepen your practice at Agonda Beach with authentic yoga education.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/90 sm:mt-5 sm:text-base md:text-lg">
          Join immersive 100-hour and 200-hour programs guided by experienced
          teachers, daily asana practice, pranayama, meditation, and yogic
          philosophy in Goa.
        </p>

        <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-row">
          <Link to="/schedule" className="w-full sm:w-auto">
            <Button className="w-full bg-[#8e5a3a] px-7 text-white hover:bg-[#754529] sm:w-auto">
              View Upcoming Batches
            </Button>
          </Link>
          <Link to="/admissions" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full border-white/40 bg-white/5 px-7 text-white hover:bg-white/10 sm:w-auto"
            >
              Request Prospectus
            </Button>
          </Link>
          <Link to="/about" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full border-white/40 bg-white/5 px-7 text-white hover:bg-white/10 sm:w-auto"
            >
              About Us
            </Button>
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid max-w-xl gap-3 rounded-xl border border-white/20 bg-black/35 p-4 backdrop-blur sm:mt-8 sm:grid-cols-[1fr_auto]"
        >
          <Input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email for course details"
            className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
          />
          <Button className="w-full bg-[#b17752] text-white hover:bg-[#9a6545] sm:w-auto">
            Request Brochure
          </Button>
        </form>
        {submitted ? (
          <p className="mt-3 text-sm text-white/85">
            Thanks! We have received your request.
          </p>
        ) : null}
      </div>
    </section>
  );
}
