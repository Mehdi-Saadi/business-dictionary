import type { Phrase } from '@/types/phrase'

const part4: Phrase[] = [
  {
    word: 'Market Research',
    abbreviation: 'MR',
    english_definition:
      'The process of gathering, analyzing, and interpreting information about a market, including customers and competitors.',
    persian_meaning: 'تحقیقات بازار',
    example:
      'Market research helps companies understand customer needs before launching a product.',
    category: 'General market research',
    related_terms: 'Market analysis, Consumer research, Data collection',
    notes: 'پایه و اساس تصمیمگیریهای بازاریابی است',
  },
  {
    word: 'Market Analysis',
    abbreviation: '',
    english_definition:
      'The assessment of market size, trends, competition, and customer segments.',
    persian_meaning: 'تحلیل بازار',
    example:
      'The market analysis showed strong growth potential in urban areas.',
    category: 'Strategy',
    related_terms: 'SWOT analysis, Industry analysis',
    notes: 'معمولاً بخشی از طرح کسب‌وکار است',
  },
  {
    word: 'Consumer Behavior',
    abbreviation: '',
    english_definition:
      'The study of how individuals make decisions to spend resources on consumption.',
    persian_meaning: 'رفتار مصرف‌کننده',
    example:
      'Understanding consumer behavior improves targeting accuracy.',
    category: 'Behavioral research',
    related_terms: 'Buying behavior, Decision-making process',
    notes: 'تحت تأثیر عوامل روانی و اجتماعی است',
  },
  {
    word: 'Target Market',
    abbreviation: '',
    english_definition:
      'A specific group of consumers a company aims to reach.',
    persian_meaning: 'بازار هدف',
    example: 'Young professionals are our primary target market.',
    category: 'Segmentation',
    related_terms: 'Market segmentation, Customer profiling',
    notes:
      'بر اساس ویژگی‌های جمعیتی، روانشناختی و رفتاری تعیین می‌شود',
  },
  {
    word: 'Market Segmentation',
    abbreviation: '',
    english_definition:
      'Dividing a market into distinct groups with similar needs or characteristics.',
    persian_meaning: 'بخش‌ بندی بازار',
    example:
      'Market segmentation allows personalized marketing strategies.',
    category: 'Segmentation',
    related_terms: 'Targeting, Positioning',
    notes:
      'می‌تواند جمعیتی، جغرافیایی، رفتاری یا روانشناختی باشد',
  },
  {
    word: 'Primary Research',
    abbreviation: '',
    english_definition: 'Original data collected directly from sources.',
    persian_meaning: 'تحقیق اولیه',
    example: 'Surveys are a common form of primary research.',
    category: 'Data collection',
    related_terms: 'Survey, Interview',
    notes: 'زمانبر اما بسیار اختصاصی است',
  },
  {
    word: 'Secondary Research',
    abbreviation: '',
    english_definition: 'Analysis of existing data collected by others.',
    persian_meaning: 'تحقیق ثانویه',
    example: 'Government reports are used in secondary research.',
    category: 'Data collection',
    related_terms: 'Desk research',
    notes: 'مقرونبهصرفه و سریعتر است',
  },
  {
    word: 'Survey',
    abbreviation: '',
    english_definition:
      'A research method using questionnaires to collect data.',
    persian_meaning: 'نظرسنجی',
    example: 'The online survey gathered 1,000 responses.',
    category: 'Data collection',
    related_terms: 'Questionnaire',
    notes: 'میتواند کیفی یا کمی باشد',
  },
  {
    word: 'Questionnaire',
    abbreviation: '',
    english_definition:
      'A structured set of questions used for data collection.',
    persian_meaning: 'پرسشنامه',
    example: 'The questionnaire included demographic questions.',
    category: 'Research tool',
    related_terms: 'Survey tool',
    notes: 'طراحی آن بر کیفیت داده تأثیر دارد',
  },
  {
    word: 'Focus Group',
    abbreviation: '',
    english_definition:
      'A moderated group discussion used to collect qualitative insights.',
    persian_meaning: 'گروه متمرکز',
    example: 'The focus group revealed customer frustrations.',
    category: 'Qualitative research',
    related_terms: 'Interview',
    notes: 'معمولاً ۶ تا ۱۰ شرکت‌کننده دارد',
  },
  {
    word: 'Interview',
    abbreviation: '',
    english_definition:
      'A structured or unstructured conversation used to gather detailed information.',
    persian_meaning: 'مصاحبه',
    example:
      'The interview provided deep insights into customer preferences.',
    category: 'Qualitative research',
    related_terms: 'Focus Group, Survey',
    notes: 'میتواند حضوری، تلفنی یا آنالین باشد',
  },
  {
    word: 'Observation',
    abbreviation: '',
    english_definition:
      'Watching and recording consumer behavior in a natural setting.',
    persian_meaning: 'مشاهده',
    example: 'Observation helped researchers identify shopping habits.',
    category: 'Qualitative research',
    related_terms: 'Ethnography',
    notes: 'رفتار واقعی را نشان میدهد، نه فقط پاسخها را',
  },
  {
    word: 'Ethnography',
    abbreviation: '',
    english_definition:
      'A research method that studies people in their natural environment.',
    persian_meaning: 'مردم نگاری',
    example:
      'Ethnography revealed how people actually use the product at home.',
    category: 'Qualitative research',
    related_terms: 'Observation',
    notes: 'برای درک عمیق رفتار مصرفکننده مفید است',
  },
  {
    word: 'Data Collection',
    abbreviation: '',
    english_definition: 'The process of gathering information for analysis.',
    persian_meaning: 'جمع آوری داده',
    example: 'Accurate data collection is essential for reliable results.',
    category: 'Research process',
    related_terms: 'Sampling',
    notes: 'مرحله پایهای در هر پژوهش است',
  },
  {
    word: 'Sampling',
    abbreviation: '',
    english_definition: 'Selecting a subset of a population for study.',
    persian_meaning: 'نمونهگیری',
    example: 'Random sampling reduces bias in survey results.',
    category: 'Research method',
    related_terms: 'Size Sample',
    notes: 'کیفیت نمونه بر اعتبار نتایج اثر دارد',
  },
  {
    word: 'Sample Size',
    abbreviation: '',
    english_definition:
      'The number of observations or respondents in a study.',
    persian_meaning: 'حجم نمونه',
    example: 'A larger sample size increases confidence in the findings.',
    category: 'Research method',
    related_terms: 'Sampling',
    notes: 'باید متناسب با هدف تحقیق انتخاب شود',
  },
  {
    word: 'Random Sampling',
    abbreviation: '',
    english_definition:
      'A sampling method where every member has an equal chance of selection.',
    persian_meaning: 'نمونهگیری تصادفی',
    example:
      'Random sampling helps ensure a fair representation of the population.',
    category: 'Research method',
    related_terms: 'Sampling Probability',
    notes: 'یکی از روشهای معتبر نمونهگیری است',
  },
  {
    word: 'Qualitative Research',
    abbreviation: '',
    english_definition:
      'Research that explores attitudes, opinions, and motivations.',
    persian_meaning: 'تحقیق کیفی',
    example:
      'Qualitative research helped explain why customers disliked the product.',
    category: 'Research type',
    related_terms: 'Focus Group, Interview',
    notes: 'بیشتر بر ”چرا“ و ”چگونه“ تمرکز دارد',
  },
  {
    word: 'Quantitative Research',
    abbreviation: '',
    english_definition:
      'Research based on numerical data and statistical analysis.',
    persian_meaning: 'تحقیق کمی',
    example:
      'Quantitative research showed a 20% increase in brand awareness.',
    category: 'Research type',
    related_terms: 'Survey, Data Analysis',
    notes: 'مناسب اندازهگیری و مقایسه است',
  },
  {
    word: 'Data Analysis',
    abbreviation: '',
    english_definition:
      'The process of inspecting and interpreting data to find patterns.',
    persian_meaning: 'تحلیل داده',
    example:
      'Data analysis revealed a strong correlation between price and demand.',
    category: 'Analysis',
    related_terms: 'Statistical Analysis',
    notes: 'تبدیل بخش اصلی داده به فهم / درک روشن',
  },
  {
    word: 'Statistical Analysis',
    english_definition: 'The use of statistical methods to summarize and interpret data.',
    persian_meaning: 'تحلیل آماری',
    example: 'Statistical analysis confirmed the hypothesis.',
    category: 'Analysis',
    related_terms: 'Analysis Regression',
    notes: 'برای نتیجهگیری علمی ضروری است',
  },
  {
    word: 'Regression Analysis',
    english_definition: 'A statistical method used to examine the relationship between variables.',
    persian_meaning: 'تحلیل رگرسیون',
    example: 'Regression analysis showed that advertising spend influenced sales.',
    category: 'Advanced analysis',
    related_terms: 'Correlation',
    notes: 'برای پیشبینی و مدلسازی کاربرد دارد',
  },
  {
    word: 'Correlation',
    english_definition: 'A statistical relationship between two variables.',
    persian_meaning: 'همبستگی',
    example: 'There is a strong correlation between satisfaction and repeat purchase.',
    category: 'Statistical analysis',
    related_terms: 'Analysis Regression',
    notes: 'به معنی علت و معلول نیست',
  },
  {
    word: 'Hypothesis',
    english_definition: 'A tentative statement that can be tested through research.',
    persian_meaning: 'فرضیه',
    example: 'The hypothesis was tested using survey data.',
    category: 'Research method',
    related_terms: 'Question Research',
    notes: 'باید قابل آزمون باشد',
  },
  {
    word: 'Research Question',
    english_definition: 'A clear question that guides a research study.',
    persian_meaning: 'سؤال پژوهش',
    example: 'The research question focused on customer loyalty.',
    category: 'Research method',
    related_terms: 'Hypothesis',
    notes: 'مسیر تحقیق را مشخص میکند',
  },
  {
    word: 'Key Performance Indicator',
    abbreviation: 'KPI',
    english_definition: 'A measurable value used to evaluate success.',
    persian_meaning: 'شاخص کلیدی عملکرد',
    example: 'Customer retention rate is an important KPI for subscription businesses.',
    category: 'Metrics',
    related_terms: 'Metrics, Performance Measure',
    notes: 'باید مستقیما با هدف کسب و کار مرتبط باشد',
  },
  {
    word: 'Metric',
    english_definition: 'A standard of measurement used to track performance or progress.',
    persian_meaning: 'شاخص / معیار',
    example: 'Engagement rate is a useful marketing metric.',
    category: 'Performance measurement',
    related_terms: 'KPI',
    notes: 'نیست KPI لزوماً metric است، اما هر metric یک KPI هر',
  },
  {
    word: 'Return on Investment',
    abbreviation: 'ROI',
    english_definition: 'A measure of the profitability of an investment.',
    persian_meaning: 'بازگشت سرمایه',
    example: 'The campaign generated a strong ROI.',
    category: 'Financial performance',
    related_terms: 'Profitability',
    notes: 'برای ارزیابی اثربخشی هزینهها استفاده میشود',
  },
  {
    word: 'Conversion Rate',
    english_definition: 'The percentage of users who complete a desired action.',
    persian_meaning: 'نرخ تبدیل',
    example: 'The new landing page increased conversion rate.',
    category: 'Digital marketing',
    related_terms: 'Click-Through Rate',
    notes: 'یکی از مهمترین شاخصهای عملکرد است',
  },
  {
    word: 'Click-Through Rate',
    abbreviation: 'CTR',
    english_definition: 'The ratio of users who click on a link to those who view it.',
    persian_meaning: 'نرخ کلیک',
    example: 'A better headline improved the click-through rate.',
    category: 'Digital marketing',
    related_terms: 'Rate Conversion',
    notes: 'برای ارزیابی تبلیغات و ایمیلها کاربرد دارد',
  },
  {
    word: 'Customer Lifetime Value',
    abbreviation: 'CLV / LTV',
    english_definition:
      'The total value a customer brings over the entire relationship with a company.',
    persian_meaning: 'ارزش طول عمر مشتری',
    example:
      'Increasing customer lifetime value is more profitable than chasing one-time sales.',
    category: 'Customer & Revenue',
    related_terms: 'Retention, Churn Rate',
    notes: 'شاخص مهم برای رشد پایدار است',
  },
  {
    word: 'Churn Rate',
    english_definition:
      'The percentage of customers who stop using a product or service.',
    persian_meaning: 'نرخ ریزش مشتری',
    example:
      'The company reduced churn rate by improving customer support.',
    category: 'Customer & Retention',
    related_terms: 'Rate Retention',
    notes: 'در کسبوکارهای اشتراکی بسیار مهم است',
  },
  {
    word: 'Retention Rate',
    english_definition:
      'The percentage of customers who continue using a product or service.',
    persian_meaning: 'نرخ نگهداشت',
    example:
      'A high retention rate indicates strong customer satisfaction.',
    category: 'Customer & Retention',
    related_terms: 'Rate Churn',
    notes: 'بر وفاداری مشتری داللت دارد',
  },
  {
    word: 'Brand Awareness',
    english_definition:
      'The extent to which consumers recognize a brand.',
    persian_meaning: 'آگاهی از برند',
    example:
      'The campaign successfully increased brand awareness.',
    category: 'Brand',
    related_terms: 'Recall Brand',
    notes: 'مرحله مهمی در قیف بازاریابی است',
  },
  {
    word: 'Brand Recall',
    english_definition:
      'The ability of consumers to remember a brand without being prompted.',
    persian_meaning: 'یادآوری برند',
    example:
      'Strong brand recall can improve purchase decisions.',
    category: 'Brand',
    related_terms: 'Awareness Brand',
    notes: 'معموالً شود از طریق تبلیغات تقویت می',
  },
  {
    word: 'Market Share',
    english_definition:
      'The percentage of total sales in a market captured by a company.',
    persian_meaning: 'سهم بازار',
    example:
      'The company gained market share after launching a cheaper product.',
    category: 'Competition',
    related_terms: 'Position Competitive',
    notes: 'نشاندهنده قدرت رقابتی است',
  },
  {
    word: 'Competitor Analysis',
    english_definition:
      'The process of evaluating competitors’ strengths and weaknesses.',
    persian_meaning: 'تحلیل رقبا',
    example:
      'Competitor analysis helped the startup position itself better.',
    category: 'Competition',
    related_terms: 'Analysis SWOT',
    notes: 'برای تدوین استراتژی ضروری است',
  },
  {
    word: 'SWOT Analysis',
    english_definition:
      'A framework for analyzing strengths, weaknesses, opportunities, and threats.',
    persian_meaning: 'SWOT تحلیل',
    example:
      'SWOT analysis highlighted both risks and opportunities.',
    category: 'Strategy',
    related_terms: 'Analysis Competitor',
    notes: 'ابزار کالسیک برنامهریزی استراتژیک است',
  },
  {
    word: 'Trend Analysis',
    english_definition:
      'The study of data patterns over time.',
    persian_meaning: 'تحلیل روند',
    example:
      'Trend analysis showed increasing demand for eco-friendly products.',
    category: 'Analysis',
    related_terms: 'Forecasting',
    notes: 'برای پیشبینی بازار مفید است',
  },
  {
    word: 'Forecasting',
    english_definition:
      'The process of predicting future outcomes based on data.',
    persian_meaning: 'پیشبینی',
    example:
      'Forecasting helped the company plan inventory levels.',
    category: 'Advanced Analysis',
    related_terms: 'Analysis Trend',
    notes: 'در برنامهریزی فروش و تقاضا کاربرد دارد',
  },
  {
    word: 'Predictive Analytics',
    english_definition:
      'The use of data, statistical algorithms, and machine learning to predict future events.',
    persian_meaning: 'تحلیل پیشبینانه',
    example: 'Predictive analytics identified customers likely to churn.',
    category: 'Advanced Analysis',
    related_terms: 'Forecasting, Machine Learning',
    notes: 'در بازاریابی دادهمحور بسیار مهم است',
  },
  {
    word: 'Big Data',
    english_definition:
      'Extremely large datasets that require advanced tools to analyze.',
    persian_meaning: 'کالنداده',
    example: 'Big data allows companies to understand consumer patterns at scale.',
    category: 'Data & Technology',
    related_terms: 'Mining Data',
    notes: 'معمولاً حجم، سرعت و تنوع بالا دارد',
  },
  {
    word: 'Data Mining',
    english_definition:
      'The process of discovering patterns in large datasets.',
    persian_meaning: 'دادهکاوی',
    example: 'Data mining revealed hidden purchase patterns.',
    category: 'Data & Technology',
    related_terms: 'Big Data',
    notes: 'برای استخراج الگوهای مفید استفاده میشود',
  },
  {
    word: 'Dashboard',
    english_definition: 'A visual display of key metrics and data.',
    persian_meaning: 'داشبورد',
    example: 'The dashboard showed sales and conversion trends in real time.',
    category: 'Reporting',
    related_terms: 'Reporting',
    notes: 'برای تصمیمگیری سریع بسیار کاربردی است',
  },
  {
    word: 'Reporting',
    english_definition:
      'Presenting data and findings in a structured format.',
    persian_meaning: 'گزارشدهی',
    example:
      'Weekly reporting keeps the team informed about campaign performance.',
    category: 'Reporting',
    related_terms: 'Dashboard',
    notes: 'میتواند دورهای یا لحظهای باشد',
  },
  {
    word: 'A/B Testing',
    english_definition:
      'A method of comparing two versions to see which performs better.',
    persian_meaning: 'B/A آزمون',
    example:
      'A/B testing showed that the new design improved clicks.',
    category: 'Experiment',
    related_terms: 'Experimentation',
    notes: 'برای بهینهسازی تبلیغات و صفحات فرود استفاده میشود',
  },
  {
    word: 'Experimentation',
    english_definition:
      'Testing ideas or changes under controlled conditions.',
    persian_meaning: 'آزمایشگری',
    example:
      'Experimentation helps marketers make evidence-based decisions.',
    category: 'Experiment',
    related_terms: 'A/B Testing',
    notes: 'برای سنجش علت و معلول مناسب است',
  },
  {
    word: 'Customer Satisfaction',
    english_definition:
      'The degree to which a product or service meets customer expectations.',
    persian_meaning: 'رضایت مشتری',
    example:
      'Customer satisfaction improved after the support team was expanded.',
    category: 'Customer',
    related_terms: 'Net Promoter Score',
    notes: 'شاخص مهم کیفیت تجربه مشتری است',
  },
  {
    word: 'Net Promoter Score',
    english_definition:
      'A metric that measures customer loyalty and likelihood to recommend a brand.',
    persian_meaning: 'شاخص خالص ترویجکنندگان',
    example:
      'The company’s NPS increased after improving service quality.',
    category: 'Customer Loyalty',
    related_terms: 'Customer Satisfaction',
    notes: 'یکی از رایجترین شاخصهای وفاداری است',
  },
  {
    word: 'Product Positioning',
    english_definition:
      'The way a product is perceived relative to competitors in the customer’s mind.',
    persian_meaning: 'جایگاهیابی محصول',
    example:
      'Product positioning focused on premium quality and simplicity.',
    category: 'Marketing Strategy',
    related_terms: 'Target Market, Brand Positioning',
    notes: 'بر ادراک مشتری در بازار اثر میگذارد',
  },
  {
    word: 'Customer Journey Map',
    english_definition: 'A visualization of the experience a customer has when interacting with a company or brand.',
    persian_meaning: 'نقشه سفر مشتری',
    example: 'The customer journey map helped identify pain points in the purchase process.',
    category: 'Customer Experience',
    related_terms: 'Customer Experience (CX), Touchpoints',
    notes: 'شامل تمام نقاط تماس مشتری با برند است',
  },
  {
    word: 'User Experience',
    abbreviation: 'UX',
    english_definition: 'The overall experience a person has when using a product, system, or service.',
    persian_meaning: 'تجربه کاربری',
    example: 'Good UX design is crucial for app adoption.',
    category: 'Product Design',
    related_terms: 'User Interface (UI), Usability',
    notes: 'بر تعامل کاربر با محصول تمرکز دارد',
  },
  {
    word: 'User Interface',
    abbreviation: 'UI',
    english_definition: 'The visual elements and controls through which a user interacts with a digital product.',
    persian_meaning: 'رابط کاربری',
    example: 'The new UI makes the software much easier to navigate.',
    category: 'Product Design',
    related_terms: 'User Experience (UX)',
    notes: 'بخش قابل مشاهده و تعاملی محصول است',
  },
  {
    word: 'Usability',
    english_definition: 'The ease with which users can learn and operate a product to achieve their goals.',
    persian_meaning: 'قابلیت استفاده / کاربردپذیری',
    example: 'Usability testing revealed issues with the checkout flow.',
    category: 'User Experience',
    related_terms: 'User Experience (UX)',
    notes: 'معیا رهایی مانند یادگیری، کارایی و رضایت را شامل میشود',
  },
  {
    word: 'Benchmarking',
    english_definition: 'Comparing a company’s processes or performance metrics against industry bests or competitors.',
    persian_meaning: 'بنچمارکینگ / معیارگذاری',
    example: 'Benchmarking against top competitors helped identify areas for improvement.',
    category: 'Strategy / Performance',
    related_terms: 'Competitive Analysis, Best Practices',
    notes: 'برای ارزیابی و بهبود عملکرد استفاده میشود',
  },
  {
    word: 'Sentiment Analysis',
    english_definition: 'Using natural language processing to determine the emotional tone behind a body of text.',
    persian_meaning: 'تحلیل احساسات',
    example: 'Sentiment analysis of customer reviews showed a predominantly positive tone.',
    category: 'Text / Social Analysis',
    related_terms: 'Natural Language Processing (NLP)',
    notes: '.برای درک نظرات و بازخوردها کاربرد دارد',
  },
  {
    word: 'Natural Language Processing',
    abbreviation: 'NLP',
    english_definition: 'A field of AI that helps computers understand and process human language.',
    persian_meaning: 'پردازش زبان طبیعی',
    example: 'NLP techniques are used in sentiment analysis and chatbots.',
    category: 'Artificial Intelligence / Data Analysis',
    related_terms: 'Sentiment Analysis, Machine Learning',
    notes: 'ارتباط بین کامپیوتر و زبان انسان را فراهم میکند',
  },
  {
    word: 'Customer Segmentation',
    english_definition: 'The process of dividing customers into distinct groups based on shared characteristics.',
    persian_meaning: 'بخشبندی مشتریان',
    example: 'Customer segmentation allows for more targeted marketing campaigns.',
    category: 'Marketing Strategy',
    related_terms: 'Market Segmentation, Persona',
    notes: 'برای درک بهتر نیازها و رفتار گروههای مختلف مشتریان',
  },
  {
    word: 'Persona',
    english_definition: 'A fictional representation of a target customer, based on research and data.',
    persian_meaning: 'پرسونا / شخصیت نما',
    example: 'Creating personas helped the team empathize with users.',
    category: 'Market Research / Design',
    related_terms: 'Target Market, Customer Segmentation',
    notes: 'شامل اطالعات جمعیت شناختی، رفتاری و اهداف است',
  },
  {
    word: 'ASO',
    abbreviation: 'App Store Optimization',
    english_definition: 'The process of optimizing mobile apps to improve their visibility in app stores.',
    persian_meaning: 'بهینهسازی اپ استور',
    example: 'ASO is crucial for driving organic downloads of mobile applications.',
    category: 'Digital Marketing / Mobile',
    related_terms: 'SEO (Search Engine Optimization)',
    notes: 'مثل سئو برای وبسایت ها عمل میکند',
  },
]

export default part4
