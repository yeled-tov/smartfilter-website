import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = createMetadata({
  title: "אודות SmartFilter – מומחי סינון טלפון באשדוד",
  description:
    "SmartFilter – מומחים לסינון טלפון ואינטרנט באשדוד. שירותי התקנת הדרן, חסימת עסקן, כושר פליי, סינון לאייפון ואנדרואיד, וצריבת גרסאות למכשירי Qin. שירות מקצועי, מהיר ואמין.",
  path: "/about",
  keywords: ["אודות SmartFilter", "סינון טלפון אשדוד", "מומחי סינון"],
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "ראשי", href: "/" },
              { name: "אודות", href: "/about" },
            ])
          ),
        }}
      />

      <section className="bg-gradient-to-b from-blue-50 to-white section-padding">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-center text-4xl font-extrabold text-gray-900 sm:text-5xl">
              אודות SmartFilter
              <span className="block text-2xl text-gray-600 font-bold mt-2 sm:text-3xl">
                מומחים לסינון טלפון ואינטרנט באשדוד
              </span>
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>SmartFilter</strong> היא חברה מובילה בתחום סינון
                הטלפון והאינטרנט, הממוקמת באשדוד. אנחנו מתמחים במתן פתרונות
                סינון תכנים מקצועיים לכל סוגי המכשירים – מאייפון ואנדרואיד
                ועד מכשירים כשרים כמו Qin F21 Pro ו-Qin F25.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                מה אנחנו עושים?
              </h2>
              <p>
                אנחנו מספקים מגוון רחב של שירותי סינון וחסימה:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>
                  <strong>סינון בסיסי לטלפון</strong> – חסימת תכנים ברמה
                  בסיסית, מתאים לכל הטלפונים, במחיר של ₪20 בלבד
                </li>
                <li>
                  <strong>התקנת הדרן</strong> – צריבת הדרן וחסימת הדרן מקצועית,
                  מערכת סינון אינטרנט מתקדמת
                </li>
                <li>
                  <strong>חסימת עסקן</strong> – התקנת עסקן עם פתרון חסימה מקיף
                  לכל סוגי המכשירים
                </li>
                <li>
                  <strong>כושר פליי התקנה</strong> – חנות אפליקציות מסוננת
                  וכשרה כתחליף ל-Google Play
                </li>
                <li>
                  <strong>צריבת גרסאות</strong> למכשירי קין אף 21 פרו (Qin F21
                  Pro) וקין אף 25 (Qin F25)
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                למה לבחור ב-SmartFilter?
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 mt-4">
                {[
                  {
                    title: "מומחיות",
                    desc: "ניסיון רב בסינון טלפון ואינטרנט. אנחנו מכירים כל מערכת סינון לעומק – הדרן, עסקן, כושר פליי ועוד.",
                  },
                  {
                    title: "שירות מהיר",
                    desc: "רוב ההתקנות מתבצעות תוך דקות. צריבת הדרן, חסימת עסקן או סינון בסיסי – הכל מהר ומקצועי.",
                  },
                  {
                    title: "מחירים הוגנים",
                    desc: "מחירים החל מ-₪20. ללא עלויות נסתרות, ללא הפתעות. מחיר שקוף וברור מראש.",
                  },
                  {
                    title: "תמיכה אחרי ההתקנה",
                    desc: "אנחנו לא נעלמים אחרי ההתקנה. תמיכה טכנית מלאה בטלפון ובוואטסאפ לכל שאלה או בעיה.",
                  },
                ].map((item) => (
                  <div key={item.title} className="card">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">
                מיקום – סינון טלפון באשדוד
              </h2>
              <p>
                אנחנו ממוקמים ב<strong>{BUSINESS.address.full}</strong>. אנחנו
                מספקים שירותי <strong>סינון טלפון באשדוד</strong> והסביבה. ניתן
                להגיע אלינו בשעות הפעילות (ראשון-חמישי, 09:00-19:00) או לתאם
                הגעה בטלפון.
              </p>
              <p>
                צריכים סינון? <Link href="/contact" className="font-medium text-brand-blue hover:underline">
                  צרו קשר
                </Link>{" "}
                עוד היום, או שלחו הודעה{" "}
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-blue hover:underline"
                >
                  בוואטסאפ
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
