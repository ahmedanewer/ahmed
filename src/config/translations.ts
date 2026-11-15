/**
 * Ahmed Abdulsamad Aluminum & Glass Co. - Bilingual Translations Dictionary
 * القاموس الموحد للترجمة (عربي RTL افتراضي + إنجليزي LTR)
 */

export type Locale = "ar" | "en";

export const TRANSLATIONS = {
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      services: "خدماتنا وتخصصاتنا",
      projects: "معرض المشاريع",
      calculator: "حاسبة الأسعار وموديل 3D",
      about: "عن المصنع",
      contact: "اتصل بنا",
      requestQuote: "طلب عرض سعر",
      callUs: "اتصال مباشر",
      allServices: "كافة الخدمات",
      viewAllProjects: "استعراض كافة المشاريع",
    },

    // Hero Section
    hero: {
      badge: "مصنع معتمد في جدة • مواصفات كود البناء السعودي SBC",
      titleMain: "حلول الألمنيوم والواجهات الزجاجية",
      titleAccent: "بدقة هندسية وأصالة صناعية",
      description: "نصنع وننفذ واجهات الكرتن وول، النوافذ والأبواب المعزولة حرارياً، الكلادينج، والهياكل الإنشائية بأحدث ماكينات الـ CNC وتقنيات العزل الأوروبية المتطورة.",
      ctaCalculate: "احسب تكلفة مشروعك بالـ 3D",
      ctaProjects: "استكشف أعمالنا المنفذة",
      ctaConsultation: "استشارة هندسية فورية",
      statsTitle: "أرقام تتحدث عن جودتنا",
      modelHint: "نموذج ثلاثي الأبعاد تفاعلي • اسحب بالماوس أو اللمس للتدوير والتكبير",
      dragToRotate: "تدوير حر 360°",
    },

    // Trust badges
    badges: {
      saudiMade: "صناعة سعودية معتمدة",
      saso: "مطابق لمواصفات SASO",
      warranty: "ضمان شامل 10 سنوات",
      thermalBreak: "عزل حراري موفر للكهرباء",
    },

    // Workflow (5 Steps)
    workflow: {
      badge: "منهجية العمل الاحترافية",
      title: "5 خطوات تضمن تنفيذ مشروعك بأعلى دقة",
      subtitle: "من الرفع المساحي وحتى تسليم شهادة الضمان، نطبق رقابة صارمة على كل مرحلة",
      steps: [
        {
          num: "01",
          title: "المعاينة والرفع المساحي الميداني",
          desc: "يزور مهندسونا موقع المشروع لرفع المقاسات بالليزر ودراسة أحمال الرياح والتوجيه الشمسي للمبنى.",
        },
        {
          num: "02",
          title: "التصميم الهندسي وتفصيل القطاعات",
          desc: "إعداد المخططات التنفيذية التفصيلية (Shop Drawings) واختيار قطاعات الألمنيوم والزجاج المتوافقة مع كود البناء.",
        },
        {
          num: "03",
          title: "التصنيع الآلي في مصنعنا بجدة",
          desc: "قص وتجميع القطاعات بماكينات CNC أوتوماتيكية متطورة تضمن زوايا محكمة وإحكاماً تاماً للعوازل والمفصلات.",
        },
        {
          num: "04",
          title: "المعالجة السطحية وفحص الجودة الصارم",
          desc: "دهان إلكتروستاتيك معتمد ومقاوم للأملاح مع فحص مخبري للعزل المائي وعزل ضغط الهواء لكل نافذة وواجهة.",
        },
        {
          num: "05",
          title: "التركيب الموقعي مع الضمان الشامل",
          desc: "فريق تركيب متخصص يستخدم سيليكون إنشائي معتمد مع تسليم شهادة ضمان خطية لمدة 10 سنوات.",
        },
      ],
    },

    // Why Choose Us
    whyUs: {
      badge: "لماذا يختارنا كبار المطورين والملاك؟",
      title: "المزايا التنافسية لمصنع أحمد عبد الصمد",
      subtitle: "نجمع بين الأسعار المباشرة من أرض المصنع والتقنيات الهندسية الأوروبية المعتمدة",
      items: [
        {
          title: "سعر المصنع المباشر دون وسطاء",
          desc: "توفير مالي كبير للفلل والمشاريع بفضل التصنيع المحلي المباشر في جدة دون أي هوامش تسويقية وسيطة.",
        },
        {
          title: "أنظمة ألمنيوم معزولة حرارياً (Thermal-Break)",
          desc: "قطاعات مزودة بفواصل بولياميد مستوردة تخفض حرارة المبنى وتوفر حتى 40% من فاتورة التكييف شهرياً.",
        },
        {
          title: "ماكينات تقطيع وتفريز CNC ألمانية وإيطالية",
          desc: "دقة تصنيع مليمترية تمنع أي صفير هواء أو تسرب مياه أثناء الأمطار الغزيرة والعواصف الرملية.",
        },
        {
          title: "زجاج دبل معالج ومطابق للمواصفات السعودية",
          desc: "فراغات غاز أرجون وطبقات Low-E عاكسة للشمس مع زجاج سيكوريت مصفح ضد الكسر والسرقة.",
        },
        {
          title: "ضمان ذهبي معتمد 10 سنوات",
          desc: "نمنح عملاءنا ضماناً رسمياً موثقاً على متانة الهيكل، ثبات الألوان، والعزل المائي لراحة بال مطلقة.",
        },
        {
          title: "فريق هندسي متخصص في كود البناء السعودي",
          desc: "نضمن لك سهولة استخراج شهادة إشغال المبنى واعتماد الدفاع المدني دون أي ملاحظات أو تأخير.",
        },
      ],
    },

    // Stats
    stats: {
      experience: "سنوات من الخبرة الصناعية",
      projects: "مشروع منجز في المملكة",
      area: "متر مربع تم تصنيعه وتركيبه",
      satisfaction: "نسبة رضا وثقة العملاء",
      warranty: "سنوات ضمان شامل ومعتمد",
    },

    // FAQ
    faq: {
      badge: "الأسئلة الشائعة",
      title: "كل ما تود معرفته عن الألمنيوم والواجهات",
      subtitle: "إجابات هندسية واضحة لأكثر الاستفسارات شيوعاً بين أصحاب المشاريع والفلل",
      items: [
        {
          q: "ما هو الفرق بين الألمنيوم العادي والألمنيوم المعزول حرارياً (Thermal Break)؟",
          a: "الألمنيوم العادي معدن موصل جيد للحرارة، فينقل حرارة الجو الخارجي اللاهبة إلى داخل المبنى. أما قطاعات العزل الحراري (Thermal Break)، فتحتوي على فاصل غير موصل من البولياميد المقوى في قلب القطاع، مما يكسر الجسر الحراري تماماً ويمنع انتقال الحرارة والبرودة ويوفر نسبة هائلة من استهلاك التكييف.",
        },
        {
          q: "هل تصاميمكم وأعمالكم مطابقة لكود البناء السعودي واشتراطات شهادة الإشغال؟",
          a: "نعم 100%. نلتزم في مصنع أحمد عبد الصمد بجميع متطلبات كود البناء السعودي (SBC 601 / 602) المتعلقة بعزل الطاقة (U-Value)، سماكة الزجاج المزدوج، ومعامل نفاذية الضوء، مما يضمن حصولك على شهادة الإتمام والإشغال دون أي عوائق.",
        },
        {
          q: "كيف يتم حساب تكلفة النوافذ والأبواب والكرتن وول؟",
          a: "يتم حساب التكلفة بناءً على مساحة المتر المربع (العرض × الارتفاع)، مضافاً إليها نوع نظام القطاع (اقتصادي، قياسي، أو فاخر أوروبي)، نوع الزجاج (سيكوريت مفرد، دبل جلاس عازل، أو دبل Low-E)، نوع الدهان (بودرة كواليكوت، أنودايز، أو خشابي)، وإكسسوارات الحركة. يمكنك استخدام حاسبتنا التفاعلية للحصول على تقدير فوري دقيق.",
        },
        {
          q: "ما هي مدة التصنيع والتركيب المعتادة للمشاريع؟",
          a: "للفلل السكنية الخاصة، تستغرق مرحلة التصنيع في المصنع من 15 إلى 25 يوم عمل بعد اعتماد المقاسات الميدانية النهائية واختيار الألوان، تليها مرحلة التركيب الموقعي خلال 5 إلى 10 أيام. أما المشاريع التجارية والأبراج فترتبط بجدول زمني هندسي معتمد.",
        },
        {
          q: "هل تغطون مدن المملكة خارج جدة؟",
          a: "مصنعنا الرئيسي يقع في مدينة جدة، ونقدم خدمات التوريد والتركيب الكاملة في كافة مدن الغربية (مكة المكرمة، الطائف، المدينة المنورة، ينبع)، بالإضافة إلى توريد المشاريع الكبرى في الرياض والمنطقة الشرقية وجنوب المملكة.",
        },
        {
          q: "ما هو الضمان المقدم على أعمال الألمنيوم والزجاج؟",
          a: "نقدم ضماناً شاملاً يصل إلى 10 سنوات على سلامة الهيكل الإنشائي ومانعية تسرب المياه، وضمان 15 إلى 20 سنة على ثبات ألوان الدهانات البودرة والأنودايز، وضمان سنة كاملة على الإكسسوارات الميكانيكية ضد عيوب الصناعة.",
        },
      ],
    },

    // Final CTA
    finalCta: {
      badge: "ابدأ مشروعك اليوم",
      title: "حول رؤيتك المعمارية إلى واقع ملموس مع خبراء الواجهات بجدة",
      description: "سواء كنت تبني فيلتك الخاصة، تطور مجمعاً تجارياً، أو تبحث عن حلول واجهات حديثة، مهندسونا مستعدون لتقديم الاستشارة وعروض الأسعار التنافسية.",
      btnCalculate: "احسب تكلفة مشروعك الآن",
      btnWhatsApp: "تحدث مع مهندس المبيعات عبر واتساب",
      phoneDirect: "أو اتصل بنا مباشرة: 01270201336",
    },

    // Calculator & Configurator Page
    calc: {
      pageTitle: "حاسبة التكلفة التقديرية وموديل الـ 3D التفاعلي",
      pageSubtitle: "صمم وخصص واجهات ونوافذ مشروعك بالكامل واحصل على تسعير فوري معتمد للتصدير إلى واتساب أو PDF",
      disclaimerNotice: "تقدير مبدئي استرشادي وليس عرض سعر نهائي معتمد. السعر النهائي يخضع للرفع المساحي الميداني وتفاصيل المواصفات الهندسية.",
      projectScopeLabel: "نوع المشروع العام",
      projectScopes: {
        villa: "فيلا سكنية خاصة",
        apartment: "شقة / ملحق سكني",
        shop: "معرض / محل تجاري",
        building_facade: "برج / واجهة مبنى كاملة",
      },
      addNewItem: "إضافة عنصر جديد للمشروع",
      itemNumber: "عنصر رقم",
      deleteItem: "حذف العنصر",
      duplicateItem: "نسخ العنصر",
      editItem: "تعديل القياسات والمواصفات",
      previewIn3D: "معاينة ثلاثية الأبعاد",
      itemType: "نوع المنتج",
      openingType: "طريقة الفتح والتشغيل",
      dimensions: "الأبعاد والقياسات (بالمتر)",
      widthMeters: "العرض (متر)",
      heightMeters: "الارتفاع (متر)",
      calculatedArea: "المساحة المحسوبة:",
      quantity: "الكمية (العدد)",
      systemTier: "فئة نظام الألمنيوم",
      glassType: "مواصفات الزجاج",
      finishType: "اللون ونوع المعالجة السطحية",
      itemTotal: "إجمالي هذا العنصر:",
      projectSummary: "ملخص تكلفة المشروع والكميات (BOQ)",
      itemsCount: "إجمالي عدد العناصر:",
      itemsSubtotal: "المجموع الفرعي للمنتجات:",
      includeInstallation: "إضافة خدمة التركيب الموقعي بالضمان (+10%)",
      installationFee: "تكلفة التركيب الموقعي:",
      deliveryCity: "مدينة التوريد والشحن",
      deliveryFee: "تكلفة التوصيل والنقل:",
      freeDeliveryPromo: "توصيل مجاني داخل جدة للطلبات الكبرى!",
      vat15: "ضريبة القيمة المضافة (15% ZATCA):",
      grandTotal: "الإجمالي النهائي التقديري:",
      allPricesSAR: "جميع الأسعار بالريال السعودي (SAR)",
      customerInfo: "بيانات التواصل لإرسال عرض السعر الرسمي",
      fullName: "الاسم الكامل",
      phone: "رقم الجوال / الواتساب",
      city: "المدينة / الحي",
      notes: "ملاحظات إضافية للمهندس",
      btnWhatsApp: "طلب عرض سعر رسمي عبر واتساب",
      btnDownloadPDF: "تحميل عرض السعر بصيغة PDF",
      btnShare: "مشاركة رابط التخصيص",
      btnReset: "إعادة تعيين القائمة",
      copiedSuccess: "تم نسخ رابط المشروع بنجاح إلى الحافظة!",
      emptyListPrompt: "لم تقم بإضافة أي عناصر بعد. اضغط على زر 'إضافة عنصر' للبدء في تسعير مشروعك.",
      minChargeApplied: "مطبق الحد الأدنى لتصنيع القطعة (450 ر.س)",
      itemsTableTitle: "جدول تفاصيل بنود المشروع (Bill of Quantities)",
      tableColIndex: "#",
      tableColType: "المنتج",
      tableColDimensions: "الأبعاد (م)",
      tableColArea: "المساحة (م²)",
      tableColSpecs: "المواصفات والزجاج واللون",
      tableColQty: "العدد",
      tableColUnitPrice: "سعر الوحدة",
      tableColTotal: "الإجمالي",
    },

    // Products Names
    products: {
      curtain_wall: "واجهات كرتن وول زجاجية",
      window: "نوافذ ألمنيوم معمارية",
      door: "أبواب ألمنيوم ومداخل",
      sliding_door: "أبواب وسحابات زجاجية كبيرة",
      cladding: "كلادينج ألمنيوم مقاوم للحريق",
      skylight: "قبب وسماويات زجاجية (Skylight)",
      pergola: "برجولات ألمنيوم حديثة",
      frameless_glass: "زجاج سيكوريت وفريملس",
      steel_structure: "هياكل حديدية ومظلات إنشائية",
      custom_aluminum: "أعمال ألمنيوم خاصة وتفصيل",
    },

    // Opening types
    openings: {
      fixed: "ثابت بدون فتح (Fixed)",
      sliding: "سحاب مزدوج / متعدد السكك (Sliding)",
      casement: "مفصلي فتح للداخل / الخارج (Casement)",
      tilt_turn: "مفصلي وقلاب مزدوج (Tilt & Turn)",
      folding: "منطوي أكورديون بانورامي (Bi-Fold)",
      louvered: "شرائح لوفرز متحركة (Louvered)",
    },

    // Tiers
    tiers: {
      economy: "اقتصادي (قطاعات محلية قياسية 1.8مم)",
      standard: "قياسي (قطاعات سرايا ورويال عازلة 2.0مم)",
      premium: "فاخر (أنظمة أوروبية تكنال وشوكو عازلة حرارياً)",
    },

    // Glasses
    glasses: {
      single_6mm: "مفرد سيكوريت شفاف 6مم (Single Clear)",
      double_24mm: "دبل جلاس عازل 24مم (Double Glazed 6-12-6)",
      double_low_e: "دبل جلاس عاكس وموفر للطاقة (Double Low-E)",
      laminated_sound: "دبل مصفح عازل للصوت الفائق (Acoustic Laminated)",
      tinted_solar: "دبل ملون عاكس شمسي (Solar Tinted Bronze/Grey)",
    },

    // Finishes
    finishes: {
      powder_coat: "دهان حراري بودرة مطفي RAL (Matt Powder)",
      powder_special: "دهان ميتاليك خاص ضمان 20 سنة (Qualicoat 2)",
      anodized: "أنودايز مؤكسد فاخر برونزي/شامبين (Anodized)",
      wood_sublimation: "توشيح خشابي أوروبي مقاوم للشمس (Wood Effect)",
    },

    // Contact Page
    contact: {
      pageTitle: "تواصل مع مصنع أحمد عبد الصمد بجدة",
      pageSubtitle: "يسعد فريقنا الهندسي باستقبال استفساراتكم وزيارتكم في مصنعنا بمدينة جدة",
      formTitle: "أرسل لنا استفسارك أو مخططات مشروعك",
      formSubtitle: "سيقوم أحد مهندسينا بمراجعة طلبك والرد عليك خلال ساعات العمل الرسمية",
      yourName: "الاسم الكريم",
      yourPhone: "رقم الجوال (05xxxxxxxx)",
      yourEmail: "البريد الإلكتروني",
      projectType: "نوع الخدمة المطلوبة",
      message: "تفاصيل المشروع والاحتياجات",
      submitBtn: "إرسال الاستفسار الآن",
      sending: "جاري الإرسال...",
      successMsg: "تم استلام رسالتكم بنجاح! سيتواصل معكم مهندسنا في أقرب وقت.",
      addressCardTitle: "مقر المصنع والمكاتب الفنية",
      addressValue: "مدينة جدة، المنطقة الصناعية / شارع المكرونة، المملكة العربية السعودية",
      phoneCardTitle: "الاتصال الهاتفي والمبيعات",
      phoneValue: "01270201336",
      whatsappCardTitle: "المحادثة الفورية عبر واتساب",
      whatsappPrompt: "تحدث مباشرة مع مهندس المشاريع",
      hoursCardTitle: "أوقات العمل الرسمية",
      hoursValue: "السبت إلى الخميس: 8:00 صباحاً – 5:00 مساءً (الجمعة عطلة أسبوعية)",
      mapTitle: "موقع المصنع على خريطة جدة",
      openInMaps: "فتح الاتجاهات عبر خرائط جوجل",
    },

    // Projects Page
    projectsPage: {
      title: "معرض المشاريع وسابقة الأعمال المعتمدة",
      subtitle: "نعتز بثقة كبرى المؤسسات الحكومية والشركات العقارية وملاك الفلل الراقية في كافة أنحاء المملكة",
      filterAll: "كافة المشاريع",
      filterGov: "مشاريع حكومية ومؤسسية",
      filterCom: "مشاريع تجارية وأبراج",
      filterRes: "قصور وفلل سكنية",
      scopeLabel: "نطاق العمل المنفذ:",
      systemsLabel: "الأنظمة المستخدمة:",
      areaLabel: "إجمالي المساحة المنفذة:",
      locationLabel: "الموقع:",
      yearLabel: "سنة الإنجاز:",
      viewDetails: "تفاصيل المشروع والصور",
      closeModal: "إغلاق النافذة",
    },

    // Footer
    footer: {
      aboutFactory: "عن المصنع",
      aboutText: "شركة أحمد عبد الصمد للألمنيوم والزجاج رائدة في صناعة وتوريد وتركيب الواجهات المعمارية، النوافذ والأبواب المعزولة حرارياً، والكلادينج والهياكل الإنشائية بجدة وفق أعلى معايير الجودة السعودية.",
      quickLinks: "روابط سريعة",
      ourServices: "أبرز خدماتنا",
      contactInfo: "بيانات التواصل",
      rightsReserved: "جميع الحقوق محفوظة © {year} شركة أحمد عبد الصمد للألمنيوم والزجاج.",
      crNumber: "سجل تجاري: {cr}",
      vatNumber: "الرقم الضريبي: {vat}",
      madeInJeddah: "صنع بفخر في مدينة جدة 🇸🇦",
    },

    // 3D Configurator UI
    configurator3d: {
      rotateHint: "اسحب للتدوير • استخدم عجلة الماوس للتكبير والتصغير",
      resetCamera: "إعادة ضبط زاوية الرؤية",
      toggleDimensions: "إظهار / إخفاء خطوط الأبعاد",
      widthLabel: "العرض:",
      heightLabel: "الارتفاع:",
      areaLabel: "المساحة:",
      activeFinish: "الدهان الحالي:",
      activeGlass: "الزجاج الحالي:",
      tierLabel: "الفئة:",
      meterUnit: "متر",
    },
  },

  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services & Sectors",
      projects: "Projects Portfolio",
      calculator: "Quote Calculator & 3D",
      about: "About Factory",
      contact: "Contact Us",
      requestQuote: "Request a Quote",
      callUs: "Call Direct",
      allServices: "All Services",
      viewAllProjects: "View All Projects",
    },

    // Hero Section
    hero: {
      badge: "Certified Factory in Jeddah • SBC Saudi Building Code Compliant",
      titleMain: "Architectural Aluminum & Glass",
      titleAccent: "Engineered Precision & Industrial Craft",
      description: "Fabrication and installation of continuous curtain walls, thermal-break windows and doors, fire-rated cladding, and structural steel utilizing advanced European CNC automation.",
      ctaCalculate: "Calculate Project Cost in 3D",
      ctaProjects: "Explore Completed Work",
      ctaConsultation: "Free Technical Consultation",
      statsTitle: "Figures Reflecting Our Excellence",
      modelHint: "Interactive 3D Architectural Model • Drag to rotate, scroll to zoom",
      dragToRotate: "360° Free Orbit",
    },

    // Trust badges
    badges: {
      saudiMade: "Certified Saudi Made",
      saso: "SASO Standards Compliant",
      warranty: "10-Year Full Warranty",
      thermalBreak: "Energy Saving Thermal Break",
    },

    // Workflow
    workflow: {
      badge: "Proven Industrial Workflow",
      title: "5 Structured Steps to Guaranteed Project Success",
      subtitle: "From laser site surveys to certified warranty handover, we enforce rigorous QA across every stage",
      steps: [
        {
          num: "01",
          title: "Laser Site Survey & Wind Analysis",
          desc: "Our structural engineers conduct 3D laser measurements and compute wind shear and solar angles for your building.",
        },
        {
          num: "02",
          title: "Shop Drawings & System Engineering",
          desc: "Detailed CAD/BIM shop drawings selecting profiles and glass assemblies conforming to the Saudi Building Code.",
        },
        {
          num: "03",
          title: "Automated CNC Fabrication in Jeddah",
          desc: "Precision computerized cutting, milling, and crimping ensuring hermetic gasket sealing and flawless corner alignment.",
        },
        {
          num: "04",
          title: "Surface Coating & Strict Quality Testing",
          desc: "Marine-grade Qualicoat powder coating with air and water infiltration chamber pressure testing for every unit.",
        },
        {
          num: "05",
          title: "On-Site Installation & Warranty Handover",
          desc: "Certified rigging teams utilizing structural silicone adhesives, accompanied by an official 10-year warranty certificate.",
        },
      ],
    },

    // Why Choose Us
    whyUs: {
      badge: "Why Developers & Architects Choose Us?",
      title: "The Ahmed Abdulsamad Competitive Advantage",
      subtitle: "Direct factory pricing combined with certified European architectural systems",
      items: [
        {
          title: "Direct Factory Pricing (Zero Middlemen)",
          desc: "Significant cost savings for residential villas and towers through direct local fabrication in our Jeddah industrial plant.",
        },
        {
          title: "Polyamide Thermal-Break Systems",
          desc: "Multi-chamber profiles stopping heat bridges, reducing air conditioning electricity bills by up to 40% annually.",
        },
        {
          title: "German & Italian Multi-Axis CNC Machinery",
          desc: "Sub-millimeter machining precision eliminating wind whistling, dust leaks, and rain ingress during coastal storms.",
        },
        {
          title: "Certified Double Glazing & Low-E Solar Control",
          desc: "Argon gas chambers and microscopic solar-reflective coatings providing safety, acoustic tranquility, and UV blocking.",
        },
        {
          title: "10-Year Comprehensive Written Warranty",
          desc: "Official documented guarantees on structural integrity, weather sealing, and anodized/powder color endurance.",
        },
        {
          title: "Saudi Building Code (SBC) Compliance",
          desc: "Guaranteed smooth issuance of occupancy certificates and Civil Defense compliance without inspection hold-ups.",
        },
      ],
    },

    // Stats
    stats: {
      experience: "Years Industrial Experience",
      projects: "Landmark Projects Handed Over",
      area: "m² Fabricated & Installed",
      satisfaction: "Client Satisfaction & Trust",
      warranty: "Years Certified Warranty",
    },

    // FAQ
    faq: {
      badge: "Frequently Asked Questions",
      title: "Everything You Need to Know About Facades & Aluminum",
      subtitle: "Engineered answers to the most common questions from property owners and project managers",
      items: [
        {
          q: "What is the difference between standard aluminum and Thermal-Break systems?",
          a: "Standard aluminum is a thermal conductor, transferring harsh outdoor summer heat directly into the living space. Thermal-break profiles insert a glass-fiber reinforced polyamide insulator between interior and exterior profiles, severing the heat bridge completely and dramatically lowering HVAC loads.",
        },
        {
          q: "Are your fabrications compliant with the Saudi Building Code for occupancy certificates?",
          a: "Yes, 100%. We strictly comply with SBC 601 / 602 energy conservation codes, glass safety guidelines, and thermal transmittance (U-Value) criteria required by Saudi municipalities for immediate occupancy approvals.",
        },
        {
          q: "How are aluminum windows, doors, and curtain walls priced?",
          a: "Pricing is calculated on square meter area (Width × Height), adjusted by profile tier (Economy, Standard, or Premium European), glass specification (Single, Double Glazed, Low-E, or Laminated), and surface finish. Use our live 3D calculator for an instant itemized estimate.",
        },
        {
          q: "What is the typical production and installation lead time?",
          a: "For private villas, factory fabrication takes 15 to 25 business days following final laser measurements and color approvals, followed by 5 to 10 days of on-site installation. Commercial developments follow agreed milestone schedules.",
        },
        {
          q: "Do you serve cities across Saudi Arabia outside Jeddah?",
          a: "Our primary manufacturing headquarters is based in Jeddah. We handle full turnkey supply and installation across Makkah, Taif, Madinah, and Yanbu, and fabricate supply packages for large projects in Riyadh and the Eastern Province.",
        },
        {
          q: "What warranty comes with your aluminum and glass works?",
          a: "We furnish a 10-year warranty on structural frame integrity and weather-tightness, 15 to 20 years on Qualicoat powder and anodized surface finishes, and 1 year on mechanical hardware and rollers.",
        },
      ],
    },

    // Final CTA
    finalCta: {
      badge: "Start Your Project Today",
      title: "Turn Your Architectural Vision into Reality with Jeddah's Facade Experts",
      description: "Whether constructing a private villa, managing a commercial tower, or modernizing an existing facade, our engineers are ready with competitive factory pricing.",
      btnCalculate: "Calculate Project Cost Now",
      btnWhatsApp: "Chat with Sales Engineer on WhatsApp",
      phoneDirect: "Or call us directly: 01270201336",
    },

    // Calculator & Configurator Page
    calc: {
      pageTitle: "Project Quote Calculator & 3D Configurator",
      pageSubtitle: "Configure your entire villa or building bill of quantities in 3D and export instant official quotes to WhatsApp or branded PDF",
      disclaimerNotice: "Preliminary estimate only, not a final binding commercial quotation. Final price is subject to on-site laser surveying and exact engineering accessories.",
      projectScopeLabel: "Overall Project Scope",
      projectScopes: {
        villa: "Private Residential Villa",
        apartment: "Apartment / Penthouse",
        shop: "Retail Store / Commercial Showroom",
        building_facade: "Commercial Building / Tower Facade",
      },
      addNewItem: "Add Item to Project List",
      itemNumber: "Item #",
      deleteItem: "Delete Item",
      duplicateItem: "Duplicate Item",
      editItem: "Edit Specs & Dimensions",
      previewIn3D: "3D Live Preview",
      itemType: "Product Category",
      openingType: "Opening Mechanism",
      dimensions: "Dimensions (Meters)",
      widthMeters: "Width (m)",
      heightMeters: "Height (m)",
      calculatedArea: "Calculated Area:",
      quantity: "Quantity",
      systemTier: "Profile System Tier",
      glassType: "Glass Specification",
      finishType: "Finish & Surface Coating",
      itemTotal: "Item Subtotal:",
      projectSummary: "Project Bill of Quantities (BOQ) Summary",
      itemsCount: "Total Items:",
      itemsSubtotal: "Items Fabricated Subtotal:",
      includeInstallation: "Include On-Site Installation & Warranty (+10%)",
      installationFee: "Installation Fee:",
      deliveryCity: "Delivery Destination City",
      deliveryFee: "Delivery & Transportation Fee:",
      freeDeliveryPromo: "Free delivery within Jeddah on major orders!",
      vat15: "Saudi Value Added Tax (15% ZATCA):",
      grandTotal: "Estimated Grand Total:",
      allPricesSAR: "All prices quoted in Saudi Arabian Riyals (SAR)",
      customerInfo: "Client Details for Formal Quotation",
      fullName: "Full Name",
      phone: "Phone / WhatsApp Number",
      city: "City / District",
      notes: "Additional Engineering Notes",
      btnWhatsApp: "Send Formal Quotation to WhatsApp",
      btnDownloadPDF: "Download Formal PDF Quotation",
      btnShare: "Share Configuration Link",
      btnReset: "Reset Bill of Quantities",
      copiedSuccess: "Project configuration link copied to clipboard!",
      emptyListPrompt: "No items added yet. Click 'Add Item to Project List' to start pricing your villa or building.",
      minChargeApplied: "Minimum fabrication charge applied (450 SAR)",
      itemsTableTitle: "Bill of Quantities (BOQ) Breakdown",
      tableColIndex: "#",
      tableColType: "Product",
      tableColDimensions: "Dimensions (m)",
      tableColArea: "Area (m²)",
      tableColSpecs: "Specifications & Finish",
      tableColQty: "Qty",
      tableColUnitPrice: "Unit Price",
      tableColTotal: "Total",
    },

    // Products Names
    products: {
      curtain_wall: "Curtain Wall & Facades",
      window: "Architectural Windows",
      door: "Aluminum Doors & Entrances",
      sliding_door: "Heavy-Duty Sliding Portals",
      cladding: "Fire-Rated Cladding (ACP)",
      skylight: "Architectural Glass Skylight",
      pergola: "Modern Bioclimatic Pergola",
      frameless_glass: "Frameless Tempered Glass",
      steel_structure: "Structural Steel & Canopies",
      custom_aluminum: "Custom Aluminum & Mashrabiya",
    },

    // Opening types
    openings: {
      fixed: "Fixed Panoramic (Non-Opening)",
      sliding: "Smooth Dual/Triple Sliding",
      casement: "Hinged Inward/Outward (Casement)",
      tilt_turn: "Dual-Action Tilt & Turn",
      folding: "Bi-Fold Panoramic Accordion",
      louvered: "Motorized/Fixed Louvers",
    },

    // Tiers
    tiers: {
      economy: "Economy (Standard 1.8mm Local Systems)",
      standard: "Standard (Saraya / Royal 2.0mm Thermal Break)",
      premium: "Premium (Technal / Schüco Certified European)",
    },

    // Glasses
    glasses: {
      single_6mm: "Single Tempered Clear 6mm",
      double_24mm: "Double Glazed 24mm (6-12-6 Argon)",
      double_low_e: "Double Low-E Solar Reflective",
      laminated_sound: "Acoustic Laminated Safety Glass",
      tinted_solar: "Solar Tinted Reflective Bronze/Grey",
    },

    // Finishes
    finishes: {
      powder_coat: "Standard Matt Powder Coat (RAL)",
      powder_special: "Qualicoat Class 2 Metallic (20-Yr Warranty)",
      anodized: "Architectural Anodized Silver/Bronze/Champagne",
      wood_sublimation: "European UV-Resistant Wood Sublimation",
    },

    // Contact Page
    contact: {
      pageTitle: "Contact Ahmed Abdulsamad Co. in Jeddah",
      pageSubtitle: "Our engineering and sales team welcomes your inquiries and factory visits in Jeddah",
      formTitle: "Send Us Your Project Inquiry or Blueprints",
      formSubtitle: "Our project engineers will review your requirements and reply promptly during business hours",
      yourName: "Your Full Name",
      yourPhone: "Mobile Number (05xxxxxxxx)",
      yourEmail: "Email Address",
      projectType: "Requested Service",
      message: "Project Details, Dimensions or Specific Needs",
      submitBtn: "Submit Inquiry Now",
      sending: "Submitting...",
      successMsg: "Inquiry received successfully! Our engineer will contact you shortly.",
      addressCardTitle: "Factory Headquarters & Technical Offices",
      addressValue: "Jeddah Industrial Area, Al-Makrona District, Saudi Arabia",
      phoneCardTitle: "Direct Phone & Sales Inquiries",
      phoneValue: "01270201336",
      whatsappCardTitle: "Instant WhatsApp Chat",
      whatsappPrompt: "Chat directly with a sales engineer",
      hoursCardTitle: "Official Factory Working Hours",
      hoursValue: "Saturday – Thursday: 8:00 AM – 5:00 PM (Friday Closed)",
      mapTitle: "Factory Location on Jeddah Map",
      openInMaps: "Open Directions in Google Maps",
    },

    // Projects Page
    projectsPage: {
      title: "Completed Projects & Track Record",
      subtitle: "Trusted by prominent government institutions, commercial towers, and luxury villa owners across Saudi Arabia",
      filterAll: "All Projects",
      filterGov: "Government & Institutional",
      filterCom: "Commercial & Towers",
      filterRes: "Residential & Luxury Villas",
      scopeLabel: "Scope of Work:",
      systemsLabel: "Systems Installed:",
      areaLabel: "Total Executed Area:",
      locationLabel: "Location:",
      yearLabel: "Completion Year:",
      viewDetails: "View Project Details & Specs",
      closeModal: "Close Window",
    },

    // Footer
    footer: {
      aboutFactory: "About Factory",
      aboutText: "Ahmed Abdulsamad Aluminum & Glass Co. is a leading Saudi manufacturer of architectural curtain walls, thermal-break windows and doors, composite cladding, and structural steel in Jeddah.",
      quickLinks: "Quick Navigation",
      ourServices: "Core Services",
      contactInfo: "Contact Information",
      rightsReserved: "All rights reserved © {year} Ahmed Abdulsamad Aluminum & Glass Co.",
      crNumber: "CR: {cr}",
      vatNumber: "VAT: {vat}",
      madeInJeddah: "Proudly Fabricated in Jeddah 🇸🇦",
    },

    // 3D Configurator UI
    configurator3d: {
      rotateHint: "Drag to rotate • Use scroll wheel to zoom",
      resetCamera: "Reset Camera Angle",
      toggleDimensions: "Toggle Dimension Lines",
      widthLabel: "Width:",
      heightLabel: "Height:",
      areaLabel: "Area:",
      activeFinish: "Active Finish:",
      activeGlass: "Active Glass:",
      tierLabel: "Tier:",
      meterUnit: "m",
    },
  },
};
