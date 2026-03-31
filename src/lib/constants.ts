export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.smartfilter.co.il";

export const BUSINESS = {
  name: "SmartFilter",
  nameHe: "סמארטפילטר",
  tagline: "פתרונות סינון והגנה דיגיטלית",
  phone: "052-718-6881",
  phoneIntl: "+972527186881",
  whatsapp: "https://wa.me/972527186881",
  payment: "https://bitpay.co.il/app/me/0527186881",
  email: "ywldyld@gmail.com",
  address: {
    street: "חטיבת גבעתי 2",
    entrance: "כניסה ו׳",
    city: "אשדוד",
    country: "ישראל",
    full: "חטיבת גבעתי 2, כניסה ו׳, אשדוד",
  },
  geo: {
    lat: 31.8044,
    lng: 34.6553,
  },
} as const;

export const SERVICES = [
  {
    slug: "basic",
    name: "סינון בסיסי",
    nameEn: "Basic Filtering",
    price: 20,
    description: "סינון בסיסי לטלפון – חסימת תכנים לא רצויים ברמה בסיסית, מתאים לכל סוגי הטלפונים.",
    shortDesc: "חסימת תכנים בסיסית לכל טלפון",
    icon: "🛡️",
  },
  {
    slug: "hadran",
    name: "הדרן",
    nameEn: "Hadran",
    price: 300,
    description: "התקנת הדרן – מערכת סינון מתקדמת לסמארטפונים כשרים. צריבת הדרן וחסימת הדרן מקצועית.",
    shortDesc: "מערכת סינון מתקדמת לסמארטפונים",
    icon: "🔒",
  },
  {
    slug: "askan",
    name: "עסקן",
    nameEn: "Askan",
    price: 300,
    description: "התקנת עסקן – פתרון סינון וחסימה מקיף. חסימת עסקן מקצועית עם הגנה מלאה על המכשיר.",
    shortDesc: "פתרון סינון וחסימה מקיף",
    icon: "🔐",
  },
  {
    slug: "kosher-play",
    name: "כושר פליי",
    nameEn: "Kosher Play",
    price: 70,
    description: "התקנת כושר פליי – חנות אפליקציות מסוננת וכשרה. כושר פליי התקנה מקצועית ומהירה.",
    shortDesc: "חנות אפליקציות מסוננת וכשרה",
    icon: "📱",
  },
  {
    slug: "qin-f21",
    name: "Qin F21 Pro",
    nameEn: "Qin F21 Pro",
    price: 70,
    description: "צריבת גרסה למכשיר קין אף 21 פרו – Qin F21 Pro. צריבת גרסאות מקצועית והתאמה אישית.",
    shortDesc: "צריבת גרסה מותאמת למכשיר",
    icon: "⚡",
  },
  {
    slug: "qin-f25",
    name: "Qin F25",
    nameEn: "Qin F25",
    price: 70,
    description: "צריבת גרסה למכשיר קין אף 25 – Qin F25. צריבת גרסאות והתקנה מקצועית.",
    shortDesc: "צריבת גרסה מותאמת למכשיר",
    icon: "⚡",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "ראשי" },
  { href: "/services", label: "שירותים" },
  { href: "/about", label: "אודות" },
  { href: "/blog", label: "בלוג" },
  { href: "/contact", label: "צור קשר" },
] as const;
