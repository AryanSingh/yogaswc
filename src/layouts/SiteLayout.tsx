import { Outlet } from "react-router-dom";

import AppAppBar from "../components/AppAppBar";
import FloatingEnrollButton from "../components/FloatingEnrollButton";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { useRevealOnScroll } from "../lib/useRevealOnScroll";

export default function SiteLayout() {
  useRevealOnScroll();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 yoga-grain opacity-40 dark:opacity-20" />
      <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-[#d9b996]/30 blur-3xl dark:bg-[#8e5a3a]/20" />
      <div className="pointer-events-none absolute -right-24 top-48 -z-10 h-72 w-72 rounded-full bg-[#efddca]/40 blur-3xl dark:bg-[#6f4630]/20" />
      {/* Global Tree Background Watermark */}
      <div 
        id="global-tree-background"
        className="yoga-tree-bg pointer-events-none fixed inset-0 z-0 opacity-[0.25] dark:opacity-[0.15]" 
      />
      <AppAppBar />
      <main className="relative z-10 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingEnrollButton />
      <WhatsAppFloat />
    </div>
  );
}
