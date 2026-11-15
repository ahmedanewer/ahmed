"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import {
  PRICING_CONFIG,
  ProductType,
  OpeningType,
  SystemTier,
  GlassType,
  FinishType,
  ProjectScopeType,
} from "@/config/pricing.config";
import { siteConfig } from "@/config/site.config";
import { TRANSLATIONS, Locale } from "@/config/translations";

export interface CalculatorItem {
  id: string;
  name: string;
  productType: ProductType;
  openingType: OpeningType;
  systemTier: SystemTier;
  glassType: GlassType;
  finishType: FinishType;
  width: number;  // in meters (e.g. 2.0)
  height: number; // in meters (e.g. 1.8)
  quantity: number;
  notes?: string;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  city: string;
  notes: string;
}

export interface CalculatedItem extends CalculatorItem {
  areaM2: number;
  totalAreaM2: number;
  unitPriceSAR: number;
  isMinChargeApplied: boolean;
  totalPriceSAR: number;
}

export interface ProjectTotals {
  itemsCount: number;
  totalAreaM2: number;
  itemsSubtotalSAR: number;
  installationFeeSAR: number;
  deliveryFeeSAR: number;
  isFreeDelivery: boolean;
  subtotalBeforeVatSAR: number;
  vatAmountSAR: number;
  grandTotalSAR: number;
}

interface QuoteCalculatorContextType {
  projectScope: ProjectScopeType;
  setProjectScope: (scope: ProjectScopeType) => void;
  items: CalculatorItem[];
  calculatedItems: CalculatedItem[];
  activeItemIndex: number;
  setActiveItemIndex: (index: number) => void;
  activeItem: CalculatorItem | undefined;
  activeCalculatedItem: CalculatedItem | undefined;
  includeInstallation: boolean;
  setIncludeInstallation: (include: boolean) => void;
  selectedCityId: string;
  setSelectedCityId: (cityId: string) => void;
  customerInfo: CustomerInfo;
  setCustomerInfo: React.Dispatch<React.SetStateAction<CustomerInfo>>;
  totals: ProjectTotals;
  addItem: (preset?: Partial<CalculatorItem>) => void;
  updateItem: (index: number, updates: Partial<CalculatorItem>) => void;
  removeItem: (index: number) => void;
  duplicateItem: (index: number) => void;
  resetProject: () => void;
  loadPreset: (type: "villa" | "apartment" | "shop" | "building_facade") => void;
  getWhatsAppShareUrl: (locale: Locale) => string;
  getShareableLink: () => string;
}

const STORAGE_KEY = "abdulsamad_calculator_v1";

const DEFAULT_FIRST_ITEM: CalculatorItem = {
  id: "item-default-1",
  name: "واجهة الصالة الرئيسية",
  productType: "curtain_wall",
  openingType: "fixed",
  systemTier: "standard",
  glassType: "double_low_e",
  finishType: "powder_coat",
  width: 3.5,
  height: 2.8,
  quantity: 1,
};

// Calculate cost for a single item based on factory formulas
export function computeItemCost(item: CalculatorItem): CalculatedItem {
  const width = Math.max(0.5, Math.min(15.0, Number(item.width) || 1.0));
  const height = Math.max(0.5, Math.min(10.0, Number(item.height) || 1.0));
  const quantity = Math.max(1, Math.min(100, Math.floor(Number(item.quantity) || 1)));

  const areaM2 = Math.round(width * height * 100) / 100;
  const totalAreaM2 = Math.round(areaM2 * quantity * 100) / 100;

  const basePricePerM2 = PRICING_CONFIG.basePricePerM2[item.productType] || 500;
  const tierMultiplier = PRICING_CONFIG.systemTierMultipliers[item.systemTier] || 1.0;
  const openingMultiplier = PRICING_CONFIG.openingTypeMultipliers[item.openingType] || 1.0;
  const glassMultiplier = PRICING_CONFIG.glassTypeMultipliers[item.glassType] || 1.0;
  const finishMultiplier = PRICING_CONFIG.finishTypeMultipliers[item.finishType] || 1.0;

  // Formula: Area (m²) × Base SAR/m² × Tier × Opening × Glass × Finish
  const rawUnitPrice = areaM2 * basePricePerM2 * tierMultiplier * openingMultiplier * glassMultiplier * finishMultiplier;
  
  // Apply minimum charge per item
  const isMinChargeApplied = rawUnitPrice < PRICING_CONFIG.minChargePerItemSAR;
  const unitPriceSAR = Math.round(isMinChargeApplied ? PRICING_CONFIG.minChargePerItemSAR : rawUnitPrice);
  const totalPriceSAR = unitPriceSAR * quantity;

  return {
    ...item,
    width,
    height,
    quantity,
    areaM2,
    totalAreaM2,
    unitPriceSAR,
    isMinChargeApplied,
    totalPriceSAR,
  };
}

const QuoteCalculatorContext = createContext<QuoteCalculatorContextType | undefined>(undefined);

export function QuoteCalculatorProvider({ children }: { children: React.ReactNode }) {
  const [projectScope, setProjectScope] = useState<ProjectScopeType>("villa");
  const [items, setItems] = useState<CalculatorItem[]>([DEFAULT_FIRST_ITEM]);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [includeInstallation, setIncludeInstallation] = useState<boolean>(true);
  const [selectedCityId, setSelectedCityId] = useState<string>("jeddah");
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    phone: "",
    city: "جدة",
    notes: "",
  });

  // Load from localStorage or URL hash on initial mount
  useEffect(() => {
    try {
      // Check if URL contains shared state in hash or query
      if (typeof window !== "undefined") {
        const hash = window.location.hash;
        if (hash.startsWith("#quote=")) {
          const encoded = hash.replace("#quote=", "");
          const decoded = JSON.parse(decodeURIComponent(atob(encoded)));
          if (decoded && Array.isArray(decoded.items)) {
            setItems(decoded.items);
            if (decoded.scope) setProjectScope(decoded.scope);
            if (decoded.city) setSelectedCityId(decoded.city);
            if (typeof decoded.install === "boolean") setIncludeInstallation(decoded.install);
            return;
          }
        }

        // Fallback to localStorage
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && Array.isArray(parsed.items) && parsed.items.length > 0) {
            setItems(parsed.items);
            if (parsed.projectScope) setProjectScope(parsed.projectScope);
            if (parsed.selectedCityId) setSelectedCityId(parsed.selectedCityId);
            if (typeof parsed.includeInstallation === "boolean") {
              setIncludeInstallation(parsed.includeInstallation);
            }
            if (parsed.customerInfo) setCustomerInfo(parsed.customerInfo);
          }
        }
      }
    } catch {
      // fallback to defaults safely
    }
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const payload = {
          items,
          projectScope,
          selectedCityId,
          includeInstallation,
          customerInfo,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      }
    } catch {
      // ignore storage error
    }
  }, [items, projectScope, selectedCityId, includeInstallation, customerInfo]);

  // Compute all items
  const calculatedItems = useMemo(() => {
    return items.map((item) => computeItemCost(item));
  }, [items]);

  // Active item
  const activeItem = items[activeItemIndex] || items[0];
  const activeCalculatedItem = calculatedItems[activeItemIndex] || calculatedItems[0];

  // Compute Project Totals
  const totals: ProjectTotals = useMemo(() => {
    const itemsCount = items.reduce((acc, curr) => acc + (Number(curr.quantity) || 1), 0);
    const totalAreaM2 = Math.round(calculatedItems.reduce((acc, curr) => acc + curr.totalAreaM2, 0) * 100) / 100;
    const itemsSubtotalSAR = calculatedItems.reduce((acc, curr) => acc + curr.totalPriceSAR, 0);

    const installationFeeSAR = includeInstallation
      ? Math.round(itemsSubtotalSAR * PRICING_CONFIG.installationRate)
      : 0;

    const city = PRICING_CONFIG.deliveryCities.find((c) => c.id === selectedCityId) || PRICING_CONFIG.deliveryCities[0];
    const isFreeDelivery = selectedCityId === "jeddah" && itemsSubtotalSAR >= PRICING_CONFIG.freeDeliveryThresholdSAR;
    const deliveryFeeSAR = isFreeDelivery ? 0 : city.feeSAR;

    const subtotalBeforeVatSAR = itemsSubtotalSAR + installationFeeSAR + deliveryFeeSAR;
    const vatAmountSAR = Math.round(subtotalBeforeVatSAR * PRICING_CONFIG.vatRate);
    const grandTotalSAR = subtotalBeforeVatSAR + vatAmountSAR;

    return {
      itemsCount,
      totalAreaM2,
      itemsSubtotalSAR,
      installationFeeSAR,
      deliveryFeeSAR,
      isFreeDelivery,
      subtotalBeforeVatSAR,
      vatAmountSAR,
      grandTotalSAR,
    };
  }, [items, calculatedItems, includeInstallation, selectedCityId]);

  // Item Operations
  const addItem = (preset?: Partial<CalculatorItem>) => {
    const newItemNumber = items.length + 1;
    const newItem: CalculatorItem = {
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      name: preset?.name || `بند رقم ${newItemNumber}`,
      productType: preset?.productType || "window",
      openingType: preset?.openingType || "sliding",
      systemTier: preset?.systemTier || "standard",
      glassType: preset?.glassType || "double_24mm",
      finishType: preset?.finishType || "powder_coat",
      width: preset?.width || 2.0,
      height: preset?.height || 1.6,
      quantity: preset?.quantity || 1,
      notes: preset?.notes || "",
    };

    setItems((prev) => [...prev, newItem]);
    setActiveItemIndex(items.length); // point to new item
  };

  const updateItem = (index: number, updates: Partial<CalculatorItem>) => {
    setItems((prev) => {
      const next = [...prev];
      if (next[index]) {
        next[index] = { ...next[index], ...updates };
      }
      return next;
    });
  };

  const removeItem = (index: number) => {
    if (items.length <= 1) {
      // Keep at least one item, just reset it
      setItems([DEFAULT_FIRST_ITEM]);
      setActiveItemIndex(0);
      return;
    }
    setItems((prev) => prev.filter((_, i) => i !== index));
    if (activeItemIndex >= index && activeItemIndex > 0) {
      setActiveItemIndex(activeItemIndex - 1);
    }
  };

  const duplicateItem = (index: number) => {
    const target = items[index];
    if (!target) return;
    const duplicated: CalculatorItem = {
      ...target,
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      name: `${target.name} (نسخة)`,
    };
    setItems((prev) => {
      const next = [...prev];
      next.splice(index + 1, 0, duplicated);
      return next;
    });
    setActiveItemIndex(index + 1);
  };

  const resetProject = () => {
    setItems([DEFAULT_FIRST_ITEM]);
    setActiveItemIndex(0);
  };

  const loadPreset = (type: "villa" | "apartment" | "shop" | "building_facade") => {
    setProjectScope(type);
    if (type === "villa") {
      setItems([
        {
          id: "villa-1",
          name: "واجهة الصالة الرئيسية المطلة على المسبح",
          productType: "sliding_door",
          openingType: "sliding",
          systemTier: "premium",
          glassType: "double_low_e",
          finishType: "powder_coat",
          width: 4.8,
          height: 3.0,
          quantity: 1,
        },
        {
          id: "villa-2",
          name: "نوافذ غرف النوم الرئيسية (ماستر)",
          productType: "window",
          openingType: "tilt_turn",
          systemTier: "standard",
          glassType: "double_24mm",
          finishType: "powder_coat",
          width: 2.2,
          height: 1.8,
          quantity: 4,
        },
        {
          id: "villa-3",
          name: "سكاي لايت هرمي للبهو والدرج",
          productType: "skylight",
          openingType: "fixed",
          systemTier: "premium",
          glassType: "laminated_sound",
          finishType: "powder_coat",
          width: 3.0,
          height: 3.0,
          quantity: 1,
        },
        {
          id: "villa-4",
          name: "برجولة ألمنيوم ذكية لجلسة السطح",
          productType: "pergola",
          openingType: "louvered",
          systemTier: "premium",
          glassType: "single_6mm",
          finishType: "anodized",
          width: 5.0,
          height: 3.5,
          quantity: 1,
        },
      ]);
    } else if (type === "apartment") {
      setItems([
        {
          id: "apt-1",
          name: "باب بلكونة الصالة سحاب",
          productType: "sliding_door",
          openingType: "sliding",
          systemTier: "standard",
          glassType: "double_24mm",
          finishType: "powder_coat",
          width: 2.4,
          height: 2.3,
          quantity: 1,
        },
        {
          id: "apt-2",
          name: "نوافذ الغرف والمطبخ",
          productType: "window",
          openingType: "sliding",
          systemTier: "standard",
          glassType: "double_24mm",
          finishType: "powder_coat",
          width: 1.6,
          height: 1.4,
          quantity: 3,
        },
      ]);
    } else if (type === "shop") {
      setItems([
        {
          id: "shop-1",
          name: "واجهة المعرض الزجاجية الرئيسية",
          productType: "curtain_wall",
          openingType: "fixed",
          systemTier: "premium",
          glassType: "double_low_e",
          finishType: "powder_coat",
          width: 8.0,
          height: 3.6,
          quantity: 1,
        },
        {
          id: "shop-2",
          name: "تكسيات كلادينج ألمنيوم مقاوم للحريق A2",
          productType: "cladding",
          openingType: "fixed",
          systemTier: "standard",
          glassType: "single_6mm",
          finishType: "powder_special",
          width: 10.0,
          height: 2.5,
          quantity: 1,
        },
        {
          id: "shop-3",
          name: "باب مدخل زجاج سيكوريت فريملس مزدوج",
          productType: "frameless_glass",
          openingType: "casement",
          systemTier: "premium",
          glassType: "laminated_sound",
          finishType: "anodized",
          width: 2.0,
          height: 2.6,
          quantity: 1,
        },
      ]);
    } else {
      // Building Facade
      setItems([
        {
          id: "bld-1",
          name: "واجهات كرتن وول للأدوار المتكررة",
          productType: "curtain_wall",
          openingType: "fixed",
          systemTier: "premium",
          glassType: "double_low_e",
          finishType: "powder_coat",
          width: 12.0,
          height: 3.2,
          quantity: 5,
        },
        {
          id: "bld-2",
          name: "تكسيات كلادينج معمارية للأعمدة والكرانيش",
          productType: "cladding",
          openingType: "fixed",
          systemTier: "standard",
          glassType: "single_6mm",
          finishType: "powder_special",
          width: 14.0,
          height: 3.0,
          quantity: 2,
        },
      ]);
    }
    setActiveItemIndex(0);
  };

  // WhatsApp Message Generator
  const getWhatsAppShareUrl = (locale: Locale = "ar") => {
    const t = TRANSLATIONS[locale];
    const city = PRICING_CONFIG.deliveryCities.find((c) => c.id === selectedCityId)?.nameAr || "جدة";
    
    let msg = "";
    if (locale === "ar") {
      msg += `*السلام عليكم ورحمة الله وبركاته*\n`;
      msg += `*طلب عرض سعر رسمي من موقع شركة أحمد عبد الصمد للألمنيوم والزجاج*\n\n`;
      msg += `📌 *بيانات العميل والمشروع:*\n`;
      msg += `• الاسم: ${customerInfo.name || "عميل كريم"}\n`;
      msg += `• الجوال: ${customerInfo.phone || "غير محدد"}\n`;
      msg += `• المدينة: ${customerInfo.city || city}\n`;
      msg += `• نوع المشروع: ${t.calc.projectScopes[projectScope]}\n\n`;
      msg += `📋 *قائمة بنود المشروع (${items.length} بند):*\n`;

      calculatedItems.forEach((item, idx) => {
        const prod = t.products[item.productType];
        const open = t.openings[item.openingType];
        msg += `\n*بند ${idx + 1}: ${item.name}*\n`;
        msg += `  - النوع: ${prod} (${open})\n`;
        msg += `  - الأبعاد: ${item.width}م عرض × ${item.height}م ارتفاع (المساحة: ${item.areaM2} م²)\n`;
        msg += `  - الفئة: ${t.tiers[item.systemTier]}\n`;
        msg += `  - الزجاج: ${t.glasses[item.glassType]}\n`;
        msg += `  - المعالجة: ${t.finishes[item.finishType]}\n`;
        msg += `  - الكمية: ${item.quantity} | السعر: ${item.totalPriceSAR.toLocaleString()} ر.س\n`;
      });

      msg += `\n───────────────\n`;
      msg += `💰 *ملخص التكلفة التقديرية:*\n`;
      msg += `• المجموع الفرعي للأعمال: ${totals.itemsSubtotalSAR.toLocaleString()} ر.س\n`;
      if (includeInstallation) {
        msg += `• التركيب الموقعي (10%): ${totals.installationFeeSAR.toLocaleString()} ر.س\n`;
      }
      msg += `• التوصيل والنقل (${city}): ${totals.deliveryFeeSAR === 0 ? "مجاني" : totals.deliveryFeeSAR.toLocaleString() + " ر.س"}\n`;
      msg += `• ضريبة القيمة المضافة (15%): ${totals.vatAmountSAR.toLocaleString()} ر.س\n`;
      msg += `✨ *الإجمالي النهائي التقديري: ${totals.grandTotalSAR.toLocaleString()} ر.س*\n\n`;
      msg += `⚠️ ملاحظة: ${PRICING_CONFIG.disclaimer.ar}\n`;
      if (customerInfo.notes) {
        msg += `\n📝 ملاحظات إضافية: ${customerInfo.notes}\n`;
      }
    } else {
      msg += `*Hello, I would like to request an official quotation from Ahmed Abdulsamad Aluminum & Glass Co.*\n\n`;
      msg += `📌 *Client & Project Details:*\n`;
      msg += `• Name: ${customerInfo.name || "Client"}\n`;
      msg += `• Phone: ${customerInfo.phone || "Not specified"}\n`;
      msg += `• City: ${customerInfo.city || city}\n`;
      msg += `• Project Type: ${t.calc.projectScopes[projectScope]}\n\n`;
      msg += `📋 *Bill of Quantities (${items.length} items):*\n`;

      calculatedItems.forEach((item, idx) => {
        msg += `\n*Item ${idx + 1}: ${item.name}*\n`;
        msg += `  - Type: ${t.products[item.productType]} (${t.openings[item.openingType]})\n`;
        msg += `  - Size: ${item.width}m W × ${item.height}m H (${item.areaM2} m²)\n`;
        msg += `  - System: ${t.tiers[item.systemTier]}\n`;
        msg += `  - Glazing: ${t.glasses[item.glassType]}\n`;
        msg += `  - Qty: ${item.quantity} | Total: ${item.totalPriceSAR.toLocaleString()} SAR\n`;
      });

      msg += `\n───────────────\n`;
      msg += `💰 *Cost Summary:*\n`;
      msg += `• Subtotal: ${totals.itemsSubtotalSAR.toLocaleString()} SAR\n`;
      if (includeInstallation) {
        msg += `• Installation (10%): ${totals.installationFeeSAR.toLocaleString()} SAR\n`;
      }
      msg += `• Delivery (${city}): ${totals.deliveryFeeSAR === 0 ? "Free" : totals.deliveryFeeSAR.toLocaleString() + " SAR"}\n`;
      msg += `• 15% VAT: ${totals.vatAmountSAR.toLocaleString()} SAR\n`;
      msg += `✨ *Grand Total: ${totals.grandTotalSAR.toLocaleString()} SAR*\n\n`;
      msg += `Note: ${PRICING_CONFIG.disclaimer.en}\n`;
    }

    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  // Generate shareable URL
  const getShareableLink = () => {
    if (typeof window === "undefined") return "";
    const statePayload = {
      scope: projectScope,
      city: selectedCityId,
      install: includeInstallation,
      items: items.map((it) => ({
        name: it.name,
        productType: it.productType,
        openingType: it.openingType,
        systemTier: it.systemTier,
        glassType: it.glassType,
        finishType: it.finishType,
        width: it.width,
        height: it.height,
        quantity: it.quantity,
      })),
    };

    const encoded = btoa(encodeURIComponent(JSON.stringify(statePayload)));
    const baseUrl = `${window.location.origin}${window.location.pathname}`;
    return `${baseUrl}#quote=${encoded}`;
  };

  return (
    <QuoteCalculatorContext.Provider
      value={{
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
      }}
    >
      {children}
    </QuoteCalculatorContext.Provider>
  );
}

export function useQuoteCalculator() {
  const context = useContext(QuoteCalculatorContext);
  if (!context) {
    throw new Error("useQuoteCalculator must be used within a QuoteCalculatorProvider");
  }
  return context;
}
