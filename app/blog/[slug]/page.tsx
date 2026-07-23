import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { getClient } from '@/lib/sanity/client';
import { urlFor } from '@/lib/sanity/image';
import {
  postBySlugQuery,
  postSlugsQuery,
  type Post,
} from '@/lib/sanity/queries';

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const slugs = (await getClient().fetch<string[]>(postSlugsQuery)) ?? [];
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error('Failed to fetch post slugs:', error);
    return [];
  }
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    return await getClient().fetch<Post | null>(postBySlugQuery, { slug });
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    return { title: 'Post not found' };
  }

  const ogImageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : undefined;

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `https://www.stickonn.in/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.date || post._createdAt,
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630 }] : [],
    },
  };
}

function formatDate(date?: string) {
  if (!date) return null;
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function getEmbedUrl(url: string): string | null {
  const youtube = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}`;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return null;
}

function ExternalCard({ url, label }: { url: string; label: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="my-8 block rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm transition hover:border-[var(--primary)]"
    >
      <span className="font-semibold text-[var(--primary)]">{label}</span>
      <span className="mt-1 block truncate text-slate-500">{url}</span>
    </a>
  );
}

type TableValue = {
  rows?: { _key?: string; cells?: string[] }[];
};

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-10">
          <Image
            src={urlFor(value).width(1400).url()}
            alt={value.alt || value.caption || ''}
            width={1400}
            height={788}
            className="h-auto w-full rounded-xl"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    video: ({ value }) => {
      if (!value?.url) return null;
      const embed = getEmbedUrl(value.url);
      if (embed) {
        return (
          <div className="my-10 aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              src={embed}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded video"
            />
          </div>
        );
      }
      return <ExternalCard url={value.url} label="Watch video" />;
    },
    instagramPost: ({ value }) =>
      value?.url ? (
        <ExternalCard url={value.url} label="View on Instagram" />
      ) : null,
    tweet: ({ value }) =>
      value?.url ? <ExternalCard url={value.url} label="View on X" /> : null,
    table: ({ value }: { value: TableValue }) => {
      const rows = value?.rows ?? [];
      if (rows.length === 0) return null;
      const [head, ...body] = rows;
      return (
        <div className="my-10 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[var(--primary)] text-white">
                {(head.cells ?? []).map((cell, i) => (
                  <th key={i} className="px-4 py-3 font-semibold">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr
                  key={row._key ?? ri}
                  className="border-t border-slate-200 even:bg-slate-50"
                >
                  {(row.cells ?? []).map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-slate-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h2 className="mt-12 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-900">
        {children}
      </h2>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 font-[family-name:var(--font-heading)] text-xl font-semibold text-slate-900">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 font-[family-name:var(--font-heading)] text-lg font-semibold text-slate-900">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-xl border-l-4 border-[var(--accent)] bg-orange-50/60 px-6 py-4 italic text-slate-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mt-5 text-[16px] leading-[1.85] text-slate-700">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-[16px] leading-relaxed text-slate-700 marker:text-[var(--accent)]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-[16px] leading-relaxed text-slate-700 marker:font-semibold marker:text-[var(--primary)]">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[var(--primary)] underline decoration-[var(--accent)] decoration-2 underline-offset-2 transition hover:text-[var(--primary-dark)]"
      >
        {children}
      </a>
    ),
  },
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const displayDate = post.date || post._createdAt;

  return (
    <main className="container-balanced py-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-[var(--primary)]"
        >
          &larr; Back to blog
        </Link>

        <article className="mt-8">
          <header>
            {post.categories && post.categories.length > 0 && (
              <div className="mb-5 flex flex-wrap gap-2">
                {post.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--accent)]"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight tracking-tight text-[var(--primary)] sm:text-4xl">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                {post.excerpt}
              </p>
            )}
            <div className="mt-6 flex items-center gap-3 border-y border-slate-200 py-4 text-sm text-slate-500">
              {post.author?.picture?.asset ? (
                <Image
                  src={urlFor(post.author.picture).width(88).height(88).url()}
                  alt={post.author.name || 'Author'}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />
              ) : (
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] font-[family-name:var(--font-heading)] font-bold text-white">
                  {(post.author?.name || 'S').charAt(0)}
                </span>
              )}
              <div>
                <p className="font-semibold text-slate-800">
                  {post.author?.name || 'Stick-Onn Team'}
                </p>
                {displayDate && (
                  <time dateTime={displayDate}>{formatDate(displayDate)}</time>
                )}
              </div>
            </div>
          </header>

          {post.coverImage?.asset && (
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <Image
                src={urlFor(post.coverImage).width(1600).height(900).url()}
                alt={post.coverImage.alt || post.title || 'Post image'}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}

          {post.content && (
            <div className="mt-4">
              <PortableText
                value={post.content}
                components={portableTextComponents}
              />
            </div>
          )}
        </article>

        <div className="mt-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] p-8 text-white sm:p-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            Need the right adhesive for your application?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-200">
            Talk to the Stick-Onn team about products, dealer supply, and
            technical guidance.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-md bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
