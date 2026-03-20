export interface Project {
  title: string;
  summary: string;
  details: string;
  tags: string[];
  tools: string[];
}

export const projects: Project[] = [
  {
    title: "3-Statement Financial Model & DCF Valuation",
    summary:
      "Built an integrated 3-statement financial model with a discounted cash flow valuation from scratch in Excel, modeling revenue growth, working capital, and terminal value assumptions.",
    details:
      "Developed a fully integrated 3-statement financial model (Income Statement, Balance Sheet, Cash Flow Statement) in Excel from scratch. The model dynamically links all three statements and includes a Discounted Cash Flow (DCF) valuation module with adjustable assumptions for revenue growth rates, operating margins, working capital changes, capital expenditures, and terminal value (using both perpetuity growth and exit multiple methods). Key features include sensitivity analysis tables, scenario toggles (base, bull, bear cases), and a clean summary dashboard for quick reference. This project deepened my understanding of how financial statements interconnect and how valuation frameworks are applied in investment banking and equity research contexts.",
    tags: ["Finance", "Valuation", "Excel"],
    tools: ["Excel", "Financial Modeling"],
  },
  {
    title: "Financial Statement Analysis Project",
    summary:
      "Conducted a comprehensive analysis of public company financial statements, evaluating profitability, liquidity, and solvency ratios to assess financial health and performance trends.",
    details:
      "Performed an in-depth analysis of a publicly traded company's financial statements over a multi-year period using data sourced from SEC filings (10-K and 10-Q reports). Calculated and interpreted key financial ratios across profitability (ROE, ROA, net margin), liquidity (current ratio, quick ratio), efficiency (asset turnover, inventory turnover), and solvency (debt-to-equity, interest coverage). Built a comparative analysis framework benchmarking the company against industry peers. Created visual trend charts and a written executive summary highlighting key financial strengths, risks, and strategic recommendations. This project strengthened my ability to read and interpret real-world financial data critically.",
    tags: ["Accounting", "Analytics"],
    tools: ["Excel", "SEC Filings", "Ratio Analysis"],
  },
  {
    title: "Audit Analytics Dashboard",
    summary:
      "Designed and developed an interactive analytics dashboard for audit data, automating key risk indicators and visualizing anomalies across financial transactions.",
    details:
      "Created an interactive dashboard to assist in audit data analysis by automating the detection and visualization of key risk indicators. The dashboard ingests transactional data and applies rule-based and statistical checks to flag anomalies such as unusual transaction amounts, duplicate entries, and timing irregularities. Visualizations include heat maps for risk concentration, trend lines for transaction volumes, and drill-down tables for individual flagged items. Built using a combination of Excel for data processing and Python for advanced analytics and chart generation. This project demonstrated how data-driven approaches can enhance the efficiency and accuracy of audit procedures.",
    tags: ["Accounting", "Analytics", "Design"],
    tools: ["Excel", "Python", "Data Visualization"],
  },
  {
    title: "UTKSA Marketing & Branding Project",
    summary:
      "Led the marketing and branding strategy for the University of Toronto Korean Students' Association, creating visual assets, social media campaigns, and event promotional materials.",
    details:
      "As Marketing Director for the University of Toronto Korean Students' Association (UTKSA), I led a comprehensive rebrand and marketing strategy overhaul. This included designing a cohesive visual identity system (logo refinements, color palette, typography guidelines), creating social media content calendars, and producing promotional materials for major events including cultural nights, networking socials, and community outreach programs. Managed a small team of designers and content creators, coordinating deadlines and maintaining brand consistency across Instagram, event posters, and digital communications. The campaign resulted in measurable growth in engagement and event attendance. This experience honed my leadership, creative direction, and project management skills.",
    tags: ["Marketing", "Design", "Leadership"],
    tools: ["Canva", "Instagram", "Branding Strategy"],
  },
  {
    title: "Python Data Analysis Mini Project",
    summary:
      "Explored and analyzed real-world datasets using Python, applying data cleaning, exploratory analysis, and visualization techniques to uncover actionable insights.",
    details:
      "Undertook an independent data analysis project using Python to explore a real-world dataset. The workflow covered the full data analysis pipeline: importing raw data, handling missing values and inconsistencies, performing exploratory data analysis (EDA) with summary statistics and distribution plots, and generating insights through correlation analysis and grouped comparisons. Used Pandas for data manipulation, Matplotlib and Seaborn for visualization, and Jupyter Notebooks for documentation. Final deliverables included annotated visualizations and a summary of key findings with recommendations. This project built my confidence in using Python as a practical tool for data-driven decision-making beyond spreadsheets.",
    tags: ["Analytics", "Technical"],
    tools: ["Python", "Pandas", "Matplotlib"],
  },
  {
    title: "Personal Productivity & Systems Project",
    summary:
      "Designed a personal productivity system integrating task management, goal tracking, and knowledge management tools to optimize daily workflows and long-term planning.",
    details:
      "Designed and implemented a personal productivity and knowledge management system using Notion as the core platform. The system includes interconnected databases for task management (with priority scoring and deadline tracking), goal setting (quarterly OKRs broken into weekly actions), a knowledge wiki (organized by subject area for academic and self-learning notes), and a project tracker for managing multiple concurrent initiatives. Applied principles from systems thinking to create feedback loops between daily habits and long-term objectives. The system also integrates lightweight automation for recurring tasks and weekly reviews. This project reflects my interest in structured thinking, personal optimization, and building scalable frameworks for managing complexity.",
    tags: ["Systems", "Design", "Productivity"],
    tools: ["Notion", "Systems Thinking", "Automation"],
  },
];

export const experiences = [
  {
    role: "Marketing Director",
    organization: "University of Toronto Korean Students' Association (UTKSA)",
    period: "Sep 2024 — Present",
    description:
      "Leading brand strategy, social media content creation, and event marketing for one of the largest cultural clubs on campus. Managing a team of designers and content creators.",
  },
  {
    role: "Finance Case Competition Participant",
    organization: "University of Toronto Scarborough",
    period: "Jan 2025 — Mar 2025",
    description:
      "Competed in finance case competitions analyzing real-world business problems, developing financial models, and presenting strategic recommendations to panels of judges.",
  },
  {
    role: "Academic Projects — BBA Program",
    organization: "University of Toronto Scarborough — Management",
    period: "Sep 2023 — Present",
    description:
      "Completed projects in financial accounting, management, marketing strategy, and data analysis. Consistently applied analytical frameworks and delivered structured presentations.",
  },
  {
    role: "Self-Directed Projects & Learning",
    organization: "Independent",
    period: "Ongoing",
    description:
      "Building financial models, learning Python for data analysis, designing branding materials, and developing personal systems for productivity and knowledge management.",
  },
];

export const skillCategories = [
  {
    name: "Finance & Accounting",
    skills: [
      "Financial Analysis",
      "Valuation (DCF, Comps)",
      "Financial Modeling",
      "Ratio Analysis",
      "Case Analysis",
      "Audit Concepts",
    ],
  },
  {
    name: "Technical",
    skills: [
      "Excel (Advanced)",
      "Python",
      "SQL (Basic)",
      "Data Visualization",
      "Financial Databases",
    ],
  },
  {
    name: "Creative",
    skills: [
      "Canva",
      "Branding & Identity",
      "Presentation Design",
      "Social Media Strategy",
      "Visual Communication",
    ],
  },
  {
    name: "Tools & Soft Skills",
    skills: [
      "PowerPoint",
      "Notion",
      "Google Workspace",
      "Teamwork",
      "Communication",
      "Leadership",
    ],
  },
];
