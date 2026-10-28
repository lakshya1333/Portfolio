import type { Metadata, Viewport } from "next";
import { Anybody, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Anybody({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thelakshya.tech"),
  title: {
    default: "Lakshya Jain, backend & systems engineer",
    template: "%s | Lakshya Jain",
  },
  description:
    "Backend and systems engineer at MIT Manipal. Builds platforms that hold up under real load: 10,000+ attendees scanned offline, 200+ events judged live, Cloud & AI intern at Microsoft.",
  openGraph: {
    title: "Lakshya Jain, backend & systems engineer",
    description:
      "Platforms that hold up when a whole campus shows up at once.",
    url: "https://thelakshya.tech",
    siteName: "Lakshya Jain",
    images: ["/lakshya.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1E2BFF",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <a href="#main" className="skip">Skip to content</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
