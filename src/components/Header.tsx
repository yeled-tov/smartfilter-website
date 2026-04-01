"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <nav className="container-page flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold text-brand-blue"
          aria-label="SmartFilter – סינון טלפון ואינטרנט – דף הבית"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue text-white text-sm">
            SF
          </span>
          SmartFilter
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-blue"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`tel:${BUSINESS.phoneIntl}`}
              className="btn-primary mr-2 px-4 py-2 text-sm"
              aria-label="התקשר ל-SmartFilter"
            >
              📞 {BUSINESS.phone}
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex gap-2">
              <a
                href={`tel:${BUSINESS.phoneIntl}`}
                className="btn-primary flex-1 justify-center py-3 text-sm"
              >
                📞 התקשרו עכשיו
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green flex-1 justify-center py-3 text-sm"
              >
                💬 וואטסאפ
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
