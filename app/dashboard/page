"use client";

import React from 'react';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  ArrowLeft, 
  Database, 
  ExternalLink,
  Activity,
  Workflow
} from 'lucide-react';

/**
 * BRAND CONFIGURATION
 * Dontay Beemon AutoInno
 */
const BRAND = {
  name: "Dontay Beemon",
  firm: "AutoInno Systems",
  tagline: "The Automations Expert",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      {/* 1. TOP NAV / BREADCRUMBS */}
      <nav className="border-b border-slate-100 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="group flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Exit to Site
          </a>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-slate-900 rounded flex items-center justify-center text-white font-black text-[10px]">DB</div>
            <span className="text-xs font-black uppercase tracking-widest">{BRAND.firm}</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* 2. HEADER SECTION */}
        <header className="mb-12">
          <h1 className="text-5xl font-black tracking-tighter mb-4">System <span className="text-slate-300">Overview.</span></h1>
          <p className="text-lg text-slate-500 max-w-2xl font-medium leading-relaxed">
            Infrastructure performance for the 1-minute AI Business Audit. 
            This view validates event logging, lead capture velocity, and revenue-first funnel thinking.
          </p>
        </header>

        {/* 3. CORE METRICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Stat 
            label="Total Traffic" 
            value="Active" 
            sub="Connect Analytics" 
            icon={<Users className="w-5 h-5 text-sky-500" />} 
          />
          <Stat 
            label="Checkouts" 
            value="Enabled" 
            sub="Logging via /api/lead" 
            icon={<BarChart3 className="w-5 h-5 text-emerald-500" />} 
          />
          <Stat 
            label="Est. Revenue" 
            value="$0.00" 
            sub="Demo Mode Active" 
            icon={<DollarSign className="w-5 h-5 text-slate-400" />} 
          />
        </div>

        {/* 4. UPGRADE BLUEPRINT CARD */}
        <section className="bg-slate-50 rounded-[2.5rem] border border-slate-100 p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Workflow className="text-slate-900" />
                Infrastructure Roadmap
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <Database className="w-6 h-6 text-sky-500 shrink-0" />
                  <div>
                    <p className="font-black text-sm">Google Sheets Integration</p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Use Apps Script webhooks to mirror lead capture events for zero-cost DB management.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <Activity className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <p className="font-black text-sm">Real-time Lead Rendering</p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Dynamically fetch and map event rows to this dashboard for live audit tracking.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-80 bg-slate-900 rounded-3xl p-8 text-white">
              <p className="text-sky-400 text-[10px] font-black uppercase tracking-widest mb-2 italic">Professional Profile</p>
              <p className="text-xl font-black leading-tight mb-4">{BRAND.name}</p>
              <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">
                AI Consultant specializing in innovative automations and revenue-first funnels.
              </p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                Consultant Portal <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 pb-12 opacity-30 text-[10px] font-black uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} {BRAND.firm} — {BRAND.tagline}
      </footer>
    </div>
  );
}

/**
 * REUSABLE STAT COMPONENT (Pure JS)
 */
function Stat({ label, value, sub, icon }) {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Live</span>
      </div>
      <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
      <p className="text-3xl font-black tracking-tighter mb-1">{value}</p>
      <p className="text-xs font-bold text-slate-400 italic">{sub}</p>
    </div>
  );
}