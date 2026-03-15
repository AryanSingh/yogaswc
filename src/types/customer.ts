export type CustomerSession = {
  customerId: string;
  name: string;
  email: string;
};

export type CustomerAccount = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type BookingRecord = {
  id: string;
  customerId: string;
  courseName: string;
  batchDates: string;
  location: string;
  bookingDateISO: string;
  status: "Confirmed" | "Pending" | "Completed";
};

export type PaymentRecord = {
  id: string;
  customerId: string;
  bookingId: string;
  amountEUR: number;
  paidDateISO: string;
  method: "Card" | "Bank Transfer" | "UPI";
  status: "Paid" | "Pending" | "Refunded";
};
