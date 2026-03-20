export interface Bilingual {
  en: string;
  ko: string;
}

export interface Project {
  title: Bilingual;
  summary: Bilingual;
  details: Bilingual;
  tags: string[];
  tools: string[];
}

export const projects: Project[] = [
  {
    title: {
      en: "3-Statement Financial Model & DCF Valuation",
      ko: "3-Statement 재무 모델 & DCF 밸류에이션",
    },
    summary: {
      en: "Built an integrated 3-statement financial model with a discounted cash flow valuation from scratch in Excel, modeling revenue growth, working capital, and terminal value assumptions.",
      ko: "Excel에서 손익계산서, 재무상태표, 현금흐름표를 통합한 3-Statement 재무 모델과 DCF 밸류에이션을 처음부터 구축했습니다.",
    },
    details: {
      en: "Developed a fully integrated 3-statement financial model (Income Statement, Balance Sheet, Cash Flow Statement) in Excel from scratch. The model dynamically links all three statements and includes a Discounted Cash Flow (DCF) valuation module with adjustable assumptions for revenue growth rates, operating margins, working capital changes, capital expenditures, and terminal value (using both perpetuity growth and exit multiple methods). Key features include sensitivity analysis tables, scenario toggles (base, bull, bear cases), and a clean summary dashboard for quick reference. This project deepened my understanding of how financial statements interconnect and how valuation frameworks are applied in investment banking and equity research contexts.",
      ko: "Excel에서 완전히 통합된 3-Statement 재무 모델(손익계산서, 재무상태표, 현금흐름표)을 처음부터 개발했습니다. 모델은 세 가지 재무제표를 동적으로 연결하며, 매출 성장률, 영업 마진, 운전자본 변동, 자본 지출, 터미널 밸류(영구 성장법 및 Exit Multiple 방법) 등의 가정을 조정할 수 있는 DCF 밸류에이션 모듈을 포함합니다. 주요 기능으로는 민감도 분석 테이블, 시나리오 토글(Base, Bull, Bear 케이스), 그리고 빠른 참조를 위한 대시보드가 있습니다.",
    },
    tags: ["Finance", "Valuation", "Excel"],
    tools: ["Excel", "Financial Modeling"],
  },
  {
    title: {
      en: "Financial Statement Analysis Project",
      ko: "재무제표 분석 프로젝트",
    },
    summary: {
      en: "Conducted a comprehensive analysis of public company financial statements, evaluating profitability, liquidity, and solvency ratios to assess financial health and performance trends.",
      ko: "상장 기업의 재무제표를 종합적으로 분석하여 수익성, 유동성, 건전성 비율을 평가하고 재무 건전성과 성과 추세를 분석했습니다.",
    },
    details: {
      en: "Performed an in-depth analysis of a publicly traded company's financial statements over a multi-year period using data sourced from SEC filings (10-K and 10-Q reports). Calculated and interpreted key financial ratios across profitability (ROE, ROA, net margin), liquidity (current ratio, quick ratio), efficiency (asset turnover, inventory turnover), and solvency (debt-to-equity, interest coverage). Built a comparative analysis framework benchmarking the company against industry peers. Created visual trend charts and a written executive summary highlighting key financial strengths, risks, and strategic recommendations.",
      ko: "SEC 공시 자료(10-K 및 10-Q 보고서)를 활용하여 상장 기업의 재무제표를 다년간에 걸쳐 심층 분석했습니다. 수익성(ROE, ROA, 순이익률), 유동성(유동비율, 당좌비율), 효율성(자산회전율, 재고회전율), 건전성(부채비율, 이자보상배율) 등의 핵심 재무 비율을 계산하고 해석했습니다. 동종 업계 기업과의 비교 분석 프레임워크를 구축하고, 시각적 추세 차트와 경영 요약 보고서를 작성했습니다.",
    },
    tags: ["Accounting", "Analytics"],
    tools: ["Excel", "SEC Filings", "Ratio Analysis"],
  },
  {
    title: {
      en: "Audit Analytics Dashboard",
      ko: "감사 분석 대시보드",
    },
    summary: {
      en: "Designed and developed an interactive analytics dashboard for audit data, automating key risk indicators and visualizing anomalies across financial transactions.",
      ko: "감사 데이터를 위한 인터랙티브 분석 대시보드를 설계 및 개발하여, 핵심 리스크 지표를 자동화하고 재무 거래의 이상 징후를 시각화했습니다.",
    },
    details: {
      en: "Created an interactive dashboard to assist in audit data analysis by automating the detection and visualization of key risk indicators. The dashboard ingests transactional data and applies rule-based and statistical checks to flag anomalies such as unusual transaction amounts, duplicate entries, and timing irregularities. Visualizations include heat maps for risk concentration, trend lines for transaction volumes, and drill-down tables for individual flagged items. Built using a combination of Excel for data processing and Python for advanced analytics and chart generation.",
      ko: "핵심 리스크 지표의 탐지 및 시각화를 자동화하여 감사 데이터 분석을 지원하는 인터랙티브 대시보드를 구축했습니다. 대시보드는 거래 데이터를 수집하고 규칙 기반 및 통계적 검사를 적용하여 비정상적인 거래 금액, 중복 항목, 타이밍 불규칙성 등의 이상 징후를 탐지합니다. 리스크 집중도 히트맵, 거래량 추세선, 개별 플래그 항목에 대한 드릴다운 테이블 등의 시각화를 포함합니다.",
    },
    tags: ["Accounting", "Analytics", "Design"],
    tools: ["Excel", "Python", "Data Visualization"],
  },
  {
    title: {
      en: "UTKSA Marketing & Branding Project",
      ko: "UTKSA 마케팅 & 브랜딩 프로젝트",
    },
    summary: {
      en: "Led the marketing and branding strategy for the University of Toronto Korean Students' Association, creating visual assets, social media campaigns, and event promotional materials.",
      ko: "토론토 대학교 한인학생회(UTKSA)의 마케팅 및 브랜딩 전략을 주도하여 비주얼 에셋, 소셜 미디어 캠페인, 이벤트 홍보 자료를 제작했습니다.",
    },
    details: {
      en: "As Marketing Director for the University of Toronto Korean Students' Association (UTKSA), I led a comprehensive rebrand and marketing strategy overhaul. This included designing a cohesive visual identity system (logo refinements, color palette, typography guidelines), creating social media content calendars, and producing promotional materials for major events including cultural nights, networking socials, and community outreach programs. Managed a small team of designers and content creators, coordinating deadlines and maintaining brand consistency across Instagram, event posters, and digital communications.",
      ko: "토론토 대학교 한인학생회(UTKSA)의 마케팅 디렉터로서 종합적인 리브랜딩 및 마케팅 전략 개편을 주도했습니다. 통일된 비주얼 아이덴티티 시스템 설계, 소셜 미디어 콘텐츠 캘린더 제작, 문화의 밤, 네트워킹 소셜, 커뮤니티 봉사 프로그램 등 주요 이벤트의 홍보 자료를 제작했습니다. 디자이너와 콘텐츠 크리에이터로 구성된 소규모 팀을 관리하며 브랜드 일관성을 유지했습니다.",
    },
    tags: ["Marketing", "Design", "Leadership"],
    tools: ["Canva", "Instagram", "Branding Strategy"],
  },
  {
    title: {
      en: "Python Data Analysis Mini Project",
      ko: "Python 데이터 분석 미니 프로젝트",
    },
    summary: {
      en: "Explored and analyzed real-world datasets using Python, applying data cleaning, exploratory analysis, and visualization techniques to uncover actionable insights.",
      ko: "Python을 활용하여 실제 데이터셋을 탐색 및 분석하고, 데이터 클리닝, 탐색적 분석, 시각화 기법을 적용하여 실행 가능한 인사이트를 도출했습니다.",
    },
    details: {
      en: "Undertook an independent data analysis project using Python to explore a real-world dataset. The workflow covered the full data analysis pipeline: importing raw data, handling missing values and inconsistencies, performing exploratory data analysis (EDA) with summary statistics and distribution plots, and generating insights through correlation analysis and grouped comparisons. Used Pandas for data manipulation, Matplotlib and Seaborn for visualization, and Jupyter Notebooks for documentation.",
      ko: "Python을 활용하여 실제 데이터셋을 탐색하는 독립 데이터 분석 프로젝트를 수행했습니다. 원시 데이터 가져오기, 결측값 처리, 요약 통계와 분포도를 통한 탐색적 데이터 분석(EDA), 상관 분석과 그룹 비교를 통한 인사이트 도출까지 전체 데이터 분석 파이프라인을 수행했습니다. Pandas, Matplotlib, Seaborn, Jupyter Notebooks를 활용했습니다.",
    },
    tags: ["Analytics", "Technical"],
    tools: ["Python", "Pandas", "Matplotlib"],
  },
  {
    title: {
      en: "Personal Productivity & Systems Project",
      ko: "개인 생산성 & 시스템 프로젝트",
    },
    summary: {
      en: "Designed a personal productivity system integrating task management, goal tracking, and knowledge management tools to optimize daily workflows and long-term planning.",
      ko: "작업 관리, 목표 추적, 지식 관리 도구를 통합한 개인 생산성 시스템을 설계하여 일상 워크플로우와 장기 계획을 최적화했습니다.",
    },
    details: {
      en: "Designed and implemented a personal productivity and knowledge management system using Notion as the core platform. The system includes interconnected databases for task management (with priority scoring and deadline tracking), goal setting (quarterly OKRs broken into weekly actions), a knowledge wiki (organized by subject area for academic and self-learning notes), and a project tracker for managing multiple concurrent initiatives. Applied principles from systems thinking to create feedback loops between daily habits and long-term objectives.",
      ko: "Notion을 핵심 플랫폼으로 활용하여 개인 생산성 및 지식 관리 시스템을 설계하고 구현했습니다. 작업 관리(우선순위 점수 및 마감일 추적), 목표 설정(분기별 OKR을 주간 액션으로 분해), 지식 위키, 프로젝트 트래커 등 상호 연결된 데이터베이스를 포함합니다. 시스템 사고 원칙을 적용하여 일상 습관과 장기 목표 사이의 피드백 루프를 만들었습니다.",
    },
    tags: ["Systems", "Design", "Productivity"],
    tools: ["Notion", "Systems Thinking", "Automation"],
  },
];

export interface Experience {
  role: Bilingual;
  organization: Bilingual;
  period: string;
  description: Bilingual;
}

export const experiences: Experience[] = [
  {
    role: { en: "Marketing Director", ko: "마케팅 디렉터" },
    organization: {
      en: "University of Toronto Korean Students' Association (UTKSA)",
      ko: "토론토 대학교 한인학생회 (UTKSA)",
    },
    period: "Sep 2024 — Present",
    description: {
      en: "Leading brand strategy, social media content creation, and event marketing for one of the largest cultural clubs on campus. Managing a team of designers and content creators.",
      ko: "캠퍼스 내 최대 규모의 문화 동아리 중 하나의 브랜드 전략, 소셜 미디어 콘텐츠 제작, 이벤트 마케팅을 주도하고 있습니다. 디자이너와 콘텐츠 크리에이터 팀을 관리합니다.",
    },
  },
  {
    role: { en: "Finance Case Competition Participant", ko: "금융 케이스 경진대회 참가자" },
    organization: {
      en: "University of Toronto Scarborough",
      ko: "토론토 대학교 스카보로 캠퍼스",
    },
    period: "Jan 2025 — Mar 2025",
    description: {
      en: "Competed in finance case competitions analyzing real-world business problems, developing financial models, and presenting strategic recommendations to panels of judges.",
      ko: "금융 케이스 경진대회에 참가하여 실제 비즈니스 문제를 분석하고, 재무 모델을 개발하며, 심사위원단에게 전략적 권고사항을 발표했습니다.",
    },
  },
  {
    role: { en: "Academic Projects — BBA Program", ko: "학술 프로젝트 — BBA 프로그램" },
    organization: {
      en: "University of Toronto Scarborough — Management",
      ko: "토론토 대학교 스카보로 — 경영학과",
    },
    period: "Sep 2023 — Present",
    description: {
      en: "Completed projects in financial accounting, management, marketing strategy, and data analysis. Consistently applied analytical frameworks and delivered structured presentations.",
      ko: "재무회계, 경영학, 마케팅 전략, 데이터 분석 분야의 프로젝트를 수행했습니다. 분석 프레임워크를 일관되게 적용하고 체계적인 프레젠테이션을 전달했습니다.",
    },
  },
  {
    role: { en: "Self-Directed Projects & Learning", ko: "자기주도 프로젝트 & 학습" },
    organization: { en: "Independent", ko: "독립 프로젝트" },
    period: "Ongoing",
    description: {
      en: "Building financial models, learning Python for data analysis, designing branding materials, and developing personal systems for productivity and knowledge management.",
      ko: "재무 모델 구축, 데이터 분석을 위한 Python 학습, 브랜딩 자료 디자인, 생산성 및 지식 관리를 위한 개인 시스템 개발을 진행하고 있습니다.",
    },
  },
];

export interface SkillCategory {
  name: Bilingual;
  skills: Bilingual[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: { en: "Finance & Accounting", ko: "금융 & 회계" },
    skills: [
      { en: "Financial Analysis", ko: "재무 분석" },
      { en: "Valuation (DCF, Comps)", ko: "밸류에이션 (DCF, Comps)" },
      { en: "Financial Modeling", ko: "재무 모델링" },
      { en: "Ratio Analysis", ko: "비율 분석" },
      { en: "Case Analysis", ko: "케이스 분석" },
      { en: "Audit Concepts", ko: "감사 개념" },
    ],
  },
  {
    name: { en: "Technical", ko: "기술" },
    skills: [
      { en: "Excel (Advanced)", ko: "Excel (고급)" },
      { en: "Python", ko: "Python" },
      { en: "SQL (Basic)", ko: "SQL (기초)" },
      { en: "Data Visualization", ko: "데이터 시각화" },
      { en: "Financial Databases", ko: "금융 데이터베이스" },
    ],
  },
  {
    name: { en: "Creative", ko: "크리에이티브" },
    skills: [
      { en: "Canva", ko: "Canva" },
      { en: "Branding & Identity", ko: "브랜딩 & 아이덴티티" },
      { en: "Presentation Design", ko: "프레젠테이션 디자인" },
      { en: "Social Media Strategy", ko: "소셜 미디어 전략" },
      { en: "Visual Communication", ko: "비주얼 커뮤니케이션" },
    ],
  },
  {
    name: { en: "Tools & Soft Skills", ko: "도구 & 소프트 스킬" },
    skills: [
      { en: "PowerPoint", ko: "PowerPoint" },
      { en: "Notion", ko: "Notion" },
      { en: "Google Workspace", ko: "Google Workspace" },
      { en: "Teamwork", ko: "팀워크" },
      { en: "Communication", ko: "커뮤니케이션" },
      { en: "Leadership", ko: "리더십" },
    ],
  },
];
