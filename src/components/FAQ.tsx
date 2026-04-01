interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-200">
      {items.map((item, index) => (
        <details
          key={index}
          className="group py-4"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-bold text-gray-900 transition-colors hover:text-brand-blue [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-transform group-open:rotate-45 group-open:border-brand-blue group-open:text-brand-blue">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
