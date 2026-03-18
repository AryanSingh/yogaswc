import { useState, useEffect } from "react";
import { Button } from "./ui/button";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("consentMode");
    if (!consent) {
      setIsVisible(true);
    } else {
      // Apply saved consent on load
      const savedConsent = JSON.parse(consent);
      window.gtag("consent", "update", savedConsent);
    }
  }, []);

  const handleConsent = (status: "granted" | "denied") => {
    const consentUpdates = {
      ad_storage: status,
      analytics_storage: status,
      ad_user_data: status,
      ad_personalization: status,
    };

    window.gtag("consent", "update", consentUpdates);
    localStorage.setItem("consentMode", JSON.stringify(consentUpdates));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="mx-auto max-w-5xl rounded-xl border border-border/40 bg-background/95 p-6 shadow-2xl backdrop-blur-md dark:bg-card/95">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold tracking-tight text-[#8e5a3a] dark:text-[#d3a57c]">
              Privacy Preferences
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              We use cookies and similar technologies to help us understand how you use our site and to provide you with a better experience. By clicking "Accept All", you consent to our use of these tools.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleConsent("denied")}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-muted/50 transition-colors"
            >
              Decline All
            </Button>
            <Button
              size="sm"
              onClick={() => handleConsent("granted")}
              className="bg-[#8e5a3a] px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545] transition-colors"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
