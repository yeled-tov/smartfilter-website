import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = createMetadata({
  title: "התקנת עסקן - חסימת עסקן | סינון מקצועי למכשירים",
  description:
    "התקנת עסקן מקצועית ב-₪300. חסימת עסקן מקיפה הכוללת סינון אינטרנט, חסימת אפליקציות וניהול תכנים. פתרון סינון מתקדם לכל סוגי המכשירים. SmartFilter אשדוד.",
  path: "/services/askan",
  keywords: [
    "עסקן",
    "התקנת עסקן",
    "חסימת עסקן",
    "עסקן סינון",
    "עסקן התקנה",
    "עסקן למכשיר",
    "עסקן אשדוד",
  ],
});

const faqItems = [
  {
    question: "מה זה עסקן?",
    answer:
      "עסקן היא מערכת סינון וחסימה מקיפה למכשירים ניידים. חסימת עסקן כוללת סינון אינטרנט, חסימת אפליקציות, ניהול תכנים והגנה מלאה על המכשיר. התקנת עסקן מבטיחה שהמכשיר שלכם מוגן ברמה הגבוהה ביותר.",
  },
  {
    question: "מה ההבדל בין עסקן להדרן?",
    answer:
      "עסקן והדרן הם שתי מערכות סינון מתקדמות. עסקן מציע פתרון חסימה מקיף יותר הכולל ניהול אפליקציות מתקדם, בעוד הדרן מתמחה בסינון אינטרנט. שתי המערכות מספקות הגנה מצוינת – הבחירה תלויה בצרכים שלכם.",
  },
  {
    question: "לאילו מכשירים מתאים עסקן?",
    answer:
      "עסקן מתאים לכל סוגי המכשירים – אייפון, אנדרואיד וסמארטפונים כשרים. המערכת מותאמת לסוג המכשיר שלכם ומספקת הגנה מלאה.",
  },
  {
    question: "כמה זמן לוקחת התקנת עסקן?",
    answer:
      "התקנת עסקן ב-SmartFilter אורכת כ-15-30 דקות, תלוי בסוג המכשיר. ההתקנה כוללת הגדרת פרופיל סינון מותאם אישית ובדיקת תקינות מלאה.",
  },
];

export default function AskanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "התקנת עסקן – חסימת עסקן",
              description: "פתרון סינון וחסימה מקיף לכל סוגי המכשירים",
              price: 300,
              slug: "askan",
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
              { name: "עסקן", href: "/services/askan" },
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
            <span className="text-gray-900">עסקן</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-bold text-brand-blue">
              ₪300
            </span>
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              התקנת עסקן – חסימת עסקן
              <span className="block text-2xl text-gray-600 font-bold mt-2 sm:text-3xl">
                סינון מקצועי לכל סוגי המכשירים
              </span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 leading-relaxed">
              עסקן היא מערכת סינון וחסימה מקיפה שמספקת הגנה מלאה על המכשיר
              הנייד. חסימת עסקן כוללת סינון אינטרנט מתקדם, חסימת אפליקציות
              בעייתיות, וניהול מלא של התכנים הנגישים במכשיר. התקנת עסקן
              מתאימה לאייפון, אנדרואיד ומכשירים כשרים.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              מה כוללת חסימת עסקן?
            </h2>
            <ul className="mb-8 space-y-3">
              {[
                "סינון אינטרנט מתקדם – חסימה מלאה של תכנים לא רצויים",
                "חסימת אפליקציות – ניהול מלא של האפליקציות המותרות",
                "סינון תכנים בזמן אמת עם עדכונים שוטפים",
                "הגנה מפני עקיפת הסינון",
                "פרופיל סינון מותאם אישית לצרכים שלכם",
                "תמיכה טכנית מלאה ושוטפת",
                "מתאים לאייפון, אנדרואיד ומכשירים כשרים",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 text-brand-green">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              למי מתאימה התקנת עסקן?
            </h2>
            <p className="mb-8 text-gray-600 leading-relaxed">
              עסקן מתאים למי שמחפש פתרון סינון וחסימה ברמה הגבוהה ביותר. אם
              אתם צריכים שליטה מלאה על התכנים והאפליקציות במכשיר – עסקן הוא
              הבחירה הנכונה. למי שמעדיף פתרון בסיסי יותר, בדקו את{" "}
              <Link href="/services/basic" className="font-medium text-brand-blue hover:underline">
                שירות הסינון הבסיסי
              </Link>
              . ניתן גם לשלב עם{" "}
              <Link href="/services/kosher-play" className="font-medium text-brand-blue hover:underline">
                כושר פליי
              </Link>{" "}
              לחנות אפליקציות מסוננת.
            </p>

            <h2 className="mb-6 text-2xl font-bold text-gray-900">שאלות נפוצות על עסקן</h2>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection title="מעוניינים בהתקנת עסקן?" subtitle="צרו קשר להתקנת עסקן מקצועית – חסימה מלאה ושירות מהיר באשדוד" />
    </>
  );
}
