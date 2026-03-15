import { Link } from "react-router-dom";

export default function FloatingEnrollButton() {
  return (
    <>
      <Link
        to="/contact"
        aria-label="Enroll now"
        className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 rounded-l-md border border-[#8e5a3a] bg-[#8e5a3a] px-2 py-4 text-xs font-semibold tracking-[0.12em] text-white shadow-lg transition hover:bg-[#754529] lg:inline-flex"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        ENROLL NOW
      </Link>

      <Link
        to="/contact"
        aria-label="Enroll now"
        className="fixed inset-x-3 bottom-3 z-50 inline-flex h-11 items-center justify-center rounded-md bg-[#8e5a3a] text-sm font-semibold tracking-[0.08em] text-white shadow-xl transition hover:bg-[#754529] lg:hidden"
      >
        ENROLL NOW
      </Link>
    </>
  );
}
