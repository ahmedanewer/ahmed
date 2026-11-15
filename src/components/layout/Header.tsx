"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site.config";
import { SERVICES_DATA } from "@/config/services.data";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Calculator,
  Building2,
  Sparkles,
  Globe,
} from "lucide-react";

export default function Header() {
  const { locale, direction, toggleLocale, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    {
      href: "/services",
      label: t.nav.services,
      hasDropdown: true,
    },
    { href: "/projects", label: t.nav.projects },
    {
      href: "/calculator",
      label: t.nav.calculator,
      highlight: true,
    },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-2.5"
          : "bg-slate-950/60 backdrop-blur-sm border-b border-slate-800/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Monogram */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Architectural Monogram Badge */}
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border-2 border-amber-500/70 shadow-lg shadow-amber-500/10 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <span className="text-amber-400 font-extrabold text-lg tracking-wider font-mono">
                {siteConfig.logo.monogramAr}
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-400/10 to-transparent pointer-events-none" />
            </div>

            {/* Company Name & Slogan */}
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight group-hover:text-amber-400 transition-colors">
                {locale === "ar" ? siteConfig.name.ar : siteConfig.name.en}
              </span>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-block">
                {locale === "ar"
                  ? "مصنع الواجهات والألمنيوم المعماري • جدة"
                  : "Architectural Aluminum & Facade Factory • Jeddah"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <Link
                      href="/services"
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "text-amber-400 bg-slate-900/80 border border-amber-500/20"
                          : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </Link>

                    {/* Services Dropdown Mega Menu */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full start-0 w-[420px] p-3 rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-xl grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {SERVICES_DATA.map((srv) => (
                          <Link
                            key={srv.slug}
                            href={`/services/${srv.slug}`}
                            className="p-2.5 rounded-xl hover:bg-slate-900/90 border border-transparent hover:border-slate-800 transition flex flex-col group/item"
                          >
                            <span className="text-xs font-semibold text-slate-200 group-hover/item:text-amber-400 transition-colors">
                              {srv.title[locale]}
                            </span>
                            <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                              {srv.subtitle[locale]}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.highlight) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>{link.label}</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950" />
                    </span>
                  </Link>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-amber-400 bg-slate-900/80 border border-amber-500/20"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Controls (Language switch, Phone call, Mobile toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              title={locale === "ar" ? "Switch to English" : "التحويل للغة العربية"}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-xs font-semibold text-slate-300 hover:text-white transition shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{locale === "ar" ? "EN" : "العربية"}</span>
            </button>

            {/* Direct Phone Call Button */}
            <a
              href={siteConfig.contact.phoneTelLink}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-xs font-medium text-slate-200 hover:text-amber-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono">{siteConfig.contact.phoneDisplay}</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950/95 border-b border-slate-800 p-5 shadow-2xl backdrop-blur-2xl flex flex-col gap-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`p-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                pathname === link.href
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                  : "text-slate-200 hover:bg-slate-900"
              }`}
            >
              <span>{link.label}</span>
              {link.highlight && (
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-amber-400 text-slate-950 font-bold">
                  3D
                </span>
              )}
            </Link>
          ))}

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={siteConfig.contact.phoneTelLink}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center gap-2 text-sm text-slate-200 font-mono"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center gap-2 text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة واتساب سريعة</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
