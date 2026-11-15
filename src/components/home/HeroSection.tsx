"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site.config";
import {
  Calculator,
  ArrowLeft,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  PhoneCall,
  Check,
} from "lucide-react";

// Dynamically import 3D Hero Canvas with SSR disabled
const HeroFacade3D = dynamic(() => import("@/components/3d/HeroFacade3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] sm:h-[500px] lg:h-[620px] rounded-3xl bg-slate-900/60 border border-slate-800 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-amber-500/30 border-t-amber-400 rounded-full animate-spin" />
        <span className="text-xs text-slate-400 font-mono">Loading 3D Facade Model...</span>
      </div>
    </div>
  ),
});

export default function HeroSection() {
  const { locale, t, direction } = useLanguage();
  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-slate-950">
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#33415518_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute -top-40 -start-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -end-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Text & CTA Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-start">
            {/* Top Factory Certification Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-semibold text-amber-300">
                {t.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-5">
              <span>{t.hero.titleMain}</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                {t.hero.titleAccent}
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mb-8">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <Link
                href="/calculator"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Calculator className="w-4 h-4 text-slate-950" />
                <span>{t.hero.ctaCalculate}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm flex items-center justify-center gap-2 transition"
              >
                <span>{t.hero.ctaProjects}</span>
              </Link>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-800/80 w-full max-w-lg">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>أسعار المصنع المباشرة بجدة</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>ضمان هيكلي شامل 10 سنوات</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>ماكينات CNC ألمانية بالكامل</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>شهادة إشغال معتمدة SBC</span>
              </div>
            </div>
          </div>

          {/* Right 3D Facade Interactive Viewport Column */}
          <div className="lg:col-span-6">
            <HeroFacade3D />
          </div>
        </div>
      </div>
    </section>
  );
}
