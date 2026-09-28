/* ═══════════════════════════════════════════════════════════════
   publications.js — 논문 목록
   새 논문은 아래 형식대로 배열 맨 앞에 추가하세요. 연도별 정렬은 자동.
   { "title": "논문 제목", "authors": "저자", "venue": "저널 권(호), 페이지",
     "year": 2027, "url": "https://doi.org/..." },
   ═══════════════════════════════════════════════════════════════ */
const PUBLICATIONS = [
 {
  "title": "Evaluating global optimization and generative methods for low-energy and diverse crystal structure prediction via two case studies",
  "authors": "S An, S Kim, J Kim, J Noh, Z Allahyari, AR Oganov, CJ Pickard, A Aspuru-Guzik, Y Jung",
  "venue": "Digital Discovery, 2026",
  "year": 2026,
  "url": "https://doi.org/10.1039/d6dd00136j"
 },
 {
  "title": "Inverse design of solid-state materials via a continuous representation",
  "authors": "J Noh, J Kim, HS Stein, B Sanchez-Lengeling, JM Gregoire, A Aspuru-Guzik, Y Jung",
  "venue": "Matter 1 (5), 1370-1384",
  "year": 2019,
  "url": "https://doi.org/10.1016/j.matt.2019.08.017"
 },
 {
  "title": "Generative Adversarial Networks for Crystal Structure Prediction",
  "authors": "S Kim†, J Noh†, GH Gu, A Aspuru-Guzik, Y Jung (†equal contribution)",
  "venue": "ACS Central Science 6 (8), 1412-1420",
  "year": 2020,
  "url": "https://doi.org/10.1021/acscentsci.0c00426"
 },
 {
  "title": "Machine learning for renewable energy materials",
  "authors": "GH Gu, J Noh, I Kim, Y Jung",
  "venue": "Journal of Materials Chemistry A 7 (29), 17096-17117",
  "year": 2019,
  "url": "https://doi.org/10.1039/C9TA02356A"
 },
 {
  "title": "An invertible crystallographic representation for general inverse design of inorganic crystals with targeted properties",
  "authors": "Z Ren, SIP Tian, J Noh, F Oviedo, G Xing, J Li, Q Liang, R Zhu, AG Aberle, et al.",
  "venue": "Matter 5 (1), 314-335",
  "year": 2022,
  "url": "https://doi.org/10.1016/j.matt.2021.11.032"
 },
 {
  "title": "Machine-enabled inverse design of inorganic solid materials: promises and challenges",
  "authors": "J Noh, GH Gu, S Kim, Y Jung",
  "venue": "Chemical Science 11 (19), 4871-4881",
  "year": 2020,
  "url": "https://doi.org/10.1039/D0SC00594K"
 },
 {
  "title": "Understanding potential-dependent competition between electrocatalytic dinitrogen and proton reduction reactions",
  "authors": "C Choi, GH Gu, J Noh, HS Park, Y Jung",
  "venue": "Nature Communications 12 (1), 4353",
  "year": 2021,
  "url": "https://doi.org/10.1038/s41467-021-24539-1"
 },
 {
  "title": "Structure-based synthesizability prediction of crystals using partially supervised learning",
  "authors": "J Jang, GH Gu, J Noh, J Kim, Y Jung",
  "venue": "Journal of the American Chemical Society 142 (44), 18836-18843",
  "year": 2020,
  "url": "https://doi.org/10.1021/jacs.0c07384"
 },
 {
  "title": "Active learning with non-ab initio input features toward efficient CO2 reduction catalysts",
  "authors": "J Noh, S Back, J Kim, Y Jung",
  "venue": "Chemical Science 9 (23), 5152-5159",
  "year": 2018,
  "url": "https://doi.org/10.1039/C7SC03422A"
 },
 {
  "title": "Accelerated chemical science with AI",
  "authors": "S Back, A Aspuru-Guzik, M Ceriotti, G Gryn'ova, B Grzybowski, GH Gu, et al.",
  "venue": "Digital Discovery 3 (1), 23-33",
  "year": 2024,
  "url": "https://doi.org/10.1039/D3DD00213F"
 },
 {
  "title": "Practical deep-learning representation for fast heterogeneous catalyst screening",
  "authors": "GH Gu†, J Noh†, S Kim, S Back, Z Ulissi, Y Jung (†equal contribution)",
  "venue": "The Journal of Physical Chemistry Letters 11 (9), 3185-3191",
  "year": 2020,
  "url": "https://doi.org/10.1021/acs.jpclett.0c00634"
 },
 {
  "title": "Perovskite synthesizability using graph neural networks",
  "authors": "GH Gu†, J Jang†, J Noh†, A Walsh, Y Jung (†equal contribution)",
  "venue": "npj Computational Materials 8 (1), 1-8",
  "year": 2022,
  "url": "https://doi.org/10.1038/s41524-022-00757-z"
 },
 {
  "title": "Progress in computational and machine-learning methods for heterogeneous small-molecule activation",
  "authors": "GH Gu, C Choi, Y Lee, AB Situmorang, J Noh, YH Kim, Y Jung",
  "venue": "Advanced Materials 32 (35), 1907865",
  "year": 2020,
  "url": "https://doi.org/10.1002/adma.201907865"
 },
 {
  "title": "Uncertainty-quantified hybrid machine learning/density functional theory high throughput screening method for crystals",
  "authors": "J Noh, GH Gu, S Kim, Y Jung",
  "venue": "Journal of Chemical Information and Modeling 60 (4), 1996-2003",
  "year": 2020,
  "url": "https://doi.org/10.1021/acs.jcim.0c00003"
 },
 {
  "title": "Autobifunctional mechanism of jagged Pt nanowires for hydrogen evolution kinetics via end-to-end simulation",
  "authors": "GH Gu, J Lim, C Wan, T Cheng, H Pu, S Kim, J Noh, C Choi, J Kim, et al.",
  "venue": "Journal of the American Chemical Society 143 (14), 5355-5363",
  "year": 2021,
  "url": "https://doi.org/10.1021/jacs.0c11261"
 },
 {
  "title": "Machine learning-enabled chemical space exploration of all-inorganic perovskites for photovoltaics",
  "authors": "JS Kim, J Noh, J Im",
  "venue": "npj Computational Materials 10 (1), 97",
  "year": 2024,
  "url": "https://doi.org/10.1038/s41524-024-01270-1"
 },
 {
  "title": "Bimetallic Gold–Silver Nanostructures Drive Low Overpotentials for Electrochemical Carbon Dioxide Reduction",
  "authors": "JW Park†, W Choi†, J Noh†, W Park, GH Gu, J Park, Y Jung, H Song (†equal contribution)",
  "venue": "ACS Applied Materials & Interfaces 14 (5), 6604-6614",
  "year": 2022,
  "url": "https://doi.org/10.1021/acsami.1c20852"
 },
 {
  "title": "Synthesizability of materials stoichiometry using semi-supervised learning",
  "authors": "J Jang, J Noh, L Zhou, GH Gu, JM Gregoire, Y Jung",
  "venue": "Matter 7 (6), 2294-2312",
  "year": 2024,
  "url": "https://doi.org/10.1016/j.matt.2024.05.002"
 },
 {
  "title": "Unveiling new stable manganese based photoanode materials via theoretical high-throughput screening and experiments",
  "authors": "J Noh, S Kim, GH Gu, A Shinde, L Zhou, JM Gregoire, Y Jung",
  "venue": "Chemical Communications 55 (89), 13418-13421",
  "year": 2019,
  "url": "https://doi.org/10.1039/C9CC06736A"
 },
 {
  "title": "Machine learning-enabled fast exploration of stable and active single-atom catalysts for oxygen evolution reaction",
  "authors": "W Park, J Noh, GH Gu, G Nam, SM Jung, YT Kim, Y Jung",
  "venue": "Innovation Materials 2 (2), 100072",
  "year": 2024,
  "url": "https://doi.org/10.59717/j.xinn-mater.2024.100072"
 },
 {
  "title": "Reaction templates: Bridging synthesis knowledge and artificial intelligence",
  "authors": "S Chen, J Noh, J Jang, S Kim, GH Gu, Y Jung",
  "venue": "Accounts of Chemical Research 57 (14), 1964-1972",
  "year": 2024,
  "url": "https://doi.org/10.1021/acs.accounts.4c00261"
 },
 {
  "title": "Path-Aware and Structure-Preserving Generation of Synthetically Accessible Molecules",
  "authors": "J Noh, DW Jeong, K Kim, S Han, M Lee, H Lee, Y Jung",
  "venue": "ICML 2022, 16952-16968",
  "year": 2022,
  "url": "https://proceedings.mlr.press/v162/noh22a.html"
 },
 {
  "title": "Discovery of multi-metal-layered double hydroxides for decontamination of iodate by machine learning-assisted experiments",
  "authors": "S Lee†, J Noh†, et al., HJ Ryu (†equal contribution)",
  "venue": "Journal of Hazardous Materials 494, 138735",
  "year": 2025,
  "url": "https://doi.org/10.1016/j.jhazmat.2025.138735"
 },
 {
  "title": "Data-driven framework based on machine learning and optimization algorithms to predict oxide-zeolite-based composite and reaction conditions for syngas-to-olefin conversion",
  "authors": "M Abdullaev, W Jeon, Y Kang, J Noh, JH Shin, HJ Chun, HW Kim, YT Kim",
  "venue": "Chinese Journal of Catalysis, 2025",
  "year": 2025,
  "url": "https://doi.org/10.1016/S1872-2067(25)64733-4"
 },
 {
  "title": "Data-driven prediction of configurational stability of molecule-adsorbed heterogeneous catalysts",
  "authors": "J Noh, H Chang",
  "venue": "Journal of Chemical Information and Modeling 63 (19), 5981-5995",
  "year": 2023,
  "url": "https://doi.org/10.1021/acs.jcim.3c00591"
 },
 {
  "title": "A structure translation model for crystal compounds",
  "authors": "J Noh†, T Jin†, J Lee, et al., Y Jung",
  "venue": "npj Computational Materials 9, 142",
  "year": 2023,
  "url": "https://www.nature.com/articles/s41524-023-01094-5"
 },
 {
  "title": "Recent advances in data-driven and artificial intelligence-integrated perovskite solar cells: From design to self-driving laboratories",
  "authors": "J Lee, J Noh, H Lee, Y-L Lee, J Im, J Seo",
  "venue": "InfoMat, 2026",
  "year": 2026,
  "url": "https://doi.org/10.1002/inf2.70124"
 }
];
