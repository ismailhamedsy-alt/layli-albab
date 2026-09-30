import { MenuItem, RestaurantConfig } from '../types/menu';
import heroImg from '../assets/images/layali_albab_hero_1790708328731.jpg';
import shawarmaImg from '../assets/images/shawarma_dish_1790708343415.jpg';
import broastedImg from '../assets/images/broasted_crispy_1790708355370.jpg';
import burgerImg from '../assets/images/gourmet_burger_1790708367565.jpg';

// Dedicated generated food images matching specific items
import beefShawarmaImg from '../assets/images/beef_shawarma_plate_1790755432393.jpg';
import escalopeImg from '../assets/images/escalope_arabi_dish_1790755446057.jpg';
import fajitaImg from '../assets/images/fajita_sandwich_1790755457051.jpg';
import crispyZingerImg from '../assets/images/crispy_zinger_sandwich_1790755468174.jpg';
import friesPlateImg from '../assets/images/french_fries_portion_1790755482934.jpg';

// Newly generated beverage and sandwich images
import energyDrinkImg from '../assets/images/chilled_energy_drink_1790771210808.jpg';
import mirindaOrangeImg from '../assets/images/mirinda_orange_soda_1790771224826.jpg';
import sodaBottlesImg from '../assets/images/cold_soda_bottles_1790771238379.jpg';
import pomegranateJuiceImg from '../assets/images/fresh_pomegranate_juice_1790771251198.jpg';
import shawarmaWrapImg from '../assets/images/shawarma_sandwich_wrap_1790771262810.jpg';

export {
  heroImg,
  shawarmaImg,
  broastedImg,
  burgerImg,
  beefShawarmaImg,
  escalopeImg,
  fajitaImg,
  crispyZingerImg,
  friesPlateImg,
  energyDrinkImg,
  mirindaOrangeImg,
  sodaBottlesImg,
  pomegranateJuiceImg,
  shawarmaWrapImg,
};

// High-resolution realistic images for specific sauce and sandwich items
const garlicSauceImg = 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop&q=80';
const mayoImg = 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&auto=format&fit=crop&q=80';
const cannedSodaImg = 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80';
const potatoSandwichImg = 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&auto=format&fit=crop&q=80';
const potatoSamoonImg = 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop&q=80';

export const DEFAULT_RESTAURANT_CONFIG: RestaurantConfig = {
  name: 'مطعم ليالي الباب',
  subtitle: 'أشهى وجبات السكلوب، الفاهيتا، الكريسبي، الهمبرغر، والشاورما في مدينة الباب',
  city: 'مدينة الباب - ريف حلب',
  whatsappNumber: '+963991094644',
  secondaryPhone: '+963991094644',
  address: 'مدينة الباب - مقابل الجامع الكبير، عند تقاطع شارع عصفور',
  openingHours: 'يومياً من الساعة 11:30 صباحاً حتى 2:00 بعد منتصف الليل',
  usdRate: 35.0,
  sypRate: 420.0,
  deliveryFeeTRY: 25,
  isRestaurantOpen: true,
  closedMessage: 'المطعم مغلق حالياً، نستقبل طلباتكم يومياً من الساعة 11:30 صباحاً حتى 2:00 ليلاً',
  freeDeliveryThresholdTRY: 350,
  minOrderAmountTRY: 50,
  deliveryAreas: [
    'دوار السنتر / وسط المدينة',
    'سوق الهال والمحلق',
    'شارع زمزم الرئيسي',
    'حي الكواشف الشرقي',
    'حي الكواشف الغربي',
    'طريق الراعي',
    'حي الغربية / جامع فاطمة الزهراء',
    'حي الشمالية / طريق بزاعة',
    'حي القبلية / طريق تادف',
    'دوار الجحجاح',
    'منطقة المشفى الوطني',
    'دوار الشهداء',
    'طريق قباسين',
    'أخرى (يرجى كتابة العنوان بالتفصيل)',
  ],
  announcementText: '🔥 أهلاً بكم في مطعم ليالي الباب! خدمة التوصيل السريع متاحة لكافة أحياء مدينة الباب',
};

export const AL_BAB_AREAS = [
  'دوار السنتر / وسط المدينة',
  'سوق الهال والمحلق',
  'شارع زمزم الرئيسي',
  'حي الكواشف الشرقي',
  'حي الكواشف الغربي',
  'طريق الراعي',
  'حي الغربية / جامع فاطمة الزهراء',
  'حي الشمالية / طريق بزاعة',
  'حي القبلية / طريق تادف',
  'دوار الجحجاح',
  'منطقة المشفى الوطني',
  'دوار الشهداء',
  'أخرى (يرجى كتابة العنوان بالتفصيل)',
];

export const CATEGORIES = [
  { id: 'all', name: 'الكل بالترتيب', icon: '🍽️' },
  { id: 'western', name: 'سكلوب وفاهيتا وغربي', icon: '🥪' },
  { id: 'burger', name: 'همبرغر دبل', icon: '🍔' },
  { id: 'sides', name: 'ثوم ومقبلات وبطاطا', icon: '🍟' },
  { id: 'drinks', name: 'مشروبات وطاقة وغازيات', icon: '🥤' },
  { id: 'shawarma_chicken', name: 'شاورما دجاج', icon: '🍗' },
  { id: 'shawarma_meat', name: 'شاورما لحم', icon: '🥩' },
];

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // 1. سكلوب عربي 165
  {
    id: 'item-1',
    name: 'سكلوب عربي',
    category: 'western',
    description: 'صدر دجاج سكلوب مقرمش ومتبل بالخلطة الخاصة، مقطع على الطريقة العربية مع أصابع البطاطا المقرمشة والتومية والمخلل.',
    priceTRY: 165,
    image: escalopeImg,
    badge: 'الأكثر طلباً ⭐',
    isPopular: true,
    available: true,
    extras: [
      { id: 'ex-cheese', name: 'إضافة جبنة شيدر سائحة', priceTRY: 20 },
      { id: 'ex-garlic', name: 'كريم توم إضافي', priceTRY: 10 },
      { id: 'ex-fries', name: 'بطاطا فريت إضافية', priceTRY: 25 },
    ],
  },

  // 2. سكلوب سندويشة عادية 110
  {
    id: 'item-2',
    name: 'سكلوب سندويشة عادية',
    category: 'western',
    description: 'سندويشة صدر دجاج سكلوب مقرمش بالخبز السوري المحمص مع التومية والمخلل والبطاطا.',
    priceTRY: 110,
    image: crispyZingerImg,
    available: true,
    sizes: [
      { id: 'sz-reg', name: 'سندويشة عادية', priceTRY: 110 },
      { id: 'sz-dub', name: 'سندويشة دبل', priceTRY: 140 },
    ],
    extras: [
      { id: 'ex-cheese', name: 'إضافة جبنة شيدر', priceTRY: 20 },
      { id: 'ex-pickles', name: 'مخلل إضافي', priceTRY: 5 },
    ],
  },

  // 3. سكلوب سندويشة دبل 140
  {
    id: 'item-3',
    name: 'سكلوب سندويشة دبل',
    category: 'western',
    description: 'سندويشة سكلوب دجاج بحشوة مضاعفة دبل غنية بالنكهة المقرمشة والجبنة والتومية الشهية.',
    priceTRY: 140,
    image: crispyZingerImg,
    badge: 'حشوة دبل 🚀',
    isPopular: true,
    available: true,
    extras: [
      { id: 'ex-cheese', name: 'إضافة جبنة شيدر', priceTRY: 20 },
      { id: 'ex-spicy', name: 'شطة حارة', priceTRY: 5 },
    ],
  },

  // 4. سندويشة فاهيتا عادية 110
  {
    id: 'item-4',
    name: 'سندويشة فاهيتا عادية',
    category: 'western',
    description: 'شرائح صدر دجاج الفاهيتا المتبلة مع الفلفل الرومي الملون، البصل المكرمل، الفطر والجبنة السائحة.',
    priceTRY: 110,
    image: fajitaImg,
    available: true,
    sizes: [
      { id: 'sz-reg', name: 'سندويشة عادية', priceTRY: 110 },
      { id: 'sz-dub', name: 'سندويشة دبل', priceTRY: 140 },
    ],
    extras: [
      { id: 'ex-cheese', name: 'جبنة إضافية', priceTRY: 20 },
      { id: 'ex-mush', name: 'فطر إضافي', priceTRY: 15 },
    ],
  },

  // 5. سندويشة فاهيتا دبل 140
  {
    id: 'item-5',
    name: 'سندويشة فاهيتا دبل',
    category: 'western',
    description: 'سندويشة فاهيتا دجاج دبل محشوة بسخاء بشرائح الدجاج والفطر والفلفل والجبنة اللذيذة.',
    priceTRY: 140,
    image: fajitaImg,
    badge: 'مميز 🌟',
    available: true,
    extras: [
      { id: 'ex-cheese', name: 'جبنة إضافية', priceTRY: 20 },
      { id: 'ex-sauce', name: 'صوص فاهيتا خاص', priceTRY: 10 },
    ],
  },

  // 6. سندويشة كريسبي عادي 110
  {
    id: 'item-6',
    name: 'سندويشة كريسبي عادي',
    category: 'western',
    description: 'أصابع دجاج كريسبي فائقة القرمشة مع الخس الطازج، صوص الكوكتيل، التومية والمخلل.',
    priceTRY: 110,
    image: crispyZingerImg,
    badge: 'الأكثر طلباً 🔥',
    isPopular: true,
    available: true,
    sizes: [
      { id: 'sz-reg', name: 'سندويشة عادية', priceTRY: 110 },
      { id: 'sz-dub', name: 'سندويشة دبل', priceTRY: 140 },
    ],
    extras: [
      { id: 'ex-cheese', name: 'جبنة شيدر سائحة', priceTRY: 20 },
      { id: 'ex-spicy', name: 'صوص حار سبايسي', priceTRY: 5 },
    ],
  },

  // 7. سندويشة كريسبي دبل 140
  {
    id: 'item-7',
    name: 'سندويشة كريسبي دبل',
    category: 'western',
    description: 'سندويشة كريسبي دجاج دبل بحجم سوبر، قطعتان مقرمشتان مع الجبنة الذائبة والصوصات الغنية.',
    priceTRY: 140,
    image: crispyZingerImg,
    badge: 'دبل مقرمش 🍗',
    isPopular: true,
    available: true,
    extras: [
      { id: 'ex-cheese', name: 'جبنة شيدر سائحة', priceTRY: 20 },
    ],
  },

  // 8. سندويشة مكسيكنو عادي 110
  {
    id: 'item-8',
    name: 'سندويشة مكسيكنو عادي',
    category: 'western',
    description: 'شرائح الدجاج المتبلة بالخلطة المكسيكية الحارة مع الفطر والذرة وصوص المكسيكانو الشهير.',
    priceTRY: 110,
    image: fajitaImg,
    isSpicy: true,
    available: true,
    sizes: [
      { id: 'sz-reg', name: 'سندويشة عادية', priceTRY: 110 },
      { id: 'sz-dub', name: 'سندويشة دبل', priceTRY: 140 },
    ],
    extras: [
      { id: 'ex-cheese', name: 'جبنة موزاريلا', priceTRY: 20 },
      { id: 'ex-jalapeno', name: 'هالبينو حار إضافي', priceTRY: 10 },
    ],
  },

  // 9. سندويشة مكسيكنو دبل 140
  {
    id: 'item-9',
    name: 'سندويشة مكسيكنو دبل',
    category: 'western',
    description: 'سندويشة مكسيكانو حارة دبل بحشوة مضاعفة لعشاق النكهة المكسيكية الغنية والحارة.',
    priceTRY: 140,
    image: fajitaImg,
    isSpicy: true,
    badge: 'حار سبايسي 🌶️',
    available: true,
    extras: [
      { id: 'ex-cheese', name: 'جبنة موزاريلا', priceTRY: 20 },
    ],
  },

  // 10. سندويشة زنجر عادية 110
  {
    id: 'item-10',
    name: 'سندويشة زنجر عادية',
    category: 'western',
    description: 'فيليه دجاج زنجر مقرمش ومتبل بالتتبيلة الحارة مع الخس وصوص المايونيز والجبنة.',
    priceTRY: 110,
    image: crispyZingerImg,
    isSpicy: true,
    isPopular: true,
    available: true,
    sizes: [
      { id: 'sz-reg', name: 'سندويشة عادية', priceTRY: 110 },
      { id: 'sz-dub', name: 'سندويشة دبل', priceTRY: 140 },
    ],
    extras: [
      { id: 'ex-cheese', name: 'جبنة شيدر', priceTRY: 20 },
    ],
  },

  // 11. سندويشة زنجر دبل 140
  {
    id: 'item-11',
    name: 'سندويشة زنجر دبل',
    category: 'western',
    description: 'سندويشة زنجر دجاج حارة دبل بقطعتين زنجر كبار وجبنة شيدر وصوص الزنجر الخاص.',
    priceTRY: 140,
    image: crispyZingerImg,
    isSpicy: true,
    badge: 'زنجر دبل 💥',
    isPopular: true,
    available: true,
    extras: [
      { id: 'ex-cheese', name: 'جبنة شيدر', priceTRY: 20 },
    ],
  },

  // 12. سنتافيه دجاج عادي 110
  {
    id: 'item-12',
    name: 'سنتافيه دجاج عادي',
    category: 'western',
    description: 'سندويشة سنتافيه دجاج بالصلصة الخاصة والفطر مع الخضار والجبنة الشهية.',
    priceTRY: 110,
    image: fajitaImg,
    available: true,
    extras: [
      { id: 'ex-cheese', name: 'جبنة شيدر', priceTRY: 20 },
    ],
  },

  // 13. سندويشة سبايسي عادية 110
  {
    id: 'item-13',
    name: 'سندويشة سبايسي عادية',
    category: 'western',
    description: 'سندويشة دجاج مقلي حار بخلطة البهارات السبايسي المقرمشة والتومية وصوص الفلفل.',
    priceTRY: 110,
    image: crispyZingerImg,
    isSpicy: true,
    available: true,
    sizes: [
      { id: 'sz-reg', name: 'سندويشة عادية', priceTRY: 110 },
      { id: 'sz-dub', name: 'سندويشة دبل', priceTRY: 140 },
    ],
    extras: [
      { id: 'ex-cheese', name: 'جبنة شيدر', priceTRY: 20 },
    ],
  },

  // 14. سندويشة سبايسي دبل 140
  {
    id: 'item-14',
    name: 'سندويشة سبايسي دبل',
    category: 'western',
    description: 'سندويشة دجاج سبايسي حارة دبل بحشوة مضاعفة ونكهة بهارات حارة لا تقاوم.',
    priceTRY: 140,
    image: crispyZingerImg,
    isSpicy: true,
    badge: 'سبايسي نار 🔥',
    available: true,
    extras: [
      { id: 'ex-cheese', name: 'جبنة شيدر', priceTRY: 20 },
    ],
  },

  // 15. همبرغر دجاج دبل 140
  {
    id: 'item-15',
    name: 'همبرغر دجاج دبل',
    category: 'burger',
    description: 'قطعتان من برغر الدجاج الصافي المشوي على الصاج مع الخس الطازج، الجبنة الذائبة، المخلل، وصوص البرغر الخاص في خبز البرغر بالسمسم.',
    priceTRY: 140,
    image: burgerImg,
    badge: 'دبل دجاج 🍔',
    isPopular: true,
    available: true,
    extras: [
      { id: 'ex-cheese', name: 'شريحة جبنة شيدر إضافية', priceTRY: 15 },
      { id: 'ex-egg', name: 'بيضة مقلية', priceTRY: 15 },
      { id: 'ex-fries', name: 'بطاطا فريت جانبية', priceTRY: 25 },
    ],
  },

  // 16. همبرغر لحم دبل 150
  {
    id: 'item-16',
    name: 'همبرغر لحم دبل',
    category: 'burger',
    description: 'قطعتان من لحم العجل البلدي الصافي المشوي مع جبنة الشيدر، البصل المكرمل، الطماطم وصوص البرغر المدخن المميز.',
    priceTRY: 150,
    image: burgerImg,
    badge: 'دبل لحم عجل 👑',
    isPopular: true,
    available: true,
    extras: [
      { id: 'ex-cheese', name: 'شريحة جبنة شيدر إضافية', priceTRY: 15 },
      { id: 'ex-mush', name: 'فطر سوتيه', priceTRY: 15 },
      { id: 'ex-fries', name: 'بطاطا فريت جانبية', priceTRY: 25 },
    ],
  },

  // 17. كيلو ثوم فرط الكيلو 120
  {
    id: 'item-17',
    name: 'كيلو ثوم فرط الكيلو',
    category: 'sides',
    description: 'كيلو كامل من كريم الثومية الأبيض الأصلي الخاص بمطعم ليالي الباب، ناعم وكريمي ولذيذ وسري الخلطة.',
    priceTRY: 120,
    image: garlicSauceImg,
    badge: 'تومية المحل الأصلية 🧄',
    available: true,
  },

  // 18. علبة مايونيز صغيرة 10
  {
    id: 'item-18',
    name: 'علبة مايونيز صغيرة',
    category: 'sides',
    description: 'علبة مايونيز كريمية طازجة مرافقة للوجبات والسندويشات.',
    priceTRY: 10,
    image: mayoImg,
    available: true,
  },

  // 19. طاقة كبيرة 30
  {
    id: 'item-19',
    name: 'طاقة كبيرة',
    category: 'drinks',
    description: 'عبوة مشروب طاقة حجم كبير مثلجة ومنعشة تمنحك النشاط والحيوية.',
    priceTRY: 30,
    image: energyDrinkImg,
    badge: 'طاقة كبيرة ⚡',
    available: true,
  },

  // 20. طاقة صغيرة 25
  {
    id: 'item-20',
    name: 'طاقة صغيرة',
    category: 'drinks',
    description: 'عبوة مشروب طاقة حجم صغير باردة ومفعمة بالانتعاش.',
    priceTRY: 25,
    image: energyDrinkImg,
    badge: 'طاقة صغيرة ⚡',
    available: true,
  },

  // 21. بوكينزة بوري 20
  {
    id: 'item-21',
    name: 'بوكينزة بوري',
    category: 'drinks',
    description: 'عبوة مشروب بوكينزة بوري غازي بارد ومميز مع الوجبة.',
    priceTRY: 20,
    image: cannedSodaImg,
    available: true,
  },

  // 22. سيفنتي بوري 20
  {
    id: 'item-22',
    name: 'سيفنتي بوري',
    category: 'drinks',
    description: 'مشروب سيفنتي غازي بوري بارد بنكهة الليمون المنعشة.',
    priceTRY: 20,
    image: cannedSodaImg,
    badge: 'ليمون منعش 🍋',
    available: true,
  },

  // 23. بسمتي بوري 20
  {
    id: 'item-23',
    name: 'بسمتي بوري',
    category: 'drinks',
    description: 'مشروب بسمتي بوري غازي بارد ومنعش.',
    priceTRY: 20,
    image: cannedSodaImg,
    available: true,
  },

  // 24. ميرندا بوري 20
  {
    id: 'item-24',
    name: 'ميرندا بوري',
    category: 'drinks',
    description: 'مشروب ميرندا برتقال غازي بوري مثلج ولذيذ بنكهة البرتقال الطبيعي.',
    priceTRY: 20,
    image: mirindaOrangeImg,
    badge: 'برتقال 🍊',
    available: true,
  },

  // 25. ميرندا عريض 25
  {
    id: 'item-25',
    name: 'ميرندا عريض',
    category: 'drinks',
    description: 'علبة ميرندا برتقال عبوة عريضة باردة ومنعشة.',
    priceTRY: 25,
    image: mirindaOrangeImg,
    badge: 'علبة عريضة 🍊',
    available: true,
  },

  // 26. طازج رمان 20
  {
    id: 'item-26',
    name: 'طازج رمان',
    category: 'drinks',
    description: 'عصير رمان طبيعي طازج وبارد بنكهة الرمان الغنية والمنعشة.',
    priceTRY: 20,
    image: pomegranateJuiceImg,
    badge: 'عصير رمان طازج 🍷',
    available: true,
  },

  // 27. بيبسي 1 لتر 50
  {
    id: 'item-27',
    name: 'بيبسي 1 لتر',
    category: 'drinks',
    description: 'عبوة بيبسي سعة 1 لتر مثلجة ومثالية لمرافقة السندويشات والوجبات.',
    priceTRY: 50,
    image: sodaBottlesImg,
    badge: '1 لتر 🥤',
    available: true,
  },

  // 28. بيبسي 2.25 لتر 70
  {
    id: 'item-28',
    name: 'بيبسي 2.25 لتر',
    category: 'drinks',
    description: 'عبوة بيبسي حجم عائلي كبير سعة 2.25 لتر باردة ومناسبة للمجموعات والعائلات.',
    priceTRY: 70,
    image: sodaBottlesImg,
    badge: 'عائلي 2.25L 🌟',
    available: true,
  },

  // 29. سفينتي 2.25 لتر 60
  {
    id: 'item-29',
    name: 'سفينتي 2.25 لتر',
    category: 'drinks',
    description: 'عبوة سفينتي غازي حجم عائلي كبير 2.25 لتر بنكهة الليمون المنعشة.',
    priceTRY: 60,
    image: sodaBottlesImg,
    badge: 'عائلي 2.25L 🍋',
    available: true,
  },

  // 30. صحن بطاطا فريت 30
  {
    id: 'item-30',
    name: 'صحن بطاطا فريت',
    category: 'sides',
    description: 'صحن بطاطا مقلية ذهبية مقرمشة ومملحة بتوابل البطاطا اللذيذة.',
    priceTRY: 30,
    image: friesPlateImg,
    available: true,
    extras: [
      { id: 'ex-garlic', name: 'كريم توم صغير', priceTRY: 10 },
      { id: 'ex-ketchup', name: 'كاتشب', priceTRY: 5 },
    ],
  },

  // 31. صحن بطاطا وسط 50
  {
    id: 'item-31',
    name: 'صحن بطاطا وسط',
    category: 'sides',
    description: 'صحن بطاطا مقلية حجم وسط مقرمشة وساخنة مع رشة بهارات البطاطا الخاصة.',
    priceTRY: 50,
    image: friesPlateImg,
    available: true,
    extras: [
      { id: 'ex-garlic', name: 'كريم توم صغير', priceTRY: 10 },
      { id: 'ex-mayo', name: 'علبة مايونيز صغيرة', priceTRY: 10 },
    ],
  },

  // 32. صحن بطاطا كبير 70
  {
    id: 'item-32',
    name: 'صحن بطاطا كبير',
    category: 'sides',
    description: 'صحن بطاطا مقلية حجم عائلي كبير مقرمش وشهي يكفي عدة أشخاص مع بهارات البطاطا الخاصة.',
    priceTRY: 70,
    image: friesPlateImg,
    badge: 'حجم كبير 🍟',
    available: true,
    extras: [
      { id: 'ex-garlic', name: 'كريم توم صغير', priceTRY: 10 },
      { id: 'ex-mayo', name: 'علبة مايونيز صغيرة', priceTRY: 10 },
    ],
  },

  // 33. سندويشة بطاطا عادية 40
  {
    id: 'item-33',
    name: 'سندويشة بطاطا عادية',
    category: 'sides',
    description: 'سندويشة بطاطا مقلية بالخبز السوري مع كريم التومية، الكاتشب، والمخلل المقرمش.',
    priceTRY: 40,
    image: potatoSandwichImg,
    available: true,
    sizes: [
      { id: 'sz-reg', name: 'سندويشة عادية', priceTRY: 40 },
      { id: 'sz-dub', name: 'سندويشة دبل', priceTRY: 50 },
      { id: 'sz-samoon', name: 'سندويشة صمون', priceTRY: 60 },
    ],
    extras: [
      { id: 'ex-cheese', name: 'إضافة جبنة', priceTRY: 15 },
      { id: 'ex-spicy', name: 'شطة حارة', priceTRY: 5 },
    ],
  },

  // 34. سندويشة بطاطا دبل 50
  {
    id: 'item-34',
    name: 'سندويشة بطاطا دبل',
    category: 'sides',
    description: 'سندويشة بطاطا مقلية بحشوة مضاعفة دبل مشبعة ومحمصة على الصاج مع التوم والكاتشب والمخلل.',
    priceTRY: 50,
    image: potatoSandwichImg,
    available: true,
    extras: [
      { id: 'ex-cheese', name: 'إضافة جبنة', priceTRY: 15 },
    ],
  },

  // 35. سندويشة بطاطا صمون 60
  {
    id: 'item-35',
    name: 'سندويشة بطاطا صمون',
    category: 'sides',
    description: 'سندويشة بطاطا مقلية في خبز الصمون الفرنسي الطازج مع الجبنة والتومية والكاتشب.',
    priceTRY: 60,
    image: potatoSamoonImg,
    badge: 'خبز صمون 🥖',
    available: true,
    extras: [
      { id: 'ex-cheese', name: 'جبنة إضافية', priceTRY: 15 },
    ],
  },

  // 36. كيلو شاورما الدجاج 650
  {
    id: 'item-36',
    name: 'كيلو شاورما الدجاج',
    category: 'shawarma_chicken',
    description: 'كيلو كامل صافي من شاورما دجاج السيخ المتبلة على أصولها، تقدم مع علب التومية، المخلل، الخبز السوري الساخن وسرفيس كامل.',
    priceTRY: 650,
    image: shawarmaImg,
    badge: 'عائلي مميز 👨‍👩‍👧‍👦',
    isPopular: true,
    available: true,
    extras: [
      { id: 'ex-garlic-box', name: 'علبة توم إضافية', priceTRY: 15 },
      { id: 'ex-pickles', name: 'سرفيس مخلل كبير', priceTRY: 15 },
      { id: 'ex-fries-box', name: 'صحن بطاطا وسط', priceTRY: 50 },
    ],
  },

  // 37. نص كيلو شاورما الدجاج 325
  {
    id: 'item-37',
    name: 'نص كيلو شاورما الدجاج',
    category: 'shawarma_chicken',
    description: 'نصف كيلو من شاورما دجاج السيخ الشهية مع كريم التومية، المخلل المقرمش، الخبز الساخن والسرفيس.',
    priceTRY: 325,
    image: shawarmaImg,
    available: true,
    extras: [
      { id: 'ex-garlic-box', name: 'علبة توم إضافية', priceTRY: 15 },
      { id: 'ex-fries-box', name: 'صحن بطاطا فريت', priceTRY: 30 },
    ],
  },

  // 38. سندويشة شاورما دجاج عادي 70
  {
    id: 'item-38',
    name: 'سندويشة شاورما دجاج عادي',
    category: 'shawarma_chicken',
    description: 'سندويشة شاورما دجاج ملفوفة بالخبز السوري ومحمصة على الجريل مع صوص التومية والمخلل المقرمش.',
    priceTRY: 70,
    image: shawarmaWrapImg,
    badge: 'شاورما دجاج 🌯',
    isPopular: true,
    available: true,
    sizes: [
      { id: 'sz-reg', name: 'سندويشة عادية', priceTRY: 70 },
      { id: 'sz-dub', name: 'سندويشة دبل', priceTRY: 90 },
    ],
    extras: [
      { id: 'ex-garlic', name: 'توم إضافي مع السندويشة', priceTRY: 5 },
      { id: 'ex-cheese', name: 'إضافة جبنة موزاريلا', priceTRY: 20 },
      { id: 'ex-spicy', name: 'شطة حارة', priceTRY: 5 },
    ],
  },

  // 39. سندويشة شاورما دجاج دبل 90
  {
    id: 'item-39',
    name: 'سندويشة شاورما دجاج دبل',
    category: 'shawarma_chicken',
    description: 'سندويشة شاورما دجاج دبل بحشوة دسمة ومضاعفة من لحم الشاورما ومحمصة بالزيت والبهار اللذيذ.',
    priceTRY: 90,
    image: shawarmaWrapImg,
    badge: 'شاورما دبل 🌟',
    isPopular: true,
    available: true,
    extras: [
      { id: 'ex-garlic', name: 'توم إضافي', priceTRY: 5 },
      { id: 'ex-cheese', name: 'جبنة موزاريلا', priceTRY: 20 },
    ],
  },

  // 40. كيلو شاورما اللحم 1000
  {
    id: 'item-40',
    name: 'كيلو شاورما اللحم',
    category: 'shawarma_meat',
    description: 'كيلو كامل صافي من شاورما لحم العجل والضأن المتبلة بالبهارات الشامية، تقدم مع سلطة البيواز، صوص الطحينة، دبس الرمان، المخلل والخبز الساخن.',
    priceTRY: 1000,
    image: beefShawarmaImg,
    badge: 'لحم بلدي فاخر 🥩',
    isPopular: true,
    available: true,
    extras: [
      { id: 'ex-tahina', name: 'علبة طحينة إضافية', priceTRY: 15 },
      { id: 'ex-pickles', name: 'سرفيس مخلل كبير', priceTRY: 15 },
      { id: 'ex-fries-box', name: 'صحن بطاطا وسط', priceTRY: 50 },
    ],
  },

  // 41. نص كيلو شاورما اللحم 500
  {
    id: 'item-41',
    name: 'نص كيلو شاورما اللحم',
    category: 'shawarma_meat',
    description: 'نصف كيلو من شاورما اللحم الفاخرة مع صوص الطحينة، البيواز بالبقدونس والسماق، المخلل والخبز الطازج.',
    priceTRY: 500,
    image: beefShawarmaImg,
    available: true,
    extras: [
      { id: 'ex-tahina', name: 'علبة طحينة إضافية', priceTRY: 15 },
    ],
  },

  // 42. سندويشة شاورما اللحم عادي 100
  {
    id: 'item-42',
    name: 'سندويشة شاورما اللحم عادي',
    category: 'shawarma_meat',
    description: 'سندويشة شاورما لحم بلدي مع صوص الطحينة، البقدونس والبصل بالسماق (بيواز)، المخلل ورشة دبس الرمان.',
    priceTRY: 100,
    image: shawarmaWrapImg,
    badge: 'شاورما لحم 🥙',
    isPopular: true,
    available: true,
    sizes: [
      { id: 'sz-reg', name: 'سندويشة عادية', priceTRY: 100 },
      { id: 'sz-dub', name: 'سندويشة دبل', priceTRY: 120 },
    ],
    extras: [
      { id: 'ex-pomegranate', name: 'دبس رمان إضافي', priceTRY: 5 },
      { id: 'ex-tahina', name: 'طحينة إضافية', priceTRY: 5 },
    ],
  },

  // 43. سندويشة شاورما اللحم دبل 120
  {
    id: 'item-43',
    name: 'سندويشة شاورما اللحم دبل',
    category: 'shawarma_meat',
    description: 'سندويشة شاورما لحم دبل بحشوة مضاعفة من اللحم المشوي الشهي مع البيواز والطحينة ودبس الرمان.',
    priceTRY: 120,
    image: shawarmaWrapImg,
    badge: 'لحم دبل 👑',
    available: true,
    extras: [
      { id: 'ex-pomegranate', name: 'دبس رمان إضافي', priceTRY: 5 },
    ],
  },
];
