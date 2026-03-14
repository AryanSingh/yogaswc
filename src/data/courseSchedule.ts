export type CourseScheduleItem = {
  courseSlug: string;
  course: string;
  location: string;
  startDate: string;
  endDate: string;
  startDateISO?: string;
  endDateISO?: string;
  status: string;
};

// Manually maintain this list when new batches are announced.
export const courseScheduleItems: CourseScheduleItem[] = [
  {
    courseSlug: "100-hour-yttc",
    course: "100 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "6 Apr 2026",
    endDate: "17 Apr 2026",
    startDateISO: "2026-04-06",
    endDateISO: "2026-04-17",
    status: "Open",
  },
  {
    courseSlug: "100-hour-yttc",
    course: "100 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "4 May 2026",
    endDate: "15 May 2026",
    startDateISO: "2026-05-04",
    endDateISO: "2026-05-15",
    status: "Open",
  },
  {
    courseSlug: "100-hour-yttc",
    course: "100 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "5 Oct 2026",
    endDate: "16 Oct 2026",
    startDateISO: "2026-10-05",
    endDateISO: "2026-10-16",
    status: "Open",
  },
  {
    courseSlug: "100-hour-yttc",
    course: "100 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "2 Nov 2026",
    endDate: "15 Nov 2026",
    startDateISO: "2026-11-02",
    endDateISO: "2026-11-15",
    status: "Open",
  },
  {
    courseSlug: "100-hour-yttc",
    course: "100 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "1 Dec 2026",
    endDate: "12 Dec 2026",
    startDateISO: "2026-12-01",
    endDateISO: "2026-12-12",
    status: "Open",
  },
  {
    courseSlug: "100-hour-yttc",
    course: "100 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "4 Jan 2027",
    endDate: "17 Jan 2027",
    startDateISO: "2027-01-04",
    endDateISO: "2027-01-17",
    status: "Open",
  },
  {
    courseSlug: "100-hour-yttc",
    course: "100 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "1 Feb 2027",
    endDate: "12 Feb 2027",
    startDateISO: "2027-02-01",
    endDateISO: "2027-02-12",
    status: "Open",
  },
  {
    courseSlug: "100-hour-yttc",
    course: "100 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "1 Mar 2027",
    endDate: "12 Mar 2027",
    startDateISO: "2027-03-01",
    endDateISO: "2027-03-12",
    status: "Open",
  },
  {
    courseSlug: "100-hour-yttc",
    course: "100 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "5 Apr 2027",
    endDate: "16 Apr 2027",
    startDateISO: "2027-04-05",
    endDateISO: "2027-04-16",
    status: "Open",
  },
  {
    courseSlug: "100-hour-yttc",
    course: "100 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "3 May 2027",
    endDate: "14 May 2027",
    startDateISO: "2027-05-03",
    endDateISO: "2027-05-14",
    status: "Open",
  },
  {
    courseSlug: "200-hour-yttc",
    course: "200 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "6 Apr 2026",
    endDate: "29 Apr 2026",
    startDateISO: "2026-04-06",
    endDateISO: "2026-04-29",
    status: "Open",
  },
  {
    courseSlug: "200-hour-yttc",
    course: "200 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "4 May 2026",
    endDate: "27 May 2026",
    startDateISO: "2026-05-04",
    endDateISO: "2026-05-27",
    status: "Open",
  },
  {
    courseSlug: "200-hour-yttc",
    course: "200 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "5 Oct 2026",
    endDate: "28 Oct 2026",
    startDateISO: "2026-10-05",
    endDateISO: "2026-10-28",
    status: "Open",
  },
  {
    courseSlug: "200-hour-yttc",
    course: "200 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "2 Nov 2026",
    endDate: "25 Nov 2026",
    startDateISO: "2026-11-02",
    endDateISO: "2026-11-25",
    status: "Open",
  },
  {
    courseSlug: "200-hour-yttc",
    course: "200 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "1 Dec 2026",
    endDate: "24 Dec 2026",
    startDateISO: "2026-12-01",
    endDateISO: "2026-12-24",
    status: "Open",
  },
  {
    courseSlug: "200-hour-yttc",
    course: "200 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "4 Jan 2027",
    endDate: "27 Jan 2027",
    startDateISO: "2027-01-04",
    endDateISO: "2027-01-27",
    status: "Open",
  },
  {
    courseSlug: "200-hour-yttc",
    course: "200 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "1 Feb 2027",
    endDate: "24 Feb 2027",
    startDateISO: "2027-02-01",
    endDateISO: "2027-02-24",
    status: "Open",
  },
  {
    courseSlug: "200-hour-yttc",
    course: "200 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "1 Mar 2027",
    endDate: "24 Mar 2027",
    startDateISO: "2027-03-01",
    endDateISO: "2027-03-24",
    status: "Open",
  },
  {
    courseSlug: "200-hour-yttc",
    course: "200 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "5 Apr 2027",
    endDate: "28 Apr 2027",
    startDateISO: "2027-04-05",
    endDateISO: "2027-04-28",
    status: "Open",
  },
  {
    courseSlug: "200-hour-yttc",
    course: "200 Hour Yoga Teacher Training",
    location: "Agonda, Goa",
    startDate: "3 May 2027",
    endDate: "26 May 2027",
    startDateISO: "2027-05-03",
    endDateISO: "2027-05-26",
    status: "Open",
  },
  {
    courseSlug: "goa-retreat",
    course: "Goa Yoga Retreat",
    location: "Agonda, Goa",
    startDate: "Monthly",
    endDate: "Flexible",
    status: "Inquiry",
  },
];

const parseDate = (value?: string) => {
  if (!value) {
    return null;
  }
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const isUpcoming = (value?: string) => {
  const parsed = parseDate(value);
  if (!parsed) {
    return true;
  }
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return parsed >= now;
};

export const upcomingScheduleItems = courseScheduleItems.filter((item) =>
  isUpcoming(item.startDateISO),
);
