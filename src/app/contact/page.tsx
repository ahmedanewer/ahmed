"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site.config";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const { locale, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "curtain_wall",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Pre-fill a WhatsApp message for seamless direct connect
    const waText = `*رسالة استفسار جديدة من الموقع الإلكتروني:*\n• الاسم: ${formData.name}\n• الجوال: ${formData.phone}\n• الخدمة: ${formData.service}\n• الرسالة: ${formData.message}`;
    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(waText)}`;
    setTimeout(() => {
      window.open(url, "_blank");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "قنوات التواصل المباشرة" : "Factory Direct Communication"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t.contact.pageTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            {t.contact.pageSubtitle}
          </p>
        </div>

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* Card 1: Direct Phone */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                {t.contact.phoneCardTitle}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                {locale === "ar" ? "اتصال هاتفي مباشر بقسم المبيعات" : "Direct phone line to sales engineering"}
              </p>
            </div>
            <a
              href={siteConfig.contact.phoneTelLink}
              className="text-base font-bold text-amber-400 hover:underline font-mono"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                {t.contact.whatsappCardTitle}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                {locale === "ar" ? "إرسال المخططات وطلب عروض الأسعار" : "Send blueprints & request quotations"}
              </p>
            </div>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1.5"
            >
              <span>{t.contact.whatsappPrompt}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Address & City */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                {t.contact.addressCardTitle}
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {siteConfig.contact.address[locale]}
              </p>
            </div>
            <a
              href={siteConfig.contact.address.googleMapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1.5"
            >
              <span>{t.contact.openInMaps}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Working Hours */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                {t.contact.hoursCardTitle}
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {siteConfig.contact.workingHours[locale]}
              </p>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {locale === "ar" ? "نستقبلكم في مقر المصنع" : "Factory Visitors Welcome"}
            </span>
          </div>
        </div>

        {/* Contact Form & Google Map Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Form */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {t.contact.formSubtitle}
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">
                  {t.contact.successMsg}
                </h4>
                <p className="text-xs text-slate-300">
                  {locale === "ar"
                    ? "تم فتح نافذة الواتساب لتحويل استفسارك إلى مهندس المبيعات فوراً."
                    : "Opening WhatsApp window to route your message to our project engineers."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {t.contact.yourName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="الاسم الثلاثي أو اسم الشركة"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      {t.contact.yourPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05xxxxxxxx"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-400 font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      {t.contact.yourEmail}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {t.contact.projectType}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-amber-400"
                  >
                    <option value="curtain_wall">واجهات كرتن وول زجاجية</option>
                    <option value="windows">نوافذ وأبواب ألمنيوم معزولة</option>
                    <option value="cladding">كلادينج مقاوم للحريق</option>
                    <option value="skylight">سماويات وقبب زجاجية</option>
                    <option value="pergola">برجولات ألمنيوم حديثة</option>
                    <option value="frameless">زجاج سيكوريت وفريملس</option>
                    <option value="steel">هياكل حديدية ومظلات</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {t.contact.message} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="اكتب تفاصيل المساحة التقديرية، الموقع في جدة، أو أي مواصفات خاصة..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-400 leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-95 transition"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submitBtn}</span>
                </button>
              </form>
            )}
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span>{t.contact.mapTitle}</span>
                </h3>
                <span className="text-xs text-slate-400">Jeddah, KSA</span>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {siteConfig.contact.address[locale]}
              </p>
            </div>

            {/* Google Map iFrame */}
            <div className="w-full h-[360px] rounded-2xl overflow-hidden border border-slate-800 relative bg-slate-950">
              <iframe
                title="Ahmed Abdulsamad Factory Map"
                src={siteConfig.contact.address.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>شارع المكرونة • المنطقة الصناعية</span>
              <a
                href={siteConfig.contact.address.googleMapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>{t.contact.openInMaps}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
