import { useCallback, useEffect, useMemo, useState } from "react";

import { isSupabaseConfigured, supabase } from "../lib/supabaseClient";
import type { CustomerSession } from "../types/customer";
import {
  CustomerAuthContext,
  type CustomerAuthContextValue,
} from "./customerAuthStore";

function normalizeSessionFromAuthUser(user: {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
}): CustomerSession {
  const metadata = user.user_metadata ?? {};
  const rawName = metadata.full_name ?? metadata.name;
  const resolvedEmail = user.email ?? "";
  const fallbackName = resolvedEmail ? resolvedEmail.split("@")[0] : "Student";

  return {
    customerId: user.id,
    email: resolvedEmail,
    name:
      typeof rawName === "string" && rawName.trim() ? rawName : fallbackName,
  };
}

export function CustomerAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<CustomerSession | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setIsInitializing(false);
      return;
    }

    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!isMounted) {
        return;
      }
      const authUser = data.session?.user;
      setSession(authUser ? normalizeSessionFromAuthUser(authUser) : null);
      setIsInitializing(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, authSession) => {
      const authUser = authSession?.user;
      setSession(authUser ? normalizeSessionFromAuthUser(authUser) : null);
      setIsInitializing(false);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    if (!supabase) {
      return false;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error || !data.user) {
      return false;
    }

    setSession(normalizeSessionFromAuthUser(data.user));
    return true;
  }, []);

  const signUp = useCallback(
    async (email: string, password: string, name: string) => {
      if (!supabase) {
        return { ok: false, error: "Supabase not configured" };
      }

      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: name.trim(),
          },
        },
      });

      if (error) {
        return { ok: false, error: error.message };
      }

      if (data.user) {
        setSession(normalizeSessionFromAuthUser(data.user));
      }

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

  const value = useMemo<CustomerAuthContextValue>(
    () => ({
      session,
      isAuthenticated: Boolean(session),
      isInitializing,
      isSupabaseConfigured,
      login,
      signUp,
      logout,
    }),
    [session, isInitializing, login, signUp, logout],
  );

  return (
    <CustomerAuthContext.Provider value={value}>
      {children}
    </CustomerAuthContext.Provider>
  );
}
