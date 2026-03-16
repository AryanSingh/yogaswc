import { createContext } from "react";

import type { CustomerSession } from "../types/customer";

export type CustomerAuthContextValue = {
  session: CustomerSession | null;
  isAuthenticated: boolean;
  isInitializing: boolean;
  isSupabaseConfigured: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string, name: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
};

export const CustomerAuthContext =
  createContext<CustomerAuthContextValue | null>(null);
