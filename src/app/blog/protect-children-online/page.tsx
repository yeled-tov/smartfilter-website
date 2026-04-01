import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = createMetadata({
  title: "איך להגן על הילדים באינטרנט – מדריך הורים לסינון תכנים",
  description:
    "מדריך מקיף להורים: איך לבחור סינון תכנים לטלפון של הילדים, סוגי הסינון השונים (סינון בסיסי, הדרן, עסקן, כושר פליי), טיפים להגנה על ילדים באינטרנט.",
  path: "/blog/protect-children-online",
  keywords: [
    "הגנה על ילדים באינטרנט",
    "סינון תכנים לילדים",
    "סינון טלפון לילדים",
    "בטיחות ילדים באינטרנט",
    "מדריך הורים סינון",
  ],
});

const faqItems = [
  {
    question: "מאיזה גיל כדאי להתקין סינון בטלפון של הילד?",
    answer:
      "מומלץ להתקין סינון תכנים מהרגע שהילד מקבל טלפון עם גישה לאינטרנט. אין גיל מוקדם מדי לסינון – גם ילדים צעירים עלולים להיחשף לתכנים לא מתאימים.",
  },
  {
    question: "מה הסינון הכי חזק לטלפון של ילד?",
    answer:
      "לסינון הכי מקיף, מומלץ לשלב התקנת הדרן או עסקן (₪300) עם כושר פליי (₪70). השילוב הזה מספק סינון אינטרנט מתקדם יחד עם חנות אפליקציות מסוננת.",
  },
  {
    question: "האם הילד יכול לעקוף את הסינון?",
    answer:
      "מערכות סינון מתקדמות כמו הדרן ועסקן מתוכננות למנוע עקיפה. הן מותקנות ברמה עמוקה על המכשיר ואי אפשר להסירן ללא סיוע טכני מקצועי. סינון בסיסי קל יותר לעקיפה.",
  },
];

export default function ProtectChildrenOnlinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: "איך להגן על הילדים באינטרנט – מדריך הורים לסינון תכנים",
              description: "מדריך מקיף להורים על סינון תכנים והגנה על ילדים באינטרנט",
              slug: "protect-children-online",
              datePublished: "2025-03-10",
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
              { name: "הגנה על ילדים באינטרנט", href: "/blog/protect-children-online" },
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
            <span className="text-gray-900">הגנה על ילדים באינטרנט</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <time className="text-sm font-medium text-gray-500">10 מרץ 2025</time>
            <h1 className="mt-2 mb-8 text-4xl font-extrabold text-gray-900 sm:text-5xl leading-tight">
              איך להגן על הילדים באינטרנט – מדריך הורים לסינון תכנים
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                כהורים, אנחנו רוצים את הטוב ביותר עבור ילדינו. בעולם שבו
                ילדים מקבלים טלפון חכם בגיל צעיר, <strong>סינון תכנים</strong>{" "}
                הפך מתוספת נחמדה לצורך חיוני. במדריך הזה נסביר מדוע{" "}
                <strong>סינון טלפון</strong> חשוב, מה האפשרויות הקיימות, ואיך
                לבחור את הפתרון הנכון למשפחה שלכם.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                למה סינון תכנים חשוב לילדים?
              </h2>
              <p>
                האינטרנט מלא בתכנים מדהימים, אבל גם בתכנים שלא מתאימים
                לילדים. ללא <strong>סינון אינטרנט</strong>, ילדים עלולים
                להיחשף לתכנים פוגעניים, אלימים, או מטעים. בנוסף, אפליקציות
                מסוימות עלולות לגרום להתמכרות או לסכנות חברתיות.{" "}
                <strong>סינון תכנים לטלפון</strong> מספק שכבת הגנה שמאפשרת
                לילדים ליהנות מהיתרונות של הטכנולוגיה בצורה בטוחה.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                אפשרויות סינון טלפון לילדים
              </h2>
              <p>
                יש מספר רמות של <strong>סינון טלפון</strong> שמתאימות לילדים:
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">
                1. סינון בסיסי לטלפון – ₪20
              </h3>
              <p>
                <Link href="/services/basic" className="font-medium text-brand-blue hover:underline">
                  סינון בסיסי
                </Link>{" "}
                מספק חסימה ברמה בסיסית של אתרים ותכנים לא רצויים. זהו פתרון
                זול ומהיר שמתאים כשלב ראשון, אבל לא מספק הגנה מלאה מפני
                עקיפה.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">
                2. התקנת הדרן – ₪300
              </h3>
              <p>
                <Link href="/services/hadran" className="font-medium text-brand-blue hover:underline">
                  הדרן
                </Link>{" "}
                מספקת <strong>סינון אינטרנט מתקדם</strong>. <strong>צריבת
                הדרן</strong> כוללת חסימה מקיפה של תכנים לא רצויים, סינון
                תוצאות חיפוש, והגנה מפני עקיפת הסינון. זהו פתרון מצוין
                להורים שרוצים הגנה ברמה גבוהה.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">
                3. חסימת עסקן – ₪300
              </h3>
              <p>
                <Link href="/services/askan" className="font-medium text-brand-blue hover:underline">
                  עסקן
                </Link>{" "}
                מציע <strong>פתרון חסימה מקיף</strong> שכולל סינון אינטרנט
                וגם ניהול אפליקציות. <strong>התקנת עסקן</strong> מתאימה
                להורים שרוצים שליטה מלאה על מה שהילד יכול לעשות עם הטלפון.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">
                4. כושר פליי – ₪70
              </h3>
              <p>
                <Link href="/services/kosher-play" className="font-medium text-brand-blue hover:underline">
                  כושר פליי (Kosher Play)
                </Link>{" "}
                מחליפה את חנות האפליקציות ומאפשרת הורדת אפליקציות מאושרות
                בלבד. <strong>כושר פליי התקנה</strong> פשוטה ומהירה, ומשלבת
                מצוין עם הדרן או עסקן.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                מה ההמלצה שלנו?
              </h2>
              <p>
                עבור ילדים, אנחנו ממליצים על שילוב של <strong>הדרן</strong>{" "}
                או <strong>עסקן</strong> יחד עם <strong>כושר פליי</strong>.
                השילוב הזה מספק:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>סינון אינטרנט מתקדם שאי אפשר לעקוף</li>
                <li>חנות אפליקציות מסוננת עם אפליקציות מאושרות בלבד</li>
                <li>שליטה מלאה של ההורים על תכנים ואפליקציות</li>
                <li>עדכונים שוטפים לרשימות חסימה</li>
              </ul>
              <p>
                לתקציב מצומצם, <strong>סינון בסיסי לטלפון</strong> ב-₪20
                עדיף על כלום ומספק הגנה ברמה סבירה.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                טיפים נוספים להגנה על ילדים באינטרנט
              </h2>
              <ul className="list-disc pr-6 space-y-2">
                <li>שוחחו עם הילדים על שימוש בטוח באינטרנט</li>
                <li>קבעו כללים ברורים לגבי זמני מסך</li>
                <li>הכירו את האפליקציות שהילדים משתמשים בהן</li>
                <li>התקינו סינון מקצועי – אל תסתמכו רק על הבטחות</li>
                <li>עדכנו את הסינון באופן שוטף</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                סינון טלפון לילדים באשדוד
              </h2>
              <p>
                ב-<strong>SmartFilter</strong> אנחנו מתמחים בהתקנת סינון
                לטלפונים של ילדים. אנחנו מציעים ייעוץ חינם כדי לעזור לכם
                לבחור את הפתרון הנכון, ומבצעים את ההתקנה במקום תוך דקות.
              </p>
              <p>
                <Link href="/contact" className="font-medium text-brand-blue hover:underline">
                  צרו קשר
                </Link>{" "}
                עוד היום להתייעצות חינם.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">שאלות נפוצות</h2>
            </div>

            <div className="mt-6">
              <FAQ items={faqItems} />
            </div>
          </div>
        </div>
      </article>

      <CTASection title="רוצים להגן על הילדים?" subtitle="צרו קשר לייעוץ חינם וסינון מקצועי לטלפון של ילדיכם" />
    </>
  );
}
