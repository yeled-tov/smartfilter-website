import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = createMetadata({
  title: "הדרן לסמארטפונים כשרים – כל מה שצריך לדעת",
  description:
    "מדריך מקיף על מערכת הדרן: מה זה הדרן, איך עובדת צריבת הדרן, ההבדל בין הדרן לעסקן, יתרונות וחסרונות, ולמי זה מתאים. SmartFilter אשדוד.",
  path: "/blog/hadran-kosher-smartphones",
  keywords: [
    "הדרן מדריך",
    "הדרן לסמארטפון כשר",
    "הדרן מול עסקן",
    "צריבת הדרן הסבר",
    "חסימת הדרן",
  ],
});

const faqItems = [
  {
    question: "האם הדרן עובד על כל הסמארטפונים?",
    answer:
      "הדרן מותאם בעיקר לסמארטפונים כשרים ולמכשירי אנדרואיד. לא כל מכשיר תומך בהדרן – מומלץ לפנות לטכנאי מוסמך כמו SmartFilter לבדיקת התאמה.",
  },
  {
    question: "כמה זמן לוקחת צריבת הדרן?",
    answer:
      "צריבת הדרן אורכת בדרך כלל 15-30 דקות. התהליך כולל התקנת המערכת, הגדרת פרופיל הסינון, ובדיקת תקינות.",
  },
  {
    question: "האם אפשר לשלב הדרן עם כושר פליי?",
    answer:
      "כן, ניתן לשלב הדרן עם כושר פליי (Kosher Play) להגנה כפולה: הדרן מסנן את האינטרנט, וכושר פליי מספקת חנות אפליקציות מסוננת.",
  },
];

export default function HadranKosherSmartphonesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: "הדרן לסמארטפונים כשרים – כל מה שצריך לדעת",
              description: "מדריך מקיף על מערכת הדרן לסמארטפונים כשרים",
              slug: "hadran-kosher-smartphones",
              datePublished: "2025-02-01",
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
              { name: "הדרן לסמארטפונים כשרים", href: "/blog/hadran-kosher-smartphones" },
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
            <span className="text-gray-900">הדרן לסמארטפונים כשרים</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <time className="text-sm font-medium text-gray-500">1 פברואר 2025</time>
            <h1 className="mt-2 mb-8 text-4xl font-extrabold text-gray-900 sm:text-5xl leading-tight">
              הדרן לסמארטפונים כשרים – כל מה שצריך לדעת
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>הדרן</strong> היא אחת ממערכות הסינון המובילות בישראל
                לסמארטפונים כשרים. אם אתם שוקלים <strong>צריבת הדרן</strong>{" "}
                למכשיר שלכם, במדריך הזה תמצאו את כל המידע הדרוש – מה זה
                הדרן, איך עובדת <strong>חסימת הדרן</strong>, מה ההבדל בין
                הדרן לעסקן, ולמי זה מתאים.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                מה זה הדרן?
              </h2>
              <p>
                הדרן היא מערכת <strong>סינון אינטרנט</strong> מתקדמת שמותקנת
                ישירות על הסמארטפון. <strong>התקנת הדרן</strong> כוללת צריבת
                תוכנת סינון שחוסמת גישה לאתרים ותכנים לא רצויים, מסננת תוצאות
                חיפוש, ומונעת עקיפת הסינון. המערכת מתעדכנת באופן שוטף עם
                רשימות חסימה חדשות.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                איך עובדת צריבת הדרן?
              </h2>
              <p>
                <strong>צריבת הדרן</strong> מתבצעת על ידי טכנאי מוסמך. התהליך
                כולל:
              </p>
              <ol className="list-decimal pr-6 space-y-2">
                <li>בדיקת התאמת המכשיר להתקנת הדרן</li>
                <li>גיבוי נתוני המכשיר</li>
                <li>צריבת תוכנת הסינון על המכשיר</li>
                <li>הגדרת פרופיל סינון מותאם אישית</li>
                <li>בדיקת תקינות הסינון ווידוא שהחסימה פעילה</li>
              </ol>
              <p>
                כל התהליך אורך כ-15-30 דקות ומבוצע במקום. ב-
                <Link href="/services/hadran" className="font-medium text-brand-blue hover:underline">
                  SmartFilter
                </Link>{" "}
                אנחנו מבצעים <strong>התקנת הדרן</strong> מקצועית עם אחריות
                מלאה.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                הדרן מול עסקן – מה ההבדל?
              </h2>
              <p>
                זו אחת השאלות הנפוצות ביותר. <strong>הדרן</strong> ו
                <strong>עסקן</strong> הם שני פתרונות סינון מתקדמים, אבל יש
                ביניהם הבדלים:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-brand-blue bg-blue-50">
                      <th className="px-3 py-2 text-right font-bold">תכונה</th>
                      <th className="px-3 py-2 text-right font-bold">הדרן</th>
                      <th className="px-3 py-2 text-right font-bold">עסקן</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-3 py-2">מחיר</td>
                      <td className="px-3 py-2">₪300</td>
                      <td className="px-3 py-2">₪300</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-3 py-2">סינון אינטרנט</td>
                      <td className="px-3 py-2">מתקדם מאוד</td>
                      <td className="px-3 py-2">מתקדם</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-3 py-2">ניהול אפליקציות</td>
                      <td className="px-3 py-2">בסיסי</td>
                      <td className="px-3 py-2">מתקדם</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-3 py-2">התאמה לאייפון</td>
                      <td className="px-3 py-2">חלקית</td>
                      <td className="px-3 py-2">מלאה</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-3 py-2">קושי עקיפה</td>
                      <td className="px-3 py-2">גבוה מאוד</td>
                      <td className="px-3 py-2">גבוה</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>לסיכום:</strong> הדרן מתמחה יותר בסינון אינטרנט ברמה
                גבוהה, בעוד <strong>עסקן</strong> מציע פתרון חסימה מקיף יותר
                שכולל ניהול אפליקציות מתקדם. שניהם פתרונות מצוינים. מתלבטים?{" "}
                <Link href="/contact" className="font-medium text-brand-blue hover:underline">
                  צרו קשר
                </Link>{" "}
                לייעוץ חינם.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                למי מתאים הדרן?
              </h2>
              <p>
                <strong>חסימת הדרן</strong> מתאימה במיוחד ל:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>הורים שרוצים להגן על ילדיהם מתכנים לא מתאימים באינטרנט</li>
                <li>משתמשים שצריכים סינון אינטרנט ברמה גבוהה</li>
                <li>בעלי סמארטפונים כשרים שרוצים שכבת הגנה נוספת</li>
                <li>ארגונים שדורשים סביבה דיגיטלית מסוננת</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                התקנת הדרן ב-SmartFilter אשדוד
              </h2>
              <p>
                ב-SmartFilter אנחנו מתמחים ב<strong>צריבת הדרן</strong>{" "}
                מקצועית ומהירה. ההתקנה כוללת את כל השלבים – מבדיקת התאמה ועד
                בדיקת תקינות. המחיר: ₪300 בלבד.
              </p>
              <p>
                מעוניינים? פנו אלינו ב
                <Link href="/services/hadran" className="font-medium text-brand-blue hover:underline">
                  דף שירות הדרן
                </Link>{" "}
                או ישירות דרך{" "}
                <Link href="/contact" className="font-medium text-brand-blue hover:underline">
                  צור קשר
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">שאלות נפוצות</h2>
            </div>

            <div className="mt-6">
              <FAQ items={faqItems} />
            </div>
          </div>
        </div>
      </article>

      <CTASection title="רוצים להתקין הדרן?" subtitle="צרו קשר לצריבת הדרן מקצועית באשדוד" />
    </>
  );
}
