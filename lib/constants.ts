import { Facebook, Instagram, LucideIcon } from "lucide-react";

// Site Metadata
export const SITE_TITLE = 'Hadramout';
export const SITE_TAGLINE = 'Best Chicken n Fish in Toledo';
export const SITE_URL = 'https://Twospoons.com';

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Contact', href: '/#contact' },

];
export const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Contact', href: '/#contact' },

];

// Hero Section
// export const HERO_HEADING = 'Fresh, Crispy & Made to Order';
// export const HERO_SUBTEXT = 'Satisfy your cravings with Toledo’s favorite fried chicken and seafood — hot, delicious, and ready when you are';
// export const HERO_CTA_TEXT = 'Order Now';



//Best selling section
export const Best_Selling = 'Popular Items';
// export const Best_Selling_subtext = 'Discover our most popular dishes that keep customers coming back.';

export const BESTSELLING = [
  {
    title: "Haneeth Chicken",
    description: "Flavored rice with saffron spices with baked crispy and tender chicken.",
    Image: "/haneeth-chicken.webp",
    price: "$14.99"
  },
  {
    title: "Grilled Pompano Fish",
    description: "Flavored rice with saffron spices and butterfly fish cut topped with Adeni red sauce.",
    Image: "/grilled-pompano-fish.webp",
    price: "$19.99"
  },
  {
    title: "Mandi Lamb",
    description: "Flavored rice with saffron spices topped with slow-cooked meat.",
    Image: "/mandi-lamb.webp",
    price: "$24.99"
  },
   {
    title: "Haneeth Lamb",
    description: "Flavored rice with saffron spices with baked crispy and tender meat.",
    Image: "/haneeth-lamb.webp",
    price: "$24.99"
  },
]




// About Section
export const ABOUT_HEADING = 'Authentic Yemeni Cuisine Since 2024';
export const ABOUT_SUBTEXT = 'From humble beginnings to becoming Toledo\'s premier halal dining destination, our story is one of passion, tradition, and unwavering commitment to authentic Middle Eastern cuisine';
export const ABOUT_CONTENT = `Founded by the Al-Hadhrami family, our restaurant brings the rich culinary traditions of Yemen's Hadramout region to life. Every dish tells a story of ancient spice routes, family recipes, and the warm hospitality that defines Yemeni culture.

From our signature Mandi and Zurbian to traditional Fahsah and fresh Yemeni bread, we use only the finest ingredients and time-honored cooking methods to ensure an authentic dining experience.`;
export const ABOUT = [
  {
    title: '5000+',
    description: 'Happy Customers',

  },
  {
    title: '4.9',
    description: 'Average Rating',

  },
  {
    title: '50+',
    description: 'Signature Dishes',

  },
]
// Contact Section
export const CONTACT_HEADING = 'Get in Touch';
export const CONTACT_SUBTEXT = 'We would love to hear from you! Reach out with any questions or feedback.';
export const CONTACT_EMAIL = 'hadramouttoledo@gmail.com';
export const CONTACT_PHONE = '+1 419-441-0029';
export const CONTACT_ADDRESS = '3200 N Holland Sylvania Rd, Toledo, OH 43615-1408';


// Testimonials Section

export const TESTIMONIALS = [
  {
    quote: "Amazing food & service.",
    author: "Brett C.",
    role: "Regular Customer"
  },
  {
    quote: "DELICIOUS - some of the best food I have had in Toledo. Had the Zurbian Chicken and Haneeth Lamb. The meat fell off the bones and melted in the mouth! And don't skip the chai if you are a fan of tea.",
    author: "Hayley H.",
    role: "Food Blogger"
  },
  {
    quote: "I live nearby and this place smells fantastic everyday. great food, tender meat, friendly staff, highly recommend.",
    author: "Joseph M.",
    role: "Local Resident"
  }
];

// menu list
export const MENU_CATEGORIES = [
  {
    category: "Appetizers",
    items: [
      {
        title: "Hummus",
        description: "Blended chickpeas with tahini, lemon and garlic served with bread.",
        price: 5.99,
        Image: "/hummus.png"
      },
      {
        title: "Baba Ghannoush",
        description: "Eggplant mixed with tahini, lemon, and garlic served with pita bread.",
        price: 5.99,
        Image: "/baba-ghannoush.png"
      },
      {
        title: "House Salad",
        description: "A mixture of lettuce, tomatoes, and cucumber with homemade dressing.",
        price: 6.99,
        Image: "/house-salad.png"
      },
      {
        title: "Fattoush",
        description: "A mixture of lettuce, tomatoes and cucumber topped with fried pita bread and pomegranate dressing.",
        price: 8.99,
        Image: "/fattoush.png"
      },
      {
        title: "Mediterranean Plate",
        description: "Hummus, Baba Ghannoush and House Salad combined on one plate.",
        price: 8.99,
        Image: "/mediterranean-plate.png"
      },
      {
        title: "Lamb Broth Soup (Maraq)",
        description: "Traditional Yemeni-style lamb broth soup.",
        price: 3.99,
        Image: "/lamb-broth-soup.png"
      }
    ]
  },
  {
    category: "Kids Meals",
    items: [
      {
        title: "Chicken Tenders",
        description: "Served with fries.",
        price: 7.99,
        Image: "/chicken-tenders.png"
      },
      {
        title: "Chicken Nuggets",
        description: "Served with fries.",
        price: 7.99,
        Image: "/chicken-nuggets.png"
      }
    ]
  },
  {
    category: "Authentic Entrees",
    items: [
      {
        title: "Haneeth",
        description: "Prepared with our selection of lamb cooked slowly with special spices.",
        price: { lamb: 24.99, chicken: 14.99 },
        Image: "/haneeth.png"
      },
      {
        title: "Mandi",
        description: "Flavored rice with saffron spices served with slow-cooked meat.",
        price: { lamb: 24.99, chicken: 14.99 },
        Image: "/mandi.png"
      },
      {
        title: "Zurbiun",
        description: "Layers of lightly spiced rice served with special seasoned meat and saffron.",
        price: { lamb: 24.99, chicken: 14.99 },
        Image: "/zurbiun.png"
      },
      {
        title: "Grilled Chicken",
        description: "Marinated half grilled chicken served with mandi rice.",
        price: 15.99,
        Image: "/grilled-chicken.png"
      },
      {
        title: "Fahsa",
        description: "Shredded lamb cooked with potatoes, tomatoes and spices. Served sizzling hot with tannour bread.",
        price: 19.99,
        Image: "/fahsa.png"
      },
      {
        title: "Grilled Pompano Fish",
        description: "Prepared with saffron spices and butterfly fish topped with Arabic red sauce.",
        price: 19.99,
        Image: "/pomfret-fish.png"
      }
    ]
  },
  {
    category: "Special Entrees",
    categoryDescription: "Family special comes with one side, choice of salad, hummus, or baba ghannoush. Party special comes with two sides, choice of salad, hummus, or baba ghannoush.",
    items: [
      {
        title: "Family Lamb Special",
        description: "Family choice of Mandi or Haneeth. Lamb served with rice and soup. Serves 2-4 people.",
        price: 48,
        Image: "/family-lamb.png"
      },
      {
        title: "Party Lamb Special",
        description: "Lamb served with rice and soup. Serves 4-6 people.",
        price: 98,
        Image: "/party-lamb.png"
      },
      {
        title: "Family Chicken Special",
        description: "Choice of Mandi or Haneeth chicken served with rice and soup. Serves 2-4 people.",
        price: 28,
        Image: "/family-chicken.png"
      },
      {
        title: "Party Chicken Special",
        description: "Choice of Mandi or Haneeth chicken served with rice and soup. Serves 4-6 people.",
        price: 55,
        Image: "/party-chicken.png"
      },
      {
        title: "Family Fish Special",
        description: "Grilled Pompano Fish. Serves 2-4 people.",
        price: 38,
        Image: "/family-fish.png"
      },
      {
        title: "Party Fish Special",
        description: "Grilled Pompano Fish. Serves 4-6 people.",
        price: 85,
        Image: "/party-fish.png"
      },
      {
        title: "Party Mixed Meat Special",
        description: "Your choice of Lamb, Chicken, and Fish. Serves 4-6 people.",
        price: 40,
        Image: "/party-mixed-meat.png"
      }
    ]
  },
  {
    category: "Drinks",
    categoryDescription: "Refreshing beverages to complement your meal. Pots are only available for dine-in.",
    items: [
      { title: "Vimto", price: 2.99, Image: "/vimto.png" },
      { title: "Lemonade", price: 3.99, Image: "/lemonade.png" },
      { title: "Yogurt Drink (Ayran)", price: 3.99, Image: "/ayran.png" },
      { title: "Canned Soft Drink", price: 1.99, Image: "/soft-drink.png" },
      { title: "Water", price: 1.00, Image: "/water.png" },
      { title: "Adeni Chai (Tea)", description: "", price: { cup: 3.50, pot: 5.99 }, Image: "/adeni-tea.png" },
      { title: "Yemeni Black Tea", description: "", price: { cup: 2.50, pot: 4.99 }, Image: "/yemeni-tea.png" }
    ]
  },
  {
    category: "Dessert",
    items: [
      {
        title: "Masoub",
        description: "Milk and chopped bread mixed with bananas, cream, honey, and black seeds.",
        price: 10.99,
        Image: "/masoub.png"
      },
      {
        title: "Areekah",
        description: "Milk and chopped bread mixed with dates, cream, honey, and dates.",
        price: 10.99,
        Image: "/areekah.png"
      },
      {
        title: "Cheesecake",
        description: "With toppings, choice of Pistachio, Chocolate, Lotus, and Dark Chocolate.",
        Image: "/cheesecake.png"
      }
    ]
  },
  {
    category: "Sides",
    items: [
      { title: "Rice", price: 3.99, Image: "/rice.png" },
      { title: "Tannour Bread", price: 1.99, Image: "/tannour-bread.png" },
      { title: "French Fries", price: 2.99, Image: "/fries.png" },
      { title: "Sahwaq Sauce", price: 0.50, Image: "/soup.png" }
    ]
  }
];


// Footer Info
export const FOOTER_TEXT = '© 2025 Hadramout, serving the best Yemeni food  In Toledo.';

export const SOCIAL_LINKS: { name: string; url: string; icon: LucideIcon }[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/p/Hadramout-Restaurant-at-Toledo-61559666712093/',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hadramouttoledo/?hl=en',
    icon: Instagram,
  },
  
];


//MENU PAGE


