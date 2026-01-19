import React from 'react';
// Recommended: npm install lucide-react for professional iconography
import { ShieldCheck, Zap, BarChart, ArrowRight } from 'lucide-react';

/** * CORE BRAND CONFIGURATION
 * Optimized for Dontay Beemon AutoInno
 */
const BRAND = {
  name: "Dontay Beemon",
  firm: "AutoInno Systems",
  tagline: "Innovative Automations",
  theme: {
    primary: "#0F172A", // Deep Navy from Brand Identity
    accent: "#38BDF8",  // Precision Blue
    surface: "#F8FAFC"
  }
};

export default function AuditLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100">
      {/* 1. PROFESSIONAL NAVIGATION */}
      <nav className="max-w-7xl mx-auto px-6 py-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-xl">
            DB
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight leading-none uppercase">{BRAND.name}</h1>
            <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-1">
              {BRAND.firm}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <a href="/dashboard" className="hidden md:block text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
            System Dashboard
          </a>
          <a href="/offer" className="px-5 py-2.5 border-2 border-slate-900 rounded-full text-sm font-black hover:bg-slate-900 hover:text-white transition-all">
            View Offer →
          </a>
        </div>
      </nav>

      {/* 2. HERO: REVENUE-FIRST AUDIT */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-20 items-center">
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-black uppercase mb-8">
            <Zap className="w-3 h-3 fill-current" />
            2026 AI Infrastructure Active
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
            1-minute <br />
            <span className="text-slate-300 italic font-light">AI Business</span> <br />
            Audit.
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-12">
            Enter a business website and Instagram. Receive instant high-level insights 
            and a clear automation roadmap. Built like a real product, focused on 
            **revenue-first results**.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200">
              Get the Audit <ArrowRight className="w-6 h-6" />
            </button>
            <button className="px-10 py-5 bg-slate-100 text-slate-900 rounded-2xl font-bold text-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-3">
              <BarChart className="w-6 h-6" />
              Demo Data
            </button>
          </div>

          {/* DASHNEX STYLE CAPABILITIES BLOCK */}
          <div className="grid grid-cols-2 gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
             <div className="space-y-2">
                <ShieldCheck className="w-5 h-5 text-slate-900" />
                <p className="font-bold text-sm leading-tight">Lead Capture & Event Logging</p>
             </div>
             <div className="space-y-2">
                <Zap className="w-5 h-5 text-slate-900" />
                <p className="font-bold text-sm leading-tight">Fast Shipping & Clean UX</p>
             </div>
          </div>
        </section>

        {/* 3. AUTHORITY COMPONENT */}
        <aside className="relative">
          {/* Portrait Asset Integration */}
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-[12px] border-white">
            <div className="bg-slate-200 aspect-[4/5] flex items-center justify-center italic text-slate-400">
              {/* Insert Gemini_Generated_Image_3ctynt3ctynt3cty.jpg here */}
              [Dontay Beemon: AI Consultant Asset]
            </div>
            <div className="absolute bottom-0 inset-x-0 p-10 bg-gradient-to-t from-slate-900/90 to-transparent text-white">
               <p className="text-3xl font-black">{BRAND.name}</p>
               <p className="text-sky-400 font-bold tracking-widest uppercase text-xs">The Automations Expert</p>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-slate-100 rounded-full blur-3xl -z-10 opacity-60"></div>
        </aside>
      </main>

      {/* 4. FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-slate-400 italic">
            © {new Date().getFullYear()} {BRAND.name} — {BRAND.tagline}
          </p>
          <div className="flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Infrastructure</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}