import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  name: string;
  description: string;
  price: number;
  icon: string;
}

export default function ServiceCard({
  slug,
  name,
  description,
  price,
  icon,
}: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="card group flex flex-col text-center"
    >
      <span className="mb-3 text-4xl" aria-hidden="true">
        {icon}
      </span>
      <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
        {name}
      </h3>
      <p className="mb-4 flex-1 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
      <div className="mt-auto">
        <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-bold text-brand-blue">
          ₪{price}
        </span>
      </div>
    </Link>
  );
}
