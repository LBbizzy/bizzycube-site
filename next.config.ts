import type { NextConfig } from "next";

/* One Vercel project serves three sites. bizzycube.com is this Next app;
 * zapphobby.com and the HomeScan domain are static sites in public/sites/,
 * picked by the visitor's host. Clean URLs: /privacy → privacy.html. */
const APP_SITES: { host: string; dir: string }[] = [
  { host: "(www\\.)?zapphobby\\.com", dir: "zapphobby" },
  { host: "(www\\.)?gethomescan\\.com", dir: "homescan" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const beforeFiles = APP_SITES.flatMap(({ host, dir }) => {
      const has = [{ type: "host" as const, value: host }];
      return [
        { source: "/", has, destination: `/sites/${dir}/index.html` },
        { source: "/:file((?!sites/)[^/]+\\.[a-zA-Z0-9]+)", has, destination: `/sites/${dir}/:file` },
        { source: "/:page((?!sites/)[^/.]+)", has, destination: `/sites/${dir}/:page.html` },
      ];
    });
    return { beforeFiles, afterFiles: [], fallback: [] };
  },
};
export default nextConfig;
