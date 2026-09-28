/* ═══════════════════════════════════════════════════════════════
   content.js — 사이트의 모든 문구 (연구 내용·구성원·소식·모집 등)
   이 파일만 수정하면 홈페이지에 반영됩니다. en: 영어 / kr: 한국어
   ═══════════════════════════════════════════════════════════════ */
const SITE = {
  labName: "A³Mlab",
  labFull: "Laboratory for AI-Accelerated, Automated Design of Materials",
  /* 이메일은 아래처럼 아이디와 도메인을 나눠 적습니다. 페이지에서는 방문자가
     "이메일 주소 보기"를 누를 때만 합쳐져 표시되므로, 소스에 완전한 주소가
     그대로 남지 않아 수집 봇에 덜 노출됩니다. 주소를 바꿀 때는 두 줄만 수정하세요. */
  emailUser: "jhwan",                    // 이메일 @ 앞부분
  emailDomain: "pusan.ac.kr",            // 이메일 @ 뒷부분
  showOffice: true,                      // false로 바꾸면 연구실 위치를 페이지에 표시하지 않습니다
  office: "Room 312, Engineering Building 12 (Building 103), Pusan National University",
  scholarUrl: "https://scholar.google.co.kr/citations?user=1FWcaAIAAAAJ",

  hero: {
    en: { title: "Materials design, <em>automated</em>: AI proposes, agents execute, and discovery runs around the clock.",
          desc: "A³Mlab builds an agent-based automated research environment for materials design — generative models that propose new materials, multi-scale simulation that evaluates them, and AI agents that orchestrate the entire loop from hypothesis to validation." },
    kr: { title: "소재 설계의 <em>자동화</em>: AI가 제안하고, 에이전트가 실행하는 연구.",
          desc: "A³Mlab은 소재 설계를 위한 에이전트 기반 자동화 연구 환경을 구축합니다 — 새로운 소재를 제안하는 생성 모델, 이를 검증하는 멀티스케일 시뮬레이션, 그리고 가설부터 검증까지 전체 루프를 조율하는 AI 에이전트." }
  },

  recruit: {
    en: { tag: "OPEN POSITIONS · 2026", text: "We are recruiting our founding cohort of MS/PhD students and interns." },
    kr: { tag: "모집 공고 · 2026", text: "창립 멤버가 될 석박사과정 및 인턴을 모집합니다." }
  },

  // 홈 화면 하단 3개 키워드 카드
  concepts: [
    { tag: "I.",   en: { t: "AI", d: "Generative and predictive deep learning — GANs, diffusion, graph networks — trained on chemistry, not just data." },
                   kr: { t: "AI", d: "화학 지식을 학습한 생성·예측 딥러닝 — GAN, 확산 모델, 그래프 신경망." } },
    { tag: "II.",  en: { t: "Acceleration", d: "Uncertainty-aware ML/DFT hybrid screening and active learning that compress years of search into weeks." },
                   kr: { t: "가속", d: "불확실성 정량화 기반 ML/DFT 하이브리드 스크리닝과 능동 학습으로 수년의 탐색을 수 주로 단축." } },
    { tag: "III.", en: { t: "Automation", d: "Agent-based automated research: AI agents that plan, run, and analyze simulation and ML workflows, closing the design loop with minimal human bottlenecks." },
                   kr: { t: "자동화", d: "계획·실행·분석을 AI 에이전트가 수행하는 에이전트 기반 자동화 연구 — 사람의 병목 없이 설계 루프를 닫습니다." } }
  ],

  // 연구 분야 (핵심 주제 4개 — 원하는 만큼 추가/삭제 가능, 쉼표로 구분)
  areas: [
    { num: "01", en: { t: "AI-driven materials design", d: "Generative and predictive models that propose new inorganic materials directly from target properties, and tell which candidates can actually be synthesized." },
                 kr: { t: "AI 기반 소재 설계", d: "목표 물성으로부터 새로운 소재를 직접 제안하는 생성·예측 모델, 그리고 제안된 후보가 실제로 합성 가능한지 판별하는 모델을 개발합니다." }, tags: ["generative models", "inverse design", "synthesizability"] },
    { num: "02", en: { t: "Automated & accelerated materials discovery", d: "AI agents, active learning, and uncertainty-aware ML/DFT screening that plan and run the search, shortening discovery from years to weeks." },
                 kr: { t: "소재 설계 자동화·가속화", d: "AI 에이전트, 능동 학습, 불확실성 기반 ML/DFT 스크리닝으로 탐색 과정을 계획·실행하여 소재 발견에 걸리는 시간을 수년에서 수 주로 줄입니다." }, tags: ["AI agents", "active learning", "high-throughput"] },
    { num: "03", en: { t: "Multi-scale simulation", d: "Quantum chemistry, ML potentials, and process-level models linked in one workflow, from electrons to device performance." },
                 kr: { t: "멀티스케일 시뮬레이션", d: "양자화학 계산, 기계학습 포텐셜, 공정 수준 모델을 하나의 워크플로로 연결하여 전자 스케일부터 소자 성능까지 예측합니다." }, tags: ["DFT", "ML potentials", "process-to-device"] },
    { num: "04", en: { t: "AI for Science", d: "Machine learning that carries chemical and physical knowledge, applied to catalysis, energy, and environmental materials." },
                 kr: { t: "AI for Science", d: "화학·물리 지식을 담은 기계학습을 촉매, 에너지, 환경 소재 문제에 적용합니다." }, tags: ["catalysis", "energy materials", "chemistry + AI"] }
  ],

  // 구성원: 교수 정보 + 이력
  pi: {
    name: "Juhwan Noh",
    photo: "images/profile.jpg",   // 교수 사진: images 폴더에 사진을 넣고 경로를 적으세요

    en: { title: "Assistant Professor<br>AI Convergence Computational Science<br>Pusan National University" },
    kr: { title: "조교수<br>AI융합계산과학전공<br>부산대학교" },
    cv: [
      { years: "2026 –",      en: { role: "Assistant Professor", org: "Pusan National University, AI Convergence Computational Science" },
                              kr: { role: "조교수", org: "부산대학교 AI융합계산과학전공" } },
      { years: "2022 – 2026", en: { role: "Senior Researcher", org: "KRICT, Digital Chemical Research Center" },
                              kr: { role: "선임연구원", org: "한국화학연구원 디지털화학연구센터" } },
      { years: "2018 – 2022", en: { role: "PhD, Chemical & Biomolecular Engineering", org: "KAIST · advisor: <a href='https://micc.snu.ac.kr/' target='_blank'>Prof. Yousung Jung</a>" },
                              kr: { role: "박사, 생명화학공학과", org: "KAIST · 지도교수: <a href='https://micc.snu.ac.kr/' target='_blank'>정유성 교수</a>" } },
      { years: "2016 – 2018", en: { role: "MS, Graduate School of EEWS", org: "KAIST · advisor: <a href='https://micc.snu.ac.kr/' target='_blank'>Prof. Yousung Jung</a>" },
                              kr: { role: "석사, EEWS 대학원", org: "KAIST · 지도교수: <a href='https://micc.snu.ac.kr/' target='_blank'>정유성 교수</a>" } },
      { years: "2012 – 2016", en: { role: "BS, School of Mechanical Engineering", org: "Sungkyunkwan University" },
                              kr: { role: "학사, 기계공학부", org: "성균관대학교" } }
    ],
    /* ═══ 수상내역: 실제 수상 이력으로 바꿔 넣으세요 (연도 내림차순 권장) ═══ */
    awards: [
      { year: "2019", en: "25th HumanTech Paper Awards - Bronze", kr: "제25회 휴먼테크논문대상-동상" },
      { year: "2018", en: "24th HumanTech Paper Awards - Bronze", kr: "제24회 휴먼테크논문대상-동상" }
    ]
  },

  /* ── 연구원(학생) 목록: 새 학생이 오면 아래 형식을 복사해 한 줄 추가 ──
     사진을 넣으려면 photo: "사진파일.jpg" 처럼 파일명을 적으세요 (없으면 "") */
  members: [
    { name: "산지니 Sanjini", joined: "2026", photo: "",
      en: { role: "Virtual Researcher (PNU mascot)", topic: "PNU's eagle mascot, holding the seat warm for A³Mlab's founding students." },
      kr: { role: "가상 연구원 (부산대 마스코트)", topic: "부산대 독수리 마스코트. 창립 멤버가 올 때까지 자리를 지키고 있습니다." } }
    /* ═══ 새 학생 추가 위치: 위 항목 뒤에 쉼표(,)를 찍고 아래 형식을 복사해 붙이세요 ═══
    ,{ name: "이름", joined: "2027", photo: "",
      en: { role: "MS Student", topic: "연구 주제(영문)" },
      kr: { role: "석사과정", topic: "연구 주제(국문)" } }                              */
  ],

  /* ── 졸업생 목록: 졸업하면 members에서 지우고 여기에 추가 ── */
  alumni: [
    /* ═══ 졸업생 추가 위치: 첫 졸업생이 나오면 아래 형식을 복사해 붙이세요 ═══
       (비어 있는 동안에는 졸업생 섹션이 화면에 표시되지 않습니다)
    { name: "이름", period: "2026 – 2028",
      en: { degree: "MS", topic: "학위논문 주제(영문)", current: "현재 소속(영문)" },
      kr: { degree: "석사", topic: "학위논문 주제(국문)", current: "현재 소속(국문)" } }   */
  ],

  // 소식 (최신이 위)
  news: [
    { date: "2026.09", en: "A³Mlab officially opens at Pusan National University.", kr: "A³Mlab이 부산대학교에서 공식 출범합니다." },
    { date: "2026.09", en: "Recruiting founding cohort: MS/PhD students and undergraduate interns.", kr: "창립 멤버 모집: 석박사과정 및 학부 인턴." },
    { date: "2026.08", en: "Prof. Noh joins the AI Convergence Computational Science Major as Assistant Professor.", kr: "노주환 교수가 AI융합계산과학전공 조교수로 부임합니다." }
  ],

  // 모집 분야
  positions: [
    { tag: "GRADUATE", en: { t: "MS / PhD students", d: "Full research assistantship. Background in materials, chemistry, physics, or CS — curiosity required, ML experience optional." },
                       kr: { t: "석사·박사과정", d: "연구 장학금 지원. 재료·화학·물리·전산 전공 환영 — 호기심 필수, ML 경험은 선택." } },
    { tag: "UNDERGRADUATE", en: { t: "Research interns", d: "Semester or summer internships on real projects: generative models, simulation pipelines, materials data." },
                       kr: { t: "학부 인턴", d: "학기 중·여름 인턴십. 생성 모델, 시뮬레이션 파이프라인, 소재 데이터 등 실전 프로젝트 참여." } },
    { tag: "COLLABORATION", en: { t: "Collaborators", d: "Open to academic and industry collaboration on AI-driven materials and chemistry problems." },
                       kr: { t: "공동연구", d: "AI 기반 소재·화학 문제에 대한 학계·산업계 공동연구를 환영합니다." } }
  ],

  join: {
    en: { title: "Build the lab with us.", desc: "As a founding member of A³Mlab you will shape its research culture from day one — working at the intersection of machine learning, quantum chemistry, and materials science." },
    kr: { title: "함께 연구실을 만들어갈 분을 찾습니다.", desc: "A³Mlab의 창립 멤버로서 머신러닝, 양자화학, 재료과학의 교차점에서 연구실의 문화를 처음부터 함께 만들어갑니다." }
  }
};
