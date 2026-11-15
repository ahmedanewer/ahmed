/**
 * Ahmed Abdulsamad Aluminum & Glass Co. - Site Configuration
 * شركة أحمد عبد الصمد للألمنيوم والزجاج - إعدادات وبيانات الشركة
 * 
 * Central configuration file for contact details, branding, working hours, and social media.
 * To change the phone, WhatsApp, address, email or working hours, edit the values below.
 */

export interface SiteConfig {
  name: {
    ar: string;
    en: string;
  };
  shortName: {
    ar: string;
    en: string;
  };
  tagline: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  logo: {
    monogramAr: string;
    monogramEn: string;
    establishedYear: number;
  };
  contact: {
    phone: string;              // Raw local number
    phoneDisplay: string;       // Formatted display
    phoneInternational: string; // Full international e.g. +9661270201336
    phoneTelLink: string;       // tel: URI
    whatsappNumber: string;     // Digits only for wa.me link
    whatsappLink: string;       // Direct WhatsApp link
    email: string;
    address: {
      ar: string;
      en: string;
      cityAr: string;
      cityEn: string;
      districtAr: string;
      districtEn: string;
      countryAr: string;
      countryEn: string;
      googleMapEmbedUrl: string;
      googleMapDirectionsUrl: string;
    };
    workingHours: {
      ar: string;
      en: string;
      daysAr: string;
      daysEn: string;
      timeAr: string;
      timeEn: string;
    };
    commercialRegister: string;
    vatNumber: string;
  };
  social: {
    whatsapp: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  };
  stats: {
    yearsExperience: number;
    completedProjects: number;
    fabricatedAreaM2: number;
    clientSatisfactionRate: number;
    warrantyYears: number;
  };
}

export const siteConfig: SiteConfig = {
  name: {
    ar: "شركة أحمد عبد الصمد للألمنيوم والزجاج",
    en: "Ahmed Abdulsamad Aluminum & Glass Co.",
  },
  shortName: {
    ar: "عبد الصمد للألمنيوم والزجاج",
    en: "Abdulsamad Aluminum & Glass",
  },
  tagline: {
    ar: "ريادة صناعية في تصنيع وتركيب واجهات المباني، النوافذ والأبواب المعمارية، والهياكل الإنشائية",
    en: "Pioneering Architectural Facades, Aluminum Windows & Doors, and Structural Steel Engineering",
  },
  description: {
    ar: "مصنع وطني رائد في مدينة جدة متخصص في تصنيع وتركيب واجهات الكرتن وول، قطاعات الألمنيوم المعزولة حرارياً، الزجاج الإنشائي، الهياكل الحديدية والبرجولات بأعلى معايير الجودة المعتمدة ومواصفات كود البناء السعودي.",
    en: "A leading industrial factory in Jeddah, Saudi Arabia, specializing in architectural curtain walls, thermal-break aluminum windows, structural glazing, steel structures, and modern pergolas complying with Saudi Building Code (SBC).",
  },
  logo: {
    monogramAr: "أ ع",
    monogramEn: "AA",
    establishedYear: 2011,
  },
  contact: {
    // Exact phone & WhatsApp specified in requirements: 01270201336
    phone: "01270201336",
    phoneDisplay: "012 702 01336",
    // Standard Saudi format: +966 12 702 01336. If using international prefix:
    phoneInternational: "+9661270201336",
    phoneTelLink: "tel:01270201336",
    whatsappNumber: "9661270201336", // Country code 966 + 1270201336
    whatsappLink: "https://wa.me/9661270201336",
    email: "info@abdulsamad-glass.com",
    address: {
      ar: "مدينة جدة، المنطقة الصناعية / شارع المكرونة، المملكة العربية السعودية",
      en: "Jeddah Industrial Area, Al-Makrona District, Jeddah, Saudi Arabia",
      cityAr: "جدة",
      cityEn: "Jeddah",
      districtAr: "المنطقة الصناعية",
      districtEn: "Industrial District",
      countryAr: "المملكة العربية السعودية",
      countryEn: "Saudi Arabia",
      // Embedded Google Map for Jeddah
      googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118804.88874635105!2d39.11718859999999!3d21.543333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa",
      googleMapDirectionsUrl: "https://maps.google.com/?q=Jeddah+Saudi+Arabia",
    },
    workingHours: {
      ar: "السبت – الخميس: 8:00 صباحاً – 5:00 مساءً (الجمعة مغلق)",
      en: "Saturday – Thursday: 8:00 AM – 5:00 PM (Friday Closed)",
      daysAr: "السبت – الخميس",
      daysEn: "Saturday – Thursday",
      timeAr: "8:00 ص – 5:00 م",
      timeEn: "8:00 AM – 5:00 PM",
    },
    commercialRegister: "4030298412",
    vatNumber: "310492837100003",
  },
  social: {
    whatsapp: "https://wa.me/9661270201336",
    instagram: "https://instagram.com/abdulsamad_aluminum",
    linkedin: "https://linkedin.com/company/abdulsamad-aluminum",
    twitter: "https://x.com/abdulsamad_sa",
  },
  stats: {
    yearsExperience: 15,
    completedProjects: 1450,
    fabricatedAreaM2: 52000,
    clientSatisfactionRate: 98,
    warrantyYears: 10,
  },
};
