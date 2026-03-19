import { Link } from "react-router-dom";

import { blogPostPreviews } from "../data/siteContent";
import { Button } from "./ui/button";

export default function BlogHighlights() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
            Latest Insights
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Helpful reading for future students
          </h2>
        </div>
        <Link to="/blog">
          <Button variant="outline">View Blog</Button>
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {blogPostPreviews.map((post) => (
          <article
            key={post.slug}
            className="overflow-hidden rounded-2xl border border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold leading-snug">{post.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {post.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
