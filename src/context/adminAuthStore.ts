import { createContext } from "react";

import type { AdminSession } from "../types/admin";

export type AdminAuthContextValue = {
  session: AdminSession | null;
  isAuthenticated: boolean;
  isInitializing: boolean;
  isSupabaseConfigured: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
  refreshAdminState: () => Promise<void>;
};

export const AdminAuthContext =
  createContext<AdminAuthContextValue | null>(null);
