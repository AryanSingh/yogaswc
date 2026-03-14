import { Outlet } from "react-router-dom";

import AppAppBar from "../components/AppAppBar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppAppBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
