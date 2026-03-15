import { Navigate, useLocation } from "react-router-dom";

import { useCustomerAuth } from "../context/useCustomerAuth";

export default function CustomerProtectedRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const { isAuthenticated, isInitializing } = useCustomerAuth();
  const location = useLocation();

  if (isInitializing) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16 text-sm text-muted-foreground md:px-6">
        Loading your account...
      </section>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/customer/login"
        replace
        state={{ from: `${location.pathname}${location.search}` }}
      />
    );
  }

  return children;
}
