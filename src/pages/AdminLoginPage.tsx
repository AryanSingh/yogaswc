import { useState } from "react";
import type { FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { useAdminAuth } from "../context/useAdminAuth";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

type AdminLoginState = {
  from?: string;
};

export default function AdminLoginPage() {
  const { isAuthenticated, login, isSupabaseConfigured } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as AdminLoginState | null;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(email, password);
    setLoading(false);

    if (!result.ok) {
      setError(result.error || "Could not sign in.");
      return;
    }

    navigate(state?.from || "/admin/dashboard", { replace: true });
  };

  return (
    <section className="mx-auto max-w-md px-4 py-16 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        Admin
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Admin Login</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Sign in to manage site content, dates, testimonials, and blog entries.
      </p>

      {!isSupabaseConfigured ? (
        <div className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-xs text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200">
          Supabase is not configured. Set <code>VITE_SUPABASE_URL</code> and{" "}
          <code>VITE_SUPABASE_ANON_KEY</code>.
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-3 rounded-xl border border-[#d8c6ae] bg-[#fffaf3] p-5 dark:border-[#5f4938] dark:bg-[#21180f]"
      >
        <Input
          type="email"
          required
          placeholder="Admin email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          type="submit"
          disabled={loading || !isSupabaseConfigured}
          className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]"
        >
          {loading ? "Signing in..." : "Sign In"}
        </Button>
        {error ? (
          <p className="text-sm text-red-600 dark:text-red-300">{error}</p>
        ) : null}
      </form>
    </section>
  );
}
