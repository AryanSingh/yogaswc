import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { useCustomerAuth } from "../context/useCustomerAuth";
import { fetchCustomerPortalData } from "../services/customerPortal";
import type { BookingRecord, PaymentRecord } from "../types/customer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function formatDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return parsed.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function CustomerDashboardPage() {
  const { session, logout, isSupabaseConfigured } = useCustomerAuth();
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!session || !isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchCustomerPortalData(session.customerId);
        if (!isMounted) {
          return;
        }
        setBookings(data.bookings);
        setPayments(data.payments);
      } catch (loadError) {
        if (!isMounted) {
          return;
        }
        const message =
          loadError instanceof Error
            ? loadError.message
            : "Could not load your portal data.";
        setError(message);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void load();

    return () => {
      isMounted = false;
    };
  }, [session, isSupabaseConfigured]);

  if (!session) {
    return null;
  }

  const totalPaid = useMemo(
    () =>
      payments
        .filter((item) => item.status === "Paid")
        .reduce((sum, item) => sum + item.amountEUR, 0),
    [payments],
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
            Customer Portal
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Welcome, {session.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{session.email}</p>
        </div>
        <Button variant="outline" onClick={() => void logout()}>
          Logout
        </Button>
      </div>

      {!isSupabaseConfigured ? (
        <div className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200">
          Supabase is not configured. Add <code>VITE_SUPABASE_URL</code> and{" "}
          <code>VITE_SUPABASE_ANON_KEY</code>.
        </div>
      ) : null}

      {loading ? (
        <p className="mt-6 text-sm text-muted-foreground">
          Loading your bookings and payments...
        </p>
      ) : null}

      {error ? (
        <p className="mt-4 text-sm text-red-600 dark:text-red-300">{error}</p>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Card className="border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
          <CardHeader>
            <CardTitle>Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{bookings.length}</p>
            <p className="text-sm text-muted-foreground">
              Total courses or retreats booked
            </p>
          </CardContent>
        </Card>
        <Card className="border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
          <CardHeader>
            <CardTitle>Total Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">EUR {totalPaid}</p>
            <p className="text-sm text-muted-foreground">Completed payments</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
          <CardHeader>
            <CardTitle>Your Bookings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {bookings.length === 0 ? (
              <p className="text-sm text-muted-foreground">No bookings yet.</p>
            ) : (
              bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="rounded-lg border border-[#e7d8c2] p-3 dark:border-[#4c3a2d]"
                >
                  <p className="font-medium">{booking.courseName}</p>
                  <p className="text-sm text-muted-foreground">
                    {booking.batchDates}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {booking.location}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Booked on {formatDate(booking.bookingDateISO)} •{" "}
                    {booking.status}
                  </p>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card className="border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]">
          <CardHeader>
            <CardTitle>Your Payments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {payments.length === 0 ? (
              <p className="text-sm text-muted-foreground">No payments yet.</p>
            ) : (
              payments.map((payment) => (
                <div
                  key={payment.id}
                  className="rounded-lg border border-[#e7d8c2] p-3 dark:border-[#4c3a2d]"
                >
                  <p className="font-medium">EUR {payment.amountEUR}</p>
                  <p className="text-sm text-muted-foreground">
                    {payment.method}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {formatDate(payment.paidDateISO)} • {payment.status}
                  </p>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Link to="/contact">
          <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
            Need invoice or booking support?
          </Button>
        </Link>
      </div>
    </section>
  );
}
