import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { submitInquiry } from "../services/formSubmission";
import { siteAssets } from "../data/siteContent";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Hero() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/30" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 text-white md:px-6 md:py-32">
        <Badge className="mb-5 rounded-full bg-[#d3a57c] px-4 py-1 text-xs tracking-[0.16em] text-[#2a1d14] uppercase">
          Yoga Teacher Training in Goa
        </Badge>
        <h1 className="max-w-3xl text-4xl leading-tight font-semibold md:text-6xl md:leading-[1.12]">
          Deepen your practice at Agonda Beach with authentic yoga education.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/85 md:text-lg">
          Join immersive 100-hour and 200-hour programs guided by experienced
          teachers, daily asana practice, pranayama, meditation, and yogic
          philosophy in Goa.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/schedule">
            <Button className="bg-[#8e5a3a] px-7 text-white hover:bg-[#754529]">
              View Upcoming Batches
            </Button>
          </Link>
          <Link to="/admissions">
            <Button
              variant="outline"
              className="border-white/40 bg-white/5 px-7 text-white hover:bg-white/10"
            >
              Request Prospectus
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant="outline"
              className="border-white/40 bg-white/5 px-7 text-white hover:bg-white/10"
            >
              About Us
            </Button>
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid max-w-xl gap-3 rounded-xl border border-white/20 bg-black/30 p-4 backdrop-blur sm:grid-cols-[1fr_auto]"
        >
          <Input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email for course details"
            className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
          />
          <Button className="bg-[#b17752] text-white hover:bg-[#9a6545]">
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
