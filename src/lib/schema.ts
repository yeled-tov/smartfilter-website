import { BUSINESS, SITE_URL } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    alternateName: BUSINESS.nameHe,
    description:
      "SmartFilter – שירותי סינון טלפון, סינון אינטרנט, התקנת הדרן, חסימת עסקן, כושר פליי וצריבת גרסאות למכשירי Qin באשדוד.",
    url: SITE_URL,
    telephone: BUSINESS.phoneIntl,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS.address.street}, ${BUSINESS.address.entrance}`,
      addressLocality: BUSINESS.address.city,
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    priceRange: "₪20 - ₪300",
    image: `${SITE_URL}/images/og-default.png`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/og-default.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phoneIntl,
      contactType: "customer service",
      availableLanguage: "Hebrew",
    },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  price: number;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
    },
    areaServed: {
      "@type": "City",
      name: "אשדוד",
    },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "ILS",
      url: `${SITE_URL}/services/${service.slug}`,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/og-default.png`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    url: `${SITE_URL}/blog/${article.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS.name,
    url: SITE_URL,
    inLanguage: "he",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
