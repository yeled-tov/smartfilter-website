import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = createMetadata({
  title: "התקנת הדרן - צריבת הדרן | חסימת הדרן מקצועית",
  description:
    "התקנת הדרן מקצועית ב-₪300. צריבת הדרן, חסימת הדרן וסינון מתקדם לסמארטפונים כשרים. מערכת סינון אינטרנט מובילה עם הגנה מלאה. SmartFilter אשדוד.",
  path: "/services/hadran",
  keywords: [
    "הדרן",
    "התקנת הדרן",
    "צריבת הדרן",
    "חסימת הדרן",
    "הדרן סינון",
    "הדרן לסמארטפון כשר",
    "הדרן אשדוד",
  ],
});

const faqItems = [
  {
    question: "מה זה הדרן?",
    answer:
      "הדרן היא מערכת סינון אינטרנט מתקדמת לסמארטפונים. חסימת הדרן מספקת הגנה מקיפה מפני תכנים לא רצויים, כולל סינון אתרים, חסימת אפליקציות וניהול תכנים. צריבת הדרן מתבצעת על ידי טכנאי מוסמך.",
  },
  {
    question: "כמה עולה התקנת הדרן?",
    answer:
      "התקנת הדרן ב-SmartFilter עולה ₪300. המחיר כולל צריבת הדרן מקצועית, הגדרת פרופיל סינון מותאם אישית, ותמיכה טכנית לאחר ההתקנה.",
  },
  {
    question: "לאילו מכשירים מתאים הדרן?",
    answer:
      "הדרן מתאים לסמארטפונים כשרים ולמכשירי אנדרואיד. ניתן להתקין הדרן על מגוון רחב של מכשירים. צרו קשר לבדוק התאמה למכשיר שלכם.",
  },
  {
    question: "האם אפשר להסיר את הדרן?",
    answer:
      "הדרן מותקן ברמה עמוקה על המכשיר וקשה להסיר אותו ללא סיוע טכני מקצועי. זהו יתרון משמעותי שמבטיח שהסינון יישאר פעיל ויספק הגנה רציפה.",
  },
];

export default function HadranPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "התקנת הדרן – צריבת הדרן",
              description: "מערכת סינון אינטרנט מתקדמת לסמארטפונים כשרים. חסימת הדרן מקצועית.",
              price: 300,
              slug: "hadran",
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
              { name: "הדרן", href: "/services/hadran" },
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
            <span className="text-gray-900">הדרן</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-bold text-brand-blue">
              ₪300
            </span>
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              התקנת הדרן – צריבת הדרן
              <span className="block text-2xl text-gray-600 font-bold mt-2 sm:text-3xl">
                סינון אינטרנט מתקדם לסמארטפונים
              </span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 leading-relaxed">
              הדרן היא אחת ממערכות הסינון המובילות בישראל. צריבת הדרן מספקת
              הגנה מקיפה מפני תכנים לא רצויים באינטרנט, כולל סינון אתרים,
              חסימת אפליקציות בעייתיות, וניהול תכנים ברמה המתקדמת ביותר.
              ב-SmartFilter אנחנו מבצעים התקנת הדרן מקצועית ומהירה.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              מה כוללת חסימת הדרן?
            </h2>
            <ul className="mb-8 space-y-3">
              {[
                "סינון אתרי אינטרנט מתקדם – חסימה מלאה של תכנים פוגעניים",
                "חסימת אפליקציות – מניעת התקנה והפעלה של אפליקציות לא מאושרות",
                "סינון תוצאות חיפוש בכל מנועי החיפוש",
                "ניהול פרופיל סינון מותאם אישית",
                "הגנה מפני עקיפת הסינון",
                "עדכונים שוטפים לרשימות החסימה",
                "תמיכה טכנית מלאה לאחר ההתקנה",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 text-brand-green">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              תהליך צריבת הדרן
            </h2>
            <div className="mb-8 space-y-4">
              {[
                { step: "1", title: "בדיקת המכשיר", desc: "בדיקת התאמת המכשיר להתקנת הדרן" },
                { step: "2", title: "צריבת הדרן", desc: "התקנת מערכת הסינון על המכשיר" },
                { step: "3", title: "הגדרת פרופיל", desc: "הגדרת רמת הסינון והתאמה אישית" },
                { step: "4", title: "בדיקה ואימות", desc: "וידוא שהסינון פעיל ותקין" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-8 text-gray-600 leading-relaxed">
              מתלבטים בין הדרן לעסקן?{" "}
              <Link href="/services/askan" className="font-medium text-brand-blue hover:underline">
                השוו בין השירותים
              </Link>
              . לפתרון בסיסי יותר, בדקו את{" "}
              <Link href="/services/basic" className="font-medium text-brand-blue hover:underline">
                שירות הסינון הבסיסי
              </Link>
              .
            </p>

            <h2 className="mb-6 text-2xl font-bold text-gray-900">שאלות נפוצות על הדרן</h2>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection title="מעוניינים בהתקנת הדרן?" subtitle="צרו קשר לצריבת הדרן מקצועית – שירות מהיר ואמין באשדוד" />
    </>
  );
}
