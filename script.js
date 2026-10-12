/* ============== DATA ============== */
const CATALOG = [
  { id:'water', name:'Water', color:'#1D74C9', code:'CAT.WTR',
    blurb:'Electrofusion, PEHD and butt-fusion fittings plus the valves and accessories that complete a pressurized water network.',
    icon:`<path d="M12 2s7 8 7 13a7 7 0 1 1-14 0c0-5 7-13 7-13Z"/>`,
    groups:[
      { name:'Electrofusion', types:['MANCHON ELECTROFITION','REDUCTION ELCTROFITION','COUD ELCTROFITION 45°','COUD ELCTROFITION 90°','TES ELECTROFITION'] },
      { name:'PEHD', types:['PEHD Coupling','PEHD Elbow','PEHD Tee'] },
      { name:'Butt Fusion', types:['REDUCTION BB','COUD BB 45°','COUD BB 90°','TES BB'] },
      { name:'Valves and Accessories', types:['COLLORETTE PEHD','BRID ACIER','JOIN BRID ACIER','Bolts'] },
    ] },
  { id:'gas', name:'Gas', color:'#F0B429', code:'CAT.GAS',
    blurb:'Pressure regulators and distribution pipework sized for domestic and industrial gas networks.',
    icon:`<path d="M8.5 14.5A3.5 3.5 0 1 0 12 18a4.5 4.5 0 0 0 2-8.5c-1 3-2.5 2-2-1C10 10 8.5 12 8.5 14.5Z"/>`,
    groups:[
      { name:'Pressure Regulators', types:['B6','B10','B25'] },
      { name:'Pipes', types:['DN 90 Pipe','DN 63 Pipe','DN 50 Pipe'] },
    ] },
  { id:'fire', name:'Fire Protection', color:'#E4402E', code:'CAT.FRP',
    blurb:'RIA fire hose cabinets and fire hydrants sized to code for building and site fire-fighting systems.',
    icon:`<path d="M12 2c1 3-1 4-1 6 0 1 1 2 2 2 2 0 2-2 2-2 2 2 3 5 3 7a6 6 0 1 1-12 0c0-4 3-8 6-13Z"/>`,
    groups:[
      { name:'RIA', types:['25/20','25/30','20/20','20/30'] },
      { name:'Fire Hydrant', types:['DN100','DN80'] },
    ] },
  { id:'sanitation', name:'Sanitation', color:'#0E7C6B', code:'CAT.SAN',
    blurb:'Manholes, gratings and check valves in cast iron, steel, PVC and aluminum for drainage and wastewater lines.',
    icon:`<path d="M4 10h16M4 14h16M6 6h12v12H6z"/>`,
    groups:[
      { name:'Manholes', types:['Cast Iron','Steel','PVC','Aluminum'] },
      { name:'Gratings', types:['Cast Iron','Steel','Aluminum'] },
      { name:'Check Valves', types:['Cast Iron','Steel','Aluminum'] },
    ] },
  { id:'pumps', name:'Pumps', color:'#F0862E', code:'CAT.PMP',
    blurb:'APM, ACM, XJM and Servo pump ranges for water transfer, boosting and pressurization duties.',
    icon:`<path d="M12 2v6M9 5h6M6 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"/>`,
    groups:[
      { name:'APM', types:['APM37','APM60'] },
      { name:'ACM', types:['XCM2','XCM3','XCM4'] },
      { name:'XJM', types:['1100S','900S','810S'] },
      { name:'Servo', types:['1.2','1.5','2.2'] },
    ] },
];

/* ============== PRODUCT DIMENSIONS (fill from the Excel file) ==============
   Key = product name as shown on the site chip. Format:
   'Coupling': { name:'Exact name from Excel', image:'images/file.jpg', dimensions:['d20','d25'] }
*/
const PRODUCT_DATA = {
  "MANCHON ELECTROFITION": { name:"MANCHON ELECTROFITION", image:'', dimensions:["DN 20", "DN 25", "DN 32", "DN 40", "DN 50", "DN 63", "DN 75", "DN 90", "DN 110", "DN 125", "DN 160", "DN 200", "DN 250"] },
  "REDUCTION ELCTROFITION": { name:"REDUCTION ELCTROFITION", image:'', dimensions:["25 - 20", "32 - 20", "32 - 25", "40 - 20", "40 - 25", "40 - 32", "50 - 20", "50 - 25", "50 - 32", "50 - 40", "63 - 20", "63 - 25", "63 - 32", "63 - 40", "63 - 50", "75 - 20", "75 - 25", "75 - 32", "75 - 40", "75 - 50", "75 - 63", "90 - 20", "90 - 25", "90 - 32", "90 - 40", "90 - 50", "90 - 63", "90 - 75", "110 - 20", "110 - 25", "110 - 32", "110 - 40", "110 - 50", "110 - 63", "110 - 75", "110 - 90", "125 - 20", "125 - 25", "125 - 32", "125 - 40", "125 - 50", "125 - 63", "125 - 75", "125 - 90", "125 - 110", "160 - 20", "160 - 25", "160 - 32", "160 - 40", "160 - 50", "160 - 63", "160 - 75", "160 - 90", "160 - 110", "160 - 125", "200 - 20", "200 - 25", "200 - 32", "200 - 40", "200 - 50", "200 - 63", "200 - 75", "200 - 90", "200 - 110", "200 - 125", "200 - 160"] },
  "COUD ELCTROFITION 45°": { name:"COUD ELCTROFITION 45°", image:'', dimensions:["20", "32", "40", "50", "63", "75", "90", "110", "125", "160", "200", "250"] },
  "COUD ELCTROFITION 90°": { name:"COUD ELCTROFITION 90°", image:'', dimensions:["20", "32", "40", "50", "63", "75", "90", "110", "125", "160", "200", "250"] },
  "TES ELECTROFITION": { name:"TES ELECTROFITION", image:'', dimensions:["DN 20", "DN 25", "DN 32", "DN 40", "DN 50", "DN 63", "DN 75", "DN 90", "DN 110", "DN 125", "DN 160", "DN 200", "DN 250"] },
  "REDUCTION BB": { name:"REDUCTION BB", image:'', dimensions:["25 - 20", "32 - 20", "32 - 25", "40 - 20", "40 - 25", "40 - 32", "50 - 20", "50 - 25", "50 - 32", "50 - 40", "63 - 20", "63 - 25", "63 - 32", "63 - 40", "63 - 50", "75 - 20", "75 - 25", "75 - 32", "75 - 40", "75 - 50", "75 - 63", "90 - 20", "90 - 25", "90 - 32", "90 - 40", "90 - 50", "90 - 63", "90 - 75", "110 - 20", "110 - 25", "110 - 32", "110 - 40", "110 - 50", "110 - 63", "110 - 75", "110 - 90", "125 - 20", "125 - 25", "125 - 32", "125 - 40", "125 - 50", "125 - 63", "125 - 75", "125 - 90", "125 - 110", "160 - 20", "160 - 25", "160 - 32", "160 - 40", "160 - 50", "160 - 63", "160 - 75", "160 - 90", "160 - 110", "160 - 125", "200 - 20", "200 - 25", "200 - 32", "200 - 40", "200 - 50", "200 - 63", "200 - 75", "200 - 90", "200 - 110", "200 - 125", "200 - 160"] },
  "COUD BB 45°": { name:"COUD BB 45°", image:'', dimensions:["20", "32", "40", "50", "63", "75", "90", "110", "125", "160", "200", "250"] },
  "COUD BB 90°": { name:"COUD BB 90°", image:'', dimensions:["20", "32", "40", "50", "63", "75", "90", "110", "125", "160", "200", "250"] },
  "TES BB": { name:"TES BB", image:'', dimensions:["DN 20", "DN 25", "DN 32", "DN 40", "DN 50", "DN 63", "DN 75", "DN 90", "DN 110", "DN 125", "DN 160", "DN 200", "DN 250"] },
  "COLLORETTE PEHD": { name:"COLLORETTE PEHD", image:'', dimensions:["20", "25", "32", "40", "50", "63", "75", "90", "110", "125", "160", "200", "250", "315", "400"] },
  "BRID ACIER": { name:"BRID ACIER", image:'', dimensions:["40", "50", "65", "80", "100", "125", "150", "200", "250", "300"] },
  "JOIN BRID ACIER": { name:"JOIN BRID ACIER", image:'', dimensions:["40", "50", "65", "80", "100", "125", "150", "200", "250", "300"] }
};

/* ============== PRODUCT IMAGES (files placed in the same folder as index.html) ============== */
const IMAGE_DIR = '';
const IMAGE_EXTS = ['png','jpg','jpeg','webp','jfif'];
const PRODUCT_IMAGES = {
  'MANCHON ELECTROFITION':  'manchon el',
  'REDUCTION ELCTROFITION': 'reduction el',
  'COUD ELCTROFITION 45°':  'coud el 45',
  'COUD ELCTROFITION 90°':  'coud el',
  'TES ELECTROFITION':      'tes el',
  'REDUCTION BB':           'reduction bb',
  'COUD BB 45°':            'coud bb 45',
  'COUD BB 90°':            'coud bb',
  'TES BB':                 'tes bb',
  'COLLORETTE PEHD':        'collorette',
  'BRID ACIER':             'brid',
  'JOIN BRID ACIER':        'join brid'
};
let imgToken = 0;
function loadProductImage(name){
  const card = document.getElementById('productCard');
  card.classList.remove('has-bg');
  card.style.backgroundImage = '';
  const base = PRODUCT_IMAGES[name];
  if(!base) return;
  const token = ++imgToken;
  let i = 0;
  const tryNext = ()=>{
    if(token !== imgToken || i >= IMAGE_EXTS.length) return;
    const url = IMAGE_DIR + encodeURIComponent(base) + '.' + IMAGE_EXTS[i++];
    const img = new Image();
    img.onload = ()=>{
      if(token !== imgToken) return;
      card.style.backgroundImage = 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 38%, rgba(255,255,255,.95) 62%), url("' + url + '")';
      card.classList.add('has-bg');
    };
    img.onerror = tryNext;
    img.src = url;
  };
  tryNext();
}

/* ============== "DATABASE" (in-memory for this static build) ============== */
const DB = { customer:{ name:'', phone:'' }, cart:[] };

/* ============== LANGUAGE (EN / FR / AR) ============== */
const I18N = {
 "en": {
  "doc.title": "HydroX — Hydraulics & Fire Protection Systems",
  "tagline": "Engineered flow & fire-safety systems",
  "nav.water": "Water",
  "nav.gas": "Gas",
  "nav.fire": "Fire Protection",
  "nav.sanitation": "Sanitation",
  "nav.pumps": "Pumps",
  "nav.contact": "Contact",
  "back": "Back",
  "cart": "Cart",
  "theme": "Toggle dark / light mode",
  "close": "Close",
  "entry.title": "Welcome to HydroX",
  "entry.sub": "Tell us who you are before browsing the catalog.",
  "entry.name": "Full name",
  "entry.phone": "Phone number",
  "entry.nameErr": "Please enter your name.",
  "entry.phoneErr": "Please enter a valid phone number.",
  "entry.btn": "Enter Website",
  "hero.eyebrow": "Explore our range",
  "view": "View Products",
  "hero.tag": "Hydraulics & Fire Protection",
  "trust.q.t": "Quality Products",
  "trust.q.s": "Reliable & certified",
  "trust.e.t": "Expert Support",
  "trust.e.s": "We're here to help",
  "trust.d.t": "Fast Delivery",
  "trust.d.s": "On time, every time",
  "trust.p.t": "Trusted Partner",
  "trust.p.s": "Your satisfaction, our priority",
  "blurb.water": "Electrofusion, PEHD and butt-fusion fittings plus the valves and accessories that complete a pressurized water network.",
  "blurb.gas": "Pressure regulators and distribution pipework sized for domestic and industrial gas networks.",
  "blurb.fire": "RIA fire hose cabinets and fire hydrants sized to code for building and site fire-fighting systems.",
  "blurb.sanitation": "Manholes, gratings and check valves in cast iron, steel, PVC and aluminum for drainage and wastewater lines.",
  "blurb.pumps": "APM, ACM, XJM and Servo pump ranges for water transfer, boosting and pressurization duties.",
  "type.one": "type",
  "type.many": "types",
  "dim.label": "Dimension",
  "dim.select": "Select a dimension",
  "dim.err": "Please select a dimension",
  "addcart": "Add to Cart",
  "added": "Added to cart ✓",
  "cart.title": "Your Cart",
  "cart.total": "Total items",
  "cart.order": "Order",
  "cart.empty": "Your cart is empty.",
  "cart.ordering": "Ordering as",
  "contact.eyebrow": "Get in touch",
  "contact.h2": "Need a spec confirmed<br>before you order?",
  "contact.lead": "Reach out directly for pricing, technical datasheets, or help matching a fitting to your project spec.",
  "contact.phone": "Phone",
  "contact.email": "Email",
  "footer": "© 2026 HydroX. Hydraulics & fire protection systems.",
  "words": {}
 },
 "fr": {
  "doc.title": "HydroX — Systèmes d’hydraulique et de protection incendie",
  "tagline": "Systèmes hydrauliques et de protection incendie",
  "nav.water": "Eau",
  "nav.gas": "Gaz",
  "nav.fire": "Protection incendie",
  "nav.sanitation": "Assainissement",
  "nav.pumps": "Pompes",
  "nav.contact": "Contact",
  "back": "Retour",
  "cart": "Panier",
  "theme": "Basculer mode sombre / clair",
  "close": "Fermer",
  "entry.title": "Bienvenue chez HydroX",
  "entry.sub": "Dites-nous qui vous êtes avant de parcourir le catalogue.",
  "entry.name": "Nom complet",
  "entry.phone": "Numéro de téléphone",
  "entry.nameErr": "Veuillez saisir votre nom.",
  "entry.phoneErr": "Veuillez saisir un numéro de téléphone valide.",
  "entry.btn": "Entrer sur le site",
  "hero.eyebrow": "Découvrez notre gamme",
  "view": "Voir les produits",
  "hero.tag": "Hydraulique et protection incendie",
  "trust.q.t": "Produits de qualité",
  "trust.q.s": "Fiables et certifiés",
  "trust.e.t": "Support expert",
  "trust.e.s": "Nous sommes là pour vous aider",
  "trust.d.t": "Livraison rapide",
  "trust.d.s": "Toujours à l’heure",
  "trust.p.t": "Partenaire de confiance",
  "trust.p.s": "Votre satisfaction, notre priorité",
  "blurb.water": "Raccords électrosoudables, PEHD et soudés bout à bout, ainsi que les vannes et accessoires qui complètent un réseau d’eau sous pression.",
  "blurb.gas": "Détendeurs de pression et canalisations de distribution dimensionnés pour les réseaux de gaz domestiques et industriels.",
  "blurb.fire": "Robinets d’incendie armés (RIA) et poteaux d’incendie dimensionnés selon les normes pour les systèmes de lutte contre l’incendie.",
  "blurb.sanitation": "Regards, grilles et clapets anti-retour en fonte, acier, PVC et aluminium pour les réseaux d’évacuation et d’eaux usées.",
  "blurb.pumps": "Gammes de pompes APM, ACM, XJM et Servo pour le transfert d’eau, le surpressage et la mise en pression.",
  "type.one": "type",
  "type.many": "types",
  "dim.label": "Dimension",
  "dim.select": "Sélectionnez une dimension",
  "dim.err": "Veuillez sélectionner une dimension",
  "addcart": "Ajouter au panier",
  "added": "Ajouté au panier ✓",
  "cart.title": "Votre panier",
  "cart.total": "Total des articles",
  "cart.order": "Commander",
  "cart.empty": "Votre panier est vide.",
  "cart.ordering": "Commande au nom de",
  "contact.eyebrow": "Contactez-nous",
  "contact.h2": "Besoin de confirmer une<br>spécification avant de commander ?",
  "contact.lead": "Contactez-nous directement pour les prix, les fiches techniques ou pour associer un raccord aux spécifications de votre projet.",
  "contact.phone": "Téléphone",
  "contact.email": "E-mail",
  "footer": "© 2026 HydroX. Systèmes d’hydraulique et de protection incendie.",
  "words": {
   "Water": "Eau",
   "Gas": "Gaz",
   "Fire Protection": "Protection incendie",
   "Sanitation": "Assainissement",
   "Pumps": "Pompes",
   "Electrofusion": "Électrofusion",
   "Butt Fusion": "Soudure bout à bout",
   "Valves and Accessories": "Vannes et accessoires",
   "Pressure Regulators": "Détendeurs de pression",
   "Pipes": "Tuyaux",
   "Fire Hydrant": "Poteau d’incendie",
   "Manholes": "Regards",
   "Gratings": "Grilles",
   "Check Valves": "Clapets anti-retour",
   "Cast Iron": "Fonte",
   "Steel": "Acier",
   "Aluminum": "Aluminium",
   "Bolts": "Boulons",
   "PEHD Coupling": "Manchon PEHD",
   "PEHD Elbow": "Coude PEHD",
   "PEHD Tee": "Té PEHD",
   "DN 90 Pipe": "Tuyau DN 90",
   "DN 63 Pipe": "Tuyau DN 63",
   "DN 50 Pipe": "Tuyau DN 50"
  }
 },
 "ar": {
  "doc.title": "HydroX — أنظمة الهيدروليك والحماية من الحرائق",
  "tagline": "أنظمة هيدروليكية ومكافحة الحرائق",
  "nav.water": "المياه",
  "nav.gas": "الغاز",
  "nav.fire": "الحماية من الحرائق",
  "nav.sanitation": "الصرف الصحي",
  "nav.pumps": "المضخات",
  "nav.contact": "اتصل بنا",
  "back": "رجوع",
  "cart": "السلة",
  "theme": "تبديل الوضع الداكن / الفاتح",
  "close": "إغلاق",
  "entry.title": "مرحبًا بك في HydroX",
  "entry.sub": "عرّفنا بنفسك قبل تصفح الكتالوج.",
  "entry.name": "الاسم الكامل",
  "entry.phone": "رقم الهاتف",
  "entry.nameErr": "يرجى إدخال اسمك.",
  "entry.phoneErr": "يرجى إدخال رقم هاتف صحيح.",
  "entry.btn": "دخول الموقع",
  "hero.eyebrow": "اكتشف منتجاتنا",
  "view": "عرض المنتجات",
  "hero.tag": "الهيدروليك والحماية من الحرائق",
  "trust.q.t": "منتجات عالية الجودة",
  "trust.q.s": "موثوقة ومعتمدة",
  "trust.e.t": "دعم الخبراء",
  "trust.e.s": "نحن هنا لمساعدتك",
  "trust.d.t": "توصيل سريع",
  "trust.d.s": "في الموعد دائمًا",
  "trust.p.t": "شريك موثوق",
  "trust.p.s": "رضاكم أولويتنا",
  "blurb.water": "وصلات الدمج الكهربائي وPEHD واللحام التناكبي، بالإضافة إلى الصمامات والملحقات التي تُكمل شبكة المياه المضغوطة.",
  "blurb.gas": "منظمات الضغط وأنابيب التوزيع المناسبة لشبكات الغاز المنزلية والصناعية.",
  "blurb.fire": "بكرات خراطيم الإطفاء (RIA) وصنابير الحريق المصممة وفق المعايير لأنظمة مكافحة الحرائق في المباني والمواقع.",
  "blurb.sanitation": "أغطية المنهول والشبكات وصمامات عدم الرجوع من الحديد الزهر والصلب وPVC والألمنيوم لخطوط الصرف ومياه الصرف الصحي.",
  "blurb.pumps": "مضخات من سلاسل APM وACM وXJM وServo لنقل المياه ورفع الضغط وتعزيزه.",
  "type.one": "نوع",
  "type.many": "أنواع",
  "dim.label": "المقاس",
  "dim.select": "اختر المقاس",
  "dim.err": "يرجى اختيار المقاس",
  "addcart": "أضف إلى السلة",
  "added": "تمت الإضافة إلى السلة ✓",
  "cart.title": "سلتك",
  "cart.total": "إجمالي القطع",
  "cart.order": "اطلب الآن",
  "cart.empty": "سلتك فارغة.",
  "cart.ordering": "الطلب باسم",
  "contact.eyebrow": "تواصل معنا",
  "contact.h2": "تحتاج إلى تأكيد مواصفات<br>قبل الطلب؟",
  "contact.lead": "تواصل معنا مباشرة للحصول على الأسعار والبطاقات الفنية أو للمساعدة في اختيار القطعة المناسبة لمواصفات مشروعك.",
  "contact.phone": "الهاتف",
  "contact.email": "البريد الإلكتروني",
  "footer": "© 2026 HydroX. أنظمة الهيدروليك والحماية من الحرائق.",
  "words": {
   "Water": "المياه",
   "Gas": "الغاز",
   "Fire Protection": "الحماية من الحرائق",
   "Sanitation": "الصرف الصحي",
   "Pumps": "المضخات",
   "Electrofusion": "الدمج الكهربائي",
   "Butt Fusion": "اللحام التناكبي",
   "Valves and Accessories": "الصمامات والملحقات",
   "Pressure Regulators": "منظمات الضغط",
   "Pipes": "أنابيب",
   "Fire Hydrant": "صنبور الحريق",
   "Manholes": "أغطية المنهول",
   "Gratings": "شبكات",
   "Check Valves": "صمامات عدم الرجوع",
   "Cast Iron": "حديد زهر",
   "Steel": "صلب",
   "Aluminum": "ألمنيوم",
   "Bolts": "براغي",
   "PEHD Coupling": "وصلة PEHD",
   "PEHD Elbow": "كوع PEHD",
   "PEHD Tee": "تيه PEHD",
   "DN 90 Pipe": "أنبوب DN 90",
   "DN 63 Pipe": "أنبوب DN 63",
   "DN 50 Pipe": "أنبوب DN 50"
  }
 }
};
let LANG = 'en';
function t(k){ return (I18N[LANG] && I18N[LANG][k]) || I18N.en[k] || k; }
function tw(w){ const m = I18N[LANG] && I18N[LANG].words; return (m && m[w]) || w; }

/* ============== RENDER CATALOG ============== */
const catalogEl = document.getElementById('catalog');
function renderCatalog(){
catalogEl.innerHTML = '';
CATALOG.forEach(cat=>{
  const section = document.createElement('section');
  section.className = 'cat-section';
  section.id = cat.id;
  section.style.setProperty('--cat-color', cat.color);
  section.innerHTML = `
    <div class="wrap">
      <div class="section-head reveal">
        <span class="cat-code">${cat.code}</span>
        <h2>${tw(cat.name)}</h2>
        <p>${t('blurb.' + cat.id)}</p>
      </div>
      <div class="group-grid">
        ${cat.groups.map(g=>`
          <article class="group-card">
            <span class="corner tl"></span><span class="corner br"></span>
            <svg class="g-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${cat.icon}</svg>
            <h3>${tw(g.name)}</h3>
            <span class="g-count">${g.types.length} ${g.types.length>1 ? t('type.many') : t('type.one')}</span>
            <div class="chip-list">
              ${g.types.map(ty=>`<span class="chip" data-cat="${cat.name}" data-color="${cat.color}" data-group="${g.name}" data-type="${ty}" data-icon='${cat.icon.replace(/'/g,"&apos;")}'>${tw(ty)}</span>`).join('')}
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
  catalogEl.appendChild(section);
});
revealNew();
}

/* ============== HEADER / NAV BEHAVIOR ============== */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', ()=>{ header.classList.toggle('scrolled', window.scrollY > 8); }, { passive:true });

const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
navToggle.addEventListener('click', ()=>{
  const open = mobileNav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});
mobileNav.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=>{ mobileNav.classList.remove('open'); navToggle.classList.remove('open'); navToggle.setAttribute('aria-expanded', false); });
});

document.getElementById('backBtn').addEventListener('click', ()=>{
  if(window.history.length>1){ window.history.back(); } else { window.scrollTo({top:0,behavior:'smooth'}); }
});

/* ============== SCROLL REVEAL ============== */
let initialDone = false;
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); } });
}, { threshold:0.12, rootMargin:'0px 0px -40px 0px' });
function revealNew(){
  document.querySelectorAll('.reveal, .group-card').forEach(el=>{ if(initialDone){ el.classList.add('in'); } else { io.observe(el); } });
}

/* ============== ENTRY GATE ============== */
const entryOverlay = document.getElementById('entryOverlay');
const entryForm = document.getElementById('entryForm');
const entryName = document.getElementById('entryName');
const entryPhone = document.getElementById('entryPhone');

entryForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let valid = true;
  document.getElementById('entryNameError').classList.remove('show');
  document.getElementById('entryPhoneError').classList.remove('show');

  if(entryName.value.trim().length < 2){
    document.getElementById('entryNameError').classList.add('show'); valid = false;
  }
  if(entryPhone.value.trim().length < 6){
    document.getElementById('entryPhoneError').classList.add('show'); valid = false;
  }
  if(!valid) return;

  DB.customer.name = entryName.value.trim();
  DB.customer.phone = entryPhone.value.trim();

  entryOverlay.style.opacity = '0';
  entryOverlay.style.transition = 'opacity .35s ease';
  setTimeout(()=>{ entryOverlay.style.display = 'none'; document.body.classList.remove('locked'); }, 350);
});

/* ============== PRODUCT MODAL ============== */
const productModal = document.getElementById('productModal');
const pImage = document.getElementById('pImage');
const pImageIcon = document.getElementById('pImageIcon');
const pCat = document.getElementById('pCat');
const pName = document.getElementById('pName');
const qtyInput = document.getElementById('qtyInput');
const addMsg = document.getElementById('addMsg');
let currentProduct = null;

const dimRow = document.getElementById('dimRow');
const dimSelect = document.getElementById('dimSelect');

catalogEl.addEventListener('click', (e)=>{
  const chip = e.target.closest('.chip');
  if(!chip) return;
  const data = PRODUCT_DATA[chip.dataset.type] || null;
  currentProduct = {
    id: chip.dataset.cat + '__' + chip.dataset.group + '__' + chip.dataset.type,
    category: chip.dataset.cat,
    group: chip.dataset.group,
    type: data && data.name ? data.name : chip.dataset.type,
    color: chip.dataset.color,
    dimension: '',
  };
  pCat.textContent = tw(currentProduct.category) + ' — ' + tw(currentProduct.group);
  pName.textContent = tw(currentProduct.type);
  pImage.style.setProperty('--pcolor', currentProduct.color);
  if(data && data.image){
    pImage.innerHTML = '<img src="' + data.image + '" alt="' + currentProduct.type + '">';
  } else {
    pImage.innerHTML = '<svg id="pImageIcon" viewBox="0 0 24 24" fill="none" stroke="' + currentProduct.color + '" stroke-width="1.4">' + chip.dataset.icon + '</svg>';
  }
  if(data && data.dimensions && data.dimensions.length){
    dimSelect.innerHTML = '<option value="" disabled selected>' + t('dim.select') + '</option>' + data.dimensions.map(d => '<option value="' + d + '">' + d + '</option>').join('');
    dimRow.classList.add('show');
  } else {
    dimSelect.innerHTML = '';
    dimRow.classList.remove('show');
  }
  qtyInput.value = 1;
  addMsg.classList.remove('show');
  productModal.classList.add('open');
  loadProductImage(chip.dataset.type);
});

document.getElementById('productClose').addEventListener('click', ()=> productModal.classList.remove('open'));
productModal.addEventListener('click', (e)=>{ if(e.target === productModal) productModal.classList.remove('open'); });

document.getElementById('qtyMinus').addEventListener('click', ()=>{ qtyInput.value = Math.max(1, (+qtyInput.value||1) - 1); });
document.getElementById('qtyPlus').addEventListener('click', ()=>{ qtyInput.value = (+qtyInput.value||1) + 1; });

document.getElementById('addToCartBtn').addEventListener('click', ()=>{
  if(!currentProduct) return;
  if(dimRow.classList.contains('show') && !dimSelect.value){ addMsg.textContent = t('dim.err'); addMsg.style.color='var(--fire)'; addMsg.classList.add('show'); return; }
  addMsg.textContent = t('added'); addMsg.style.color='';
  const qty = Math.max(1, +qtyInput.value || 1);
  const dimension = dimRow.classList.contains('show') ? dimSelect.value : '';
  const itemId = currentProduct.id + '__' + dimension;
  const existing = DB.cart.find(i => i.id === itemId);
  if(existing){ existing.qty += qty; } else { DB.cart.push({ ...currentProduct, id:itemId, dimension, qty }); }
  updateCartBadge();
  addMsg.classList.add('show');
  setTimeout(()=> productModal.classList.remove('open'), 700);
});

/* ============== CART MODAL ============== */
const cartModal = document.getElementById('cartModal');
const cartList = document.getElementById('cartList');
const cartBadge = document.getElementById('cartBadge');
const cartTotal = document.getElementById('cartTotal');
const cartTotalCount = document.getElementById('cartTotalCount');
const customerNote = document.getElementById('customerNote');

function updateCartBadge(){
  const total = DB.cart.reduce((s,i)=> s + i.qty, 0);
  cartBadge.textContent = total;
}

function renderCart(){
  if(DB.cart.length === 0){
    cartList.innerHTML = '<div class="cart-empty">' + t('cart.empty') + '</div>';
    cartTotal.style.display = 'none';
  } else {
    cartList.innerHTML = DB.cart.map((item,idx)=>`
      <div class="cart-row" style="--pcolor:${item.color}">
        <span class="cr-dot"></span>
        <div class="cr-info">
          <div class="cr-name">${tw(item.type)}${item.dimension ? ' — ' + item.dimension : ''}</div>
          <div class="cr-cat">${tw(item.category)} — ${tw(item.group)}</div>
        </div>
        <input type="number" min="1" class="cr-qty" value="${item.qty}" data-idx="${idx}">
        <button type="button" class="cr-remove" data-idx="${idx}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
      </div>
    `).join('');
    const total = DB.cart.reduce((s,i)=> s + i.qty, 0);
    cartTotalCount.textContent = total;
    cartTotal.style.display = 'flex';
  }
  customerNote.textContent = DB.customer.name ? `${t('cart.ordering')} ${DB.customer.name} — ${DB.customer.phone}` : '';
  updateCartBadge();
}

document.getElementById('cartBtn').addEventListener('click', ()=>{ renderCart(); cartModal.classList.add('open'); });
document.getElementById('cartClose').addEventListener('click', ()=> cartModal.classList.remove('open'));
cartModal.addEventListener('click', (e)=>{ if(e.target === cartModal) cartModal.classList.remove('open'); });

cartList.addEventListener('change', (e)=>{
  if(e.target.classList.contains('cr-qty')){
    const idx = +e.target.dataset.idx;
    DB.cart[idx].qty = Math.max(1, +e.target.value || 1);
    renderCart();
  }
});
cartList.addEventListener('click', (e)=>{
  const btn = e.target.closest('.cr-remove');
  if(!btn) return;
  DB.cart.splice(+btn.dataset.idx, 1);
  renderCart();
});

/* ============== ORDER -> WHATSAPP ==============
   Builds a text message from the cart (same order/format as the cart window)
   and opens WhatsApp with it pre-filled for the shop number. */
const WHATSAPP_NUMBER = '213794695866'; // 0794695866 in international format (Algeria +213)

function buildOrderMessage(){
  const lines = DB.cart.map((item, idx)=>{
    const name = tw(item.type) + (item.dimension ? ' — ' + item.dimension : '');
    const cat  = tw(item.category) + ' — ' + tw(item.group);
    return (idx + 1) + '. ' + name + '\n' + cat + '\n' + 'x' + item.qty;
  });
  const total = DB.cart.reduce((sum, i)=> sum + i.qty, 0);
  return [
    '*HydroX — ' + t('cart.title') + '*',
    DB.customer.name + ' — ' + DB.customer.phone,
    '',
    lines.join('\n\n'),
    '',
    t('cart.total') + ': ' + total
  ].join('\n');
}

document.getElementById('orderBtn').addEventListener('click', ()=>{
  if(DB.cart.length === 0){ alert(t('cart.empty')); return; }

  const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(buildOrderMessage());
  const w = window.open(url, '_blank');
  if(!w){ window.location.href = url; }

  DB.cart.length = 0;
  updateCartBadge();
  renderCart();
  cartModal.classList.remove('open');
});

/* ============== THEME + LANGUAGE ENGINE ============== */
function applyTheme(th, persist){
  document.documentElement.setAttribute('data-theme', th);
  document.querySelectorAll('.theme-toggle').forEach(b=> b.setAttribute('aria-pressed', th === 'dark'));
  if(persist){ try{ localStorage.setItem('hx-theme', th); }catch(e){} }
}
function applyLanguage(l, persist){
  if(!I18N[l]) l = 'en';
  LANG = l;
  const root = document.documentElement;
  root.lang = l;
  root.dir = (l === 'ar') ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{ el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-label]').forEach(el=>{ const v = t(el.dataset.i18nLabel); el.setAttribute('aria-label', v); el.title = v; });
  document.querySelectorAll('.lang-select').forEach(sel=>{ sel.value = l; });
  document.title = t('doc.title');
  renderCatalog();
  renderCart();
  if(persist){ try{ localStorage.setItem('hx-lang', l); }catch(e){} }
}

document.querySelectorAll('.lang-select').forEach(sel=>{
  sel.addEventListener('change', ()=> applyLanguage(sel.value, true));
});
document.querySelectorAll('.theme-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyTheme(cur === 'dark' ? 'light' : 'dark', true);
  });
});

(function init(){
  let savedTheme = null, savedLang = null;
  try{ savedTheme = localStorage.getItem('hx-theme'); savedLang = localStorage.getItem('hx-lang'); }catch(e){}
  applyTheme(savedTheme === 'dark' ? 'dark' : 'light', false);
  const nav = (navigator.language || 'en').slice(0,2).toLowerCase();
  applyLanguage(savedLang || (I18N[nav] ? nav : 'en'), false);
  initialDone = true;
})();