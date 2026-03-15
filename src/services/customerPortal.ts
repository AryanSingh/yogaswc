import { supabase } from "../lib/supabaseClient";
import type { BookingRecord, PaymentRecord } from "../types/customer";

export async function fetchCustomerBookings(
  customerId: string,
): Promise<BookingRecord[]> {
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const { data, error } = await supabase
    .from("bookings")
    .select(
      "id,customer_id,course_name,batch_dates,location,booking_date,status",
    )
    .eq("customer_id", customerId)
    .order("booking_date", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []).map((item) => ({
    id: item.id,
    customerId: item.customer_id,
    courseName: item.course_name,
    batchDates: item.batch_dates,
    location: item.location,
    bookingDateISO: item.booking_date,
    status: item.status,
  }));
}

export async function fetchCustomerPayments(
  customerId: string,
): Promise<PaymentRecord[]> {
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const { data, error } = await supabase
    .from("payments")
    .select("id,customer_id,booking_id,amount_eur,paid_date,method,status")
    .eq("customer_id", customerId)
    .order("paid_date", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []).map((item) => ({
    id: item.id,
    customerId: item.customer_id,
    bookingId: item.booking_id,
    amountEUR: item.amount_eur,
    paidDateISO: item.paid_date,
    method: item.method,
    status: item.status,
  }));
}

export async function fetchCustomerPortalData(customerId: string) {
  const [bookings, payments] = await Promise.all([
    fetchCustomerBookings(customerId),
    fetchCustomerPayments(customerId),
  ]);

  return { bookings, payments };
}
