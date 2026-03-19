import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

import { submitInquiry } from "../services/formSubmission";
import { useCmsContent } from "../context/CmsContentContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import SitemarkIcon from "./SitemarkIcon";

export default function Footer() {
  const { contactInfo } = useCmsContent();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    await submitInquiry({ formType: "footer-newsletter", email });
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="border-t border-[#d8c6ae] bg-[#f6efe4] text-[#2f2920] dark:border-[#4f3f30] dark:bg-[#16110d] dark:text-[#f2e8d6]">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 md:px-6 md:py-12">
        <div className="flex flex-col gap-6 md:col-span-3 lg:flex-row lg:items-center lg:justify-between border-b border-[#d8c6ae] pb-10 dark:border-[#4f3f30]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-medium text-[#3b2a1d] dark:text-[#f0dcc7]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
              YOGA ALLIANCE CERTIFICATE
            </div>
            <img 
              src="/assets/certifications/yoga-alliance-certificate.jpeg" 
              alt="Yoga Alliance Certificate" 
              className="h-44 w-fit max-w-full object-contain rounded-lg shadow-md border border-[#d8c6ae] dark:border-[#4f3f30]"
            />
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex items-center gap-2 font-medium text-[#3b2a1d] dark:text-[#f0dcc7]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              YOGA ALLIANCE REGISTERED SCHOOL
            </div>
            <img 
              src="/assets/certifications/rys-200-badge.png" 
              alt="RYS 200 Badge" 
              className="h-32 w-fit max-w-full object-contain drop-shadow-sm"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 font-semibold">
            <SitemarkIcon className="h-8 w-8 text-[#8e5a3a] dark:text-[#d3a57c]" />
            Purnam Yogashala
          </div>
          <p className="mt-3 text-sm text-[#6a5442] dark:text-[#d7c4ae]">
            Traditional yoga teacher training and retreats in Agonda Beach, Goa,
            India.
          </p>
        </div>

        <div className="text-sm text-[#6a5442] dark:text-[#d7c4ae]">
          <p className="font-medium text-[#3b2a1d] dark:text-[#f0dcc7]">
            Quick Links
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <Link to="/courses" className="hover:text-foreground">
              Courses
            </Link>
            <Link to="/retreats" className="hover:text-foreground">
              Retreats
            </Link>
            <Link to="/teachers" className="hover:text-foreground">
              Teachers
            </Link>
            <Link to="/accommodation" className="hover:text-foreground">
              Accommodation
            </Link>
            <Link to="/about" className="hover:text-foreground">
              About
            </Link>
            <Link to="/faq" className="hover:text-foreground">
              FAQ
            </Link>
            <Link to="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <Link to="/schedule" className="hover:text-foreground">
              Schedule
            </Link>
            <Link to="/admissions" className="hover:text-foreground">
              Admissions
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-[#3b2a1d] dark:text-[#f0dcc7]">
            Receive course details
          </p>
          <form onSubmit={handleSubmit} className="mt-3 grid gap-2 sm:flex">
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="border-[#cab39a] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]"
            />
            <Button className="w-full bg-[#8e5a3a] text-white hover:bg-[#754529] sm:w-auto dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
              Send
            </Button>
          </form>
          {submitted ? (
            <p className="mt-2 text-xs text-[#7b634f] dark:text-[#c9b59e]">
              Thank you. We will share updates soon.
            </p>
          ) : null}
          <p className="mt-4 text-xs text-[#7b634f] dark:text-[#c9b59e]">
            {contactInfo.address} | {contactInfo.phone}
          </p>
        </div>
      </div>
      <div className="border-t border-[#d8c6ae] py-4 text-center text-xs text-[#7b634f] dark:border-[#4f3f30] dark:text-[#c9b59e]">
        Copyright {new Date().getFullYear()} Purnam Yogashala. All rights reserved. | <Link to="/privacy-policy" className="underline">Privacy Policy</Link> | <Link to="/terms-conditions" className="underline">Terms & Conditions</Link>
      </div>
    </footer>
  );
}
