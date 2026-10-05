// Single source of truth for Eagle Nation content.
//
// Every string below is taken from the live site https://eaglenation.co.uk as
// fetched on 2026-10-05. Where wording was changed, it is a spelling, spacing or
// grammar correction only and is listed in CORRECTIONS at the bottom of this
// file. Nothing here is invented — if a fact is not on the old site it is not
// on the new one.

export const SITE_URL = 'https://eaglenation.co.uk';

export const org = {
  name: 'Eagle Nation',
  legalName: 'Eagle Nation Limited',
  tagline: 'Make it happen', // from the old homepage <title>
  // Contact page
  phoneDisplay: '07803 492996', // shown on the old site as "(+44) 780-349-2996"
  phoneHref: 'tel:+447803492996',
  // Privacy policy contact e-mail
  email: 'contact@eaglenation.co.uk',
  address: {
    street: '31 Barras Green',
    city: 'Coventry',
    postcode: 'CV2 4LY',
    country: 'United Kingdom',
  },
  // Footer: "Registered Company Limited by guarantee: 13959716"
  // (verified on Companies House: EAGLE NATION LIMITED, active, inc. 7 March 2022)
  companyNumber: '13959716',
  donateUrl: 'https://www.paypal.com/donate/?hosted_button_id=6LQM4QVRHH2C4',
  footballClubUrl: 'http://www.eaglenationfc.co.uk/',
  footballClubLabel: 'www.eaglenationfc.co.uk',
};

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/eagle_nation_entertainment/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/eaglenationentertainment', icon: 'facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UC5EZMI16WEQcr0fxVtn8KRQ', icon: 'youtube' },
  { label: 'X (Twitter)', href: 'https://twitter.com/EagleNation_Ent', icon: 'x' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eagle-nation-entertainment-985a05217/', icon: 'linkedin' },
];

// Main nav — same items and order as the old site.
export const nav = [
  { label: 'About Us', href: '/' },
  { label: 'Sport', href: '/sport/' },
  { label: 'Music', href: '/music/' },
  { label: 'Social activities', href: '/social-activity/' },
  { label: 'Shop', href: '/shop/' },
  { label: 'Contact', href: '/contact/' },
];

// ---------------------------------------------------------------- Home (About Us)
export const home = {
  title: 'Eagle Nation – Make it happen',
  heading: 'Let’s go with Eagle Nation !',
  // Old home slider caption: "We offer following classes for kids and youth 6-16yo"
  ageRange: '6–16',
  about: [
    'Eagle Nation is a dedicated social enterprise with a clear mission: to deliver sports (football and basketball) and music skills to the youth in our community. Our passion lies in empowering children and young people through engaging sports and music activities. We offer traditional football development programs aimed at enabling our youth to play a more significant role in advancing personal and community development within Coventry and Warwickshire.',
    'Our organization is thoughtfully designed to foster health, well-being, confidence, and social skills among our community members, all through the power of sports and music. Our goal has always been simple yet profound: to unite and inspire.',
    'We view sports and music as potent tools that can bring our community together, promote mental well-being, and offer a wide range of developmental activities for children and youth. Our offerings include football and basketball sessions, as well as music lessons, all tailored to cater to the diverse interests and talents of our young participants.',
    'At Eagle Nation, we are deeply passionate about helping children and young people reach their full potential. We firmly believe that music and sports play pivotal roles in driving personal growth and community development within the vibrant regions of Coventry and Warwickshire.',
    'In essence, Eagle Nation is committed to nurturing the talents, skills, and confidence of our youth, harnessing the transformative power of sports and music to create a stronger, more united, and inspired community.',
  ],
  servicesIntro:
    'Eagle Nation sport offers classes for kids and youth ages 6-16 in Coventry. Eagle Nation Sports academy provide sport session on: Basketball and Football, Also, help you to be : Coached with different skills, Earn the chance to trial with British professional Academy. Please contact us to enroll and find more details.',
  mission:
    'Our mission is to unite the children and youth from diverse backgrounds and inspire them to dream and build a brighter future for themselves and their families.',
  values: [
    { name: 'Talent focused', text: 'We believe that every child has the talent and potential and all we have to do is support them on their journey' },
    { name: 'Respect', text: 'We value and celebrate the diversity of our communities and the challenges that they are facing.' },
    { name: 'Creativity', text: 'Our programs are designed to enhance students’ creativity in a safe environment free from judgment and stereotypes.' },
  ],
};

// ---------------------------------------------------------------- Services (4 pages)
export type Service = {
  slug: string;
  title: string; // page <h1> and <title> stem, verbatim
  short: string; // card label (old home cards)
  image: string;
  imageAlt: string;
  credit?: string;
  body: string[];
};

export const services: Service[] = [
  {
    slug: 'coaching-and-mentoring',
    title: 'Coaching and Mentoring',
    short: 'Coaching and Mentoring',
    image: '/images/stock/mentoring-conversation.jpg',
    imageAlt: 'A mentor and a young person talking across a table',
    credit: 'Unsplash',
    body: [
      'Our mentoring groups are a warm and open space for young people to share any concerns on their minds or any obstacle troubling them.',
      'There are many children and young people facing daily parental problems in the community. Eagle Nation approaches those kids to show them more positive ways of facing different troubles.',
      'The sessions are based around positive mental health, life choices, healthy eating, future planning, positive impact in community, focus and self-reflection.',
      'The sessions are designed to empower the young people ; giving them the necessary tools, skills, belief and competencies to overcome any challenges that life throws their way.',
    ],
  },
  {
    slug: 'assistance-and-support',
    title: 'Assistance and Support',
    short: 'Assistance and Support',
    image: '/images/stock/support-food-distribution.jpg',
    imageAlt: 'Volunteers sorting fresh food for distribution',
    credit: 'Unsplash',
    body: [
      'We are a leading youth development social activity. We believe there is no greater cost to society than unfulfilled potential.',
      'The number of children in poverty is set to reach five million this year. This means young people around you are going to school hungry, getting bullied for wearing an old uniform, or missing out on activities with friends. These young people have to work extra hard to stay happy, motivated and focused on the future.',
      'We work so all families can afford to keep their children healthy, happy and hopeful, even when money is tight. That is the reason Eagle Nation is here to provide different food distribution program in the community for vulnerable family, a poor background shouldn’t hold a child back.',
    ],
  },
  {
    slug: 'leisure-and-youth',
    title: 'Leisure and Youth',
    short: 'Leisure and Youth',
    image: '/images/gallery/community-day-08.jpg',
    imageAlt: 'A young boy smiling on the grass at an Eagle Nation community day',
    body: [
      'Leisure and Youth are intrinsic parts of Eagle Nation activity.',
      'Recreational programs are a wonderful outlet to help children or kids and young people gain several different skills all while having fun.',
      'By purposefully creating environments that provide constructive, affirmative and encouraging relationships that are sustained over time.',
      'At Eagle Nation, we believe that youth recreational services are an important part of our provision. These services provide new experiences for the young people we work with and help them engage more fully in developing healthy life skills.',
      'Eagle Nation provides youth Football coaching, Basketball coaching, sports provision and many other types of recreational young programs across Coventry.',
    ],
  },
  {
    slug: 'education-training-and-empowering',
    title: 'Education, Training, and Empowering',
    short: 'Education, training, and empowering',
    image: '/images/stock/education-group-work.jpg',
    imageAlt: 'Young people working together around a table',
    credit: 'Unsplash',
    body: [
      'We have established a strong reputation for delivering high quality, large scale, national skills development programmes for young people from disadvantaged backgrounds.',
      'From outdoor learning and online safety to money management and mental health, we reach and engage young people who don’t traditionally have access to personal development opportunities.',
    ],
  },
];

// ---------------------------------------------------------------- Sport
export const sport = {
  title: 'Sport – Eagle Nation',
  heading: 'Eagle Nation Sport',
  intro:
    'Life Skills Through Sports offers a variety of fun sports and physical activities for children and youth aged 6 to 16. Our team of experienced and passionate coaches is committed to nurturing young talent and providing personalized attention to help every child reach their full potential.',
  offerLead: 'We offer the following sessions:',
  offers: ['Football', 'Basketball', 'Individual lessons'],
  outro: 'Join us to help your child learn valuable life skills while staying active and engaged!',
  basketball: {
    name: 'Basketball',
    day: 'Thursday',
    status: 'Soon we will be back',
    venue: 'Moat House, Winston Ave, Coventry CV2 1EA',
    price: '£5 per session',
  },
  football: {
    name: 'Football',
    lead: 'We provide community football sessions for both children and adults, as well as a dedicated football club for kids and youth players.',
    training: 'Join our U12 and U13 football training every Saturday at 12:00 PM at Loch Hall School, Blackberry Lane, Coventry, CV2 3JS.',
    groups: 'U12 and U13',
    day: 'Saturday',
    time: '12:00 PM',
    venue: 'Loch Hall School, Blackberry Lane, Coventry, CV2 3JS',
    safeguarding: 'All sessions are delivered by DBS-checked, fully qualified coaches who are trained in safeguarding.',
    moreLead: 'For more details, please visit:',
  },
  coachesLead: 'Our coaches are:',
  coaches: ['DBS-checked', 'FA-qualified coach', 'Safeguarding certified'],
};

// Real photos from the old Sport page gallery (duplicates removed).
export const sportGallery = [
  { src: '/images/gallery/basketball-jump-shot.jpg', alt: 'Players practising jump shots in a sports hall', w: 1800, h: 1350 },
  { src: '/images/gallery/football-3g-dribbling.jpg', alt: 'Young players dribbling through cones on a 3G pitch', w: 1800, h: 1350 },
  { src: '/images/gallery/basketball-one-on-one.jpg', alt: 'A coach guarding a young player during a basketball drill', w: 1350, h: 1800, span: 'tall' as const },
  { src: '/images/gallery/basketball-hall-drills.jpg', alt: 'Players running basketball drills between cones', w: 1800, h: 1350 },
  { src: '/images/gallery/football-3g-cones.jpg', alt: 'A young footballer working through a cone drill', w: 1350, h: 1800, span: 'tall' as const },
  { src: '/images/gallery/basketball-game.jpg', alt: 'A training game in a sports hall', w: 1331, h: 996 },
  { src: '/images/gallery/sport-hall-basketball-shot.jpg', alt: 'A young player shooting at the basket', w: 1800, h: 1350 },
  { src: '/images/gallery/sport-hall-drills-1.jpg', alt: 'A dribbling drill in the sports hall', w: 1800, h: 1350 },
  { src: '/images/gallery/sport-hall-drills-2.jpg', alt: 'Players working through a drill in the sports hall', w: 1331, h: 996 },
  { src: '/images/gallery/sport-hall-drills-3.jpg', alt: 'Ball-handling practice in the sports hall', w: 1800, h: 1350 },
];

// ---------------------------------------------------------------- Music
export const music = {
  title: 'Music – Eagle Nation',
  heading: 'Eagle Nation Music',
  intro: [
    'At Eagle Nation, we believe in the power of music to bring people together. That’s why we offer a variety of music activities for our communities, designed to inspire connection and creativity.',
    'Our music classes go beyond teaching skills—they help build empathy, sensitivity, and confidence in children and youth, showing them they can dream big and achieve great things.',
  ],
  projectsLead: 'We currently offer the following projects:',
  projects: [
    { name: 'Recording', image: '/images/stock/music-producer-studio.jpg', alt: 'A producer at a mixing desk in a recording studio' },
    { name: 'Singing', image: '/images/stock/music-singer-performance.jpg', alt: 'A young singer performing on stage' },
    { name: 'Dance', image: '/images/stock/music-dancer.jpg', alt: 'A street dancer mid-move against a shutter' },
    { name: 'Songwriting', image: '/images/stock/music-songwriting-lyrics.jpg', alt: 'Handwritten lyrics in a notebook' },
  ],
  testimonial: {
    name: 'Dj Bonti Jay',
    label: 'My Testimonial',
    // Quoted as written on the old site; only capitalisation and one stray comma fixed.
    quote:
      'I’m Bonti Jay I’m Ghanaian/British who join parent in UK. I took part on different music production in Eagle Nation music session, After hard work and different music session, I’m able to enjoy my music and produce some for my friends.',
    image: '/images/site/dj-bonti-jay.jpg',
  },
  label: {
    heading: 'Eagle Nation music',
    kicker: 'Organisation.',
    text: 'Berly Kabongo (born December 31), known by his stage name K‑Boss, is a Congolese singer-songwriter, dancer, philanthropist, guitarist and producer. From 2010 until 2015, he was a member of different music band. In 2016, he released his first solo album Boniomo.',
    image: '/images/site/eagle-nation-music-label.jpg',
  },
  callout: 'Are you a musician? Just let us know.',
};

// ---------------------------------------------------------------- Social activities
export const social = {
  title: 'Social activities – Eagle Nation',
  heading: 'Social activities',
  body: [
    'Eagle Nation Limited is your go-to source for inspiring sports content that celebrates the achievements of children and youth in the Coventry community. Our platform highlights not only the physical benefits of sports but also the emotional support, companionship, and sense of belonging they foster. Friends, family, neighbors, and community groups all play a vital role by offering encouragement and a listening ear.',
    'We are dedicated to enriching the Coventry community by offering engaging sports activities tailored for children and youth, with a special focus on football and basketball. Our mission is to create a positive impact through sports by promoting physical activity while fostering confidence, well-being, and personal growth.',
    'Tournamentship Sport for the Community is designed to unite and engage the local community through competitive sports. Our initiative promotes teamwork, healthy competition, and community spirit by organizing sports tournaments that cater to children, youth, and adults alike.',
  ],
  offeringsLead: 'Our Offerings Include:',
  offerings: ['Workshops', 'Coaching and Mentoring', 'Assistance and Support', 'Education and Training', 'Leadership Development and Empowerment'],
};

// Real photos from the old Social activities gallery. The first image's alt text on
// the old site was "Coventry City of Culture day." — the rest had file-name alts.
export const socialGallery = [
  { src: '/images/gallery/community-day-05.jpg', alt: 'Players and organisers gathered by the gazebos', w: 1200, h: 1600, span: 'feature' as const },
  { src: '/images/gallery/community-day-01.jpg', alt: 'Coventry City of Culture day.', w: 1200, h: 1600 },
  { src: '/images/gallery/community-day-08.jpg', alt: 'A young boy smiling on the grass', w: 1600, h: 1200, pos: '45% 50%' },
  { src: '/images/gallery/community-day-03.jpg', alt: 'An organiser beside the trophy table', w: 1200, h: 1600 },
  { src: '/images/gallery/community-day-10.jpg', alt: 'Football on the field during the community day', w: 1200, h: 1600 },
  { src: '/images/gallery/community-day-02.jpg', alt: 'Music equipment set up under a gazebo', w: 1200, h: 1600 },
  { src: '/images/gallery/community-day-11.jpg', alt: 'Players warming up beside the trophy table', w: 1200, h: 1600 },
  { src: '/images/gallery/community-day-04.jpg', alt: 'Gazebos and players on the field', w: 1200, h: 1600 },
  { src: '/images/gallery/community-day-12.jpg', alt: 'Table tennis and gazebos at the community day', w: 1200, h: 1600 },
  { src: '/images/gallery/community-day-07.jpg', alt: 'Players on the field', w: 1200, h: 1600 },
  { src: '/images/gallery/community-day-09.jpg', alt: 'An organiser presenting trophies', w: 1200, h: 1600 },
  { src: '/images/gallery/community-day-06.jpg', alt: 'An organiser beside the trophies', w: 1200, h: 1600 },
  { src: '/images/gallery/community-day-13.jpg', alt: 'Organisers with the trophies', w: 1200, h: 1600 },
];

// ---------------------------------------------------------------- Shop
// The five products live on the old WooCommerce store (Store API, 2026-10-05).
// Checkout cannot run on a static site, so `buyUrl` points at the product on the
// existing store. Replace with a new checkout before the old WordPress is retired.
export type Product = {
  slug: string;
  name: string;
  subtitle: string; // first fabric line from the product description
  price: string;
  categories: string[];
  colours?: string[];
  sizes: string[];
  images: { src: string; alt: string }[];
  description: string;
  features: string[];
  notes: string[];
  buyUrl: string;
};

const POD_NOTE =
  'This product is made especially for you as soon as you place an order, which is why it takes us a bit longer to deliver it to you. Making products on demand instead of in bulk helps reduce overproduction, so thank you for making thoughtful purchasing decisions!';

export const products: Product[] = [
  {
    slug: 'oversized-heavyweight-hoodie',
    name: 'Oversized heavyweight hoodie',
    subtitle: '60% Airlume cotton, 40% polyester fleece',
    price: '£30.00 – £33.00',
    categories: ['Men', 'Women'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    images: [{ src: '/images/shop/unisex-oversized-heavyweight-hoodie-black-front-69b5f466270d6.jpg', alt: 'Black oversized heavyweight hoodie, folded' }],
    description:
      'Thick, soft, and made to lounge—this oversized hoodie wraps you in comfort with its brushed fleece and roomy fit. No drawcords, just clean lines and cozy vibes. Easy to throw on, hard to take off.',
    features: [
      'Breathable 60% Airlume combed and ring-spun cotton, 40% polyester fleece',
      'Fabric weight: 10 oz./yd² (339 g/m²)',
      'Brushed interior fleece for a soft, cozy feel',
      'Roomy, unisex fit—goes big on comfort',
      'Double-layered, no-drawcord hood',
      'Front pocket for stuff and snacks',
      'Blank product sourced from Nicaragua',
    ],
    notes: [POD_NOTE],
    buyUrl: 'https://eaglenation.co.uk/produit/oversized-heavyweight-hoodie/',
  },
  {
    slug: 'oversized-heavyweight-t-shirt',
    name: 'Oversized heavyweight t-shirt',
    subtitle: '100% premium carded cotton',
    price: '£21.50 – £22.00',
    categories: ['Men', 'Women'],
    colours: ['Black', 'White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    images: [
      { src: '/images/shop/oversized-heavyweight-t-shirt-black-front-678e34a40cb65.jpg', alt: 'Black oversized t-shirt with the Eagle Nation mark, front' },
      { src: '/images/shop/oversized-heavyweight-t-shirt-black-left-front-678e34a40d901.jpg', alt: 'Black oversized t-shirt, left front' },
      { src: '/images/shop/oversized-heavyweight-t-shirt-white-front-678e34a40dc86.jpg', alt: 'White oversized t-shirt with the Eagle Nation mark, front' },
      { src: '/images/shop/oversized-heavyweight-t-shirt-white-left-front-678e34a40e4d0.jpg', alt: 'White oversized t-shirt, left front' },
    ],
    description:
      'Master your urban look with an oversized t-shirt—a must-have streetwear piece. Crafted from heavyweight fabric, it offers unmatched comfort and durability. The breathable, moisture-wicking cotton will keep you comfortable in any season, while the relaxed fit ensures a cool, laid-back vibe.',
    features: [
      '100% premium carded cotton',
      'Fabric weight: 6.5 oz./yd.² (220 g/m²)',
      'High moisture absorbency',
      'Unisex style',
      'Oversized fit with drop shoulders',
      'Ribbed collar',
      'Blank product sourced from Bangladesh',
    ],
    notes: [POD_NOTE],
    buyUrl: 'https://eaglenation.co.uk/produit/oversized-heavyweight-t-shirt/',
  },
  {
    slug: 'unisex-hoodie',
    name: 'Unisex Hoodie',
    subtitle: '65% ring-spun cotton, 35% polyester',
    price: '£25.00 – £28.50',
    categories: ['Accessories'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    images: [
      { src: '/images/shop/unisex-premium-hoodie-black-front-678e385343e35.jpg', alt: 'Black unisex hoodie with the Eagle Nation mark, worn' },
      { src: '/images/shop/unisex-premium-hoodie-black-front-678e385345674.jpg', alt: 'Black unisex hoodie, front' },
      { src: '/images/shop/unisex-premium-hoodie-black-zoomed-in-678e385346386.jpg', alt: 'Black unisex hoodie, close-up of the chest mark' },
    ],
    description:
      'Who knew that the softest hoodie you’ll ever own comes with such a cool design. You won’t regret buying this classic streetwear piece of apparel with a convenient pouch pocket and warm hood for chilly evenings.',
    features: [
      '100% cotton face',
      '65% ring-spun cotton, 35% polyester',
      'Front pouch pocket',
      'Self-fabric patch on the back',
      'Matching flat drawstrings',
      '3-panel hood',
      'Blank product sourced from Pakistan',
    ],
    notes: [
      'Disclaimer: This hoodie runs small. For the perfect fit, we recommend ordering one size larger than your usual size.',
      POD_NOTE,
    ],
    buyUrl: 'https://eaglenation.co.uk/produit/unisex-hoodie/',
  },
  {
    slug: 'unisex-hoodie-2',
    name: 'Unisex Hoodie',
    subtitle: '50% pre-shrunk cotton, 50% polyester',
    price: '£30.50 – £32.50',
    categories: ['Accessories'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
    images: [
      { src: '/images/shop/unisex-heavy-blend-hoodie-black-front-67a9e5c991231.jpg', alt: 'Black unisex hoodie with a rainbow star print, front' },
      { src: '/images/shop/unisex-heavy-blend-hoodie-black-back-67a9e5c99243b.jpg', alt: 'Back of the hoodie, printed “Love is the answer.”' },
      { src: '/images/shop/unisex-heavy-blend-hoodie-black-left-67a9e5c992d17.jpg', alt: 'Black unisex hoodie, left side' },
      { src: '/images/shop/unisex-heavy-blend-hoodie-black-right-67a9e5c993540.jpg', alt: 'Black unisex hoodie, right side' },
    ],
    description:
      'Everyone needs a cozy go-to hoodie to curl up in, so go for one that’s soft, smooth, and stylish. It’s the perfect choice for cooler evenings!',
    features: [
      '50% pre-shrunk cotton, 50% polyester',
      'Fabric weight: 8.0 oz/yd² (271.25 g/m²)',
      'Air-jet spun yarn with a soft feel and reduced pilling',
      'Double-lined hood with matching drawcord',
      'Quarter-turned body to avoid crease down the middle',
      '1 × 1 athletic rib-knit cuffs and waistband with spandex',
      'Front pouch pocket',
      'Double-needle stitched collar, shoulders, armholes, cuffs, and hem',
      'Blank product sourced from Bangladesh, Nicaragua, Honduras or El Salvador',
    ],
    notes: [POD_NOTE],
    buyUrl: 'https://eaglenation.co.uk/produit/unisex-hoodie-2/',
  },
  {
    slug: 'aluminium-water-bottle',
    name: 'Aluminium Water Bottle',
    subtitle: '600ml, white finish',
    price: '£10.80',
    categories: ['Accessories'],
    colours: ['White'],
    sizes: ['600ml'],
    images: [
      { src: '/images/shop/aluminium-water-bottle-1.jpg', alt: 'White aluminium water bottle with the Eagle Nation mark' },
      { src: '/images/shop/aluminium-water-bottle-2.jpg', alt: 'Water bottle with the push-pull cap' },
      { src: '/images/shop/aluminium-water-bottle-3.jpg', alt: 'Water bottle with the loop cap' },
    ],
    description: 'Aluminium Drink Bottle in White Finish, 600ml capacity. Supplied individually in their own box.',
    features: ['Comes with a push-pull cap and a loop cap.'],
    notes: ['Please note, prints on this item are not seamless.'],
    buyUrl: 'https://eaglenation.co.uk/produit/aluminium-water-bottle-2/',
  },
];

// Stock photography (Unsplash licence) used where the old site had no suitable
// photo. Listed so the client can see exactly which images are not their own.
export const stockImages = [
  'stock/mentoring-conversation.jpg — Unsplash W3Jl3jREpDY',
  'stock/support-food-distribution.jpg — Unsplash 3k3l2brxmwQ',
  'stock/education-group-work.jpg — Unsplash hJvFI7iHptU',
  'stock/music-producer-studio.jpg — Unsplash 1zwJqd5cNys',
  'stock/music-singer-performance.jpg — Unsplash uDAr4KFKY40',
  'stock/music-singer-stage.jpg — Unsplash r1UCyK3dIfI',
  'stock/music-dancer.jpg — Unsplash A_IfOgYEQU4',
  'stock/music-songwriting-lyrics.jpg — Unsplash 5RkPbcmo7r8',
  'stock/sport-hands-basketball.jpg — Unsplash ohAr6vNawiI',
  'stock/sport-football-night.jpg — Unsplash HqTWHAikfDk',
];

// Every wording change from the old site, old → new. Spelling, spacing and
// grammar only; meaning unchanged.
export const CORRECTIONS: [string, string][] = [
  ['Ours values', 'Our values'],
  ['Ours coaches are:', 'Our coaches are:'],
  ['5£ per session', '£5 per session'],
  ['From 2010 until2015 ,', 'From 2010 until 2015,'],
  ['different music band, In 2016,', 'different music band. In 2016,'],
  ['first solo album Boniomo,', 'first solo album Boniomo.'],
  ['share any concerns on their minds on anything obstacle troubling them', 'share any concerns on their minds or any obstacle troubling them'],
  ['There is many children and young who facing daily parental problems in the community, Eagle Nation approching those kids to show them more posotives way to facing different troubles.', 'There are many children and young people facing daily parental problems in the community. Eagle Nation approaches those kids to show them more positive ways of facing different troubles.'],
  ['tools, skills, believe and competencies', 'tools, skills, belief and competencies'],
  ['That the reason Eagle Nation is here', 'That is the reason Eagle Nation is here'],
  ['I\'m Bonti Jay i\'m Ghanaian/British who join parent in UK., I took part', 'I’m Bonti Jay I’m Ghanaian/British who join parent in UK. I took part'],
  ['session, i\'m able', 'session, I’m able'],
  ['Are you a musician? just let us know.', 'Are you a musician? Just let us know.'],
];
