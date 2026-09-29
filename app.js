/* 화면 조립 코드 — 문구는 content.js, 논문은 publications.js에서 수정하세요 */
let lang = 'en';
const L = o => o[lang];
const T = (en, kr) => lang === 'en' ? en : kr;
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');

function toggleLang(){ lang = lang === 'en' ? 'kr' : 'en'; render(); }

/* 이메일은 소스에 통째로 두지 않고, 버튼을 누를 때 조립합니다 */
function revealEmail(el){
  const a = SITE.emailUser + String.fromCharCode(64) + SITE.emailDomain;
  el.outerHTML = '<a href="' + 'mail' + 'to:' + a + '">' + a + '</a>';
}

function render(){
  document.documentElement.lang = lang === 'en' ? 'en' : 'ko';
  document.getElementById('langBtn').textContent = T('한국어', 'English');
  document.getElementById('nav').innerHTML = [
    ['about', T('About','소개')], ['research', T('Research','연구')], ['pi', T('PI','교수')],
    ['publications', T('Publications','논문')], ['join', T('Join Us','모집')]
  ].map(([id, t]) => '<a href="#' + id + '">' + t + '</a>').join('');

  const h = L(SITE.hero), j = L(SITE.join);

  const about = '<section id="about">'
    + '<div class="eyebrow">' + SITE.labFull + '</div>'
    + '<h1>' + h.title + '</h1><p class="lede">' + h.desc + '</p>'
    + '<div class="btns"><a class="btn dark" href="#research">' + T('Our research','연구 분야') + '</a>'
    + '<a class="btn" href="#join">' + T('Join us','모집 안내') + '</a></div></section>';

  const fig = SITE.researchFigure === undefined ? 'images/research-overview.png' : SITE.researchFigure;
  const cap = SITE.researchFigureCaption ? L(SITE.researchFigureCaption) : '';
  const research = '<section id="research"><h2>' + T('Research','연구 분야') + '</h2>'
    + (fig ? '<figure class="overview"><img src="' + fig + '" alt="' + T('Research overview','연구 개요') + '" onerror="this.parentNode.remove()">'
    + (cap ? '<figcaption>' + cap + '</figcaption>' : '') + '</figure>' : '')
    + SITE.areas.map(a => { const x = L(a);
      return '<div class="area"><div class="num">' + a.num + '</div><div><div class="a-title">' + x.t + '</div><div class="a-desc">' + x.d + '</div></div></div>'; }).join('')
    + '</section>';

  const pi = SITE.pi;
  const piSec = '<section id="pi"><h2>' + T('Principal Investigator','연구책임자') + '</h2><div class="pi">'
    + '<div>' + '<div class="pi-photo-wrap"><img class="pi-photo" src="' + (pi.photo || 'images/professor.jpg') + '" alt="' + pi.name + '" onerror="this.parentNode.classList.add(\'empty\');this.remove()"><span>' + T('Photo: images/professor.jpg','사진: images/professor.jpg') + '</span></div>'
    + '<div class="pi-name">' + pi.name + '</div><div class="pi-title">' + L(pi).title + '</div></div>'
    + '<div><div class="eyebrow">' + T('Education & Experience','학력 및 경력') + '</div>'
    + pi.cv.map(e => { const x = L(e);
      return '<div class="cv"><div class="cv-y">' + e.years + '</div><div><div class="p-title">' + x.role + '</div><div class="p-desc">' + x.org + '</div></div></div>'; }).join('')
    + (pi.awards && pi.awards.length ? '<div class="eyebrow" style="margin-top:28px">' + T('Honors & Awards','수상') + '</div>'
      + pi.awards.map(a => '<div class="cv"><div class="cv-y">' + a.year + '</div><div>' + L(a) + '</div></div>').join('') : '')
    + '</div></div></section>';

  const groups = {};
  PUBLICATIONS.forEach(p => (groups[p.year] = groups[p.year] || []).push(p));
  const pubs = '<section id="publications"><div class="pub-head"><h2>' + T('Publications','논문') + '</h2>'
    + '<a href="' + SITE.scholarUrl + '" target="_blank" rel="noopener">Google Scholar ↗</a></div>'
    + Object.keys(groups).sort((a,b) => b - a).map(y => '<div class="year">' + y + '</div>'
      + groups[y].map(p => '<div class="pub"><a class="pub-title" href="' + p.url + '" target="_blank" rel="noopener">' + esc(p.title) + '</a>'
        + '<div class="pub-authors">' + esc(p.authors) + '</div><div class="pub-venue">' + esc(p.venue) + '</div></div>').join('')).join('')
    + '</section>';

  const pos = SITE.positions.filter(p => p.tag !== 'COLLABORATION');
  const join = '<section id="join"><h2>' + j.title + '</h2><p class="lede">' + j.desc + '</p>'
    + pos.map(p => { const x = L(p);
      return '<div class="pos"><div><div class="tag">' + p.tag + '</div><div class="p-title">' + x.t + '</div></div><div class="p-desc">' + x.d + '</div></div>'; }).join('')
    + '<div class="contact"><div class="eyebrow">' + T('Contact','문의') + '</div>'
    + '<p style="margin:0 0 12px">' + T('Send a CV and a short note on your research interests.','이력서와 관심 연구 분야를 간단히 적어 보내주세요.') + '</p>'
    + '<button class="email-reveal" type="button" onclick="revealEmail(this)">' + T('Show email address','이메일 주소 보기') + '</button>'
    + (SITE.showOffice === false ? '' : '<p style="margin:12px 0 0;color:var(--muted);font-size:14px">' + SITE.office + '</p>')
    + '</div></section>';

  document.getElementById('main').innerHTML = about + research + piSec + pubs + join;
}
render();
