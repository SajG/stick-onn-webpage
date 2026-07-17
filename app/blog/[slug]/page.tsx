import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { client } from '@/lib/sanity/client';
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
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) ?? [];
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error('Failed to fetch post slugs:', error);
    return [];
  }
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    return await client.fetch<Post | null>(postBySlugQuery, { slug });
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

  const ogSource = post.ogImage?.asset ? post.ogImage : post.mainImage;
  const ogImageUrl = ogSource?.asset
    ? urlFor(ogSource).width(1200).height(630).url()
    : undefined;

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `https://stickonn.in/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
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

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ''}
            width={1200}
            height={675}
            className="h-auto w-full rounded-xl"
          />
          {value.alt && (
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-[family-name:var(--font-heading)] text-2xl font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-[family-name:var(--font-heading)] text-xl font-semibold">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-gray-300 pl-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mt-4 leading-relaxed text-gray-700">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-700">
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
        className="text-blue-600 underline underline-offset-2 hover:text-blue-800"
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

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="text-sm text-gray-500 hover:text-gray-800"
      >
        &larr; Back to blog
      </Link>

      <article className="mt-6">
        <header>
          {post.category && post.category.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
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
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
            {post.author?.image?.asset && (
              <Image
                src={urlFor(post.author.image).width(80).height(80).url()}
                alt={post.author.name || 'Author'}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            )}
            <div>
              {post.author?.name && (
                <p className="font-medium text-gray-800">{post.author.name}</p>
              )}
              {post.publishedAt && (
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              )}
            </div>
          </div>
        </header>

        {post.mainImage?.asset && (
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src={urlFor(post.mainImage).width(1600).height(900).url()}
              alt={post.mainImage.alt || post.title || 'Post image'}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        {post.body && (
          <div className="mt-8">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>
        )}
      </article>
    </main>
  );
}
