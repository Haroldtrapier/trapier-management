import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/federal', '/about', '/contact', '/ai-maturity-assessment', '/ai-maturity-model'].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.7,
  }));
}
