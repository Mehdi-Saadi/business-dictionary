import type { Phrase } from '@/types/phrase'

const part6: Phrase[] = [
  {
    word: 'Logistics',
    english_definition:
      'The detailed coordination and implementation of a complex operation involving people, facilities, and supplies, especially in commercial contexts involving the movement of goods.',
    persian_meaning: 'لجستیک',
    example:
      'Efficient logistics management helped the company reduce delivery time by 30% and cut operational costs significantly.',
    category: 'Logistics, Supply Chain Management',
    related_terms: 'Supply Chain, Distribution, Freight, Warehousing',
    notes:
      'لجستیک به فرآیند برنامهریزی، اجرا و کنترل جریان کاال، خدمات و اطالعات از نقطه مبدأ تا نقطه مصرف اشاره دارد .این مفهوم شامل انبارداری، حمل ونقل، بسته بندی و توزیع می شود',
  },
  {
    word: 'Supply Chain',
    english_definition:
      'The entire network of entities, directly or indirectly interlinked and interdependent in serving the same consumer or customer. It encompasses all activities from raw material sourcing to final product delivery.',
    persian_meaning: 'زنجیره تأمین',
    example:
      'The pandemic exposed vulnerabilities in global supply chains, forcing companies to diversify their supplier networks.',
    category: 'Logistics, Operations Management',
    related_terms: 'Logistics, Procurement, Distribution, Supplier Management',
    notes:
      'زنجیره تأمین شامل تمام مراحل از تهیه مواد خام تا تحویل محصول نهایی به مشتری است .مدیریت مؤثر آن به کاهش هزینهها و افزایش رضایت مشتری کمک می کند',
  },
  {
    word: 'Freight',
    english_definition:
      'Goods transported in bulk by truck, train, ship, or aircraft. Also refers to the charge for transporting such goods from one place to another.',
    persian_meaning: 'بار /کرایه حمل',
    example:
      'The company negotiated lower freight rates with the shipping carrier due to the high volume of shipments.',
    category: 'Shipping ,Logistics',
    related_terms: 'Cargo, Shipping, Bill of Lading, Freight Forwarder',
    notes:
      'فریت به کاالهای حمل شده یا هزینه حمل ونقل آن ها اطالق میشود .در تجارت بینالملل، نرخ فریت یکی از عوامل کلیدی در قیمت گذاری محصوالت است',
  },
  {
    word: 'Warehousing',
    english_definition:
      'The act of storing goods in a warehouse or other storage facility, including the management of inventory, handling, and distribution of goods.',
    persian_meaning: 'انبارداری',
    example:
      'The company invested in automated warehousing systems to increase efficiency and reduce labor costs.',
    category: 'Logistics, Supply Chain Management',
    related_terms: 'Inventory Management, Distribution Center, Storage, 3PL',
    notes:
      'انبارداری فراتر از ذخیرهسازی ساده کاالست و شامل مدیریت موجودی، جابجایی کاال، بسته بندی و آماده سازی برای توزیع می شود',
  },
  {
    word: 'Inventory Management',
    english_definition:
      'The supervision of non-capitalized assets (inventory) and stock items, encompassing processes to track goods from manufacturers to warehouses to the point of sale.',
    persian_meaning: 'مدیریت موجودی',
    example:
      'With proper inventory management, the retailer reduced stockouts by 40% while minimizing excess inventory costs.',
    category: 'Operations ,Logistics',
    related_terms: 'Stock Control, Just-in-Time (JIT), Safety Stock, Reorder Point',
    notes:
      'مدیریت موجودی به فرآیند نظارت و کنترل کاالها در طول زنجیره تأمین اشاره دارد .هدف آن حفظ تعادل بین موجودی کافی برای پاسخ به تقاضا و جلوگیری از هزینه های اضافی انبار است',
  },
  {
    word: 'Just-In-Time (JIT)',
    abbreviation: 'JIT',
    english_definition:
      'An inventory management strategy in which materials, goods, and labor are scheduled to arrive or be replenished exactly when needed in the production process, minimizing inventory costs.',
    persian_meaning: 'تولید/تحویل به موقع',
    example:
      'Toyota pioneered the JIT system, receiving parts from suppliers just hours before they are needed on the assembly line.',
    category: 'Logistics, Manufacturing, Operations',
    related_terms: 'Lean Manufacturing, Kanban, Inventory Management, Lead Time',
    notes:
      'با هدف کاهش موجودی انبار و هزینه های مرتبط طراحی شده است .در این رویکرد، مواد و قطعات دقیقا زمانی که نیاز است تأمین می شوند و از انباشت کالا جلوگیری می شود',
  },
  {
    word: 'Third-Party Logistics (3PL)',
    abbreviation: '3PL',
    english_definition:
      'The use of an outside company to perform all or part of a firm\'s materials management and product distribution functions. 3PL providers offer transportation, warehousing, and fulfillment services.',
    persian_meaning: 'لجستیک شخص ثالث',
    example:
      'By outsourcing to a 3PL provider, the e-commerce company focused on core business while the logistics expert handled shipping and returns.',
    category: 'Logistics, Supply Chain',
    related_terms: 'Outsourcing, Fulfillment, 4PL, Supply Chain Management',
    notes:
      'به شرکت هایی گفته می شود که خدمات لجستیکی خارجی مانند حمل و نقل، انبارداری و توزیع را برای سایر کسب و کارها ارائه می‌دهند. این سرویس‌ها اجازه می‌دهد شرکت‌ها روی کسب و کار اصلی خود تمرکز کنند و خدمات لاجستیک را برعهده بگیرند.',
  },
  {
    word: 'Bill of Lading (B/L)',
    abbreviation: 'B/L',
    english_definition:
      'A legal document issued by a carrier to a shipper that details the type, quantity, and destination of the goods being carried. It serves as a shipment receipt, a contract of carriage, and a document of title.',
    persian_meaning: 'بارنامه',
    example:
      'The importer needed the original Bill of Lading to clear customs and take possession of the shipment at the port.',
    category: 'Logistics, International Trade, Shipping',
    related_terms: 'Airway Bill, Sea Waybill, Consignment Note, Cargo',
    notes:
      'بارنامه یکی از مهم ترین اسناد در تجارت بینالملل است که سند مالکیت کالا محسوب می‌شود. بدون آن، خریدار نمی‌تواند کالا را از گمرک ترخیص کند.',
  },
  {
    word: 'Freight Forwarder',
    english_definition:
      'A company or person that organizes shipments for individuals or corporations to get goods from the manufacturer or producer to a market, customer, or final point of distribution.',
    persian_meaning: 'حمل کننده /سپارنده بار',
    example:
      'They hired an experienced freight forwarder to handle the complex documentation and customs clearance for their international shipments.',
    category: 'Logistics, International Trade',
    related_terms: 'Customs Broker, Shipping Agent, Cargo, Third-Party Logistics',
    notes:
      'فریت فوروارد واسطه‌ای است که میان فرستنده و شرکت‌های حمل و نقل عمل می‌کند. خدمات آن شامل رزرو فضای حمل، تهیه اسناد، ترخیص گمرک و مدیریت کل فرآیند حمل و نقل است.',
  },
  {
    word: 'Lead Time',
    english_definition:
      'The time between the initiation and completion of a production process or order fulfillment. In supply chain, it includes order processing, manufacturing, and transportation time.',
    persian_meaning: 'زمان تدارک /زمان سفارش تا تحویل',
    example:
      'The manufacturer worked to reduce lead time from 6 weeks to 2 weeks by streamlining production and using regional suppliers.',
    category: 'Logistics, Operations, Manufacturing',
    related_terms: 'Order Cycle Time, Delivery Time, Supply Chain, Production Planning',
    notes:
      'زمان تدارک فاصله زمانی بین ثبت سفارش تا دریافت کالا توسط مشتری است. کاهش این زمان از مزیت‌های رقابتی مهم در بازار امروز محسوب می‌شود.',
  },
  {
    word: 'Incoterms',
    english_definition:
      'A set of internationally recognized rules published by the International Chamber of Commerce (ICC) that define the responsibilities of buyers and sellers for the delivery of goods under sales contracts.',
    persian_meaning: 'اینکوترمز (اصطلاحات بازرگانی بین‌المللی)',
    example:
      'The contract specified FOB Shanghai as the Incoterm, meaning the seller was responsible for the goods until loaded on the vessel.',
    category: 'International Trade, Contracts',
    related_terms: 'FOB, CIF, EXW, DAP, DDP, Shipping Terms',
    notes:
      'اینکوترمز مجموعه ای از قوانین استاندارد بینالمللی است که مسئولیت های خریدار و فروشنده در قرارداد خرید و فروش را تعریف میکند. 2020 Incoterms مشخص میکند. آخرین نسخه آن.',
  },
  {
    word: 'FOB (Free On Board)',
    abbreviation: 'FOB',
    english_definition:
      'An Incoterm indicating that the seller delivers the goods on board the vessel nominated by the buyer at the named port of shipment. Risk transfers from seller to buyer when goods are on board the ship.',
    persian_meaning: 'فرانکو کشتی (تحویل روی عرشه)',
    example:
      'Under FOB terms, once the goods were loaded onto the ship in Shanghai, all risk and cost transferred to the buyer.',
    category: 'International Trade, Shipping, Incoterms',
    related_terms: 'CIF, EXW, Incoterms, Shipping Terms, Bill of Lading',
    notes:
      'یکی از پرکاربردترین شرایط اینکوترمز است. در این حالت، فروشنده کاال را تا روی عرشه کشتی تحویل می‌دهد و از آن لحظه مسئولیت به عهده خریدار می‌افتد.',
  },
  {
    word: 'CIF (Cost, Insurance and Freight)',
    abbreviation: 'CIF',
    english_definition:
      'An Incoterm where the seller pays for the transportation and insurance of goods to the buyer\'s port. Risk transfers to buyer when goods are on board, but seller pays freight and insurance costs.',
    persian_meaning: 'بهای تمام شده، بیمه و کرایه حمل',
    example:
      'The exporter quoted a CIF price that included all shipping costs and insurance to the destination port in Rotterdam.',
    category: 'International Trade, Shipping, Incoterms',
    related_terms: 'FOB, EXW, Incoterms, Marine Insurance, Freight',
    notes:
      'فروشنده هزینه حمل و نقل و بیمه را تا بندر مقصد پرداخت می‌کند. این شرط برای فروشنده مسئولیت بیشتری دارد. در شرایط CIF نسبت به FOB مسئولیت بیشتری دارد.',
  },
  {
    word: 'Letter of Credit (L/C)',
    abbreviation: 'L/C',
    english_definition:
      'A document from a bank guaranteeing that a buyer\'s payment to a seller will be received on time and for the correct amount. In international trade, it is a primary payment mechanism used to reduce credit risk.',
    persian_meaning: 'اعتبار اسنادی',
    example:
      'To secure the large international order, the buyer arranged an irrevocable Letter of Credit through their bank to guarantee payment.',
    category: 'International Trade, Finance, Banking',
    related_terms: 'Documentary Collection, Bank Guarantee, Trade Finance, SWIFT',
    notes:
      'اعتبار اسنادی ابزاری است که بانک خریدار تضمین می‌کند در صورت ارائه اسناد مشخص توسط فروشنده، مبلغ مورد توافق پرداخت خواهد شد. این روش یکی از امن ترین روش های پرداخت در تجارت بینالملل است.',
  },
  {
    word: 'Customs Clearance',
    english_definition:
      'The act of passing goods through customs so they can enter or leave a country. It involves submitting documentation, paying duties, and complying with regulations of the importing/exporting country.',
    persian_meaning: 'ترخیص گمرکی',
    example:
      'Delays in customs clearance caused a two-week hold-up in the delivery schedule, affecting production timelines.',
    category: 'Logistics, International Trade',
    related_terms: 'Customs Duty, Import/Export License, Tariff, Customs Broker',
    notes:
      'ترخیص گمرکی فرآیند تأیید و اجازه ورود یا خروج کاال از مرز کشور است. این فرآیند شامل بررسی اسناد، پرداخت عوارض و تطابق با مقررات گمرکی می‌شود.',
  },
  {
    word: 'Tariff',
    english_definition:
      'A tax or duty imposed by a government on imports or exports of goods. Tariffs are used to restrict trade, protect domestic industries, and raise government revenue.',
    persian_meaning: 'تعرفه گمرکی',
    example:
      'The government imposed a 25% tariff on imported steel to protect the domestic steel industry from foreign competition.',
    category: 'International Trade, Economics',
    related_terms: 'Customs Duty, Import Tax, Trade Policy, Quota',
    notes:
      'تعرفه گمرکی مالیاتی است که دولت بر واردات یا صادرات کالا اعمال می‌کند. این ابزار سیاست تجاری برای حمایت از صنایع داخلی یا ایجاد درآمد دولتی استفاده می‌شود.',
  },
  {
    word: 'Proforma Invoice',
    english_definition:
      'A preliminary invoice sent to buyers before a shipment or delivery of goods. It defines the goods or services and their prices without creating a financial obligation, used for customs and budgeting purposes.',
    persian_meaning: 'پیش فاکتور',
    example:
      'Before finalizing the order, the buyer requested a proforma invoice to obtain import permits and arrange the Letter of Credit.',
    category: 'International Trade, Finance',
    related_terms: 'Commercial Invoice, Purchase Order, Letter of Credit, Quotation',
    notes:
      'پیش فاکتور سندی اولیه است که قبل از ارسال کالا صادر میشود. اگرچه بار مالی ایجاد نمیکند، اما اطلاعات الزم برای دریافت مجوزهای واردات و تأمین مالی را فراهم می کند.',
  },
  {
    word: 'Commercial Invoice',
    english_definition:
      'A customs document required for international trade. It is a bill for the goods from the seller to the buyer and contains all required information about the transaction such as quantity, price, and terms.',
    persian_meaning: 'فاکتور تجاری',
    example:
      'The customs agent required a properly filled commercial invoice with full description and value of goods for the import clearance.',
    category: 'International Trade, Customs',
    related_terms: 'Proforma Invoice, Packing List, Bill of Lading, Customs Clearance',
    notes:
      'فاکتور تجاری سندی رسمی است که جزئیات کامل معامله شامل شرح کالا، مقدار، قیمت و شرایط پرداخت را در بر می گیرد. این سند برای ترخیص گمرکی ضروری است.',
  },
  {
    word: 'Certificate of Origin',
    abbreviation: 'C/O',
    english_definition:
      'A document that certifies the country in which a product was manufactured. It is used by customs to determine the applicable duty rate and whether the goods qualify for preferential treatment under trade agreements.',
    persian_meaning: 'گواهی مبدأ',
    example:
      'The European importer requested a Certificate of Origin to take advantage of the lower tariff rate under the EU-Korea trade agreement.',
    category: 'International Trade, Customs',
    related_terms: 'Customs Clearance, Tariff, Trade Agreement, Packing List',
    notes:
      'گواهی مبدأ سندی است که کشور تولید کالا را تأیید می‌کند. اهمیت آن در تعیین نرخ تعرفه گمرکی و بهره مندی از قراردادهای تجاری ترجیحی است.',
  },
  {
    word: 'Packing List',
    english_definition:
      'A document that provides detailed information about the contents of each package in a shipment, including quantity, weight, dimensions, and item descriptions. Required for customs inspection.',
    persian_meaning: 'لیست بسته بندی',
    example:
      'The packing list detailed each carton\'s contents, weights, and measurements, helping customs quickly verify the shipment.',
    category: 'International Trade, Logistics',
    related_terms: 'Commercial Invoice, Bill of Lading, Customs Clearance, Shipping Documents',
    notes:
      'لیست بسته بندی جزئیات دقیق محتویات هر بسته در محموله را نشان می‌دهد. این سند برای بازرسی گمرکی ضروری است و باید با فاکتور تجاری مطابقت داشته باشد.',
  },
  {
    word: 'Contract',
    english_definition:
      'A legally binding agreement between two or more parties that creates mutual obligations enforceable by law. A valid contract requires an offer, acceptance, consideration, and mutual intent to be bound.',
    persian_meaning: 'قرارداد',
    example:
      'Both parties signed the contract outlining the delivery schedule, payment terms, and penalties for breach of agreement.',
    category: 'Legal ,Contracts',
    related_terms: 'Agreement, Terms and Conditions, MOU, Breach of Contract',
    notes:
      'قرارداد توافقنامه ای الزام‌آور قانونی بین دو یا چند طرف است. عناصر اصلی آن پیشنهاد، قبول، عوض و قصد الزام آور شدن است.',
  },
  {
    word: 'Memorandum of Understanding',
    abbreviation: 'MOU',
    english_definition:
      'A formal agreement between two or more parties that outlines the terms and details of an understanding, including each party\'s requirements and responsibilities. Not legally binding unless specified.',
    persian_meaning: 'تفاهم نامه',
    example:
      'The two companies signed an MOU to explore a potential joint venture, with no financial commitments at this preliminary stage.',
    category: 'Business ,Contracts',
    related_terms: 'Letter of Intent, Contract, Joint Venture, Agreement',
    notes:
      'تفاهمنامه سندی است که اصول کلی همکاری میان طرفین را مشخص می کند. معمولاً الزام قانونی ندارد اما تعهد اخلاقي برای پیشبرد توافق ایجاد می کند.',
  },
  {
    word: 'Force Majeure',
    persian_meaning: 'فورس ماژور (قوه قاهره)',
    english_definition:
      'A contract clause that frees both parties from obligation or liability when an extraordinary, unforeseen event beyond their control occurs, such as wars, natural disasters, or pandemics.',
    example:
      'The supplier invoked the force majeure clause due to the earthquake that destroyed their factory, exempting them from delivery penalties.',
    category: 'Legal ,Contracts',
    related_terms: 'Act of God, Contract, Breach of Contract, Risk Management',
    notes:
      'فورس ماژور بندی در قراردادهاست که طرفین را در برابر رویدادهای غیرقابل پیش بینی و خارج از کنترل از مسئولیت معاف می کند. این بند در قراردادهای بینالمللی اهمیت ویژه ای دارد.',
  },
  {
    word: 'Terms and Conditions',
    abbreviation: 'T&C',
    persian_meaning: 'شرایط و ضوابط',
    english_definition:
      'The general and specific arrangements, provisions, requirements, rules, specifications, and standards that form an integral part of a contract, agreement, or any other legal instrument.',
    example:
      'Before signing, both parties carefully reviewed the Terms and Conditions, particularly the payment schedule and liability clauses.',
    category: 'Legal ,Contracts',
    related_terms: 'Contract, Warranty, Liability, Agreement',
    notes:
      'شرایط و ضوابط بخشی جدایی ناپذیر از قرارداد است که حقوق، تکالیف و انتظارات هر طرف را به تفصیل مشخص می کند.',
  },
  {
    word: 'Breach of Contract',
    persian_meaning: 'نقض قرارداد',
    english_definition:
      'A legal cause of action and a type of civil wrong in which a binding agreement or bargained-for exchange is not honored by one or more parties due to non-performance, late performance, or substandard performance.',
    example:
      'The supplier\'s failure to deliver on time constituted a breach of contract, entitling the buyer to claim damages.',
    category: 'Legal ,Contracts',
    related_terms: 'Contract, Damages, Penalty Clause, Force Majeure',
    notes:
      'نقض قرارداد زمانی اتفاق می افتد که یکی از طرفین تعهدات مندرج در قرارداد را انجام ندهد. پیامد آن معموال پرداخت خسارت یا فسخ قرارداد است.',
  },
  {
    word: 'Penalty Clause',
    persian_meaning: 'بند جریمه /شرط وجه التزام',
    english_definition:
      'A provision in a contract that requires the defaulting party to pay a specified sum of money as a penalty if they fail to fulfill their obligations. Common in construction and supply contracts.',
    example:
      'The penalty clause specified a fine of 1% of the contract value per day of delay, motivating the contractor to meet deadlines.',
    category: 'Legal ,Contracts',
    related_terms: 'Liquidated Damages, Breach of Contract, Contract, Performance Bond',
    notes:
      'بند جریمه مبلغی از پیش تعیین شده است که طرف خاطی در صورت نقض تعهد باید بپردازد. این بند انگیزه ای قوی برای اجرای به موقع تعهدات ایجاد می کند.',
  },
  {
    word: 'Indemnification Clause',
    persian_meaning: 'بند جبران خسارت',
    english_definition:
      'A contractual obligation of one party (the indemnitor) to compensate the loss incurred by the other party (the indemnitee) due to specified acts or events. It shifts risk from one party to another.',
    example:
      'The indemnification clause required the contractor to cover all costs if a third party sued due to damage caused during the project.',
    category: 'Contracts, Legal, Risk Management',
    related_terms: 'Liability, Insurance, Risk Management, Breach of Contract',
    notes:
      'بند جبران خسارت یکی از مهم ترین بندهای قرارداد است که مشخص می کند در صورت وقوع خسارت، کدام طرف مسئولیت پرداخت آن را بر عهده دارد.',
  },
  {
    word: 'Non-Disclosure Agreement',
    abbreviation: 'NDA',
    persian_meaning: 'توافقنامه عدم افشا /محرمانگی',
    english_definition:
      'A legally binding contract that establishes a confidential relationship between parties. The parties agree not to disclose certain confidential information learned during their business dealings.',
    example:
      'Before sharing their proprietary technology details, the company required potential partners to sign an NDA.',
    category: 'Contracts, Legal, Business',
    related_terms: 'Confidentiality Agreement, Intellectual Property, Trade Secret, Contract',
    notes:
      'توافقنامه محرمانگی از افشای اطالعات تجاری، فنی یا استراتژیک حساس به اشخاص ثالث جلوگیری میکند. این قرارداد در مرحله مذاکرات اولیه بسیار رایج است.',
  },
  {
    word: 'Arbitration Clause',
    persian_meaning: 'بند داوری',
    english_definition:
      'A provision in a contract that requires the parties to resolve disputes through arbitration rather than litigation in court. Specifies the arbitration body, rules, venue, and language.',
    example:
      'The arbitration clause designated the ICC International Court of Arbitration as the body to resolve any contract disputes.',
    category: 'Contracts, Legal, Dispute Resolution',
    related_terms: 'Arbitration, Mediation, Dispute Resolution, ICC',
    notes:
      'بند داوری در قراردادهای بینالمللی بسیار رایج است زیرا روشی سریعتر و خصوصی تر برای حل اختالفات نسبت به دادگاه فراهم می کند.',
  },
  {
    word: 'Purchase Order',
    abbreviation: 'PO',
    persian_meaning: 'سفارش خرید',
    english_definition:
      'A commercial document issued by a buyer to a seller that indicates the types, quantities, and agreed prices for products or services. A purchase order legally binds both parties once accepted by the seller.',
    example:
      'After approving the quotation, the procurement department issued a Purchase Order to confirm the order and payment terms.',
    category: 'Procurement, Contracts, Business',
    related_terms: 'Invoice, Contract, Procurement, Supplier Management',
    notes:
      'سفارش خرید سندی رسمی است که خریدار به فروشنده ارسال می کند تا نوع، مقدار و قیمت کاال یا خدمات مورد نظر را تأیید کند. این سند یک توافق قانونی ایجاد می کند.',
  },
  {
    word: `Negotiation`,
    english_definition:
      `A dialogue between two or more parties intended to reach a beneficial outcome or resolve conflicts. In business, it involves discussions about price, terms, and conditions to reach a mutually acceptable agreement.`,
    persian_meaning: `مذاکره`,
    example:
      `Skilled negotiation by the procurement team resulted in a 15% price reduction and improved delivery terms from the supplier.`,
    category: `Business ,Negotiation`,
    related_terms: `Bargaining, BATNA, Mediation, Agreement`,
    notes:
      `مذاکره یکی از مهمترین مهارت های تجاری است .هدف آن رسیدن به توافقی است که منافع هر دو طرف را تأمین کند .مذاکره موفق نیازمند آمادگی، گوش دادن فعال و توانایی خلق ارزش است`,
  },
  {
    word: 'Best Alternative to a Negotiated Agreement',
    abbreviation: 'BATNA',
    english_definition:
      `Best Alternative to a Negotiated Agreement — the most advantageous alternative course of action a party can take if negotiations fail. Understanding BATNA determines the point at which it makes no sense to continue negotiating.`,
    persian_meaning: `بهترین جایگزین برای توافق مذاکره شده`,
    example:
      `Knowing their BATNA was a competitive supplier offering similar prices, the buyer negotiated confidently for better terms.`,
    category: `Negotiation`,
    related_terms: `ZOPA, Negotiation, Walk-Away Point, Leverage`,
    notes:
      `شما قوی تر باشد، قدرت مذاکره تان بیشتر است .داشتن BATNA قوی ترین سالح یک مذاکره کننده است .هر چه BATNA مشخص از پذیرش توافقات نامطلوب جلوگیری می کند BATNA`,
  },
  {
    word: 'Zone of Possible Agreement',
    abbreviation: 'ZOPA',
    english_definition:
      `The range in which an agreement is possible between two parties. It is the overlap between what one party is willing to accept and what the other party is willing to offer.`,
    persian_meaning: `محدوده توافق احتمالی`,
    example:
      `The negotiation succeeded because a ZOPA existed between the seller's minimum price of $90 and the buyer's maximum budget of $110.`,
    category: `Negotiation`,
    related_terms: `BATNA, Reservation Price, Negotiation, Win-Win`,
    notes:
      `ناحیه ای است که در آن هر دو طرف مذاکره میتوانند به توافق برسند .شناخت این محدوده به تمرکز مذاکرات روی ZOPA :توضیح راه حل های عملی کمک می کند`,
  },
  {
    word: `Win-Win Negotiation`,
    english_definition:
      `An approach to negotiation where both parties aim to find solutions that create mutual benefit, rather than one side winning at the expense of the other. Also known as integrative or principled negotiation.`,
    persian_meaning: `مذاکره برد-برد`,
    example:
      `By focusing on shared interests rather than positions, they reached a win‑win agreement that reduced costs for the buyer and increased volume for the seller.`,
    category: `Negotiation`,
    related_terms: `BATNA, Integrative Negotiation, Interest-Based Bargaining, Collaboration`,
    notes:
      `مذاکره برد-برد رویکردی است که به دنبال خلق ارزش برای هر دو طرف است .در این روش به جای رقابت بر سر یک کیک ثابت، تلاش می‌شود تا کیک بزرگ‌تر شود`,
  },
  {
    word: `Concession`,
    english_definition:
      `Something that one party gives up or agrees to as part of a negotiation. Making concessions is a normal part of negotiation, and the timing and sequencing of concessions can influence outcomes.`,
    persian_meaning: `امتیاز دادن /تنازل`,
    example:
      `The seller made a concession on price in exchange for a longer payment term, making the deal work for both sides.`,
    category: `Negotiation`,
    related_terms: `Trade‑off, Bargaining, Compromise, Win‑Win`,
    notes:
      `امتیازدهی بخش طبیعی هر مذاکره ای است .مذاکره کنندگان حرفه ای یاد می گیرند چه زمانی، چه مقدار و در ازای چه چیزی امتیاز بدهند`,
  },
  {
    word: `Leverage`,
    english_definition:
      `The power or advantage one party has in a negotiation that can be used to influence the other party to reach a favorable agreement. Leverage can come from alternatives, information, timing, or relationships.`,
    persian_meaning: `اهرم فشار /قدرت چانه زنی`,
    example:
      `The buyer's leverage increased significantly when a second qualified supplier entered the market, forcing the original supplier to offer better pricing.`,
    category: `Negotiation, Business Strategy`,
    related_terms: `BATNA, Power, Negotiation, Bargaining Position`,
    notes:
      `اهرم قدرت در مذاکره منبع تأثیرگذاری یک طرف بر دیگری است .شناخت و ایجاد اهرم مناسب پیش از شروع مذاکره از عوامل کلیدی موفقیت است`,
  },
  {
    word: `Anchoring`,
    english_definition:
      `A negotiation tactic where a party sets an initial offer or reference point that strongly influences the subsequent negotiation. The first number put on the table serves as an anchor around which discussions revolve.`,
    persian_meaning: `لنگرگذاری (در مذاکره)`,
    example:
      `By opening with a high price anchor of $200 per unit, the seller successfully negotiated a final price well above the $150 they had targeted.`,
    category: `Psychology ,Negotiation`,
    related_terms: `Opening Offer, Framing, Negotiation, Anchoring Bias`,
    notes:
      `لنگرگذاری یک تاکتیک روانشناختی قوی در مذاکره است .اولین عدد یا شرطی که مطرح می‌شود تأثیر نامتناسبی بر چارچوب کل مذاکره می گذارد`,
  },
  {
    word: `Deadlock`,
    english_definition:
      `A situation in a negotiation where progress has stalled because neither side is willing to make further concessions. A deadlock requires creative problem‑solving, mediation, or time to resolve.`,
    persian_meaning: `بن بست در مذاکره`,
    example:
      `After three days of negotiations, they reached a deadlock over the warranty period; a mediator was brought in to break the impasse.`,
    category: `Negotiation`,
    related_terms: `Impasse, Mediation, Concession, BATNA`,
    notes:
      `بن بست زمانی رخ می‌دهد که هیچ یک از طرفین حاضر به عقب نشینی بیشتر نیستند .راههای برون رفت از آن شامل تغییر چارچوب، معرفی گزینه‌های جدید یا استفاده از میانجی است`,
  },
  {
    word: `Mediation`,
    english_definition:
      `A form of alternative dispute resolution where a neutral third party (mediator) helps disputing parties reach a mutually acceptable agreement. Unlike arbitration, the mediator does not impose a decision.`,
    persian_meaning: `میانجی گری`,
    example:
      `When direct negotiations failed, they agreed to mediation, and a professional mediator helped them resolve the contract dispute within two days.`,
    category: `Dispute Resolution, Negotiation`,
    related_terms: `Arbitration, Conciliation, Dispute Resolution, ADR`,
    notes:
      `میانجی گری روشی داوطلبانه و غیررسمی برای حل اختلافات است .میانجی به طرفین کمک می‌کند تا راه حل خود را بیابند و هیچ تصمیمی بر آنها تحمیل نمی‌کند`,
  },
  {
    word: `Good Faith Negotiation`,
    english_definition:
      `A negotiation conducted with honest intention to reach a fair agreement. Both parties approach the process with genuine intent to compromise and honor the terms of any resulting agreement.`,
    persian_meaning: `مذاکره با حسن نیت`,
    example:
      `Both companies entered into good faith negotiations, sharing cost data openly to find a mutually beneficial pricing structure.`,
    category: `Ethics ,Negotiation`,
    related_terms: `Trust, Transparency, Business Ethics, Agreement`,
    notes:
      `مذاکره با حسن نیت یعنی هر دو طرف صادقانه به دنبال توافق باشند .این اصل پایه اخلاقی هر مذاکره تجاری سالم است و پایه اعتماد بلندمدت را می‌سازد`,
  },
  {
    word: 'Counter‑Offer',
    english_definition:
      'The response to a negotiation offer in which a different set of terms is proposed. A counter‑offer rejects the original offer and replaces it with new terms, restarting the negotiation.',
    persian_meaning: 'پیشنهاد متقابل',
    example:
      'In response to the seller\'s initial price of $500, the buyer made a counter‑offer of $420, initiating a round of price negotiations.',
    category: 'Contracts, Negotiation',
    related_terms: 'Offer, Acceptance, Bargaining, Contract Formation',
    notes:
      'پیشنهاد متقابل بخش معمول فرآیند چانه زنی است. در حقوق قراردادها، ارائه پیشنهاد متقابل به معنای رد پیشنهاد اصلی و جایگزینی آن با شرایط جدید است',
  },
  {
    word: 'Due Diligence',
    english_definition:
      'A comprehensive investigation or audit of a potential business partner, investment, or contract before signing an agreement. It involves verifying information and assessing risks to make informed decisions.',
    persian_meaning: 'بررسی جامع /دیلیجنس',
    example:
      'Before finalizing the acquisition, the company conducted thorough due diligence on the target\'s financial records and legal liabilities.',
    category: 'Contracts, Business, Finance',
    related_terms: 'Risk Assessment, Contract, Audit, Legal Review',
    notes:
      'دیلیجنس فرآیند بررسی دقیق پیش از انعقاد قرارداد یا سرمایه‌گذاری است. هدف آن شناسایی ریسک‌ها و اطمینان از درستی اطلاعات ارائه‌شده توسط طرف مقابل است',
  },
  {
    word: 'Reservation Price',
    english_definition:
      'The least favorable point at which one will accept a deal in a negotiation. Also called the “walk‑away point,” it is the minimum acceptable outcome before a party should prefer their BATNA.',
    persian_meaning: 'قیمت کف /نقطه خروج از مذاکره',
    example:
      'The seller\'s reservation price was $80 per unit; any offer below that would result in walking away from the deal.',
    category: 'Negotiation',
    related_terms: 'BATNA, ZOPA, Walk‑Away Point, Negotiation',
    notes:
      'قیمت کف حداقل شرایطی است که یک طرف قبل از ترک مذاکره می‌پذیرد. داشتن قیمت کف مشخص از قبل، از تصمیم‌گیری احساسی در لحظات فشار جلوگیری می‌کند',
  },
  {
    word: 'Trade‑off',
    english_definition:
      'A situation that involves losing one quality, aspect, or benefit of something in return for gaining another. In negotiation, trade‑offs involve exchanging one issue for gains on another.',
    persian_meaning: 'مبادله /معامله متقابل',
    example:
      'The trade‑off in the deal was accepting a longer delivery time in exchange for a significantly lower price.',
    category: 'Negotiation, Decision Making',
    related_terms: 'Concession, Compromise, Bargaining, Value Creation',
    notes:
      'مبادله در مذاکره به معنای دادن چیزی در ازای گرفتن چیز دیگری است. مذاکره‌کنندگان ماهر از مبادله‌های هوشمندانه برای خلق ارزش بیشتر استفاده می‌کنند',
  },
  {
    word: 'Letter of Intent',
    abbreviation: 'LOI',
    english_definition:
      'A document declaring the preliminary commitment of one party to do business with another. It outlines the main terms of a prospective deal before a formal contract is drawn up.',
    persian_meaning: 'اعلامیه قصد /نامه اراده',
    example:
      'The two companies signed a Letter of Intent to merge, with the formal merger agreement to follow after due diligence.',
    category: 'Contracts, Business, Negotiation',
    related_terms: 'MOU, Contract, Heads of Agreement, Due Diligence',
    notes:
      'نامه اراده سندی است که قصد اولیه یک طرف برای انجام معامله را اعلام می‌کند. اگرچه معموال الزام‌آور کامل نیست، اما چارچوب توافق نهایی را مشخص می‌کند',
  },
  {
    word: 'Distribution Channel',
    english_definition:
      'The path through which a product travels from the manufacturer to the end consumer. Channels can be direct (manufacturer to consumer) or indirect (through intermediaries like wholesalers and retailers).',
    persian_meaning: 'کانال توزیع',
    example:
      'The company switched to a direct distribution channel by launching its own e‑commerce platform, cutting out the middlemen.',
    category: 'Marketing, Logistics',
    related_terms: 'Supply Chain, Wholesaler, Retailer, Direct Sales',
    notes:
      'کانال توزیع مسیری است که کالا از تولیدکننده به مصرف‌کننده نهایی طی می‌کند. انتخاب کانال مناسب تأثیر مستقیمی بر هزینه، سرعت و دسترسی بازار دارد',
  },
  {
    word: 'Last Mile Delivery',
    english_definition:
      'The final step of the delivery process in which a package moves from a distribution hub to its final destination (usually a home or business). It is often the most expensive and time‑consuming part of shipping.',
    persian_meaning: 'تحویل آخرین مایل',
    example:
      'E‑commerce companies invest heavily in last‑mile delivery solutions to meet customer expectations for same‑day or next‑day delivery.',
    category: 'Logistics, E‑Commerce',
    related_terms: 'Distribution, Fulfillment, Courier, Delivery',
    notes:
      'تحویل آخرین مایل گرانترین و چالش‌برانگیزترین بخش زنجیره تأمین است. بهینه‌سازی آن از اولویت‌های اصلی شرکت‌های لجستیک و تجارت الکترونیک است',
  },
  {
    word: 'Drop Shipping',
    english_definition:
      'A retail fulfillment method where a store doesn’t keep products in stock but instead transfers customer orders directly to the manufacturer or wholesaler, who ships directly to the customer.',
    persian_meaning: 'دراپ شیپینگ (ارسال مستقیم از انبار تأمین‌کننده)',
    example:
      'The online retailer used drop shipping to offer thousands of products without ever holding inventory, reducing capital requirements significantly.',
    category: 'E‑Commerce, Logistics',
    related_terms: 'Fulfillment, Inventory Management, Supply Chain, Retail',
    notes:
      'دراپ شیپینگ مدلی است که در آن فروشنده موجودی نگه نمی‌دارد و سفارش‌ها مستقیماً از انبار تأمین‌کننده برای مشتری ارسال می‌شود. این مدل سرمایه اولیه کمی نیاز دارد',
  },
  {
    word: 'Reverse Logistics',
    english_definition:
      'The process of moving goods from their final destination back through the supply chain for return, repair, remanufacturing, recycling, or disposal purposes.',
    persian_meaning: 'لجستیک معکوس',
    example:
      'The company developed an efficient reverse logistics system to handle product returns and recycling, improving customer satisfaction and sustainability.',
    category: 'Logistics, Supply Chain',
    related_terms: 'Returns Management, Sustainability, Recycling, Supply Chain',
    notes:
      'لجستیک معکوس فرآیند بازگشت کالا از مشتری به تأمین‌کننده یا تولید‌کننده است. مدیریت مؤثر آن بر رضایت مشتری و پایداری محیطی تأثیر مثبت دارد',
  },
  {
    word: 'Cold Chain',
    english_definition:
      'A temperature‑controlled supply chain used for products that require a specific temperature range throughout the entire logistics process, from production to final delivery. Common in food, pharmaceutical, and chemical industries.',
    persian_meaning: 'زنجیره سرد (نگهداری در دما کنترل شده)',
    example:
      'The pharmaceutical company invested in a specialized cold chain to ensure vaccines remained effective throughout the international distribution process.',
    category: 'Logistics, Supply Chain',
    related_terms: 'Temperature Control, Pharmaceutical, Food Safety, Supply Chain',
    notes:
      'زنجیره سرد برای کالاهایی مانند مواد غذایی، دارو و مواد شیمیایی که نیاز به نگهداری در دمای مشخص دارند، ضروری است. شکست در زنجیره سرد می‌تواند آسیب‌های جدی ایجاد کند',
  },
  {
    word: 'Backorder',
    english_definition:
      'An order for a product that is currently out of stock or temporarily unavailable. The item is backordered and will be shipped when it becomes available again.',
    persian_meaning: 'سفارش معوق',
    example:
      'Due to supply chain disruptions, the popular product went on backorder, with a 6‑week estimated wait time for customers.',
    category: 'Logistics, Inventory Management',
    related_terms: 'Stockout, Inventory Management, Lead Time, Demand',
    notes:
      'سفارش معوق وضعیتی است که محصول مورد نظر در موجودی نیست اما سفارش ثبت شده تا زمان موجودی شدن اجرا می‌شود',
  },
  {
    word: 'Cross‑Docking',
    english_definition:
      'A logistics strategy in which incoming shipments are directly transferred to outgoing vehicles without being placed into storage, eliminating the need for warehouse storage and reducing handling times.',
    persian_meaning: 'کراس داکینگ )ترانزیت مستقیم(',
    example:
      'Walmart\'s use of cross‑docking allows products to move from supplier trucks directly to store delivery trucks, reducing warehouse costs dramatically.',
    category: 'Logistics, Supply Chain',
    related_terms: 'Warehousing, Distribution, Just‑In‑Time, Supply Chain',
    notes:
      'کراس داکینگ استراتژی لجستیکی است که در آن کالا بدون انبارداری از حمل و نقل ورودی به خروجی منتقل می‌شود .این روش زمان و هزینه انبارداری را به شدت کاهش می‌دهد',
  },
  {
    word: 'Landed Cost',
    english_definition:
      'The total cost of a product after all expenses are paid to bring it to the buyer\'s door. It includes the original price, transportation, customs duties, insurance, and any other charges.',
    persian_meaning: 'بهای تمامشده تحویل )قیمت کامل تا مقصد (',
    example:
      'When comparing suppliers from different countries, the company calculated landed cost rather than purchase price to get a true comparison.',
    category: 'Logistics, Finance, International Trade',
    related_terms: 'CIF, Customs Duty, Total Cost of Ownership, Incoterms',
    notes:
      'بهای تمامشده تحویل تمام هزینه‌های مرتبط با خرید و انتقال کالا تا مقصد نهایی را در بر می‌گیرد .این عدد مبنای واقعی مقایسه قیمت‌های مختلف است',
  },
  {
    word: 'Demurrage',
    english_definition:
      'A charge payable by the charterer or shipper for detaining a ship, freight car, or container beyond the allowed free time for loading or unloading cargo.',
    persian_meaning: 'جریمه تأخیر /دموراژ',
    example:
      'Due to port congestion, the company incurred significant demurrage charges while waiting for the container to be unloaded.',
    category: 'Shipping ,Logistics',
    related_terms: 'Detention, Free Time, Port Charges, Shipping',
    notes:
      'دموراژ جریمه‌ای است که به دلیل توقف کشتی، واگن یا کانتینر فراتر از زمان مجاز پرداخت می‌شود .مدیریت زمان در بنادر و پایانه‌ها برای جلوگیری از این هزینه ضروری است',
  },
  {
    word: 'Track and Trace',
    english_definition:
      'A system that allows the real‑time location and status of a shipment to be monitored throughout the supply chain. Provides visibility from dispatch to delivery.',
    persian_meaning: 'ردیابی و پیگیری محموله',
    example:
      'Customers appreciated the track and trace system that let them monitor their order in real‑time from warehouse to doorstep.',
    category: 'Technology ,Logistics',
    related_terms: 'Visibility, Supply Chain Transparency, IoT, GPS',
    notes:
      'سیستم ردیابی و پیگیری محموله امکان نظارت لحظه‌ای بر وضعیت و موقعیت محموله را فراهم می‌کند .این قابلیت رضایت مشتری را افزایش می‌دهد و مدیریت اختلالات را ساده‌تر می‌کند',
  },
  {
    word: 'Compliance',
    english_definition:
      'The act of conforming to a rule, standard, policy, law, or regulation. In international trade, compliance involves adhering to customs regulations, trade laws, sanctions, and company policies.',
    persian_meaning: 'تطابق /انطباق با مقررات',
    example:
      'The company hired a compliance officer to ensure all export activities conformed to international trade regulations and sanctions.',
    category: 'International Trade, Legal',
    related_terms: 'Regulatory Compliance, Export Controls, Sanctions, Audit',
    notes:
      'انطباق با مقررات یکی از ارکان مهم تجارت بین‌الملل است .عدم رعایت مقررات گمرکی، تحریم‌ها و قوانین صادرات می‌تواند منجر به جریمه‌های سنگین و توقف فعالیت شود',
  },
  {
    word: 'Escrow',
    english_definition:
      'A financial arrangement where a third party holds funds or assets on behalf of two parties until the terms of a contract or agreement are fulfilled, reducing risk for both parties.',
    persian_meaning: 'حساب امانی /اسکرو',
    example:
      'To secure the international deal, the payment was held in escrow until the goods passed inspection at the destination port.',
    category: 'Contracts ,Finance',
    related_terms: 'Trust Account, Letter of Credit, Payment Security, Risk Management',
    notes:
      'حساب امانی ابزاری مالی است که در آن یک شخص ثالث وجه معامله را نگه می‌دارد تا طرفین به تعهداتشان عمل کنند .این روش ریسک معامله را برای هر دو طرف کاهش می‌دهد',
  },
  {
    word: 'Benchmark',
    english_definition:
      'A standard or reference point used for comparison in evaluating performance or quality. In supply chain and negotiations, benchmarking involves comparing prices, terms, and performance metrics against industry standards or competitors.',
    persian_meaning: 'معیار مقایسه /بنچمارک',
    example:
      'The procurement team benchmarked supplier prices against industry standards to ensure they were getting competitive rates.',
    category: 'Business, Negotiation, Analytics',
    related_terms: 'KPI, Performance Measurement, Competitive Analysis, Best Practice',
    notes:
      'بنچمارک معیاری است که عملکرد یا قیمت را با استانداردهای صنعت یا رقبا مقایسه می‌کند .این ابزار در مذاکرات تدارکاتی برای اثبات عدم رقابتی بودن قیمت بسیار مفید است',
  },
  {
    word: 'Multimodal Transport',
    english_definition:
      'The use of more than one mode of transportation (e.g., truck, rail, ship, air) to move goods from origin to destination under a single contract. A multimodal transport operator (MTO) takes overall responsibility.',
    persian_meaning: 'حمل ونقل چند وجهی',
    example:
      'The company used multimodal transport, combining sea freight from China to Europe with rail distribution to inland cities.',
    category: 'Logistics, International Trade',
    related_terms: 'Intermodal, Combined Transport, MTO, Logistics',
    notes:
      'حمل ونقل چند وجهی ترکیبی از روش‌های مختلف حمل و نقل زیر یک قرارداد واحد است .این روش معموال هزینه کمتر و انعطاف بیشتری نسبت به استفاده از یک روش واحد دارد',
  },
  {
    word: 'SLA (Service Level Agreement)',
    abbreviation: 'SLA',
    english_definition:
      'A contract between a service provider and a customer that defines the level of service expected, including metrics like response time, uptime, and delivery performance. Includes remedies if standards are not met.',
    persian_meaning: 'توافق نامه سطح خدمات',
    example:
      'The 3PL provider\'s SLA guaranteed 99% on‑time delivery; any shortfall triggered financial penalties.',
    category: 'Logistics, Contracts, Business',
    related_terms: 'KPI, Contract, Performance Metrics, Service Contract',
    notes:
      'توافق نامه سطح خدمات استاندارد عملکرد مورد انتظار از یک تأمین‌کننده خدمات را مشخص می‌کند .این سند پایه اندازه‌گیری عملکرد و اعمال جریمه در صورت کوتاهی است',
  },
]

export default part6
