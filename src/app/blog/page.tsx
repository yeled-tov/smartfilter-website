import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "בלוג סינון טלפון ואינטרנט | מדריכים וטיפים",
  description:
    "בלוג SmartFilter – מדריכים, טיפים ומידע על סינון טלפון, סינון אינטרנט, התקנת הדרן, חסימת עסקן, כושר פליי וצריבת גרסאות. כל מה שצריך לדעת על סינון תכנים.",
  path: "/blog",
  keywords: ["בלוג סינון", "מדריך סינון טלפון", "טיפים לסינון אינטרנט"],
});

const blogPosts = [
  {
    slug: "internet-filtering-guide",
    title: "המדריך המלא לסינון אינטרנט בטלפון – 2025",
    excerpt:
      "כל מה שצריך לדעת על סינון אינטרנט בטלפון: סינון לאייפון, סינון אנדרואיד, השוואת מערכות סינון, ומה הפתרון הכי מתאים לכם.",
    date: "2025-01-15",
  },
  {
    slug: "hadran-kosher-smartphones",
    title: "הדרן לסמארטפונים כשרים – כל מה שצריך לדעת",
    excerpt:
      "מדריך מקיף על מערכת הדרן: מה זה הדרן, איך עובדת צריבת הדרן, ההבדל בין הדרן לעסקן, ולמי זה מתאים.",
    date: "2025-02-01",
  },
  {
    slug: "protect-children-online",
    title: "איך להגן על הילדים באינטרנט – מדריך הורים לסינון תכנים",
    excerpt:
      "מדריך מקיף להורים: איך לבחור את הסינון הנכון לטלפון של ילדיכם, סוגי הסינון השונים, ולמה סינון תכנים חשוב.",
    date: "2025-03-10",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "ראשי", href: "/" },
              { name: "בלוג", href: "/blog" },
            ])
          ),
        }}
      />

      <section className="bg-gradient-to-b from-blue-50 to-white section-padding">
        <div className="container-page">
          <h1 className="mb-4 text-center text-4xl font-extrabold text-gray-900 sm:text-5xl">
            בלוג סינון טלפון ואינטרנט
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            מדריכים, טיפים ומידע מקצועי על סינון תכנים, התקנת הדרן, חסימת עסקן,
            כושר פליי וצריבת גרסאות למכשירי Qin
          </p>

          <div className="mx-auto max-w-3xl space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card block group"
              >
                <time className="text-xs font-medium text-gray-500">{post.date}</time>
                <h2 className="mt-1 text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-block text-sm font-bold text-brand-blue">
                  קרא עוד &larr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
