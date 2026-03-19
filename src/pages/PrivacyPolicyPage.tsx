const privacySections = [
  {
    title: "Information We Collect",
    body: "We collect the details you submit through enquiry, brochure, admissions, and newsletter forms, such as name, email, phone number, preferred course, preferred month, and any message you choose to send.",
  },
  {
    title: "How We Use It",
    body: "Submitted information is used to respond to course enquiries, share admissions details, confirm availability, and support communication about upcoming batches or related services.",
  },
  {
    title: "Payments and Booking",
    body: "Booking deposits are used to reserve a seat and may be subject to course terms. Final payment and booking conditions should always be confirmed directly with admissions before transfer.",
  },
  {
    title: "Media and Content",
    body: "Course terms may include restrictions on unauthorized recording and editing of training materials. Promotional use of school media remains subject to the school’s discretion and published terms.",
  },
  {
    title: "Contact",
    body: "For any privacy or admissions question, contact the school using the published email and phone details shown in the site footer and enquiry forms.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        Privacy Policy
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Privacy & data handling
      </h1>
      <p className="mt-3 text-muted-foreground">
        We respect the information you share through our enquiry and admissions
        forms. This page explains the general way contact and booking-related
        information is handled on the site.
      </p>

      <div className="mt-8 space-y-5">
        {privacySections.map((section) => (
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
    </section>
  );
}
