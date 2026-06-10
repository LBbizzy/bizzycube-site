import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DJChatBubble from "@/components/DJChatBubble";

export const metadata: Metadata = {
  title: "BizzyCube — AI marketing automation for small businesses",
  description: "Hire one AI team that runs your marketing, content, leads, and follow-up — for less than the cost of one part-time employee. Built on the War Room platform.",
  metadataBase: new URL("https://bizzycube.com"),
  openGraph: {
    title: "BizzyCube — AI marketing for small businesses",
    description: "One AI team. Every channel. Less than one part-time hire.",
    url: "https://bizzycube.com",
    siteName: "BizzyCube",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <DJChatBubble />
      </body>
    </html>
  );
}
