# شركة أحمد عبد الصمد للألمنيوم والزجاج
## Ahmed Abdulsamad Aluminum & Glass Co.

A modern, production-ready, bilingual (Arabic default RTL + English LTR) website and parametric 3D estimator built for **Ahmed Abdulsamad Aluminum & Glass Co.** in Jeddah, Saudi Arabia.

---

## 🌟 Key Highlights & Features

1. **Bilingual RTL First Architecture**:
   - Arabic RTL by default (`dir="rtl"`, `lang="ar"`).
   - Instant English toggle (`EN` / `العربية`) persisted across sessions via `LanguageContext` and `localStorage`.
   - Typography: **Cairo** for Arabic and **Inter** for English.

2. **Interactive 3D Engine (React Three Fiber + Three.js)**:
   - **Hero 3D**: Multi-bay architectural curtain-wall & glass window facade with slow ambient rotation, pointer parallax, and scroll-interactive panel assembly.
   - **Configurator 3D**: Live resizing model that reflects entered width and height in meters in real-time, complete with dimension lines, opening mechanisms (Sliding, Casement, Tilt & Turn, Fixed, Louvered), PBR brushed aluminum finishes, and realistic glass materials (Clear, Double-Glazed, Low-E, Acoustic Laminated, Solar Tinted).
   - Procedural geometry with clean drop-in architecture for custom `.glb` / `.gltf` 3D models.

3. **Multi-Item Project Bill of Quantities (BOQ) Calculator**:
   - Scope selection: Villa (فيلا), Apartment (شقة), Commercial Showroom (معرض), Building Facade (برج / واجهة كاملة).
   - Add, duplicate, delete, and switch active items for live 3D inspection.
   - Live calculations: Area ($m^2$), unit price, item subtotal, factory installation (+10%), city delivery rates across Saudi Arabia, 15% Saudi VAT (ZATCA), and grand total.
   - Export options:
     - **WhatsApp**: Pre-formatted itemized quotation sent directly to `01270201336`.
     - **PDF Quotation**: Client-side generated high-res official quote with company logo, quote number, date, itemized table, and factory stamp.
     - **Share Link**: Serializes project state into URL hash for one-click sharing.
     - **LocalStorage**: Preserves project items across reloads.

4. **SEO & Accessibility**:
   - Pre-rendered static pages for all 8 services, projects, and calculator.
   - Dynamic `sitemap.ts` and `robots.ts`.
   - OpenGraph, Twitter Cards, and `schema.org` `HomeAndConstructionBusiness` structured data.
   - Clear disclaimer: *"تقدير مبدئي وليس عرض سعر نهائي"*.

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata & JSON-LD
│   ├── page.tsx                # Home page (3D Hero, Stats, 5-Step Workflow, FAQ)
│   ├── calculator/page.tsx     # 3D Configurator & Project BOQ Calculator
│   ├── services/page.tsx       # All 8 services index
│   ├── services/[slug]/page.tsx# Individual service detail pages
│   ├── projects/page.tsx       # Filterable projects portfolio (Gov/Com/Res)
│   ├── about/page.tsx          # Factory history, CNC machines & Vision 2030
│   ├── contact/page.tsx        # Contact form, phone, WhatsApp & Google Map
│   ├── sitemap.ts              # XML Sitemap generator
│   └── robots.ts               # Robots.txt
├── components/
│   ├── 3d/
│   │   ├── HeroFacade3D.tsx    # Interactive 3D Hero facade
│   │   └── Configurator3D.tsx  # Parametric live-resizing 3D product viewer
│   ├── layout/
│   │   ├── Header.tsx          # Sticky glass navigation & language switcher
│   │   ├── Footer.tsx          # Comprehensive footer with CR & VAT info
│   │   └── FloatingWhatsApp.tsx# Persistent WhatsApp quick chat launcher
│   └── home/                   # Hero, Stats, Workflow, WhyUs, FAQ sections
├── config/
│   ├── site.config.ts          # Central company contacts, phone, address
│   ├── pricing.config.ts       # ⚠️ EDITABLE PRICING: Base rates, multipliers, VAT
│   ├── services.data.ts        # Specifications for all 8 service lines
│   ├── projects.data.ts        # Saudi Arabia portfolio projects
│   └── translations.ts         # Bilingual dictionary (Arabic & English)
├── context/
│   ├── LanguageContext.tsx     # Locale & direction management
│   └── QuoteCalculatorContext.tsx # BOQ state, math formulas & local storage
└── utils/
    └── pdfGenerator.ts         # Client-side formal quotation PDF generator
```

---

## 🛠️ How to Customize & Edit

### 1. How to Edit Prices, Multipliers, Delivery & VAT
All financial and pricing calculations are located in a single file:
👉 **`src/config/pricing.config.ts`**

- **Base Prices ($SAR/m^2$)**: Update `PRICING_CONFIG.basePricePerM2`
- **System Tier Multipliers**: Update `PRICING_CONFIG.systemTierMultipliers` (Economy, Standard, Premium)
- **Glass Multipliers**: Update `PRICING_CONFIG.glassTypeMultipliers` (Single, Double, Low-E, Laminated)
- **Finish Multipliers**: Update `PRICING_CONFIG.finishTypeMultipliers` (Powder Coat, Anodized, Wood)
- **Installation Rate**: Update `PRICING_CONFIG.installationRate` (e.g. `0.10` for 10%)
- **City Delivery Rates**: Update `PRICING_CONFIG.deliveryCities`
- **VAT Rate**: Update `PRICING_CONFIG.vatRate` (default: `0.15` for Saudi 15%)

### 2. How to Edit Phone, WhatsApp, Address & Working Hours
All contact information is centralized in:
👉 **`src/config/site.config.ts`**

- **Phone & WhatsApp**:
  ```ts
  phone: "01270201336",
  phoneDisplay: "012 702 01336",
  phoneInternational: "+9661270201336",
  whatsappNumber: "9661270201336",
  ```
  Updating this single file automatically updates all `tel:`, `wa.me`, header, footer, contact page, and schema.org links.

- **Address & Google Maps Embed**:
  Change `siteConfig.contact.address.googleMapEmbedUrl` to your exact factory pin.

### 3. How to Swap in Your Own Custom 3D Models (`.glb` / `.gltf`)
Both 3D components (`HeroFacade3D.tsx` and `Configurator3D.tsx`) are pre-structured for `.glb` models:

1. Place your exported `.glb` file in `/public/models/hero-facade.glb`.
2. Open `src/components/3d/HeroFacade3D.tsx`.
3. Import `useGLTF`:
   ```tsx
   import { useGLTF } from "@react-three/drei";
   ```
4. Replace the procedural `<FacadeMesh />` with:
   ```tsx
   function FacadeMesh() {
     const { scene } = useGLTF('/models/hero-facade.glb');
     return <primitive object={scene} scale={[1, 1, 1]} />;
   }
   ```

### 4. How to Add or Edit Projects
Edit `src/config/projects.data.ts`:
Add items with category `government`, `commercial`, or `residential`.

### 5. How to Edit Services
Edit `src/config/services.data.ts` to adjust technical specifications, system variants, and features for any of the 8 services.

---

## 🚀 Running the Project Locally

```bash
# Navigate to the project directory
cd C:\Users\Matar\.gemini\antigravity\scratch\abdulsamad-aluminum-glass

# Run the development server
npm run dev

# Or run the production build
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
