import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Doughpamine Fix!",
  tagline: "Custom cakes, cupcakes, and decorated cookies in Brampton. Pre-order only.",
  category: "Custom cakes and cookies",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://doughpaminefix.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#c47a8a" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Home bakery in Brampton",
    headline: "Get your doughpamine fix today",
    subhead:
      "Custom cakes, cupcakes, and decorated cookies by Aman. Pre-order only, no walk-ins. Order by Instagram DM.",
    images: [
      { src: "/images/post-1.jpg", alt: "Vintage heart cake with burgundy accents" },
      { src: "/images/post-2.jpg", alt: "Pink floral cupcakes" },
      { src: "/images/post-8.jpg", alt: "White vintage heart cake with buttercream florals" },
    ],
    secondaryCta: { label: "See the sweets", href: "#gallery" },
  },

  highlights: [
    "Custom cakes and cupcakes",
    "Decorated cookies",
    "Brampton pre-orders",
    "Orders by Instagram DM",
  ],

  about: {
    title: "Sweet treats, made to order",
    body: [
      "Doughpamine Fix! is a Brampton home bakery by Aman, creating custom cakes, cupcakes, and decorated cookies for birthdays, engagements, bridal showers, and more.",
      "Everything is pre-order only with no walk-ins. Send a DM with your date and idea, or email doughpaminefix@gmail.com.",
    ],
    image: { src: "/images/post-5.jpg", alt: "Maroon mini heart cake" },
  },

  menu: {
    label: "Menu",
    title: "What you can order",
    intro: "Every order is custom. Share your date, size, flavour, and design idea for a quote.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for a quote on your date and design.",
    groups: [
      {
        title: "Custom sweets",
        note: "Quoted for your date and design",
        items: [
          { name: "Custom cakes", description: "Celebration cakes styled to your theme." },
          { name: "Cupcakes", description: "Floral, vintage, and party cupcake sets." },
          { name: "Decorated cookies", description: "Custom sugar cookies for favours and parties." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent bakes",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 1080,
        height: 1265,
        alt: "Vintage heart cake with burgundy accents",
        caption: "Vintage heart cake",
        href: "https://www.instagram.com/p/DeXpNVYJbzB/",
      },
      {
        src: "/images/post-2.jpg",
        width: 1080,
        height: 812,
        alt: "Pink floral cupcakes",
        caption: "Pink floral cupcakes",
        href: "https://www.instagram.com/p/DeXlRFGHwxs/",
      },
      {
        src: "/images/post-3.jpg",
        width: 1080,
        height: 1118,
        alt: "White vintage heart cake with gold pearls",
        caption: "Gold pearl accents",
        href: "https://www.instagram.com/p/DeXU2y3pwpS/",
      },
      {
        src: "/images/post-4.jpg",
        width: 1080,
        height: 851,
        alt: "Custom murder mystery party cookies",
        caption: "Party favour cookies",
        href: "https://www.instagram.com/p/DeXFGq6JAoe/",
      },
      {
        src: "/images/post-5.jpg",
        width: 1080,
        height: 1440,
        alt: "Maroon mini heart cakes",
        caption: "Maroon mini hearts",
        href: "https://www.instagram.com/p/DeDFPQ3Jpgk/",
      },
      {
        src: "/images/post-6.jpg",
        width: 1080,
        height: 828,
        alt: "White rosette cupcakes",
        caption: "White rosette cupcakes",
        href: "https://www.instagram.com/p/Dd-S7e5N-fn/",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1335,
        alt: "Mini heart cake in brown and grey",
        caption: "Mini hearts",
        href: "https://www.instagram.com/p/Dd1z4oCJHgR/",
      },
      {
        src: "/images/post-8.jpg",
        width: 1080,
        height: 1252,
        alt: "White vintage heart cake with buttercream florals",
        caption: "Buttercream florals",
        href: "https://www.instagram.com/p/DdzDBRkJSvu/",
      },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "doughpaminefix",
    embeds: [
      "https://www.instagram.com/p/DeXpNVYJbzB/",
      "https://www.instagram.com/p/DeXlRFGHwxs/",
      "https://www.instagram.com/p/DdzDBRkJSvu/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order by Instagram DM",
    intro:
      "Pre-order only. Tap the button for a starter message with your date, size, flavour, and design idea.",
    dmMessage:
      "Hi Doughpamine Fix! I would like to order.\nDate needed:\nServings or size:\nFlavour:\nDesign idea (I can send an inspo photo):",
    links: [],
    note: "Pre-order only. No walk-ins. You can also email doughpaminefix@gmail.com.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I order?",
      a: "Send an Instagram DM with your date, servings or size, flavour, and design idea. You can also email doughpaminefix@gmail.com.",
    },
    {
      q: "Do you take walk-ins?",
      a: "No. Everything is pre-order only.",
    },
    {
      q: "Where are you based?",
      a: "Doughpamine Fix! is based in Brampton, Ontario.",
    },
    {
      q: "Do you post prices online?",
      a: "Quotes depend on size, design, and date. Share your details by DM for a personal quote.",
    },
  ],

  contact: {
    area: "Brampton, Ontario",
    email: "doughpaminefix@gmail.com",
    socials: [],
  },

  seo: {
    title: "Doughpamine Fix! | Custom cakes and cookies in Brampton",
    description:
      "Custom cakes, cupcakes, and decorated cookies in Brampton, ON. Pre-order only with Doughpamine Fix! by Aman. Order by Instagram DM.",
    keywords: [
      "custom cakes Brampton",
      "cupcakes Brampton",
      "decorated cookies Brampton",
      "Doughpamine Fix",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
