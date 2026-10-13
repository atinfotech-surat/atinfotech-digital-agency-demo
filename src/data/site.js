// Public-facing business details for the ATinfotech agency demo.
export const company = {
  name: 'ATinfotech',
  descriptor: 'Digital agency',
  tagline: 'Digital experiences built for business growth.',
  location: 'Surat, Gujarat, India',
  website: 'https://atinfotech.com/',
  contact: 'https://atinfotech.com/contact',
  github: 'https://github.com/AtInfotech',
  linkedin: 'https://www.linkedin.com/company/atinfotech/',
  facebook: 'https://www.facebook.com/atinfotechsurat',
  x: 'https://x.com/atinfotech2009',
};

export const proofPoints = [
  { value: 'Since 2009', label: 'Building digital experiences' },
  { value: '200+', label: 'Projects delivered' },
  { value: 'One partner', label: 'From strategy to launch' },
];

export const services = [
  {
    number: '01',
    code: 'WEB',
    title: 'Web development',
    copy: 'Fast, responsive websites and web applications designed around your customers and business goals.',
    tags: ['Business websites', 'Web apps', 'CMS'],
  },
  {
    number: '02',
    code: 'SYS',
    title: 'Custom software',
    copy: 'Purpose-built CRM, ERP, billing and workflow tools that make day-to-day operations simpler.',
    tags: ['CRM & ERP', 'Automation', 'APIs'],
  },
  {
    number: '03',
    code: 'COM',
    title: 'eCommerce',
    copy: 'Online stores with thoughtful product journeys, secure checkout and room to grow.',
    tags: ['Storefronts', 'Payments', 'Integrations'],
  },
  {
    number: '04',
    code: 'APP',
    title: 'Mobile apps',
    copy: 'Useful Android, iOS and cross-platform apps, backed by scalable services and clean UX.',
    tags: ['Android', 'iOS', 'Cross-platform'],
  },
  {
    number: '05',
    code: 'GRO',
    title: 'SEO & digital marketing',
    copy: 'Technical SEO, local search and performance-led campaigns that help the right people find you.',
    tags: ['Technical SEO', 'Local SEO', 'Growth'],
  },
  {
    number: '06',
    code: 'UX',
    title: 'UI/UX design',
    copy: 'Clear, accessible digital experiences that make complex journeys feel simple.',
    tags: ['Research', 'Prototyping', 'Design systems'],
  },
];

// The images are concept art for the demo, not screenshots of these live projects.
export const projects = [
  {
    number: '01',
    name: 'ATPass Vault',
    type: 'Android app · Data security',
    copy: 'A privacy-focused password manager with encrypted storage and a secure document vault.',
    image: '/images/work-atpass.jpg',
    alt: 'Illustrative concept image for ATPass Vault; not an app screenshot',
    href: 'https://play.google.com/store/apps/details?id=com.atpass.vault.atinfotech&pcampaignid=web_share',
    theme: 'project-dark',
  },
  {
    number: '02',
    name: 'Arancia Kuchen',
    type: 'Brand website · Modular kitchens',
    copy: 'A refined digital showcase for a premium modular kitchen and furniture brand.',
    image: '/images/work-arancia.jpg',
    alt: 'Illustrative modular-kitchen concept image for Arancia Kuchen; not a website screenshot',
    href: 'https://aranciakuchen.com/',
    theme: 'project-warm',
  },
  {
    number: '03',
    name: 'Home Deck',
    type: 'Website · Bakery & gifting',
    copy: 'A welcoming online home for cakes, cookies, bakery favourites and thoughtful gifts.',
    image: '/images/work-homedeck.jpg',
    alt: 'Illustrative bakery concept image for Home Deck; not a website screenshot',
    href: 'https://homedeck.in/',
    theme: 'project-bakery',
  },
];

export const processSteps = [
  { number: '01', title: 'Discover', copy: 'We learn about your business, audience and the outcome you need.' },
  { number: '02', title: 'Plan & design', copy: 'We shape the experience, scope and technical approach before building.' },
  { number: '03', title: 'Build & launch', copy: 'We develop, test and prepare your solution for real-world use.' },
  { number: '04', title: 'Improve', copy: 'We help you maintain, optimize and grow after launch.' },
];
