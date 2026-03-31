import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = createMetadata({
  title: "כושר פליי התקנה - Kosher Play | חנות אפליקציות מסוננת",
  description:
    "התקנת כושר פליי (Kosher Play) ב-₪70. חנות אפליקציות מסוננת וכשרה – תחליף בטוח ל-Google Play עם אפליקציות מאושרות בלבד. התקנה מקצועית ב-SmartFilter אשדוד.",
  path: "/services/kosher-play",
  keywords: [
    "כושר פליי",
    "כושר פליי התקנה",
    "Kosher Play",
    "חנות אפליקציות כשרה",
    "חנות אפליקציות מסוננת",
    "כושר פליי למכשיר",
  ],
});

const faqItems = [
  {
    question: "מה זה כושר פליי (Kosher Play)?",
    answer:
      "כושר פליי (Kosher Play) היא חנות אפליקציות מסוננת וכשרה שמהווה תחליף בטוח לחנות Google Play הרגילה. כושר פליי מכילה רק אפליקציות שעברו בדיקה ואישור, ומונעת הורדה של אפליקציות לא מתאימות.",
  },
  {
    question: "כמה עולה התקנת כושר פליי?",
    answer:
      "התקנת כושר פליי ב-SmartFilter עולה ₪70 בלבד. המחיר כולל התקנה מקצועית, הגדרת החנות על המכשיר, ותמיכה טכנית.",
  },
  {
    question: "האם כושר פליי מתאים לאייפון?",
    answer:
      "כושר פליי מיועד בעיקר למכשירי אנדרואיד, כיוון שהיא מחליפה את חנות Google Play. למכשירי אייפון יש פתרונות סינון אחרים – צרו קשר לייעוץ מותאם.",
  },
  {
    question: "אילו אפליקציות זמינות בכושר פליי?",
    answer:
      "כושר פליי כוללת מגוון רחב של אפליקציות מאושרות – אפליקציות שירות, ניווט, בנקאות, קניות ועוד. כל אפליקציה עוברת בדיקה לפני שהיא מתווספת לחנות.",
  },
];

export default function KosherPlayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "כושר פליי – Kosher Play",
              description: "חנות אפליקציות מסוננת וכשרה – תחליף בטוח ל-Google Play",
              price: 70,
              slug: "kosher-play",
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
              { name: "כושר פליי", href: "/services/kosher-play" },
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
            <span className="text-gray-900">כושר פליי</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-bold text-brand-blue">
              ₪70
            </span>
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              התקנת כושר פליי – Kosher Play
              <span className="block text-2xl text-gray-600 font-bold mt-2 sm:text-3xl">
                חנות אפליקציות מסוננת וכשרה
              </span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 leading-relaxed">
              כושר פליי (Kosher Play) היא חנות אפליקציות מסוננת שמחליפה את
              חנות Google Play הרגילה. במקום גישה חופשית למיליוני אפליקציות,
              כושר פליי מציעה רק אפליקציות שעברו בדיקה ואישור. התקנת כושר פליי
              מבטיחה שרק אפליקציות מתאימות ובטוחות יהיו זמינות במכשיר.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              יתרונות כושר פליי
            </h2>
            <ul className="mb-8 space-y-3">
              {[
                "חנות אפליקציות מסוננת עם אפליקציות מאושרות בלבד",
                "תחליף בטוח ל-Google Play – ללא גישה לאפליקציות בעייתיות",
                "עדכוני אפליקציות אוטומטיים דרך החנות הכשרה",
                "ממשק פשוט ונוח לשימוש",
                "אפליקציות שירות, בנקאות, ניווט ועוד",
                "התקנה מהירה ומקצועית",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 text-brand-green">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-8 text-gray-600 leading-relaxed">
              כושר פליי משלבת מצוין עם{" "}
              <Link href="/services/hadran" className="font-medium text-brand-blue hover:underline">
                הדרן
              </Link>{" "}
              או{" "}
              <Link href="/services/askan" className="font-medium text-brand-blue hover:underline">
                עסקן
              </Link>{" "}
              להגנה מקסימלית. ניתן גם להוסיף{" "}
              <Link href="/services/basic" className="font-medium text-brand-blue hover:underline">
                סינון בסיסי
              </Link>{" "}
              להגנה נוספת.
            </p>

            <h2 className="mb-6 text-2xl font-bold text-gray-900">שאלות נפוצות על כושר פליי</h2>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection title="רוצים להתקין כושר פליי?" subtitle="צרו קשר להתקנת Kosher Play מקצועית ומהירה באשדוד" />
    </>
  );
}
