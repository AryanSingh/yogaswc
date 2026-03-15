import { useState } from "react";

import { contactInfo } from "../data/siteContent";

const defaultMessage =
  "Hi Purnam Yoga School Goa! I need more info about your Yoga Teacher Training courses in Agonda.";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const phone = contactInfo.phone.replace(/\D+/g, "");
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed right-3 bottom-16 z-50 md:right-5 md:bottom-5">
      {open ? (
        <div className="mb-3 w-[min(18rem,calc(100vw-1.5rem))] rounded-xl border border-[#d8c6ae] bg-white p-4 text-sm shadow-xl dark:border-[#5f4938] dark:bg-[#21180f]">
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
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M19.1 4.9A9.72 9.72 0 0012.1 2a9.88 9.88 0 00-8.5 14.9L2 22l5.3-1.5a9.9 9.9 0 004.8 1.2h.1a9.9 9.9 0 007-16.8zm-7 15.2h-.1a8.2 8.2 0 01-4.2-1.2l-.3-.2-3.1.9.9-3-.2-.3a8.2 8.2 0 1114.9-4.4 8.2 8.2 0 01-8.1 8.2zm4.5-6.1c-.2-.1-1.2-.6-1.4-.6-.2-.1-.3-.1-.5.1-.1.2-.5.6-.6.7-.1.1-.2.2-.4.1-.2-.1-.9-.3-1.7-1-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4l.3-.3.2-.3c.1-.1.1-.2.2-.3.1-.1 0-.3 0-.4 0-.1-.5-1.2-.7-1.7-.2-.4-.3-.4-.5-.4h-.4c-.1 0-.3.1-.4.2-.2.2-.7.7-.7 1.7s.7 2 1.2 2.7c.1.1 1.7 2.6 4.2 3.6.6.3 1.1.4 1.5.5.6.2 1.1.2 1.5.1.5-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.2-.1-.4-.2z" />
        </svg>
      </button>
    </div>
  );
}
