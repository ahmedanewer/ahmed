"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site.config";
import { Calculator, MessageCircle, Phone, ArrowLeft, ArrowRight } from "lucide-react";

export default function FinalCtaSection() {
  const { t, direction } = useLanguage();
  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold inline-block mb-4 shadow-sm">
          {t.finalCta.badge}
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
          {t.finalCta.title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.finalCta.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/calculator"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Calculator className="w-5 h-5 text-slate-950" />
            <span>{t.finalCta.btnCalculate}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-900/30 hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t.finalCta.btnWhatsApp}</span>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Phone className="w-4 h-4 text-amber-400" />
          <span>
            {t.finalCta.phoneDirect} (
            <a href={siteConfig.contact.phoneTelLink} className="text-slate-200 hover:text-white font-mono underline">
              {siteConfig.contact.phoneDisplay}
            </a>
            )
          </span>
        </div>
      </div>
    </section>
  );
}
