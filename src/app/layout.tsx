import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DJChatBubble from "@/components/DJChatBubble";

export const metadata: Metadata = {
  title: "BizzyCube — Hire one AI workforce. Replace ten specialists.",
  description: "BizzyCube is the AI workforce for small business. One team that runs marketing, sales, web, accounting, social, and everything else. Less than one part-time hire.",
  metadataBase: new URL("https://bizzycube.com"),
  openGraph: {
    title: "BizzyCube — The AI workforce for small business",
    description: "Hire one AI workforce. Replace ten specialists. Less than one part-time hire.",
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
