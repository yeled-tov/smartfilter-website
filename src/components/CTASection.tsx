import { BUSINESS } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "מוכנים לסנן את הטלפון?",
  subtitle = "צרו קשר עוד היום לייעוץ חינם והתקנה מקצועית של סינון טלפון ואינטרנט",
}: CTASectionProps) {
  return (
    <section className="bg-brand-blue section-padding text-white">
      <div className="container-page text-center">
        <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
          {subtitle}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green px-8 py-4 text-lg"
            aria-label="שלח הודעה בוואטסאפ ל-SmartFilter לייעוץ בנושא סינון טלפון"
          >
            💬 שלחו הודעה בוואטסאפ
          </a>
          <a
            href={`tel:${BUSINESS.phoneIntl}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-brand-blue"
            aria-label="התקשרו ל-SmartFilter לסינון טלפון"
          >
            📞 {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
