"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES_DATA } from "@/config/services.data";
import { ArrowLeft, ArrowRight, Layers, Calculator, Check, Sparkles } from "lucide-react";

export default function ServicesGrid() {
  const { locale, direction } = useLanguage();
  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 lg:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-slate-800/80 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{locale === "ar" ? "قطاعاتنا وتخصصاتنا الصناعية" : "Our Industrial Capabilities"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {locale === "ar"
                ? "حلول الواجهات والألمنيوم المعماري المتكاملة"
                : "Integrated Facade & Architectural Aluminum Systems"}
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mt-2">
              {locale === "ar"
                ? "ننتج في مصنعنا بجدة 8 خطوط إنتاج رئيسية تغطي كافة متطلبات المشاريع السكنية والتجارية والحكومية بأحدث المواصفات."
                : "Fabricating 8 core production lines in our Jeddah plant, meeting high-performance criteria for residential, commercial and institutional projects."}
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition shrink-0"
          >
            <span>{locale === "ar" ? "استعراض كافة التفاصيل والمواصفات" : "View All Technical Specs"}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.slug}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-1"
            >
              {/* Card Header & Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 text-amber-400 flex items-center justify-center font-bold text-sm font-mono group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    0{index + 1}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 px-2 py-0.5 rounded-full bg-slate-950 border border-slate-800">
                    SBC Compliant
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                  {service.title[locale]}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {service.shortDesc[locale]}
                </p>

                {/* Key Bullet Highlights */}
                <div className="flex flex-col gap-1.5 pt-3 border-t border-slate-800/80 mb-6">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat[locale]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-800">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition"
                >
                  <span>{locale === "ar" ? "التفاصيل" : "Specs"}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/calculator?product=${service.calculatorType}`}
                  className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 hover:text-amber-300 border border-amber-500/30 text-[11px] font-bold flex items-center gap-1 transition"
                >
                  <Calculator className="w-3 h-3" />
                  <span>{locale === "ar" ? "احسب سعره" : "Quote 3D"}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
