import SEO from "../components/SEO";

const privacySections = [
  {
    title: "Information We Collect",
    body: "We may collect the following information: name, contact information including email address, demographic information such as postcode, preferences, and interests, and other information relevant to customer surveys and/or offers.",
  },
  {
    title: "How We Use It",
    body: "We require this information to understand your needs and provide you with a better service, particularly for internal record keeping, improving products and services, and periodically sending promotional emails or conducting market research to customize the website according to your interests.",
  },
  {
    title: "Security",
    body: "We are committed to ensuring that your information is secure. To prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.",
  },
  {
    title: "Cookies",
    body: "Cookies help us analyze web traffic and allow web applications to respond to you as an individual. We use traffic log cookies to identify which pages are being used for statistical analysis purposes. You can choose to accept or decline cookies through your browser settings.",
  },
  {
    title: "Links to Other Websites",
    body: "Our website may contain links to other websites. However, once you use these links to leave our site, we do not have any control over that other website and cannot be responsible for the protection and privacy of any information you provide while visiting such sites.",
  },
  {
    title: "Control of Personal Information",
    body: "You may choose to restrict the collection or use of your personal information by clicking boxes on forms or changing your mind via contact. We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <SEO 
        title="Privacy Policy | Purnam Yogashala Goa"
        description="Learn how Purnam Yogashala handles and protects your data. Our privacy and data policy for students and enquiries."
      />
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

      <div className="mt-12 rounded-2xl border border-[#d8c6ae] bg-[#fffaf3] p-8 dark:border-[#5f4938] dark:bg-[#21180f]">
        <h2 className="text-2xl font-semibold">Code of Conduct</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          We are committed to holding high ethical standards for our yoga teachers. We believe that it is the responsibility of a teacher to ensure a safe environment in which our students can grow physically, mentally, and spiritually. Students are looking for guidance from teachers with authenticity, experience, and wisdom.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic">
          For any privacy or admissions questions, contact the school using the published email and phone details.
        </p>
      </div>
    </section>
  );
}
