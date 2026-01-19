"use client";

import React, { useState } from "react";
import { Lock, ShieldCheck, ArrowLeft, Loader2, Globe, Instagram, Building2, Mail } from "lucide-react";

/**
 * BRAND & THEME CONFIG
 * Aligned with Dontay Beemon AutoInno Branding
 */
const BRAND = {
  name: "Dontay Beemon",
  firm: "AutoInno Systems",
  accent: "#38BDF8", 
};

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      email: String(form.get("email") || "").trim(),
      businessName: String(form.get("businessName") || "").trim(),
      website: String(form.get("website") || "").trim(),
      instagram: String(form.get("instagram") || "").trim(),
      event: "demo_checkout_completed",
    };

    if (!payload.email || !payload.website) {
      setLoading(false);
      setError("Contact email and business website are required.");
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Infrastructure error during lead capture.");
      }

      const data = await res.json();
      // Using standard JS template literals for the redirect
      window.location.href = `/delivery?leadId=${encodeURIComponent(data.leadId)}`;
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col md:flex-row">
      {/* 1. LEFT PANEL: SECURE FORM */}
      <main className="flex-1 max-w-2xl mx-auto px-6 py-12 md:py-24">
        <nav className="mb-12">
          <a href="/offer" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Selection
          </a>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-2 text-sky-500 font-black text-xs uppercase tracking-[0.2em] mb-4">
            <Lock className="w-3 h-3" />
            Secure Infrastructure
          </div>
          <h1 className="text-4xl font-black tracking-tight mb-4">Finalize Your <span className="text-slate-300">Audit.</span></h1>
          <p className="text-slate-500 font-medium">Capture lead data and initialize the AI processing engine.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input name="email" type="email" placeholder="Contact Email" className={inputClass} />
            </div>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input name="businessName" placeholder="Business Legal Name" className={inputClass} />
            </div>
            <div className="relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input name="website" placeholder="Website URL (https://...)" className={inputClass} />
            </div>
            <div className="relative">
              <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input name="instagram" placeholder="Instagram @handle" className={inputClass} />
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold border border-red-100">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 disabled:bg-slate-100 disabled:text-slate-400 shadow-xl shadow-slate-200"
          >
            {loading ? (
              <><Loader2 className="w-6 h-6 animate-spin" /> Initializing...</>
            ) : (
              "Complete Checkout →"
            )}
          </button>
        </form>
      </main>

      {/* 2. RIGHT PANEL: ORDER SUMMARY & TRUST */}
      <aside className="w-full md:w-[400px] lg:w-[500px] bg-slate-50 border-l border-slate-100 p-8 md:p-16 flex flex-col justify-between">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-slate-900 rounded flex items-center justify-center text-white font-black text-xs">DB</div>
            <div>
              <p className="text-sm font-black uppercase leading-none">{BRAND.name}</p>
              <p className="text-[10px] font-bold text-slate-400 tracking-widest">{BRAND.firm}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-lg mb-4">Audit Summary</h3>
            <div className="flex justify-between items-center py-3 border-b border-slate-50 text-sm">
              <span className="text-slate-500">AI Infrastructure Audit</span>
              <span className="font-bold">$0.00</span>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="font-black text-xl text-slate-900 uppercase">Total</span>
              <span className="font-black text-2xl">$0.00</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
              <p className="text-sm font-medium text-slate-600">
                Lead capture is encrypted and logged to the central CRM for processing.
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-12 opacity-50 text-[10px] font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} {BRAND.firm}
        </footer>
      </aside>
    </div>
  );
}

const inputClass = "w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-sky-500 focus:bg-white rounded-2xl transition-all outline-none font-medium placeholder:text-slate-400";