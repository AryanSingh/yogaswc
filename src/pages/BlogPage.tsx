import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";
import { useCmsContent } from "../context/CmsContentContext";

export default function BlogPage() {
  const { blogPosts } = useCmsContent();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        Blog
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Insights for future students
      </h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        Explore a few evergreen topics that help students choose the right
        training environment, understand the Goa setting, and connect yoga
        study with deeper personal growth.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="overflow-hidden rounded-2xl border border-[#d8c6ae] bg-[#fffaf3] dark:border-[#5f4938] dark:bg-[#21180f]"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold leading-snug">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {post.summary}
              </p>
              <Link to={`/blog/${post.slug}`} className="mt-5 inline-flex">
                <Button variant="outline">Read Article</Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
