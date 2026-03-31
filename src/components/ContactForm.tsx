"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "שגיאה בשליחת הטופס");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "שגיאה בשליחת הטופס");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-xl font-bold text-green-800">✅ ההודעה נשלחה בהצלחה!</p>
        <p className="mt-2 text-green-700">נחזור אליכם בהקדם.</p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-primary mt-4"
        >
          שלח הודעה נוספת
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-bold text-gray-700">
          שם מלא
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          placeholder="הכנס את שמך"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-bold text-gray-700">
          טלפון
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          dir="ltr"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          placeholder="05X-XXX-XXXX"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-bold text-gray-700">
          הודעה
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          placeholder="ספרו לנו במה נוכל לעזור..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full py-4 text-base disabled:opacity-50"
      >
        {status === "loading" ? "שולח..." : "שלח הודעה"}
      </button>
    </form>
  );
}
