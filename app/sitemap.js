import { site } from "@/lib/content";

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${site.url}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
