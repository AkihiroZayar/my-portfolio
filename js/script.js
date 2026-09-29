
/* Admin password — only a salted PBKDF2 hash is stored, never the password itself.
   Leave ADMIN_HASH empty and triple-click the "AkihiroLabs apps" label to create one;
   the setup screen shows the exact line to paste here. */
const ADMIN_HASH = "";
const STORE_KEY = "akihirolabs_site_v1"; // new key for the AkihiroLabs rebrand (old key: ztt_portfolio_v2)
const GH = "https://github.com/AkihiroZayar/";
const LIVE = "https://akihirozayar.github.io/";
const DISCORD = "https://discord.gg/RwHzT7X85";

const DEFAULT_DATA = {
  avatar: null, // optional image set from admin; the AkihiroLabs badge is shown when null
  hero: {
    eyebrow: {en:"AkihiroLabs · Tokyo", ja:"AkihiroLabs · 東京"},
    title:   {en:"Small apps,<br><span>made to be used.</span>", ja:"毎日使える、<br><span>小さなアプリ。</span>"},
    sub:     {en:"AkihiroLabs is a one-person indie studio in Tokyo. Every app runs in your browser, keeps your data on your own device, and speaks English, 日本語 and မြန်မာ.",
              ja:"AkihiroLabsは東京のひとり開発スタジオです。どのアプリもブラウザだけで動き、データは自分の端末に保存。英語・日本語・ミャンマー語に対応しています。"},
    side1h:  {en:"The studio", ja:"スタジオ"},
    side1p:  {en:"Founded by Akihiro, a student developer in Tokyo. Every app is designed, built and shipped solo.", ja:"東京の学生開発者Akihiroが運営。企画・デザイン・開発・リリースまで一人で行っています。"},
    side2h:  {en:"The apps", ja:"アプリ"},
    side2p:  {en:"From a full point-of-sale system to a furigana tool and a Discord bot.", ja:"本格的なPOSシステムから、ふりがなツール、Discordボットまで。"},
    followh: {en:"Follow", ja:"フォロー"}
  },
  socials: [
    {icon:"⌥", label:"GitHub", url:"https://github.com/AkihiroZayar"},
    {icon:"💬", label:"Discord", url:DISCORD}
  ],
  about: {
    heading: {en:"Built simple. Built to last.", ja:"シンプルに、長く使えるように。"},
    text: {en:"Every AkihiroLabs app is designed to be simple to run and reliable to use: it works right in the browser, keeps data on your own device, and needs no account or install.\n\nThe apps are written in plain JavaScript — no heavy frameworks — and built in three languages: English, Japanese and Burmese. Byte the raccoon 🦝 is the studio mascot and shows up across the apps.",
           ja:"AkihiroLabsのアプリは、ブラウザだけで動き、データは自分の端末に保存され、アカウントもインストールも不要。誰でもすぐ使えるように設計しています。\n\nフレームワークに頼らずプレーンなJavaScriptで開発し、英語・日本語・ミャンマー語の3言語に対応。マスコットのバイト🦝が各アプリに登場します。"},
    stats: [
      {num:"7", suffix:"", label:{en:"Apps shipped", ja:"公開中のアプリ"},
       desc:{en:"Live on GitHub Pages or running on Discord.", ja:"GitHub PagesとDiscordで公開中。"}},
      {num:"3", suffix:"", label:{en:"Languages", ja:"対応言語"},
       desc:{en:"English, Japanese and Burmese — built into the apps.", ja:"英語・日本語・ミャンマー語をアプリに標準搭載。"}}
    ]
  },
  strip: {
    label: {en:"AkihiroLabs apps", ja:"AkihiroLabs アプリ"},
    items: ["◆ AkiPOS","¥ ShiftPay","🔔 ByteBell","漢 Kanji Bridge","0x NumConv","⏱ Cyber Clock","🦝 Byte Utility"]
  },
  skillsHeading: {en:"What goes into every app", ja:"すべてのアプリに込めているもの"},
  skills: [
    {icon:"⚡", title:{en:"Vanilla JavaScript", ja:"Vanilla JavaScript"}, desc:{en:"Complete apps with no heavy frameworks or build tools.", ja:"重いフレームワークやビルドツールなしで完成させる。"}},
    {icon:"🗄️", title:{en:"Local-first data", ja:"ローカルファースト"}, desc:{en:"localStorage and IndexedDB — your data stays on your device.", ja:"localStorage・IndexedDBで、データは自分の端末に。"}},
    {icon:"🎨", title:{en:"One design system", ja:"統一デザイン"}, desc:{en:"Navy, white and cyan — the same look across every product.", ja:"ネイビー・白・シアン。全製品で同じデザイン。"}},
    {icon:"🌐", title:{en:"Trilingual UX", ja:"3言語UX"}, desc:{en:"English / 日本語 / မြန်မာ, including Burmese script.", ja:"英・日・緬の切替。ミャンマー文字にも対応。"}},
    {icon:"🇯🇵", title:{en:"Japanese language tech", ja:"日本語処理"}, desc:{en:"Morphological analysis, furigana and JLPT study tools.", ja:"形態素解析、ふりがな、JLPT学習ツール。"}},
    {icon:"📊", title:{en:"Charts & export", ja:"グラフ・出力"}, desc:{en:"Dashboards plus PDF, Excel and CSV reports.", ja:"ダッシュボードとPDF・Excel・CSVレポート。"}},
    {icon:"📲", title:{en:"PWA & push", ja:"PWA・プッシュ通知"}, desc:{en:"Installable apps with offline mode and Web Push.", ja:"インストール可能、オフライン対応、Web Push通知。"}},
    {icon:"🚀", title:{en:"Shipping & versioning", ja:"リリース管理"}, desc:{en:"Semantic versions, changelogs and GitHub Pages deploys.", ja:"セマンティックバージョニング、変更履歴、GitHub Pagesで公開。"}}
  ],
  projHeading: {en:"The apps", ja:"アプリ一覧"},
  projects: [
    {logo:"assets/app-akihirolabs-pos.png", icon:"◆", tag:{en:"Flagship", ja:"主力製品"}, title:"AkihiroLabs POS",
     desc:{en:"Point-of-sale for bars, cafés and small shops: staff PIN login, customer tabs, happy hour, inventory alerts, and PDF/CSV reports with Burmese support.",
           ja:"バー・カフェ・小売店向けPOS。スタッフPINログイン、顧客タブ、ハッピーアワー、在庫アラート、ミャンマー語対応のPDF/CSVレポート。"},
     tech:["IndexedDB","EN / MY","v10"], live:LIVE+"akihirolabs-pos/", repo:GH+"akihirolabs-pos"},
    {logo:"assets/app-shiftpay.png", icon:"¥", tag:{en:"Finance", ja:"収入管理"}, title:"ShiftPay",
     desc:{en:"Calendar-based income tracker for part-time workers in Japan — holiday rates, taxes, 年収の壁 progress and PDF/Excel export.",
           ja:"日本のアルバイト向けカレンダー型収入トラッカー。祝日レート、税金、年収の壁、PDF/Excel出力。"},
     tech:["Calendar","Charts","Export"], live:LIVE+"shiftpay/", repo:GH+"shiftpay"},
    {logo:"assets/app-bytebell.png", icon:"🔔", tag:{en:"Productivity", ja:"生産性"}, title:"ByteBell",
     desc:{en:"Your weekly timetable with smart reminders — an installable PWA with Web Push for iPhone and Android.",
           ja:"週間時間割とスマートリマインダー。iPhone・Android対応、Web Push通知付きのPWA。"},
     tech:["PWA","Web Push","EN / JA / MY"], live:LIVE+"bytebell/", repo:GH+"bytebell"},
    {logo:"assets/app-kanji-bridge.png", icon:"漢", tag:{en:"Language", ja:"言語"}, title:"Kanji Bridge 漢字ブリッジ",
     desc:{en:"Paste any Japanese text and get furigana above every kanji — then export it as a PDF.",
           ja:"日本語の文章を貼り付けるだけで、すべての漢字にふりがなを表示。PDFで保存できます。"},
     tech:["Kuromoji","Furigana","PDF"], live:LIVE+"kanji-bridge/", repo:GH+"kanji-bridge"},
    {logo:"assets/app-numconv.png", icon:"0x", tag:{en:"Study", ja:"学習"}, title:"NumConv",
     desc:{en:"Number system converter for decimal, binary, hex and octal — with step-by-step breakdowns, tables and a quiz.",
           ja:"10進・2進・16進・8進の変換ツール。計算手順、早見表、クイズ付き。"},
     tech:["Converter","Quiz","ASCII"], live:LIVE+"numconv/", repo:GH+"numconv"},
    {logo:"assets/app-cyber-clock.png", icon:"⏱", tag:{en:"Focus", ja:"集中"}, title:"Cyber Clock",
     desc:{en:"A neon desk clock with time-aware messages and a distraction-free focus mode.",
           ja:"時間帯でメッセージが変わるネオン風デスククロック。集中モード付き。"},
     tech:["Canvas","Focus mode"], live:LIVE+"cyber-clock/", repo:GH+"cyber-clock"},
    {logo:"assets/app-utility-bot.png", icon:"🦝", tag:{en:"Discord bot", ja:"Discordボット"}, title:"Byte Utility",
     desc:{en:"The AkihiroLabs Discord bot — Byte greets the server in JST, welcomes new members and keeps spam away.",
           ja:"AkihiroLabsのDiscordボット。JSTで挨拶、新メンバーの歓迎、スパム対策。"},
     tech:["discord.js","Node.js","Slash commands"], live:DISCORD, liveLabel:{en:"Meet Byte ↗", ja:"Byteに会う ↗"}, repo:GH+"utility-bot"}
  ],
  labHeading: {en:"In the lab", ja:"開発中"},
  labSub: {en:"Not public yet — follow along on Discord.", ja:"まだ非公開。進捗はDiscordで。"},
  lab: [
    {icon:"👥", title:"HiroCrew", desc:{en:"Employee management with a kiosk-style attendance screen.", ja:"キオスク型の勤怠画面を備えた従業員管理アプリ。"}},
    {icon:"📚", title:"LibroHiro", desc:{en:"A library management system for community libraries.", ja:"地域図書館のための図書館管理システム。"}},
    {icon:"🃏", title:"KanjiFlash", desc:{en:"JLPT kanji quiz app with a trilingual UI.", ja:"3言語UIのJLPT漢字クイズアプリ。"}}
  ],
  contact: {
    heading: {en:"Come say hi on Discord", ja:"Discordで会いましょう"},
    text: {en:"New releases, feedback and behind-the-scenes updates all happen on the AkihiroLabs Discord server. Byte 🦝 will greet you.",
           ja:"新しいリリース、フィードバック、開発の裏側はAkihiroLabsのDiscordサーバーで。バイト🦝がお出迎えします。"},
    cta: {en:"Join the Discord", ja:"Discordに参加"},
    url: DISCORD
  },
  footer: {
    left: "© 2026 AkihiroLabs 🦝",
    right: {en:"Made in Tokyo by Akihiro.", ja:"東京でAkihiroが制作。"}
  }
};

/* ---------- State ---------- */
let DATA = loadData();
let lang = localStorage.getItem('ztt_lang') || 'en';

function loadData(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(raw){ return JSON.parse(raw); }
  }catch(e){ console.warn("Bad saved data, using defaults", e); }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}
function saveData(){ localStorage.setItem(STORE_KEY, JSON.stringify(DATA)); }
function t(obj){ return (obj && typeof obj === 'object') ? (obj[lang] ?? obj.en ?? "") : (obj ?? ""); }
function esc(s){ const d=document.createElement('div'); d.textContent=s??""; return d.innerHTML; }

/* =====================================================
   Render site from DATA
===================================================== */
const NAV_ITEMS = [
  {href:"#top", en:"Home", ja:"ホーム"},
  {href:"#about", en:"Studio", ja:"スタジオ"},
  {href:"#projects", en:"Apps", ja:"アプリ"},
  {href:"#skills", en:"Toolbox", ja:"技術"},
  {href:"#contact", en:"Contact", ja:"お問い合わせ"}
];
const LABELS = {
  about:{en:"The studio",ja:"スタジオについて"}, skills:{en:"Toolbox",ja:"技術"},
  work:{en:"Apps",ja:"アプリ"}, contact:{en:"Community",ja:"コミュニティ"},
  learnMore:{en:"About the studio →",ja:"スタジオについて →"}, browse:{en:"See the apps →",ja:"アプリを見る →"},
  open:{en:"Open app ↗",ja:"アプリを開く ↗"}, code:{en:"GitHub",ja:"GitHub"}
};

function render(){
  document.documentElement.lang = lang;
  document.getElementById('langBtn').textContent = lang==='ja' ? 'EN' : '日本語';

  // Nav
  document.getElementById('navLinks').innerHTML =
    NAV_ITEMS.map(n=>`<a href="${n.href}">${n[lang]}</a>`).join("");

  // Hero
  const h = DATA.hero;
  document.getElementById('heroEyebrow').textContent = t(h.eyebrow);
  document.getElementById('heroTitle').innerHTML = t(h.title); // owner-controlled, allows <span>/<br>
  document.getElementById('heroSub').textContent = t(h.sub);
  document.getElementById('heroSide').innerHTML = `
    <div class="side-block"><h3>${esc(t(h.side1h))}</h3><p>${esc(t(h.side1p))}</p><a href="#about">${LABELS.learnMore[lang]}</a></div>
    <div class="side-block"><h3>${esc(t(h.side2h))}</h3><p>${esc(t(h.side2p))}</p><a href="#projects">${LABELS.browse[lang]}</a></div>
    <div class="side-block"><h3>${esc(t(h.followh))}</h3><div class="socials">${
      DATA.socials.map(s=>`<a href="${esc(s.url)}" aria-label="${esc(s.label)}" title="${esc(s.label)}" target="_blank" rel="noopener">${esc(s.icon)}</a>`).join("")
    }</div></div>`;

  // Avatar (uploaded image if set, otherwise the AkihiroLabs badge)
  document.getElementById('avatar').innerHTML =
    DATA.avatar ? `<img src="${DATA.avatar}" alt="AkihiroLabs">` : `<img class="studio" src="assets/logo.png" alt="AkihiroLabs">`;

  // About
  document.getElementById('aboutLabel').textContent = LABELS.about[lang];
  document.getElementById('aboutHeading').textContent = t(DATA.about.heading);
  document.getElementById('aboutText').textContent = t(DATA.about.text);
  document.getElementById('statsBox').innerHTML = DATA.about.stats.map(s=>`
    <div class="stat">
      <div class="num" data-count="${esc(s.num)}">${esc(s.num)}<em>${esc(s.suffix)}</em></div>
      <div class="lbl">${esc(t(s.label))}</div>
      <p>${esc(t(s.desc))}</p>
    </div>`).join("");

  // Strip (items doubled for seamless marquee loop)
  document.getElementById('stripLbl').textContent = t(DATA.strip.label);
  const stripHTML = DATA.strip.items.map(i=>`<span>${esc(i)}</span>`).join("");
  document.getElementById('stripItems').innerHTML = stripHTML + stripHTML;

  // Skills
  document.getElementById('skillsLabel').textContent = LABELS.skills[lang];
  document.getElementById('skillsHeading').textContent = t(DATA.skillsHeading);
  document.getElementById('skillsGrid').innerHTML = DATA.skills.map((s,i)=>`
    <div class="skill reveal" style="transition-delay:${(i%4)*90}ms"><div class="ic">${esc(s.icon)}</div><h3>${esc(t(s.title))}</h3><p>${esc(t(s.desc))}</p></div>`).join("");

  // Projects
  document.getElementById('projLabel').textContent = LABELS.work[lang];
  document.getElementById('projHeading').textContent = t(DATA.projHeading);
  document.getElementById('projGrid').innerHTML = DATA.projects.map((p,i)=>`
    <div class="proj reveal" style="transition-delay:${(i%3)*110}ms">
      <div class="top">${p.logo ? `<img class="logo-img" src="${esc(p.logo)}" alt="" width="56" height="56" loading="lazy">` : `<span class="ic">${esc(p.icon)}</span>`}<span class="tag">${esc(t(p.tag))}</span></div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(t(p.desc))}</p>
      <div class="tech">${(p.tech||[]).map(x=>`<span>${esc(x)}</span>`).join("")}</div>
      ${(p.live||p.repo) ? `<div class="links">${
        p.live ? `<a class="primary" href="${esc(p.live)}" target="_blank" rel="noopener">${esc(p.liveLabel ? t(p.liveLabel) : LABELS.open[lang])}</a>` : ""}${
        p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">${LABELS.code[lang]}</a>` : ""}</div>` : ""}
    </div>`).join("");

  // In the lab (not public yet)
  const lab = DATA.lab || [];
  const labHead = document.getElementById('labHeading');
  labHead.hidden = !lab.length;
  labHead.innerHTML = `${esc(t(DATA.labHeading))}<small>${esc(t(DATA.labSub))}</small>`;
  document.getElementById('labGrid').innerHTML = lab.map((l,i)=>`
    <div class="lab reveal" style="transition-delay:${(i%3)*90}ms"><span class="ic">${esc(l.icon)}</span><div><h3>${esc(l.title)}</h3><p>${esc(t(l.desc))}</p></div></div>`).join("");

  // Contact
  document.getElementById('contactLabel').textContent = LABELS.contact[lang];
  document.getElementById('contactHeading').textContent = t(DATA.contact.heading);
  document.getElementById('contactText').textContent = t(DATA.contact.text);
  const cta = document.getElementById('contactCta');
  cta.textContent = t(DATA.contact.cta);
  cta.href = DATA.contact.url || (DATA.contact.email ? "mailto:" + DATA.contact.email : "#");
  if(/^https?:/.test(cta.href)){ cta.target = "_blank"; cta.rel = "noopener"; }

  // Footer
  document.getElementById('footLeft').textContent = DATA.footer.left;
  document.getElementById('footRight').textContent = t(DATA.footer.right);

  observeReveals();
  setupCountUp();
}

/* ---------- Count-up animation for stats ---------- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function setupCountUp(){
  document.querySelectorAll('.stat .num').forEach(el=>{
    const target = parseInt(el.dataset.count, 10);
    if(isNaN(target) || reduceMotion) return;
    const em = el.querySelector('em');
    const suffix = em ? em.outerHTML : "";
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(en=>{
        if(!en.isIntersecting) return;
        obs.unobserve(el);
        const dur = 1200, start = performance.now();
        function tick(now){
          const p = Math.min((now-start)/dur, 1);
          const eased = 1 - Math.pow(1-p, 3);
          el.innerHTML = Math.round(target*eased) + suffix;
          if(p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    },{threshold:.5});
    obs.observe(el);
  });
}

/* ---------- Language & mobile nav ---------- */
document.getElementById('langBtn').addEventListener('click', ()=>{
  lang = lang==='en' ? 'ja' : 'en';
  localStorage.setItem('ztt_lang', lang);
  render();
});
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', ()=> navLinks.classList.toggle('open'));
navLinks.addEventListener('click', e=>{ if(e.target.tagName==='A') navLinks.classList.remove('open'); });

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.12});
function observeReveals(){ document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el)); }

/* =====================================================
   Hidden admin: triple-click the "AkihiroLabs apps" strip label
===================================================== */
let clickCount = 0, clickTimer = null;
document.getElementById('stripLbl').addEventListener('click', ()=>{
  clickCount++;
  clearTimeout(clickTimer);
  clickTimer = setTimeout(()=> clickCount = 0, 1200);
  if(clickCount >= 3){
    clickCount = 0;
    openLogin();
  }
});

const loginOverlay = document.getElementById('loginOverlay');
const pwInput = document.getElementById('pwInput');
const pwInput2 = document.getElementById('pwInput2');
const pwErr = document.getElementById('pwErr');
const pwGo = document.getElementById('pwGo');
const LOCAL_HASH_KEY = "akihirolabs_admin_hash";
const PBKDF2_ITERS = 310000;
let failCount = 0, lockUntil = 0, justCreated = false;

const toHex = b => [...b].map(x=>x.toString(16).padStart(2,'0')).join('');
const fromHex = h => new Uint8Array(h.match(/../g).map(x=>parseInt(x,16)));
function localGet(k){ try{ return localStorage.getItem(k); }catch(_){ return null; } }
function localSet(k,v){ try{ localStorage.setItem(k,v); }catch(_){} }
function storedHash(){ return ADMIN_HASH || localGet(LOCAL_HASH_KEY) || ""; }
function cryptoReady(){ return !!(window.crypto && crypto.subtle); }

async function pbkdf2(pass, saltHex, iters){
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({name:'PBKDF2', salt:fromHex(saltHex), iterations:iters, hash:'SHA-256'}, key, 256);
  return toHex(new Uint8Array(bits));
}
async function makeHash(pass){
  const salt = toHex(crypto.getRandomValues(new Uint8Array(16)));
  return `pbkdf2$${PBKDF2_ITERS}$${salt}$${await pbkdf2(pass, salt, PBKDF2_ITERS)}`;
}
async function verifyPass(pass, stored){
  const [alg, iters, salt, hash] = stored.split('$');
  if(alg !== 'pbkdf2' || !salt || !hash) return false;
  const h = await pbkdf2(pass, salt, +iters);
  let diff = h.length ^ hash.length;
  for(let i=0; i<Math.min(h.length, hash.length); i++) diff |= h.charCodeAt(i) ^ hash.charCodeAt(i);
  return diff === 0;
}

function setupMode(){ return !storedHash(); }
function openLogin(){
  pwInput.value = ""; pwInput2.value = ""; pwErr.textContent = "";
  justCreated = false; pwInput.hidden = false;
  document.getElementById('pwHashOut').hidden = true;
  const setup = setupMode();
  document.getElementById('pwTitle').textContent = setup ? "🦝 Set up admin" : "🦝 Admin Access";
  document.getElementById('pwText').textContent = setup
    ? "Create an admin password (at least 8 characters). Only a scrambled version of it (a hash) is saved — never the password."
    : "Enter the admin password to open the admin panel.";
  pwInput.autocomplete = setup ? "new-password" : "current-password";
  pwInput2.hidden = !setup;
  pwGo.textContent = setup ? "Create" : "Unlock";
  pwGo.disabled = false;
  if(!cryptoReady()) pwErr.textContent = "Admin needs a secure page (https:// or localhost).";
  loginOverlay.classList.add('show');
  setTimeout(()=>pwInput.focus(), 60);
}
document.getElementById('pwCancel').addEventListener('click', ()=> loginOverlay.classList.remove('show'));
loginOverlay.addEventListener('click', e=>{ if(e.target===loginOverlay) loginOverlay.classList.remove('show'); });
pwGo.addEventListener('click', tryLogin);
pwInput.addEventListener('keydown', e=>{ if(e.key==='Enter') tryLogin(); });
pwInput2.addEventListener('keydown', e=>{ if(e.key==='Enter') tryLogin(); });

async function tryLogin(){
  if(!cryptoReady() || pwGo.disabled) return;
  const now = Date.now();
  if(now < lockUntil){ pwErr.textContent = `Too many tries. Wait ${Math.ceil((lockUntil-now)/1000)}s.`; return; }

  if(justCreated){ justCreated = false; loginOverlay.classList.remove('show'); openAdmin(); return; }
  if(setupMode()){
    if(pwInput.value.length < 8){ pwErr.textContent = "Use at least 8 characters."; return; }
    if(pwInput.value !== pwInput2.value){ pwErr.textContent = "The two passwords don't match."; return; }
    pwGo.disabled = true; pwErr.textContent = "";
    const h = await makeHash(pwInput.value);
    pwInput.value = ""; pwInput2.value = "";
    localSet(LOCAL_HASH_KEY, h);
    document.getElementById('pwHashText').value = `const ADMIN_HASH = "${h}";`;
    document.getElementById('pwHashOut').hidden = false;
    pwInput.hidden = true; pwInput2.hidden = true;
    pwGo.textContent = "Open admin"; pwGo.disabled = false; justCreated = true;
    return;
  }

  pwGo.disabled = true; pwErr.textContent = "Checking…";
  const ok = await verifyPass(pwInput.value, storedHash());
  pwGo.disabled = false;
  pwInput.value = "";
  if(ok){
    failCount = 0; pwErr.textContent = "";
    loginOverlay.classList.remove('show');
    openAdmin();
  }else{
    failCount++;
    if(failCount >= 5){ lockUntil = Date.now() + 30000; failCount = 0; pwErr.textContent = "Too many tries. Wait 30s."; }
    else pwErr.textContent = "Wrong password. Try again.";
    pwInput.focus();
  }
}

/* =====================================================
   Admin panel
===================================================== */
const adminPanel = document.getElementById('adminPanel');
const adminBody = document.getElementById('adminBody');
const adminTabs = document.getElementById('adminTabs');
const TABS = ["Hero","About","Skills","Apps","In the lab","Strip","Contact & Socials"];
let curTab = 0;
let DRAFT = null;

function openAdmin(){
  DRAFT = JSON.parse(JSON.stringify(DATA));
  curTab = 0;
  buildTabs();
  buildTab();
  adminPanel.classList.add('show');
  document.body.style.overflow = 'hidden';
  setStatus("Editing draft — changes apply when you press Save.");
}
document.getElementById('adminClose').addEventListener('click', ()=>{
  adminPanel.classList.remove('show');
  document.body.style.overflow = '';
});

function buildTabs(){
  adminTabs.innerHTML = TABS.map((tName,i)=>`<button class="${i===curTab?'on':''}" data-i="${i}">${tName}</button>`).join("");
  adminTabs.querySelectorAll('button').forEach(b=>b.addEventListener('click', ()=>{
    curTab = +b.dataset.i; buildTabs(); buildTab();
  }));
}
function setStatus(msg){ document.getElementById('saveStatus').textContent = msg; }

/* ---- form helpers (bind inputs to DRAFT paths) ---- */
function get(obj, path){ return path.reduce((o,k)=>o?.[k], obj); }
function set(obj, path, val){
  const last = path[path.length-1];
  const parent = path.slice(0,-1).reduce((o,k)=>o[k], obj);
  parent[last] = val;
}
function fieldEN_JA(labelTxt, path, textarea=false){
  const id = 'f' + Math.random().toString(36).slice(2,9);
  const v = get(DRAFT, path) || {en:"",ja:""};
  const tagO = textarea?'<textarea':'<input', tagC = textarea?'</textarea>':'';
  const valEN = textarea? esc(v.en) : '', valJA = textarea? esc(v.ja) : '';
  const attrEN = textarea? '' : ` value="${esc(v.en)}"`;
  const attrJA = textarea? '' : ` value="${esc(v.ja)}"`;
  setTimeout(()=>{
    document.getElementById(id+'en')?.addEventListener('input', e=>{ get(DRAFT,path).en = e.target.value; });
    document.getElementById(id+'ja')?.addEventListener('input', e=>{ get(DRAFT,path).ja = e.target.value; });
  });
  return `<div class="frow">
    <div class="fgroup"><label>${labelTxt} (EN)</label>${tagO} id="${id}en"${attrEN}>${valEN}${tagC}</div>
    <div class="fgroup"><label>${labelTxt} (日本語)</label>${tagO} id="${id}ja"${attrJA}>${valJA}${tagC}</div>
  </div>`;
}
function fieldPlain(labelTxt, path, textarea=false){
  const id = 'f' + Math.random().toString(36).slice(2,9);
  const v = get(DRAFT, path) ?? "";
  setTimeout(()=>{
    document.getElementById(id)?.addEventListener('input', e=> set(DRAFT, path, e.target.value));
  });
  return `<div class="fgroup"><label>${labelTxt}</label>${
    textarea ? `<textarea id="${id}">${esc(v)}</textarea>` : `<input id="${id}" value="${esc(v)}">`
  }</div>`;
}

/* ---- tab builders ---- */
function buildTab(){
  adminBody.innerHTML = "";
  let html = "";
  if(curTab===0){ // Hero
    html += `<h3 style="margin:0 0 12px;font-size:15px">Hero image</h3>
    <div class="card-edit">
      <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
        <div id="avPrev" style="width:76px;height:76px;border-radius:50%;overflow:hidden;background:var(--bg);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;font-size:36px;flex:none">${
          DRAFT.avatar ? `<img src="${DRAFT.avatar}" style="width:100%;height:100%;object-fit:cover">` : `<img src="assets/logo.png" style="width:100%;height:100%;object-fit:contain;padding:6px">`
        }</div>
        <button class="btn mini" id="avUp">📷 Upload image</button>
        <button class="btn mini danger" id="avRm">Use AkihiroLabs badge (default)</button>
        <input type="file" id="avFile" accept="image/*" hidden>
      </div>
      <p style="color:var(--muted);font-size:12px;margin-top:10px">The photo is saved with your content and included in Export JSON. If no image is set, the AkihiroLabs badge is shown.</p>
    </div>`;
    html += fieldEN_JA("Eyebrow", ["hero","eyebrow"]);
    html += fieldEN_JA("Big title (HTML allowed: <span>, <br>)", ["hero","title"], true);
    html += fieldEN_JA("Subtitle", ["hero","sub"], true);
    html += `<hr style="border:0;border-top:1px solid var(--line);margin:20px 0">`;
    html += fieldEN_JA("Side box 1 — heading", ["hero","side1h"]);
    html += fieldEN_JA("Side box 1 — text", ["hero","side1p"], true);
    html += fieldEN_JA("Side box 2 — heading", ["hero","side2h"]);
    html += fieldEN_JA("Side box 2 — text", ["hero","side2p"], true);
    html += fieldEN_JA("Follow heading", ["hero","followh"]);
  }
  else if(curTab===1){ // About
    html += fieldEN_JA("Heading", ["about","heading"]);
    html += fieldEN_JA("About text", ["about","text"], true);
    html += `<h3 style="margin:22px 0 12px;font-size:15px">Stats</h3>`;
    DRAFT.about.stats.forEach((s,i)=>{
      html += `<div class="card-edit">
        <div class="ce-head"><strong>Stat ${i+1}</strong>
          <button class="btn mini danger" data-delstat="${i}">Delete</button></div>
        ${fieldPlain("Number", ["about","stats",i,"num"])}
        ${fieldPlain("Suffix (e.g. +)", ["about","stats",i,"suffix"])}
        ${fieldEN_JA("Label", ["about","stats",i,"label"])}
        ${fieldEN_JA("Description", ["about","stats",i,"desc"], true)}
      </div>`;
    });
    html += `<button class="add-btn" id="addStat">＋ Add stat</button>`;
  }
  else if(curTab===2){ // Skills
    html += fieldEN_JA("Section heading", ["skillsHeading"]);
    DRAFT.skills.forEach((s,i)=>{
      html += `<div class="card-edit">
        <div class="ce-head"><strong>Skill ${i+1}</strong>
          <button class="btn mini danger" data-delskill="${i}">Delete</button></div>
        ${fieldPlain("Icon (emoji)", ["skills",i,"icon"])}
        ${fieldEN_JA("Title", ["skills",i,"title"])}
        ${fieldEN_JA("Description", ["skills",i,"desc"], true)}
      </div>`;
    });
    html += `<button class="add-btn" id="addSkill">＋ Add skill</button>`;
  }
  else if(curTab===3){ // Projects
    html += fieldEN_JA("Section heading", ["projHeading"]);
    DRAFT.projects.forEach((p,i)=>{
      if(typeof p._tech !== 'string') p._tech = (p.tech||[]).join(", ");
      html += `<div class="card-edit">
        <div class="ce-head"><strong>${esc(p.title)||("Project "+(i+1))}</strong>
          <span style="display:flex;gap:8px">
            <button class="btn mini" data-upproj="${i}" ${i===0?'disabled':''}>↑</button>
            <button class="btn mini" data-downproj="${i}" ${i===DRAFT.projects.length-1?'disabled':''}>↓</button>
            <button class="btn mini danger" data-delproj="${i}">Delete</button>
          </span></div>
        ${fieldPlain("Logo image path (e.g. assets/app-shiftpay.png) — leave empty to use the icon", ["projects",i,"logo"])}
        ${fieldPlain("Icon (emoji / character)", ["projects",i,"icon"])}
        ${fieldPlain("App name", ["projects",i,"title"])}
        ${fieldPlain("Live URL", ["projects",i,"live"])}
        ${fieldPlain("GitHub URL", ["projects",i,"repo"])}
        ${fieldEN_JA("Tag", ["projects",i,"tag"])}
        ${fieldEN_JA("Description", ["projects",i,"desc"], true)}
        ${fieldPlain("Tech tags (comma separated)", ["projects",i,"_tech"])}
      </div>`;
    });
    html += `<button class="add-btn" id="addProj">＋ Add new app</button>`;
  }
  else if(curTab===4){ // In the lab
    if(!DRAFT.lab) DRAFT.lab = [];
    if(!DRAFT.labHeading) DRAFT.labHeading = {en:"In the lab",ja:"開発中"};
    if(!DRAFT.labSub) DRAFT.labSub = {en:"",ja:""};
    html += fieldEN_JA("Section heading", ["labHeading"]);
    html += fieldEN_JA("Small line under heading", ["labSub"]);
    DRAFT.lab.forEach((l,i)=>{
      html += `<div class="card-edit">
        <div class="ce-head"><strong>${esc(l.title)||("Item "+(i+1))}</strong>
          <button class="btn mini danger" data-dellab="${i}">Delete</button></div>
        ${fieldPlain("Icon (emoji)", ["lab",i,"icon"])}
        ${fieldPlain("Name", ["lab",i,"title"])}
        ${fieldEN_JA("Description", ["lab",i,"desc"], true)}
      </div>`;
    });
    html += `<button class="add-btn" id="addLab">＋ Add item</button>`;
  }
  else if(curTab===5){ // Strip
    if(typeof DRAFT.strip._items !== 'string') DRAFT.strip._items = DRAFT.strip.items.join(", ");
    html += fieldEN_JA("Strip label (this is also the secret admin button)", ["strip","label"]);
    html += fieldPlain("Products (comma separated)", ["strip","_items"]);
  }
  else if(curTab===6){ // Contact & socials
    html += fieldEN_JA("Heading", ["contact","heading"]);
    html += fieldEN_JA("Text", ["contact","text"], true);
    html += fieldEN_JA("Button label", ["contact","cta"]);
    html += fieldPlain("Button link (https://… or mailto:…)", ["contact","url"]);
    html += `<h3 style="margin:22px 0 12px;font-size:15px">Social links</h3>`;
    DRAFT.socials.forEach((s,i)=>{
      html += `<div class="card-edit">
        <div class="ce-head"><strong>${esc(s.label)||("Link "+(i+1))}</strong>
          <button class="btn mini danger" data-delsoc="${i}">Delete</button></div>
        ${fieldPlain("Icon (emoji/char)", ["socials",i,"icon"])}
        ${fieldPlain("Label", ["socials",i,"label"])}
        ${fieldPlain("URL (https://… or mailto:…)", ["socials",i,"url"])}
      </div>`;
    });
    html += `<button class="add-btn" id="addSoc">＋ Add social link</button>`;
    html += `<h3 style="margin:22px 0 12px;font-size:15px">Footer</h3>`;
    html += fieldPlain("Footer left", ["footer","left"]);
    html += fieldEN_JA("Footer right", ["footer","right"]);
  }
  adminBody.innerHTML = html;
  bindListButtons();
}

function bindListButtons(){
  // Avatar photo upload / remove
  const avUp = adminBody.querySelector('#avUp');
  if(avUp){
    const avFile = adminBody.querySelector('#avFile');
    avUp.addEventListener('click', ()=> avFile.click());
    avFile.addEventListener('change', e=>{
      const f = e.target.files[0]; if(!f) return;
      const r = new FileReader();
      r.onload = ()=>{
        const img = new Image();
        img.onload = ()=>{
          // downscale to max 600px so it fits comfortably in saved data
          const max = 600;
          const scale = Math.min(1, max / Math.max(img.width, img.height));
          const c = document.createElement('canvas');
          c.width = Math.round(img.width*scale); c.height = Math.round(img.height*scale);
          c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          DRAFT.avatar = c.toDataURL('image/jpeg', .85);
          buildTab();
          setStatus("Photo added — press Save to apply.");
        };
        img.src = r.result;
      };
      r.readAsDataURL(f);
      e.target.value = "";
    });
    adminBody.querySelector('#avRm').addEventListener('click', ()=>{
      DRAFT.avatar = null;
      buildTab();
      setStatus("Back to Byte 🦝 — press Save to apply.");
    });
  }

  adminBody.querySelector('#addStat')?.addEventListener('click', ()=>{
    DRAFT.about.stats.push({num:"0",suffix:"",label:{en:"New stat",ja:"新しい統計"},desc:{en:"",ja:""}});
    buildTab();
  });
  adminBody.querySelector('#addSkill')?.addEventListener('click', ()=>{
    DRAFT.skills.push({icon:"✨",title:{en:"New skill",ja:"新しいスキル"},desc:{en:"",ja:""}});
    buildTab();
  });
  adminBody.querySelector('#addProj')?.addEventListener('click', ()=>{
    DRAFT.projects.push({logo:"",icon:"🆕",tag:{en:"New",ja:"新規"},title:"New app",desc:{en:"",ja:""},tech:[],_tech:"",live:"",repo:""});
    buildTab();
  });
  adminBody.querySelector('#addLab')?.addEventListener('click', ()=>{
    DRAFT.lab.push({icon:"🧪",title:"New project",desc:{en:"",ja:""}});
    buildTab();
  });
  adminBody.querySelectorAll('[data-dellab]').forEach(b=>b.addEventListener('click',()=>{ DRAFT.lab.splice(+b.dataset.dellab,1); buildTab(); }));
  adminBody.querySelector('#addSoc')?.addEventListener('click', ()=>{
    DRAFT.socials.push({icon:"🔗",label:"New link",url:"#"});
    buildTab();
  });
  adminBody.querySelectorAll('[data-delstat]').forEach(b=>b.addEventListener('click',()=>{ DRAFT.about.stats.splice(+b.dataset.delstat,1); buildTab(); }));
  adminBody.querySelectorAll('[data-delskill]').forEach(b=>b.addEventListener('click',()=>{ DRAFT.skills.splice(+b.dataset.delskill,1); buildTab(); }));
  adminBody.querySelectorAll('[data-delsoc]').forEach(b=>b.addEventListener('click',()=>{ DRAFT.socials.splice(+b.dataset.delsoc,1); buildTab(); }));
  adminBody.querySelectorAll('[data-delproj]').forEach(b=>b.addEventListener('click',()=>{
    if(confirm("Delete this project?")){ DRAFT.projects.splice(+b.dataset.delproj,1); buildTab(); }
  }));
  adminBody.querySelectorAll('[data-upproj]').forEach(b=>b.addEventListener('click',()=>{
    const i=+b.dataset.upproj; [DRAFT.projects[i-1],DRAFT.projects[i]]=[DRAFT.projects[i],DRAFT.projects[i-1]]; buildTab();
  }));
  adminBody.querySelectorAll('[data-downproj]').forEach(b=>b.addEventListener('click',()=>{
    const i=+b.dataset.downproj; [DRAFT.projects[i+1],DRAFT.projects[i]]=[DRAFT.projects[i],DRAFT.projects[i+1]]; buildTab();
  }));
}

/* ---- Save / export / import / reset ---- */
document.getElementById('btnSave').addEventListener('click', ()=>{
  // normalize comma-separated helper fields
  DRAFT.projects.forEach(p=>{
    if(typeof p._tech === 'string'){ p.tech = p._tech.split(',').map(s=>s.trim()).filter(Boolean); }
    delete p._tech;
  });
  if(typeof DRAFT.strip._items === 'string'){
    DRAFT.strip.items = DRAFT.strip._items.split(',').map(s=>s.trim()).filter(Boolean);
  }
  delete DRAFT.strip._items;
  DATA = JSON.parse(JSON.stringify(DRAFT));
  saveData();
  render();
  setStatus("✅ Saved! The site is updated.");
  // rebuild draft helper fields so panel keeps working
  DRAFT = JSON.parse(JSON.stringify(DATA));
  buildTab();
});

document.getElementById('btnExport').addEventListener('click', ()=>{
  const blob = new Blob([JSON.stringify(DATA, null, 2)], {type:"application/json"});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = "akihirolabs-site-data.json";
  a.click();
  URL.revokeObjectURL(a.href);
  setStatus("Exported akihirolabs-site-data.json — keep it as a backup.");
});

document.getElementById('btnImport').addEventListener('click', ()=> document.getElementById('importFile').click());
document.getElementById('importFile').addEventListener('change', e=>{
  const f = e.target.files[0]; if(!f) return;
  const r = new FileReader();
  r.onload = ()=>{
    try{
      const parsed = JSON.parse(r.result);
      if(!parsed.hero || !parsed.projects) throw new Error("Not a portfolio data file");
      DATA = parsed; saveData(); render();
      DRAFT = JSON.parse(JSON.stringify(DATA)); buildTab();
      setStatus("✅ Imported and applied.");
    }catch(err){ setStatus("⚠️ Import failed: " + err.message); }
  };
  r.readAsText(f);
  e.target.value = "";
});

document.getElementById('btnReset').addEventListener('click', ()=>{
  if(confirm("Reset ALL content to the built-in defaults? Your saved edits will be removed.")){
    localStorage.removeItem(STORE_KEY);
    DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
    render();
    DRAFT = JSON.parse(JSON.stringify(DATA)); buildTab();
    setStatus("Reset to defaults.");
  }
});

/* ---------- Init ---------- */
render();
observeReveals();
