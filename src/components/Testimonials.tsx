import { Link } from "react-router-dom";

import { testimonials } from "../data/siteContent";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-5xl px-4 pt-20 pb-16 md:px-6">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
          Student Voices
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Experiences from our global yoga community
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card
            key={item.name}
            className="yoga-card-lift yoga-soft-glow border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]"
          >
            <CardHeader>
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <p className="text-sm text-[#8a6a4f] dark:text-[#c9a98b]">
                {item.role}
              </p>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-[#5f4a36] dark:text-[#d7c4ae]">
              "{item.quote}"
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/testimonials">
          <Button variant="outline">Read More Reviews</Button>
        </Link>
      </div>
    </section>
  );
}
