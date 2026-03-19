import { Navigate, useLocation } from "react-router-dom";

import { useAdminAuth } from "../context/useAdminAuth";

export default function AdminProtectedRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const { isAuthenticated, isInitializing } = useAdminAuth();
  const location = useLocation();

  if (isInitializing) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-16 text-sm text-muted-foreground md:px-6">
        Loading admin access...
      </section>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{ from: `${location.pathname}${location.search}` }}
      />
    );
  }

  return children;
}
