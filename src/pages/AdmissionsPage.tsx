import { useState } from "react";
import type { FormEvent } from "react";

import { submitInquiry } from "../services/formSubmission";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const steps = [
  "Submit inquiry form with preferred course and dates.",
  "Receive brochure, syllabus, and seat availability details.",
  "Confirm registration with booking amount.",
  "Get pre-arrival guidance and onboarding support.",
];

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    month: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await submitInquiry({
      formType: "admissions-request",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      month: formData.month,
    });

    setSubmitted(result.ok);
    setSubmitError(!result.ok);
    if (result.ok) {
      setFormData({ name: "", email: "", phone: "", course: "", month: "" });
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
            Admissions
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">
            How to Apply
          </h1>
          <ol className="mt-6 space-y-3 text-sm text-muted-foreground">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e7d3bd] text-xs font-semibold text-[#5a3c26] dark:bg-[#3a2b20] dark:text-[#f0dcc7]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-xl border border-[#d8c6ae] bg-[#fffaf3] p-6 dark:border-[#5f4938] dark:bg-[#21180f]"
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
            placeholder="Preferred course"
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
          <Button className="w-full bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
            Submit Application Request
          </Button>
          {submitted ? (
            <p className="text-sm text-[#6a4a33] dark:text-[#efddca]">
              Thanks! Admissions will contact you shortly.
            </p>
          ) : null}
          {submitError ? (
            <p className="text-sm text-red-600 dark:text-red-300">
              Submission failed right now. Please retry in a moment.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
