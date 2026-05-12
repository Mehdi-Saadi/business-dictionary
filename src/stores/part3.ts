import type { Phrase } from '@/types/phrase'

const part3: Phrase[] = [
  {
    word: 'Brand Equity',
    english_definition:
      'The commercial value derived from consumer perception of the brand name of a particular product or service, rather than from the product or service itself.',
    persian_meaning: 'ارزش ویژه برند',
    example:
      'Coca-Cola\'s strong brand equity allows it to command a premium price over generic cola brands.',
    category: 'Brand Management, Marketing Strategy',
    related_terms: 'Brand Value, Brand Loyalty, Brand Awareness',
    notes: 'ارزش ویژه برند به میزان ارزشی اشاره دارد که یک برند فراتر از ارزش فیزیکی محصول یا خدمت خود، در ذهن مصرف‌کنندگان ایجاد می‌کند. این ارزش از طریق تجربیات مثبت، آگاهی از برند، وفاداری به برند و تصورات مثبت شکل می‌گیرد.',
  },
  {
    word: 'Brand Identity',
    english_definition:
      'The tangible elements of a brand that the customer experiences, such as logos, colors, fonts, and taglines. It\'s how the company wants to be perceived.',
    persian_meaning: 'هویت برند',
    example:
      'Apple\'s minimalist design, sleek logos, and consistent use of white and silver are key elements of its brand identity.',
    category: 'Branding, Marketing Strategy',
    related_terms: 'Brand Image, Brand Personality, Visual Identity',
    notes: 'هویت برند شامل تمامی عناصر بصری و کلامی است که یک کسب‌وکار برای معرفی و تمایز خود استفاده می‌کند. این عناصر به مشتریان کمک می‌کنند تا برند را بشناسند و با آن ارتباط برقرار کنند.',
  },
  {
    word: 'Brand Positioning',
    english_definition:
      'The process of creating a distinct image and identity for a brand in the minds of the target audience, relative to competitors.',
    persian_meaning: 'جایگاه‌یابی برند',
    example:
      'Volvo positions itself as the safest car brand, appealing to families who prioritize safety.',
    category: 'Marketing Strategy, Brand Management',
    related_terms: 'Target Audience, Unique Selling Proposition (USP), Competitive Analysis',
    notes: 'جایگاه‌یابی برند به معنای ایجاد یک فضای منحصر به فرد و متمایز برای برند در ذهن مخاطبان هدف در مقایسه با رقبا است. این فرآیند بر اساس درک مشتری از برند شکل می‌گیرد.',
  },
  {
    word: 'Brand Awareness',
    english_definition:
      'The extent to which consumers are familiar with the distinctive qualities or image of a particular brand.',
    persian_meaning: 'آگاهی از برند',
    example:
      'A high level of brand awareness means that most people in the target market recognize the brand name and its products.',
    category: 'Marketing, Brand Management',
    related_terms: 'Brand Recognition, Brand Recall, Top-of-Mind Awareness',
    notes: 'آگاهی از برند به میزان آشنایی مخاطبان با یک برند اشاره دارد. این سطح از آشنایی می‌تواند از شناخت اولیه (Recognition) تا یادآوری فوری (Recall) متغیر باشد.',
  },
  {
    word: 'Brand Loyalty',
    english_definition:
      'A consumer\'s commitment to repurchase or continue to use the brand\'s products or services, often demonstrated by repeat purchases.',
    persian_meaning: 'وفاداری به برند',
    example:
      'Customers who consistently buy from the same coffee shop, even when other options are available, demonstrate brand loyalty.',
    category: 'Customer Relations, Marketing Strategy',
    related_terms: 'Customer Retention, Repeat Purchase, Brand Equity',
    notes: 'وفاداری به برند نشان‌دهنده تعهد مشتریان به خرید مکرر یا استفاده مداوم از محصولات یا خدمات یک برند خاص است، حتی زمانی که گزینه‌های مشابه دیگری در دسترس باشند.',
  },
  {
    word: 'Brand Personality',
    english_definition:
      'The set of human characteristics associated with a brand.',
    persian_meaning: 'شخصیت برند',
    example:
      'Red Bull\'s brand personality is adventurous, energetic, and exciting, aligning with extreme sports and high-octane activities.',
    category: 'Branding, Consumer Behavior',
    related_terms: 'Brand Image, Brand Identity, Consumer Perception',
    notes: 'شخصیت برند به مجموعه‌ای از صفات انسانی اطلاق می‌شود که به یک برند نسبت داده می‌شود. این صفات به برند کمک می‌کنند تا با مخاطبان خود ارتباط عاطفی برقرار کند.',
  },
  {
    word: 'Brand Image',
    english_definition:
      'The current perception of a brand in the minds of consumers.',
    persian_meaning: 'تصویر برند',
    example:
      'After a major product recall, Nike\'s brand image suffered, leading to a decrease in consumer trust.',
    category: 'Marketing, Consumer Behavior',
    related_terms: 'Brand Perception, Brand Identity, Brand Reputation',
    notes: 'تصویر برند، درک کنونی مصرف‌کنندگان از یک برند است. این تصویر از طریق تجربیات، تبلیغات، ارتباطات و شهرت کلی برند شکل می‌گیرد.',
  },
  {
    word: 'Rebranding',
    english_definition:
      'The process of changing the corporate image of an organization. It can involve changing the company name, logo, design, brand message, etc.',
    persian_meaning: 'بازسازی برند (برندسازی مجدد)',
    example:
      'Old Spice successfully rebranded itself from an outdated brand to a hip and humorous one, attracting a younger demographic.',
    category: 'Brand Management, Marketing Strategy',
    related_terms: 'Brand Refresh, Brand Revitalization, Corporate Identity',
    notes: 'بازسازی برند به فرآیند تغییر تصویر یا هویت یک سازمان گفته می‌شود. این تغییر می‌تواند شامل نام، لوگو، طراحی، پیام برند و سایر عناصر باشد تا برند با مخاطبان جدیدی ارتباط برقرار کند یا موقعیت فعلی خود را بهبود بخشد.',
  },
  {
    word: 'Brand Architecture',
    english_definition:
      'The way in which a company organizes and names its brands, sub-brands, products, and services.',
    persian_meaning: 'معماری برند',
    example:
      'Procter & Gamble uses a \'house of brands\' architecture, where each product has its own distinct brand name and identity (e.g., Pampers, Tide).',
    category: 'Brand Management, Marketing Strategy',
    related_terms: 'Brand Portfolio, Master Brand, Sub-brand',
    notes: 'معماری برند به ساختار و نحوه سازماندهی برندها، زیربرندها، محصولات و خدمات یک شرکت اشاره دارد. این ساختار به مدیریت برند، ارتباط با مشتری و اثربخشی بازاریابی کمک می‌کند.',
  },
  {
    word: 'Brand Promise',
    english_definition:
      'The value or experience a customer can expect to receive from a company\'s product or service. It\'s what the brand implicitly or explicitly guarantees.',
    persian_meaning: 'وعده برند',
    example:
      'FedEx\'s brand promise is reliable and timely delivery, which is consistently communicated in their marketing.',
    category: 'Marketing, Brand Management',
    related_terms: 'Customer Expectation, Value Proposition, Brand Trust',
    notes: 'وعده برند، ارزشی است که مشتری انتظار دارد از محصول یا خدمت یک شرکت دریافت کند. این وعده، قول ضمنی یا صریحی است که برند به مشتریان خود می‌دهد و بر اساس آن، مشتریان تصمیم به خرید می‌گیرند.',
  },
  {
    word: 'Call to Action (CTA)',
    abbreviation: 'CTA',
    english_definition:
      'An instruction to the audience designed to provoke an immediate response, such as "Buy Now," "Learn More," or "Sign Up."',
    persian_meaning: 'دعوت به اقدام',
    example:
      'The email ended with a clear CTA: \'Click here to claim your discount!\'',
    category: 'Digital Marketing, Advertising',
    related_terms: 'Conversion, Lead Generation, Marketing Campaign',
    notes: 'دعوت به اقدام، دستوری است که مخاطب را به انجام یک عمل خاص تشویق می‌کند. این عمل می‌تواند شامل خرید، ثبت‌نام، دانلود، یا هر نوع تعامل دیگری باشد که مد نظر بازاریاب است.',
  },
  {
    word: 'Content Marketing',
    abbreviation: '-',
    english_definition:
      'A strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience—and, ultimately, to drive profitable customer action.',
    persian_meaning: 'بازاریابی محتوا',
    example:
      'A company selling fitness equipment might use content marketing by publishing blog posts about workout routines, healthy recipes, and fitness tips.',
    category: 'Digital Marketing, Marketing Strategy',
    related_terms: 'Inbound Marketing, SEO, Content Strategy',
    notes: 'بازاریابی محتوا، رویکردی استراتژیک در بازاریابی که بر تولید و توزیع محتوای ارزشمند، مرتبط و سازگار برای جذب و حفظ مخاطبان هدف تمرکز دارد. هدف نهایی آن هدایت مشتری به سمت اقدام سودآور است.',
  },
  {
    word: 'Search Engine Optimization (SEO)',
    abbreviation: 'SEO',
    english_definition:
      'The process of improving the visibility and ranking of a website or web page on search engines like Google, Bing, etc.',
    persian_meaning: 'بهینه‌سازی موتور جستجو',
    example:
      'By optimizing their website with relevant keywords and high-quality backlinks, they significantly improved their SEO and search engine rankings.',
    category: 'Digital Marketing, Web Development',
    related_terms: 'SEM, Keyword Research, On-page Optimization, Off-page Optimization',
    notes: 'بهینه‌سازی موتور جستجو، فرآیندی است که با هدف افزایش رتبه و دیده شدن یک وب‌سایت یا صفحه وب در نتایج موتورهای جستجو انجام می‌شود. این کار شامل تکنیک‌های مختلفی برای بهبود محتوا، ساختار سایت و لینک‌سازی است.',
  },
  {
    word: 'Pay-Per-Click (PPC)',
    abbreviation: 'PPC',
    english_definition:
      'An internet advertising model used to drive traffic to websites, in which advertisers pay a fee each time one of their ads is clicked.',
    persian_meaning: 'پرداخت به ازای کلیک',
    example:
      'Google Ads is a popular platform for running PPC campaigns.',
    category: 'Digital Marketing, Advertising',
    related_terms: 'CPC, Paid Search, Online Advertising',
    notes: 'پرداخت به ازای کلیک، مدل تبلیغاتی آنلاین است که در آن تبلیغ‌کنندگان به ازای هر بار کلیک بر روی تبلیغ خود، هزینه‌ای را پرداخت می‌کنند. این روش برای هدایت ترافیک به وب‌سایت‌ها مورد استفاده قرار می‌گیرد.',
  },
  {
    word: 'Conversion Rate Optimization (CRO)',
    abbreviation: 'CRO',
    english_definition:
      'The systematic process of increasing the percentage of website visitors who take a desired action, such as making a purchase, filling out a form, or signing up for a newsletter.',
    persian_meaning: 'بهینه‌سازی نرخ تبدیل',
    example:
      'Through A/B testing different landing page designs, they achieved a significant improvement in their conversion rate optimization.',
    category: 'Digital Marketing, Analytics',
    related_terms: 'Conversion Rate, A/B Testing, User Experience (UX)',
    notes: 'بهینه‌سازی نرخ تبدیل، فرآیندی سیستماتیک برای افزایش درصد بازدیدکنندگانی است که یک عمل مطلوب (مانند خرید، ثبت‌نام) را در وب‌سایت انجام می‌دهند. این بهینه‌سازی از طریق تحلیل و تست‌های مختلف صورت می‌گیرد.',
  },
  {
    word: 'Public Relations',
    abbreviation: 'PR',
    english_definition:
      'The practice of managing and disseminating information from an individual or an organization to the public in order to affect their public perception.',
    persian_meaning: 'روابط عمومی',
    example:
      'Issuing a press release about their new product launch was a key PR activity for the company.',
    category: 'Communications, Marketing',
    related_terms: 'Media Relations, Crisis Management, Reputation Management',
    notes:
      'روابط عمومی، مجموعه‌ای از اقدامات است که با هدف مدیریت و انتشار اطلاعات از یک فرد یا سازمان به عموم مردم انجام می‌شود تا بر درک عمومی از آن تأثیر بگذارد.',
  },
  {
    word: 'Influencer Marketing',
    english_definition:
      'A type of social media marketing that uses endorsements and product mentions from influencers—individuals who have a dedicated social following and are viewed as experts within their niche.',
    persian_meaning: 'بازاریابی تاثیرگذار',
    example:
      'Many fashion brands collaborate with Instagram influencers to showcase their new clothing lines.',
    category: 'Digital Marketing, Social Media Marketing',
    related_terms: 'Social Media, Endorsement, Micro-influencer',
    notes:
      'بازاریابی تاثیرگذار، نوعی بازاریابی در رسانه‌های اجتماعی است که از حمایت‌ها و معرفی محصولات توسط افراد تاثیرگذار (اینفلوئنسرها) استفاده می‌کند. این افراد دارای دنبال‌کنندگان زیاد و تخصص در حوزه خود هستند.',
  },
  {
    word: 'Affiliate Marketing',
    english_definition:
      'An advertising model where a company compensates its affiliate marketers for each customer brought in by the affiliate\'s own marketing efforts.',
    persian_meaning: 'بازاریابی وابسته',
    example:
      'Many bloggers earn income through affiliate marketing by recommending products and earning a commission on sales.',
    category: 'Digital Marketing, E-commerce',
    related_terms: 'Commission, Affiliate Network, Performance Marketing',
    notes:
      'بازاریابی وابسته، مدل تبلیغاتی است که در آن یک شرکت به بازاریابان وابسته خود برای هر مشتری که از طریق تلاش‌های بازاریابی آنها جذب می‌شود، پاداش می‌دهد.',
  },
  {
    word: 'A/B Testing',
    abbreviation: 'Split Testing',
    english_definition:
      'A method of comparing two versions of a webpage or app against each other to determine which one performs better.',
    persian_meaning: 'تست B/A (تست جداگانه)',
    example:
      'We ran an A/B test on two different headlines for our landing page to see which one generated more clicks.',
    category: 'Digital Marketing, Analytics, CRO',
    related_terms: 'Split Testing, Multivariate Testing, Conversion Rate',
    notes:
      'تست B/A روشی برای مقایسه دو نسخه از یک صفحه وب یا اپلیکیشن است تا مشخص شود کدام یک عملکرد بهتری دارد. این تست به بهینه‌سازی عناصر مختلف کمک می‌کند.',
  },
  {
    word: 'Customer Lifetime Value',
    abbreviation: 'CLV',
    english_definition:
      'A metric that predicts the net profit attributed to the entire future relationship with a customer.',
    persian_meaning: 'ارزش طول عمر مشتری',
    example:
      'By focusing on customer retention and upselling, they aimed to increase the average customer lifetime value.',
    category: 'Marketing, Analytics, CRM',
    related_terms: 'Customer Retention, Profitability, Customer Loyalty',
    notes:
      'ارزش طول عمر مشتری، معیاری است که سود خالص پیش‌بینی شده از کل رابطه آینده با یک مشتری را تخمین می‌زند. این معیار به کسب‌وکارها کمک می‌کند تا اهمیت حفظ مشتریان را درک کنند.',
  },
  {
    word: 'Market Segmentation',
    english_definition:
      'The process of dividing a broad consumer or business market, normally consisting of existing and potential customers, into sub-groups of consumers (known as segments) based on some type of shared characteristics.',
    persian_meaning: 'بخش‌بندی بازار',
    example:
      'A clothing company might segment its market by age, gender, income, and lifestyle.',
    category: 'Marketing Strategy, Market Research',
    related_terms: 'Target Market, Demographics, Psychographics',
    notes:
      'بخش‌بندی بازار، فرآیند تقسیم یک بازار وسیع مصرف‌کننده یا تجاری به زیرگروه‌هایی بر اساس ویژگی‌های مشترک است. این کار به شرکت‌ها کمک می‌کند تا نیازهای گروه‌های مختلف را بهتر درک کنند.',
  },
  {
    word: 'Target Audience',
    english_definition:
      'A particular group of people, identified as the intended recipients of an advertisement or message.',
    persian_meaning: 'مخاطب هدف',
    example:
      'The marketing campaign for the new video game was specifically designed to appeal to teenagers and young adults.',
    category: 'Marketing Strategy, Communications',
    related_terms: 'Market Segmentation, Persona, Demographics',
    notes:
      'مخاطب هدف، گروه خاصی از افراد است که به عنوان گیرندگان اصلی یک تبلیغ یا پیام در نظر گرفته می‌شوند. شناخت مخاطب هدف برای اثربخشی کمپین‌های بازاریابی حیاتی است.',
  },
  {
    word: 'Unique Selling Proposition',
    abbreviation: 'USP',
    english_definition:
      'A factor or quality that differentiates a product or service from its competitors, such as the lowest price available or the highest quality, fastest service, etc.',
    persian_meaning: 'مزیت فروش منحصر به فرد',
    example:
      'Domino\'s Pizza\'s original USP was \'You get fresh, hot pizza delivered to your door in 30 minutes or less, or it\'s free.\'',
    category: 'Marketing Strategy, Branding',
    related_terms: 'Differentiation, Value Proposition, Competitive Advantage',
    notes:
      'مزیت فروش منحصر به فرد، ویژگی یا کیفیتی است که یک محصول یا خدمت را از رقبا متمایز می‌کند و دلیلی قانع‌کننده برای خرید از آن برند ارائه می‌دهد.',
  },
  {
    word: 'Brand Recall',
    english_definition:
      'The ability of consumers to retrieve a brand from memory when prompted by a product category or a need.',
    persian_meaning: 'یادآوری برند',
    example:
      'When asked to name a brand of soda, many people will say Coca-Cola or Pepsi, demonstrating strong brand recall.',
    category: 'Consumer Behavior, Marketing Research',
    related_terms: 'Brand Awareness, Brand Recognition, Top-of-Mind Awareness',
    notes:
      'یادآوری برند، توانایی مصرف‌کنندگان در بازیابی یک نام تجاری از حافظه هنگامی که با یک دسته محصول یا نیاز خاص تحریک می‌شوند، اشاره دارد. این سطح بالاتر از آگاهی از برند است.',
  },
  {
    word: 'Brand Recognition',
    english_definition:
      'The ability of consumers to confirm having seen or heard of a brand before.',
    persian_meaning: 'شناخت برند',
    example:
      'If a consumer sees a logo and immediately knows which company it belongs to, that\'s brand recognition.',
    category: 'Consumer Behavior, Marketing Research',
    related_terms: 'Brand Awareness, Brand Recall, Brand Identity',
    notes:
      'شناخت برند، توانایی مصرف‌کنندگان در تأیید این است که قبلاً یک برند را دیده‌اند یا در مورد آن شنیده‌اند. این سطح پایه از آگاهی از برند است.',
  },
  {
    word: 'Customer Perception',
    english_definition:
      'The way in which customers interpret, understand, and form opinions about a brand, product, or service.',
    persian_meaning: 'درک مشتری',
    example:
      'The company\'s perception among customers was that their products were high-quality but overpriced.',
    category: 'Consumer Behavior, Marketing Research',
    related_terms: 'Brand Image, Consumer Psychology, Customer Experience',
    notes:
      'درک مشتری، نحوه تفسیر، فهم و شکل‌گیری نظرات مشتریان در مورد یک برند، محصول یا خدمت است. این درک تحت تاثیر عوامل مختلفی مانند ارتباطات، تجربیات و نظرات دیگران قرار می‌گیرد.',
  },
  {
    word: 'Market Positioning Statement',
    english_definition:
      'A concise description of a brand\'s unique place in the market and in the minds of its target customers. It typically includes the target audience, the product category, the key benefit, and the point of differentiation.',
    persian_meaning: 'بیانیه جایگاهیابی بازار',
    example:
      'For [Target Audience], [Brand Name] is the [Frame of Reference] that because [Reason to Believe]. (Example [Key Benefit/Point of Difference] structure)',
    category: 'Marketing Strategy, Branding',
    related_terms: 'Brand Positioning, Target Audience, Value Proposition',
    notes:
      'بیانیه جایگاهیابی بازار، توصیف مختصری از جایگاه منحصر به فرد یک برند در بازار و در ذهن مشتریان هدف است. این بیانیه اغلب شامل مخاطب هدف، دسته محصول، مزیت کلیدی و نقطه تمایز است.',
  },
  {
    word: 'Brand Refresh',
    english_definition:
      'A minor update or revitalization of a brand\'s identity or messaging, without a complete overhaul.',
    persian_meaning: 'تجدید برند',
    example:
      'The company decided to refresh its logo and website design to appear more modern and relevant.',
    category: 'Brand Management, Marketing Strategy',
    related_terms: 'Rebranding, Brand Revitalization, Brand Update',
    notes:
      'تجدید برند، به‌روزرسانی جزئی یا احیای هویت یا پیام یک برند است، بدون اینکه نیاز به یک تغییر و تحول کامل باشد. این کار برای حفظ ارتباط با مخاطبان و همگامی با تغییرات بازار انجام می‌شود.',
  },
  {
    word: 'Brand Engagement',
    english_definition:
      'The depth of the relationship between a brand and its customers. It refers to the level of interaction and emotional connection customers have with a brand.',
    persian_meaning: 'تعامل با برند',
    example:
      'High brand engagement can be seen in active participation in brand communities, social media discussions, and brand events.',
    category: 'Customer Relations, Marketing, Social Media Marketing',
    related_terms: 'Brand Loyalty, Customer Experience, Community Building',
    notes:
      'تعامل با برند به عمق رابطه بین یک برند و مشتریانش اشاره دارد. این شامل سطح تعامل و ارتباط عاطفی مشتریان با برند است.',
  },
  {
    word: 'Emotional Branding',
    english_definition:
      'A branding strategy that aims to create a strong emotional connection with consumers, focusing on how the brand makes them feel rather than just its functional benefits.',
    persian_meaning: 'برندسازی عاطفی',
    example:
      'Companies like Dove use emotional branding by focusing on self-esteem and real beauty in their campaigns.',
    category: 'Branding, Consumer Psychology, Marketing Strategy',
    related_terms: 'Brand Personality, Brand Storytelling, Emotional Connection',
    notes:
      'برندسازی عاطفی، استراتژی برندسازی است که هدف آن ایجاد ارتباط عاطفی قوی با مصرف‌کنندگان است. این استراتژی بر احساساتی که برند در افراد ایجاد می‌کند، تمرکز دارد.',
  },
  {
    word: 'Content Strategy',
    english_definition:
      'The planning, creation, delivery, and governance of useful, usable content. It’s about creating content that supports business goals and meets user needs.',
    persian_meaning: 'استراتژی محتوا',
    example:
      'Our content strategy focuses on creating educational articles and videos for beginners in our industry.',
    category: 'Content Marketing, Marketing Strategy, Digital Marketing',
    related_terms: 'Content Marketing, Content Creation, Editorial Calendar',
    notes:
      'استراتژی محتوا، برنامه‌ریزی، تولید، ارائه و مدیریت محتوای مفید و کاربردی است. هدف آن ایجاد محتوایی است که از اهداف تجاری پشتیبانی کند و نیازهای کاربران را برآورده سازد.',
  },
  {
    word: 'Guerrilla Marketing',
    english_definition:
      'An advertising strategy in which a company uses surprise and unconventional tactics to promote a product or service. It’s often low-cost, high-impact, and aimed at generating buzz.',
    persian_meaning: 'بازاریابی چریکی',
    example:
      'A street art campaign or a flash mob organized to promote a new movie are examples of guerrilla marketing.',
    category: 'Marketing Strategy, Advertising',
    related_terms: 'Unconventional Marketing, Viral Marketing, Buzz Marketing',
    notes:
      'بازاریابی چریکی، استراتژی تبلیغاتی است که در آن شرکت از تاکتیک‌های غافلگیرکننده و غیرمتعارف برای ترویج محصول یا خدمت خود استفاده می‌کند. این روش اغلب کم‌هزینه، پربازده و با هدف ایجاد سروصدا (Buzz) است.',
  },
  {
    word: 'Integrated Marketing Communications',
    abbreviation: 'IMC',
    english_definition:
      'A strategic approach that aims to unify all marketing communication channels of a company, ensuring consistency and synergy across all messages.',
    persian_meaning: 'ارتباطات بازاریابی یکپارچه',
    example:
      'By ensuring that their social media posts, TV ads, and website content all conveyed the same core message, they implemented IMC effectively.',
    category: 'Marketing Strategy, Communications',
    related_terms: 'Marketing Mix, Communications Strategy, Brand Consistency',
    notes:
      'ارتباطات بازاریابی یکپارچه، رویکردی استراتژیک است که با هدف یکپارچه‌سازی تمام کانال‌های ارتباطی بازاریابی یک شرکت انجام می‌شود و از هماهنگی و هم‌افزایی در تمام پیام‌ها اطمینان حاصل می‌کند.',
  },
  {
    word: 'Brand Storytelling',
    english_definition:
      'The art of using narrative to connect with an audience, conveying a brand\'s values, mission, and purpose in an engaging and memorable way.',
    persian_meaning: 'داستان‌سرایی برند',
    example:
      'Patagonia tells stories of environmental activism and adventure, building a deep connection with its customer base.',
    category: 'Branding, Marketing, Content Marketing',
    related_terms: 'Brand Narrative, Brand Purpose, Emotional Branding',
    notes:
      'داستان‌سرایی برند، هنر استفاده از روایت برای ارتباط با مخاطب و انتقال ارزش‌ها، مأموریت و هدف یک برند به شیوه‌ای جذاب و به‌یادماندنی است.',
  },
  {
    word: 'Customer Relationship Management',
    abbreviation: 'CRM',
    english_definition:
      'A technology for managing all your company’s relationships and interactions with customers and potential customers. The goal is simple: Improve business relationships to grow your business.',
    persian_meaning: 'مدیریت ارتباط با مشتری',
    example:
      'Using a CRM system helps us track customer interactions, manage sales pipelines, and provide better customer service.',
    category: 'Business Management, Marketing, Sales',
    related_terms: 'Customer Service, Sales Force Automation, Customer Data',
    notes:
      'مدیریت ارتباط با مشتری، مجموعه‌ای از روش‌ها، استراتژی‌های تجاری و فناوری‌هایی است که شرکت‌ها برای مدیریت و تجزیه و تحلیل تعاملات با مشتریان و داده‌های مشتریان در طول چرخه عمر مشتری استفاده می‌کنند.',
  },
  {
    word: 'Social Media Marketing',
    abbreviation: 'SMM',
    english_definition:
      'The use of social media platforms and websites to promote a product or service.',
    persian_meaning: 'بازاریابی شبکه‌های اجتماعی',
    example:
      'Running targeted ad campaigns on Facebook and engaging with followers on Instagram are key components of their SMM strategy.',
    category: 'Digital Marketing, Marketing',
    related_terms: 'Social Media, Content Marketing, Influencer Marketing',
    notes:
      'بازاریابی شبکه‌های اجتماعی، استفاده از پلتفرم‌ها و وب‌سایت‌های شبکه‌های اجتماعی برای تبلیغ یک محصول یا خدمت است. این شامل ایجاد محتوا، تعامل با مخاطبان و اجرای کمپین‌های تبلیغاتی است.',
  },
  {
    word: 'User-Generated Content',
    abbreviation: 'UGC',
    english_definition:
      'Any form of content, such as images, videos, text, and audio, that has been posted by users on online platforms, such as social media sites, blogs, and forums.',
    persian_meaning: 'محتوای تولید شده توسط کاربر',
    example:
      'Customer reviews, social media posts featuring their products, and unboxing videos are all examples of UGC.',
    category: 'Digital Marketing, Content Marketing, Social Media Marketing',
    related_terms: 'UGC, Social Proof, Community Marketing',
    notes:
      'محتوای تولید شده توسط کاربر، هر نوع محتوایی است که توسط کاربران در پلتفرم‌های آنالین مانند رسانه‌های اجتماعی، وبلاگ‌ها و انجمن‌ها منتشر می‌شود. این محتوا اغلب به عنوان مدرک اجتماعی (Social Proof) عمل می‌کند.',
  },
  {
    word: 'Brand Experience',
    abbreviation: 'BX',
    english_definition:
      'The customer\'s perception of your brand, based on all their interactions with it.',
    persian_meaning: 'تجربه برند',
    example:
      'The seamless online checkout process and the helpful customer support contributed to a positive brand experience.',
    category: 'Branding, Customer Experience, Marketing',
    related_terms: 'Customer Journey, Customer Touchpoint, Brand Perception',
    notes:
      'تجربه برند، درک مشتری از برند است که بر اساس تمام تعامالت او با برند شکل می‌گیرد. این شامل تمامی نقاط تماس (Touchpoints) در طول سفر مشتری (Customer Journey) است.',
  },
  {
    word: 'Brand Advocacy',
    english_definition:
      'A marketing strategy that encourages satisfied customers to share their positive experiences with others, thereby becoming brand advocates.',
    persian_meaning: 'حمایت از برند (طرفداری از برند)',
    example:
      'Loyal customers who recommend our products to friends and family are acting as brand advocates.',
    category: 'Customer Relations, Marketing',
    related_terms: 'Word-of-Mouth, Customer Loyalty, Brand Ambassador',
    notes:
      'حمایت از برند، استراتژی بازاریابی است که مشتریان راضی را تشویق می‌کند تا تجربیات مثبت خود را با دیگران به اشتراک بگذارند و در نتیجه حامی برند شوند.',
  },
  {
    word: 'Marketing Mix',
    english_definition:
      'The set of marketing tools that the firm uses to pursue its marketing objectives in the target market. Often referred to as the "4 Ps": Product, Price, Place, and Promotion.',
    persian_meaning: 'آمیخته بازاریابی',
    example:
      'Developing a new product, setting a competitive price, distributing it effectively, and promoting it through various channels are all part of the marketing mix.',
    category: 'Marketing Strategy, Business Management',
    related_terms: '4 Ps, Product, Price, Place, Promotion',
    notes:
      'آمیخته بازاریابی، مجموعه‌ای از ابزارهای بازاریابی است که شرکت برای دستیابی به اهداف بازاریابی خود در بازار هدف استفاده می‌کند. این آمیخته معمولاً شامل ۴ اصل "P" است: محصول (Product)، قیمت (Price)، مکان (Place) و ترویج (Promotion).',
  },
  {
    word: 'Brand Audit',
    english_definition:
      'A systematic evaluation of a brand’s current position, strengths, weaknesses, opportunities, and threats.',
    persian_meaning: 'ممیزی برند',
    example:
      'The company conducted a brand audit to understand its market standing and identify areas for improvement.',
    category: 'Brand Management, Marketing Strategy, Market Research',
    related_terms: 'SWOT Analysis, Brand Health, Market Research',
    notes:
      'ممیزی برند، ارزیابی سیستماتیک موقعیت فعلی، نقاط قوت، ضعف‌ها، فرصت‌ها و تهدیدهای یک برند است. این فرآیند به مدیران برند کمک می‌کند تا تصمیمات استراتژیک بهتری بگیرند.',
  },
  {
    word: 'Marketing Campaign',
    english_definition:
      'A series of marketing activities designed to achieve a specific objective, such as increasing brand awareness, driving sales, or launching a new product.',
    persian_meaning: 'کمپین بازاریابی',
    example:
      'Their holiday marketing campaign featured special promotions, seasonal ads, and social media contests.',
    category: 'Marketing, Advertising, Communications',
    related_terms: 'Advertising, Promotion, Marketing Strategy',
    notes:
      'کمپین بازاریابی، مجموعه‌ای از فعالیت‌های بازاریابی است که برای دستیابی به یک هدف خاص طراحی شده است؛ مانند افزایش آگاهی از برند، افزایش فروش یا معرفی محصول جدید.',
  },
  {
    word: 'Brand Extension',
    english_definition:
      'A marketing strategy used when a company uses its established brand name to introduce a new product.',
    persian_meaning: 'توسعه برند',
    example:
      'When Apple launched the Apple Watch, it was a brand extension from their successful line of computers and smartphones.',
    category: 'Brand Management, Marketing Strategy',
    related_terms: 'Product Line Extension, Brand Licensing, New Product Development',
    notes:
      'توسعه برند، استراتژی بازاریابی است که زمانی استفاده می‌شود که یک شرکت از نام تجاری تثبیت‌شده خود برای معرفی محصول جدیدی استفاده می‌کند. این کار می‌تواند ریسک معرفی محصول جدید را کاهش دهد.',
  },
  {
    word: 'Consumer Journey',
    english_definition:
      'The complete sum of experiences that consumers go through when interacting with a company and its brand.',
    persian_meaning: 'سفر مشتری',
    example:
      'Understanding the consumer journey helps businesses identify key touchpoints and optimize the customer experience.',
    category: 'Marketing, Customer Experience, Consumer Behavior',
    related_terms: 'Customer Journey Mapping, Customer Touchpoint, Customer Experience (CX)',
    notes:
      'سفر مشتری، مجموع کل تجربیاتی است که مصرف‌کنندگان در هنگام تعامل با یک شرکت و برند آن تجربه می‌کنند. این سفر شامل تمام نقاط تماس از آگاهی اولیه تا پس از خرید است.',
  },
  {
    word: 'Brand Equity',
    english_definition:
      'The commercial value derived from consumer perception of the brand name of a particular product or service, rather than from the product or service itself. It is built over time through consistent brand experiences, marketing efforts, and positive associations. Key components often include Brand Awareness, Perceived Quality, Brand Associations, Brand Loyalty, and Proprietary Brand Assets.',
    persian_meaning: 'ارزش ویژه برند',
    example:
      'A brand with strong brand equity can charge higher prices, has a loyal customer base, and can more easily launch new products due to the trust it has established.',
    category: 'Brand Management, Marketing Strategy, Financial Value',
    related_terms:
      'Brand Value, Brand Loyalty, Brand Awareness, Perceived Quality, Brand Associations',
    notes:
      'ارزش ویژه برند، ارزشی مالی است که از درک مصرف‌کنندگان از نام تجاری یک محصول یا خدمت حاصل می‌شود، فراتر از ارزش فیزیکی خود محصول. این ارزش با گذشت زمان از طریق تجربیات ثابت برند، تلاش‌های بازاریابی و ارتباطات مثبت ساخته می‌شود. اجزای کلیدی آن شامل آگاهی از برند، کیفیت درک‌شده، ارتباطات برند، وفاداری به برند و دارایی‌های اختصاصی برند است.',
  },
  {
    word: 'Competitive Analysis',
    english_definition:
      'The process of identifying your competitors and evaluating their strategies to determine their strengths and weaknesses relative to your own product or service.',
    persian_meaning: 'تحلیل رقابتی',
    example:
      'Before launching their new service, they conducted a thorough competitive analysis to understand market gaps and competitor offerings.',
    category: 'Market Research, Marketing Strategy, Business Strategy',
    related_terms: 'SWOT Analysis, Market Share, Competitor Landscape',
    notes:
      'تحلیل رقابتی، فرآیند شناسایی رقبا و ارزیابی استراتژی‌های آنها برای تعیین نقاط قوت و ضعفشان در مقایسه با محصول یا خدمت شماست. این تحلیل به شناسایی فرصت‌ها و تهدیدهای بازار کمک می‌کند.',
  },
  {
    word: 'Brand Touchpoint',
    english_definition:
      'Any point of interaction between a customer and a brand.',
    persian_meaning: 'نقطه تماس برند',
    example:
      'From visiting a website and seeing an advertisement to making a purchase and receiving customer support, each is a brand touchpoint.',
    category: 'Customer Experience, Branding, Marketing',
    related_terms: 'Customer Journey, Customer Experience (CX), User Experience (UX)',
    notes:
      'نقطه تماس برند، هر نقطه‌ای از تعامل بین مشتری و یک برند است. این نقاط می‌توانند شامل کانال‌های آنلاین و آفلاین، تبلیغات، وب‌سایت، رسانه‌های اجتماعی، فروشگاه فیزیکی و خدمات مشتری باشند.',
  },
  {
    word: 'Influencer Marketing',
    abbreviation: '-',
    english_definition:
      'A collaborative form of social media and content marketing that leverages individuals with large, engaged audiences to promote products, services, or brands. Influencers can range from mega-celebrities to micro-influencers with niche followings. Key aspects include authenticity, engagement rates, audience demographics, and campaign ROI.',
    persian_meaning: 'بازاریابی تاثیرگذار',
    example:
      'Brands often work with influencers who align with their values to create authentic content that resonates with the influencer’s audience.',
    category: 'Digital Marketing, Social Media Marketing, Advertising',
    related_terms:
      'Social Media, Endorsement, Micro-influencer, Macro-influencer, Brand Ambassador, Authenticity',
    notes:
      'بازاریابی تاثیرگذار، شکلی از بازاریابی رسانه‌های اجتماعی و محتوا است که از افراد دارای مخاطبان بزرگ و درگیر برای تبلیغ محصولات، خدمات یا برندها استفاده می‌کند. اینفلوئنسرها می‌توانند از سلبریتی‌های بزرگ تا میکرو-اینفلوئنسرهایی با دنبال‌کنندگان خاص باشند. جنبه‌های کلیدی آن شامل اصالت، نرخ تعامل، دموگرافیک مخاطبان و بازگشت سرمایه (ROI) کمپین است.',
  },
  {
    word: 'Brand Architecture',
    english_definition:
      'The organizational structure of a company’s portfolio of brands, sub-brands, and products. Common models include a Branded House (a single strong master brand), a House of Brands (a collection of independent, distinct brands), and a Hybrid model (combining both).',
    persian_meaning: 'معماری برند',
    example:
      'Deciding whether to adopt a branded house or house of brands architecture significantly impacts brand management, marketing efforts, and consumer perception.',
    category: 'Brand Management, Marketing Strategy, Corporate Strategy',
    related_terms:
      'Brand Portfolio, Master Brand, Sub-brand, Endorsed Brand, House of Brands, Branded House',
    notes:
      'معماری برند، ساختار سازمانی مجموعه برندها، زیر برندها و محصولات یک شرکت است. مدل‌های رایج عبارت‌اند از: خانه برند (Branded House) که در آن یک برند اصلی قوی وجود دارد (مثل گوگل)، خانه برندها (House of Brands) که در آن مجموعه‌ای از برندهای مستقل وجود دارد (مثل Procter & Gamble)، و مدل ترکیبی (Hybrid). انتخاب معماری مناسب بر مدیریت برند، تلاش‌های بازاریابی و درک مصرف‌کننده تأثیر می‌گذارد.',
  },
  {
    word: 'Brand Promise',
    english_definition:
      'The explicit or implicit commitment a brand makes to its customers regarding the value, experience, and quality they can expect to receive. It sets customer expectations and influences their perception and loyalty. A strong brand promise is clear, consistent, and deliverable.',
    persian_meaning: 'وعده برند',
    example:
      'Amazon’s brand promise of fast, reliable delivery and a vast selection of products is a core reason for its customer loyalty.',
    category: 'Branding, Marketing, Customer Relations',
    related_terms:
      'Customer Expectation, Value Proposition, Brand Trust, Brand Consistency, Deliverability',
    notes:
      'وعده برند، تعهد صریح یا ضمنی است که یک برند به مشتریان خود در مورد ارزش، تجربه و کیفیتی که انتظار دارند دریافت کنند می‌دهد. این وعده انتظارات مشتری را تنظیم کرده و بر درک و وفاداری آنها تأثیر می‌گذارد. یک وعده برند قوی، شفاف، سازگار و قابل تحویل است.',
  },
]

export default part3
