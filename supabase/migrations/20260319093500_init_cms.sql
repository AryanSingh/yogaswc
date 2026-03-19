-- Run via `supabase db push` or paste into the Supabase SQL editor.

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

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.cms_site_settings (
  id integer primary key default 1 check (id = 1),
  hero_image_url text not null,
  goa_hero_image_url text not null,
  about_hero_image_url text not null,
  retreats_hero_image_url text not null,
  logo_url text not null,
  yoga_alliance_image_url text not null,
  contact_phone text not null,
  contact_email text not null,
  contact_address text not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_schedule_items (
  id uuid primary key default gen_random_uuid(),
  course_slug text not null,
  course text not null,
  location text not null,
  start_date text not null,
  end_date text not null,
  start_date_iso date,
  end_date_iso date,
  status text not null,
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.cms_testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  quote text not null,
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.cms_video_testimonials (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  student text not null,
  href text not null,
  thumbnail_url text not null,
  duration text not null,
  display_order integer not null default 0,
  is_homepage boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.cms_blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text not null,
  image text not null,
  intro text not null,
  sections jsonb not null default '[]'::jsonb,
  display_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
alter table public.cms_site_settings enable row level security;
alter table public.cms_schedule_items enable row level security;
alter table public.cms_testimonials enable row level security;
alter table public.cms_video_testimonials enable row level security;
alter table public.cms_blog_posts enable row level security;

drop policy if exists "Admins can read own admin profile" on public.admin_users;
create policy "Admins can read own admin profile"
  on public.admin_users
  for select
  using (auth.uid() = user_id);

drop policy if exists "Public can read site settings" on public.cms_site_settings;
create policy "Public can read site settings"
  on public.cms_site_settings
  for select
  using (true);

drop policy if exists "Public can read schedule items" on public.cms_schedule_items;
create policy "Public can read schedule items"
  on public.cms_schedule_items
  for select
  using (true);

drop policy if exists "Public can read testimonials" on public.cms_testimonials;
create policy "Public can read testimonials"
  on public.cms_testimonials
  for select
  using (true);

drop policy if exists "Public can read video testimonials" on public.cms_video_testimonials;
create policy "Public can read video testimonials"
  on public.cms_video_testimonials
  for select
  using (true);

drop policy if exists "Public can read blog posts" on public.cms_blog_posts;
create policy "Public can read blog posts"
  on public.cms_blog_posts
  for select
  using (
    is_published = true
    or exists (select 1 from public.admin_users where user_id = auth.uid())
  );

insert into storage.buckets (id, name, public)
values ('cms-assets', 'cms-assets', true)
on conflict (id) do nothing;

drop policy if exists "Public can read cms assets" on storage.objects;
create policy "Public can read cms assets"
  on storage.objects
  for select
  using (bucket_id = 'cms-assets');

drop policy if exists "Admins can upload cms assets" on storage.objects;
create policy "Admins can upload cms assets"
  on storage.objects
  for insert
  with check (
    bucket_id = 'cms-assets'
    and exists (select 1 from public.admin_users where user_id = auth.uid())
  );

drop policy if exists "Admins can update cms assets" on storage.objects;
create policy "Admins can update cms assets"
  on storage.objects
  for update
  using (
    bucket_id = 'cms-assets'
    and exists (select 1 from public.admin_users where user_id = auth.uid())
  )
  with check (
    bucket_id = 'cms-assets'
    and exists (select 1 from public.admin_users where user_id = auth.uid())
  );

drop policy if exists "Admins can delete cms assets" on storage.objects;
create policy "Admins can delete cms assets"
  on storage.objects
  for delete
  using (
    bucket_id = 'cms-assets'
    and exists (select 1 from public.admin_users where user_id = auth.uid())
  );

drop policy if exists "Admins can manage site settings" on public.cms_site_settings;
create policy "Admins can manage site settings"
  on public.cms_site_settings
  for all
  using (exists (select 1 from public.admin_users where user_id = auth.uid()))
  with check (exists (select 1 from public.admin_users where user_id = auth.uid()));

drop policy if exists "Admins can manage schedule items" on public.cms_schedule_items;
create policy "Admins can manage schedule items"
  on public.cms_schedule_items
  for all
  using (exists (select 1 from public.admin_users where user_id = auth.uid()))
  with check (exists (select 1 from public.admin_users where user_id = auth.uid()));

drop policy if exists "Admins can manage testimonials" on public.cms_testimonials;
create policy "Admins can manage testimonials"
  on public.cms_testimonials
  for all
  using (exists (select 1 from public.admin_users where user_id = auth.uid()))
  with check (exists (select 1 from public.admin_users where user_id = auth.uid()));

drop policy if exists "Admins can manage video testimonials" on public.cms_video_testimonials;
create policy "Admins can manage video testimonials"
  on public.cms_video_testimonials
  for all
  using (exists (select 1 from public.admin_users where user_id = auth.uid()))
  with check (exists (select 1 from public.admin_users where user_id = auth.uid()));

drop policy if exists "Admins can manage blog posts" on public.cms_blog_posts;
create policy "Admins can manage blog posts"
  on public.cms_blog_posts
  for all
  using (exists (select 1 from public.admin_users where user_id = auth.uid()))
  with check (exists (select 1 from public.admin_users where user_id = auth.uid()));
