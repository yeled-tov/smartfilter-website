import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = createMetadata({
  title: "צריבת גרסה Qin F25 - קין אף 25 | צריבת גרסאות",
  description:
    "צריבת גרסה מקצועית למכשיר Qin F25 (קין אף 25) ב-₪70. צריבת גרסאות מותאמת, סינון תכנים מובנה והגדרות אבטחה למכשיר הכשר. SmartFilter אשדוד.",
  path: "/services/qin-f25",
  keywords: [
    "Qin F25",
    "קין אף 25",
    "צריבת גרסה",
    "צריבת גרסאות",
    "צריבת גרסה Qin F25",
    "מכשיר כשר Qin F25",
  ],
});

const faqItems = [
  {
    question: "מה זה צריבת גרסה ל-Qin F25?",
    answer:
      "צריבת גרסה למכשיר קין אף 25 (Qin F25) היא תהליך שבו מותקנת גרסת תוכנה מותאמת על המכשיר. הגרסה כוללת סינון תכנים, הגדרות אבטחה, והתאמות שהופכות את המכשיר לכשר ומוגן.",
  },
  {
    question: "מה ההבדל בין Qin F25 ל-Qin F21 Pro?",
    answer:
      "קין אף 25 (Qin F25) הוא דגם חדש יותר עם מסך גדול יותר ותכונות משופרות בהשוואה ל-Qin F21 Pro. שני המכשירים דורשים צריבת גרסה מותאמת, וב-SmartFilter אנחנו מטפלים בשני הדגמים.",
  },
  {
    question: "כמה עולה צריבת גרסה ל-Qin F25?",
    answer:
      "צריבת גרסה למכשיר Qin F25 עולה ₪70 ב-SmartFilter. המחיר כולל צריבה מקצועית, סינון מובנה, ובדיקת תקינות.",
  },
  {
    question: "האם אפשר להוסיף כושר פליי ל-Qin F25?",
    answer:
      "כן, ניתן להוסיף כושר פליי (Kosher Play) למכשיר Qin F25 לצד צריבת הגרסה. זה מספק חנות אפליקציות מסוננת וכשרה בנוסף לסינון התכנים המובנה.",
  },
];

export default function QinF25Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "צריבת גרסה Qin F25 – קין אף 25",
              description: "צריבת גרסאות מותאמת למכשיר Qin F25 עם סינון תכנים מובנה",
              price: 70,
              slug: "qin-f25",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "ראשי", href: "/" },
              { name: "שירותים", href: "/services" },
              { name: "Qin F25", href: "/services/qin-f25" },
            ])
          ),
        }}
      />

      <section className="bg-gradient-to-b from-blue-50 to-white section-padding">
        <div className="container-page">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-blue">ראשי</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-brand-blue">שירותים</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Qin F25</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-bold text-brand-blue">
              ₪70
            </span>
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              צריבת גרסה Qin F25
              <span className="block text-2xl text-gray-600 font-bold mt-2 sm:text-3xl">
                קין אף 25 – צריבת גרסאות מקצועית
              </span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 leading-relaxed">
              מכשיר קין אף 25 (Qin F25) הוא אחד ממכשירי ה-Qin הפופולריים
              ביותר. צריבת גרסה ל-Qin F25 כוללת התקנת גרסת תוכנה מותאמת עם
              סינון תכנים מובנה, הגדרות אבטחה מתקדמות, והתאמה אישית. ב-SmartFilter
              אנחנו מומחים בצריבת גרסאות למכשירי Qin.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              מה כוללת צריבת גרסה ל-Qin F25?
            </h2>
            <ul className="mb-8 space-y-3">
              {[
                "צריבת גרסת תוכנה עדכנית ומותאמת למכשיר קין אף 25",
                "סינון תכנים מובנה – חסימת אתרים ותכנים לא רצויים",
                "הגדרות אבטחה מתקדמות",
                "ממשק משתמש מותאם ונוח",
                "אופטימיזציה לביצועים ולחיי סוללה",
                "בדיקת תקינות מלאה לאחר הצריבה",
                "תמיכה טכנית שוטפת",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 text-brand-green">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-8 text-gray-600 leading-relaxed">
              יש לכם מכשיר Qin F21 Pro? בדקו את{" "}
              <Link href="/services/qin-f21" className="font-medium text-brand-blue hover:underline">
                צריבת גרסה ל-Qin F21 Pro
              </Link>
              . ניתן גם להוסיף{" "}
              <Link href="/services/kosher-play" className="font-medium text-brand-blue hover:underline">
                כושר פליי
              </Link>{" "}
              לחנות אפליקציות כשרה.
            </p>

            <h2 className="mb-6 text-2xl font-bold text-gray-900">שאלות נפוצות על צריבת Qin F25</h2>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection title="צריכים צריבת גרסה ל-Qin F25?" subtitle="צרו קשר לצריבה מקצועית ומהירה של מכשיר קין אף 25" />
    </>
  );
}
