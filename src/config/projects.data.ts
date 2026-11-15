/**
 * Ahmed Abdulsamad Aluminum & Glass Co. - Projects Portfolio
 * قاعدة بيانات المشاريع المنجزة مع تصنيفات (حكومي / تجاري / سكني)
 */

export type ProjectCategory = "all" | "government" | "commercial" | "residential";

export interface ProjectItem {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  category: "government" | "commercial" | "residential";
  categoryLabel: { ar: string; en: string };
  location: { ar: string; en: string };
  year: number;
  areaM2: number;
  client: { ar: string; en: string };
  scopeOfWork: { ar: string; en: string };
  systemsUsed: Array<{ ar: string; en: string }>;
  description: { ar: string; en: string };
  highlights: Array<{ ar: string; en: string }>;
  image: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "jeddah-financial-tower",
    title: {
      ar: "برج الأعمال والمال - طريق الملك عبدالعزيز",
      en: "Jeddah Business & Financial Tower",
    },
    category: "commercial",
    categoryLabel: { ar: "مشاريع تجارية وأبراج", en: "Commercial & Towers" },
    location: { ar: "طريق الملك عبدالعزيز، جدة", en: "King Abdulaziz Road, Jeddah" },
    year: 2024,
    areaM2: 7800,
    client: { ar: "شركة إعمار المستقبل للاستثمار", en: "Future Horizons Real Estate" },
    scopeOfWork: {
      ar: "واجهات كرتن وول زجاجية إنشائية (Unitized Facade) + كلادينج ألمنيوم مقاوم للحريق A2",
      en: "Unitized Structural Curtain Wall + Fire-rated A2 Aluminum Cladding",
    },
    systemsUsed: [
      { ar: "نظام كرتن وول مسبق الصنع 160مم", en: "160mm Unitized Curtain Wall" },
      { ar: "زجاج دبل عاكس Low-E من شركة جاردين", en: "Guardian Double Low-E Glass" },
      { ar: "كلادينج PVDF ميتاليك رمادي داكن", en: "Dark Anthracite Metallic PVDF Cladding" },
    ],
    description: {
      ar: "تنفيذ وتكسية الواجهات الزجاجية لبرج تجاري بارتفاع 18 طابقاً، شمل العمل التصنيع المسبق للوحدات الزجاجية في مصنعنا بجدة وتركيبها برافعة برجية متطورة بمعدل إنجاز قياسي وفق مواصفات كود البناء السعودي.",
      en: "Complete engineering, fabrication and installation of an 18-story commercial tower facade. Pre-glazed unitized panels fabricated at our Jeddah factory allowed rapid crane-assisted erection with zero scaffolding footprint.",
    },
    highlights: [
      { ar: "توفير 38% من استهلاك طاقة التكييف السنوية للبرج", en: "38% reduction in annual HVAC electricity consumption" },
      { ar: "مقاومة رياح بحرية عاتية حتى 3200 باسكال", en: "Engineered for 3200 Pa coastal wind gusts" },
      { ar: "تسليم المشروع قبل الموعد التعاقدي بـ 45 يوماً", en: "Handed over 45 days ahead of schedule" },
    ],
    image: "/images/projects/project-commercial-tower.svg",
  },
  {
    id: "proj-2",
    slug: "ministry-branch-jeddah",
    title: {
      ar: "المجمع الإداري الحكومي الموحد",
      en: "Unified Government Administrative Complex",
    },
    category: "government",
    categoryLabel: { ar: "مشاريع حكومية ومؤسسية", en: "Government & Institutional" },
    location: { ar: "حي الأندلس، جدة", en: "Al-Andalus District, Jeddah" },
    year: 2023,
    areaM2: 12500,
    client: { ar: "جهة حكومية كبرى - مكة المكرمة", en: "Government Ministry - Makkah Region" },
    scopeOfWork: {
      ar: "واجهات كرتن وول أمنية، كاسرات شمس ومشربيات ألمنيوم مقصوصة بالليزر، وهياكل مظلات مواقف سيارات",
      en: "Security Curtain Wall, CNC Laser Cut Mashrabiya Screens, and Steel Parking Structures",
    },
    systemsUsed: [
      { ar: "نظام ألمنيوم معزول حرارياً مع زجاج أمني مصفح 30مم", en: "Thermal-Break Profile with 30mm Laminated Security Glazing" },
      { ar: "مشربيات ألمنيوم زخرفية سماكة 6مم", en: "6mm Solid CNC Laser-Cut Aluminum Mashrabiya" },
      { ar: "مظلات هيكلية كانتيليفر كانوبي بحديد سابك", en: "SABIC Steel Cantilever Parking Canopies" },
    ],
    description: {
      ar: "مشروع حكومي مرموق دمج بين الهيبة المؤسسية والهوية المعمارية الحجازية الأصيلة من خلال مشربيات ألمنيوم كاسرة للشمس، مع تطبيق أعلى اشتراطات الأمان والعزل الصوتي في القاعات والمكاتب الرسمية.",
      en: "A landmark governmental project fusing modern administrative gravitas with traditional Hejazi architectural accents. Incorporates high-security blast-mitigating curtain walls and laser-cut sun-shading mashrabiya louvers.",
    },
    highlights: [
      { ar: "مطابقة تامة لاعتمادات كود البناء السعودي والدفاع المدني", en: "Full compliance with SBC and Saudi Civil Defense approvals" },
      { ar: "عزل صوتي فائق 46dB للاجتماعات والقاعات الحساسة", en: "High 46dB acoustic privacy rating for executive chambers" },
      { ar: "أكثر من 250 موقف سيارات بمظلات حديد مجلفنة", en: "Over 250 shaded vehicle bays with hot-dip galvanized steel" },
    ],
    image: "/images/projects/project-government-complex.svg",
  },
  {
    slug: "al-shati-luxury-villa",
    id: "proj-3",
    title: {
      ar: "قصر الشاطئ المودرن - إطلالة بحرية",
      en: "Al-Shati Coastal Contemporary Villa",
    },
    category: "residential",
    categoryLabel: { ar: "قصور وفلل سكنية فاخرة", en: "Luxury Residential Villas" },
    location: { ar: "حي الشاطئ، جدة", en: "Al-Shati District, Jeddah" },
    year: 2024,
    areaM2: 2400,
    client: { ar: "مالك خاص - فيلا سكنية فاخرة", en: "Private VIP Villa Owner" },
    scopeOfWork: {
      ar: "أبواب سحاب عملاقة بانورامية (Slim Profile)، سماوية زجاجية هرمية، برجولة ذكية بيومناخية، ودرابزين زجاج فريملس",
      en: "Minimalist Panoramic Sliding Doors, Pyramid Glass Skylight, Bioclimatic Pergola & Frameless Balustrades",
    },
    systemsUsed: [
      { ar: "أنظمة سحاب ألمنيوم رويال بحافة رفيعة 20مم", en: "Royal Slimline 20mm Sightline Sliding System" },
      { ar: "زجاج دبل إكسترا كلير عازل للحرارة والصوت", en: "Ultra-Clear Low-Iron Acoustic Double Glazing" },
      { ar: "برجولة ذكية بمحركات سومفي الفرنسية وإضاءة مدمجة", en: "Somfy Motorized Bioclimatic Pergola with Ambient LEDs" },
    ],
    description: {
      ar: "تصميم وتنفيذ متكامل لقصر سكني حديث بجدة، يبرز فيه استخدام زجاج فائق النقاء وأبواب سحاب ترتفع لـ 3.2 متر بدون قواطع أفقية لتوفير إطلالة بحرية خلابة، مع حماية تامة ضد رطوبة وأملاح البحر.",
      en: "Full-scope architectural envelope for a lavish ocean-view private villa in Jeddah. Featuring seamless 3.2m floor-to-ceiling sliding glass portals, invisible-base balcony railings, and a smart motorized bioclimatic pergola.",
    },
    highlights: [
      { ar: "إطلالات بانورامية مفتوحة بنسبة زجاج 92%", en: "92% glass-to-frame ratio with minimal profiles" },
      { ar: "دهان ألمنيوم كواليكوت كلاس 2 مقاوم للملوحة البحرية", en: "Qualicoat Class 2 marine-grade seaside powder coating" },
      { ar: "سماوية زجاجية في البهو الرئيسي مع تصريف مياه أمطار مخفي", en: "Grand atrium skylight with 100% leak-proof weeping channels" },
    ],
    image: "/images/projects/project-luxury-villa.svg",
  },
  {
    id: "proj-4",
    slug: "red-sea-medical-center",
    title: {
      ar: "المركز الطبي التخصصي - طريق المدينة",
      en: "Red Sea Specialized Medical Center",
    },
    category: "commercial",
    categoryLabel: { ar: "مشاريع تجارية وأبراج", en: "Commercial & Towers" },
    location: { ar: "طريق المدينة المنورة، جدة", en: "Madinah Road, Jeddah" },
    year: 2023,
    areaM2: 5400,
    client: { ar: "مجموعة الرعاية الطبية المتحدة", en: "United Healthcare Alliance" },
    scopeOfWork: {
      ar: "واجهات زجاجية كرتن وول مضادة للبكتيريا، كلادينج أبيض لؤلؤي، وأبواب أوتوماتيكية ذكية بمستشعرات حركة",
      en: "Antibacterial Clinic Curtain Wall, Pearl White ACP Cladding, and Automatic Sensor Doors",
    },
    systemsUsed: [
      { ar: "نظام كرتن وول شبه إنشائي Semi-SG بعزل حراري عالي", en: "Semi-SG Structural Glazing with High U-Value Barrier" },
      { ar: "ألواح كلادينج ألمنيوم كورية مقاومة للبكتيريا والتعقيم", en: "Korean Antibacterial Fire-Rated ACP Cladding" },
      { ar: "محركات أبواب أوتوماتيكية ألمانية Besam / Dorma", en: "German Dorma / Besam Automatic Sliding Entrances" },
    ],
    description: {
      ar: "مجمع عيادات ومستشفى تخصصي راعينا فيه أدق معايير النظافة والعزل الصوتي والضوء الطبيعي المريح للمرضى، مع مدخل رئيسي زجاجي مزدوج الارتفاع وأبواب استشعار آلية بدون لمس.",
      en: "A state-of-the-art healthcare facility demanding stringent hygienic criteria, quiet acoustics, and glare-free natural lighting. Features double-height lobby glazing and touchless automatic entrances.",
    },
    highlights: [
      { ar: "عزل صوتي تام بين غرف العمليات والشارع الخارجي", en: "Complete acoustic isolation for clinical consultation rooms" },
      { ar: "مقاومة للمنظفات والتعقيم الكيميائي المستمر", en: "Resistant to aggressive hospital disinfectants and steam" },
      { ar: "إنجاز العمل وفق اشتراطات وزارة الصحة السعودية", en: "Fully approved by Saudi Ministry of Health inspectors" },
    ],
    image: "/images/projects/project-medical-center.svg",
  },
  {
    id: "proj-5",
    slug: "obhur-private-palace",
    title: {
      ar: "قصر أبحر الشمالية الملكي",
      en: "North Obhur Palatial Waterfront Estate",
    },
    category: "residential",
    categoryLabel: { ar: "قصور وفلل سكنية فاخرة", en: "Luxury Residential Villas" },
    location: { ar: "أبحر الشمالية، جدة", en: "North Obhur, Jeddah" },
    year: 2024,
    areaM2: 4100,
    client: { ar: "عميل VIP خاص", en: "Private VIP Client" },
    scopeOfWork: {
      ar: "واجهات زجاجية مزدوجة الارتفاع (Double Height Facades)، كبائن شاور زجاجية إكسترا كلير، درابزين سلالم ليزر وألمنيوم ذهبي",
      en: "Double-Height Glass Elevations, Ultra-Clear Showers, and Champagne Anodized Railings",
    },
    systemsUsed: [
      { ar: "قطاعات ألمنيوم ألمانية شوكو معزولة حرارياً بالكامل", en: "Schüco German Heavy-Duty Thermal Break Profiles" },
      { ar: "أنودايز شامبين إيطالي مقاوم للتآكل والملوحة", en: "Italian Champagne Anodized Architectural Finish" },
      { ar: "زجاج سيكوريت مصفح 12+12مم مع فيلم PVB صوتي", en: "12+12mm Laminated Acoustic Security Glass" },
    ],
    description: {
      ar: "تحفة معمارية استثنائية على شرم أبحر، تميزت بارتفاعات زجاجية شاهقة تصل إلى 7 أمتار للصالة الرئيسية، مجهزة بقطاعات ألمنيوم أنودايز بلون الشامبين الملكي وإكسسوارات ستانلس 316 بحرية.",
      en: "An architectural tour de force along the Obhur waterway. Featuring 7-meter-tall continuous glass bays for the primary majlis, champagne-anodized mullions, and marine-grade stainless fixtures.",
    },
    highlights: [
      { ar: "ألواح زجاجية بارتفاع 7 أمتار قطعة واحدة", en: "Monumental 7-meter single-span glass lites" },
      { ar: "ضمان 15 سنة على ثبات لون قطاعات الشامبين", en: "15-year warranty on color stability against salt spray" },
      { ar: "درابزين دراجات داخلية فريملس بدون أي مثبتات ظاهرة", en: "Frameless floating glass staircases with hidden hardware" },
    ],
    image: "/images/projects/project-obhur-palace.svg",
  },
  {
    id: "proj-6",
    slug: "yanbu-logistics-complex",
    title: {
      ar: "مجمع المستودعات والمكاتب اللوجستية",
      en: "Yanbu Industrial Logistics & Admin Complex",
    },
    category: "government",
    categoryLabel: { ar: "مشاريع حكومية وصناعية", en: "Government & Industrial" },
    location: { ar: "الهيئة الملكية، ينبع الصناعية", en: "Royal Commission, Yanbu Industrial" },
    year: 2023,
    areaM2: 18000,
    client: { ar: "شركة لوجستية وطنية بالشراكة الصناعية", en: "National Logistics Hub Authority" },
    scopeOfWork: {
      ar: "هياكل حديدية إنشائية للمستودعات، مكاتب إدارية كلادينج وكرتن وول، ومظلات شاحنات شد إنشائي",
      en: "Heavy Industrial Steel Warehousing, Admin Curtain Walls, and Heavy Vehicle Canopies",
    },
    systemsUsed: [
      { ar: "حديد إنشائي ثقيل مدهون بمواد إيبوكسي عالية المقاومة", en: "Heavy-Gauge Steel with Marine Epoxy Paint System" },
      { ar: "واجهات كرتن وول ستيك سيستم مخصصة لبيئة المصانع", en: "Industrial-Grade Stick Curtain Wall Systems" },
      { ar: "كلادينج مقاوم للحريق والزيوت والمواد الكيميائية", en: "Chemical & Fire-Resistant ACP Exterior Panels" },
    ],
    description: {
      ar: "مشروع صناعي ضخم تضمن توريد وتركيب أكثر من 300 طن من الحديد الإنشائي مع تكسيات الواجهات الزجاجية والألمنيوم لمبنى الإدارة التابع للمجمع اللوجستي بمدينة ينبع الصناعية.",
      en: "Massive industrial endeavor entailing over 300 metric tons of certified structural steelwork paired with high-performance curtain walls for the regional operations administration center.",
    },
    highlights: [
      { ar: "تركيب 18,000 متر مربع من الهياكل والواجهات", en: "Fabrication of 18,000 m² combined steel & facades" },
      { ar: "تحمل أحمال رياح ساحلية شديدة ودرجات حرارة تفوق 50°م", en: "Tested for coastal wind shears and 50°C+ ambient heat" },
      { ar: "إنجاز مطابق لمواصفات الهيئة الملكية الصارمة", en: "Compliant with rigorous Royal Commission RCJY guidelines" },
    ],
    image: "/images/projects/project-industrial-complex.svg",
  },
];
