import React from 'react';
import { ArrowLeft, CheckCircle2, ShoppingCart, Zap, Layout, Instagram } from 'lucide-react';

/**
 * BRAND ASSETS & CONFIG
 */
const BRAND = {
  name: "Dontay Beemon",
  company: "AutoInno Systems",
  primaryColor: "#0F172A", // Deep Navy
  accentColor: "#38BDF8",  // AI Blue
};

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased pb-20">
      {/* 1. TOP NAVIGATION */}
      <nav className="max-w-4xl mx-auto px-6 py-8">
        <a 
          href="/" 
          className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return to Hub
        </a>
      </nav>

      <main className="max-w-4xl mx-auto px-6">
        {/* 2. HEADER SECTION */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-black uppercase mb-6 shadow-sm">
            <ShoppingCart className="w-3 h-3" />
            Secure Demo Checkout
          </div>
          <h1 className="text-5xl font-black tracking-tighter mb-4">
            AI Business <span className="text-slate-400">Audit Engine</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Experience a seamless, DashNex-style transition from interest to delivery. 
            This zero-cost demo simulates a high-ticket funnel environment ready for Stripe integration.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* 3. PRODUCT BREAKDOWN (COL-SPAN 3) */}
          <div className="md:col-span-3 space-y-6">
            <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                Included in this Audit:
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Website Structural Audit", icon: <Layout className="w-5 h-5 text-sky-500" /> },
                  { title: "Instagram Content Analysis", icon: <Instagram className="w-5 h-5 text-pink-500" /> },
                  { title: "3 Priority Revenue Fixes", icon: <Zap className="w-5 h-5 text-yellow-500" /> },
                  { title: "Automation Roadmap", icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
                    {item.icon}
                    <span className="font-bold text-slate-700">{item.title}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 4. PRICING & CTA (COL-SPAN 2) */}
          <div className="md:col-span-2">
            <div className="bg-slate-900 rounded-3xl p-8 text-white sticky top-8 shadow-2xl">
              <p className="text-sky-400 text-xs font-black uppercase tracking-widest mb-2">Selected Tier</p>
              <h3 className="text-2xl font-bold mb-6">Standard Audit</h3>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">$0</span>
                <span className="text-slate-400 font-medium italic">Demo Price</span>
              </div>

              <a
                href="/checkout"
                className="block w-full py-5 bg-sky-500 hover:bg-sky-400 text-slate-900 text-center rounded-2xl font-black text-lg transition-all transform active:scale-95 shadow-lg shadow-sky-500/20"
              >
                Proceed to Checkout →
              </a>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 italic">
                  <CheckCircle2 className="w-3 h-3 text-sky-400" />
                  Instant Dashboard Access
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 italic">
                  <CheckCircle2 className="w-3 h-3 text-sky-400" />
                  Lead Capture Logging Enabled
                </div>
              </div>
            </div>

            {/* CONSULTANT BADGE */}
            <div className="mt-6 p-4 flex items-center gap-4 bg-white rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                {/* Reference to your Portrait Asset */}
                <div className="w-full h-full bg-slate-300"></div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Expert Support</p>
                <p className="text-xs font-black text-slate-900">{BRAND.name}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
          © {new Date().getFullYear()} {BRAND.company} — {BRAND.name}
        </p>
      </footer>
    </div>
  );
}