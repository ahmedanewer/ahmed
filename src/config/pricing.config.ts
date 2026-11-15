/**
 * ============================================================================
 * AHMED ABDULSAMAD ALUMINUM & GLASS CO. - PRICING CONFIGURATION
 * شركة أحمد عبد الصمد للألمنيوم والزجاج - ملف تسعير المنتجات وحساب التكاليف
 * ============================================================================
 * 
 * ⚠️ NOTICE FOR FACTORY OWNER / ADMIN:
 * ALL VALUES IN THIS FILE ARE REALISTIC FACTORY PLACEHOLDERS.
 * You can edit any base price, multiplier, delivery cost, or VAT percentage
 * below at any time, and the entire calculator and PDF quotes will update instantly.
 *
 * ⚠️ تنبيه لإدارة المصنع:
 * جميع الأسعار والنسب في هذا الملف هي أسعار تقريبية استرشادية (Placeholders).
 * يمكنك تعديل أسعار المتر المربع، المعاملات، تكاليف الشحن والضريبة مباشرة من هنا.
 * ============================================================================
 */

export type ProductType = 
  | 'curtain_wall'      // كرتن وول وواجهات زجاجية
  | 'window'            // نوافذ ألمنيوم معمارية
  | 'door'              // أبواب ألمنيوم ومداخل
  | 'sliding_door'      // واجهات وأبواب سحاب كبيرة
  | 'cladding'          // كلادينج وألواح ألمنيوم
  | 'skylight'          // قبب وسماويات زجاجية
  | 'pergola'           // برجولات ألمنيوم حديثة
  | 'frameless_glass'   // زجاج سيكوريت وفريملس
  | 'steel_structure'   // هياكل ومظلات حديدية
  | 'custom_aluminum';  // أعمال ألمنيوم خاصة وتفصيل

export type OpeningType =
  | 'fixed'        // ثابت
  | 'sliding'      // سحاب
  | 'casement'     // مفصلي
  | 'tilt_turn'    // قلاب ومفصلي (تلت آند تيرن)
  | 'folding'      // منطوي / فولدينغ (أكورديون)
  | 'louvered';    // شرائح / شتر

export type SystemTier =
  | 'economy'   // اقتصادي: قطاعات محلية معتمدة 1.8مم
  | 'standard'  // قياسي: أنظمة سرايا ورويال عازلة 2.0مم
  | 'premium';  // فاخر: أنظمة تكنال / شوكو أوروبية معتمدة عازلة حرارياً

export type GlassType =
  | 'single_6mm'      // مفرد سيكوريت شفاف 6مم
  | 'double_24mm'     // دبل جلاس عازل 24مم (6-12-6)
  | 'double_low_e'    // دبل جلاس منخفض الانبعاثية وعاكس شمسي Low-E
  | 'laminated_sound' // زجاج دبل معالج صوتياً ومصفح أمان (Laminated)
  | 'tinted_solar';   // زجاج دبل ملون عاكس (برونزي / رمادي معماري)

export type FinishType =
  | 'powder_coat'      // دهان حراري إلكتروستاتيك (RAL قياسي)
  | 'powder_special'   // دهان بودرة معتمد بضمان 20 سنة (Qualicoat Class 2)
  | 'anodized'         // أنودايز مؤكسد معماري (فضي / برونزي / شامبين)
  | 'wood_sublimation';// توشيح خشابي أوروبي مقاوم للحرارة والشمس

export type ProjectScopeType =
  | 'villa'            // فيلا سكنية خاصة
  | 'apartment'        // شقة / دور سكني
  | 'shop'             // معرض أو محل تجاري
  | 'building_facade'; // برج أو واجهة مبنى كاملة

export interface DeliveryCity {
  id: string;
  nameAr: string;
  nameEn: string;
  feeSAR: number;
}

export interface PricingConfig {
  currency: {
    symbolAr: string;
    symbolEn: string;
    code: string;
  };
  vatRate: number; // Saudi VAT: 0.15 (15%)
  installationRate: number; // 0.10 (10% of items subtotal)
  minChargePerItemSAR: number; // Minimum SAR price per fabricated piece

  // Base price in SAR per square meter (m²) for Economy tier
  basePricePerM2: Record<ProductType, number>;

  // System tier multipliers (adds structural strength, thermal break, European accessories)
  systemTierMultipliers: Record<SystemTier, number>;

  // Opening mechanism multipliers
  openingTypeMultipliers: Record<OpeningType, number>;

  // Glass specification multipliers
  glassTypeMultipliers: Record<GlassType, number>;

  // Finish and surface coating multipliers
  finishTypeMultipliers: Record<FinishType, number>;

  // Delivery fees by Saudi cities
  deliveryCities: DeliveryCity[];

  // Free delivery threshold in SAR
  freeDeliveryThresholdSAR: number;

  // Disclaimer text in both languages
  disclaimer: {
    ar: string;
    en: string;
  };
}

export const PRICING_CONFIG: PricingConfig = {
  currency: {
    symbolAr: "ر.س",
    symbolEn: "SAR",
    code: "SAR",
  },
  vatRate: 0.15, // 15% Saudi Value Added Tax (ZATCA)
  installationRate: 0.10, // 10% standard factory installation & alignment
  minChargePerItemSAR: 450, // Minimum production charge per custom piece

  /**
   * BASE PRICE PER SQUARE METER (SAR / m²)
   * [EDITABLE]: Update these values to match your factory base production costs
   */
  basePricePerM2: {
    curtain_wall: 780,     // واجهات كرتن وول زجاجية مستمرة
    window: 520,           // نوافذ ألمنيوم معمارية
    door: 680,             // أبواب ألمنيوم ومداخل
    sliding_door: 720,     // أبواب سحاب زجاجية كبيرة
    cladding: 290,         // كلادينج ألمنيوم مقاوم للحريق
    skylight: 890,         // قبب وسماويات زجاجية هرمية ودائرية
    pergola: 620,          // برجولات ألمنيوم مع شرائح متحركة
    frameless_glass: 440,  // زجاج فريملس وسيكوريت مع إكسسوارات ستانلس
    steel_structure: 380,  // هياكل حديدية إنشائية ومظلات
    custom_aluminum: 580,  // تفصيل ألمنيوم خاص ومشربيات
  },

  /**
   * SYSTEM TIER MULTIPLIER
   * [EDITABLE]: Ratio applied according to the profile system brand/tier
   */
  systemTierMultipliers: {
    economy: 1.0,    // قطاعات محلية قياسية 1.8مم (Standard Local Systems)
    standard: 1.25,  // قطاعات سرايا ورويال عازلة 2.0مم (Thermal-Break Standard)
    premium: 1.65,   // أنظمة أوروبية تكنال / شوكو معتمدة (European Certified Systems)
  },

  /**
   * OPENING TYPE MULTIPLIER
   * [EDITABLE]: Reflects hinges, rollers, multi-point lock mechanisms
   */
  openingTypeMultipliers: {
    fixed: 1.0,      // ثابت بدون مفصلات
    sliding: 1.12,   // سحاب مع عجلات ستانلس ومجرى مزدوج
    casement: 1.18,  // مفصلي مع إكسسوارات إيطالية
    tilt_turn: 1.28, // قلاب ومفصلي بنظام إغلاق محكم متعدد النقاط
    folding: 1.45,   // منطوي أكورديون مع مسارات علوية وسفلية معززة
    louvered: 1.22,  // شرائح ألمنيوم متحركة أو ثابتة
  },

  /**
   * GLASS TYPE MULTIPLIER
   * [EDITABLE]: Multipliers based on glass panes, gas filling and coatings
   */
  glassTypeMultipliers: {
    single_6mm: 1.0,       // مفرد سيكوريت شفاف 6مم
    double_24mm: 1.32,     // دبل جلاس عازل للصوت والحرارة 24مم (6-12-6)
    double_low_e: 1.62,    // دبل جلاس موفر للطاقة Low-E مع غاز الأرجون
    laminated_sound: 1.85, // دبل مصفح بطبقة PVB عازلة للصوت الفائق والأمان
    tinted_solar: 1.42,    // دبل ملون عاكس للأشعة الشمسية (رمادي / برونزي)
  },

  /**
   * FINISH & COATING MULTIPLIER
   * [EDITABLE]: Surface treatment cost ratio
   */
  finishTypeMultipliers: {
    powder_coat: 1.0,       // دهان حراري بودرة مطفي RAL معتمد
    powder_special: 1.12,   // دهان خاص ميتاليك كواليكوت كلاس 2 ضمان 20 سنة
    anodized: 1.24,         // أنودايز مؤكسد معماري فائق الفخامة ومقاوم للملوحة
    wood_sublimation: 1.34, // توشيح خشابي أوروبي ملمس بارز مقاوم لأشعة الشمس
  },

  /**
   * SAUDI CITIES DELIVERY RATES (SAR)
   * [EDITABLE]: Transportation rates per delivery from Jeddah factory
   */
  deliveryCities: [
    { id: 'jeddah', nameAr: 'جدة (داخل المدينة)', nameEn: 'Jeddah (City)', feeSAR: 150 },
    { id: 'makkah', nameAr: 'مكة المكرمة وضواحيها', nameEn: 'Makkah & Suburbs', feeSAR: 300 },
    { id: 'taif', nameAr: 'الطائف والحوية', nameEn: 'Taif & Al-Hawiyah', feeSAR: 500 },
    { id: 'madinah', nameAr: 'المدينة المنورة', nameEn: 'Al-Madinah Al-Munawwarah', feeSAR: 750 },
    { id: 'yanbu', nameAr: 'ينبع الصناعية / البحر', nameEn: 'Yanbu Industrial / Sea', feeSAR: 600 },
    { id: 'riyadh', nameAr: 'مدينة الرياض', nameEn: 'Riyadh City', feeSAR: 1200 },
    { id: 'dammam', nameAr: 'الدمام والخبر والمنطقة الشرقية', nameEn: 'Dammam & Eastern Province', feeSAR: 1500 },
    { id: 'khamis', nameAr: 'أبها وخميس مشيط والجنوب', nameEn: 'Abha & Southern Province', feeSAR: 1350 },
    { id: 'pickup', nameAr: 'استلام مباشر من المصنع بجدة', nameEn: 'Direct Factory Pickup (Jeddah)', feeSAR: 0 },
  ],

  // Free delivery threshold in SAR (orders above this in Jeddah are free delivery)
  freeDeliveryThresholdSAR: 15000,

  /**
   * LEGAL DISCLAIMER NOTE
   */
  disclaimer: {
    ar: "تقدير مبدئي استرشادي وليس عرض سعر نهائي معتمد. السعر النهائي يخضع للمعاينة الميدانية ورفع المقاسات الهندسية من قبل مهندسينا واختيار قطاعات الإكسسوارات التفصيلية.",
    en: "Preliminary estimate only, not a final binding commercial quotation. Final price is subject to on-site surveying, engineering structural checks, and exact accessory specifications.",
  },
};
