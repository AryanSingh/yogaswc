import { useCallback, useEffect, useMemo, useState } from "react";

import { isSupabaseConfigured, supabase } from "../lib/supabaseClient";
import type { AdminSession } from "../types/admin";
import {
  AdminAuthContext,
  type AdminAuthContextValue,
} from "./adminAuthStore";

function normalizeSession(
  user: {
    id: string;
    email?: string;
    user_metadata?: Record<string, unknown>;
  },
  profile?: { full_name?: string | null },
): AdminSession {
  const metadata = user.user_metadata ?? {};
  const rawName = profile?.full_name ?? metadata.full_name ?? metadata.name;
  const email = user.email ?? "";

  return {
    adminId: user.id,
    email,
    name:
      typeof rawName === "string" && rawName.trim()
        ? rawName
        : email.split("@")[0] || "Admin",
  };
}

async function fetchAdminProfile(userId: string) {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from("admin_users")
    .select("user_id, full_name")
    .eq("user_id", userId)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return data;
}

export function AdminAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<AdminSession | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  const refreshAdminState = useCallback(async () => {
    if (!isSupabaseConfigured || !supabase) {
      setSession(null);
      setIsInitializing(false);
      return;
    }

    const {
      data: { session: authSession },
    } = await supabase.auth.getSession();

    const authUser = authSession?.user;

    if (!authUser) {
      setSession(null);
      setIsInitializing(false);
      return;
    }

    const profile = await fetchAdminProfile(authUser.id);
    setSession(profile ? normalizeSession(authUser, profile) : null);
    setIsInitializing(false);
  }, []);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setIsInitializing(false);
      return;
    }

    let isMounted = true;

    refreshAdminState().then(() => {
      if (!isMounted) {
        return;
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      void refreshAdminState();
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [refreshAdminState]);

  const login = useCallback(
    async (email: string, password: string) => {
      if (!supabase) {
        return { ok: false, error: "Supabase not configured." };
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error || !data.user) {
        return { ok: false, error: error?.message || "Could not sign in." };
      }

      const profile = await fetchAdminProfile(data.user.id);

      if (!profile) {
        await supabase.auth.signOut();
        setSession(null);
        return {
          ok: false,
          error: "This account does not have admin access.",
        };
      }

      setSession(normalizeSession(data.user, profile));
      return { ok: true };
    },
    [],
  );

  const logout = useCallback(async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    setSession(null);
  }, []);

  const value = useMemo<AdminAuthContextValue>(
    () => ({
      session,
      isAuthenticated: Boolean(session),
      isInitializing,
      isSupabaseConfigured,
      login,
      logout,
      refreshAdminState,
    }),
    [session, isInitializing, login, logout, refreshAdminState],
  );

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
}
