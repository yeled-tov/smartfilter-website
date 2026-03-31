import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = createMetadata({
  title: "שירותי סינון טלפון ואינטרנט | הדרן, עסקן, כושר פליי",
  description:
    "כל שירותי הסינון במקום אחד: סינון בסיסי לטלפון, התקנת הדרן, חסימת עסקן, כושר פליי וצריבת גרסאות למכשירי Qin F21 Pro ו-Qin F25. מחירים החל מ-₪20.",
  path: "/services",
  keywords: ["שירותי סינון", "סינון טלפון", "השוואת מערכות סינון"],
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "ראשי", href: "/" },
              { name: "שירותים", href: "/services" },
            ])
          ),
        }}
      />

      <section className="bg-gradient-to-b from-blue-50 to-white section-padding">
        <div className="container-page">
          <h1 className="mb-4 text-center text-4xl font-extrabold text-gray-900 sm:text-5xl">
            שירותי סינון טלפון ואינטרנט
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
            SmartFilter מציעה מגוון רחב של פתרונות סינון תכנים – מסינון בסיסי
            לטלפון ועד מערכות מתקדמות כמו הדרן, עסקן וכושר פליי. בנוסף, אנו
            מתמחים בצריבת גרסאות למכשירי קין אף 21 פרו ו-קין אף 25.
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

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container-page">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
            השוואת שירותי סינון
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-brand-blue bg-blue-50">
                  <th className="px-4 py-3 text-right font-bold">שירות</th>
                  <th className="px-4 py-3 text-right font-bold">מחיר</th>
                  <th className="px-4 py-3 text-right font-bold">רמת סינון</th>
                  <th className="px-4 py-3 text-right font-bold">מתאים ל-</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">סינון בסיסי</td>
                  <td className="px-4 py-3">₪20</td>
                  <td className="px-4 py-3">בסיסי</td>
                  <td className="px-4 py-3">כל הטלפונים</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium">הדרן</td>
                  <td className="px-4 py-3">₪300</td>
                  <td className="px-4 py-3">מתקדם</td>
                  <td className="px-4 py-3">סמארטפונים כשרים</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">עסקן</td>
                  <td className="px-4 py-3">₪300</td>
                  <td className="px-4 py-3">מתקדם</td>
                  <td className="px-4 py-3">כל המכשירים</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium">כושר פליי</td>
                  <td className="px-4 py-3">₪70</td>
                  <td className="px-4 py-3">אפליקציות</td>
                  <td className="px-4 py-3">מכשירי אנדרואיד</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">Qin F21 Pro</td>
                  <td className="px-4 py-3">₪70</td>
                  <td className="px-4 py-3">מותאם מכשיר</td>
                  <td className="px-4 py-3">קין אף 21 פרו</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium">Qin F25</td>
                  <td className="px-4 py-3">₪70</td>
                  <td className="px-4 py-3">מותאם מכשיר</td>
                  <td className="px-4 py-3">קין אף 25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
