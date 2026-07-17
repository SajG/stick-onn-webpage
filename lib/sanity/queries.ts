import { groq } from 'next-sanity';
import type { PortableTextBlock } from '@portabletext/react';

const postFields = groq`
  _id,
  title,
  "slug": slug.current,
  coverImage,
  excerpt,
  date,
  _createdAt,
  "categories": categories[]->name
`;

export const allPostsQuery = groq`
*[_type == "post" && defined(slug.current)] | order(coalesce(date, _createdAt) desc) {
  ${postFields}
}`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields},
  content,
  metaTitle,
  metaDescription,
  author->{name, picture}
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postSitemapEntriesQuery = groq`
*[_type == "post" && defined(slug.current)] | order(coalesce(date, _createdAt) desc) {
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
  caption?: string;
  hotspot?: { x: number; y: number };
}

export interface PostListItem {
  _id: string;
  title?: string;
  slug?: string;
  coverImage?: SanityImage;
  excerpt?: string;
  date?: string;
  _createdAt?: string;
  categories?: string[];
}

export interface Author {
  name?: string;
  picture?: SanityImage;
}

export interface Post extends PostListItem {
  content?: PortableTextBlock[];
  metaTitle?: string;
  metaDescription?: string;
  author?: Author;
}
