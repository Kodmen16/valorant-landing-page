const tacticalAgents = [
  ['Jett','DUELIST','Hızlı giriş, smoke ile görüş kesme ve Tailwind ile güvenli çıkış.'],
  ['Omen','CONTROLLER','Dark Cover ile açı kapat, Paranoia ile site girişini kolaylaştır.'],
  ['Sova','INITIATOR','Recon Bolt ile bilgi al, Shock Bolt ile rakibi pozisyonundan çıkar.'],
  ['Sage','SENTINEL','Duvar ile rotayı böl, Slow Orb ile spike alanını geciktir.'],
  ['Raze','DUELIST','Boom Bot ile köşeleri temizle, patlayıcılarla rakibi açık alana zorla.'],
  ['Killjoy','SENTINEL','Alarm Bot ve Turret ile arkanı güvenceye al, Lockdown ile site al.']
];
const tacticalWeapons = [
  ['Vandal','TÜFEK','Uzun açılarda tekli atış kullan; spray yerine kısa burst tercih et.'],
  ['Phantom','TÜFEK','Smoke içi çatışmalarda ve yakın-orta mesafede kontrollü spray kullan.'],
  ['Operator','SNIPER','İlk teması alıp hemen pozisyon değiştir; yalnız peek atma.'],
  ['Spectre','SMG','Dar alanlarda hareket halinde kısa spray ve hızlı site baskısı uygula.'],
  ['Sheriff','TABANCA','Ekonomi round’unda kafa hizasına odaklan, gereksiz duel alma.'],
  ['Odin','AĞIR','Duvar arkası baskı ve dar geçit kontrolünde takım bilgisiyle kullan.']
];

function tacticsPage() {
  const style = `<style>
    .tactics-hero{padding:145px 0 45px;background:radial-gradient(circle at 85% 20%,rgba(255,70,85,.2),transparent 30%),var(--bg-2)}
    .tactics-tabs{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:35px 0}.tactics-tab{border:1px solid var(--line);background:var(--panel);color:var(--ink);padding:25px;text-align:left;cursor:pointer;transition:.25s}.tactics-tab strong{display:block;font:800 34px "Barlow Condensed";text-transform:uppercase}.tactics-tab span{display:block;color:var(--muted);font-size:13px;margin-top:5px}.tactics-tab.active,.tactics-tab:hover{border-color:var(--red);background:linear-gradient(135deg,rgba(255,70,85,.16),var(--panel))}.tactics-layout{display:grid;grid-template-columns:280px 1fr;gap:18px}.tactics-picker{border:1px solid var(--line);background:var(--panel);padding:16px;height:max-content;position:sticky;top:95px}.tactics-picker h3{font:800 23px "Barlow Condensed";text-transform:uppercase;margin:0 0 12px}.tactic-choice{display:flex;align-items:center;gap:10px;width:100%;padding:12px;border:1px solid transparent;background:transparent;color:var(--ink);text-align:left}.tactic-choice:hover,.tactic-choice.active{border-color:var(--red);background:rgba(255,70,85,.1)}.tactic-choice b{display:grid;place-items:center;width:32px;height:32px;background:var(--red);color:#fff;font:800 18px "Barlow Condensed"}.tactic-choice small{display:block;color:var(--muted);font-size:10px;margin-top:2px}.tactic-result{border:1px solid var(--line);background:var(--panel);padding:30px;min-height:360px}.tactic-result h2{font:800 58px "Barlow Condensed";text-transform:uppercase;margin:5px 0}.tactic-result>p{color:var(--muted);max-width:650px}.tactic-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:28px}.tactic-step{border-top:2px solid var(--red);padding:14px 0}.tactic-step b{color:var(--red);font:800 13px "Barlow Condensed";letter-spacing:.12em}.tactic-step p{color:var(--muted);font-size:13px;margin:7px 0 0}.tactics-note{margin-top:18px;color:var(--muted);font-size:12px;border-left:3px solid var(--red);padding-left:12px}@media(max-width:700px){.tactics-tabs,.tactics-layout,.tactic-steps{grid-template-columns:1fr}.tactics-picker{position:static}.tactics-hero{padding-top:120px}.tactic-result h2{font-size:45px}}
  </style>`;
  const mode = window.tacticsMode || 'agents';
  const selected = window.tacticsSelected || 0;
  const list = mode === 'agents' ? tacticalAgents : tacticalWeapons;
  const item = list[selected] || list[0];
  const isAgent = mode === 'agents';
  const choices = list.map((x,i) => `<button class="tactic-choice ${i === selected ? 'active' : ''}" data-tactic-index="${i}"><b>${x[0][0]}</b><span>${x[0]}<small>${x[1]}</small></span></button>`).join('');
  return `${style}<section class="tactics-hero"><div class="container"><p class="eyebrow">VANTA // TAKTİK LABORATUVARI</p><h1 class="page-head"><span style="font:800 clamp(42px,6vw,78px)/.9 'Barlow Condensed';text-transform:uppercase">KAZANMAK İÇİN<br>PLAN YAP.</span></h1><p style="color:var(--muted);max-width:610px">Önce savaşçını veya silahını seç. Ardından seçimine özel hazırlanmış kullanım planını ve kazanma yaklaşımını incele.</p><div class="tactics-tabs"><button class="tactics-tab ${isAgent?'active':''}" data-tactic-mode="agents"><strong>⚔ SAVAŞÇILAR</strong><span>Ajan seç, yeteneklerini stratejiye dönüştür.</span></button><button class="tactics-tab ${!isAgent?'active':''}" data-tactic-mode="weapons"><strong>◈ SİLAHLAR</strong><span>Silah seç, mesafe ve ekonomi planını kur.</span></button></div></div></section><section class="page" style="padding-top:35px"><div class="container"><div class="tactics-layout"><aside class="tactics-picker"><h3>${isAgent?'Savaşçı seç':'Silah seç'}</h3>${choices}</aside><article class="tactic-result"><span class="role">${item[1]}</span><h2>${item[0]}</h2><p>${item[2]}</p><div class="tactic-steps"><div class="tactic-step"><b>01 // HAZIRLIK</b><p>${isAgent?'Yeteneklerini round öncesi takım planına bağla; bilgi ve trade bekle.':'Ekonomiyi ve mesafeyi kontrol et. Silahın güçlü olduğu açıları takımınla paylaş.'}</p></div><div class="tactic-step"><b>02 // UYGULAMA</b><p>${isAgent?'İlk temastan sonra aynı açıya dönme; yetenek kullanıp avantajlı pozisyona geç.':'Nişan hizasını koru, gereksiz reload yapma ve round hedefini koru.'}</p></div><div class="tactic-step"><b>03 // KAZANÇ</b><p>${isAgent?'Alanı kazanınca spike ve rotasyon bilgisini takımına aktar.':'Mermiyi değil zamanı değerlendir; avantajı koru ve trade mesafesinde oyna.'}</p></div></div><p class="tactics-note">Bu öneri genel bir oyun rehberidir; harita, ekonomi ve takım kompozisyonuna göre uyarlayın.</p></article></div></div></section>`;
}

function bindTactics() {
  document.querySelectorAll('[data-tactic-mode]').forEach(button => button.onclick = () => { window.tacticsMode = button.dataset.tacticMode; window.tacticsSelected = 0; render(); });
  document.querySelectorAll('[data-tactic-index]').forEach(button => button.onclick = () => { window.tacticsSelected = Number(button.dataset.tacticIndex); render(); });
}
const originalRender = window.render;
window.render = function() { if (typeof originalRender === 'function') originalRender(); if (location.hash.replace('#/','').split('/')[0] === 'tactics') bindTactics(); };
