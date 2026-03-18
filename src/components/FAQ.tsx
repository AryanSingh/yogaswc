import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faqItems } from "../data/siteContent";
import { Button } from "./ui/button";

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        Frequently Asked Questions
      </p>
      <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight md:text-4xl">
        Everything you need before joining the school
      </h2>
      <Accordion className="mt-8 rounded-xl border border-[#d8c6ae] bg-[#fffaf3] px-5 dark:border-[#5f4938] dark:bg-[#21180f]">
        {faqItems.map((item) => (
          <AccordionItem key={item.question}>
            <AccordionTrigger className="text-[#4a3524] dark:text-[#f0dcc7]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link to="/schedule">
          <Button variant="outline">Check Schedule</Button>
        </Link>
        <Link to="/contact">
          <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
            Ask Admissions
          </Button>
        </Link>
      </div>
    </section>
  );
}
