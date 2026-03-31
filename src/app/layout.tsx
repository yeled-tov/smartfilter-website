import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL, BUSINESS } from "@/lib/constants";
import { localBusinessSchema, organizationSchema, webSiteSchema } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heebo = localFont({
  src: [
    { path: "../fonts/heebo-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/heebo-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/heebo-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/heebo-800.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-heebo",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | SmartFilter - סינון טלפון ואינטרנט",
    default:
      "SmartFilter - סינון טלפון | סינון תכנים | סינון אינטרנט | חסימת הדרן ועסקן | אשדוד",
  },
  description:
    "SmartFilter – שירותי סינון טלפון וסינון אינטרנט מקצועיים באשדוד. התקנת הדרן, חסימת עסקן, כושר פליי, סינון לאייפון ואנדרואיד, צריבת גרסאות Qin F21 Pro ו-Qin F25. מחירים החל מ-₪20.",
  keywords: [
    "סינון טלפון",
    "סינון תכנים",
    "סינון אינטרנט",
    "סינון לאייפון",
    "סינון אנדרואיד",
    "חסימת אינטרנט לאייפון",
    "הדרן",
    "צריבת הדרן",
    "חסימת הדרן",
    "התקנת הדרן",
    "עסקן",
    "חסימת עסקן",
    "התקנת עסקן",
    "כושר פליי",
    "כושר פליי התקנה",
    "סינון בסיסי לטלפון",
    "צריבת גרסאות",
    "קין אף 21 פרו",
    "Qin F21 Pro",
    "קין אף 25",
    "Qin F25",
    "סינון טלפון אשדוד",
    "SmartFilter",
  ],
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: BUSINESS.name,
    url: SITE_URL,
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "SmartFilter - סינון טלפון ואינטרנט מקצועי באשדוד",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema()),
          }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* WhatsApp floating button */}
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="שלח הודעה בוואטסאפ ל-SmartFilter"
          className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
