import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EstateKing | Professional Real Estate Websites for Nigerian Agents",
  description: "Get a complete real estate website in 7 days. One-time payment from ₦350,000. WhatsApp integration, unlimited listings, mobile-first. Built for Nigerian agents.",
  keywords: ["real estate website Nigeria", "property website Lagos", "agent website Abuja", "buy real estate website Nigeria", "professional property website"],
  openGraph: {
    title: "EstateKing — Real Estate Websites in 7 Days",
    description: "One-time payment. No monthly fees. Starts at ₦350,000.",
    url: "https://estateking.com.ng",
    siteName: "EstateKing",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EstateKing — Real Estate Websites in 7 Days",
    description: "Built for Nigerian real estate agents. One-time payment from ₦350,000.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-406161718"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tracking" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-406161718');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
