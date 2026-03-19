const baseUrl =
  typeof import.meta !== "undefined" && import.meta.env?.BASE_URL
    ? import.meta.env.BASE_URL
    : "/yogaswc/";
const normalizedBase = baseUrl.endsWith("/")
  ? baseUrl.slice(0, -1)
  : baseUrl;
const uploadsBase = `${normalizedBase}/assets/purnam`;

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
  specialties?: string[];
  bio?: string;
};

export type AccommodationFeature = {
  title: string;
  description: string;
  image: string;
};

export type SocialLink = {
  name: "Facebook" | "Instagram" | "YouTube" | "LinkedIn" | "X";
  href: string;
};

export type ImpactStat = {
  value: number;
  suffix: string;
  label: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type VideoTestimonial = {
  title: string;
  duration: string;
  thumbnail: string;
  student: string;
  href: string;
};

export type ApplicationStep = {
  title: string;
  description: string;
};

export type BlogPostPreview = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  sourceUrl?: string;
};

export type BlogPost = BlogPostPreview & {
  intro: string;
  sections: {
    title: string;
    points: string[];
  }[];
};

export const siteAssets = {
  hero: `${uploadsBase}/2024/09/goa-yoga-ytt.jpeg`,
  goaHero: `${uploadsBase}/2025/01/purnam-goa.jpg`,
  logo: `${uploadsBase}/2024/07/logo-sign-2.png`,
  yogaAlliance: `${uploadsBase}/2024/07/YOGA-ALLIANCE-RYT-1.png`,
  course100hr: `${uploadsBase}/2024/09/goa-yoga-ytt.jpeg`,
  course200hr: `${uploadsBase}/2024/07/51.jpeg`,
  retreatsHero: `${uploadsBase}/2024/09/IMG_0087.jpeg`,
  aboutHero: `${uploadsBase}/2024/08/65.jpeg`,
};

export const courses: Course[] = [
  {
    slug: "100-hour-yttc",
    title: "100 Hour Yoga Teacher Training",
    subtitle: "Two-week multi-style immersion in Agonda, Goa",
    duration: "12 Days / 100 Hours",
    level: "Beginner to Intermediate",
    location: "Agonda Beach, Goa, India",
    fee: "900 EUR with accommodation and food / 600 EUR course only",
    image: `${uploadsBase}/2024/09/goa-yoga-ytt.jpeg`,
    highlights: [
      "Offline 100-hour intensive for students wanting a shorter immersion",
      "Multi-style training with Hatha, Ashtanga, pranayama, kriya, and philosophy",
      "Small-group environment with practical alignment and teaching support",
      "Residential learning near Agonda Beach with sattvic meals and community rhythm",
    ],
    modules: [
      "Holistic Hatha yoga, prana kriya, and Raja Yoga practice",
      "Ashtanga primary series and Iyengar-inspired alignment work",
      "Workshop sessions covering asana, practicum, and body adjustment",
      "Anatomy and physiology for safe movement and cueing",
      "Pranayama, mantra learning, meditation, and sound healing",
      "Yoga philosophy, satsang-style discussion, and personal discipline",
    ],
    dailySchedule: [
      "05:30-06:00 wake up and half bath",
      "06:30-07:30 shatkarma, pranayama, and mantra learning",
      "08:00-09:45 holistic Hatha yoga, prana kriya, and Raja Yoga",
      "11:00-13:00 workshop, practicum, alignment, anatomy, and physiology",
      "15:00-16:00 philosophy",
      "16:30-18:00 Ashtanga primary series or Iyengar yoga",
      "18:30-19:30 sound healing, meditation, and mantra chanting",
    ],
    inclusions: [
      "100-hour multi-style yoga teacher training certificate",
      "Accommodation in a clean and spacious room",
      "Three nutritious vegetarian meals from Monday to Saturday",
      "Two herbal teas daily and unlimited filtered drinking water",
      "Complimentary Wi-Fi",
      "Study support in asana, breath, philosophy, and practicum",
    ],
    exclusions: [
      "Visa fees and airfare",
      "Airport or taxi transfer",
      "Ayurvedic panchakarma and treatments",
    ],
    overview: [
      "This course is built for students who want a shorter but structured immersion to deepen practice and begin teaching foundations.",
      "The program blends traditional yogic practices with practical modern teaching methodology in a supportive coastal setting.",
      "Students learn in Agonda, Goa with a strong focus on disciplined routine, embodied understanding, and confidence-building.",
    ],
  },
  {
    slug: "200-hour-yttc",
    title: "200 Hour Yoga Teacher Training",
    subtitle: "Comprehensive Yoga Alliance aligned training in Goa",
    duration: "24 Days / 200 Hours",
    level: "Beginner to Intermediate",
    location: "Agonda Beach, Goa, India",
    fee: "1800 EUR with accommodation and food / 900 EUR course only",
    image: `${uploadsBase}/2024/07/51.jpeg`,
    highlights: [
      "Yoga Alliance USA accredited 200-hour certification structure",
      "Multi-style curriculum spanning Hatha, Ashtanga, pranayama, anatomy, and philosophy",
      "9-10 hours of guided learning six days per week",
      "Designed to help students become confident, grounded, and employable yoga teachers",
    ],
    modules: [
      "Traditional Hatha yoga foundations with alignment, props, and modifications",
      "Primary series Ashtanga Vinyasa with variations and counter-poses",
      "Pranayama practices including Nadi Shodhan, Bhastrika, Bhramari, and Ujjayi",
      "Meditation, mantra, mudra, and yogic concentration practices",
      "Anatomy, biomechanics, chakras, nadis, koshas, and prana vayus",
      "Teaching methodology, sequencing, communication, observation, and hands-on support",
      "Yoga philosophy, Patanjali Yoga Sutras, ethics, and lifestyle integration",
    ],
    dailySchedule: [
      "05:30-06:00 wake up and half bath",
      "06:30-07:30 shatkarma, pranayama, and mantra learning",
      "08:00-09:45 holistic Hatha yoga, prana kriya, and Raja Yoga",
      "11:00-13:00 workshop, practicum, alignment, anatomy, and physiology",
      "15:00-16:00 philosophy",
      "16:30-18:00 Ashtanga primary series or Iyengar yoga",
      "18:30-19:30 sound healing, meditation, and mantra chanting",
    ],
    inclusions: [
      "200-hour certificate on successful completion",
      "Accommodation in clean and spacious rooms",
      "Vegetarian meals from Monday to Saturday plus tea and filtered water",
      "Practical teaching rounds and one-on-one feedback from supervising teachers",
      "Training across the five core Yoga Alliance educational categories",
      "Complimentary Wi-Fi",
    ],
    exclusions: [
      "Visa fees and airfare",
      "Airport or taxi transfer",
      "Ayurvedic panchakarma and treatments",
    ],
    overview: [
      "The 200-hour training is built for students who want a complete foundational certification with strong practical depth.",
      "The school frames yoga as a full lifestyle practice and trains students through long-form immersion, repetition, and close teacher support.",
      "The result is a grounded, traditional, and teachable understanding of yoga delivered in Agonda, Goa.",
    ],
  },
];

export const teachers: TeacherProfile[] = [
  {
    name: "Amitesh",
    role: "Lead Asana Teacher",
    image: `${uploadsBase}/2024/07/amitesh.png`,
    specialties: ["Hatha yoga", "Alignment", "Strong foundational practice"],
    bio: "Supports students in building disciplined daily practice, body awareness, and clearer postural understanding.",
  },
  {
    name: "Manoj",
    role: "Pranayama & Meditation Teacher",
    image: `${uploadsBase}/2024/07/Manoj_1.webp`,
    specialties: ["Pranayama", "Meditation", "Yogic philosophy"],
    bio: "Known through student reviews for profound teaching, clear transmission, and a balance of seriousness and warmth.",
  },
  {
    name: "Master Akshaya",
    role: "Philosophy & Alignment Mentor",
    image: `${uploadsBase}/2024/07/master_akshaya.png`,
    specialties: ["Philosophy", "Classical yogic wisdom", "Teaching support"],
    bio: "Guides students into the deeper context of practice so technique stays connected to yogic inquiry and self-study.",
  },
  {
    name: "Deepak",
    role: "Anatomy & Teaching Methodology",
    image: `${uploadsBase}/2024/07/deepak.png`,
    specialties: ["Anatomy", "Methodology", "Applied teaching"],
    bio: "Helps trainees translate theory into safe class delivery, cueing, and practical teaching confidence.",
  },
];

export const accommodationFeatures: AccommodationFeature[] = [
  {
    title: "Residential Campus",
    description:
      "Comfortable accommodation close to the shala with attached washrooms, hot water, and a quiet routine for practice and rest.",
    image: `${uploadsBase}/2024/08/65.jpeg`,
  },
  {
    title: "Sattvic Meals",
    description:
      "Fresh vegetarian meals prepared with care, plus herbal tea and filtered water to support practice and recovery.",
    image: `${uploadsBase}/2024/08/food.webp`,
  },
  {
    title: "Practice Environment",
    description:
      "A peaceful Agonda Beach setting with walkable sea access, focused study blocks, and a close-knit student community.",
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
  {
    question: "Is the 200-hour course suitable for complete beginners?",
    answer:
      "Yes. The foundational training is open to beginner and intermediate students, provided there is sincere interest and commitment to practice.",
  },
  {
    question: "What styles are covered in the programs?",
    answer:
      "The programs cover holistic yoga, Hatha yoga, Ashtanga Vinyasa, pranayama, meditation, kriya work, philosophy, and teaching methodology.",
  },
  {
    question: "What does the course fee generally include?",
    answer:
      "Published inclusions cover tuition, certification, accommodation options, vegetarian meals on teaching days, tea, filtered water, and access to course learning support.",
  },
  {
    question: "What is not included in the course fee?",
    answer:
      "Visa fees, airfare, taxi pick-up, and Ayurvedic panchakarma or treatment costs are not included.",
  },
  {
    question: "How do I reserve my seat?",
    answer:
      "Reserve your place by completing the enquiry or application process and paying the required deposit, with final payment due before the course.",
  },
];

export const recognitions = [
  "Yoga Alliance Registered",
  "Traditional Hatha Lineage",
  "Multi-Style TTC",
  "International Community",
  "Agonda Beach, Goa Campus",
  "Small Group Learning",
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
  {
    title: "Practical Teaching Focus",
    description:
      "Programs emphasize sequencing, observation, adjustment, and communication so students leave with clearer teaching confidence.",
  },
  {
    title: "Transformational Routine",
    description:
      "A full-day rhythm of cleansing practices, asana, study, meals, self-reflection, and silence supports deeper integration.",
  },
];

export const testimonials: Testimonial[] = [
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
  {
    name: "Google Review",
    role: "200 Hour Graduate",
    quote:
      "Teachers were generous with their time, knowledge, and care. The small group setting, food, and complete program made it insightful for both beginners and experienced practitioners.",
  },
  {
    name: "Returning Student",
    role: "Morning & Evening Class Student",
    quote:
      "I came across the shala while staying in Agonda and kept returning for weeks because the teachers felt like family and the experience kept deepening.",
  },
];

export const videoTestimonials: VideoTestimonial[] = [
  {
    title: "Purnam YogaShala Goa Student Testimonial",
    duration: "Video Review",
    thumbnail: "https://img.youtube.com/vi/kLX7jqU6LYc/hqdefault.jpg",
    student: "Student Voice",
    href: "https://www.youtube.com/watch?v=kLX7jqU6LYc",
  },
  {
    title: "200 Hour YTT Student Testimonial",
    duration: "Video Review",
    thumbnail: "https://img.youtube.com/vi/QBOoRkAfJpM/hqdefault.jpg",
    student: "Agonda Beach, Goa",
    href: "https://www.youtube.com/watch?v=QBOoRkAfJpM",
  },
  {
    title: "Purnam YogaShala Goa Student Testimonial",
    duration: "Video Review",
    thumbnail: "https://img.youtube.com/vi/7Eo4xbf6trI/hqdefault.jpg",
    student: "Student Voice",
    href: "https://www.youtube.com/watch?v=7Eo4xbf6trI",
  },
  {
    title: "200 Hour Yoga TTC Student Testimonial",
    duration: "Video Review",
    thumbnail: "https://img.youtube.com/vi/RMQa0jmK1SM/hqdefault.jpg",
    student: "Agonda Beach, Goa",
    href: "https://www.youtube.com/watch?v=RMQa0jmK1SM",
  },
];

export const featuredTestimonialQuote =
  "Yoga takes you into the present moment. The only place where life exists.";

export const homepageVideoTestimonials: VideoTestimonial[] = [
  {
    title: "YTT Students Discussion Session",
    duration: "Course Talk",
    thumbnail: "https://img.youtube.com/vi/jbPNiGyCUS8/hqdefault.jpg",
    student: "With Manoj Kumar Yogiraj Ji",
    href: "https://www.youtube.com/watch?v=jbPNiGyCUS8",
  },
  ...videoTestimonials.slice(0, 2),
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
    href: "https://www.linkedin.com/in/purnam-yogashala/",
  },
  {
    name: "X",
    href: "https://x.com/purnamyogashala",
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

export const applicationSteps: ApplicationStep[] = [
  {
    title: "Fill out the application",
    description:
      "Share your preferred course, month, and room choice. The admissions team usually responds within one to two days.",
  },
  {
    title: "Make a payment",
    description:
      "Reserve your place with the stated deposit, then complete the remaining balance before the training begins.",
  },
  {
    title: "Prepare for your course",
    description:
      "Review the recommended resources, arrival guidance, and practical details before you travel to Goa.",
  },
];

export const blogPostPreviews: BlogPostPreview[] = [
  {
    slug: "why-choose-purnam-yogashala",
    title: "Why Choose Purnam Yogashala Over Other Yoga Teacher Training Institutes",
    summary:
      "A closer look at the school’s small-group approach, traditional teaching roots, and Agonda-based residential experience.",
    image: `${uploadsBase}/2024/11/yoga-teacher-training-india.jpg`,
  },
  {
    slug: "why-choose-goa-for-ytt",
    title: "Why Choose Goa for Your Yoga Teacher Training Course",
    summary:
      "How the Agonda environment supports immersion through climate, simplicity, beach access, and community rhythm.",
    image: `${uploadsBase}/2025/01/purnam-goa.jpg`,
  },
  {
    slug: "discovering-the-path-to-enlightenment",
    title: "Discovering the Path to Enlightenment: Yoga Teacher Certification Courses in India",
    summary:
      "An introduction to the transformational aims of yoga education beyond technique, including self-study and holistic growth.",
    image: `${uploadsBase}/2021/12/blog-post-3.jpg`,
  },
  {
    slug: "unlock-your-potential",
    title: "Unlock Your Potential: The Ultimate Guide to Yoga Teacher Training Certification Courses in India",
    summary:
      "A broader introduction to yoga teacher training in India, covering authenticity, cultural immersion, and what students can expect from a certification course.",
    image: `${uploadsBase}/2024/11/yoga-teacher-training-india.jpg`,
  },
  {
    slug: "how-yoga-practice-can-transform-your-life",
    title: "How Yoga Practice Can Transform Your Life",
    summary:
      "A short article connected to Manoj Yogiraj and the school’s broader message of personal transformation through sustained practice.",
    image: `${uploadsBase}/2024/08/65.jpeg`,
  },
  {
    slug: "benefits-of-yoga-teacher-training-in-goa",
    title: "Benefits of Yoga Teacher Training in Goa",
    summary:
      "Why Goa’s natural setting, experienced teachers, and international student community make it a strong place to train.",
    image: `${uploadsBase}/2025/01/purnam-goa.jpg`,
  },
  {
    slug: "yoga-teacher-training-in-goa",
    title: "Yoga Teacher Training in Goa",
    summary:
      "An overview of Purnam Yogashala’s Yoga Alliance approved training structure, including 200-hour study and core curriculum areas.",
    image: `${uploadsBase}/2024/09/goa-yoga-ytt.jpeg`,
  },
];

export const blogPosts: BlogPost[] = [
  {
    ...blogPostPreviews[0],
    intro:
      "If you are considering yoga teacher training in Goa, Purnam Yogashala stands out for its Agonda setting, complete curriculum, and grounding in authentic practice.",
    sections: [
      {
        title: "Why It Stands Out",
        points: [
          "The school is set on Agonda Beach in South Goa, giving students a quieter and more reflective environment for study.",
          "The curriculum is Yoga Alliance aligned and intentionally well-rounded rather than narrowly physical.",
          "Training spans asana, pranayama, meditation, anatomy, physiology, and yoga philosophy.",
        ],
      },
      {
        title: "Student-facing takeaway",
        points: [
          "The article frames Purnam Yogashala as a place for healing, learning, and growth rather than only certification.",
          "The combination of setting and structured curriculum is presented as a major advantage for aspiring teachers.",
        ],
      },
    ],
  },
  {
    ...blogPostPreviews[1],
    intro:
      "Goa is an exceptional place for yoga teacher training because it combines traditional learning with beachside calm, global community, and relative affordability.",
    sections: [
      {
        title: "Why Goa Works for Training",
        points: [
          "Students can learn from experienced yogis in an environment that supports both physical and spiritual practice.",
          "Serene beaches, lush greenery, and a warm tropical climate make regular practice easier and more immersive.",
          "Goa offers a rich blend of Indian and European influence, giving trainees a wider cultural experience.",
        ],
      },
      {
        title: "Practical benefits",
        points: [
          "Goa often remains more affordable than Western training destinations.",
          "Programs commonly include accommodation and meals so students can focus on the training itself.",
          "Time outside class can still include nature, recreation, and restorative space, creating a more balanced intensive.",
        ],
      },
    ],
  },
  {
    ...blogPostPreviews[2],
    intro:
      "India is one of the most transformative places to pursue yoga teacher certification because it offers authenticity, cultural depth, and direct access to the roots of the practice.",
    sections: [
      {
        title: "Why India Matters",
        points: [
          "India is presented as the birthplace of yoga and therefore a uniquely authentic training context.",
          "Traditional teachings, ancient texts, and lineage-based understanding are treated as major differentiators.",
          "Students are immersed not only in practice but also in local culture, festivals, food, and community life.",
        ],
      },
      {
        title: "What students gain",
        points: [
          "A sense of personal transformation beyond the physical asanas.",
          "Exposure to multiple yoga styles so students can find the approach that resonates most strongly.",
          "A global network of like-minded practitioners drawn to India for serious study.",
        ],
      },
    ],
  },
  {
    ...blogPostPreviews[3],
    intro:
      "Yoga teacher training in India is a holistic next step for students who want to deepen practice and eventually teach with more authenticity and confidence.",
    sections: [
      {
        title: "Why India Is Recommended",
        points: [
          "India offers an authentic experience rooted in teachers and traditions shaped by long-term practice.",
          "The cultural setting adds depth, from temples and markets to coastal and mountain learning environments.",
          "A wide range of yoga styles gives trainees room to explore their own teaching direction.",
        ],
      },
      {
        title: "What a course typically includes",
        points: [
          "Daily asana practice to deepen posture knowledge and alignment.",
          "Structured study in pranayama, meditation, anatomy, philosophy, and teaching foundations.",
          "Programs ranging from 200 to 500 hours depending on training level.",
        ],
      },
    ],
  },
  {
    ...blogPostPreviews[4],
    intro:
      "Yoga practice supports personal transformation and a more grounded way of living when it is approached consistently and with sincerity.",
    sections: [
      {
        title: "What This Means",
        points: [
          "Yoga practice is presented as life-changing when approached consistently.",
          "The article is associated with Manoj Yogiraj, reinforcing the school’s teacher-led voice.",
          "The message aligns with the school’s broader emphasis on transformation through committed practice.",
        ],
      },
    ],
  },
  {
    ...blogPostPreviews[5],
    intro:
      "Goa itself is a meaningful part of the training experience, not just the backdrop.",
    sections: [
      {
        title: "Main Benefits",
        points: [
          "Goa creates an authentic learning environment that combines traditional practice with natural calm.",
          "Practicing on beaches or near greenery supports relaxation, mindfulness, and a deeper connection to the work.",
          "The international student community creates friendships, support, and future professional connections.",
        ],
      },
      {
        title: "Conclusion",
        points: [
          "Goa is a place where environment, teachers, and community strengthen the teacher training journey.",
        ],
      },
    ],
  },
  {
    ...blogPostPreviews[6],
    intro:
      "Purnam Yogashala’s Yoga Alliance approved training in Goa offers a clear pathway into deeper study and a broad foundational curriculum.",
    sections: [
      {
        title: "Programs",
        points: [
          "The 200-hour training is a strong fit for beginners and students wanting to deepen practice.",
          "The school is described as offering different YTT formats based on commitment level.",
        ],
      },
      {
        title: "Core curriculum areas",
        points: [
          "Asanas with detailed instruction and practice.",
          "Pranayama for breath control and energetic regulation.",
          "Meditation to steady the mind and improve concentration.",
          "Anatomy and physiology to understand yoga in relation to the body.",
        ],
      },
    ],
  },
];

// Schedule data moved to src/data/courseSchedule.ts for easy manual updates.

export const contactInfo = {
  phone: "+91 8219643223",
  email: "purnamyogashalagoa@gmail.com",
  address: "Agonda Beach (left end), Agonda, Goa, India",
};
