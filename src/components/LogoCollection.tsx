import { Link } from "react-router-dom";

import { recognitions } from "../data/siteContent";

export default function LogoCollection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        Recognized and trusted worldwide
      </p>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-5">
        {recognitions.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-[#d8c6ae] bg-[#fffaf3] px-4 py-4 text-center text-sm font-medium text-[#5a3c26] dark:border-[#5f4938] dark:bg-[#21180f] dark:text-[#e9d8c4]"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mt-5 text-center">
        <Link
          to="/about"
          className="text-sm font-medium text-[#8e5a3a] hover:underline dark:text-[#d3a57c]"
        >
          Learn more about the school
        </Link>
      </div>
    </section>
  );
}
