import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import CustomerProtectedRoute from "./components/CustomerProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { CmsContentProvider } from "./context/CmsContentContext";
import { CustomerAuthProvider } from "./context/CustomerAuthContext";
import SiteLayout from "./layouts/SiteLayout";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import RetreatsPage from "./pages/RetreatsPage";
import AboutPage from "./pages/AboutPage";
import AboutPhilosophyPage from "./pages/AboutPhilosophyPage";
import AboutCampusPage from "./pages/AboutCampusPage";
import AboutCertificationPage from "./pages/AboutCertificationPage";
import TeachersPage from "./pages/TeachersPage";
import AccommodationPage from "./pages/AccommodationPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import SchedulePage from "./pages/SchedulePage";
import AdmissionsPage from "./pages/AdmissionsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import CustomerLoginPage from "./pages/CustomerLoginPage";
import CustomerSignUpPage from "./pages/CustomerSignUpPage";
import CustomerDashboardPage from "./pages/CustomerDashboardPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <CustomerAuthProvider>
        <AdminAuthProvider>
          <CmsContentProvider>
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
          </CmsContentProvider>
        </AdminAuthProvider>
      </CustomerAuthProvider>
    </BrowserRouter>
  );
}

export default App;
