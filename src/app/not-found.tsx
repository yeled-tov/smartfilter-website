import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-page text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-brand-blue">404</h1>
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          הדף לא נמצא
        </h2>
        <p className="mb-8 text-gray-600">
          מצטערים, הדף שחיפשתם לא קיים. אולי תמצאו את מה שאתם מחפשים באחד
          מהדפים הבאים:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            דף הבית
          </Link>
          <Link href="/services" className="btn-outline">
            שירותים
          </Link>
          <Link href="/contact" className="btn-outline">
            צור קשר
          </Link>
        </div>
      </div>
    </section>
  );
}
