import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { QuoteCalculatorProvider } from "@/context/QuoteCalculatorContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/config/site.config";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulsamad-glass.com"),
  title: {
    default: "شركة أحمد عبد الصمد للألمنيوم والزجاج | واجهات كرتن وول ونوافذ معمارية بجدة",
    template: "%s | شركة أحمد عبد الصمد للألمنيوم والزجاج",
  },
  description:
    "مصنع وطني رائد في مدينة جدة متخصص في تصنيع وتركيب واجهات الكرتن وول، قطاعات الألمنيوم المعزولة حرارياً، الزجاج الإنشائي، الكلادينج والهياكل الإنشائية بأعلى معايير كود البناء السعودي SBC.",
  keywords: [
    "ألمنيوم جدة",
    "واجهات كرتن وول",
    "زجاج سيكوريت جدة",
    "مصنع ألمنيوم",
    "أحمد عبد الصمد للألمنيوم والزجاج",
    "نوافذ سرايا ورويال",
    "Thermal Break aluminum",
    "كلادينج مقاوم للحريق",
    "برجولات ألمنيوم مودرن",
    "قبب زجاجية سكاي لايت",
  ],
  authors: [{ name: "Ahmed Abdulsamad Aluminum & Glass Co." }],
  creator: "شركة أحمد عبد الصمد للألمنيوم والزجاج",
  publisher: "شركة أحمد عبد الصمد للألمنيوم والزجاج",
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
      "en-US": "/?lang=en",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
    url: "https://abdulsamad-glass.com",
    title: "شركة أحمد عبد الصمد للألمنيوم والزجاج - جدة",
    description:
      "تصنيع وتوريد واجهات المباني الزجاجية، أنظمة الألمنيوم الحرارية، والكلادينج والهياكل الإنشائية بجدة.",
    siteName: "شركة أحمد عبد الصمد للألمنيوم والزجاج",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة أحمد عبد الصمد للألمنيوم والزجاج",
    description:
      "حلول معمارية متكاملة للواجهات والنوافذ والهياكل الإنشائية بجدة.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name.ar,
    alternateName: siteConfig.name.en,
    description: siteConfig.description.ar,
    url: "https://abdulsamad-glass.com",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.districtAr,
      addressLocality: siteConfig.contact.address.cityAr,
      addressRegion: "منطقة مكة المكرمة",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.5433,
      longitude: 39.1728,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
  };

  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950">
        <LanguageProvider>
          <QuoteCalculatorProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingWhatsApp />
          </QuoteCalculatorProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
