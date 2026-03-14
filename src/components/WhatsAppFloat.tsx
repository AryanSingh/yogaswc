import { useState } from "react";

import { contactInfo } from "../data/siteContent";

const defaultMessage =
  "Hi Purnam Yoga School Goa! I need more info about your Yoga Teacher Training courses in Agonda.";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const phone = contactInfo.phone.replace(/\D+/g, "");
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {open ? (
        <div className="mb-3 w-72 rounded-xl border border-[#d8c6ae] bg-white p-4 text-sm shadow-xl dark:border-[#5f4938] dark:bg-[#21180f]">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold">Purnam Yoga School Goa</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Close
            </button>
          </div>
          <p className="text-muted-foreground">
            Hi there. How can we help you with course details?
          </p>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-[#25d366] px-3 py-2 font-medium text-white transition hover:bg-[#1eb85a]"
          >
            Start WhatsApp Chat
          </a>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open WhatsApp chat"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1eb85a]"
      >
        WA
      </button>
    </div>
  );
}
