/**
 * Ahmed Abdulsamad Aluminum & Glass Co. - Client-Side PDF Quotation Generator
 * أداة إنشاء وطباعة عروض الأسعار الرسمية من جانب العميل مباشرة بصيغة PDF
 */

import { jsPDF } from "jspdf";
import { CalculatedItem, ProjectTotals, CustomerInfo } from "@/context/QuoteCalculatorContext";
import { siteConfig } from "@/config/site.config";
import { PRICING_CONFIG, ProjectScopeType } from "@/config/pricing.config";
import { TRANSLATIONS, Locale } from "@/config/translations";

interface GenerateQuotePDFProps {
  items: CalculatedItem[];
  totals: ProjectTotals;
  customerInfo: CustomerInfo;
  projectScope: ProjectScopeType;
  selectedCityName: string;
  locale: Locale;
}

export function generateQuotePDF({
  items,
  totals,
  customerInfo,
  projectScope,
  selectedCityName,
  locale,
}: GenerateQuotePDFProps) {
  const quoteNumber = `AA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const currentDate = new Date().toLocaleDateString(locale === "ar" ? "ar-SA" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const t = TRANSLATIONS[locale];

  // We can open a dedicated high-resolution, print-ready formal invoice layout
  // that can be saved directly as PDF via the browser's native Print to PDF
  // or downloaded directly. This ensures 100% accurate Arabic RTL typography,
  // perfect tables, company monogram badge, and official stamp.
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Please allow popups to download your quotation PDF.");
    return;
  }

  const isRtl = locale === "ar";

  const htmlContent = `
<!DOCTYPE html>
<html lang="${locale}" dir="${isRtl ? "rtl" : "ltr"}">
<head>
  <meta charset="UTF-8">
  <title>${isRtl ? "عرض سعر تقديري" : "Quotation"} - ${quoteNumber} - ${siteConfig.name[locale]}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;600;700&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: ${isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
      background-color: #f8fafc;
      color: #0f172a;
      padding: 30px;
      font-size: 13px;
      line-height: 1.5;
    }
    .invoice-card {
      max-width: 900px;
      margin: 0 auto;
      background: #ffffff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border: 1px solid #e2e8f0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 20px;
      margin-bottom: 25px;
    }
    .logo-badge {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .monogram {
      width: 58px;
      height: 58px;
      background: #0f172a;
      border: 2px solid #d4af37;
      color: #d4af37;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      font-weight: 800;
    }
    .company-info h1 {
      font-size: 18px;
      font-weight: 800;
      color: #0f172a;
    }
    .company-info p {
      font-size: 11px;
      color: #64748b;
    }
    .quote-meta {
      text-align: ${isRtl ? "left" : "right"};
    }
    .quote-badge {
      display: inline-block;
      background: #d4af37;
      color: #0f172a;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 13px;
      margin-bottom: 6px;
    }
    .meta-text {
      font-size: 11px;
      color: #475569;
    }
    .client-details-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      background: #f1f5f9;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 25px;
    }
    .detail-item {
      font-size: 12px;
    }
    .detail-item strong {
      color: #0f172a;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 25px;
    }
    th {
      background: #0f172a;
      color: #ffffff;
      padding: 10px 8px;
      font-size: 11px;
      font-weight: 600;
      text-align: ${isRtl ? "right" : "left"};
      border: 1px solid #0f172a;
    }
    td {
      padding: 10px 8px;
      border: 1px solid #e2e8f0;
      font-size: 11px;
      vertical-align: middle;
    }
    tr:nth-child(even) {
      background-color: #f8fafc;
    }
    .totals-area {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 25px;
    }
    .totals-box {
      width: 320px;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 15px;
    }
    .total-row {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
      font-size: 12px;
      border-bottom: 1px dashed #e2e8f0;
    }
    .grand-total {
      border-top: 2px solid #0f172a;
      border-bottom: none;
      padding-top: 10px;
      margin-top: 6px;
      font-size: 15px;
      font-weight: 800;
      color: #0f172a;
    }
    .grand-total span:last-child {
      color: #b45309;
    }
    .disclaimer-box {
      background: #fffbeb;
      border-right: ${isRtl ? "4px solid #f59e0b" : "none"};
      border-left: ${isRtl ? "none" : "4px solid #f59e0b"};
      padding: 12px 16px;
      border-radius: 4px;
      font-size: 11px;
      color: #92400e;
      margin-bottom: 25px;
    }
    .footer-signatures {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
    }
    .stamp-box {
      border: 2px dashed #94a3b8;
      border-radius: 8px;
      padding: 15px 25px;
      text-align: center;
      color: #64748b;
      font-size: 11px;
    }
    .print-bar {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .btn-print {
      background: #0f172a;
      color: #ffffff;
      padding: 10px 24px;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .btn-print:hover {
      background: #d4af37;
      color: #0f172a;
    }
    @media print {
      body {
        padding: 0;
        background: transparent;
      }
      .invoice-card {
        box-shadow: none;
        border: none;
        padding: 0;
      }
      .print-bar {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <div class="print-bar">
    <button class="btn-print" onclick="window.print()">
      🖨️ ${isRtl ? "طباعة أو حفظ بصيغة PDF (Print / Save as PDF)" : "Print / Save as PDF"}
    </button>
    <span style="color:#64748b; font-size:12px;">${siteConfig.name[locale]}</span>
  </div>

  <div class="invoice-card">
    <div class="header">
      <div class="logo-badge">
        <div class="monogram">${siteConfig.logo.monogramAr}</div>
        <div class="company-info">
          <h1>${siteConfig.name[locale]}</h1>
          <p>${siteConfig.tagline[locale]}</p>
          <p>${siteConfig.contact.address[locale]} • هاتف: ${siteConfig.contact.phone}</p>
        </div>
      </div>
      <div class="quote-meta">
        <div class="quote-badge">${isRtl ? "عرض سعر استرشادي" : "Preliminary Quote"}</div>
        <div class="meta-text"><strong>${isRtl ? "رقم العرض:" : "Quote #:"}</strong> ${quoteNumber}</div>
        <div class="meta-text"><strong>${isRtl ? "التاريخ:" : "Date:"}</strong> ${currentDate}</div>
        <div class="meta-text"><strong>${isRtl ? "صالح لمدة:" : "Validity:"}</strong> 15 ${isRtl ? "يوماً" : "Days"}</div>
      </div>
    </div>

    <div class="client-details-grid">
      <div class="detail-item">
        <strong>${isRtl ? "اسم العميل:" : "Client Name:"}</strong> ${customerInfo.name || (isRtl ? "عميل كريم" : "Valued Client")}
      </div>
      <div class="detail-item">
        <strong>${isRtl ? "رقم الهاتف:" : "Phone:"}</strong> ${customerInfo.phone || siteConfig.contact.phone}
      </div>
      <div class="detail-item">
        <strong>${isRtl ? "المدينة وموقع المشروع:" : "Project City:"}</strong> ${customerInfo.city || selectedCityName}
      </div>
      <div class="detail-item">
        <strong>${isRtl ? "نوع المشروع:" : "Project Scope:"}</strong> ${t.calc.projectScopes[projectScope]}
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>${isRtl ? "البند والمنتج" : "Item & Product"}</th>
          <th>${isRtl ? "الأبعاد (م)" : "Size (m)"}</th>
          <th>${isRtl ? "المساحة" : "Area"}</th>
          <th>${isRtl ? "المواصفات والزجاج والدهان" : "System, Glass & Finish"}</th>
          <th>${isRtl ? "الكمية" : "Qty"}</th>
          <th>${isRtl ? "سعر الوحدة" : "Unit (SAR)"}</th>
          <th>${isRtl ? "الإجمالي" : "Total (SAR)"}</th>
        </tr>
      </thead>
      <tbody>
        ${items
          .map(
            (it, idx) => `
          <tr>
            <td style="text-align:center; font-weight:bold;">${idx + 1}</td>
            <td><strong>${it.name}</strong><br><span style="color:#64748b; font-size:10px;">${t.products[it.productType]} (${t.openings[it.openingType]})</span></td>
            <td style="text-align:center;">${it.width} × ${it.height}</td>
            <td style="text-align:center;">${it.areaM2} م²</td>
            <td style="font-size:10px;">
              • ${t.tiers[it.systemTier]}<br>
              • ${t.glasses[it.glassType]}<br>
              • ${t.finishes[it.finishType]}
            </td>
            <td style="text-align:center; font-weight:bold;">${it.quantity}</td>
            <td style="text-align:right;">${it.unitPriceSAR.toLocaleString()}</td>
            <td style="text-align:right; font-weight:bold;">${it.totalPriceSAR.toLocaleString()}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>

    <div class="totals-area">
      <div class="totals-box">
        <div class="total-row">
          <span>${isRtl ? "مجموع الأعمال الفرعي:" : "Items Subtotal:"}</span>
          <span>${totals.itemsSubtotalSAR.toLocaleString()} ${isRtl ? "ر.س" : "SAR"}</span>
        </div>
        ${
          totals.installationFeeSAR > 0
            ? `
        <div class="total-row">
          <span>${isRtl ? "التركيب الموقعي بالضمان (10%):" : "Installation (10%):"}</span>
          <span>${totals.installationFeeSAR.toLocaleString()} ${isRtl ? "ر.س" : "SAR"}</span>
        </div>
        `
            : ""
        }
        <div class="total-row">
          <span>${isRtl ? "الشحن والتوصيل (" + selectedCityName + "):" : "Delivery Fee:"}</span>
          <span>${totals.deliveryFeeSAR === 0 ? (isRtl ? "مجاني" : "Free") : totals.deliveryFeeSAR.toLocaleString() + (isRtl ? " ر.س" : " SAR")}</span>
        </div>
        <div class="total-row">
          <span>${isRtl ? "ضريبة القيمة المضافة (15%):" : "VAT (15%):"}</span>
          <span>${totals.vatAmountSAR.toLocaleString()} ${isRtl ? "ر.س" : "SAR"}</span>
        </div>
        <div class="total-row grand-total">
          <span>${isRtl ? "الإجمالي النهائي التقديري:" : "Grand Total:"}</span>
          <span>${totals.grandTotalSAR.toLocaleString()} ${isRtl ? "ر.س" : "SAR"}</span>
        </div>
      </div>
    </div>

    <div class="disclaimer-box">
      <strong>⚠️ ${isRtl ? "تنبيه وشروط استرشادية:" : "Terms & Notice:"}</strong>
      ${PRICING_CONFIG.disclaimer[locale]}
      <br>
      • س.ت: ${siteConfig.contact.commercialRegister} | الرقم الضريبي: ${siteConfig.contact.vatNumber}
    </div>

    <div class="footer-signatures">
      <div>
        <p><strong>${isRtl ? "إعداد قسم المبيعات والمشاريع:" : "Prepared by Projects Dept:"}</strong></p>
        <p>${siteConfig.name[locale]}</p>
        <p>${siteConfig.contact.email} • ${siteConfig.contact.phone}</p>
      </div>
      <div class="stamp-box">
        <div style="font-size:24px; font-weight:800; color:#d4af37;">${siteConfig.logo.monogramAr}</div>
        <div>ختم المصنع المعتمد</div>
        <div style="font-size:9px;">JEDDAH INDUSTRIAL FACTORY</div>
      </div>
    </div>
  </div>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
