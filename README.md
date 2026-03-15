# Purnam Yoga Website

Marketing and admissions web app built with React + TypeScript + Vite.

## Quick Start

```zsh
yarn install
cp .env.example .env
yarn dev
```

## Build and Deploy

```zsh
yarn build
yarn deploy
```

## Environment Variables

Set these in `.env`:

- `VITE_GOOGLE_SCRIPT_URL`: Google Apps Script endpoint for inquiry forms
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anon key

## Customer Portal (Supabase)

Customer pages:

- `/customer/login`
- `/customer/dashboard`

### 1) Create Supabase schema

Run SQL from `supabase/schema.sql` in Supabase SQL editor.

### 2) Enable Email/Password auth

In Supabase dashboard:

- Authentication -> Providers -> Email -> enable Email/Password.

### 3) Insert sample data

Create users in Supabase Auth, then insert rows in `bookings` and `payments` with `customer_id` set to each user `id` from `auth.users`.

### 4) Verify portal

1. Start app and open `/customer/login`.
2. Sign in with a real Supabase email/password user.
3. Open `/customer/dashboard` and confirm bookings/payments load.

## Notes

- Customer portal is read-only for frontend clients.
- Row Level Security ensures users only see their own records.
- Admin/content editing can be added via Supabase-backed admin pages next.
