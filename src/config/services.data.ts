/**
 * Ahmed Abdulsamad Aluminum & Glass Co. - Services Data
 * بيانات وتفاصيل خدمات المصنع الثمانية الرئيسية
 */

import { ProductType } from "./pricing.config";

export interface ServiceDetail {
  slug: string;
  calculatorType: ProductType;
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  shortDesc: { ar: string; en: string };
  longDesc: { ar: string; en: string };
  heroImage: string;
  features: Array<{ ar: string; en: string }>;
  specifications: Array<{ labelAr: string; labelEn: string; valueAr: string; valueEn: string }>;
  systemVariants: Array<{ nameAr: string; nameEn: string; descAr: string; descEn: string }>;
  idealFor: Array<{ ar: string; en: string }>;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "curtain-wall",
    calculatorType: "curtain_wall",
    title: {
      ar: "واجهات الكرتن وول والزجاج الإنشائي",
      en: "Architectural Curtain Wall & Structural Glazing",
    },
    subtitle: {
      ar: "واجهات زجاجية مستمرة عالية العزل للأبراج والمباني الإدارية والتجارية",
      en: "Continuous high-performance glass facades for commercial towers and corporate headquarters",
    },
    shortDesc: {
      ar: "تصنيع وتركيب أحدث أنظمة الواجهات الزجاجية المستمرة (Stick & Unitized Systems) والزجاج الإنشائي العازل للصوت والحرارة.",
      en: "Fabrication and installation of modern Stick and Unitized facade systems with high acoustic and thermal insulation.",
    },
    longDesc: {
      ar: "نقدم في مصنع أحمد عبد الصمد حلول واجهات الكرتن وول المتكاملة للمباني الشاهقة والمجمعات التجارية. نستخدم قطاعات ألمنيوم معمارية سبائك 6063-T6 مطابقة للمواصفات السعودية مع فواصل عزل حراري بولياميد مستوردة وزجاج مزدوج معالج منخفض الانبعاثية (Low-E)، مما يضمن أقصى كفاءة في توفير طاقة التكييف ومقاومة الرياح العاتية في المناطق الساحلية كمدينة جدة.",
      en: "Ahmed Abdulsamad Co. delivers complete curtain wall solutions for towers and commercial complexes. We utilize architectural alloy 6063-T6 profiles conforming to Saudi standards with imported polyamide thermal breaks and Low-E double glazing, guaranteeing superior energy savings and resistance to high coastal wind pressures.",
    },
    heroImage: "/images/services/curtain-wall.svg",
    features: [
      { ar: "مقاومة فائقة لضغط الرياح حتى 3500 باسكال", en: "Wind pressure resistance up to 3500 Pa" },
      { ar: "عزل صوتي متقدم يصل إلى 48 ديسيبل", en: "Advanced acoustic insulation up to 48 dB" },
      { ar: "زجاج معالج حرارياً ومقاوم للأشعة فوق البنفسجية", en: "Tempered UV & solar control glass panes" },
      { ar: "أنظمة مجاري تصريف مياه أمطار مخفية ذكية", en: "Internal smart concealed rainwater drainage channels" },
    ],
    specifications: [
      { labelAr: "سبيكة الألمنيوم", labelEn: "Aluminum Alloy", valueAr: "6063-T6 المعمارية الفاخرة", valueEn: "Architectural 6063-T6" },
      { labelAr: "نظام الواجهة", labelEn: "System Type", valueAr: "Stick System / Unitized Panel", valueEn: "Stick & Unitized Systems" },
      { labelAr: "سماكة الزجاج", labelEn: "Glass Thickness", valueAr: "24مم - 32مم دبل أو تريبل جلاس", valueEn: "24mm - 32mm Double/Triple Glazing" },
      { labelAr: "عزل الحرارة (U-Value)", labelEn: "Thermal Transmittance (U-Value)", valueAr: "أقل من 1.4 W/m²K معتمد كود البناء", valueEn: "< 1.4 W/m²K SBC Compliant" },
    ],
    systemVariants: [
      {
        nameAr: "نظام التجميع الموقعي (Stick System)",
        nameEn: "Stick Curtain Wall System",
        descAr: "الأكثر انتشاراً للمباني المتوسطة والواجهات الزجاجية للصالات والمعارض بتكلفة اقتصادية ومرونة عالية في الموقع.",
        descEn: "Most versatile system for medium-rise buildings and showrooms offering on-site custom flexibility.",
      },
      {
        nameAr: "الواجهات المسبقة الصنع (Unitized Facade)",
        nameEn: "Unitized Curtain Wall Panels",
        descAr: "تصنيع كامل في المصنع بجدة مع الزجاج والجوانات لتركيب فائق السرعة للأبراج والمشاريع الكبرى.",
        descEn: "Fully shop-assembled and glazed modules for rapid high-rise installation and exceptional QA.",
      },
      {
        nameAr: "الزجاج الإنشائي الملتصق (Structural Glazing SG)",
        nameEn: "Structural Silicone Glazing (SSG)",
        descAr: "مظهر خارجي زجاجي انسيابي بالكامل بدون بروزات ألمنيوم خارجية باستخدام سيليكون إنشائي معتمد من داو كورنينغ.",
        descEn: "Seamless all-glass external aesthetic with concealed framing bonded via structural Dow Corning silicone.",
      },
    ],
    idealFor: [
      { ar: "الأبراج والمباني الإدارية", en: "Commercial Towers & Office Buildings" },
      { ar: "المستشفيات والمراكز الطبية", en: "Hospitals & Medical Centers" },
      { ar: "معارض السيارات والمجمعات التجارية", en: "Auto Showrooms & Retail Malls" },
      { ar: "واجهات الفلل المودرن الفاخرة", en: "Luxury Modern Residential Villas" },
    ],
  },
  {
    slug: "windows-doors",
    calculatorType: "window",
    title: {
      ar: "أبواب ونوافذ الألمنيوم المعمارية المعزولة",
      en: "Thermal-Break Architectural Windows & Doors",
    },
    subtitle: {
      ar: "أنظمة سحاب ومفصلي عازلة للصوت والغبار والحرارة بأعلى المواصفات الأوروبية",
      en: "Sliding and hinged systems engineered for ultimate thermal, acoustic, and dust insulation",
    },
    shortDesc: {
      ar: "تصنيع نوافذ وأبواب ألمنيوم عالية الجودة بأنظمة سرايا ورويال وأنظمة تكنال الأوروبية المعزولة حرارياً.",
      en: "Fabrication of premium aluminum windows and doors featuring Saraya, Royal, and European thermal-break profiles.",
    },
    longDesc: {
      ar: "تعد أبواب ونوافذ الألمنيوم حجر الأساس في راحة وأمان المسكن والمكتب. في مصنعنا بجدة، ننتج أنظمة النوافذ السحاب والمفصلية والقلاب (Tilt & Turn) باستخدام قطاعات ألمنيوم سميكة مزودة بحواجز حرارية تمنع انتقال حرارة الصيف اللاهبة وبرودة الشتاء، مع إكسسوارات إيطالية وألمانية تضمن سلاسة الحركة لسنوات طويلة وإغلاقاً محكماً ضد الغبار والرياح.",
      en: "Architectural windows and doors form the core of structural elegance and indoor comfort. We fabricate sliding, casement, and tilt-turn systems with multi-chamber thermal insulation to counter Jeddah's coastal heat, equipped with European multi-point locking hardware for flawless lifelong operation.",
    },
    heroImage: "/images/services/windows-doors.svg",
    features: [
      { ar: "عزل حراري يخفض فاتورة تكييف المسكن حتى 40%", en: "Thermal insulation reducing AC energy bills by up to 40%" },
      { ar: "جوانات كوتشوك EPDM ألمانية مانعة لتسرب الغبار والأمطار", en: "German EPDM sealing gaskets stopping all dust and water ingress" },
      { ar: "إكسسوارات ومقابض إيطالية Giesse / Savio متعددة نقاط الإغلاق", en: "Italian multi-point locking handles and heavy-duty hinges" },
      { ar: "تشكيلة ألوان هائلة ودهان حراري مقاوم للملوحة الساحلية", en: "Broad RAL color palette with marine-grade seaside powder coating" },
    ],
    specifications: [
      { labelAr: "عمق القطاع", labelEn: "Profile Depth", valueAr: "من 65مم إلى 120مم للأنظمة المعزولة", valueEn: "65mm to 120mm Thermal Systems" },
      { labelAr: "سماكة جدار الألمنيوم", labelEn: "Aluminum Wall Thickness", valueAr: "1.8مم إلى 2.2مم متانة فائقة", valueEn: "1.8mm to 2.2mm Heavy Gauge" },
      { labelAr: "نوع العزل الحراري", labelEn: "Thermal Break", valueAr: "بولياميد مقوى بألياف زجاجية PA66", valueEn: "Glass-fiber Reinforced PA66 Polyamide" },
      { labelAr: "الزجاج المعتمد", labelEn: "Glazing Types", valueAr: "دبل جلاس عازل 24مم غاز أرجون", valueEn: "24mm Double Glazing with Argon Gas" },
    ],
    systemVariants: [
      {
        nameAr: "النوافذ والأبواب السحاب (Heavy-Duty Sliding)",
        nameEn: "Heavy-Duty Sliding Systems",
        descAr: "مسارات ستانلس ستيل فائقة السلاسة مع إمكانية تصنيع أضلاف عملاقة بارتفاع 3 أمتار للقصور والفلل الحديثة.",
        descEn: "Stainless steel silent roller tracks accommodating floor-to-ceiling panoramic glass panels.",
      },
      {
        nameAr: "نظام المفصلي والقلاب (Casement & Tilt-Turn)",
        nameEn: "Tilt & Turn High-Security System",
        descAr: "أعلى درجات العزل الهوائي والصوتي بفضل الإغلاق الميكانيكي رباعي النقاط وإمكانية الفتح الجزئي للتهوية.",
        descEn: "Maximum acoustic barrier with dual opening functions for secure night ventilation.",
      },
      {
        nameAr: "الأبواب المنطوية البانورامية (Bi-Fold Panoramic)",
        nameEn: "Bi-Fold Folding Glass Doors",
        descAr: "تفتح الصالة بالكامل على الحديقة أو المسبح لدمج المساحة الداخلية بالخارجية بانسيابية مطلقة.",
        descEn: "Seamless transitions opening entire living rooms onto gardens and terraces.",
      },
    ],
    idealFor: [
      { ar: "الفلل والقصور السكنية المودرن", en: "Modern Luxury Residential Villas" },
      { ar: "المجمعات السكنية والشقق الفاخرة", en: "Luxury Compound Developments" },
      { ar: "الفنادق والمنتجعات السياحية", en: "Hotels & Coastal Resorts" },
      { ar: "المباني الحكومية والمؤسسات", en: "Institutional & Corporate Offices" },
    ],
  },
  {
    slug: "cladding",
    calculatorType: "cladding",
    title: {
      ar: "كلادينج وألواح الألمنيوم المعمارية (ACP)",
      en: "Aluminum Composite Panels (ACP Cladding)",
    },
    subtitle: {
      ar: "تكسيات واجهات مقاومة للحريق ومعتمدة من الدفاع المدني بتصاميم عصرية جذابة",
      en: "Fire-rated architectural facade cladding certified by Civil Defense with contemporary finishes",
    },
    shortDesc: {
      ar: "توريد وتصنيع وتركيب ألواح كلادينج ألمنيوم مقاومة للحريق Class A2 / B1 للمباني والمنشآت التجارية.",
      en: "Supply, CNC fabrication, and installation of fire-rated Class A2 / B1 ACP panels for commercial facades.",
    },
    longDesc: {
      ar: "نحن متخصصون في تصنيع وتركيب ألواح الكلادينج (Aluminum Composite Panels) المقاومة للحريق والمعتمدة لدى الهيئة السعودية للمواصفات والمقاييس (SASO) والدفاع المدني السعودي. نستخدم أحدث ماكينات التقطيع بالسي إن سي (CNC Routing) لتشكيل زوايا ومنحنيات معمارية جريئة، بدهانات PVDF كينار 500 تضمن ثبات اللون لأكثر من 20 عاماً ضد أشعة الشمس المباشرة ورطوبة البحر.",
      en: "Specialized in high-precision CNC cutting, groove routing, and mechanical installation of fire-resistant ACP cladding. Fully approved by the Saudi Civil Defense and SASO, backed with 20-year color warranties utilizing PVDF Kynar 500 coatings.",
    },
    heroImage: "/images/services/cladding.svg",
    features: [
      { ar: "مقاومة معتمدة للحريق Class A2 / B1 لا تصدر أدخنة سامة", en: "Class A2 / B1 fire rating non-toxic core" },
      { ar: "طبقة طلاء PVDF مقاومة للبهتان وتأثيرات الرطوبة والملوحة", en: "PVDF exterior coating resisting UV and coastal humidity" },
      { ar: "خفة وزن تقلل الأحمال الإنشائية على الهيكل الخرساني للمبنى", en: "Lightweight engineering minimizing dead structural loads" },
      { ar: "تشكيل وقص بالكمبيوتر بدقة مليمترية (CNC Engineering)", en: "Millimeter-precise computerized CNC fabrication" },
    ],
    specifications: [
      { labelAr: "سماكة اللوح الإجمالية", labelEn: "Panel Total Thickness", valueAr: "4مم أو 6مم حسب الارتفاع والمواصفة", valueEn: "4mm or 6mm per architectural specs" },
      { labelAr: "سماكة قشرة الألمنيوم", labelEn: "Aluminum Skin Thickness", valueAr: "0.5مم طبقة علوية وسفلية", valueEn: "0.5mm Top and Bottom Skins" },
      { labelAr: "حشوة اللوح الأساسية", labelEn: "Core Material", valueAr: "حشوة معدنية مقاومة للحريق FR Core", valueEn: "Mineral-Filled Fire-Resistant FR Core" },
      { labelAr: "نظام التثبيت الميكانيكي", labelEn: "Fixing Substructure", valueAr: "تثبيت ميكانيكي بالتيوبات والمفصلات الألمنيوم", valueEn: "Engineered Aluminum Rail & Clip System" },
    ],
    systemVariants: [
      {
        nameAr: "كلادينج الواجهات التجارية والشركات",
        nameEn: "Commercial Facade Cladding",
        descAr: "تحويل مظهر المباني القائمة إلى صروح معمارية عصرية براقة بألوان ميتاليك وألواح عريضة.",
        descEn: "Modernizing commercial properties into prestigious headquarters with metallic finishes.",
      },
      {
        nameAr: "كلادينج محطات الوقود والمراكز الخدمية",
        nameEn: "Gas Stations & Retail Canopies",
        descAr: "مطابقة تامة لهوية الشركات المعتمدة (Corporate Identity) ومقاومة للعوامل الجوية الصعبة.",
        descEn: "Accurate corporate brand compliance with superior outdoor durability.",
      },
      {
        nameAr: "كلادينج تكسيات الخشب والرخام البديل",
        nameEn: "Wood & Stone Finish ACP",
        descAr: "مظهر الخشب الطبيعي أو الرخام الفاخر بخفة وزن الألمنيوم وبدون صيانة دورية.",
        descEn: "Rich natural woodgrain and marble textures with the zero-maintenance benefit of aluminum.",
      },
    ],
    idealFor: [
      { ar: "واجهات المعارض والمتاجر", en: "Retail Stores & Car Dealerships" },
      { ar: "تحديث وتجديد واجهات المباني القديمة", en: "Building Modernization & Refurbishment" },
      { ar: "المستشفيات والمدارس والجامعات", en: "Schools, Universities & Hospitals" },
      { ar: "محطات الوقود والمراكز اللوجستية", en: "Gas Stations & Logistics Hubs" },
    ],
  },
  {
    slug: "skylights",
    calculatorType: "skylight",
    title: {
      ar: "القبب والسماويات الزجاجية المعمارية (Skylights)",
      en: "Architectural Glass Skylights & Domes",
    },
    subtitle: {
      ar: "إضاءة نهارية طبيعية خلابة مع عزل حراري ومائي محكم 100% بدون تسريبات",
      en: "Breathtaking natural daylighting engineered with 100% leak-proof thermal and water barrier",
    },
    shortDesc: {
      ar: "تصميم وتنفيذ قبب زجاجية وسماويات هرمية ومائلة بأحدث قطاعات ألمنيوم التصريف المزدوج.",
      en: "Design and fabrication of structural glass domes, pyramidal, and inclined skylights with dual-drainage aluminum.",
    },
    longDesc: {
      ar: "تضفي السماويات والقبب الزجاجية سحراً معمارياً وإضاءة طبيعية دافئة في بهو القصور والفلل والمجمعات التجارية. في مصنعنا، نصمم هياكل السكاي لايت بقطاعات ألمنيوم معمارية ضخمة مدعومة داخلياً بحديد مجلفن ومجهزة بنظام تصريف مياه أمطار داخلي متعدد المراحل لمنع أي تسرب نهائياً، مع زجاج مصفح آمن (Laminated Glass) عازل للحرارة والصوت ومقاوم للسقوط.",
      en: "Glass skylights transform interior atriums into illuminated architectural showcases. We engineer bespoke skylight systems with heavy aluminum structural mullions, internal condensation channels, and impact-resistant laminated Low-E safety glass engineered to eliminate any leak risks.",
    },
    heroImage: "/images/services/skylights.svg",
    features: [
      { ar: "زجاج أمان مصفح (Laminated Safety Glass) لا ينكسر أو يسقط", en: "Multi-layered laminated safety glass preventing any fall hazards" },
      { ar: "نظام تصريف تكثيف داخلي مزدوج (Double Condensation Channel)", en: "Dual internal condensation drainage weep system" },
      { ar: "عزل حراري للأشعة فوق البنفسجية بنسبة 99%", en: "Blocks 99% of harmful UV rays while maximizing daylight" },
      { ar: "هيكل ألمنيوم إنشائي صلب يتحمل ضغوط الرياح والصيانة", en: "Rigid structural aluminum framing supporting maintenance loads" },
    ],
    specifications: [
      { labelAr: "الهيكل الحامل", labelEn: "Supporting Framework", valueAr: "ألمنيوم إنشائي مقوى بحديد داخلي مجلفن", valueEn: "Heavy Architectural Aluminum with Galvanized Core" },
      { labelAr: "مواصفات الزجاج", labelEn: "Glass Spec", valueAr: "دبل مصفح عازل 28مم (6مم سيكوريت + فراغ 12مم + 10مم لامنيد)", valueEn: "28mm Insulated Laminated (6mm + 12mm Gap + 10mm Lam)" },
      { labelAr: "مستوى العزل المائي", labelEn: "Water Tightness", valueAr: "مختبر حتى ضغط 1200 باسكال Class E1200", valueEn: "Tested up to 1200 Pa Class E1200" },
      { labelAr: "ميلان السطح", labelEn: "Slope Pitch", valueAr: "مخصص هندسياً من 5 درجات حتى 60 درجة", valueEn: "Custom Engineered 5° to 60° Slope" },
    ],
    systemVariants: [
      {
        nameAr: "القبب الزجاجية الهرمية (Pyramid Skylights)",
        nameEn: "Pyramid Glass Skylights",
        descAr: "تصميم كلاسيكي متناسق يوفر توزيعاً ممتازاً لضوء الشمس وانسيابية عالية لتصريف المياه والغبار.",
        descEn: "Classic geometric symmetry ensuring optimum daylight distribution and automatic rain runoff.",
      },
      {
        nameAr: "السماويات المنحدرة المودرن (Single / Double Pitch)",
        nameEn: "Single & Double Pitch Sloped Skylights",
        descAr: "مثالية للممرات الطويلة والبهو الرئيسي في الفلل العصرية بأطوال تمتد لعشرات الأمتار.",
        descEn: "Continuous linear glazing ideal for dramatic entrance galleries and villa corridors.",
      },
      {
        nameAr: "قبب الزجاج الدائرية والمضلعة (Circular & Polygonal Domes)",
        nameEn: "Architectural Polygonal Domes",
        descAr: "تحفة هندسية في بهو الفنادق والقصور الفخمة تعكس فخامة المكان وهيبة التصميم.",
        descEn: "Prestigious focal point for hotel grand lobbies and VIP palatial residences.",
      },
    ],
    idealFor: [
      { ar: "صالات وبهو الفلل والقصور", en: "Villa Living Atriums & Grand Staircases" },
      { ar: "المجمعات التجارية والمولات", en: "Shopping Malls & Retail Arcades" },
      { ar: "المسابح الداخلية المغلقة", en: "Enclosed Indoor Swimming Pools" },
      { ar: "الشركات والبنوك والمطارات", en: "Corporate Headquarters & Airport Terminals" },
    ],
  },
  {
    slug: "steel-structure",
    calculatorType: "steel_structure",
    title: {
      ar: "الهياكل الحديدية والمظلات الإنشائية",
      en: "Structural Steel Works & Architectural Canopies",
    },
    subtitle: {
      ar: "تصنيع وتركيب الهياكل الفولاذية والميزانين ومظلات الشد الإنشائي بأعلى معايير الأمان",
      en: "Fabrication and erection of heavy structural steel, mezzanine floors, and industrial canopies",
    },
    shortDesc: {
      ar: "تنفيذ الهياكل المعدنية والميزانين الإنشائي ومظلات السيارات والمداخل المصممة هندسياً.",
      en: "Execution of structural steel frames, mezzanine platforms, car parks, and architectural canopies.",
    },
    longDesc: {
      ar: "يدمج مصنعنا بين خبرة تشكيل الحديد الإنشائي الثقيل وحرفية تشطيبات الألمنيوم والزجاج. نقوم بتصنيع وتركيب المظلات الإنشائية الحديثة (Cantilever Canopies)، أدوار الميزانين للمستودعات وصالات العرض، والهياكل الحديدية الحاملة للمباني والمصاعد الزجاجية البانورامية، باستخدام حديد سابك المطابق للمواصفات السعودية ودهانات إيبوكسي مقاومة للتآكل والصدأ.",
      en: "Combining heavy structural steel engineering with fine aluminum and glass finishing. We design, fabricate, and assemble modern cantilever canopies, industrial mezzanines, and panoramic glass elevator shafts using certified SABIC steel and anti-corrosion epoxy coatings.",
    },
    heroImage: "/images/services/steel-structure.svg",
    features: [
      { ar: "حديد إنشائي ثقيل مطابقة لمواصفات سابك وكود البناء السعودي SBC", en: "Heavy-duty structural steel certified to SABIC and Saudi SBC codes" },
      { ar: "معالجة ضد الصدأ بجلفنة على الساخن أو طلاء إيبوكسي ثلاثي", en: "Hot-dip galvanizing and multi-coat marine-grade epoxy rust protection" },
      { ar: "تصميم إنشائي وحساب أحمال الزلازل والرياح ببرامج ETABS وSAP", en: "Comprehensive structural engineering and load analysis via ETABS/SAP" },
      { ar: "لحام وفحص بالأشعة فوق الصوتية لضمان سلامة التوصيلات", en: "Certified welding with ultrasonic non-destructive testing (NDT)" },
    ],
    specifications: [
      { labelAr: "نوع الفولاذ", labelEn: "Steel Grade", valueAr: "ASTM A36 / S275JR عالي المتانة", valueEn: "High-Tensile ASTM A36 / S275JR" },
      { labelAr: "الحماية السطحية", labelEn: "Surface Protection", valueAr: "جلفنة على الساخن (Hot-Dip Galvanized) أو إيبوكسي", valueEn: "Hot-Dip Galvanized or Polyurethane Marine Coating" },
      { labelAr: "طريقة التوصيل", labelEn: "Joint System", valueAr: "براغي عالية المقاومة Grade 8.8 أو لحام معتمد", valueEn: "High-Tensile Grade 8.8 Bolts & Certified Welding" },
      { labelAr: "الضمان الهيكلي", labelEn: "Structural Warranty", valueAr: "10 سنوات ضمان سلامة إنشائية معتمد", valueEn: "10-Year Certified Structural Guarantee" },
    ],
    systemVariants: [
      {
        nameAr: "مظلات المداخل الطائرة (Cantilever Entry Canopies)",
        nameEn: "Modern Cantilever Canopies",
        descAr: "تصاميم عصرية معلقة بدون أعمدة أمامية تعيق الحركة مكسوة بالألمنيوم والزجاج السيكوريت.",
        descEn: "Column-free modern entry canopies clad with composite panels and safety glass.",
      },
      {
        nameAr: "طوابق الميزانين وصالات العرض (Mezzanine Floors)",
        nameEn: "Industrial & Retail Mezzanines",
        descAr: "مضاعفة المساحة الاستيعابية للمستودعات والمتاجر والمعارض بأرضيات حديدية متينة.",
        descEn: "Doubling usable commercial floorspace for retail showrooms and warehousing.",
      },
      {
        nameAr: "أبراج المصاعد البانورامية (Panoramic Elevator Shafts)",
        nameEn: "Glass Elevator Structural Shafts",
        descAr: "هيكل فولاذي مكسو بالزجاج الشفاف للمصاعد الخارجية والداخلية في الفلل والمولات.",
        descEn: "Sleek steel and glass enclosures for luxury panoramic indoor and outdoor elevators.",
      },
    ],
    idealFor: [
      { ar: "مداخل الفنادق والشركات", en: "Hotel & Corporate Main Entrances" },
      { ar: "المستودعات والمصانع اللوجستية", en: "Warehouses & Logistics Centers" },
      { ar: "المعارض التجارية والمتاجر", en: "Commercial Showrooms & Car Dealerships" },
      { ar: "مواقف السيارات والمظلات الخاصة", en: "VIP Residential & Commercial Parking" },
    ],
  },
  {
    slug: "pergolas",
    calculatorType: "pergola",
    title: {
      ar: "برجولات الألمنيوم الحديثة (Bioclimatic Pergolas)",
      en: "Modern Aluminum Pergolas & Louvered Systems",
    },
    subtitle: {
      ar: "برجولات ألمنيوم ذكية بشرائح متحركة للأسطح والحدائق بمقاومة فائقة للشمس والأمطار",
      en: "Smart motorized bioclimatic pergolas with rotating louvers for luxury rooftop living and gardens",
    },
    shortDesc: {
      ar: "تصنيع برجولات ألمنيوم مقاومة للرطوبة والشمس بشرائح متحركة ذكية ومزاريب تصريف مخفية.",
      en: "Custom motorized and fixed aluminum pergolas with rotating louvers, integrated LED, and hidden drainage.",
    },
    longDesc: {
      ar: "حوّل حديقتك أو سطح فيلتك إلى واحة استرخاء فاخرة صالحة للاستخدام طوال العام. نصنع برجولات الألمنيوم البيومناخية (Bioclimatic) في مصنعنا بجدة بألمنيوم سميك لا يصدأ ولا يتأثر بالرطوبة الساحلية، مع إمكانية تحريك الشرائح بالريموت للتحكم في كمية الظل والتهوية، وإضاءة LED مدمجة ونظام تصريف مياه أمطار مخفي تماماً داخل الأعمدة.",
      en: "Transform rooftops and private gardens into opulent year-round outdoor spaces. Our motorized aluminum bioclimatic pergolas feature 0°-120° rotating louvers operated via remote or smart home systems, fully concealed internal column downspouts, and integrated ambient LED strip lighting.",
    },
    heroImage: "/images/services/pergolas.svg",
    features: [
      { ar: "شرائح ألمنيوم ذكية تدور من 0 إلى 120 درجة للتحكم بالظل", en: "Smart rotating louvers 0° to 120° for ultimate sun and airflow control" },
      { ar: "مزاريب تصريف مياه أمطار مخفية داخل الأعمدة 100%", en: "Concealed 100% internal gutter system inside structural posts" },
      { ar: "ألمنيوم لا يصدأ ولا يحتاج صيانة دهان مثل الخشب والحديد", en: "Zero-maintenance aluminum that never rusts, rots, or requires repainting" },
      { ar: "خيارات إضاءة ليد دافئة وزجاج سحاب جانبي للمجالس", en: "Optional warm LED lighting and side sliding glass windbreaks" },
    ],
    specifications: [
      { labelAr: "مادة الهيكل", labelEn: "Frame Material", valueAr: "ألمنيوم إنشائي مقذوف 6063-T6 سماكة 3.0مم", valueEn: "Heavy-Gauge 6063-T6 Extruded Aluminum (3.0mm)" },
      { labelAr: "نظام التشغيل", labelEn: "Operation System", valueAr: "محركات سومفي الفرنسية الذكية Somfy مع ريموت", valueEn: "Somfy French Motorized Drive with Remote" },
      { labelAr: "الدهان السطحي", labelEn: "Surface Finish", valueAr: "بودرة كواليكوت كلاس 2 مقاومة لأشعة الشمس والملوحة", valueEn: "Qualicoat Class 2 Marine UV Resistant Powder" },
      { labelAr: "مقاومة الرياح", labelEn: "Wind Resistance", valueAr: "تتحمل رياح تصل إلى 120 كم/ساعة بأمان", valueEn: "Engineered to withstand 120 km/h wind gusts" },
    ],
    systemVariants: [
      {
        nameAr: "البرجولات البيومناخية الذكية (Motorized Louvered)",
        nameEn: "Motorized Bioclimatic Pergola",
        descAr: "الخيار الأكثر فخامة بشرائح تفتح وتغلق بالريموت مع حساسات مطر تغلق تلقائياً عند هطول الأمطار.",
        descEn: "Ultra-luxury motorized rotating louvers with automated rain sensors and smart home control.",
      },
      {
        nameAr: "البرجولات الثابتة المودرن (Fixed Architectural Pergola)",
        nameEn: "Fixed Architectural Louvers",
        descAr: "تصميم هندسي أنيق بشرائح ألمنيوم أو ألواح زجاجية عازلة بتكلفة اقتصادية ومظهر فخم دائم.",
        descEn: "Contemporary fixed louvers or solid glass ceiling offering permanent sun shading.",
      },
      {
        nameAr: "برجولات المجالس الزجاجية (Glass Pavilion Pergola)",
        nameEn: "Glass-Enclosed Garden Pavilion",
        descAr: "برجولة مغلقة بجوانب زجاجية سحاب وقابلة للتكييف كغرفة جلوس خارجية في الحديقة.",
        descEn: "Pergola enclosed with sliding glass curtains, fully air-conditioned for year-round gatherings.",
      },
    ],
    idealFor: [
      { ar: "أسطح الرووف في الفلل والشقق الدوبلكس", en: "Duplex & Villa Rooftop Terraces" },
      { ar: "جلسات الحدائق والمسابح الخاصة", en: "Private Pool Decks & Garden Lounges" },
      { ar: "تراسات المطاعم والمقاهي الراقية", en: "Fine Dining Restaurant Terraces" },
      { ar: "مداخل واستراحات الضيافة", en: "Hospitality Resorts & VIP Lounges" },
    ],
  },
  {
    slug: "frameless-glass",
    calculatorType: "frameless_glass",
    title: {
      ar: "الزجاج السيكوريت والفريملس (Frameless Glass)",
      en: "Frameless Tempered Glass & Balustrades",
    },
    subtitle: {
      ar: "درابزينات زجاجية للسلالم والبلكونات، كبائن شاور، وقواطع زجاجية بدون إطارات مزعجة",
      en: "Minimalist glass railings, frameless shower cabins, and interior office partitions",
    },
    shortDesc: {
      ar: "تنفيذ زجاج سيكوريت مقسى 10مم و 12مم وإكسسوارات ستانلس ستيل 316 المقاومة للصدأ.",
      en: "Execution of 10mm & 12mm tempered safety glass with marine-grade 316 stainless steel fittings.",
    },
    longDesc: {
      ar: "يعطي الزجاج الفريملس إحساساً لا يضاهى بالاتساع والحداثة في التصاميم الداخلية والخارجية. نقوم في مصنعنا بقص وتقسية الزجاج السيكوريت (Tempering) بأفران حديثة تمنحه قوة تعادل 5 أضعاف الزجاج العادي، ونركب درابزينات الزجاج للسلالم والبلكونات بقطاعات ألمنيوم أرضية مخفية أو إكسسوارات سبايدر ستانلس ستيل مقاومة للرطوبة البحرية في جدة.",
      en: "Frameless architectural glass maximizes interior space transparency. We process tempered and laminated glass up to 5x standard strength, crafting elegant staircase balustrades, frameless bathroom showers, and executive office partitions with marine-grade stainless steel 316 hardware.",
    },
    heroImage: "/images/services/frameless-glass.svg",
    features: [
      { ar: "زجاج سيكوريت مقسى حرارياً 10مم و 12مم فائق الأمان", en: "10mm & 12mm thermally tempered high-safety glass" },
      { ar: "إكسسوارات ومفصلات ومسكات ستانلس ستيل Grade 316 مضاد للصدأ", en: "Marine-grade 316 stainless steel hinges, clamps, and handles" },
      { ar: "رؤية بانورامية نقية 100% بدون أي قواطع ألمنيوم تحجب الإطلالة", en: "100% unhindered panoramic views without obstructive frames" },
      { ar: "درابزينات أرضية مخفية تتحمل صدمات قوية مطابقة للكود السعودي", en: "Concealed base shoe balustrades engineered for heavy impact safety" },
    ],
    specifications: [
      { labelAr: "سماكة الزجاج", labelEn: "Glass Thickness", valueAr: "10مم، 12مم سيكوريت، أو 8+8 دبل مصفح", valueEn: "10mm, 12mm Tempered or 8+8mm Laminated" },
      { labelAr: "معدن الإكسسوارات", labelEn: "Hardware Alloy", valueAr: "ستانلس ستيل 316 بحري مصقول أو أسود مطفي", valueEn: "Stainless Steel 316 Satin / Matte Black" },
      { labelAr: "شفافية الزجاج", labelEn: "Glass Clarity", valueAr: "زجاج فائق النقاء كلير / إكسترا كلير (Low Iron)", valueEn: "Standard Clear or Ultra-Clear Low-Iron" },
      { labelAr: "قوة التحمل", labelEn: "Impact Rating", valueAr: "يتحمل أحمال دفع أفقية تفوق 1.5 كيلو نيوتن/متر", valueEn: "Horizontal line load exceeds 1.5 kN/m" },
    ],
    systemVariants: [
      {
        nameAr: "درابزين الزجاج الأرضي المخفي (Glass Balustrade)",
        nameEn: "Embedded Shoe Glass Railing",
        descAr: "لوح زجاجي يخرج مباشرة من الأرضية بدون أي أعمدة أو براغي ظاهرة لإطلالة ساحرة للبلكونات والمسابح.",
        descEn: "Seamless glass cantilevered from hidden floor aluminum base profiles for villas and balconies.",
      },
      {
        nameAr: "كبائن الشاور الزجاجية الفاخرة (Frameless Shower Cabins)",
        nameEn: "Luxury Frameless Showers",
        descAr: "تفصيل حسب المقاس بدقة مع زجاج معالج بطبقة نانو تمنع ترسب قطرات الماء والتكلسات.",
        descEn: "Custom tailored bathroom glass enclosures treated with easy-clean anti-limescale nano coating.",
      },
      {
        nameAr: "قواطع المكاتب الزجاجية والزجاج الذكي (Office Partitions)",
        nameEn: "Acoustic Glass Office Partitions",
        descAr: "عزل صوتي فائق للمكاتب والشركات مع إمكانية إضافة الزجاج الذكي التفاعلي القابل للتحول إلى معتم بضغطة زر.",
        descEn: "Modern acoustic office dividing walls with optional switchable privacy smart glass.",
      },
    ],
    idealFor: [
      { ar: "درابزين السلالم والبلكونات للفلل والقصور", en: "Interior Staircases & Balconies" },
      { ar: "حمامات الماستر والكبائن الفاخرة", en: "Master Bathrooms & Luxury Showers" },
      { ar: "أبراج المكاتب والشركات المفتوحة", en: "Corporate Executive Offices" },
      { ar: "أسوار المسابح والواجهات البحرية", en: "Pool Safety Enclosures & Oceanfront Decks" },
    ],
  },
  {
    slug: "custom-aluminum",
    calculatorType: "custom_aluminum",
    title: {
      ar: "أعمال الألمنيوم التخصصية والمشربيات المعمارية",
      en: "Custom Architectural Aluminum & Mashrabiya",
    },
    subtitle: {
      ar: "قص ليزر، شرائح لوفرز، كاسرات شمس، ومشربيات إسلامية عصرية تحاكي التراث السعودي",
      en: "Laser-cut decorative screens, modern Islamic Mashrabiya, and customized sun louvers",
    },
    shortDesc: {
      ar: "تصنيع مشربيات ألمنيوم بالليزر، كاسرات شمس ذكية، بوابات وتكسيات معمارية فريدة.",
      en: "Fabrication of laser-cut aluminum Mashrabiya screens, architectural louvers, and bespoke gates.",
    },
    longDesc: {
      ar: "نلبي شغف المصممين والمهندسين المعماريين بتنفيذ أصعب وأدق تفاصيل الألمنيوم الخاصة. نقوم بقص ألواح الألمنيوم بالليزر (CNC Laser Cutting) لتشكيل نقوش إسلامية وزخارف هندسية مستوحاة من المشربيات الحجازية العريقة برؤية معاصرة، وتصنيع كاسرات الشمس المتحركة والثابتة (Aerofoil Sun Louvers) وبوابات القصور المزخرفة المقاومة لتقلبات الطقس.",
      en: "Bringing architectural visions to life through bespoke aluminum craftsmanship. We precision CNC laser-cut decorative Islamic patterns reflecting traditional Hejazi heritage into contemporary facades, engineer motorized aerofoil sun louvers, and build monumental entrance gates.",
    },
    heroImage: "/images/services/custom-aluminum.svg",
    features: [
      { ar: "قص ليزر سي إن سي بدقة متناهية لأي نقش أو تصميم معزز", en: "Sub-millimeter CNC laser cutting for custom intricate ornamental motifs" },
      { ar: "كاسرات شمس (Aerofoil Sun Louvers) تخفف وهج الشمس الحارق", en: "Architectural aerofoil louvers cutting thermal radiation and glare" },
      { ar: "حفاظ على الخصوصية الكاملة مع السماح بمرور الإضاءة الطبيعية", en: "Ensures total residential privacy while permitting gentle daylight" },
      { ar: "دهان حراري بمئات الألوان وتأثيرات الصدأ والبرونز والذهب", en: "Artisan powder finishes: bronze, brushed brass, champagne, and gold" },
    ],
    specifications: [
      { labelAr: "سماكة الألمنيوم للقص", labelEn: "Plate Thickness", valueAr: "من 3مم إلى 10مم ألواح ألمنيوم صلبة", valueEn: "3mm to 10mm Solid Marine-Grade Plate" },
      { labelAr: "دقة ماكينة الليزر", labelEn: "Laser Precision", valueAr: "ألياف فايبر ليزر بدقة ± 0.05 مم", valueEn: "Fiber Laser Precision ± 0.05mm" },
      { labelAr: "تجهيز السطح", labelEn: "Pre-Treatment", valueAr: "معالجة كيميائية سباعية المراحل قبل الدهان", valueEn: "7-Stage Chemical Immersion Pretreatment" },
      { labelAr: "إمكانية التحريك", labelEn: "Motorization", valueAr: "تتوفر كاسرات شمس متحركة بمحركات ذكية", valueEn: "Available with Integrated Smart Actuators" },
    ],
    systemVariants: [
      {
        nameAr: "المشربيات الإسلامية العصرية (Modern Mashrabiya)",
        nameEn: "Modern Architectural Mashrabiya",
        descAr: "دمج روح العمارة الحجازية الأصيلة مع طراز الفلل المودرن لتوفير الخصوصية وجمال الظلال المتداخلة.",
        descEn: "Blending historic Hejazi architecture with modern villas for privacy and intricate shadow play.",
      },
      {
        nameAr: "كاسرات الشمس الهندسية (Aerofoil Louvers)",
        nameEn: "Architectural Sun Shade Louvers",
        descAr: "شفرات ألمنيوم انسيابية أفقية أو عمودية تكسر أشعة الشمس المباشرة عن واجهات الزجاج الغربية والجنوبية.",
        descEn: "Aerodynamic blades shielding western and southern glass elevations from intense solar gain.",
      },
      {
        nameAr: "البوابات والأسوار الديكورية (Bespoke Gates & Fences)",
        nameEn: "Custom Architectural Gates",
        descAr: "بوابات فلل وقصور مودرن تجمع بين قص الليزر والإنارة المخفية والتحكم الإلكتروني الذكي.",
        descEn: "Monumental villa gates integrating backlit laser panels and automated gate openers.",
      },
    ],
    idealFor: [
      { ar: "واجهات الفلل السكنية والقصور", en: "Private Villas & Palatial Residences" },
      { ar: "المباني الحكومية والثقافية والمتاحف", en: "Cultural Museums & Institutional HQs" },
      { ar: "الفنادق ومداخل المنتجعات السياحية", en: "Boutique Hotels & Luxury Entrances" },
      { ar: "المباني الخضراء الموفرة للطاقة", en: "LEED & Green Certified Architecture" },
    ],
  },
];
