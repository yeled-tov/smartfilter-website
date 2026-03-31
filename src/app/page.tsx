import { BUSINESS, SERVICES } from "@/lib/constants";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

const homeFAQ = [
  {
    question: "מהו סינון תכנים לטלפון?",
    answer:
      "סינון תכנים לטלפון הוא תהליך שבו מותקנת תוכנה או מערכת חסימה על הטלפון הנייד, שמסננת ומונעת גישה לאתרים ותכנים לא רצויים. סינון תכנים מתאים לאייפון, אנדרואיד ומכשירים כשרים, ומספק הגנה מפני תכנים פוגעניים באינטרנט.",
  },
  {
    question: "איך מתקינים הדרן על הטלפון?",
    answer:
      "התקנת הדרן מתבצעת על ידי טכנאי מקצועי. צריבת הדרן כוללת התקנת מערכת הסינון על המכשיר, הגדרת פרופיל סינון מותאם אישית, וחסימת גישה לתכנים לא רצויים. ב-SmartFilter אנחנו מבצעים התקנת הדרן מקצועית תוך דקות.",
  },
  {
    question: "מה ההבדל בין הדרן לעסקן?",
    answer:
      "הדרן ועסקן הם שתי מערכות סינון מובילות. הדרן מתמחה בסינון אינטרנט ותכנים ברמה גבוהה, בעוד עסקן מציע פתרון חסימה מקיף יותר הכולל ניהול אפליקציות וחסימת תכנים. שתי המערכות מספקות הגנה מצוינת, והבחירה תלויה בצרכים האישיים שלכם.",
  },
  {
    question: "כמה עולה סינון לאייפון?",
    answer:
      "סינון לאייפון מתחיל מ-₪20 בלבד עבור סינון בסיסי. לפתרונות מתקדמים יותר כמו התקנת הדרן או חסימת עסקן, המחיר הוא ₪300. כושר פליי להתקנה עולה ₪70. כל השירותים כוללים התקנה מקצועית ותמיכה.",
  },
  {
    question: "מה זה כושר פליי (Kosher Play)?",
    answer:
      "כושר פליי (Kosher Play) היא חנות אפליקציות מסוננת וכשרה, המהווה תחליף לחנות Google Play. כושר פליי מאפשרת הורדת אפליקציות מאושרות בלבד, ומונעת גישה לאפליקציות לא מתאימות. התקנת כושר פליי עולה ₪70 בלבד.",
  },
  {
    question: "איך צורבים גרסה ל-Qin F21 Pro?",
    answer:
      "צריבת גרסה למכשיר קין אף 21 פרו (Qin F21 Pro) מתבצעת על ידי טכנאי מומחה. התהליך כולל צריבת גרסה מותאמת למכשיר, התקנת סינון תכנים, והגדרות אבטחה. צריבת גרסאות למכשירי Qin F21 Pro עולה ₪70.",
  },
  {
    question: "האם אפשר לסנן אינטרנט באנדרואיד?",
    answer:
      "בהחלט! סינון אינטרנט באנדרואיד אפשרי באמצעות מגוון פתרונות: סינון בסיסי, התקנת הדרן, חסימת עסקן או כושר פליי. כל פתרון מותאם לרמת הסינון הנדרשת. צרו קשר ונתאים לכם את הפתרון המושלם.",
  },
  {
    question: "איפה אפשר לעשות סינון טלפון באשדוד?",
    answer:
      `SmartFilter ממוקמת ב${BUSINESS.address.full}. אנחנו מציעים שירותי סינון טלפון ואינטרנט מקצועיים באשדוד והסביבה. ניתן להגיע אלינו בשעות הפעילות או לתאם הגעה בטלפון ${BUSINESS.phone}.`,
  },
  {
    question: "מה ההבדל בין Qin F21 Pro ל-Qin F25?",
    answer:
      "קין אף 21 פרו (Qin F21 Pro) וקין אף 25 (Qin F25) הם שני דגמי מכשירים כשרים של Qin. שניהם דורשים צריבת גרסה מותאמת. ההבדלים העיקריים הם בגודל המסך, ביצועים ותכונות נוספות. צריבת גרסאות לשני הדגמים עולה ₪70 ב-SmartFilter.",
  },
  {
    question: "האם סינון בסיסי מספיק לטלפון שלי?",
    answer:
      "סינון בסיסי לטלפון מספק הגנה ברמה בסיסית וחוסם את התכנים הבעייתיים ביותר. אם אתם צריכים הגנה מקיפה יותר, מומלץ לשקול התקנת הדרן או עסקן שמספקים סינון ברמה גבוהה יותר. צרו קשר לייעוץ חינם!",
  },
];

export default function HomePage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFAQ)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "ראשי", href: "/" }])
          ),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white section-padding">
        <div className="container-page text-center">
          <h1 className="mb-6 text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            סינון טלפון ואינטרנט מקצועי
            <span className="block text-brand-blue">SmartFilter אשדוד</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 leading-relaxed sm:text-xl">
            סינון תכנים, סינון לאייפון ואנדרואיד, התקנת הדרן, חסימת עסקן, כושר
            פליי וצריבת גרסאות למכשירי Qin – הכל במקום אחד, במחירים הטובים
            ביותר. שירות מקצועי ומהיר באשדוד והסביבה.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green px-8 py-4 text-lg"
            >
              💬 שלחו הודעה בוואטסאפ
            </a>
            <a
              href={`tel:${BUSINESS.phoneIntl}`}
              className="btn-primary px-8 py-4 text-lg"
            >
              📞 {BUSINESS.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            מחירים החל מ-₪20 בלבד · ללא תשלום על ייעוץ
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" id="services">
        <div className="container-page">
          <h2 className="mb-4 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            שירותי סינון וחסימה
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            מגוון פתרונות סינון טלפון ואינטרנט – מסינון בסיסי ועד מערכות
            חסימה מתקדמות כמו הדרן, עסקן וכושר פליי
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                name={service.name}
                description={service.description}
                price={service.price}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 section-padding">
        <div className="container-page">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            למה לבחור ב-SmartFilter?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "⚡",
                title: "שירות מהיר",
                desc: "התקנה מקצועית תוך דקות. סינון טלפון מהיר ויעיל ללא המתנה מיותרת.",
              },
              {
                icon: "💰",
                title: "מחירים הוגנים",
                desc: "מחירים החל מ-₪20 בלבד. סינון בסיסי לטלפון במחיר הנמוך ביותר בשוק.",
              },
              {
                icon: "🛡️",
                title: "מומחיות מקצועית",
                desc: "ניסיון רב בהתקנת הדרן, עסקן, כושר פליי וצריבת גרסאות למכשירי Qin.",
              },
              {
                icon: "🤝",
                title: "תמיכה מלאה",
                desc: "תמיכה ושירות גם אחרי ההתקנה. זמינים בטלפון ובוואטסאפ לכל שאלה.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <span className="mb-3 block text-4xl" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" id="faq">
        <div className="container-page">
          <h2 className="mb-4 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            שאלות נפוצות על סינון טלפון
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            כל מה שרציתם לדעת על סינון תכנים, התקנת הדרן, חסימת עסקן, כושר פליי
            וצריבת גרסאות
          </p>
          <FAQ items={homeFAQ} />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
