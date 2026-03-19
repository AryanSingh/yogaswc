import SEO from "../components/SEO";

const termsSections = [
  {
    title: "1. Enrollment & Bookings",
    body: "Registering for a course or retreat requires a deposit. All bookings are subject to availability and formal confirmation via email from the Purnam Yogashala admissions team.",
  },
  {
    title: "2. Payment Terms",
    body: "Final payments must be completed according to the schedule provided during admission. We accept international transfers and card payments as per instructions shared with students.",
  },
  {
    title: "3. Health and Medical Liability",
    body: "Students must inform the school of any pre-existing medical conditions, injuries, or dietary requirements. Practice is undertaken at the student's own risk, and Purnam Yogashala is not responsible for injuries sustained during training.",
  },
  {
    title: "4. Attendance and Certification",
    body: "Certification (100hr/200hr) is only granted upon successful completion of all training modules, assessments, and maintaining the required attendance percentage as per Yoga Alliance standards.",
  },
  {
    title: "5. Code of Conduct",
    body: "Students are expected to maintain a respectful and disciplined atmosphere (Sattvic lifestyle) on campus. Disruptive behavior, unauthorized recordings, or non-compliance with school rules may lead to termination of the course without refund.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <SEO 
        title="Terms and Conditions | Purnam Yogashala Goa"
        description="Review the terms, booking conditions, and student code of conduct for yoga teacher training and retreats at Purnam Yogashala."
      />
      <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        Legal
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Terms & conditions
      </h1>
      <p className="mt-3 text-muted-foreground">
        By enrolling in our programs or staying at our campus, you agree to the 
        standard training and residential guidelines established by Purnam Yogashala.
      </p>

      <div className="mt-8 space-y-5">
        {termsSections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-[#d8c6ae] bg-[#fffaf3] p-6 dark:border-[#5f4938] dark:bg-[#21180f]"
          >
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {section.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 text-xs text-muted-foreground italic">
        Last updated: {new Date().toLocaleDateString()}
      </div>
    </section>
  );
}
