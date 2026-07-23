import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getClient } from '@/lib/sanity/client';
import { urlFor } from '@/lib/sanity/image';
import { allPostsQuery, type PostListItem } from '@/lib/sanity/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog | Stick-Onn Adhesives',
  description:
    'Insights, guides, and updates on speciality adhesives from Stick-Onn.',
  alternates: {
    canonical: 'https://www.stickonn.in/blog',
  },
};

function formatDate(date?: string) {
  if (!date) return null;
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function CategoryPills({ categories }: { categories?: string[] }) {
  if (!categories || categories.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <span
          key={cat}
          className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--accent)]"
        >
          {cat}
        </span>
      ))}
    </div>
  );
}

export default async function BlogPage() {
  let posts: PostListItem[] = [];
  try {
    posts = (await getClient().fetch<PostListItem[]>(allPostsQuery)) ?? [];
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
  }

  const [featured, ...rest] = posts;

  return (
    <main className="container-balanced py-6">
      <header className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
          Knowledge Hub
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl">
          The Stick-Onn Blog
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Practical guides, industry insights, and product know-how on
          speciality adhesives — from the team behind Stick-Onn.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center text-slate-500">
          No posts published yet. Check back soon.
        </div>
      ) : (
        <>
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group mb-12 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 md:aspect-auto md:min-h-[320px]">
                {featured.coverImage?.asset ? (
                  <Image
                    src={urlFor(featured.coverImage)
                      .width(1000)
                      .height(640)
                      .url()}
                    alt={featured.coverImage.alt || featured.title || 'Post'}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full min-h-[220px] items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
                    <span className="px-6 text-center font-[family-name:var(--font-heading)] text-2xl font-bold text-white/80">
                      Stick-Onn
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
                <CategoryPills categories={featured.categories} />
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold leading-snug text-slate-900 group-hover:text-[var(--primary)] sm:text-3xl">
                  {featured.title}
                </h2>
                {featured.excerpt && (
                  <p className="line-clamp-3 text-[15px] leading-relaxed text-slate-600">
                    {featured.excerpt}
                  </p>
                )}
                <div className="mt-2 flex items-center gap-3 text-sm text-slate-400">
                  {(featured.date || featured._createdAt) && (
                    <time dateTime={featured.date || featured._createdAt}>
                      {formatDate(featured.date || featured._createdAt)}
                    </time>
                  )}
                  <span className="font-semibold text-[var(--accent)] transition group-hover:translate-x-1">
                    Read article &rarr;
                  </span>
                </div>
              </div>
            </Link>
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    {post.coverImage?.asset ? (
                      <Image
                        src={urlFor(post.coverImage).width(800).height(450).url()}
                        alt={post.coverImage.alt || post.title || 'Post'}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
                        <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-white/80">
                          Stick-Onn
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <CategoryPills categories={post.categories} />
                    <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold leading-snug text-slate-900 group-hover:text-[var(--primary)]">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="mt-auto flex items-center justify-between pt-2 text-xs text-slate-400">
                      {(post.date || post._createdAt) && (
                        <time dateTime={post.date || post._createdAt}>
                          {formatDate(post.date || post._createdAt)}
                        </time>
                      )}
                      <span className="font-semibold text-[var(--accent)]">
                        Read &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}
