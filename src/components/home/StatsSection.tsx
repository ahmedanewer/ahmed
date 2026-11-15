"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site.config";
import { Building, Award, Shield, CheckCircle, TrendingUp } from "lucide-react";

export default function StatsSection() {
  const { locale, t } = useLanguage();

  const statItems = [
    {
      value: `${siteConfig.stats.yearsExperience}+`,
      label: t.stats.experience,
      sub: locale === "ar" ? "منذ عام 2011 في جدة" : "Since 2011 in Jeddah",
      icon: TrendingUp,
    },
    {
      value: `${siteConfig.stats.completedProjects.toLocaleString()}+`,
      label: t.stats.projects,
      sub: locale === "ar" ? "حكومي وتجاري وسكني" : "Gov, Commercial & Villas",
      icon: Building,
    },
    {
      value: `${(siteConfig.stats.fabricatedAreaM2 / 1000).toFixed(0)}K+`,
      label: t.stats.area,
      sub: locale === "ar" ? "واجهات ونوافذ معمارية" : "Architectural Facades",
      icon: CheckCircle,
    },
    {
      value: `${siteConfig.stats.clientSatisfactionRate}%`,
      label: t.stats.satisfaction,
      sub: locale === "ar" ? "تقييم ثقة المطورين والملاك" : "Client Trust Score",
      icon: Award,
    },
    {
      value: `${siteConfig.stats.warrantyYears} ${locale === "ar" ? "سنوات" : "Yrs"}`,
      label: t.stats.warranty,
      sub: locale === "ar" ? "شهادة رسمية موثقة" : "Written Certified Policy",
      icon: Shield,
    },
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x lg:rtl:divide-x-reverse divide-slate-800/80">
          {statItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${
                  idx > 0 ? "pt-4 lg:pt-0" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs font-bold text-slate-200 mt-1">
                  {item.label}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5">
                  {item.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
