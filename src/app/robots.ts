import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/* Everyone may read the public site — search engines and the AI answer
 * engines by name, so none of them has to guess. */
export default function robots(): MetadataRoute.Robots {
  const ai = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot",
              "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot"];
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...ai.map((a) => ({ userAgent: a, allow: "/" }))],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
