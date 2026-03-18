import { Link } from "react-router-dom";

export default function FloatingEnrollButton() {
  return (
    <>
      {/* Desktop Vertical Button */}
      <Link
        to="/contact"
        aria-label="Enquire now"
        className="fixed right-3 top-1/2 z-[100] hidden -translate-y-1/2 rotate-180 items-center justify-center bg-[#6a1b1b] p-2 text-[10px] tracking-[0.2em] font-bold text-white shadow-2xl transition hover:bg-[#4a1212] lg:flex rounded-lg"
        style={{ writingMode: "vertical-rl" }}
      >
        ENQUIRE NOW
      </Link>

      {/* Mobile Bottom Button */}
      <Link
        to="/contact"
        aria-label="Enquire now"
        className="fixed inset-x-4 bottom-3 z-50 inline-flex h-9 items-center justify-center rounded-md bg-[#6a1b1b] text-xs font-bold tracking-[0.12em] text-white shadow-2xl transition hover:bg-[#4a1212] lg:hidden"
      >
        ENQUIRE NOW
      </Link>
    </>
  );
}
