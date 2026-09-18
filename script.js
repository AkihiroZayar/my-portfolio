/* =====================================================
   Data — defaults. Live data is stored in localStorage
   under 'ztt_portfolio' and edited via the admin panel.
===================================================== */
const ADMIN_PASS = "972004";
const STORE_KEY = "ztt_portfolio_v2";

const DEFAULT_DATA = {
  avatar: null, // base64 photo set from admin; raccoon 🦝 when null
  hero: {
    eyebrow: {en:"Akihiro Labs · Tokyo", ja:"Akihiro Labs · 東京"},
    title:   {en:"I’m <span>Zayar</span>, a Web Developer", ja:"<span>ゼーア</span>です。<br>ウェブ開発者"},
    sub:     {en:"Student developer in Tokyo building real-world web apps — a POS system, Japanese learning tools, business software, and more.",
              ja:"東京の学生開発者。POSシステム、日本語学習ツール、業務アプリなど、実際に使えるWebアプリを開発しています。"},
    side1h:  {en:"About me", ja:"私について"},
    side1p:  {en:"I design and ship complete products under my indie brand, Akihiro Labs.", ja:"個人ブランド「Akihiro Labs」で、企画からリリースまで一人で行っています。"},
    side2h:  {en:"My work", ja:"制作物"},
    side2p:  {en:"From a full point-of-sale system to a kanji reading tool for Japanese learners.", ja:"本格的なPOSシステムから、日本語学習者向けの漢字読みツールまで。"},
    followh: {en:"Follow me", ja:"フォロー"}
  },
  socials: [
    {icon:"⌥", label:"GitHub", url:"#"},
    {icon:"📷", label:"Instagram", url:"https://instagram.com/"},
    {icon:"✉", label:"Email", url:"#"}
  ],
  about: {
    heading: {en:"I build software people actually use", ja:"実際に使われるソフトウェアを作る"},
    text: {en:"Every Akihiro Labs app is designed to be simple to run and reliable to use — it works right in the browser, keeps data on your own device, and needs no installation. I build in three languages (English, Japanese, Burmese) with a consistent dark design system, and Byte the raccoon 🦝 shows up across all my apps.",
           ja:"Akihiro Labsのアプリは、ブラウザだけで動き、データは自分の端末に保存され、インストール不要。誰でもすぐ使えるように設計しています。英語・日本語・ミャンマー語の3言語に対応し、統一されたダークテーマとマスコットのバイト🦝が全アプリ共通です。"},
    stats: [
      {num:"10", suffix:"+", label:{en:"Apps shipped", ja:"リリースしたアプリ"},
       desc:{en:"Complete products, from a POS system to study tools.", ja:"POSから学習ツールまで、完成品として。"}},
      {num:"3", suffix:"", label:{en:"Languages supported", ja:"対応言語"},
       desc:{en:"English, Japanese, and Burmese — built into the apps themselves.", ja:"英語・日本語・ミャンマー語をアプリに標準搭載。"}}
    ]
  },
  strip: {
    label: {en:"Akihiro Labs products", ja:"Akihiro Labs 製品"},
    items: ["◆ AkiPOS","漢 Kanji Bridge","👥 HiroCrew","¥ Income Tracker","⌗ NumConv"]
  },
  skillsHeading: {en:"My extensive list of skills", ja:"幅広いスキルセット"},
  skills: [
    {icon:"⚡", title:{en:"JavaScript", ja:"JavaScript"}, desc:{en:"Building complete apps: state, UI, and logic from the ground up.", ja:"状態管理からUIまで、アプリをゼロから構築。"}},
    {icon:"🗄️", title:{en:"Local-first data", ja:"ローカルファースト"}, desc:{en:"Offline-capable storage for real business data.", ja:"実データを扱うオフライン対応の保存設計。"}},
    {icon:"🎨", title:{en:"UI & dark theme design", ja:"UI・ダークテーマ設計"}, desc:{en:"A consistent design system across every product.", ja:"全製品で統一されたデザインシステム。"}},
    {icon:"🇯🇵", title:{en:"Japanese language tech", ja:"日本語処理"}, desc:{en:"Text analysis, furigana, and JLPT-aware study tools.", ja:"形態素解析、ふりがな、JLPT対応学習ツール。"}},
    {icon:"📊", title:{en:"Charts & PDF export", ja:"グラフ・PDF出力"}, desc:{en:"Dashboards, receipts, and reports users can download.", ja:"ダッシュボード、レシート、レポートの出力。"}},
    {icon:"☕", title:{en:"Java", ja:"Java"}, desc:{en:"Console apps and games — logic, types, and OOP.", ja:"コンソールアプリやゲーム。ロジックとOOP。"}},
    {icon:"🔧", title:{en:"C", ja:"C言語"}, desc:{en:"Programming fundamentals from my IT studies — memory, pointers, and logic.", ja:"IT授業で学ぶ基礎。メモリ、ポインタ、ロジック。"}},
    {icon:"⚙️", title:{en:"C++", ja:"C++"}, desc:{en:"Object-oriented programming and problem solving.", ja:"オブジェクト指向プログラミングと問題解決。"}},
    {icon:"🛢️", title:{en:"Oracle / SQL", ja:"Oracle / SQL"}, desc:{en:"Relational databases: tables, queries, and data design.", ja:"リレーショナルDB。テーブル設計とクエリ。"}},
    {icon:"🌐", title:{en:"Multilingual UX", ja:"多言語UX"}, desc:{en:"EN / JA / MY interfaces, including Burmese script.", ja:"英・日・緬の切替。ミャンマー文字にも対応。"}},
    {icon:"🚀", title:{en:"Shipping products", ja:"製品リリース"}, desc:{en:"From idea to v10 — iterating until it’s genuinely done.", ja:"アイデアからv10まで。完成するまで改善を重ねる。"}}
  ],
  projHeading: {en:"Featured projects", ja:"主なプロジェクト"},
  projects: [
    {icon:"◆", tag:{en:"Flagship", ja:"主力製品"}, title:"AkiPOS",
     desc:{en:"Full point-of-sale system: staff PIN login, customer tabs, happy hour pricing, Burmese/English toggle, and PDF receipts. 10 versions strong.",
           ja:"本格POSシステム。スタッフPINログイン、顧客タブ、ハッピーアワー割引、緬英切替、PDFレシート。v10まで進化。"},
     tech:["POS","PDF receipts","Offline"]},
    {icon:"漢", tag:{en:"Language", ja:"言語"}, title:"Kanji Bridge 漢字ブリッジ",
     desc:{en:"Furigana generator with Japanese text analysis, JLPT-level coloring, and share-via-URL — smooth even on long texts.",
           ja:"ふりがな生成ツール。JLPTレベル色分け、URL共有対応。長文でもスムーズに動作。"},
     tech:["Furigana","JLPT","Share URL"]},
    {icon:"👥", tag:{en:"Business", ja:"業務"}, title:"HiroCrew",
     desc:{en:"Employee management for Akihiro Labs: shift scheduling, attendance kiosk, payroll, and an admin dashboard.",
           ja:"従業員管理アプリ。シフト管理、勤怠キオスク、給与計算、管理ダッシュボード。"},
     tech:["Shifts","Payroll","Dashboard"]},
    {icon:"¥", tag:{en:"Finance", ja:"家計"}, title:"Hiro's Income Tracker",
     desc:{en:"Japan-specific wage and tax tracker with calendar shifts, charts, and PDF/Excel export.",
           ja:"日本の給与・税金に特化したトラッカー。カレンダー、グラフ、PDF/Excel出力。"},
     tech:["Calendar","Charts","Export"]},
    {icon:"🃏", tag:{en:"Language", ja:"言語"}, title:"Kanji Flashcards",
     desc:{en:"Spaced-repetition kanji study with JLPT N5–N1 decks, reading quizzes, and Byte 🦝 reactions.",
           ja:"間隔反復による漢字学習。JLPT N5〜N1、読みクイズ、バイト🦝のリアクション付き。"},
     tech:["Spaced repetition","JLPT","Quiz"]},
    {icon:"⌗", tag:{en:"Utility", ja:"ツール"}, title:"NumConv",
     desc:{en:"Number system converter with a hacker-terminal look — binary, octal, decimal, hex.",
           ja:"ハッカー風ターミナルUIの進数変換ツール。2進・8進・10進・16進に対応。"},
     tech:["Terminal UI","Converter"]},
    {icon:"🖥️", tag:{en:"Internal", ja:"社内ツール"}, title:"Akihiro Labs Dashboard",
     desc:{en:"Personal admin hub for all Akihiro Labs apps: responsive design, automatic site status checks, and Byte 🦝 throughout.",
           ja:"Akihiro Labs全アプリの管理ハブ。レスポンシブ対応、サイト自動チェック、バイト🦝が全面に登場。"},
     tech:["Dashboard","Status checks","Responsive"]},
    {icon:"🥁", tag:{en:"School", ja:"学校"}, title:"Hsaing Waing Website",
     desc:{en:"Five-page Japanese-language website introducing Myanmar's Hsaing Waing orchestra, with animations and a dark lacquerware theme, plus a matching presentation.",
           ja:"ミャンマーのサインワイン楽団を紹介する日本語5ページのサイト。アニメーションと漆器風ダークテーマ、プレゼン資料付き。"},
     tech:["Culture","Animation","Presentation"]},
    {icon:"🎯", tag:{en:"Game", ja:"ゲーム"}, title:"Hit and Blow",
     desc:{en:"Mastermind-style number guessing game written in Java — guess the secret digits from hit & blow hints.",
           ja:"Javaで作った数当てゲーム（マスターマインド型）。ヒットとブローのヒントから正解を推理。"},
     tech:["Java","Console game","Logic"]},
    {icon:"🌐", tag:{en:"Web", ja:"ウェブ"}, title:"This Portfolio",
     desc:{en:"The site you're looking at: bilingual EN/JP, animated, with a hidden admin panel for editing every section.",
           ja:"今ご覧のサイト。日英バイリンガル、アニメーション付き、全セクション編集可能な隠し管理パネル搭載。"},
     tech:["Bilingual","Admin panel","Animation"]}
  ],
  contact: {
    heading: {en:"Let's build something together", ja:"一緒に何か作りましょう"},
    text: {en:"Have a project idea, feedback on an Akihiro Labs app, or just want to say hi? My inbox is open.",
           ja:"プロジェクトのアイデア、Akihiro Labsアプリへのフィードバック、雑談でも大歓迎です。"},
    cta: {en:"Get in touch", ja:"連絡する"},
    email: "hello@example.com"
  },
  footer: {
    left: "© 2026 Zayar Thet Tun · Akihiro Labs 🦝",
    right: {en:"Designed & built by Zayar.", ja:"デザイン・開発：ゼーア"}
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
  {href:"#about", en:"About", ja:"私について"},
  {href:"#skills", en:"Skills", ja:"スキル"},
  {href:"#projects", en:"Projects", ja:"プロジェクト"},
  {href:"#contact", en:"Contact", ja:"お問い合わせ"}
];
const LABELS = {
  about:{en:"About me",ja:"私について"}, skills:{en:"My skills",ja:"スキル"},
  work:{en:"My work",ja:"制作物"}, contact:{en:"Contact",ja:"お問い合わせ"},
  learnMore:{en:"Learn more →",ja:"もっと見る →"}, browse:{en:"Browse portfolio →",ja:"作品を見る →"}
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

  // Avatar (photo if uploaded, otherwise Byte the raccoon)
  document.getElementById('avatar').innerHTML =
    DATA.avatar ? `<img src="${DATA.avatar}" alt="Zayar Thet Tun">` : "🦝";

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
      <div class="top"><span class="ic">${esc(p.icon)}</span><span class="tag">${esc(t(p.tag))}</span></div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(t(p.desc))}</p>
      <div class="tech">${(p.tech||[]).map(x=>`<span>${esc(x)}</span>`).join("")}</div>
    </div>`).join("");

  // Contact
  document.getElementById('contactLabel').textContent = LABELS.contact[lang];
  document.getElementById('contactHeading').textContent = t(DATA.contact.heading);
  document.getElementById('contactText').textContent = t(DATA.contact.text);
  const cta = document.getElementById('contactCta');
  cta.textContent = t(DATA.contact.cta);
  cta.href = "mailto:" + DATA.contact.email;

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
   Hidden admin: triple-click "Akihiro Labs products"
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
const pwErr = document.getElementById('pwErr');

function openLogin(){
  pwInput.value = ""; pwErr.textContent = "";
  loginOverlay.classList.add('show');
  setTimeout(()=>pwInput.focus(), 60);
}
document.getElementById('pwCancel').addEventListener('click', ()=> loginOverlay.classList.remove('show'));
loginOverlay.addEventListener('click', e=>{ if(e.target===loginOverlay) loginOverlay.classList.remove('show'); });
document.getElementById('pwGo').addEventListener('click', tryLogin);
pwInput.addEventListener('keydown', e=>{ if(e.key==='Enter') tryLogin(); });

function tryLogin(){
  if(pwInput.value === ADMIN_PASS){
    loginOverlay.classList.remove('show');
    openAdmin();
  }else{
    pwErr.textContent = "Wrong key. Try again.";
    pwInput.value = "";
    pwInput.focus();
  }
}

/* =====================================================
   Admin panel
===================================================== */
const adminPanel = document.getElementById('adminPanel');
const adminBody = document.getElementById('adminBody');
const adminTabs = document.getElementById('adminTabs');
const TABS = ["Hero","About","Skills","Projects","Strip","Contact & Socials"];
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
    html += `<h3 style="margin:0 0 12px;font-size:15px">Profile photo</h3>
    <div class="card-edit">
      <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
        <div id="avPrev" style="width:76px;height:76px;border-radius:50%;overflow:hidden;background:var(--bg);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;font-size:36px;flex:none">${
          DRAFT.avatar ? `<img src="${DRAFT.avatar}" style="width:100%;height:100%;object-fit:cover">` : "🦝"
        }</div>
        <button class="btn mini" id="avUp">📷 Upload my photo</button>
        <button class="btn mini danger" id="avRm">Use raccoon 🦝 (default)</button>
        <input type="file" id="avFile" accept="image/*" hidden>
      </div>
      <p style="color:var(--muted);font-size:12px;margin-top:10px">The photo is saved with your content and included in Export JSON. If no photo is set, Byte the raccoon is shown.</p>
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
        ${fieldPlain("Icon (emoji / character)", ["projects",i,"icon"])}
        ${fieldPlain("Project title", ["projects",i,"title"])}
        ${fieldEN_JA("Tag", ["projects",i,"tag"])}
        ${fieldEN_JA("Description", ["projects",i,"desc"], true)}
        ${fieldPlain("Tech tags (comma separated)", ["projects",i,"_tech"])}
      </div>`;
    });
    html += `<button class="add-btn" id="addProj">＋ Add new project</button>`;
  }
  else if(curTab===4){ // Strip
    if(typeof DRAFT.strip._items !== 'string') DRAFT.strip._items = DRAFT.strip.items.join(", ");
    html += fieldEN_JA("Strip label (this is also the secret admin button)", ["strip","label"]);
    html += fieldPlain("Products (comma separated)", ["strip","_items"]);
  }
  else if(curTab===5){ // Contact & socials
    html += fieldEN_JA("Heading", ["contact","heading"]);
    html += fieldEN_JA("Text", ["contact","text"], true);
    html += fieldEN_JA("Button label", ["contact","cta"]);
    html += fieldPlain("Contact email", ["contact","email"]);
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
    DRAFT.projects.push({icon:"🆕",tag:{en:"New",ja:"新規"},title:"New project",desc:{en:"",ja:""},tech:[],_tech:""});
    buildTab();
  });
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
  a.download = "portfolio-data.json";
  a.click();
  URL.revokeObjectURL(a.href);
  setStatus("Exported portfolio-data.json — keep it as a backup.");
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
