import type { Metadata } from "next";
import { SITE_URL, BUSINESS } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const defaultKeywords = [
    "סינון טלפון",
    "סינון תכנים",
    "סינון אינטרנט",
    "סינון לאייפון",
    "סינון אנדרואיד",
    "הדרן",
    "עסקן",
    "כושר פליי",
    "SmartFilter",
    "אשדוד",
  ];

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "he_IL",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/images/og-default.png`,
          width: 1200,
          height: 630,
          alt: `${BUSINESS.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/images/og-default.png`],
    },
  };
}
