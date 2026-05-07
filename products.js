const products = [
  {
    id: "LAT-BADEE-00001",
    slug: "badee-al-oud-sublime",
    name: "Badee Al Oud Sublime",

    price: 3800,
    oldPrice: 4200,
    costPrice: 2200,
    currency: "KES",

    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",

    collection: "Best Sellers",
    status: "active",
    availability: "in_stock",

    image: "images/badeesublime1.jpg",
    imageAlt: "Badee Al Oud Sublime Lattafa perfume Kenya",

    images: [
      "images/badeesublime1.jpg",
      "images/badeesublime2.jpg",
      "images/badeesublime3.jpg",
      "images/badeesublime4.jpg"
    ],

    description:
      "A woody aromatic fragrance with apple, litchi and rose opening, followed by plum and jasmine, and a warm base of vanilla, moss and patchouli.",

    gtin: "6290360593142",
    stock: 8,
    weight: "100ml",

    rating: 4.8,
    reviews: 124,

    tags: ["oud", "sweet", "woody"],
    keywords: ["oud perfume kenya", "lattafa sublime", "arabic perfume nairobi"],

    seoTitle: "Badee Al Oud Sublime Perfume Kenya - Lattafa",
    seoDescription:
      "Long-lasting woody Arabic fragrance with sweet vanilla and amber notes available in Kenya.",

    recommendations: ["LAT-KHAMRAH-00011", "LAT-YARA-00002", "LAT-NEBRAS-00012"]
  },

  {
    id: "LAT-YARA-00002",
    slug: "yara-perfume",
    name: "Yara",

    price: 2800,
    oldPrice: 3500,
    costPrice: 1500,
    currency: "KES",

    category: "Arabic",
    gender: "Women",
    brand: "Lattafa",

    collection: "Women Best Sellers",
    status: "active",
    availability: "in_stock",

    image: "images/yara1.jpg",
    imageAlt: "Lattafa Yara perfume Kenya",

    images: [
      "images/yara1.jpg",
      "images/yara2.jpg",
      "images/yara3.jpg",
      "images/yara4.jpg"
    ],

    description:
      "A soft floral fragrance with orchid, heliotrope, tangerine, tropical fruits and vanilla musk.",

    gtin: null,
    stock: 10,
    weight: "100ml",

    rating: 4.5,
    reviews: 80,

    tags: ["floral", "sweet", "vanilla"],
    keywords: ["yara perfume kenya", "lattafa women perfume"],

    seoTitle: "Yara Perfume for Women Kenya - Lattafa",
    seoDescription: "Soft sweet floral fragrance for everyday elegance in Kenya.",

    recommendations: ["LAT-YARACANDY-00003", "LAT-HERCONF-00005", "LAT-ECLAIRE-00004"]
  },

  {
    id: "LAT-YARACANDY-00003",
    slug: "yara-candy",
    name: "Yara Candy",

    price: 2800,
    oldPrice: 3500,
    costPrice: 1500,
    currency: "KES",

    category: "Arabic",
    gender: "Women",
    brand: "Lattafa",

    collection: "Women Best Sellers",
    status: "active",
    availability: "in_stock",

    image: "images/yaracandy1.jpg",
    imageAlt: "Lattafa Yara Candy perfume Kenya",

    images: [
      "images/yaracandy1.jpg",
      "images/yaracandy2.jpg",
      "images/yaracandy3.jpg",
      "images/yaracandy4.jpg"
    ],

    description:
      "A sweet fruity fragrance with green mandarin, blackcurrant, gardenia, strawberry candy and vanilla syrup.",

    gtin: null,
    stock: 15,
    weight: "100ml",

    rating: 4.6,
    reviews: 60,

    tags: ["sweet", "fruity", "candy"],
    keywords: ["yara candy kenya", "lattafa sweet perfume"],

    seoTitle: "Yara Candy Perfume Kenya - Lattafa",
    seoDescription: "Sweet candy-inspired fragrance for women in Kenya.",

    recommendations: ["LAT-YARA-00002", "LAT-ECLAIRE-00004", "LAT-NEBRAS-00012"]
  },

  {
    id: "LAT-ECLAIRE-00004",
    slug: "eclaire-perfume",
    name: "Eclaire",

    price: 3800,
    oldPrice: 4500,
    costPrice: 2000,
    currency: "KES",

    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",

    collection: "Unisex Picks",
    status: "active",
    availability: "in_stock",

    image: "images/eclaire1.jpg",
    imageAlt: "Lattafa Eclaire perfume Kenya",

    images: [
      "images/eclaire1.jpg",
      "images/eclaire2.jpg",
      "images/eclaire3.jpg",
      "images/eclaire4.jpg"
    ],

    description:
      "A gourmand fragrance with caramel, milk, sugar, honey, vanilla and praline musk.",

    gtin: null,
    stock: 20,
    weight: "100ml",

    rating: 4.7,
    reviews: 45,

    tags: ["sweet", "gourmand", "vanilla"],
    keywords: ["eclaire perfume kenya", "lattafa gourmand"],

    seoTitle: "Eclaire Perfume Kenya - Lattafa",
    seoDescription: "Creamy sweet gourmand fragrance for everyday wear.",

    recommendations: ["LAT-YARA-00002", "LAT-NEBRAS-00012", "LAT-HERCONF-00005"]
  },

  {
    id: "LAT-HERCONF-00005",
    slug: "her-confession",
    name: "Her Confession",

    price: 4200,
    oldPrice: 4500,
    costPrice: 2500,
    currency: "KES",

    category: "Arabic",
    gender: "Women",
    brand: "Lattafa",

    collection: "Women Luxury",
    status: "active",
    availability: "in_stock",

    image: "images/herconfession1.jpg",
    imageAlt: "Lattafa Her Confession perfume Kenya",

    images: [
      "images/herconfession1.jpg",
      "images/herconfession2.jpg",
      "images/herconfession3.jpg",
      "images/herconfession4.jpg"
    ],

    description:
      "A warm floral fragrance with cinnamon, jasmine, tuberose, vanilla and musk.",

    gtin: null,
    stock: 12,
    weight: "100ml",

    rating: 4.6,
    reviews: 30,

    tags: ["floral", "warm", "mystery"],
    keywords: ["her confession kenya"],

    seoTitle: "Her Confession Perfume Kenya - Lattafa",
    seoDescription: "Elegant warm floral fragrance for women.",

    recommendations: ["LAT-YARA-00002", "LAT-ECLAIRE-00004", "LAT-NEBRAS-00012"]
  },

  {
    id: "LAT-HISCONF-00006",
    slug: "his-confession",
    name: "His Confession",

    price: 3900,
    oldPrice: 4500,
    costPrice: 2200,
    currency: "KES",

    category: "Arabic",
    gender: "Men",
    brand: "Lattafa",

    collection: "Men Luxury",
    status: "active",
    availability: "in_stock",

    image: "images/hisconfession1.jpg",
    imageAlt: "Lattafa His Confession perfume Kenya",

    images: [
      "images/hisconfession1.jpg",
      "images/hisconfession2.jpg",
      "images/hisconfession3.jpg",
      "images/hisconfession4.jpg"
    ],

    description:
      "A masculine fragrance with cinnamon, lavender, vanilla, tonka and amber.",

    gtin: null,
    stock: 18,
    weight: "100ml",

    rating: 4.5,
    reviews: 25,

    tags: ["woody", "spicy", "masculine"],
    keywords: ["his confession kenya"],

    seoTitle: "His Confession Perfume Kenya - Lattafa",
    seoDescription: "Bold masculine fragrance for modern men.",

    recommendations: ["LAT-KHAMRAH-00011", "LAT-NEBRAS-00012", "LAT-BADEE-00001"]
  },

  {
    id: "LAT-ANA-00007",
    slug: "ana-abiyedh-rouge",
    name: "Ana Abiyedh Rouge",

    price: 3000,
    oldPrice: 3500,
    costPrice: 1800,
    currency: "KES",

    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",

    collection: "Unisex Picks",
    status: "active",
    availability: "in_stock",

    image: "images/anarouge1.jpg",
    imageAlt: "Ana Abiyedh Rouge Lattafa perfume Kenya",

    images: [
      "images/anarouge1.jpg",
      "images/anarouge2.jpg",
      "images/anarouge3.jpg",
      "images/anarouge4.jpg"
    ],

    description:
      "A warm elegant fragrance with pear, caramel, jasmine, amber and musk.",

    gtin: null,
    stock: 100,
    weight: "100ml",

    rating: 4.5,
    reviews: 40,

    tags: ["amber", "musky", "sweet"],
    keywords: ["ana abiyedh rouge kenya"],

    seoTitle: "Ana Abiyedh Rouge Perfume Kenya - Lattafa",
    seoDescription: "Warm amber-musky Arabic fragrance.",

    recommendations: ["LAT-KHAMRAH-00011", "LAT-NEBRAS-00012", "LAT-YARA-00002"]
  },

  {
    id: "LAT-ANA-00008",
    slug: "ana-abiyedh-coral",
    name: "Ana Abiyedh Coral",

    price: 2800,
    oldPrice: 3500,
    costPrice: 1700,
    currency: "KES",

    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",

    collection: "Fresh Picks",
    status: "active",
    availability: "in_stock",

    image: "images/anacoral1.jpg",
    imageAlt: "Ana Abiyedh Coral perfume Kenya",

    images: [
      "images/anacoral1.jpg",
      "images/anacoral2.jpg",
      "images/anacoral3.jpg",
      "images/anacoral4.jpg"
    ],

    description:
      "A tropical fruity fragrance with watermelon, peach, coconut, vanilla and musk.",

    gtin: "6290362341826",
    stock: 3,
    weight: "100ml",

    rating: 4.4,
    reviews: 55,

    tags: ["fruity", "tropical", "fresh"],
    keywords: ["ana abiyedh coral kenya"],

    seoTitle: "Ana Abiyedh Coral Kenya - Lattafa",
    seoDescription: "Fresh tropical fruity fragrance."
  },

  {
    id: "LAT-AMETHYST-00009",
    slug: "badee-al-oud-amethyst",
    name: "Badee Al Oud Amethyst",

    price: 2700,
    oldPrice: 3500,
    costPrice: 1600,
    currency: "KES",

    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",

    collection: "Best Sellers",
    status: "active",
    availability: "in_stock",

    image: "images/amethyst1.jpg",
    imageAlt: "Lattafa Amethyst perfume Kenya",

    images: [
      "images/amethyst1.jpg",
      "images/amethyst2.jpg",
      "images/amethyst3.jpg",
      "images/amethyst4.jpg"
    ],

    description:
      "A rich rose-oud fragrance with vanilla, amber and jasmine.",

    gtin: null,
    stock: 10,
    weight: "100ml",

    rating: 4.6,
    reviews: 90,

    tags: ["rose", "oud", "amber"],
    keywords: ["amethyst lattafa kenya"],

    seoTitle: "Badee Al Oud Amethyst Kenya - Lattafa",
    seoDescription: "Elegant rose oud fragrance."
  },

  {
    id: "LAT-KHAMDUKHAN-00010",
    slug: "khamrah-dukhan",
    name: "Khamrah Dukhan",

    price: 3800,
    oldPrice: 4200,
    costPrice: 2400,
    currency: "KES",

    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",

    collection: "Luxury Picks",
    status: "active",
    availability: "in_stock",

    image: "images/khamrahdukhan1.jpg",
    imageAlt: "Lattafa Khamrah Dukhan perfume Kenya",

    images: [
      "images/khamrahdukhan1.jpg",
      "images/khamrahdukhan2.jpg",
      "images/khamrahdukhan3.jpg",
      "images/khamrahdukhan4.jpg"
    ],

    description:
      "A smoky spicy fragrance with tobacco, cedarwood, amber and patchouli.",

    gtin: null,
    stock: 6,
    weight: "100ml",

    rating: 4.8,
    reviews: 70,

    tags: ["smoky", "spicy", "amber"],
    keywords: ["khamrah dukhan kenya"],

    seoTitle: "Khamrah Dukhan Kenya",
    seoDescription: "Smoky deep spicy fragrance."
  },

  {
    id: "LAT-KHAMRAH-00011",
    slug: "khamrah",
    name: "Khamrah",

    price: 3800,
    oldPrice: 4200,
    costPrice: 2400,
    currency: "KES",

    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",

    collection: "Best Sellers",
    status: "active",
    availability: "in_stock",

    image: "images/khamrah1.jpg",
    imageAlt: "Lattafa Khamrah perfume Kenya",

    images: [
      "images/khamrah1.jpg",
      "images/khamrah2.jpg",
      "images/khamrah3.jpg",
      "images/khamrah4.jpg"
    ],

    description:
      "A sweet spicy gourmand fragrance with vanilla, cinnamon and praline.",

    gtin: null,
    stock: 20,
    weight: "100ml",

    rating: 4.9,
    reviews: 180,

    tags: ["sweet", "gourmand", "woody"],
    keywords: ["khamrah kenya"],

    seoTitle: "Lattafa Khamrah Kenya",
    seoDescription: "Sweet spicy gourmand fragrance."
  },

  {
    id: "LAT-NEBRAS-00012",
    slug: "nebras",
    name: "Nebras",

    price: 3500,
    oldPrice: 4000,
    costPrice: 2200,
    currency: "KES",

    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",

    collection: "Sweet Picks",
    status: "active",
    availability: "in_stock",

    image: "images/nebras1.jpg",
    imageAlt: "Lattafa Nebras perfume Kenya",

    images: [
      "images/nebras1.jpg",
      "images/nebras2.jpg",
      "images/nebras3.jpg",
      "images/nebras4.jpg"
    ],

    description:
      "A warm sweet fragrance with berries, vanilla, cacao and amber.",

    gtin: null,
    stock: 14,
    weight: "100ml",

    rating: 4.6,
    reviews: 95,

    tags: ["sweet", "vanilla", "amber"],
    keywords: ["nebras kenya"],

    seoTitle: "Lattafa Nebras Kenya",
    seoDescription: "Warm sweet gourmand fragrance."
  },
  
    {
  id: "LAT-ASAD-00156",
  slug: "asad-100ml",
  name: "Asad 100ml",

  price: 2700,
  oldPrice: 3500,
  costPrice: null,
  currency: "KES",

  category: "Arabic",
  gender: "Unisex",
  brand: "Lattafa",
  collection: "Best Sellers",
  status: "active",
  availability: "in_stock",

  image: "images/asad-100ml.jpg",

  images: [
    "images/asad-100ml.jpg",
    "images/asad-100ml-2.jpg",
    "images/asad-100ml-3.jpg",
    "images/asad-100ml-4.jpg"
  ],

  imageAlt: "Lattafa Asad 100ml perfume Kenya",

  description:
    "Lattafa ASAD is a vanilla-based fragrance for men and women. Rich, deep, and suitable for all occasions with a warm Arabian oud character.",

  gtin: null,
  stock: 21,

  rating: 4.6,
  reviews: 25,

  tags: ["vanilla", "oud", "warm"],
  keywords: ["asad perfume kenya", "lattafa asad", "arabic perfume kenya"],

  seoTitle: "Lattafa Asad 100ml Perfume Kenya",
  seoDescription:
    "Rich vanilla and oud Arabic fragrance suitable for all occasions in Kenya."
},

  

  {
    id: "LAT-ASAD-00265",
    slug: "asad-elixir",
    name: "Asad Elixir",
    price: 3800,
    oldPrice: 4200,
    costPrice: null,
    currency: "KES",
    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",
    collection: "New Arrivals",
    status: "active",
    image: "images/asad-elixir.jpg",
    images: [
      "images/asad-elixir-1.jpg",
      "images/asad-elixir-2.jpg",
      "images/asad-elixir-3.jpg"
    ],
    description:
      "A deeper evolution of Asad with spicy pink pepper, saffron, tobacco, vanilla and smoky woody base notes.",
    gtin: null,
    stock: null,
    rating: null,
    reviews: null,
    tags: ["spicy", "smoky", "woody"],
    availability: "in_stock"
  },

  {
    id: "LAT-ANGHAM-00270",
    slug: "angham-perfume",
    name: "Angham Perfume",
    price: 3900,
    oldPrice: 4500,
    costPrice: null,
    currency: "KES",
    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",
    collection: "New Arrivals",
    status: "active",
    image: "images/angham-1.jpg",
    images: [
      "images/angham-1.jpg",
      "images/angham-2.jpg",
      "images/angham-3.jpg"
    ],
    description:
      "A musical-inspired fragrance blending ginger, mandarin, pink pepper, lavender, praline, cacao, vanilla and amber.",
    gtin: null,
    stock: null,
    rating: null,
    reviews: null,
    tags: ["sweet", "warm", "floral"],
    availability: "in_stock"
  },

  {
    id: "LAT-NEBRAS-00274",
    slug: "nebras-elixir",
    name: "Nebras Elixir",
    price: 4000,
    oldPrice: 4500,
    costPrice: null,
    currency: "KES",
    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",
    collection: "New Arrivals",
    status: "active",
    image: "images/nebras-elixir.jpg",
    images: [
      "images/nebras-elixir-1.jpg",
      "images/nebras-elixir-2.jpg",
      "images/nebras-elixir-3.jpg"
    ],
    description:
      "A sweet creamy fragrance with candy, milk, cream, heliotrope, sugar cane, vanilla and musk.",
    gtin: null,
    stock: null,
    rating: null,
    reviews: null,
    tags: ["sweet", "creamy", "vanilla"],
    availability: "in_stock"
  },

  {
    id: "LAT-ECLAIRE-00278",
    slug: "eclaire-pistachio",
    name: "Eclaire Pistach",
    price: 3800,
    oldPrice: 4200,
    costPrice: null,
    currency: "KES",
    category: "Arabic",
    gender: "Women",
    brand: "Lattafa",
    collection: "Women Picks",
    status: "active",
    image: "images/eclaire-pistach.jpg",
    images: [
      "images/eclaire-pistach-1.jpg",
      "images/eclaire-pistach-2.jpg",
      "images/eclaire-pistach-3.jpg"
    ],
    description:
      "Creamy pistachio gourmand fragrance with coconut, cacao, whipped cream, vanilla and musk.",
    gtin: null,
    stock: null,
    rating: null,
    reviews: null,
    tags: ["gourmand", "sweet", "creamy"],
    availability: "in_stock"
  },

  {
    id: "LAT-NOBLE-00283",
    slug: "badee-al-oud-noble-blush",
    name: "Badee Al Oud Noble Blush",
    price: 3600,
    oldPrice: 4300,
    costPrice: null,
    currency: "KES",
    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",
    collection: "Best Sellers",
    status: "active",
    image: "images/noble-blush.jpg",
    images: [
      "images/noble-blush-1.jpg",
      "images/noble-blush-2.jpg",
      "images/noble-blush-3.jpg"
    ],
    description:
      "A soft dreamy fragrance with rose milk, almond, meringue, vanilla, musk and sandalwood.",
    gtin: null,
    stock: null,
    rating: null,
    reviews: null,
    tags: ["floral", "sweet", "soft"],
    availability: "in_stock"
  },

  {
    id: "LAT-MAYAR-00288",
    slug: "mayar-cherry-intense",
    name: "Mayar Cherry Intense",
    price: 2900,
    oldPrice: 3200,
    costPrice: null,
    currency: "KES",
    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",
    collection: "Women Picks",
    status: "active",
    image: "images/mayar-cherry.jpg",
    images: [
      "images/mayar-cherry-1.jpg",
      "images/mayar-cherry-2.jpg",
      "images/mayar-cherry-3.jpg"
    ],
    description:
      "A cherry gourmand fragrance with strawberry, bergamot, cherry jam, cacao, vanilla, amber and patchouli.",
    gtin: null,
    stock: null,
    rating: null,
    reviews: null,
    tags: ["fruity", "sweet", "gourmand"],
    availability: "in_stock"
  },

  {
    id: "LAT-YARAMOI-00292",
    slug: "yara-moi",
    name: "Yara Moi",
    price: 2800,
    oldPrice: 3500,
    costPrice: null,
    currency: "KES",
    category: "Arabic",
    gender: "Women",
    brand: "Lattafa",
    collection: "Women Best Sellers",
    status: "active",
    image: "images/yara-moi.jpg",
    images: [
      "images/yara-moi-1.jpg",
      "images/yara-moi-2.jpg",
      "images/yara-moi-3.jpg"
    ],
    description:
      "Elegant floral fragrance with pear, blackcurrant, jasmine, almond, vanilla, cashmeran and patchouli.",
    gtin: null,
    stock: null,
    rating: null,
    reviews: null,
    tags: ["floral", "sweet", "elegant"],
    availability: "in_stock"
  },

  {
    id: "LAT-FAKHAR-00296",
    slug: "fakhar-women",
    name: "Fakhar Women",
    price: 3100,
    oldPrice: 3500,
    costPrice: null,
    currency: "KES",
    category: "Arabic",
    gender: "Women",
    brand: "Lattafa",
    collection: "Women Luxury",
    status: "active",
    image: "images/fakhar-women.jpg",
    images: [
      "images/fakhar-women-1.jpg",
      "images/fakhar-women-2.jpg",
      "images/fakhar-women-3.jpg"
    ],
    description:
      "A fruity floral fragrance with lily, pomegranate, jasmine, rose, vanilla, musk and sandalwood.",
    gtin: null,
    stock: null,
    rating: null,
    reviews: null,
    tags: ["floral", "fresh", "elegant"],
    availability: "in_stock"
  },

  {
    id: "LAT-ANSAM-00300",
    slug: "ansaam-gold",
    name: "Ansaam Gold",
    price: 3800,
    oldPrice: 4500,
    costPrice: null,
    currency: "KES",
    category: "Arabic",
    gender: "Unisex",
    brand: "Lattafa",
    collection: "Luxury Picks",
    status: "active",
    image: "images/ansaam-gold.jpg",
    images: [
      "images/ansaam-gold-1.jpg",
      "images/ansaam-gold-2.jpg",
      "images/ansaam-gold-3.jpg"
    ],
    description:
      "A luxurious warm fragrance with mandarin, pear, jasmine, rose, vanilla, musk and raspberry.",
    gtin: null,
    stock: null,
    rating: null,
    reviews: null,
    tags: ["sweet", "luxury", "warm"],
    availability: "in_stock"
  }
];


