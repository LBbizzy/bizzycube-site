import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DJChatBubble from "@/components/DJChatBubble";

/* The title and description say what a visitor gets, in the words they'd use
 * about their own week. They no longer say "AI workforce" or count how many
 * specialists we replace — that told a competitor the shape of the product and
 * told a customer nothing about their own problem. */
export const metadata: Metadata = {
  title: "BizzyCube — the work you lose, you never hear about",
  description:
    "Somebody answers the phone, chases the quote and sends the bill — for businesses where the owner is also the front desk.",
  metadataBase: new URL("https://bizzycube.com"),
  openGraph: {
    title: "BizzyCube",
    description:
      "The work you lose, you never hear about. We pick it up — and chase it.",
    url: "https://bizzycube.com",
    siteName: "BizzyCube",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&display=swap"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <DJChatBubble />
      </body>
    </html>
  );
}
