import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = createMetadata({
  title: "סינון בסיסי לטלפון - ₪20 בלבד | חסימת תכנים בסיסית",
  description:
    "סינון בסיסי לטלפון במחיר של ₪20 בלבד. חסימת תכנים לא רצויים, סינון אינטרנט בסיסי לאייפון ואנדרואיד. התקנה מהירה ומקצועית ב-SmartFilter אשדוד.",
  path: "/services/basic",
  keywords: ["סינון בסיסי", "סינון בסיסי לטלפון", "חסימת תכנים בסיסית", "סינון זול"],
});

const faqItems = [
  {
    question: "מה כולל סינון בסיסי לטלפון?",
    answer:
      "סינון בסיסי לטלפון כולל חסימת אתרי אינטרנט לא רצויים, סינון תוצאות חיפוש, וחסימת תכנים בעייתיים ברמה בסיסית. זהו הפתרון הזול והמהיר ביותר לסינון טלפון.",
  },
  {
    question: "האם סינון בסיסי מתאים לאייפון?",
    answer:
      "כן, סינון בסיסי מתאים לכל סוגי הטלפונים כולל אייפון, אנדרואיד ומכשירים כשרים. ההתקנה מותאמת לסוג המכשיר שלכם.",
  },
  {
    question: "כמה זמן לוקחת ההתקנה?",
    answer:
      "התקנת סינון בסיסי לטלפון אורכת מספר דקות בלבד. הטכנאי שלנו מבצע את ההתקנה במקום ובודק שהכל עובד תקין.",
  },
];

export default function BasicFilteringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "סינון בסיסי לטלפון",
              description: "חסימת תכנים לא רצויים ברמה בסיסית לכל סוגי הטלפונים",
              price: 20,
              slug: "basic",
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
              { name: "סינון בסיסי", href: "/services/basic" },
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
            <span className="text-gray-900">סינון בסיסי</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-bold text-brand-blue">
              ₪20 בלבד
            </span>
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              סינון בסיסי לטלפון
            </h1>
            <p className="mb-8 text-lg text-gray-600 leading-relaxed">
              סינון בסיסי לטלפון הוא הפתרון הפשוט והזול ביותר לחסימת תכנים לא
              רצויים. בהתקנה מהירה של דקות ספורות, הטלפון שלכם יהיה מוגן מפני
              אתרי אינטרנט בעייתיים ותכנים פוגעניים. מתאים לכל סוגי הטלפונים –
              אייפון, אנדרואיד ומכשירים כשרים.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              מה כולל סינון בסיסי?
            </h2>
            <ul className="mb-8 space-y-3">
              {[
                "חסימת אתרי אינטרנט לא רצויים",
                "סינון תוצאות חיפוש בגוגל ובמנועי חיפוש אחרים",
                "חסימת תכנים פוגעניים ומסוכנים",
                "התקנה מהירה תוך דקות",
                "תמיכה טכנית לאחר ההתקנה",
                "מתאים לאייפון, אנדרואיד ומכשירים כשרים",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 text-brand-green">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              למי מתאים סינון בסיסי לטלפון?
            </h2>
            <p className="mb-8 text-gray-600 leading-relaxed">
              סינון בסיסי מתאים למי שמחפש פתרון פשוט וזול לחסימת תכנים לא
              רצויים. אם אתם רוצים הגנה ברמה בסיסית על הטלפון שלכם או של
              ילדיכם, סינון בסיסי הוא הבחירה הנכונה. למי שזקוק לסינון מתקדם
              יותר, מומלץ לבדוק את{" "}
              <Link href="/services/hadran" className="font-medium text-brand-blue hover:underline">
                שירות הדרן
              </Link>{" "}
              או{" "}
              <Link href="/services/askan" className="font-medium text-brand-blue hover:underline">
                שירות עסקן
              </Link>
              .
            </p>

            <h2 className="mb-6 text-2xl font-bold text-gray-900">שאלות נפוצות</h2>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
