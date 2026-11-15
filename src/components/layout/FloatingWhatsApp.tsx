"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const { locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      ar: "السلام عليكم، أود الاستفسار عن تفصيل واجهات كرتن وول لمشروع في جدة.",
      en: "Hello, I would like to inquire about curtain wall facades for a project in Jeddah.",
    },
    {
      ar: "السلام عليكم، أرغب في طلب رفع مقاسات ومعاينة لفيلا سكنية.",
      en: "Hello, I'd like to request a site survey and quotation for a private villa.",
    },
    {
      ar: "السلام عليكم، لدي مخططات وأود الحصول على عرض سعر مباشر من المصنع.",
      en: "Hello, I have drawings and would like to receive a direct factory quotation.",
    },
  ];

  const handleSendQuick = (text: string) => {
    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 start-6 z-50 flex flex-col items-start gap-3">
      {/* Interactive Popup Card */}
      {isOpen && (
        <div className="w-[310px] sm:w-[340px] rounded-2xl bg-slate-950/95 border border-emerald-500/30 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">
                  {locale === "ar" ? "خدمة عملاء المصنع" : "Factory Sales Desk"}
                </h4>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {siteConfig.contact.phoneDisplay}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-300 my-3 leading-relaxed">
            {locale === "ar"
              ? "مرحباً بك! تواصل مباشرة مع مهندس المبيعات والمشاريع عبر الواتساب لاختيار القطاعات والمقايسات."
              : "Welcome! Connect directly with our Jeddah factory sales engineers on WhatsApp for quotes and consultations."}
          </p>

          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] text-slate-400 font-medium">
              {locale === "ar" ? "اختر رسالة سريعة للبدء:" : "Select a quick prompt:"}
            </span>
            {quickMessages.map((msg, i) => (
              <button
                key={i}
                onClick={() => handleSendQuick(msg[locale])}
                className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-500/40 text-[11px] text-start text-slate-200 transition flex items-center justify-between group"
              >
                <span className="line-clamp-1">{msg[locale]}</span>
                <Send className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 shrink-0 ms-1 transition" />
              </button>
            ))}
          </div>

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{locale === "ar" ? "فتح المحادثة المباشرة" : "Open WhatsApp Chat"}</span>
          </a>
        </div>
      )}

      {/* Persistent Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="WhatsApp Contact"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/50 hover:scale-105 active:scale-95 transition-all"
      >
        <span className="absolute -top-1 -end-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300" />
        </span>
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="text-xs font-bold hidden sm:inline-block">
          {locale === "ar" ? "تواصل واتساب" : "WhatsApp"}
        </span>
      </button>
    </div>
  );
}
