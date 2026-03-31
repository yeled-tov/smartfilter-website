import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = createMetadata({
  title: "צור קשר – SmartFilter סינון טלפון באשדוד",
  description:
    "צרו קשר עם SmartFilter לסינון טלפון ואינטרנט מקצועי באשדוד. טלפון: 052-718-6881, וואטסאפ, או השאירו פרטים. התקנת הדרן, חסימת עסקן, כושר פליי ועוד.",
  path: "/contact",
  keywords: ["צור קשר SmartFilter", "סינון טלפון אשדוד טלפון"],
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "ראשי", href: "/" },
              { name: "צור קשר", href: "/contact" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "צור קשר – SmartFilter",
            description: "דף צור קשר של SmartFilter – סינון טלפון ואינטרנט באשדוד",
            mainEntity: {
              "@type": "LocalBusiness",
              name: BUSINESS.name,
              telephone: BUSINESS.phoneIntl,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${BUSINESS.address.street}, ${BUSINESS.address.entrance}`,
                addressLocality: BUSINESS.address.city,
                addressCountry: "IL",
              },
            },
          }),
        }}
      />

      <section className="bg-gradient-to-b from-blue-50 to-white section-padding">
        <div className="container-page">
          <h1 className="mb-4 text-center text-4xl font-extrabold text-gray-900 sm:text-5xl">
            צור קשר
            <span className="block text-2xl text-gray-600 font-bold mt-2 sm:text-3xl">
              SmartFilter – סינון טלפון ואינטרנט באשדוד
            </span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            רוצים להתקין סינון? יש לכם שאלה? צרו איתנו קשר ונשמח לעזור!
          </p>

          <div className="mx-auto max-w-4xl grid gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">פרטי התקשרות</h2>
              <div className="space-y-5">
                <div className="card">
                  <h3 className="mb-1 text-sm font-bold text-gray-500">טלפון</h3>
                  <a
                    href={`tel:${BUSINESS.phoneIntl}`}
                    className="text-xl font-bold text-brand-blue hover:underline"
                    dir="ltr"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>

                <div className="card">
                  <h3 className="mb-1 text-sm font-bold text-gray-500">וואטסאפ</h3>
                  <a
                    href={BUSINESS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-green-600 hover:underline"
                  >
                    שלחו הודעה בוואטסאפ
                  </a>
                </div>

                <div className="card">
                  <h3 className="mb-1 text-sm font-bold text-gray-500">כתובת</h3>
                  <p className="text-lg font-medium text-gray-900">
                    {BUSINESS.address.full}
                  </p>
                </div>

                <div className="card">
                  <h3 className="mb-1 text-sm font-bold text-gray-500">שעות פעילות</h3>
                  <p className="text-lg font-medium text-gray-900">
                    ראשון – חמישי: 09:00 – 19:00
                  </p>
                </div>

                <div className="card">
                  <h3 className="mb-1 text-sm font-bold text-gray-500">תשלום</h3>
                  <a
                    href={BUSINESS.payment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-brand-blue hover:underline"
                  >
                    שלמו באמצעות Bit
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">השאירו פרטים</h2>
              <div className="card">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
