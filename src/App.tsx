import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import CustomerProtectedRoute from "./components/CustomerProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { CmsContentProvider } from "./context/CmsContentContext";
import { CustomerAuthProvider } from "./context/CustomerAuthContext";
import SiteLayout from "./layouts/SiteLayout";
const HomePage = lazy(() => import("./pages/HomePage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const CourseDetailPage = lazy(() => import("./pages/CourseDetailPage"));
const RetreatsPage = lazy(() => import("./pages/RetreatsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AboutPhilosophyPage = lazy(() => import("./pages/AboutPhilosophyPage"));
const AboutCampusPage = lazy(() => import("./pages/AboutCampusPage"));
const AboutCertificationPage = lazy(
  () => import("./pages/AboutCertificationPage"),
);
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const AccommodationPage = lazy(() => import("./pages/AccommodationPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const SchedulePage = lazy(() => import("./pages/SchedulePage"));
const AdmissionsPage = lazy(() => import("./pages/AdmissionsPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const CustomerLoginPage = lazy(() => import("./pages/CustomerLoginPage"));
const CustomerSignUpPage = lazy(() => import("./pages/CustomerSignUpPage"));
const CustomerDashboardPage = lazy(
  () => import("./pages/CustomerDashboardPage"),
);
const AdminLoginPage = lazy(() => import("./pages/AdminLoginPage"));
const AdminDashboardPage = lazy(() => import("./pages/AdminDashboardPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsAndConditionsPage = lazy(() => import("./pages/TermsAndConditionsPage"));

function RouteLoadingFallback() {
  return (
    <div className="mx-auto flex min-h-[40vh] max-w-5xl items-center justify-center px-4 py-16 text-sm text-muted-foreground md:px-6">
      Loading page...
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <CustomerAuthProvider>
        <AdminAuthProvider>
          <CmsContentProvider>
            <Suspense fallback={<RouteLoadingFallback />}>
              <Routes>
                <Route element={<SiteLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/courses" element={<CoursesPage />} />
                  <Route path="/courses/:slug" element={<CourseDetailPage />} />
                  <Route path="/retreats" element={<RetreatsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/about/philosophy" element={<AboutPhilosophyPage />} />
                  <Route path="/about/campus" element={<AboutCampusPage />} />
                  <Route
                    path="/about/certification"
                    element={<AboutCertificationPage />}
                  />
                  <Route path="/teachers" element={<TeachersPage />} />
                  <Route path="/accommodation" element={<AccommodationPage />} />
                  <Route path="/schedule" element={<SchedulePage />} />
                  <Route path="/admissions" element={<AdmissionsPage />} />
                  <Route path="/faq" element={<FaqPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/enquiry" element={<ContactPage />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogDetailPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-conditions" element={<TermsAndConditionsPage />} />
                  <Route path="/customer/login" element={<CustomerLoginPage />} />
                  <Route path="/customer/signup" element={<CustomerSignUpPage />} />
                  <Route path="/admin/login" element={<AdminLoginPage />} />
                  <Route
                    path="/customer/dashboard"
                    element={
                      <CustomerProtectedRoute>
                        <CustomerDashboardPage />
                      </CustomerProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/dashboard"
                    element={
                      <AdminProtectedRoute>
                        <AdminDashboardPage />
                      </AdminProtectedRoute>
                    }
                  />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              </Routes>
            </Suspense>
          </CmsContentProvider>
        </AdminAuthProvider>
      </CustomerAuthProvider>
    </BrowserRouter>
  );
}

export default App;
