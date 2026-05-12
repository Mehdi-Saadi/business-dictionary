import type { Phrase } from '@/types/phrase'

const part1: Phrase[] = [
  {
    word: 'Marketing',
    english_definition:
      'The process of creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large.',
    persian_meaning: 'بازاریابی',
    example:
      'The company\'s marketing focuses on building long-term relationships with customers.',
    category: 'Marketing, Strategy',
    related_terms:
      'Sales, Advertising, Market Research, Consumer Needs, Value Proposition, Exchange, Customer',
    notes:
      'بازاریابی تنها فروش یا تبلیغات نیست، بلکه یک فرآیند استراتژیک است که با درک نیازهای مشتری آغاز میشود و با ارائه ارزش به پایان میرسد. هدف نهایی، ایجاد رضایت و حفظ رابطه با مشتری است.',
  },
  {
    word: 'Marketing Mix',
    english_definition:
      'The set of tactical, controllable marketing tools that a company uses to produce the desired response from its target market.',
    persian_meaning: 'آمیخته بازاریابی',
    example:
      'Revising the marketing mix is essential when entering a new geographic market.',
    category: 'Marketing, Strategy, Operations',
    related_terms:
      '4Ps, Product, Price, Place, Promotion, Target Market, Tactics, Controllable Variables',
    notes:
      'مجموعه‌ای از تصمیمات عملیاتی و قابل کنترل است که بازاریابان برای اجرای استراتژی خود از آن استفاده می‌کنند. شناخته‌شده‌ترین مدل آن، 4P است.',
  },
  {
    word: '4Ps',
    english_definition:
      'A foundational marketing model representing the four key decision areas: Product, Price, Place, and Promotion.',
    persian_meaning: 'چهار عنصر اصلی بازاریابی',
    example:
      'For our new software, the 4Ps strategy includes a freemium model and online distribution.',
    category: 'Marketing, Strategy, Framework',
    related_terms:
      'Marketing Mix, Product, Price, Place, Promotion, Tactical Tools, 7Ps, 4Cs',
    notes:
      'چارچوبی کلاسیک برای تحلیل و برنامه‌ریزی آمیخته بازاریابی. هر P نماینده یک حوزه تصمیم‌گیری کلیدی است که باید با بازار هدف و یکدیگر هماهنگ باشند.',
  },
  {
    word: 'Market Segmentation',
    english_definition:
      'The process of dividing a broad consumer or business market into sub-groups (segments) based on shared characteristics.',
    persian_meaning: 'بخش‌بندی بازار',
    example:
      'Market segmentation allowed the company to create tailored messages for young professionals.',
    category: 'Marketing, Strategy, Research',
    related_terms:
      'Target Market, Demographics, Psychographics, Behavioral Segmentation, Geographic Segmentation, Niche Market, Segmentation Bases',
    notes:
      'پایه و اساس انتخاب بازار هدف است. بازارهای ناهمگن به بخش‌های کوچک‌تر و همگن تقسیم می‌شوند تا امکان تمرکز منابع و ارتباط مؤثرتر فراهم شود.',
  },
  {
    word: 'Target Market',
    english_definition:
      'A specific group of consumers at which a company aims its products, services, and marketing messages.',
    persian_meaning: 'بازار هدف',
    example:
      'The luxury brand\'s primary target market is high-income individuals aged 30-50.',
    category: 'Marketing, Strategy',
    related_terms:
      'Market Segmentation, Positioning, Consumer Profile, Niche, Mass Market, Differentiated Marketing, Concentrated Marketing',
    notes:
      'پس از بخش‌بندی بازار، شرکت یک یا چند بخش جذاب را به عنوان بازار هدف انتخاب می‌کند. تمامی تلاش‌های بازاریابی بر روی تأمین نیازهای این گروه متمرکز می‌شود.',
  },
  {
    word: 'Positioning',
    english_definition:
      'The process of designing a company\'s offering and image to occupy a distinct and valued place in the mind of the target customer relative to competitors.',
    persian_meaning: 'جایگاهیابی',
    example:
      'Around safety and positioning, Volvo has successfully built its durability.',
    category: 'Marketing, Strategy, Branding',
    related_terms:
      'Brand Image, Competitive Advantage, Perception, Value Proposition, Differentiation, Positioning Statement, Mind Share',
    notes:
      'جایگاهیابی در ذهن مشتری اتفاق میافتد، نه در محصول. این مفهوم درباره تصویر و جایگاهی است که یک برند نسبت به رقبایش در اذهان مشتریان هدف دارد.',
  },
  {
    word: 'Branding',
    english_definition:
      'The process of creating a unique name, symbol, design, and image for a product or service to identify and differentiate it from competitors.',
    persian_meaning: 'برندسازی',
    example:
      'Consistent branding across all platforms strengthens customer recognition and trust.',
    category: 'Marketing, Branding, Strategy',
    related_terms:
      'Brand Identity, Brand Equity, Brand Loyalty, Brand Awareness, Logo, Slogan, Brand Promise',
    notes:
      'برندسازی فراتر از یک لوگو است؛ ایجاد یک هویت و وعده مشخص به مشتری است. یک برند قوی، ارزش درکشده محصول را افزایش داده و وفاداری ایجاد میکند.',
  },
  {
    word: 'Brand Equity',
    english_definition:
      'The commercial value that derives from consumer perception of the brand name rather than from the product or service itself.',
    persian_meaning: 'ارزش ویژه برند',
    example:
      'Apple\'s strong brand equity allows it to command premium prices for its products.',
    category: 'Branding, Marketing, Finance',
    related_terms:
      'Brand Loyalty, Brand Awareness, Perceived Quality, Brand Associations, Brand Value, Customer-Based Brand Equity',
    notes:
      'دارایی نامشهودی است که از شهرت و اعتبار برند ناشی میشود. ارزش ویژه برند بالا منجر به مزایایی مانند قیمتگذاری بالاتر، وفاداری مشتری و اثربخشی بیشتر فعالیتهای بازاریابی میشود.',
  },
  {
    word: 'Brand Loyalty',
    english_definition:
      'The tendency of consumers to consistently choose one brand\'s products or services over competitors.',
    persian_meaning: 'وفاداری به برند',
    example:
      'The company\'s loyalty program is designed to increase brand loyalty and repeat purchases.',
    category: 'Branding, Consumer Behavior, CRM',
    related_terms:
      'Customer Retention, Repeat Purchase, Brand Equity, Customer Satisfaction, Switching Costs, Emotional Attachment',
    notes:
      'وفاداری به برند نشاندهنده یک تعهد عمیقتر نسبت به یک برند است که میتواند بر اساس رضایت عملکردی یا وابستگی عاطفی شکل بگیرد. حفظ مشتریان وفادار بسیار کمهزینهتر از جذب مشتریان جدید است.',
  },
  {
    word: 'Consumer Behavior',
    english_definition:
      'The study of individuals, groups, or organizations and the processes they use to select, secure, use, and dispose of products, services, experiences, or ideas to satisfy needs.',
    persian_meaning: 'رفتار مصرف‌کننده',
    example:
      'Understanding consumer behavior is crucial for predicting how customers will react to a new product launch.',
    category: 'Consumer Behavior, Research, Marketing',
    related_terms:
      'Buying Decision Process, Motivation, Perception, Attitudes, Culture, Social Factors, Psychological Factors',
    notes:
      'این حوزه به دالیل پشت تصمیمات خرید مشتریان میپردازد. عوامل فرهنگی، اجتماعی، شخصی و روانشناختی همگی بر رفتار مصرفکننده تأثیر میگذارند.',
  },
  {
    word: 'Product',
    english_definition:
      'Anything that can be offered to a market for attention, acquisition, use, or consumption that might satisfy a want or need.',
    persian_meaning: 'محصول',
    example:
      'The company\'s core product is a project management software for small businesses.',
    category: 'Marketing, Product Management',
    related_terms:
      'Service, Good, Features, Benefits, Quality, Packaging, Product Line, Product Mix',
    notes:
      'در بازاریابی، "محصول" میتواند یک کالای فیزیکی، یک خدمت، یک تجربه، یک شخص، یک مکان، یک سازمان یا حتی یک ایده باشد. ارزش اصلی آن در منافعی است که برای مشتری ایجاد میکند.',
  },
  {
    word: 'Product Life Cycle (PLC)',
    abbreviation: 'PLC',
    english_definition:
      'The stages a product goes through from its introduction to the market until its decline and removal.',
    persian_meaning: 'چرخه عمر محصول',
    example:
      'Smartphones are currently in the maturity stage of their life cycle in many developed markets.',
    category: 'Product Management, Strategy',
    related_terms:
      'Introduction, Growth, Maturity, Decline, New Product Development, Commercialization, Extension Strategies',
    notes:
      'یک مدل مفهومی که چهار مرحله اصلی (معرفی، رشد، بلوغ و افول) را توصیف میکند. استراتژیهای بازاریابی و مالی باید با هر مرحله تطبیق داده شوند.',
  },
  {
    word: 'New Product Development (NPD)',
    abbreviation: 'NPD',
    english_definition:
      'The complete process of bringing a new product or service to market, from idea generation to commercialization.',
    persian_meaning: 'توسعه محصول جدید',
    example:
      'The process includes rigorous testing before the final launch of the new product development.',
    category: 'Product Management, Innovation, Strategy',
    related_terms:
      'Idea Generation, Screening, Concept Development, Business Analysis, Test Marketing, Commercialization, R&D',
    notes:
      'فرآیندی ساختاریافته و پرریسک برای ایجاد و عرضه نوآوریها به بازار. هدف، کاهش احتمال شکست و افزایش شانس موفقیت محصول جدید است.',
  },
  {
    word: 'Price',
    english_definition:
      'The amount of money charged for a product or service, or the sum of the values that consumers exchange for the benefits of having or using it.',
    persian_meaning: 'قیمت',
    example:
      'The price of the new model is 20% higher due to advanced features and improved materials.',
    category: 'Marketing, Pricing, Finance',
    related_terms:
      'Cost, Value, Pricing Strategy, Skimming, Penetration, Discount, List Price, Psychological Pricing',
    notes:
      'تنها عنصر از آمیخته بازاریابی که درآمد ایجاد میکند (بقیه هزینهزا هستند). قیمت باید منعکس‌کننده ارزش درک‌شده توسط مشتری، هزینههای تولید، رقابت و اهداف شرکت باشد.',
  },
  {
    word: 'Pricing Strategy',
    english_definition:
      'A company\'s approach to setting the initial price for its products or services, considering costs, value, competition, and market conditions.',
    persian_meaning: 'استراتژی قیمت‌گذاری',
    example:
      'Our pricing strategy for the new energy drink is competitive pricing to gain market share quickly.',
    category: 'Pricing, Strategy, Marketing',
    related_terms:
      'Cost-Plus Pricing, Value-Based Pricing, Competition-Based Pricing, Penetration Pricing, Skimming Pricing, Dynamic Pricing',
    notes:
      'چارچوبی برای تعیین قیمتی است که هم به اهداف شرکت (مانند سودآوری یا سهم بازار) دست یابد و هم برای مشتری قابل قبول باشد. انتخاب استراتژی به مرحله چرخه عمر محصول و موقعیت رقابتی بستگی دارد.',
  },
  {
    word: 'Penetration Pricing',
    english_definition:
      'A pricing strategy where a company sets a low initial price for a new product to attract a large number of customers and gain market share rapidly.',
    persian_meaning: 'قیمت‌گذاری نفوذی',
    example:
      'The streaming service used penetration pricing with a free trial and a low monthly fee to attract subscribers.',
    category: 'Pricing, Strategy',
    related_terms:
      'Market Share, Low Price, Entry Strategy, Skimming Pricing, Competitive Pricing, Loss Leader',
    notes:
      'این استراتژی برای محصولات جدیدی مؤثر است که کشش قیمتی تقاضا بالاست یا ورود به بازارهای دارای رقبای قوی هدف باشد. ریسک آن، دشواری در افزایش قیمت در آینده است.',
  },
  {
    word: 'Skimming Pricing',
    abbreviation: undefined,
    english_definition:
      'A pricing strategy where a company sets a high initial price for a new, innovative product to maximize revenue from early adopters before lowering it over time.',
    persian_meaning: 'قیمت‌گذاری کششی/چربانی',
    example:
      'The tech company used skimming pricing for its latest gadget, targeting tech enthusiasts willing to pay a premium.',
    category: 'Pricing, Strategy, Innovation',
    related_terms:
      'Premium Pricing, Early Adopters, Innovation, High Price, Penetration Pricing, Price Reduction, ROI',
    notes:
      'این استراتژی برای بازیابی سریع هزینه‌های تحقیق و توسعه مناسب است. پیش‌نیاز آن، وجود بخشی از بازار است که به قیمت حساس نیستند و نوآوری محصول را ارزشمند می‌دانند.',
  },
  {
    word: 'Distribution Channel',
    english_definition:
      'The path or route through which products or services flow from the manufacturer to the end consumer.',
    persian_meaning: 'کانال توزیع',
    example:
      'The company uses a dual distribution channel—selling both online and through authorized retailers.',
    category: 'Distribution, Marketing, Supply Chain',
    related_terms:
      'Place, Intermediaries, Wholesaler, Retailer, Direct Channel, Indirect Channel, Logistics, Channel Members',
    notes:
      'مجموعه‌ای از سازمانها و افراد (مانند عمده‌فروشان، خرده‌فروشان) که محصول را در دسترس مشتری نهایی قرار میدهند. انتخاب کانال بر دسترسی، هزینه و کنترل شرکت تأثیر میگذارد.',
  },
  {
    word: 'Supply Chain',
    english_definition:
      'The entire network of entities, from raw material suppliers to end consumers, involved in creating and delivering a product or service.',
    persian_meaning: 'زنجیره تأمین',
    example:
      'A resilient supply chain is critical to avoid disruptions and ensure the timely delivery of products.',
    category: 'Operations, Supply Chain, Logistics',
    related_terms:
      'Procurement, Logistics, Inventory, Suppliers, Manufacturers, Distributors, Demand Planning, SCM (Supply Chain Management)',
    notes:
      'زنجیره تأمین فراتر از کانال توزیع است و تمام جریانهای بالادست (تأمین مواد اولیه) و پایین‌دست (تحویل به مشتری) به همراه جریان اطلاعات و مالی را دربر میگیرد.',
  },
  {
    word: 'Promotion',
    english_definition:
      'All the activities that communicate the value of a product or service to the target market and persuade them to buy.',
    persian_meaning: 'ترفیع/تبلیغات',
    example:
      'The new promotion includes a social media campaign and in-store promotion, such as discounts.',
    category: 'Promotion, Marketing, Communication',
    related_terms:
      'Promotion Mix, Advertising, Sales Promotion, Personal Selling, Public Relations, Direct Marketing, IMC',
    notes:
      'یکی از P4ها که بر ایجاد آگاهی، علاقه، تمایل و اقدام به خرید (AIDA) تمرکز دارد. هدف آن اطلاع‌رسانی، ترغیب و یادآوری به مشتریان است.',
  },
  {
    word: 'Advertising',
    english_definition:
      'Any paid form of non-personal presentation and promotion of ideas, goods, or services by an identified sponsor.',
    persian_meaning: 'تبلیغات پولی',
    example:
      'The advertising campaign will run on television and popular online advertising platforms.',
    category: 'Promotion, Advertising, Marketing',
    related_terms:
      'Mass Media, Commercial, Ad Copy, Media Planning, Reach, Frequency, Creativity, ROI',
    notes:
      'شکل متداول و پولی ارتباطات بازاریابی که از طریق رسانههای جمعی (تلویزیون، اینترنت، بیلبورد) انجام میشود. مزیت آن دسترسی گسترده است، اما هزینهبر بوده و معموالً غیرشخصی است.',
  },
  {
    word: 'Personal Selling',
    english_definition:
      'A personal presentation by a firm’s sales force for the purpose of making sales and building customer relationships.',
    persian_meaning: 'فروش شخصی',
    example:
      'For complex B2B software solutions, personal selling is more effective than mass advertising.',
    category: 'Promotion, Sales, CRM',
    related_terms:
      'Sales Force, Salesperson, Relationship Building, B2B, Direct Interaction, Negotiation, Sales Process',
    notes:
      'یک شکل ارتباطی شخصی و مستقیم که امکان تطبیق پیام با نیازهای خاص هر مشتری، مذاکره و پاسخ به سؤاالت فوری را فراهم میکند. برای محصوالت گرانقیمت یا پیچیده بسیار مؤثر است.',
  },
  {
    word: 'Sales Promotion',
    english_definition:
      'Short-term incentives to encourage the purchase or sale of a product or service.',
    persian_meaning: 'ترویج فروش',
    example:
      'The “buy one, get one free” offer is a popular sales promotion tactic.',
    category: 'Promotion, Sales',
    related_terms:
      'Discount, Coupon, Rebate, Contest, Sample, Point-of-Purchase Display, Short-Term Boost',
    notes:
      'فعالیتهایی با اثر کوتاهمدت که برای تحریک خرید فوری یا آزمایش محصول جدید طراحی شدهاند. میتواند هم برای مصرفکننده نهایی و هم برای واسطههای فروش (مانند خردهفروشان) استفاده شود.',
  },
  {
    word: 'Public Relations (PR)',
    abbreviation: 'PR',
    english_definition:
      'The management of communication between an organization and its publics to build and maintain a positive image.',
    persian_meaning: 'روابط عمومی',
    example:
      'Effective public relations helped the company manage the crisis and rebuild trust.',
    category: 'Promotion, PR, Communication',
    related_terms:
      'Media Relations, Press Release, Corporate Image, Crisis Management, Publicity, Community Affairs, Earned Media',
    notes:
      'برخالف تبلیغات پولی، PR اغلب بر کسب توجه رسانهای (تبلیغات رایگان) و شکلدادن به افکار عمومی از طریق پیامهای غیرمستقیم متمرکز است. هدف بلندمدت ایجاد تصویری مثبت و اعتبار است.',
  },
  {
    word: 'Digital Marketing',
    english_definition:
      'The use of digital channels, such as search engines, social media, email, and websites, to promote products or services.',
    persian_meaning: 'بازاریابی دیجیتال',
    example:
      'Our strategy relies heavily on content marketing and targeted social media ads.',
    category: 'Digital Marketing, Promotion, Technology',
    related_terms:
      'Social Media Marketing, SEO, Email Marketing, Content Marketing, PPC, Online Advertising, Analytics, Mobile Marketing',
    notes:
      'به دلیل قابلیت هدفگیری دقیق، اندازهگیری دقیق عملکرد و تعامل دوطرفه با مشتری، به بخشی غالب در آمیخته ترفیع تبدیل شده است. دائماً در حال تکامل با ظهور پلتفرمهای جدید است.',
  },
  {
    word: 'Market Research',
    english_definition:
      'The systematic process of gathering, recording, and analyzing data about problems relating to the marketing of goods and services.',
    persian_meaning: 'تحقیق بازار',
    example:
      'Before launching the product, the team conducted extensive market research to validate the concept.',
    category: 'Research, Marketing, Strategy',
    related_terms:
      'Primary Research, Secondary Research, Data Analysis, Survey, Focus Group, Customer Insights, Market Size',
    notes:
      'چراغ راه تصمیمگیریهای بازاریابی است. هدف آن کاهش عدم قطعیت با ارائه اطلاعات معتبر درباره بازار، مشتریان و رقبا است.',
  },
  {
    word: 'Primary Research',
    english_definition:
      'The collection of original data directly from potential or existing customers for a specific research purpose.',
    persian_meaning: 'تحقیق اولیه/دستاول',
    example:
      'We commissioned a survey to understand primary research—customer attitudes toward our new packaging.',
    category: 'Research',
    related_terms:
      'Survey, Interview, Focus Group, Observation, Experiment, Questionnaire, Custom Data, Secondary Research',
    notes:
      'دادههای جدید و اختصاصی که برای پاسخ به یک سؤال خاص جمعآوری میشوند. گرانتر و زمانبرتر از تحقیق ثانویه است، اما مستقیمتر به نیاز پژوهشگر مرتبط است.',
  },
  {
    word: 'Secondary Research',
    english_definition:
      'The summary, collation, and/or synthesis of existing research and data that has already been collected for other purposes.',
    persian_meaning: 'تحقیق ثانویه/دادههای موجود',
    example:
      'The consultant\'s report was based on secondary research, including industry reports and government statistics.',
    category: 'Research',
    related_terms:
      'Desk Research, Published Data, Industry Reports, Government Publications, Academic Journals, Internal Records, Primary Research',
    notes:
      'استفاده از دادههای از پیش موجود. معمولاً اولین گام در تحقیق است؛ سریعتر و کم‌هزینهتر است، اما ممکن است کاملاً متناسب با مسئله خاص شرکت نباشد.',
  },
  {
    word: 'Customer Value',
    english_definition:
      'The perceived benefit a customer receives from a product or service relative to its cost and the cost of competing offerings.',
    persian_meaning: 'ارزش مشتری',
    example:
      'The smartphone offers high customer value by providing innovative features at a competitive price.',
    category: 'Marketing, Strategy, Consumer Behavior',
    related_terms:
      'Perceived Value, Benefits, Cost, Value Proposition, Customer Satisfaction, Competitive Advantage, Quality-to-Price Ratio',
    notes:
      'مفهومی ذهنی و مقایسهای است که در ذهن مشتری شکل میگیرد: ارزش = منافع درکشده - هزینههای درکشده. هدف نهایی بازاریابی، خلق و ارائه ارزش برتر است.',
  },
  {
    word: 'Brand Image',
    english_definition:
      'The set of beliefs, ideas, and impressions that a consumer holds regarding a brand based on their experiences and perceptions.',
    persian_meaning: 'تصویر برند',
    example:
      'Despite the scandal, the company is working hard to repair its brand image damaged.',
    category: 'Branding, Consumer Behavior',
    related_terms:
      'Brand Perception, Brand Identity, Brand Associations, Reputation, Corporate Image, Positioning, Brand Personality',
    notes:
      'این چیزی است که مشتریان در مورد یک برند فکر میکنند (درک آنها)، نه لزوماً آن چیزی که شرکت میخواهد آن را منتقل کند (هویت برند). بر تصمیمات خرید و وفاداری تأثیر میگذارد.',
  },
  {
    word: 'Competitive Advantage',
    english_definition:
      'A unique advantage a company has over its rivals that allows it to generate greater sales, margins, or customer loyalty.',
    persian_meaning: 'مزیت رقابتی',
    example:
      'Its competitive advantage lies in patented technology and a highly efficient distribution network.',
    category: 'Strategy, Marketing',
    related_terms:
      'Unique Selling Proposition (USP), Differentiation, Cost Leadership, Core Competency, Sustainable Advantage, Value Proposition',
    notes:
      'دلیلی که مشتریان یک شرکت را به جای رقبای آن انتخاب میکنند. میتواند مبتنی بر هزینه (قیمت پایینتر)، تمایز (ویژگیهای برتر)، یا تمرکز (خدمت به بخش خاصی از بازار) باشد.',
  },
  {
    word: 'Customer Satisfaction',
    english_definition:
      'A measure of how a company\'s products or services meet or surpass customer expectations.',
    persian_meaning: 'رضایت مشتری',
    example:
      'Customer satisfaction scores often correlate with increased customer retention and positive word-of-mouth.',
    category: 'CRM, Consumer Behavior, Quality',
    related_terms:
      'Expectation, Performance, Feedback, Survey (e.g., NPS (CSAT)), Customer Delight, Complaints, Customer Retention',
    notes:
      'اگر عملکرد محصول از انتظارات مشتری بالاتر باشد، رضایت ایجاد میشود. رضایت پایه و اساس وفاداری و تبلیغات دهانبهدهان مثبت است.',
  },
  {
    word: 'Customer Retention',
    english_definition:
      'The activities and actions companies take to reduce customer defections and keep existing customers engaged and loyal.',
    persian_meaning: 'حفظ مشتری',
    example:
      'The company\'s loyalty program is a key tool for improving customer retention rates.',
    category: 'CRM, Relationship Marketing, Sales',
    related_terms:
      'Customer Loyalty, Churn Rate, Lifecycle Value, Retention Strategies, After-Sales Service, Engagement, Repeat Business',
    notes:
      'حفظ مشتریان موجود معمولاً کم‌هزینهتر از جذب مشتریان جدید است. مشتریان وفادار سودآورتر بوده و به عنوان مبلغان برند عمل میکنند.',
  },
  {
    word: 'Buying Decision',
    english_definition:
      'The process by which a consumer identifies a need, gathers information, evaluates alternatives, and makes a purchase choice.',
    persian_meaning: 'تصمیم خرید',
    example:
      'The influencer\'s review played a significant role in the consumer\'s final buying decision.',
    category: 'Consumer Behavior, Sales',
    related_terms:
      'Decision-Making Process, Need Recognition, Information, Search, Evaluation of Alternatives, Post-Purchase Behavior, Impulse Buy, Rational Decision',
    notes:
      'این فرآیند میتواند پیچیده (برای خریدهای گرانقیمت) یا سریع و عادتی (برای خریدهای روزمره) باشد. بازاریابان سعی میکنند بر مراحل مختلف این فرآیند تأثیر بگذارند.',
  },
  {
    word: 'Motivation',
    english_definition:
      'The driving force within individuals that impels them to take action to satisfy a need or want.',
    persian_meaning: 'انگیزه',
    example:
      'The advertisement appealed to the consumer\'s status and achievement for social motivation.',
    category: 'Consumer Behavior, Psychology',
    related_terms:
      'Needs, Wants, Drives, Maslow\'s Hierarchy, Incentives, Internal/External Motives, Goal-Directed Behavior',
    notes:
      'در بازاریابی، درک انگیزههای مشتری کلید ایجاد پیامها و محصوالت مؤثر است. انگیزهها میتوانند فیزیولوژیکی (گرسنگی)، روانی (تعلق) یا اجتماعی (احترام) باشند.',
  },
  {
    word: 'Service',
    english_definition:
      'An intangible activity, benefit, or satisfaction offered for sale that does not result in the ownership of anything.',
    persian_meaning: 'خدمت',
    example:
      'Excellent customer service is a critical differentiator in the banking industry.',
    category: 'Marketing, Services, Operations',
    related_terms:
      'Intangibility, Inseparability, Variability, Perishability, Service Quality, Customer Experience, After-Sales Service',
    notes:
      'خدمات چهار ویژگی کلیدی دارند: ناملموس بودن، تفکیکناپذیری تولید و مصرف، تنوع پذیری و فناپذیری. بازاریابی خدمات بر ایجاد اعتماد و مدیریت کیفیت تجربه متمرکز است.',
  },
  {
    word: 'Quality',
    english_definition:
      'The characteristics of a product or service that bear on its ability to satisfy stated or implied customer needs.',
    persian_meaning: 'کیفیت',
    example:
      'The brand is synonymous with high quality and durability in the minds of consumers.',
    category: 'Operations, Product Management, Strategy',
    related_terms:
      'Performance, Features, Reliability, Conformance, Durability, Serviceability, Perceived Quality, TQM (Total Quality Management)',
    notes:
      'در بازاریابی، کیفیت ادراک شده (آنچه مشتری میاندیشد) حتی از کیفیت واقعی مهمتر است. کیفیت بالا پایهای برای قیمتگذاری ممتاز و وفاداری برند ایجاد میکند.',
  },
  {
    word: 'Idea Generation',
    english_definition:
      'The systematic search for new product ideas from various sources such as customers, competitors, employees, and R&D.',
    persian_meaning: 'ایدهپردازی',
    example:
      'The brainstorming sessions with the creative team involved idea generation for the new campaign.',
    category: 'Innovation, Product Management, NPD',
    related_terms:
      'Brainstorming, Creativity, Customer Suggestions, R&D, Competitive Analysis, Crowdsourcing, Problem Detection',
    notes:
      'اولین مرحله در فرآیند توسعه محصول جدید. هدف تولید حجم زیادی از ایدههای بالقوه است که در مراحل بعدی غربال و ارزیابی میشوند.',
  },
  {
    word: 'Commercialization',
    english_definition:
      'The final stage of new product development, involving the full-scale launch and marketing of the product to the target market.',
    persian_meaning: 'تجاریسازی',
    example:
      'After successful test marketing, the company proceeded with the commercialization of the product nationwide.',
    category: 'Product Management, NPD, Marketing',
    related_terms:
      'Launch, Market Introduction, Full-Scale Production, Marketing Plan, Rollout, Test Marketing, Go-to-Market Strategy',
    notes:
      'نقطهای که محصول به بازار عرضه میشود و هزینههای بازاریابی و تولید به حداکثر میرسد. این مرحله نیازمند برنامهریزی دقیق برای تدارکات، توزیع و ارتباطات است.',
  },
  {
    word: 'Cost',
    english_definition:
      'The total amount of money, resources, and effort required to produce, market, and deliver a product or service.',
    persian_meaning: 'هزینه',
    example:
      'Reducing production cost allows the company to either increase its profit margin or lower the price for consumers.',
    category: 'Finance, Pricing, Operations',
    related_terms:
      'Fixed Cost, Variable Cost, Total Cost, Cost of Goods Sold (COGS), Overhead, Cost Structure, Cost-Plus Pricing',
    notes:
      'در قیمتگذاری، هزینه پایینترین حد مجاز قیمت را تعیین میکند (زیر این حد، شرکت متحمل ضرر میشود). درک ساختار هزینه برای استراتژیهای قیمتگذاری و سودآوری حیاتی است.',
  },
  {
    word: 'Value',
    english_definition:
      'The customer\'s perception of the utility, worth, and benefits of a product or service in relation to its cost.',
    persian_meaning: 'ارزش',
    example:
      'The subscription box delivers great value by providing curated products at a lower total price than buying individually.',
    category: 'Marketing, Consumer Behavior, Strategy',
    related_terms:
      'Customer Value, Perceived Value, Value Proposition, Benefits, Worth, Utility, Value-Based Pricing',
    notes:
      'مفهومی ذهنی و مقایسهای است. بازاریابان با افزایش منافع درکشده (کیفیت، خدمات، تصویر برند) یا کاهش هزینههای درکشده (قیمت، زمان، ریسک) سعی در افزایش ارزش دارند.',
  },
  {
    word: 'Introduction',
    english_definition:
      'The first stage of the Product Life Cycle, characterized by low sales, high costs per customer, and minimal or negative profits.',
    persian_meaning: 'مرحله معرفی',
    example:
      'During the introduction stage, marketing efforts focus on creating awareness and educating early adopters.',
    category: 'Product Management, PLC',
    related_terms:
      'PLC, Launch, Early Adopters, High Promotion, Low Sales, Innovation, Market Development',
    notes:
      'مرحله‌ای پرخطر که سرمایهگذاری سنگینی را میطلبد. هدف اصلی ایجاد آگاهی و آزمایش بازار است، نه کسب سود فوری.',
  },
  {
    word: 'Growth',
    english_definition:
      'The second stage of the PLC, where sales rise rapidly, profits peak, and competitors begin to enter the market.',
    persian_meaning: 'مرحله رشد',
    example:
      'In the growth stage, the company focused on building brand preference and expanding distribution.',
    category: 'Product Management, PLC',
    related_terms:
      'PLC, Rapid Sales Increase, Peak Profits, Market Acceptance, Competitor Entry, Market Share, Brand Preference',
    notes:
      'مرحله‌ای حیاتی برای تثبیت موقعیت برند و کسب سهم بازار. استراتژیها از آگاهی‌بخشی به ترجیحسازی و دفاع در برابر رقبا تغییر میکند.',
  },
  {
    word: 'Maturity',
    english_definition:
      'The third stage of the PLC, where sales growth slows, the market becomes saturated, and competition is most intense, leading to pressure on prices and profits.',
    persian_meaning: 'مرحله بلوغ',
    example:
      'During the maturity stage, marketers use strategies like product modifications or new features to rejuvenate sales.',
    category: 'Product Management, PLC',
    related_terms:
      'PLC, Sales Plateau, Market Saturation, Intense Competition, Price Wars, Profit Margin Pressure, Differentiation, Modification',
    notes:
      'طوالنیترین مرحله برای بسیاری از محصوالت. هدف اصلی حفظ سهم بازار و به حداکثر رساندن سودآوری با کاهش هزینهها و یافتن کاربردهای جدید است.',
  },
  {
    word: 'Decline',
    english_definition:
      'The final stage of the PLC, marked by a strong drop in sales and profits due to changing consumer tastes, technological advances, or increased competition.',
    persian_meaning: 'مرحله افول',
    example:
      'The company decided to phase out the product during its decline stage and reallocate resources to newer lines.',
    category: 'Product Management, PLC',
    related_terms:
      'PLC, Sales Decline, Obsolescence, Technological Change, Phase Out, Harvest, Divest, Withdrawal',
    notes:
      'شرکت میتواند یکی از سه راهبرد را انتخاب کند: حفظ محصول با کاهش هزینهها، "درود" کردن (برداشت سود نهایی) یا حذف کامل محصول از سبد.',
  },
  {
    word: 'Retailer',
    english_definition:
      'A business that sells goods or services directly to the final consumer for personal, non-business use.',
    persian_meaning: 'خردهفروش',
    example:
      'Retailers negotiate better terms with the manufacturer due to their large order volume.',
    category: 'Distribution, Retail, Channel',
    related_terms:
      'Wholesaler, Brick-and-Mortar, E-commerce, Store, End, Consumer, Point of Sale (POS), Merchandising',
    notes:
      'آخرین حلقه در کانال توزیع که مستقیماً با مشتری نهایی در ارتباط است. خردهفروشان نقش مهمی در تجربه خرید، ارائه خدمات و جمع‌آوری اطلاعات بازار دارند.',
  },
  {
    word: 'Wholesaler',
    english_definition:
      'A business that buys large quantities of goods from manufacturers and resells them in smaller batches to retailers or other businesses.',
    persian_meaning: 'عمدهفروش',
    example:
      'A wholesaler acts as an intermediary, providing warehousing and breaking bulk for small retailers.',
    category: 'Distribution, Channel, Supply Chain',
    related_terms:
      'Retailer, Distributor, Intermediary, Bulk-Breaking, Warehousing, B2B, Supply, Merchant Wholesaler',
    notes:
      'واسطهایی که وظایفی مانند خرید در حجم بالا، انبارداری، تقسیم محمولههای بزرگ به مقادیر کوچکتر و اعطای اعتبار به خردهفروشان را انجام میدهد و به کارایی کانال کمک میکند.',
  },
  {
    word: 'Logistics',
    english_definition:
      'The part of supply chain management that plans, implements, and controls the efficient, effective flow and storage of goods, services, and information from origin to point of consumption.',
    persian_meaning: 'لجستیک',
    example:
      'Efficient logistics management reduced delivery times by 30% and lowered storage costs.',
    category: 'Operations, Supply Chain, Distribution',
    related_terms:
      'Transportation, Warehousing, Inventory Management, Order, Fulfillment, Supply Chain, Distribution, Reverse Logistics',
    notes:
      'مدیریت عملیاتی جریان فیزیکی کالاها. هدف آن تحویل محصول مناسب، در مکان مناسب، در زمان مناسب و با کمترین هزینه ممکن است.',
  },
  {
    word: 'Procurement',
    english_definition:
      'The business process of finding, acquiring, and buying goods, services, or works from an external source, often via tendering or competitive bidding.',
    persian_meaning: 'تأمین/خرید',
    example:
      'The procurement department is responsible for sourcing raw materials from reliable suppliers at the best possible price.',
    category: 'Operations, Supply Chain',
    related_terms:
      'Purchasing, Sourcing, Supplier Management, Negotiation, Supply Chain, Raw Materials, Tendering, Strategic Sourcing',
    notes:
      'وظیفه‌ای استراتژیک که فراتر از خرید ساده است و شامل مدیریت روابط با تأمین‌کنندگان، تحلیل هزینه‌های چرخه عمر و اطمینان از کیفیت ورودیها میشود.',
  },
  {
    word: 'IMC (Integrated Marketing Communications)',
    abbreviation: 'IMC',
    english_definition:
      'A strategic approach that coordinates and integrates all marketing communication tools and messages to deliver a consistent, clear, and compelling message about the brand.',
    persian_meaning: 'ارتباطات یکپارچه بازاریابی',
    example:
      'The IMC plan ensured that the messaging was consistent across TV ads, social media, and point-of-sale displays.',
    category: 'Promotion, Marketing, Communication',
    related_terms:
      'Promotion Mix, Consistency, Synergy, Advertising, PR, Sales, Promotion, Personal Selling, Brand Voice',
    notes:
      'فلسفه‌ای که بر هماهنگی تمامی کانالهای ارتباطی (سنتی و دیجیتال) تأکید دارد تا مشتری یک تصویر واحد و منسجم از برند دریافت کند و اثربخشی کلی افزایش یابد.',
  },
  {
    word: 'Media',
    english_definition:
      'The various channels or vehicles (e.g., television, internet, print, radio) used to deliver advertising messages to a target audience.',
    persian_meaning: 'رسانه',
    example:
      'Choosing the right media mix is crucial for maximizing the reach and impact of an advertising campaign.',
    category: 'Promotion, Advertising, Media',
    related_terms:
      'Advertising, Channel, Mass Media, Digital Media, Social Media, Media Planning, Buy, Reach & Frequency',
    notes:
      'به دو دسته کلی تقسیم میشوند: رسانههای پولی (مانند تبلیغات تلویزیونی)، رسانههای کسبشده (مانند روابط عمومی) و رسانههای متعلق (مانند وبسایت شرکت). انتخاب آن به مخاطب هدف و بودجه بستگی دارد.',
  },
  {
    word: 'Brand Awareness',
    english_definition:
      'The extent to which consumers are familiar with the distinctive qualities or image of a particular brand of goods or services.',
    persian_meaning: 'آگاهی از برند',
    example:
      'The viral campaign significantly increased brand awareness among young adults.',
    category: 'Branding, Promotion, Marketing',
    related_terms:
      'Brand Recognition, Brand Recall, Top-of-Mind Awareness, Marketing Communications, Advertising, Exposure, Memorability',
    notes:
      'اولین قدم در سفر مشتری و پیشنیاز برای ترجیح برند و خرید است. میتواند به صورت شناسایی برند (دیدن آن) یا یادآوری برند (به خاطر آوردن آن) اندازهگیری شود.',
  },
  {
    word: 'Sales Force',
    english_definition:
      'The team of individuals within a company who are responsible for selling products or services to customers.',
    persian_meaning: 'نیروی فروش',
    example:
      'The sales force received new training on the product\'s advanced features to better address customer inquiries.',
    category: 'Sales, Promotion, Human Resources',
    related_terms:
      'Salesperson, Personal Selling, Sales Management, Compensation, Training, Territory, B2B Sales, Direct Sales',
    notes:
      'نمایندگان مستقیم شرکت که نقش کلیدی در ایجاد رابطه، ارائه اطلاعات تخصصی، مذاکره و بستن قرارداد دارند. مدیریت مؤثر نیروی فروش (جذب، آموزش، انگیزش) بسیار مهم است.',
  },
  {
    word: 'Relationship Marketing',
    english_definition:
      'A marketing strategy that focuses on building and maintaining long-term, profitable relationships with customers by providing superior value and satisfaction.',
    persian_meaning: 'بازاریابی رابطهای',
    example:
      'The company\'s relationship marketing efforts include personalized emails and exclusive offers for loyal customers.',
    category: 'CRM, Marketing, Strategy',
    related_terms:
      'Customer Retention, Loyalty Programs, Customer Lifetime Value, Personalization, CRM Systems, Trust, Engagement',
    notes:
      'به جای تاکید بر معاملات فردی کوتاهمدت، بر ایجاد وفاداری و تعامل بلندمدت تمرکز دارد. فرض آن این است که حفظ مشتری موجود کمهزینهتر از جذب مشتری جدید است.',
  },
  {
    word: 'Discount',
    english_definition:
      'A reduction in the usual price of a product or service, offered as an incentive to purchase.',
    persian_meaning: 'تخفیف',
    example:
      'A 20% discount was offered during the seasonal sale to clear out old inventory.',
    category: 'Pricing, Sales Promotion',
    related_terms:
      'Price Reduction, Sale, Coupon, Rebate, Markdown, Incentive, Promotional Pricing, Clearance',
    notes:
      'یک ابزار رایج در ترویج فروش و قیمتگذاری که میتواند برای جذب مشتریان جدید، افزایش حجم خرید، رقابت با رقبا یا کاهش موجودی انبار استفاده شود. استفاده مکرر ممکن است به تصویر برند آسیب بزند.',
  },
  {
    word: 'Promotion Mix',
    english_definition:
      'The specific combination of promotional methods that a company uses (e.g., advertising, personal selling, sales promotion, public relations) to pursue its marketing objectives.',
    persian_meaning: 'آمیخته ترفیع',
    example:
      'The manager revised the promotion mix by allocating more budget to digital advertising and less to traditional print media.',
    category: 'Promotion, Marketing, Strategy',
    related_terms:
      'Advertising, Personal Selling, Sales Promotion, Public Relations, Direct Marketing, IMC, Communication Tools, Budget Allocation',
    notes:
      'زیرمجموعهای از آمیخته بازاریابی (یکی از P4ها). انتخاب و ترکیب مناسب ابزارهای ترفیعی بستگی به بودجه، نوع محصول، مرحله چرخه عمر محصول و ویژگیهای بازار هدف دارد.',
  },
]

export default part1
