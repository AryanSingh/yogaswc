import { Link } from "react-router-dom";

import { highlights } from "../data/siteContent";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Highlights() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
          About The School
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          A supportive path to become a confident teacher and deeper
          practitioner.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {highlights.map((item) => (
          <Card
            key={item.title}
            className="yoga-card-lift yoga-soft-glow border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]"
          >
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-[#5f4a36] dark:text-[#d7c4ae]">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/contact">
          <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
            Speak With Admissions
          </Button>
        </Link>
      </div>
    </section>
  );
}
