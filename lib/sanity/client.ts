import { createClient, type SanityClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '@/sanity/env';

let _client: SanityClient | null = null;

export function getClient(): SanityClient {
  if (!_client) {
    if (!projectId) {
      throw new Error(
        'Sanity is not configured: set NEXT_PUBLIC_SANITY_PROJECT_ID in the environment.',
      );
    }
    _client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    });
  }
  return _client;
}
