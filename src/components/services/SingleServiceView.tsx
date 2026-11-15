"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceDetail } from "@/config/services.data";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  Shield,
  Layers,
  Sparkles,
  Check,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function SingleServiceView({ service }: { service: ServiceDetail }) {
  const { locale, direction } = useLanguage();
  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-amber-400 transition">
            {locale === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-amber-400 transition">
            {locale === "ar" ? "الخدمات" : "Services"}
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">{service.title[locale]}</span>
        </div>

        {/* Hero Header */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold inline-block mb-4">
              {service.subtitle[locale]}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              {service.title[locale]}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              {service.longDesc[locale]}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/calculator?product=${service.calculatorType}`}
                className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center gap-2.5 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition"
              >
                <Calculator className="w-4 h-4 text-slate-950" />
                <span>{locale === "ar" ? "احسب تكلفة هذا المنتج بالـ 3D" : "Price This System in 3D"}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold flex items-center gap-2 border border-slate-700 transition"
              >
                <span>{locale === "ar" ? "استشارة مهندس المصنع" : "Consult Factory Engineer"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table & Systems */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Specifications Table */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8">
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Layers className="w-5 h-5 text-amber-400" />
              <span>{locale === "ar" ? "المواصفات الفنية المعتمدة" : "Technical Specifications"}</span>
            </h3>

            <div className="divide-y divide-slate-800/80">
              {service.specifications.map((spec, i) => (
                <div key={i} className="py-3.5 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">
                    {locale === "ar" ? spec.labelAr : spec.labelEn}
                  </span>
                  <span className="font-bold text-white text-end">
                    {locale === "ar" ? spec.valueAr : spec.valueEn}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-2 text-xs text-amber-400">
              <Shield className="w-4 h-4 shrink-0" />
              <span>
                {locale === "ar"
                  ? "كافة القطاعات مطابقة لاشتراطات كود البناء السعودي SBC وضمان 10 سنوات"
                  : "All profiles comply with Saudi Building Code (SBC) criteria with 10-year warranty"}
              </span>
            </div>
          </div>

          {/* Key Advantages Checklist */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8">
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{locale === "ar" ? "مميزات ومواصفات النظام" : "System Advantages"}</span>
            </h3>

            <div className="space-y-4">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 leading-snug">
                    {feat[locale]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Variants */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-white mb-6">
            {locale === "ar" ? "الأنظمة والخيارات الهندسية المتاحة:" : "Available System Variants:"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.systemVariants.map((sys, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 hover:border-amber-500/40 transition"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs font-mono mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">
                  {locale === "ar" ? sys.nameAr : sys.nameEn}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {locale === "ar" ? sys.descAr : sys.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications / Ideal For */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-white mb-2">
              {locale === "ar" ? "الاستخدامات المعمارية المثالية:" : "Ideal Architectural Applications:"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.idealFor.map((app, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-950 text-xs text-slate-300 border border-slate-800">
                  {app[locale]}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={`/calculator?product=${service.calculatorType}`}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shrink-0 flex items-center gap-2 shadow-lg transition"
          >
            <Calculator className="w-4 h-4" />
            <span>{locale === "ar" ? "تسعير فوري بالـ 3D" : "Instant 3D Quote"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
