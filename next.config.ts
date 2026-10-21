import type { NextConfig } from "next";

/* One Vercel project serves the parent company's sites. bizzycube.com is this Next app;
 * zapphobby.com and the HomeScan domain are static sites in public/sites/,
 * picked by the visitor's host. Clean URLs: /privacy → privacy.html. */
const APP_SITES: { host: string; dir: string }[] = [
  { host: "(www\\.)?zapphobby\\.com", dir: "zapphobby" },
  { host: "(www\\.)?gethomescan\\.com", dir: "homescan" },
  { host: "(www\\.)?bizzy180\\.com", dir: "bizzy180" },             // Bizzy180 — the brand site, a page per trade
  { host: "construction\\.bizzy180\\.com", dir: "construction" },   // Bizzy180 Construction (platform build 678)
  { host: "roofing\\.bizzy180\\.com", dir: "roofing" },             // Bizzy180 Roofing (platform build 679)
  { host: "hvac\\.bizzy180\\.com", dir: "hvac" },                   // Bizzy180 HVAC (platform build 680)
  { host: "realestate\\.bizzy180\\.com", dir: "realestate" },       // Bizzy180 Real Estate (platform build 681)
  { host: "plumbing\\.bizzy180\\.com", dir: "plumbing" },   // Bizzy180 (platform build 682)
  { host: "electrical\\.bizzy180\\.com", dir: "electrical" },   // Bizzy180 (platform build 682)
  { host: "medspa\\.bizzy180\\.com", dir: "medspa" },   // Bizzy180 (platform build 682)
  { host: "chiro\\.bizzy180\\.com", dir: "chiro" },   // Bizzy180 (platform build 682)
  { host: "homeinspection\\.bizzy180\\.com", dir: "homeinspection" },   // Bizzy180 (platform build 682)
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
        // Bizzy180 sites have pages one folder deep (/features/<tool>, /trades/<trade>)
        { source: "/:sub(features|trades)/:page([^/.]+)", has, destination: `/sites/${dir}/:sub/:page.html` },
        { source: "/:sub(features|trades)/:file([^/]+\\.html)", has, destination: `/sites/${dir}/:sub/:file` },
      ];
    });
    return { beforeFiles, afterFiles: [], fallback: [] };
  },
};
export default nextConfig;
