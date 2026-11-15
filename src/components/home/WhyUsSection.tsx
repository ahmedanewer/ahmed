"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Factory,
  FlameKindling,
  Cpu,
  ShieldAlert,
  Sparkles,
  FileCheck2,
} from "lucide-react";

export default function WhyUsSection() {
  const { locale, t } = useLanguage();

  const advantageIcons = [
    Factory,
    FlameKindling,
    Cpu,
    ShieldAlert,
    Sparkles,
    FileCheck2,
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 6 Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.whyUs.items.map((item, idx) => {
            const Icon = advantageIcons[idx] || Factory;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-slate-950/80 border border-slate-800/90 p-7 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
