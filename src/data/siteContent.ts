const uploadsBase = "https://purnamyogashala.com/wp-content/uploads";

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  level: string;
  location: string;
  fee: string;
  image: string;
  highlights: string[];
  modules: string[];
  dailySchedule: string[];
  inclusions: string[];
  exclusions: string[];
  overview: string[];
  sourceUrl?: string;
};

export type TeacherProfile = {
  name: string;
  role: string;
  image: string;
};

export type AccommodationFeature = {
  title: string;
  description: string;
  image: string;
};

export type SocialLink = {
  name: "Facebook" | "Instagram" | "YouTube" | "LinkedIn";
  href: string;
};

export type ImpactStat = {
  value: number;
  suffix: string;
  label: string;
};

export const siteAssets = {
  hero: `${uploadsBase}/2024/11/yoga-teacher-training-india.jpg`,
  goaHero: `${uploadsBase}/2025/01/purnam-goa.jpg`,
  logo: `${uploadsBase}/2024/07/logo-sign-2.png`,
  yogaAlliance: `${uploadsBase}/2024/07/YOGA-ALLIANCE-RYT-1.png`,
};

export const courses: Course[] = [
  {
    slug: "100-hour-yttc",
    title: "100 Hour Yoga Teacher Training",
    subtitle: "Two-week foundational teacher training in South Goa",
    duration: "12 Days Residential",
    level: "Beginner to Intermediate",
    location: "Agonda Beach, Goa, India",
    fee: "900 Euros with accommodation and food / 600 Euros without accommodation and food",
    image: `${uploadsBase}/2024/09/goa-yoga-ytt.jpeg`,
    sourceUrl: "https://purnamyogashala.com/index.html%3Fp=37.html",
    highlights: [
      "Yoga Alliance registered school format",
      "Offline 100-hour intensive with practical teaching focus",
      "Traditional Hatha-based methodology",
      "Small-group guidance in a peaceful beach setting",
    ],
    modules: [
      "Asana alignment and foundational adjustment principles",
      "Pranayama, breath awareness, and meditation practice",
      "Yoga philosophy, mindful living, and satsang sessions",
      "Teaching methodology and class-structuring basics",
      "Foundational anatomy and body-awareness techniques",
    ],
    dailySchedule: [
      "Morning: asana and pranayama practice",
      "Midday: theory sessions and anatomy/philosophy",
      "Afternoon: teaching practicum and alignment workshops",
      "Evening: meditation, reflection, and guided discussion",
    ],
    inclusions: [
      "Registration and program fee",
      "Study material and required stationery",
      "Yoga kit",
      "Clean, spacious accommodation",
      "Three vegetarian meals per day (Mon-Sat)",
      "Two herbal teas daily and filtered drinking water",
      "Complimentary Wi-Fi",
    ],
    exclusions: [
      "Visa fees and airfare",
      "Airport or taxi transfer",
      "Ayurvedic panchakarma and treatments",
    ],
    overview: [
      "This short-format YTTC is designed for practitioners who want structured immersion without committing to a full-month course.",
      "The school follows a traditional-yet-practical approach, blending classical yogic tools with modern teaching clarity.",
      "Students train in Agonda, Goa, with a focus on confidence-building and personal transformation.",
    ],
  },
  {
    slug: "200-hour-yttc",
    title: "200 Hour Yoga Teacher Training",
    subtitle: "Comprehensive Yoga Alliance aligned training in Goa",
    duration: "24 Days Residential",
    level: "Beginner to Intermediate",
    location: "Agonda Beach, Goa, India",
    fee: "1800 Euros with accommodation and food / 900 Euros without accommodation and food",
    image: `${uploadsBase}/2024/07/51.jpeg`,
    sourceUrl: "https://purnamyogashala.com/index.html%3Fp=39.html",
    highlights: [
      "Yoga Alliance USA accredited 200-hour YTTC",
      "Multi-style curriculum with deep practical immersion",
      "Traditional yogic science taught by experienced faculty",
      "Residential format with holistic lifestyle support",
    ],
    modules: [
      "Hatha and Ashtanga-informed asana training",
      "Pranayama, kriya, and meditation techniques",
      "Teaching methodology and sequencing",
      "Anatomy and physiology for yoga teachers",
      "Yoga philosophy, ethics, and applied yogic lifestyle",
    ],
    dailySchedule: [
      "Morning: asana, pranayama, and cleansing practices",
      "Late morning: anatomy and philosophy classes",
      "Afternoon: methodology, alignment, and practicum",
      "Evening: meditation, satsang, and reflective study",
    ],
    inclusions: [
      "Registration and program fee",
      "200-hour certificate on successful completion",
      "Study material and stationery",
      "Yoga kit",
      "Accommodation in shared clean rooms",
      "Three vegetarian meals per day (Mon-Sat)",
      "Two herbal teas daily and filtered water",
      "Complimentary Wi-Fi",
    ],
    exclusions: [
      "Visa fees and airfare",
      "Airport or taxi transfer",
      "Ayurvedic panchakarma and treatments",
    ],
    overview: [
      "The 200-hour TTC is designed for students who want a full foundational certification with strong practical depth.",
      "Training combines asana, breath, philosophy, and methodology in a disciplined daily format.",
      "The program is hosted in Agonda, Goa, with an emphasis on authentic practice and confident teaching outcomes.",
    ],
  },
];

export const teachers: TeacherProfile[] = [
  {
    name: "Amitesh",
    role: "Lead Asana Teacher",
    image: `${uploadsBase}/2024/07/amitesh.png`,
  },
  {
    name: "Manoj",
    role: "Pranayama & Meditation Teacher",
    image: `${uploadsBase}/2024/07/Manoj_1.webp`,
  },
  {
    name: "Master Akshaya",
    role: "Philosophy & Alignment Mentor",
    image: `${uploadsBase}/2024/07/master_akshaya.png`,
  },
  {
    name: "Deepak",
    role: "Anatomy & Teaching Methodology",
    image: `${uploadsBase}/2024/07/deepak.png`,
  },
];

export const accommodationFeatures: AccommodationFeature[] = [
  {
    title: "Residential Campus",
    description:
      "Comfortable shared accommodation close to practice halls and community areas.",
    image: `${uploadsBase}/2024/08/65.jpeg`,
  },
  {
    title: "Sattvic Meals",
    description:
      "Nutritious vegetarian meals served daily to support practice and recovery.",
    image: `${uploadsBase}/2024/08/food.webp`,
  },
  {
    title: "Practice Environment",
    description:
      "Peaceful settings designed for focused study, discipline, and rest.",
    image: `${uploadsBase}/2024/09/IMG_0087.jpeg`,
  },
];

export const faqItems = [
  {
    question:
      "How long should you do yoga before starting yoga teacher training?",
    answer:
      "The 200-hour foundational training is open from beginner to intermediate level. The main requirement is sincere interest and commitment to learn and practice yoga consistently.",
  },
  {
    question: "Which yoga style do you teach?",
    answer:
      "The school teaches holistic yoga, vinyasa flow, ashtanga yoga, pranayama, meditation, and traditional yogic techniques to build a strong base.",
  },
  {
    question: "What is Yoga Alliance certification?",
    answer:
      "Yoga Alliance is an international recognition board for yoga education programs. Completing a certified training supports teaching eligibility in many countries.",
  },
  {
    question: "How much is yoga teacher training in Goa?",
    answer:
      "Current published plans include Euro-based options depending on accommodation and food package selection. Contact the school for the latest intake-specific fees.",
  },
  {
    question: "What is the purpose of a yoga teacher training course?",
    answer:
      "Teacher training deepens personal practice, builds teaching methodology, and develops confidence to guide others with clarity and responsibility.",
  },
];

export const recognitions = [
  "Yoga Alliance Registered",
  "Traditional Hatha Lineage",
  "Multi-Style TTC",
  "International Community",
  "Agonda Beach, Goa Campus",
];

export const highlights = [
  {
    title: "Traditional Lineage",
    description:
      "Classes rooted in classical Hatha and Ashtanga methodology with strong philosophical context.",
  },
  {
    title: "Experienced Faculty",
    description:
      "Lead teachers with years of international teaching and hands-on guidance in alignment and adjustments.",
  },
  {
    title: "Ashram Lifestyle",
    description:
      "Balanced daily routine with wholesome sattvic meals, self-study, and dedicated practice windows.",
  },
  {
    title: "Goa Beach Setting",
    description:
      "Practice in peaceful Agonda with ocean breeze, nature, and a focused yogic atmosphere.",
  },
];

export const testimonials = [
  {
    name: "Ceri Davies",
    role: "Student Testimonial",
    quote: "A totally wonderful experience.",
  },
  {
    name: "Ramune Rancova",
    role: "Google Review",
    quote:
      "Qualified Indian teachers with strong traditional depth and precise alignment support made this training a revelation.",
  },
  {
    name: "Patricia",
    role: "Student Review",
    quote:
      "Powerful, thoughtful classes with clear intention and authentic guidance in Agonda, Goa.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/purnamyogashala/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/purnamyogashala/",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@purnamyogaschoolIndia",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/purnam-yoga-school/",
  },
];

export const impactStats: ImpactStat[] = [
  { value: 2500, suffix: "+", label: "Happy Graduates" },
  { value: 6, suffix: "+", label: "Trainers" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "+", label: "Yoga Alliance Certification" },
  { value: 3, suffix: "+", label: "Courses" },
  { value: 2, suffix: "+", label: "Locations" },
];

// Schedule data moved to src/data/courseSchedule.ts for easy manual updates.

export const contactInfo = {
  phone: "+91 8219643223",
  email: "purnamyogashalagoa@gmail.com",
  address: "Agonda Beach (left end), Agonda, Goa, India",
};
