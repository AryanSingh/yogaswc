import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";

import { contactInfo } from "../data/siteContent";
import { submitInquiry } from "../services/formSubmission";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";

type ContactLocationState = {
  email?: string;
};

export default function ContactPage() {
  const location = useLocation();
  const state = location.state as ContactLocationState | null;
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    month: "",
    country: "",
    roomPreference: "",
    experience: "",
    message: "",
  });

  useEffect(() => {
    if (state?.email) {
      setFormData((prev) => ({ ...prev, email: state.email ?? "" }));
    }
  }, [state?.email]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const result = await submitInquiry({
      formType: "contact-inquiry",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      month: formData.month,
      country: formData.country,
      roomPreference: formData.roomPreference,
      experience: formData.experience,
      message: formData.message,
    });

    setIsSubmitting(false);
    setSubmitted(result.ok);
    setSubmitError(!result.ok);

    if (result.ok) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        month: "",
        country: "",
        roomPreference: "",
        experience: "",
        message: "",
      });
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
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
        <Select
          required
          value={formData.course}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, course: event.target.value }))
          }
        >
          <option value="" disabled>Course of interest</option>
          <option value="100 TTC">100 TTC</option>
          <option value="200 TTC">200 TTC</option>
        </Select>
        <Select
          value={formData.month}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, month: event.target.value }))
          }
        >
          <option value="" disabled>Preferred month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </Select>
        <Input
          placeholder="Country"
          value={formData.country}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, country: event.target.value }))
          }
        />
        <Select
          value={formData.roomPreference}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, roomPreference: event.target.value }))
          }
        >
          <option value="" disabled>Room preference</option>
          <option value="Private Room">Private Room</option>
          <option value="Shared - Twin">Shared Room (Twin)</option>
          <option value="Shared - Triple">Shared Room (Triple)</option>
        </Select>
        <Select
          value={formData.experience}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, experience: event.target.value }))
          }
        >
          <option value="" disabled>Yoga experience</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </Select>
        <Input
          placeholder="Message"
          value={formData.message}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, message: event.target.value }))
          }
        />
        <Button
          disabled={isSubmitting}
          className="w-full bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Submitting...</span>
            </div>
          ) : (
            "Submit Inquiry"
          )}
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
