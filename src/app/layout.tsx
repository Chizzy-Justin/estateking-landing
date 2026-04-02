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

            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined' && url) {
                  // Direct URL navigation is handled by the component for React/Next compatibility
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-406161718/g7WDCJflxpEcELaS1sEB',
                  'value': 1.0,
                  'currency': 'USD',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        <Script id="tiktok-ads-tracking" strategy="afterInteractive">
          {`
        <!-- TikTok Pixel Code Start -->

!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};


  ttq.load('D775F0BC77UFKKV34CC0');
  ttq.page();
}(window, document, 'ttq');

<!-- TikTok Pixel Code End -->
`}
        </Script>

        {children}
      </body>
    </html>
  );
}
