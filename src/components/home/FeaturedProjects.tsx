"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS_DATA, ProjectItem } from "@/config/projects.data";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  MapPin,
  Calendar,
  CheckCircle,
  Maximize2,
  X,
} from "lucide-react";

export default function FeaturedProjects() {
  const { locale, direction } = useLanguage();
  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featured = PROJECTS_DATA.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-slate-800/80 pb-8">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2 font-mono">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {locale === "ar" ? "مشاريع تفخر بصناعتها أيدينا" : "Landmark Engineering Projects"}
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mt-2">
              {locale === "ar"
                ? "نماذج واقعية من أعمالنا المنفذة في جدة ومكة المكرمة وينبع للقطاعات الحكومية والتجارية والقصور الفاخرة."
                : "Real-world facades and architectural fabrications delivered across Jeddah, Makkah, and Yanbu."}
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition shrink-0"
          >
            <span>{locale === "ar" ? "استعراض كافة المشاريع مع الفلاتر" : "Explore All Projects with Filters"}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Visual Card Image / Architectural Rendering Container */}
              <div className="relative h-56 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#d4af3715_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Top Badges */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-amber-500/30 text-amber-400 text-xs font-semibold backdrop-blur-md">
                    {proj.categoryLabel[locale]}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {proj.year}
                  </span>
                </div>

                {/* Simulated Glass Reflection & Architectural Motif */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
                  <Building2 className="w-12 h-12 text-slate-700 group-hover:text-amber-400/80 transition-colors duration-300" />
                  <span className="text-xs text-slate-400 font-mono mt-2">
                    {proj.areaM2.toLocaleString()} م² مساحة منفذة
                  </span>
                </div>

                {/* Location Tag */}
                <div className="flex items-center gap-1.5 text-xs text-slate-300 z-10">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{proj.location[locale]}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {proj.title[locale]}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {proj.scopeOfWork[locale]}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80 mb-5">
                    {proj.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h[locale]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{locale === "ar" ? "عرض تفاصيل المشروع الكاملة" : "View Full Specs & Scope"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 end-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                {selectedProject.categoryLabel[locale]}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {selectedProject.year} • {selectedProject.location[locale]}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {selectedProject.title[locale]}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {selectedProject.description[locale]}
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-6">
              <div>
                <span className="text-[11px] text-slate-400 block">{locale === "ar" ? "العميل:" : "Client:"}</span>
                <span className="text-xs font-semibold text-white">{selectedProject.client[locale]}</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block">{locale === "ar" ? "المساحة المنفذة:" : "Executed Area:"}</span>
                <span className="text-xs font-semibold text-amber-400 font-mono">{selectedProject.areaM2.toLocaleString()} م²</span>
              </div>
            </div>

            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              {locale === "ar" ? "الأنظمة والمواصفات المعتمدة:" : "Systems & Specifications:"}
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.systemsUsed.map((sys, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 border border-slate-700">
                  {sys[locale]}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <Link
                href="/calculator"
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition"
              >
                {locale === "ar" ? "احسب تكلفة مشروع مشابه" : "Price Similar Project in 3D"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
