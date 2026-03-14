import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";

import { contactInfo } from "../data/siteContent";
import { submitInquiry } from "../services/formSubmission";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

type ContactLocationState = {
  email?: string;
};

export default function ContactPage() {
  const location = useLocation();
  const state = location.state as ContactLocationState | null;
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    month: "",
    message: "",
  });

  useEffect(() => {
    if (state?.email) {
      setFormData((prev) => ({ ...prev, email: state.email ?? "" }));
    }
  }, [state?.email]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await submitInquiry({
      formType: "contact-inquiry",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      month: formData.month,
      message: formData.message,
    });

    setSubmitted(result.ok);
    setSubmitError(!result.ok);

    if (result.ok) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        month: "",
        message: "",
      });
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <h1 className="text-4xl font-semibold tracking-tight">
        Contact & Admissions
      </h1>
      <p className="mt-3 text-muted-foreground">
        Share your preferred course and dates. Our admissions team will respond
        with details, fee structure, and enrollment process.
      </p>

      <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#6a4a33] dark:text-[#efddca]">
        <a href={`mailto:${contactInfo.email}`} className="hover:underline">
          {contactInfo.email}
        </a>
        <span>|</span>
        <a
          href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
          className="hover:underline"
        >
          {contactInfo.phone}
        </a>
        <span>|</span>
        <Link to="/schedule" className="hover:underline">
          View schedule
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-4 rounded-xl border border-[#d8c6ae] bg-[#fffaf3] p-6 dark:border-[#5f4938] dark:bg-[#21180f]"
      >
        <Input
          required
          placeholder="Full name"
          value={formData.name}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <Input
          required
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <Input
          required
          placeholder="Phone / WhatsApp"
          value={formData.phone}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
        <Input
          required
          placeholder="Course of interest"
          value={formData.course}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, course: event.target.value }))
          }
        />
        <Input
          placeholder="Preferred month"
          value={formData.month}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, month: event.target.value }))
          }
        />
        <Input
          placeholder="Message"
          value={formData.message}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, message: event.target.value }))
          }
        />
        <Button className="w-full bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
          Submit Inquiry
        </Button>
        {submitted ? (
          <p className="text-sm text-[#6a4a33] dark:text-[#efddca]">
            Thank you. Our admissions team will contact you shortly.
          </p>
        ) : null}
        {submitError ? (
          <p className="text-sm text-red-600 dark:text-red-300">
            We could not submit right now. Please try again or contact us on
            WhatsApp.
          </p>
        ) : null}
      </form>
    </section>
  );
}
