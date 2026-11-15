"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES_DATA } from "@/config/services.data";
import { ArrowLeft, ArrowRight, Calculator, Check, Sparkles } from "lucide-react";

export default function ServicesPage() {
  const { locale, direction, t } = useLanguage();
  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "خدماتنا وقطاعاتنا الهندسية" : "Engineered Architectural Solutions"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {locale === "ar"
              ? "تصنيع وتوريد واجهات الألمنيوم والزجاج"
              : "Fabrication & Engineering of Aluminum & Glass Systems"}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            {locale === "ar"
              ? "حلول شاملة للواجهات المعمارية المعتمدة مطابقة لمواصفات كود البناء السعودي مع خطوط إنتاج متطورة تضمن دقة التنفيذ والعزل الصوتي والحراري."
              : "Comprehensive facade and aluminum systems compliant with Saudi Building Code (SBC) engineered for superior thermal and acoustic performance."}
          </p>
        </div>

        {/* 8 Services Comprehensive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.slug}
              className="rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-500/50 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-amber-400 font-mono px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    قطاع 0{idx + 1}
                  </span>
                  <span className="text-xs text-slate-400">
                    سبيكة 6063-T6 معتمدة
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                  {srv.title[locale]}
                </h2>
                <h3 className="text-xs font-semibold text-slate-400 mb-4">
                  {srv.subtitle[locale]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {srv.shortDesc[locale]}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-8 pt-4 border-t border-slate-800/80">
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat[locale]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-5 border-t border-slate-800">
                <Link
                  href={`/services/${srv.slug}`}
                  className="text-xs font-bold text-white hover:text-amber-400 flex items-center gap-1.5 transition"
                >
                  <span>{locale === "ar" ? "قراءة المواصفات والأنظمة الكاملة" : "Full Technical Specifications"}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>

                <Link
                  href={`/calculator?product=${srv.calculatorType}`}
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>{locale === "ar" ? "احسب تكلفته" : "3D Estimate"}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
