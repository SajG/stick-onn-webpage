import { groq } from 'next-sanity';
import type { PortableTextBlock } from '@portabletext/react';

export const allPostsQuery = groq`
*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  excerpt,
  publishedAt,
  "category": category[]->title
}`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  excerpt,
  publishedAt,
  body,
  metaTitle,
  metaDescription,
  ogImage,
  "category": category[]->title,
  author->{name, image, bio}
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postSitemapEntriesQuery = groq`
*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  "slug": slug.current,
  _updatedAt
}`;

export interface PostSitemapEntry {
  slug: string;
  _updatedAt: string;
}

export interface SanityImage {
  asset?: { _ref?: string };
  alt?: string;
  hotspot?: { x: number; y: number };
}

export interface PostListItem {
  _id: string;
  title?: string;
  slug?: string;
  mainImage?: SanityImage;
  excerpt?: string;
  publishedAt?: string;
  category?: string[];
}

export interface Author {
  name?: string;
  image?: SanityImage;
  bio?: PortableTextBlock[];
}

export interface Post extends PostListItem {
  body?: PortableTextBlock[];
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  author?: Author;
}
