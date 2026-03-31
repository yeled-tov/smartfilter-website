import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = createMetadata({
  title: "המדריך המלא לסינון אינטרנט בטלפון – 2025",
  description:
    "מדריך מקיף לסינון אינטרנט בטלפון: סינון לאייפון, סינון אנדרואיד, חסימת אינטרנט, השוואת הדרן מול עסקן, כושר פליי, וצריבת גרסאות למכשירי Qin. כל מה שצריך לדעת.",
  path: "/blog/internet-filtering-guide",
  keywords: [
    "מדריך סינון אינטרנט",
    "סינון לאייפון מדריך",
    "חסימת אינטרנט לאייפון",
    "סינון אנדרואיד מדריך",
    "השוואת מערכות סינון",
  ],
});

const faqItems = [
  {
    question: "מהו סינון אינטרנט בטלפון?",
    answer:
      "סינון אינטרנט בטלפון הוא תהליך שבו מותקנת תוכנה או מערכת חסימה שמונעת גישה לאתרים ותכנים לא רצויים. הסינון יכול להיות ברמה בסיסית (חסימת אתרים ספציפיים) או מתקדמת (ניהול מלא של התכנים הנגישים במכשיר).",
  },
  {
    question: "מה הפתרון הטוב ביותר לסינון לאייפון?",
    answer:
      "לאייפון יש מספר פתרונות סינון: סינון בסיסי (₪20) לחסימת תכנים בסיסית, הדרן (₪300) לסינון מתקדם, או עסקן (₪300) לפתרון חסימה מקיף. הבחירה תלויה ברמת ההגנה הנדרשת. צרו קשר לייעוץ חינם.",
  },
  {
    question: "האם סינון אינטרנט מאט את הטלפון?",
    answer:
      "לא. מערכות סינון מודרניות כמו הדרן ועסקן פועלות ברקע ואינן משפיעות על ביצועי המכשיר. ההשפעה על מהירות הגלישה זניחה ובלתי מורגשת.",
  },
];

export default function InternetFilteringGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: "המדריך המלא לסינון אינטרנט בטלפון – 2025",
              description: "מדריך מקיף לסינון אינטרנט בטלפון: כל השיטות, ההשוואות והמחירים",
              slug: "internet-filtering-guide",
              datePublished: "2025-01-15",
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
              { name: "בלוג", href: "/blog" },
              { name: "מדריך סינון אינטרנט", href: "/blog/internet-filtering-guide" },
            ])
          ),
        }}
      />

      <article className="section-padding">
        <div className="container-page">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-blue">ראשי</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-brand-blue">בלוג</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">מדריך סינון אינטרנט</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <time className="text-sm font-medium text-gray-500">15 ינואר 2025</time>
            <h1 className="mt-2 mb-8 text-4xl font-extrabold text-gray-900 sm:text-5xl leading-tight">
              המדריך המלא לסינון אינטרנט בטלפון
            </h1>

            <div className="prose-custom space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                בעידן הדיגיטלי, <strong>סינון אינטרנט בטלפון</strong> הפך לצורך
                חיוני עבור משפחות רבות. בין אם מדובר בהגנה על ילדים, שמירה על
                ריכוז בעבודה, או צרכים דתיים – <strong>סינון תכנים</strong> הוא
                הדרך הטובה ביותר להבטיח שימוש בטוח בטלפון. במדריך הזה נסקור את
                כל האפשרויות הקיימות לסינון טלפון, מ<strong>סינון לאייפון</strong>{" "}
                ועד <strong>סינון אנדרואיד</strong>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                מה זה סינון אינטרנט?
              </h2>
              <p>
                סינון אינטרנט הוא תהליך שבו מערכת תוכנה חוסמת גישה לאתרים
                ותכנים לא רצויים באינטרנט. <strong>סינון תכנים לטלפון</strong>{" "}
                יכול לכלול חסימת אתרים מסוימים, סינון תוצאות חיפוש, חסימת
                אפליקציות, וניהול התכנים הנגישים במכשיר. ישנן מספר רמות של
                סינון – מ<strong>סינון בסיסי לטלפון</strong> ועד מערכות חסימה
                מתקדמות כמו <strong>הדרן</strong> ו<strong>עסקן</strong>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                סינון לאייפון – חסימת אינטרנט לאייפון
              </h2>
              <p>
                <strong>סינון לאייפון</strong> דורש גישה מקצועית, כיוון
                שמכשירי Apple מוגנים ברמה גבוהה. <strong>חסימת אינטרנט
                לאייפון</strong> אפשרית באמצעות מספר שיטות:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>
                  <strong>סינון בסיסי</strong> (₪20) – חסימת אתרים ותכנים ברמה
                  בסיסית באמצעות פרופיל הגדרות
                </li>
                <li>
                  <strong>התקנת הדרן</strong> (₪300) – מערכת סינון מתקדמת עם
                  חסימה מקיפה ועדכונים שוטפים
                </li>
                <li>
                  <strong>חסימת עסקן</strong> (₪300) – פתרון חסימה מלא עם ניהול
                  אפליקציות
                </li>
              </ul>
              <p>
                לכל שיטה יתרונות וחסרונות. עבור <strong>סינון לאייפון</strong>{" "}
                ברמה הגבוהה ביותר, מומלץ לשקול{" "}
                <Link href="/services/hadran" className="font-medium text-brand-blue hover:underline">
                  התקנת הדרן
                </Link>{" "}
                או{" "}
                <Link href="/services/askan" className="font-medium text-brand-blue hover:underline">
                  חסימת עסקן
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                סינון אנדרואיד – כל האפשרויות
              </h2>
              <p>
                <strong>סינון אנדרואיד</strong> מציע מגוון רחב יותר של אפשרויות
                בזכות הפתיחות של מערכת ההפעלה. בנוסף לכל האפשרויות הקיימות
                לאייפון, מכשירי אנדרואיד תומכים גם ב:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>
                  <strong>כושר פליי (Kosher Play)</strong> (₪70) – חנות אפליקציות
                  מסוננת שמחליפה את Google Play ומאפשרת הורדה של אפליקציות
                  מאושרות בלבד
                </li>
                <li>
                  <strong>צריבת גרסאות</strong> למכשירי{" "}
                  <Link href="/services/qin-f21" className="font-medium text-brand-blue hover:underline">
                    קין אף 21 פרו (Qin F21 Pro)
                  </Link>{" "}
                  ו-
                  <Link href="/services/qin-f25" className="font-medium text-brand-blue hover:underline">
                    קין אף 25 (Qin F25)
                  </Link>{" "}
                  (₪70)
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                השוואת מערכות סינון: הדרן מול עסקן מול כושר פליי
              </h2>
              <p>
                להלן השוואה מהירה בין מערכות הסינון המובילות:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-brand-blue bg-blue-50">
                      <th className="px-3 py-2 text-right font-bold">מערכת</th>
                      <th className="px-3 py-2 text-right font-bold">מחיר</th>
                      <th className="px-3 py-2 text-right font-bold">רמת סינון</th>
                      <th className="px-3 py-2 text-right font-bold">מתאים ל-</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-3 py-2">סינון בסיסי</td>
                      <td className="px-3 py-2">₪20</td>
                      <td className="px-3 py-2">בסיסי</td>
                      <td className="px-3 py-2">כולם</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-3 py-2">הדרן</td>
                      <td className="px-3 py-2">₪300</td>
                      <td className="px-3 py-2">מתקדם</td>
                      <td className="px-3 py-2">סמארטפונים</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-3 py-2">עסקן</td>
                      <td className="px-3 py-2">₪300</td>
                      <td className="px-3 py-2">מתקדם</td>
                      <td className="px-3 py-2">כולם</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-3 py-2">כושר פליי</td>
                      <td className="px-3 py-2">₪70</td>
                      <td className="px-3 py-2">אפליקציות</td>
                      <td className="px-3 py-2">אנדרואיד</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                איך לבחור את הסינון הנכון?
              </h2>
              <p>
                הבחירה בין מערכות הסינון השונות תלויה במספר גורמים: סוג המכשיר
                (אייפון או אנדרואיד), רמת ההגנה הנדרשת, ותקציב. להלן המלצות:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>
                  <strong>הגנה בסיסית בתקציב נמוך:</strong>{" "}
                  <Link href="/services/basic" className="font-medium text-brand-blue hover:underline">
                    סינון בסיסי לטלפון
                  </Link>{" "}
                  – ₪20 בלבד
                </li>
                <li>
                  <strong>הגנה מקסימלית לסמארטפון:</strong>{" "}
                  <Link href="/services/hadran" className="font-medium text-brand-blue hover:underline">
                    צריבת הדרן
                  </Link>{" "}
                  או{" "}
                  <Link href="/services/askan" className="font-medium text-brand-blue hover:underline">
                    חסימת עסקן
                  </Link>
                </li>
                <li>
                  <strong>שליטה באפליקציות באנדרואיד:</strong>{" "}
                  <Link href="/services/kosher-play" className="font-medium text-brand-blue hover:underline">
                    כושר פליי התקנה
                  </Link>
                </li>
                <li>
                  <strong>מכשיר כשר Qin:</strong>{" "}
                  <Link href="/services/qin-f21" className="font-medium text-brand-blue hover:underline">
                    צריבת גרסה Qin F21 Pro
                  </Link>{" "}
                  או{" "}
                  <Link href="/services/qin-f25" className="font-medium text-brand-blue hover:underline">
                    Qin F25
                  </Link>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                סינון טלפון באשדוד – SmartFilter
              </h2>
              <p>
                <strong>SmartFilter</strong> מציעה את כל שירותי הסינון במקום
                אחד. אנחנו ממוקמים באשדוד ומספקים שירות מקצועי ומהיר – מ
                <strong>סינון בסיסי לטלפון</strong> ועד{" "}
                <strong>צריבת הדרן</strong> ו<strong>חסימת עסקן</strong>. כל
                ההתקנות מבוצעות על ידי טכנאי מומחה עם תמיכה לאחר ההתקנה.
              </p>
              <p>
                <Link href="/contact" className="font-medium text-brand-blue hover:underline">
                  צרו קשר
                </Link>{" "}
                לייעוץ חינם ונתאים לכם את הפתרון המושלם.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">שאלות נפוצות</h2>
            </div>

            <div className="mt-6">
              <FAQ items={faqItems} />
            </div>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
