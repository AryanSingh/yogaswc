import type {
  BookingRecord,
  CustomerAccount,
  PaymentRecord,
} from "../types/customer";

export const customerAccounts: CustomerAccount[] = [
  {
    id: "cust-001",
    name: "Aarav Sharma",
    email: "aarav@example.com",
    password: "demo1234",
  },
  {
    id: "cust-002",
    name: "Mila Fernandes",
    email: "mila@example.com",
    password: "demo1234",
  },
];

export const bookingRecords: BookingRecord[] = [
  {
    id: "book-1001",
    customerId: "cust-001",
    courseName: "200 Hour Yoga Teacher Training",
    batchDates: "6 Apr 2026 - 29 Apr 2026",
    location: "Agonda, Goa",
    bookingDateISO: "2026-01-18",
    status: "Confirmed",
  },
  {
    id: "book-1002",
    customerId: "cust-001",
    courseName: "Goa Yoga Retreat",
    batchDates: "Monthly / Flexible",
    location: "Agonda, Goa",
    bookingDateISO: "2026-02-05",
    status: "Pending",
  },
  {
    id: "book-2001",
    customerId: "cust-002",
    courseName: "100 Hour Yoga Teacher Training",
    batchDates: "4 May 2026 - 15 May 2026",
    location: "Agonda, Goa",
    bookingDateISO: "2026-02-20",
    status: "Confirmed",
  },
];

export const paymentRecords: PaymentRecord[] = [
  {
    id: "pay-9001",
    customerId: "cust-001",
    bookingId: "book-1001",
    amountEUR: 600,
    paidDateISO: "2026-01-19",
    method: "Card",
    status: "Paid",
  },
  {
    id: "pay-9002",
    customerId: "cust-001",
    bookingId: "book-1002",
    amountEUR: 200,
    paidDateISO: "2026-02-05",
    method: "UPI",
    status: "Pending",
  },
  {
    id: "pay-9101",
    customerId: "cust-002",
    bookingId: "book-2001",
    amountEUR: 450,
    paidDateISO: "2026-02-21",
    method: "Bank Transfer",
    status: "Paid",
  },
];
