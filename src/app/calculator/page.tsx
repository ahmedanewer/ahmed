"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import { useQuoteCalculator } from "@/context/QuoteCalculatorContext";
import { PRICING_CONFIG, ProductType, OpeningType, SystemTier, GlassType, FinishType } from "@/config/pricing.config";
import { siteConfig } from "@/config/site.config";
import { generateQuotePDF } from "@/utils/pdfGenerator";
import {
  Calculator,
  Plus,
  Trash2,
  Copy,
  Download,
  Share2,
  MessageCircle,
  RotateCcw,
  AlertCircle,
  Building,
  Home,
  Store,
  Layers,
  Check,
  ChevronRight,
  Eye,
  Sliders,
  ShieldCheck,
  Truck,
  Sparkles,
  Info,
} from "lucide-react";

// Dynamically import 3D Configurator with SSR disabled
const Configurator3D = dynamic(() => import("@/components/3d/Configurator3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] sm:h-[450px] lg:h-[520px] rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-amber-500/30 border-t-amber-400 rounded-full animate-spin" />
        <span className="text-xs text-slate-400 font-mono">Loading 3D Configurator...</span>
      </div>
    </div>
  ),
});

export default function CalculatorPage() {
  const { locale, t } = useLanguage();
  const {
    projectScope,
    setProjectScope,
    items,
    calculatedItems,
    activeItemIndex,
    setActiveItemIndex,
    activeItem,
    activeCalculatedItem,
    includeInstallation,
    setIncludeInstallation,
    selectedCityId,
    setSelectedCityId,
    customerInfo,
    setCustomerInfo,
    totals,
    addItem,
    updateItem,
    removeItem,
    duplicateItem,
    resetProject,
    loadPreset,
    getWhatsAppShareUrl,
    getShareableLink,
  } = useQuoteCalculator();

  const [shareCopied, setShareCopied] = useState(false);
  const [showDimensions, setShowDimensions] = useState(true);

  // Auto-select product from URL query param if present
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const prod = params.get("product") as ProductType;
      if (prod && PRICING_CONFIG.basePricePerM2[prod]) {
        updateItem(activeItemIndex, { productType: prod });
      }
    }
  }, []);

  const selectedCityName =
    PRICING_CONFIG.deliveryCities.find((c) => c.id === selectedCityId)?.[
      locale === "ar" ? "nameAr" : "nameEn"
    ] || "جدة";

  const handleShare = () => {
    const link = getShareableLink();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(link);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 3000);
    }
  };

  const handleDownloadPDF = () => {
    generateQuotePDF({
      items: calculatedItems,
      totals,
      customerInfo,
      projectScope,
      selectedCityName,
      locale,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D Interactive Project Estimator</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t.calc.pageTitle}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl mx-auto">
            {t.calc.pageSubtitle}
          </p>

          {/* Legal Disclaimer Pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-medium max-w-2xl">
            <Info className="w-4 h-4 shrink-0 text-amber-400" />
            <span>{t.calc.disclaimerNotice}</span>
          </div>
        </div>

        {/* Project Scope & Quick Presets Toolbar */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4 shadow-lg">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-300 me-2">
              {t.calc.projectScopeLabel}:
            </span>
            {(
              [
                { id: "villa", label: t.calc.projectScopes.villa, icon: Home },
                { id: "apartment", label: t.calc.projectScopes.apartment, icon: Layers },
                { id: "shop", label: t.calc.projectScopes.shop, icon: Store },
                { id: "building_facade", label: t.calc.projectScopes.building_facade, icon: Building },
              ] as const
            ).map((scope) => {
              const Icon = scope.icon;
              const isSelected = projectScope === scope.id;
              return (
                <button
                  key={scope.id}
                  onClick={() => loadPreset(scope.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                    isSelected
                      ? "bg-amber-400 text-slate-950 shadow-md font-bold"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{scope.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={resetProject}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.calc.btnReset}</span>
            </button>
          </div>
        </div>

        {/* Main Workspace Split: Left (3D Viewer) / Right (Active Item Editor) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Interactive 3D Configurator */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <h3 className="text-sm font-bold text-white">
                  {t.calc.previewIn3D}:{" "}
                  <span className="text-amber-400">{activeItem?.name}</span>
                </h3>
              </div>
              <button
                onClick={() => setShowDimensions(!showDimensions)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>{showDimensions ? "إخفاء الأبعاد" : "إظهار الأبعاد"}</span>
              </button>
            </div>

            {/* 3D Canvas */}
            {activeItem && (
              <Configurator3D
                productType={activeItem.productType}
                openingType={activeItem.openingType}
                systemTier={activeItem.systemTier}
                glassType={activeItem.glassType}
                finishType={activeItem.finishType}
                width={activeItem.width}
                height={activeItem.height}
                showDimensions={showDimensions}
              />
            )}

            {/* Active Item Cost Breakdown Bar */}
            {activeCalculatedItem && (
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between shadow-md">
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">
                    {t.calc.itemTotal} ({activeCalculatedItem.quantity}{" "}
                    {locale === "ar" ? "قطع" : "pcs"})
                  </span>
                  <span className="text-lg font-black text-amber-400 font-mono">
                    {activeCalculatedItem.totalPriceSAR.toLocaleString()}{" "}
                    {PRICING_CONFIG.currency.symbolAr}
                  </span>
                  {activeCalculatedItem.isMinChargeApplied && (
                    <span className="text-[10px] text-amber-400/80 block mt-0.5">
                      {t.calc.minChargeApplied}
                    </span>
                  )}
                </div>

                <div className="text-end">
                  <span className="text-[11px] text-slate-400 block">سعر الوحدة:</span>
                  <span className="text-sm font-bold text-slate-200 font-mono">
                    {activeCalculatedItem.unitPriceSAR.toLocaleString()} ر.س
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Active Item Customization Controls */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {activeItem ? (
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-xs font-mono font-bold">
                      #{activeItemIndex + 1}
                    </span>
                    <input
                      type="text"
                      value={activeItem.name}
                      onChange={(e) =>
                        updateItem(activeItemIndex, { name: e.target.value })
                      }
                      className="bg-transparent text-sm font-bold text-white border-b border-dashed border-slate-700 focus:border-amber-400 outline-none px-1 py-0.5"
                    />
                  </div>
                  <span className="text-xs text-slate-400">
                    {activeItem.width}م × {activeItem.height}م ={" "}
                    {(activeItem.width * activeItem.height).toFixed(2)} م²
                  </span>
                </div>

                {/* 1. Product Type Selector */}
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-2">
                    1. {t.calc.itemType}:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {(
                      [
                        "curtain_wall",
                        "window",
                        "sliding_door",
                        "door",
                        "skylight",
                        "pergola",
                        "frameless_glass",
                        "cladding",
                      ] as ProductType[]
                    ).map((type) => (
                      <button
                        key={type}
                        onClick={() =>
                          updateItem(activeItemIndex, { productType: type })
                        }
                        className={`p-2.5 rounded-xl text-xs font-semibold transition text-start border ${
                          activeItem.productType === type
                            ? "bg-amber-400 text-slate-950 border-amber-400 shadow-md"
                            : "bg-slate-800 text-slate-300 border-slate-700/80 hover:bg-slate-700"
                        }`}
                      >
                        {t.products[type]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Opening Mechanism */}
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-2">
                    2. {t.calc.openingType}:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {(
                      [
                        "fixed",
                        "sliding",
                        "casement",
                        "tilt_turn",
                        "folding",
                        "louvered",
                      ] as OpeningType[]
                    ).map((opening) => (
                      <button
                        key={opening}
                        onClick={() =>
                          updateItem(activeItemIndex, { openingType: opening })
                        }
                        className={`p-2 rounded-xl text-xs font-medium transition text-start border ${
                          activeItem.openingType === opening
                            ? "bg-amber-400/20 text-amber-300 border-amber-400"
                            : "bg-slate-800/80 text-slate-400 border-slate-700/60 hover:text-white"
                        }`}
                      >
                        {t.openings[opening].split("(")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Width & Height Dimension Sliders + Number Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                  {/* Width Input */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-300">
                        {t.calc.widthMeters}:
                      </label>
                      <input
                        type="number"
                        min="0.5"
                        max="15.0"
                        step="0.1"
                        value={activeItem.width}
                        onChange={(e) =>
                          updateItem(activeItemIndex, {
                            width: parseFloat(e.target.value) || 0.5,
                          })
                        }
                        className="w-16 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400 text-center font-mono outline-none"
                      />
                    </div>
                    <input
                      type="range"
                      min="0.6"
                      max="10.0"
                      step="0.1"
                      value={activeItem.width}
                      onChange={(e) =>
                        updateItem(activeItemIndex, {
                          width: parseFloat(e.target.value),
                        })
                      }
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                      <span>0.6m</span>
                      <span>5.0m</span>
                      <span>10.0m</span>
                    </div>
                  </div>

                  {/* Height Input */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-300">
                        {t.calc.heightMeters}:
                      </label>
                      <input
                        type="number"
                        min="0.5"
                        max="8.0"
                        step="0.1"
                        value={activeItem.height}
                        onChange={(e) =>
                          updateItem(activeItemIndex, {
                            height: parseFloat(e.target.value) || 0.5,
                          })
                        }
                        className="w-16 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400 text-center font-mono outline-none"
                      />
                    </div>
                    <input
                      type="range"
                      min="0.6"
                      max="6.0"
                      step="0.1"
                      value={activeItem.height}
                      onChange={(e) =>
                        updateItem(activeItemIndex, {
                          height: parseFloat(e.target.value),
                        })
                      }
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                      <span>0.6m</span>
                      <span>3.0m</span>
                      <span>6.0m</span>
                    </div>
                  </div>
                </div>

                {/* 4. Aluminum System Profile Tier */}
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-2">
                    3. {t.calc.systemTier}:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {(["economy", "standard", "premium"] as SystemTier[]).map((tier) => (
                      <button
                        key={tier}
                        onClick={() => updateItem(activeItemIndex, { systemTier: tier })}
                        className={`p-2.5 rounded-xl text-xs font-semibold transition text-start border ${
                          activeItem.systemTier === tier
                            ? "bg-amber-400/20 text-amber-300 border-amber-400"
                            : "bg-slate-800/80 text-slate-400 border-slate-700/60 hover:text-white"
                        }`}
                      >
                        <span className="block font-bold">
                          {tier === "economy"
                            ? "اقتصادي (1.8مم)"
                            : tier === "standard"
                            ? "قياسي عازل (2.0مم)"
                            : "فاخر تكنال/شوكو"}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          {tier === "economy"
                            ? "قطاع محلي معتمد"
                            : tier === "standard"
                            ? "Thermal Break سرايا"
                            : "أنظمة أوروبية معتمدة"}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Glass Type Specification */}
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-2">
                    4. {t.calc.glassType}:
                  </label>
                  <select
                    value={activeItem.glassType}
                    onChange={(e) =>
                      updateItem(activeItemIndex, {
                        glassType: e.target.value as GlassType,
                      })
                    }
                    className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 outline-none focus:border-amber-400"
                  >
                    {(
                      [
                        "single_6mm",
                        "double_24mm",
                        "double_low_e",
                        "laminated_sound",
                        "tinted_solar",
                      ] as GlassType[]
                    ).map((gt) => (
                      <option key={gt} value={gt}>
                        {t.glasses[gt]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 6. Color & Surface Coating */}
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-2">
                    5. {t.calc.finishType}:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(
                      [
                        "powder_coat",
                        "powder_special",
                        "anodized",
                        "wood_sublimation",
                      ] as FinishType[]
                    ).map((finish) => (
                      <button
                        key={finish}
                        onClick={() =>
                          updateItem(activeItemIndex, { finishType: finish })
                        }
                        className={`p-2 rounded-xl text-xs font-medium transition text-start border ${
                          activeItem.finishType === finish
                            ? "bg-amber-400/20 text-amber-300 border-amber-400"
                            : "bg-slate-800/80 text-slate-400 border-slate-700/60 hover:text-white"
                        }`}
                      >
                        {t.finishes[finish].split("(")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 7. Quantity Stepper */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-bold text-slate-300">{t.calc.quantity}:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateItem(activeItemIndex, {
                          quantity: Math.max(1, activeItem.quantity - 1),
                        })
                      }
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-white font-mono">
                      {activeItem.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateItem(activeItemIndex, {
                          quantity: activeItem.quantity + 1,
                        })
                      }
                      className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Bill of Quantities (BOQ) Table */}
        <div className="mb-12 rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>{t.calc.itemsTableTitle}</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono">
                  {items.length} {locale === "ar" ? "بنود" : "items"}
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {locale === "ar"
                  ? "انقر على أي بند لمعاينته مباشرة في نموذج الـ 3D وتعديل مواصفاته"
                  : "Click any item to view in 3D and adjust its live parameters"}
              </p>
            </div>

            <button
              onClick={() => addItem()}
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/10 transition"
            >
              <Plus className="w-4 h-4" />
              <span>{t.calc.addNewItem}</span>
            </button>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-start">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 text-center">{t.calc.tableColIndex}</th>
                  <th className="py-3 px-4">{t.calc.tableColType}</th>
                  <th className="py-3 px-4 text-center">{t.calc.tableColDimensions}</th>
                  <th className="py-3 px-4 text-center">{t.calc.tableColArea}</th>
                  <th className="py-3 px-4">{t.calc.tableColSpecs}</th>
                  <th className="py-3 px-4 text-center">{t.calc.tableColQty}</th>
                  <th className="py-3 px-4 text-end">{t.calc.tableColUnitPrice}</th>
                  <th className="py-3 px-4 text-end">{t.calc.tableColTotal}</th>
                  <th className="py-3 px-4 text-center">إجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {calculatedItems.map((item, idx) => {
                  const isActive = activeItemIndex === idx;
                  return (
                    <tr
                      key={item.id}
                      onClick={() => setActiveItemIndex(idx)}
                      className={`cursor-pointer transition-colors ${
                        isActive
                          ? "bg-amber-500/10 hover:bg-amber-500/15"
                          : "hover:bg-slate-800/40"
                      }`}
                    >
                      <td className="py-3.5 px-4 text-center font-bold text-slate-400 font-mono">
                        {idx + 1}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-white flex items-center gap-1.5">
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                          )}
                          <span>{item.name}</span>
                        </div>
                        <span className="text-[11px] text-slate-400">
                          {t.products[item.productType]} ({t.openings[item.openingType].split("(")[0]})
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono text-slate-300">
                        {item.width} × {item.height}
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono text-slate-300">
                        {item.areaM2} م²
                      </td>
                      <td className="py-3.5 px-4 text-[11px] text-slate-300">
                        <span className="block text-slate-200">
                          {item.systemTier.toUpperCase()}
                        </span>
                        <span className="text-slate-400 block">
                          {t.glasses[item.glassType].split("(")[0]}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-white font-mono">
                        {item.quantity}
                      </td>
                      <td className="py-3.5 px-4 text-end font-mono text-slate-300">
                        {item.unitPriceSAR.toLocaleString()} ر.س
                      </td>
                      <td className="py-3.5 px-4 text-end font-bold text-amber-400 font-mono text-sm">
                        {item.totalPriceSAR.toLocaleString()} ر.س
                      </td>
                      <td className="py-3.5 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => duplicateItem(idx)}
                            title={t.calc.duplicateItem}
                            className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => removeItem(idx)}
                            title={t.calc.deleteItem}
                            className="p-1.5 rounded hover:bg-red-950 text-slate-400 hover:text-red-400 transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Project Totals Summary & Official Quote Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Client Details Form */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-amber-400" />
              <span>{t.calc.customerInfo}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.calc.fullName}
                </label>
                <input
                  type="text"
                  placeholder="مثال: المهندس أحمد الحربي"
                  value={customerInfo.name}
                  onChange={(e) =>
                    setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.calc.phone}
                </label>
                <input
                  type="tel"
                  placeholder="05xxxxxxxx"
                  value={customerInfo.phone}
                  onChange={(e) =>
                    setCustomerInfo((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-400 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.calc.deliveryCity}
                </label>
                <select
                  value={selectedCityId}
                  onChange={(e) => setSelectedCityId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-amber-400"
                >
                  {PRICING_CONFIG.deliveryCities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city[locale === "ar" ? "nameAr" : "nameEn"]} (
                      {city.feeSAR === 0 ? "مجاني" : `+${city.feeSAR} ر.س`})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.calc.city}
                </label>
                <input
                  type="text"
                  placeholder="مثال: جدة - حي الشاطئ"
                  value={customerInfo.city}
                  onChange={(e) =>
                    setCustomerInfo((prev) => ({ ...prev, city: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">
                {t.calc.notes}
              </label>
              <textarea
                rows={2}
                placeholder="أي تفاصيل خاصة بالمقايسات أو موعد استلام الموقع..."
                value={customerInfo.notes}
                onChange={(e) =>
                  setCustomerInfo((prev) => ({ ...prev, notes: e.target.value }))
                }
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-400"
              />
            </div>

            {/* Installation Toggle */}
            <div className="pt-2 flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-xs font-bold text-white block">
                    {t.calc.includeInstallation}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    شامل سيليكون داو كورنينغ والوزن الهيدروليكي وضمان التركيب
                  </span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={includeInstallation}
                onChange={(e) => setIncludeInstallation(e.target.checked)}
                className="w-5 h-5 accent-amber-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Totals Summary Card & Action Buttons */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-7 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
              {t.calc.projectSummary}
            </h3>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>{t.calc.itemsCount}</span>
                <span className="font-mono font-bold text-white">
                  {totals.itemsCount} قطعة ({totals.totalAreaM2} م²)
                </span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>{t.calc.itemsSubtotal}</span>
                <span className="font-mono font-bold text-white">
                  {totals.itemsSubtotalSAR.toLocaleString()} ر.س
                </span>
              </div>

              {includeInstallation && (
                <div className="flex justify-between text-slate-300">
                  <span>{t.calc.installationFee} (10%)</span>
                  <span className="font-mono font-bold text-white">
                    {totals.installationFeeSAR.toLocaleString()} ر.س
                  </span>
                </div>
              )}

              <div className="flex justify-between text-slate-300">
                <span>
                  {t.calc.deliveryFee} ({selectedCityName})
                </span>
                <span className="font-mono font-bold text-white">
                  {totals.deliveryFeeSAR === 0 ? "مجاني" : `${totals.deliveryFeeSAR.toLocaleString()} ر.س`}
                </span>
              </div>

              <div className="flex justify-between text-slate-300 pt-2 border-t border-slate-800">
                <span>{t.calc.vat15}</span>
                <span className="font-mono font-bold text-white">
                  {totals.vatAmountSAR.toLocaleString()} ر.س
                </span>
              </div>

              <div className="flex justify-between items-baseline pt-3 border-t-2 border-slate-800">
                <span className="text-sm font-extrabold text-white">
                  {t.calc.grandTotal}
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono">
                  {totals.grandTotalSAR.toLocaleString()} ر.س
                </span>
              </div>
            </div>

            {/* Conversion Buttons */}
            <div className="space-y-2.5 pt-4">
              {/* WhatsApp Button */}
              <a
                href={getWhatsAppShareUrl(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 hover:scale-[1.02] active:scale-95 transition"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.calc.btnWhatsApp}</span>
              </a>

              {/* Download PDF Button */}
              <button
                onClick={handleDownloadPDF}
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>{t.calc.btnDownloadPDF}</span>
              </button>

              {/* Share Configuration Button */}
              <button
                onClick={handleShare}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 border border-slate-800 transition"
              >
                {shareCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">{t.calc.copiedSuccess}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{t.calc.btnShare}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
