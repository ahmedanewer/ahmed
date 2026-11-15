"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site.config";
import { SERVICES_DATA } from "@/config/services.data";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  CheckCircle,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const { locale, t } = useLanguage();
  const [currentYear, setCurrentYear] = React.useState("2026");

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm">
      {/* Top Value Assurance Ribbon */}
      <div className="border-b border-slate-800/60 bg-slate-900/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">{t.badges.warranty}</h4>
              <p className="text-[11px] text-slate-400">هيكل وعوازل مائية معتمدة</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">{t.badges.saso}</h4>
              <p className="text-[11px] text-slate-400">كود البناء السعودي SBC</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">{t.badges.saudiMade}</h4>
              <p className="text-[11px] text-slate-400">مصنع وطني في جدة</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">{t.badges.thermalBreak}</h4>
              <p className="text-[11px] text-slate-400">توفير حتى 40% طاقة</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Company Bio & Branding */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border-2 border-amber-500/70 flex items-center justify-center text-amber-400 font-extrabold text-xl font-mono shadow-md">
                {siteConfig.logo.monogramAr}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {siteConfig.name[locale]}
                </h3>
                <span className="text-xs text-amber-400 font-medium">
                  {siteConfig.shortName[locale]}
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-md">
              {siteConfig.description[locale]}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-600/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white transition text-xs font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب المبيعات</span>
              </a>

              <a
                href={siteConfig.contact.phoneTelLink}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-400 transition text-xs font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-amber-400 transition">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-400 transition">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-amber-400 font-semibold hover:underline flex items-center gap-1.5"
                >
                  <span>{t.nav.calculator}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300">
                    3D
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services Directory */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {t.footer.ourServices}
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              {SERVICES_DATA.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-amber-400 transition line-clamp-1"
                  >
                    {s.title[locale]}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-amber-400 hover:underline">
                  {locale === "ar" ? "عرض كافة الـ 8 خدمات..." : "View all 8 services..."}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {t.footer.contactInfo}
            </h4>
            <ul className="flex flex-col gap-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address[locale]}
                  <br />
                  <a
                    href={siteConfig.contact.address.googleMapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline inline-flex items-center gap-1 mt-1 font-medium"
                  >
                    <span>{locale === "ar" ? "موقع الخريطة" : "Google Maps"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={siteConfig.contact.phoneTelLink} className="hover:text-white font-mono">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.workingHours[locale]}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Tax Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            {t.footer.rightsReserved.replace("{year}", currentYear)}
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{t.footer.crNumber.replace("{cr}", siteConfig.contact.commercialRegister)}</span>
            <span>•</span>
            <span>{t.footer.vatNumber.replace("{vat}", siteConfig.contact.vatNumber)}</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">{t.footer.madeInJeddah}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
