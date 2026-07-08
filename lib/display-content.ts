export function excerpt(text: string, maxLength = 180): string {
  const trimmed = text.trim();
  if (trimmed.length <= maxLength) return trimmed;
  const cut = trimmed.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

export function takeParagraphs(paragraphs: string[], count = 1): string[] {
  return paragraphs.slice(0, count);
}

export function takeItems<T>(items: T[], count: number): T[] {
  return items.slice(0, count);
}

/** Strip verbose packaging lines from feature lists for UI display */
export function displayFeatures(features: string[], max = 4): string[] {
  return features
    .filter((f) => !f.toLowerCase().startsWith("available packaging"))
    .slice(0, max);
}
