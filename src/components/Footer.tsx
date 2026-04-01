import Link from "next/link";
import { BUSINESS, SERVICES, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-page py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-extrabold text-brand-blue">
              SmartFilter
            </Link>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {BUSINESS.tagline}. שירותי סינון טלפון, סינון אינטרנט, התקנת הדרן,
              חסימת עסקן וכושר פליי באשדוד.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-900">שירותים</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-600 transition-colors hover:text-brand-blue"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-900">ניווט</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-900">צור קשר</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneIntl}`}
                  className="transition-colors hover:text-brand-blue"
                >
                  📞 {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-blue"
                >
                  💬 שלחו הודעה בוואטסאפ
                </a>
              </li>
              <li>📍 {BUSINESS.address.full}</li>
              <li>🕐 ראשון–חמישי 09:00–19:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. כל הזכויות שמורות. סינון
            טלפון ואינטרנט מקצועי באשדוד.
          </p>
        </div>
      </div>
    </footer>
  );
}
