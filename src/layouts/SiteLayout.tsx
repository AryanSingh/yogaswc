import { Outlet } from "react-router-dom";

import AppAppBar from "../components/AppAppBar";
import FloatingEnrollButton from "../components/FloatingEnrollButton";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import ConsentBanner from "../components/ConsentBanner";
import { useRevealOnScroll } from "../lib/useRevealOnScroll";

export default function SiteLayout() {
  useRevealOnScroll();

  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 yoga-grain opacity-40 dark:opacity-20" />
      <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-[#d9b996]/30 blur-3xl dark:bg-[#8e5a3a]/20" />
      <div className="pointer-events-none absolute -right-24 top-48 -z-10 h-72 w-72 rounded-full bg-[#efddca]/40 blur-3xl dark:bg-[#6f4630]/20" />
      {/* Global Tree Background Watermark */}
      <div 
        id="global-tree-background"
        className="yoga-tree-bg pointer-events-none fixed inset-0 z-0 opacity-[0.12] dark:opacity-[0.08]" 
      />
      <AppAppBar />
      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingEnrollButton />
      <WhatsAppFloat />
      <ConsentBanner />
    </div>
  );
}
