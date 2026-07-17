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
    canonical: 'https://stickonn.in/blog',
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

export default async function BlogPage() {
  let posts: PostListItem[] = [];
  try {
    posts = (await getClient().fetch<PostListItem[]>(allPostsQuery)) ?? [];
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight sm:text-5xl">
          Blog
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
          Insights, guides, and updates on speciality adhesives.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">
          No posts published yet. Check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {post.mainImage?.asset ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={urlFor(post.mainImage).width(800).height(450).url()}
                    alt={post.mainImage.alt || post.title || 'Blog post image'}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="aspect-[16/9] w-full bg-gray-100" />
              )}
              <div className="flex flex-1 flex-col p-6">
                {post.category && post.category.length > 0 && (
                  <div className="mb-2 flex flex-wrap gap-2">
                    {post.category.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold leading-snug group-hover:underline">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                    {post.excerpt}
                  </p>
                )}
                {post.publishedAt && (
                  <time
                    dateTime={post.publishedAt}
                    className="mt-4 text-xs text-gray-400"
                  >
                    {formatDate(post.publishedAt)}
                  </time>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
