import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = createMetadata({
  title: "צריבת גרסה Qin F21 Pro - קין אף 21 פרו | צריבת גרסאות",
  description:
    "צריבת גרסה מקצועית למכשיר Qin F21 Pro (קין אף 21 פרו) ב-₪70. צריבת גרסאות מותאמת, התקנת סינון תכנים והגדרות אבטחה. SmartFilter אשדוד.",
  path: "/services/qin-f21",
  keywords: [
    "Qin F21 Pro",
    "קין אף 21 פרו",
    "צריבת גרסה",
    "צריבת גרסאות",
    "צריבת גרסה Qin",
    "מכשיר כשר Qin",
  ],
});

const faqItems = [
  {
    question: "מה זה צריבת גרסה ל-Qin F21 Pro?",
    answer:
      "צריבת גרסה למכשיר קין אף 21 פרו (Qin F21 Pro) היא תהליך שבו מותקנת גרסת תוכנה מותאמת על המכשיר. הגרסה כוללת סינון תכנים מובנה, הגדרות אבטחה, והתאמות שהופכות את המכשיר לכשר ובטוח לשימוש.",
  },
  {
    question: "כמה עולה צריבת גרסה ל-Qin F21 Pro?",
    answer:
      "צריבת גרסה למכשיר Qin F21 Pro עולה ₪70 ב-SmartFilter. המחיר כולל צריבה מקצועית, התקנת סינון, ובדיקת תקינות מלאה.",
  },
  {
    question: "כמה זמן לוקח תהליך הצריבה?",
    answer:
      "תהליך צריבת גרסה למכשיר Qin F21 Pro אורך כ-15-30 דקות. במהלך הזמן הזה הטכנאי צורב את הגרסה, מגדיר את הסינון, ובודק שהכל עובד תקין.",
  },
  {
    question: "האם הצריבה מבטלת את האחריות?",
    answer:
      "צריבת גרסה מותאמת למכשירי Qin F21 Pro היא פעולה מקובלת ונפוצה. אנו משתמשים בגרסאות מאושרות ובטוחות שלא פוגעות במכשיר.",
  },
];

export default function QinF21Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "צריבת גרסה Qin F21 Pro – קין אף 21 פרו",
              description: "צריבת גרסאות מותאמת למכשיר Qin F21 Pro עם סינון תכנים מובנה",
              price: 70,
              slug: "qin-f21",
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
              { name: "Qin F21 Pro", href: "/services/qin-f21" },
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
            <span className="text-gray-900">Qin F21 Pro</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-bold text-brand-blue">
              ₪70
            </span>
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              צריבת גרסה Qin F21 Pro
              <span className="block text-2xl text-gray-600 font-bold mt-2 sm:text-3xl">
                קין אף 21 פרו – צריבת גרסאות מקצועית
              </span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 leading-relaxed">
              מכשיר קין אף 21 פרו (Qin F21 Pro) הוא מכשיר כשר פופולרי שדורש
              צריבת גרסה מותאמת. ב-SmartFilter אנחנו מבצעים צריבת גרסאות
              מקצועית למכשירי Qin F21 Pro, כולל התקנת סינון תכנים מובנה,
              הגדרות אבטחה, והתאמה אישית של המכשיר.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              מה כוללת צריבת גרסה ל-Qin F21 Pro?
            </h2>
            <ul className="mb-8 space-y-3">
              {[
                "צריבת גרסת תוכנה מותאמת למכשיר קין אף 21 פרו",
                "סינון תכנים מובנה – חסימת אתרים ותכנים לא רצויים",
                "הגדרות אבטחה מתקדמות",
                "התאמה אישית של ממשק המשתמש",
                "אופטימיזציה לביצועי המכשיר",
                "בדיקת תקינות מלאה לאחר הצריבה",
                "תמיכה טכנית לאחר הצריבה",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 text-brand-green">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-8 text-gray-600 leading-relaxed">
              מחפשים צריבת גרסה למכשיר אחר? בדקו את{" "}
              <Link href="/services/qin-f25" className="font-medium text-brand-blue hover:underline">
                צריבת גרסה ל-Qin F25
              </Link>
              . ניתן גם להוסיף{" "}
              <Link href="/services/kosher-play" className="font-medium text-brand-blue hover:underline">
                כושר פליי
              </Link>{" "}
              לחנות אפליקציות מסוננת.
            </p>

            <h2 className="mb-6 text-2xl font-bold text-gray-900">שאלות נפוצות על צריבת Qin F21 Pro</h2>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection title="צריכים צריבת גרסה ל-Qin F21 Pro?" subtitle="צרו קשר לצריבה מקצועית ומהירה של מכשיר קין אף 21 פרו" />
    </>
  );
}
