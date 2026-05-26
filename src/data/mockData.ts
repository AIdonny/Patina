// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Shop', href: '/product' },
  { label: 'About', href: '/why-patina' },
] as const;

export const FOOTER_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'Contact', href: '#' },
] as const;

// ─── Homepage — Marquee ──────────────────────────────────────────────────────

export const HOME_MARQUEE_ITEMS = [
  'Overnight Recovery',
  'Hydrogel Formula',
  'Clean Ingredients',
  '100% Vegan',
  'Cruelty-Free',
  'Biodegradable Film',
] as const;

// ─── Homepage — Intro section ─────────────────────────────────────────────────

export const HOME_INTRO_SECTION = {
  label: 'EYE RECOVERY PATCHES · N° 002',
  headline: 'A new approach to eye care.',
  headlineItalic: 'Gentle. Effective.',
  body1: 'Patina Eye Recovery Patches are formulated with a hydrogel complex that delivers active ingredients directly under the eye — reducing puffiness, dark circles, and fine lines in just 20 minutes.',
  body2: 'We believe skincare should support your skin, not overwhelm it. One product. One ritual. Real results.',
  cta: { label: 'Shop the Patches', href: '/product' },
} as const;

// ─── Homepage — Product section ───────────────────────────────────────────────

export const HOME_PRODUCT_SECTION = {
  label: 'The Product',
  headline: 'Pure eye care, by nature.',
  body1: 'Thoughtfully crafted with a hydrogel formula designed to bring calm and balance to the delicate under-eye area. Lightweight, breathable, and embedded with botanical actives.',
  body2: 'Each patch contours naturally to your skin — delivering results you can see and feel, effortlessly, every day.',
  badge: 'N° 002',
} as const;

// ─── Homepage — Ingredients grid ─────────────────────────────────────────────

export const HOME_INGREDIENTS_GRID = {
  label: "What's Inside",
  headline: 'Science-backed.',
  headlineItalic: 'Nature-led.',
  items: [
    {
      name: 'Hyaluronic Acid',
      description: 'Deeply hydrates and plumps fine lines from within.',
    },
    {
      name: 'Caffeine',
      description: 'Visibly reduces puffiness and stimulates circulation.',
    },
    {
      name: 'Peptide Complex',
      description: 'Firms and supports the delicate under-eye skin barrier.',
    },
    {
      name: 'Green Tea Extract',
      description: 'Antioxidant protection and soothing calm for sensitive skin.',
    },
  ],
} as const;

// ─── Homepage — Stats section ─────────────────────────────────────────────────

export const HOME_STATS_SECTION = [
  { value: '96%',    label: 'Saw reduced puffiness within 20 minutes' },
  { value: '20 min', label: 'All you need for visible results' },
  { value: '100%',   label: 'Vegan & cruelty-free formulation' },
] as const;

// ─── Homepage ────────────────────────────────────────────────────────────────

export const HOME_HERO = {
  headline: 'Wake up, luminous.',
  imageAlt:
    'A close-up photograph of a woman\'s eye with a translucent, shimmering under-eye patch applied. Scattered around her face are delicate, dry yellow flower petals. The lighting is soft and warm, highlighting the glowing texture of the skin and the patch.',
  imageSrc:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDy4k0J6DyzUJFDO4MpU-x4hRT0ACajNi2Zf84Q7e1k2jiDrZ_nM2FD8JZrfm3d-QlzrJ1BP6ooVPFp--iRDO6w57ZKsB-DPJbub0mK2kyypIIDyKy-_Jsvds7Dv8jd9JrWuUIPY_GSNcaj2l8twa9DOlgdyiH7lxXn63JfEYfDIOh9MWMCto65LQuoLbizJnCRoJiBBsMSrjeNHIZyv4IIcr_U6w3ko6lV_stCSN9_3tyOMDYV5h6dwXMhEaFQZz0nKHrOVx8x1Vjx',
} as const;

export const HOME_INTRO = {
  headline: 'The Patch.',
  body: 'A concentrated dose of hydration, delivered exactly where you need it most. Formulated with clinical precision for immediate vitality.',
  cta: { label: 'Shop Now', href: '/product' },
} as const;

export const HOME_BENEFITS = [
  {
    label: 'Hydrating Formula',
    body: 'Infused with hyaluronic acid and botanical extracts to lock in moisture and plump the delicate under-eye area.',
  },
  {
    label: 'Biodegradable Film',
    body: 'Crafted from water-soluble hydrogel that dissolves seamlessly, leaving zero waste behind.',
  },
  {
    label: '24-Hour Wear',
    body: 'Designed to adhere perfectly without slipping, providing continuous nourishment day or night.',
  },
] as const;

export const HOME_FEATURE_IMAGE = {
  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQQ8UDI1LN5cXKygVlHP8ABN_NRXJeOHqc4J5A1Wrbdbil-oeUWHNqMX8vwVKM1GHo4QgP3_n9ge1BvpRDyot3XUm7FPu1zprvKjKxlpZWM5nVGYDHKaJcXJKhXkBFPbzuikVyCiJbQT63UXn0NI5eAAM0seii2r3nty6I0uYK7XSZVCA6osedwCDe3Ds-PxSh0xAB5v0Sxl7ppwV0-G676T3MrXJVdoSPv-NiJ96DNK_3z-6t4V_NtJS_WqJhm07mYyZLUkaZHKy-',
  alt: 'A flat lay product photograph featuring luxurious skincare packaging on a textured beige fabric surface.',
} as const;

// ─── Homepage — Why Patina ───────────────────────────────────────────────────

export const HOME_WHY_PATINA = {
  headline: 'Why Patina?',
  subtext: 'Three actives. One purpose. Visibly brighter, firmer eyes — in twenty minutes.',
  ingredients: [
    {
      name: 'Niacinamide',
      type: 'Vitamin B3 · Brightening',
      benefit: 'Clinically proven to reduce dark circles, even skin tone, and strengthen the barrier — at a 5% concentration that actually works.',
      stat: '5% clinical dose',
    },
    {
      name: 'Caffeine',
      type: 'Vasoconstrictor · De-puffing',
      benefit: 'Constricts dilated blood vessels and drains excess fluid fast. Noticeably less puffiness within fifteen minutes of application.',
      stat: 'Visible in 15 minutes',
    },
    {
      name: 'Peptides',
      type: 'Signal Proteins · Anti-Ageing',
      benefit: 'A proprietary blend that signals fibroblasts to rebuild collagen and elastin. Firmer, smoother skin with continued use.',
      stat: 'Collagen boost in 4 weeks',
    },
  ],
  pressLogos: ['Vogue', 'The Cut', 'Byrdie', 'Allure'],
} as const;

// ─── Homepage — How It Works ──────────────────────────────────────────────────

export const HOME_HOW_IT_WORKS = {
  headline: 'How it works.',
  subheadline: 'Apply. Relax. Reveal.',
  steps: [
    {
      number: '01',
      title: 'Apply',
      body: 'On clean, dry skin — peel the patch from its backing and press gently below the eye, smoothing from the inner corner outward.',
    },
    {
      number: '02',
      title: 'Relax',
      body: 'Leave on for 15–20 minutes. Read, breathe, have your coffee. The actives absorb on their own timeline.',
    },
    {
      number: '03',
      title: 'Reveal',
      body: 'Peel away and pat any remaining serum into the skin. The difference is visible — and only gets better with each use.',
    },
  ],
} as const;

export const HOME_TESTIMONIALS = [
  {
    quote:
      'The only product that actually delivers on its promise of an instant refresh. It has become a non-negotiable in my morning routine.',
    attribution: 'Sarah J., Beauty Editor',
  },
  {
    quote:
      'Elegantly packaged and remarkably effective. The hydration lasts well beyond the application.',
    attribution: 'Elena M., Verified Buyer',
  },
] as const;

// ─── Product Page ─────────────────────────────────────────────────────────────

export const PRODUCT = {
  label: 'UNDER-EYE PATCHES',
  name: 'The Luminous Patch',
  tagline: 'Clinical precision. Visible results.',
  price: '$48',
  description:
    'A concentrated dose of hydration and brightening actives, delivered directly to the most delicate skin. Each pair dissolves into the skin, leaving no residue — only results.',
  imageSrc:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCQQ8UDI1LN5cXKygVlHP8ABN_NRXJeOHqc4J5A1Wrbdbil-oeUWHNqMX8vwVKM1GHo4QgP3_n9ge1BvpRDyot3XUm7FPu1zprvKjKxlpZWM5nVGYDHKaJcXJKhXkBFPbzuikVyCiJbQT63UXn0NI5eAAM0seii2r3nty6I0uYK7XSZVCA6osedwCDe3Ds-PxSh0xAB5v0Sxl7ppwV0-G676T3MrXJVdoSPv-NiJ96DNK_3z-6t4V_NtJS_WqJhm07mYyZLUkaZHKy-',
  imageAlt: 'Patina Luminous Patch product flatlay',
} as const;

export const PRODUCT_BENEFITS = [
  { label: 'Hyaluronic Acid', detail: 'Deep-layer hydration' },
  { label: 'Niacinamide', detail: 'Brightens & evens tone' },
  { label: 'Peptide Complex', detail: 'Firms & smooths fine lines' },
  { label: 'Biodegradable', detail: 'Dissolves in 12 weeks' },
] as const;

// ─── Why Patina ───────────────────────────────────────────────────────────────

export const WHY_PATINA = {
  label: 'OUR STORY',
  headline: 'Made with intention.',
  intro:
    'Patina was born from a simple frustration: too many products, too many promises, too little truth. We set out to make one thing — and make it perfectly.',
  sections: [
    {
      heading: 'The obsession with one product.',
      body: 'We spent two years developing a single patch. No serums, no kits, no upsells. Just a formulation refined until it was exactly right. Our under-eye patch delivers clinical actives at concentrations that matter.',
      stat: '2 years of R&D',
    },
    {
      heading: 'Transparent by design.',
      body: 'Every ingredient is listed, explained, and justified. We work with dermatologists and material scientists — not marketers — to validate every claim we make. If it\'s on the label, it\'s proven.',
      stat: 'Full ingredient transparency',
    },
    {
      heading: 'Built to last.',
      body: 'Patina is not a trend. The brand, the formula, and the packaging are designed for longevity — minimal, refine-able, and honest. We plan to be here in twenty years, still making the same patch.',
      stat: 'Built for the long game',
    },
  ],
} as const;

// ─── Ingredients ─────────────────────────────────────────────────────────────

export const INGREDIENTS = [
  {
    name: 'Hyaluronic Acid',
    type: 'Humectant',
    body: 'A naturally-occurring polysaccharide that holds up to 1,000 times its weight in water. Our formula uses three molecular weights for surface, mid-layer, and deep hydration simultaneously.',
    stat: '72-hour moisture retention',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy4k0J6DyzUJFDO4MpU-x4hRT0ACajNi2Zf84Q7e1k2jiDrZ_nM2FD8JZrfm3d-QlzrJ1BP6ooVPFp--iRDO6w57ZKsB-DPJbub0mK2kyypIIDyKy-_Jsvds7Dv8jd9JrWuUIPY_GSNcaj2l8twa9DOlgdyiH7lxXn63JfEYfDIOh9MWMCto65LQuoLbizJnCRoJiBBsMSrjeNHIZyv4IIcr_U6w3ko6lV_stCSN9_3tyOMDYV5h6dwXMhEaFQZz0nKHrOVx8x1Vjx',
  },
  {
    name: 'Niacinamide',
    type: 'Brightening Agent',
    body: 'Vitamin B3 at a clinically active 5% concentration. Reduces the appearance of dark circles by inhibiting melanin transfer, while simultaneously strengthening the skin barrier and reducing fine lines.',
    stat: 'Clinical 5% concentration',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQQ8UDI1LN5cXKygVlHP8ABN_NRXJeOHqc4J5A1Wrbdbil-oeUWHNqMX8vwVKM1GHo4QgP3_n9ge1BvpRDyot3XUm7FPu1zprvKjKxlpZWM5nVGYDHKaJcXJKhXkBFPbzuikVyCiJbQT63UXn0NI5eAAM0seii2r3nty6I0uYK7XSZVCA6osedwCDe3Ds-PxSh0xAB5v0Sxl7ppwV0-G676T3MrXJVdoSPv-NiJ96DNK_3z-6t4V_NtJS_WqJhm07mYyZLUkaZHKy-',
  },
  {
    name: 'Peptide Complex',
    type: 'Anti-Ageing',
    body: 'A proprietary blend of three signal peptides that communicate directly with fibroblasts to stimulate collagen and elastin production. The result is visibly firmer, smoother skin with continued use.',
    stat: 'Collagen synthesis in 4 weeks',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy4k0J6DyzUJFDO4MpU-x4hRT0ACajNi2Zf84Q7e1k2jiDrZ_nM2FD8JZrfm3d-QlzrJ1BP6ooVPFp--iRDO6w57ZKsB-DPJbub0mK2kyypIIDyKy-_Jsvds7Dv8jd9JrWuUIPY_GSNcaj2l8twa9DOlgdyiH7lxXn63JfEYfDIOh9MWMCto65LQuoLbizJnCRoJiBBsMSrjeNHIZyv4IIcr_U6w3ko6lV_stCSN9_3tyOMDYV5h6dwXMhEaFQZz0nKHrOVx8x1Vjx',
  },
  {
    name: 'Centella Asiatica',
    type: 'Soothing Botanical',
    body: 'An ancient healing plant with modern clinical backing. Centella\'s active triterpenoids calm inflammation, accelerate wound healing, and reduce puffiness — making it ideal for the sensitive periorbital area.',
    stat: 'Reduces puffiness in 20 minutes',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQQ8UDI1LN5cXKygVlHP8ABN_NRXJeOHqc4J5A1Wrbdbil-oeUWHNqMX8vwVKM1GHo4QgP3_n9ge1BvpRDyot3XUm7FPu1zprvKjKxlpZWM5nVGYDHKaJcXJKhXkBFPbzuikVyCiJbQT63UXn0NI5eAAM0seii2r3nty6I0uYK7XSZVCA6osedwCDe3Ds-PxSh0xAB5v0Sxl7ppwV0-G676T3MrXJVdoSPv-NiJ96DNK_3z-6t4V_NtJS_WqJhm07mYyZLUkaZHKy-',
  },
] as const;

// ─── Reviews ──────────────────────────────────────────────────────────────────

export const REVIEWS_STATS = [
  { value: '4.9', label: 'Average Rating' },
  { value: '2,400+', label: 'Verified Reviews' },
  { value: '94%', label: 'Would Recommend' },
] as const;

export const REVIEWS = [
  {
    quote:
      'The only product that actually delivers on its promise of an instant refresh. It has become a non-negotiable in my morning routine.',
    name: 'Sarah J.',
    title: 'Beauty Editor',
    verified: true,
  },
  {
    quote:
      'Elegantly packaged and remarkably effective. The hydration lasts well beyond the application.',
    name: 'Elena M.',
    title: 'Verified Buyer',
    verified: true,
  },
  {
    quote:
      'I was sceptical at first. Now I order every month without thinking. The difference in my under-eye area is visible in photographs.',
    name: 'Priya K.',
    title: 'Skincare Enthusiast',
    verified: true,
  },
  {
    quote:
      'Clean ingredients, beautiful packaging, and it actually works. Rare combination.',
    name: 'Claire B.',
    title: 'Verified Buyer',
    verified: true,
  },
] as const;

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const FAQ_SECTIONS = [
  {
    section: 'Usage',
    questions: [
      {
        q: 'How do I apply the patches?',
        a: 'Cleanse the under-eye area and pat dry. Peel the patch from the backing film and apply directly under the eye, smoothing from the inner corner outward. Leave on for 15–20 minutes, then gently remove and pat any remaining serum into the skin.',
      },
      {
        q: 'Can I wear the patches overnight?',
        a: 'The patches are formulated for a 15–20 minute treatment window. Extended wear beyond this is not recommended, as the active delivery is optimised for this period.',
      },
      {
        q: 'How often should I use them?',
        a: 'For best results, we recommend 3–4 times per week. Daily use is safe but the active concentrations are designed to be most effective with recovery time between applications.',
      },
    ],
  },
  {
    section: 'Ingredients',
    questions: [
      {
        q: 'Are the patches suitable for sensitive skin?',
        a: 'Yes. The formulation is fragrance-free, paraben-free, and tested by dermatologists. We recommend a patch test on the inner wrist for 24 hours before first use if you have a history of skin sensitivities.',
      },
      {
        q: 'Are the patches vegan and cruelty-free?',
        a: 'Yes. All ingredients are plant-derived or synthetically produced — no animal products or by-products. We never test on animals, nor do we work with suppliers who do.',
      },
    ],
  },
  {
    section: 'Shipping & Returns',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping is 3–5 business days within the US. Express (1–2 business day) is available at checkout. International orders typically arrive within 7–14 business days depending on destination.',
      },
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day satisfaction guarantee. If you\'re not happy with the product for any reason, contact us and we\'ll arrange a full refund — no questions asked.',
      },
    ],
  },
] as const;

// ─── Ritual ───────────────────────────────────────────────────────────────────

export const RITUAL_STEPS = [
  {
    time: 'MORNING',
    step: '01',
    title: 'Cleanse',
    body: 'Begin with a gentle, pH-balanced cleanser to remove overnight product and prepare a clean canvas for actives.',
  },
  {
    time: 'MORNING',
    step: '02',
    title: 'Apply the Patch',
    body: 'On clean, dry skin, apply the Luminous Patch and leave for 15–20 minutes while you finish your morning routine.',
  },
  {
    time: 'MORNING',
    step: '03',
    title: 'Moisturise & Protect',
    body: 'After removing, pat any remaining serum in. Follow with your moisturiser and SPF — in that order, always.',
  },
  {
    time: 'EVENING',
    step: '01',
    title: 'Double Cleanse',
    body: 'Oil cleanser first to lift SPF and makeup. Then a water-based cleanser to treat the skin itself.',
  },
  {
    time: 'EVENING',
    step: '02',
    title: 'Treat',
    body: 'Evening is when skin repairs. Use any targeted serums — retinol, vitamin C — before the patch if incorporating them.',
  },
  {
    time: 'EVENING',
    step: '03',
    title: 'Seal',
    body: 'A richer moisturiser or facial oil at night helps the repair process and leaves skin soft and supple by morning.',
  },
] as const;

// ─── Gifting ──────────────────────────────────────────────────────────────────

export const GIFT_SETS = [
  {
    name: 'The Edit',
    description: 'One month of the Luminous Patch, presented in our signature cream gift box with tissue wrap.',
    price: '$48',
    contents: ['8 pairs — Luminous Patch', 'Signature cream gift box', 'Tissue wrap & ribbon'],
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQQ8UDI1LN5cXKygVlHP8ABN_NRXJeOHqc4J5A1Wrbdbil-oeUWHNqMX8vwVKM1GHo4QgP3_n9ge1BvpRDyot3XUm7FPu1zprvKjKxlpZWM5nVGYDHKaJcXJKhXkBFPbzuikVyCiJbQT63UXn0NI5eAAM0seii2r3nty6I0uYK7XSZVCA6osedwCDe3Ds-PxSh0xAB5v0Sxl7ppwV0-G676T3MrXJVdoSPv-NiJ96DNK_3z-6t4V_NtJS_WqJhm07mYyZLUkaZHKy-',
  },
  {
    name: 'The Ritual',
    description: 'A curated two-month supply with a personalised handwritten card — for someone who deserves the full experience.',
    price: '$88',
    contents: ['16 pairs — Luminous Patch', 'Signature cream gift box', 'Handwritten card (personalised)', 'Tissue wrap & ribbon'],
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy4k0J6DyzUJFDO4MpU-x4hRT0ACajNi2Zf84Q7e1k2jiDrZ_nM2FD8JZrfm3d-QlzrJ1BP6ooVPFp--iRDO6w57ZKsB-DPJbub0mK2kyypIIDyKy-_Jsvds7Dv8jd9JrWuUIPY_GSNcaj2l8twa9DOlgdyiH7lxXn63JfEYfDIOh9MWMCto65LQuoLbizJnCRoJiBBsMSrjeNHIZyv4IIcr_U6w3ko6lV_stCSN9_3tyOMDYV5h6dwXMhEaFQZz0nKHrOVx8x1Vjx',
  },
] as const;

// ─── Press ────────────────────────────────────────────────────────────────────

export const PRESS_QUOTES = [
  {
    publication: 'Vogue',
    quote: 'The under-eye patch that finally lives up to the hype.',
    issue: 'Beauty Edit, March 2025',
  },
  {
    publication: 'The Cut',
    quote: 'We tested 40 eye patches. This is the only one we kept repurchasing.',
    issue: 'Skin Issue, January 2025',
  },
  {
    publication: 'Byrdie',
    quote: 'Genuinely transformative results in under twenty minutes.',
    issue: 'Best in Beauty, 2024',
  },
] as const;

export const PRESS_LOGOS = ['Vogue', 'The Cut', 'Byrdie', 'Allure', 'Into The Gloss', 'Refinery29'] as const;

// ─── Blog ─────────────────────────────────────────────────────────────────────

export const BLOG_POSTS = [
  {
    category: 'INGREDIENTS',
    date: 'May 12, 2025',
    title: 'The Science of Hyaluronic Acid: Why Molecular Weight Matters',
    excerpt: 'Not all hyaluronic acid is created equal. Here\'s why the weight of the molecule changes everything about how it works.',
    readTime: '6 min read',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy4k0J6DyzUJFDO4MpU-x4hRT0ACajNi2Zf84Q7e1k2jiDrZ_nM2FD8JZrfm3d-QlzrJ1BP6ooVPFp--iRDO6w57ZKsB-DPJbub0mK2kyypIIDyKy-_Jsvds7Dv8jd9JrWuUIPY_GSNcaj2l8twa9DOlgdyiH7lxXn63JfEYfDIOh9MWMCto65LQuoLbizJnCRoJiBBsMSrjeNHIZyv4IIcr_U6w3ko6lV_stCSN9_3tyOMDYV5h6dwXMhEaFQZz0nKHrOVx8x1Vjx',
  },
  {
    category: 'RITUAL',
    date: 'April 28, 2025',
    title: 'Morning Skincare in Under 10 Minutes',
    excerpt: 'A streamlined routine that delivers results without demanding your whole morning. The patch plays a starring role.',
    readTime: '4 min read',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQQ8UDI1LN5cXKygVlHP8ABN_NRXJeOHqc4J5A1Wrbdbil-oeUWHNqMX8vwVKM1GHo4QgP3_n9ge1BvpRDyot3XUm7FPu1zprvKjKxlpZWM5nVGYDHKaJcXJKhXkBFPbzuikVyCiJbQT63UXn0NI5eAAM0seii2r3nty6I0uYK7XSZVCA6osedwCDe3Ds-PxSh0xAB5v0Sxl7ppwV0-G676T3MrXJVdoSPv-NiJ96DNK_3z-6t4V_NtJS_WqJhm07mYyZLUkaZHKy-',
  },
  {
    category: 'SKIN HEALTH',
    date: 'April 10, 2025',
    title: 'The Under-Eye Area: Why It Ages Differently',
    excerpt: 'The periorbital skin is thinner, more vascular, and more vulnerable than anywhere else on the face. Here\'s what that means for your routine.',
    readTime: '8 min read',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy4k0J6DyzUJFDO4MpU-x4hRT0ACajNi2Zf84Q7e1k2jiDrZ_nM2FD8JZrfm3d-QlzrJ1BP6ooVPFp--iRDO6w57ZKsB-DPJbub0mK2kyypIIDyKy-_Jsvds7Dv8jd9JrWuUIPY_GSNcaj2l8twa9DOlgdyiH7lxXn63JfEYfDIOh9MWMCto65LQuoLbizJnCRoJiBBsMSrjeNHIZyv4IIcr_U6w3ko6lV_stCSN9_3tyOMDYV5h6dwXMhEaFQZz0nKHrOVx8x1Vjx',
  },
] as const;

// ─── For Screen Workers ────────────────────────────────────────────────────────

export const SCREEN_WORKERS = {
  label: 'FOR SCREEN WORKERS',
  headline: 'Your screen accumulates hours. So does your under-eye area.',
  body: 'Digital eye strain, blue light exposure, disrupted sleep — the modern workday takes a specific toll on the skin around your eyes. Patina was formulated with this in mind.',
  stats: [
    { value: '11h', label: 'Average daily screen time' },
    { value: '3×', label: 'Faster periorbital ageing vs. pre-digital generations' },
    { value: '20 min', label: 'All it takes to reverse a day\'s worth of strain' },
  ],
  benefits: [
    {
      label: 'REDUCES PUFFINESS',
      body: 'Centella Asiatica and caffeine work together to drain excess fluid and calm inflammation from prolonged screen exposure.',
    },
    {
      label: 'BRIGHTENS DARK CIRCLES',
      body: 'Niacinamide at 5% inhibits melanin transfer — the primary cause of the shadows that form under sleep-deprived eyes.',
    },
    {
      label: 'HYDRATES DEEPLY',
      body: 'Three molecular weights of hyaluronic acid penetrate surface, mid, and deep layers — reversing the dehydration that screen work accelerates.',
    },
  ],
} as const;

// ─── Sustainability ────────────────────────────────────────────────────────────

export const SUSTAINABILITY = {
  label: 'OUR COMMITMENT',
  headline: 'Light by design.',
  subtext: 'We began with the patch. But we considered everything around it too.',
  claims: [
    {
      label: 'BIODEGRADABLE FILM',
      body: 'Our patch substrate is crafted from a water-soluble hydrogel derived from plant cellulose. It dissolves completely in warm water — no microplastics, no residue.',
    },
    {
      label: 'FSC PACKAGING',
      body: 'Every piece of outer packaging uses FSC-certified paperboard from responsibly managed forests. Our inner packaging uses 100% recycled board.',
    },
    {
      label: 'ZERO SINGLE-USE PLASTIC',
      body: 'We eliminated all single-use plastic from our packaging in 2024. The foil sachets protecting each patch are aluminium — infinitely recyclable.',
    },
  ],
  materials: [
    {
      name: 'Hydrogel Film',
      body: 'Made from konjac and carrageenan — seaweed derivatives with a complete biodegradation profile. When discarded in home compost or warm water, the film breaks down to water and CO₂ within weeks, leaving nothing harmful behind.',
      stat: 'Dissolves in 12 weeks',
    },
    {
      name: 'Recycled Board',
      body: 'Our outer carton uses paperboard made from 100% post-consumer recycled fibre, sourced from FSC-certified facilities. It\'s printed with water-based inks and coated with a water-soluble varnish — making the entire box kerbside recyclable.',
      stat: '100% recycled board',
    },
  ],
  pledge: 'We will never choose convenience over conscience.',
  pledgeBody: 'This commitment extends beyond the patch itself. We audit our supply chain annually, publish our full ingredient list without omissions, and will never introduce a material we cannot account for from source to end-of-life. Sustainability is not a marketing position for us — it is a constraint we design within.',
} as const;
