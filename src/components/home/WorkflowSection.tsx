"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Compass,
  FileCode2,
  Cpu,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function WorkflowSection() {
  const { locale, t } = useLanguage();

  const stepIcons = [Compass, FileCode2, Cpu, CheckCircle2, ShieldCheck];

  return (
    <section className="py-20 lg:py-28 bg-slate-900/40 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.workflow.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t.workflow.title}
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            {t.workflow.subtitle}
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {t.workflow.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  {/* Step Header & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 text-amber-400 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-700 font-mono group-hover:text-amber-500/50 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[10px] text-amber-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    {locale === "ar" ? `المرحلة 0${idx + 1} المعتمدة` : `Stage 0${idx + 1} Verified`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
