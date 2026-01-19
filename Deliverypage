"use client";

import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Layout, 
  Clock,
  Sparkles 
} from 'lucide-react';

/**
 * BRAND CONFIGURATION
 * Dontay Beemon AutoInno
 */
const BRAND = {
  name: "Dontay Beemon",
  firm: "AutoInno Systems",
  accent: "#38BDF8",
};

export default function DeliveryPage({ searchParams }) {
  const leadId = searchParams?.leadId || "demo-active-2026";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased pb-24">
      {/* 1. SUCCESS HEADER */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase mb-4">
              <CheckCircle className="w-3 h-3" />
              Audit Generation Complete
            </div>
            <h1 className="text-4xl font-black tracking-tight">Your AI <span className="text-slate-400">Analysis.</span></h1>
            <p className="text-slate-500 mt-2 font-medium">Report generated for Reference ID: <span className="text-slate-900 font-bold">{leadId}</span></p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
               {/* Reference to your Professional Portrait */}
               <div className="w-full h-full bg-slate-300"></div>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Prepared By</p>
              <p className="text-sm font-black italic">{BRAND.name}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
        {/* 2. CORE AUDIT OUTPUT */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles className="w-24 h-24" />
          </div>
          
          <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
            <TrendingUp className="text-sky-500" />
            Strategic Priorities
          </h2>

          <div className="grid gap-4">
            {[
              { label: "Clarity", desc: "Tighten headline to one promise + one audience.", icon: <Layout /> },
              { label: "Conversion", desc: "Add a single CTA above the fold and remove extra links.", icon: <Zap /> },
              { label: "Trust", desc: "Add 3 proof elements (testimonials, before/after, numbers).", icon: <ShieldCheck /> },
              { label: "Speed", desc: "Compress hero image + use lazy loading for media.", icon: <Clock /> }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-transparent hover:border-sky-100 hover:bg-white transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-sky-500 group-hover:border-sky-200 transition-colors shrink-0">
                  {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                </div>
                <div>
                  <h3 className="font-black text-lg mb-1">{item.label}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. INFRASTRUCTURE UPGRADE PATH */}
        <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black mb-6 italic text-sky-400 underline decoration-sky-400/30 underline-offset-8">
              Infrastructure Roadmap
            </h2>
            <ul className="space-y-6">
              {[
                "Transition from Demo to Stripe Production Checkout",
                "Integrate Real-Time AI Generation via OpenAI/Anthropic API",
                "Automate Lifecycle Email Follow-ups with n8n + Resend"
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-1 font-black text-xs">
                    {i + 1}
                  </div>
                  <span className="text-slate-300 font-medium leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a 
            href="/dashboard" 
            className="flex-1 py-5 bg-slate-900 text-white rounded-2xl font-black text-center text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200"
          >
            Enter System Dashboard <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="/" 
            className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold text-center text-lg hover:border-slate-900 hover:text-slate-900 transition-all"
          >
            Back Home
          </a>
        </div>
      </main>

      <footer className="mt-20 text-center opacity-30 text-[10px] font-black uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} {BRAND.firm} — Innovative Automations
      </footer>
    </div>
  );
}