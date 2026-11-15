"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site.config";
import {
  Factory,
  Cpu,
  ShieldCheck,
  Award,
  Users,
  Compass,
  Building,
  CheckCircle,
  Calculator,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "الصرح الصناعي بجدة" : "Industrial Factory in Jeddah"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {locale === "ar"
              ? "عن شركة أحمد عبد الصمد للألمنيوم والزجاج"
              : "About Ahmed Abdulsamad Aluminum & Glass Co."}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            {siteConfig.tagline[locale]}
          </p>
        </div>

        {/* Story & Factory Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-7 space-y-5 text-start">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
              OUR INDUSTRIAL HERITAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {locale === "ar"
                ? "أكثر من 15 عاماً من الريادة الصناعية في واجهات المباني والألمنيوم المعماري"
                : "Over 15 Years of Engineering Excellence in Facades & Architectural Aluminum"}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {locale === "ar"
                ? "تأسس مصنع شركة أحمد عبد الصمد للألمنيوم والزجاج في مدينة جدة ليكون رافداً صناعياً وطنياً يقدم حلول الواجهات المعمارية المتقدمة. على مدار أكثر من عقد ونصف، نفذنا مئات المشاريع الكبرى للأبراج والمباني الحكومية والمستشفيات والقصور السكنية الفاخرة في شتى مناطق المملكة العربية السعودية."
                : "Ahmed Abdulsamad Aluminum & Glass factory was founded in Jeddah to provide premium architectural envelopes. Across more than a decade and a half, we have engineered hundreds of commercial towers, government facilities, medical centers, and palatial residences."}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {locale === "ar"
                ? "نعتمد في مصنعنا على أحدث ماكينات القص والتفريز بالتحكم الرقمي (CNC)، وأفران تقسية ومعالجة الزجاج، ونظام رقابة جودة سباعي المراحل يضمن خلو كل قطعة من أي تسريب هوائي أو مائي، مع مطابقة تامة لاشتراطات كود البناء السعودي ودعم مستهدفات رؤية المملكة 2030 في توطين الصناعات المعمارية المتقدمة."
                : "Equipped with state-of-the-art CNC machining centers, precision glass processing lines, and seven-stage quality controls ensuring total water and acoustic insulation conforming with Saudi Building Code (SBC)."}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-2xl font-black text-amber-400 font-mono block">
                  {siteConfig.stats.yearsExperience}+
                </span>
                <span className="text-xs text-slate-300 font-bold">
                  {locale === "ar" ? "عاماً من الخبرة المتراكمة" : "Years Industrial Experience"}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-2xl font-black text-amber-400 font-mono block">
                  {siteConfig.stats.completedProjects.toLocaleString()}+
                </span>
                <span className="text-xs text-slate-300 font-bold">
                  {locale === "ar" ? "مشروعاً منجزاً بنجاح" : "Delivered Landmarks"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Badge Card */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-slate-800 p-8 shadow-2xl relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-slate-950 border-2 border-amber-500/70 flex items-center justify-center text-amber-400 font-extrabold text-2xl font-mono mb-6 shadow-md">
              {siteConfig.logo.monogramAr}
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              {siteConfig.name[locale]}
            </h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              {siteConfig.description[locale]}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>سجل تجاري: {siteConfig.contact.commercialRegister}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>الرقم الضريبي: {siteConfig.contact.vatNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>عضوية الغرفة التجارية الصناعية بجدة</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Factory Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">ماكينات CNC ألمانية</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              قص وتفريز بالكمبيوتر بدقة مليمترية تمنع أي صفير هواء أو تسرب مياه.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">كود البناء السعودي</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              مطابقة تامة لمتطلبات العزل الحراري (U-Value) وشهادة إشغال المبنى.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">ضمان ذهبي 10 سنوات</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              شهادة ضمان معتمدة على الهيكل الإنشائي ومانعية تسرب المياه لراحة بالك.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">فريق هندسي متخصص</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              مهندسون استشاريون لمراجعة المخططات ورفع المقاسات الميدانية بالليزر.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {locale === "ar" ? "هل لديك مشروع وترغب في تسعيره فوراً؟" : "Have a Project Ready for Fabrication?"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {locale === "ar"
                ? "استخدم حاسبتنا التفاعلية للحصول على عرض سعر فوري وموديل 3D للمشروع."
                : "Utilize our 3D parametric configurator for immediate factory pricing."}
            </p>
          </div>

          <Link
            href="/calculator"
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shrink-0 flex items-center gap-2 shadow-lg transition"
          >
            <Calculator className="w-4 h-4" />
            <span>{locale === "ar" ? "الانتقال إلى حاسبة الأسعار" : "Launch 3D Configurator"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
