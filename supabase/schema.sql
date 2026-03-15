-- Run this in Supabase SQL editor.

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references auth.users(id) on delete cascade,
  course_name text not null,
  batch_dates text not null,
  location text not null,
  booking_date date not null default current_date,
  status text not null check (status in ('Confirmed', 'Pending', 'Completed')),
  created_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references auth.users(id) on delete cascade,
  booking_id uuid not null references public.bookings(id) on delete cascade,
  amount_eur numeric(10, 2) not null,
  paid_date date not null default current_date,
  method text not null check (method in ('Card', 'Bank Transfer', 'UPI')),
  status text not null check (status in ('Paid', 'Pending', 'Refunded')),
  created_at timestamptz not null default now()
);

alter table public.bookings enable row level security;
alter table public.payments enable row level security;

drop policy if exists "Customers can read own bookings" on public.bookings;
create policy "Customers can read own bookings"
  on public.bookings
  for select
  using (auth.uid() = customer_id);

drop policy if exists "Customers can read own payments" on public.payments;
create policy "Customers can read own payments"
  on public.payments
  for select
  using (auth.uid() = customer_id);

-- Optional: allow service role insert/update externally; keep client access read-only by default.

