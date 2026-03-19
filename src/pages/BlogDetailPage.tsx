import { Link, Navigate, useParams } from "react-router-dom";

import { Button } from "../components/ui/button";
import { useCmsContent } from "../context/CmsContentContext";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const { blogPosts } = useCmsContent();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
        Blog
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">{post.title}</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        {post.intro}
      </p>

      <img
        src={post.image}
        alt={post.title}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="mt-8 h-72 w-full rounded-2xl object-cover"
      />

      <div className="mt-8 space-y-6">
        {post.sections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-[#d8c6ae] bg-[#fffaf3] p-6 dark:border-[#5f4938] dark:bg-[#21180f]"
          >
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {section.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/blog">
          <Button variant="outline">Back to Blog</Button>
        </Link>
      </div>
    </section>
  );
}
