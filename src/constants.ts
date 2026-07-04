import {
  Database,
  Brain,
  BarChart,
  Code2,
  Cpu,
  Layout,
  Terminal,
  Table,
  PieChart,
  FileJson,
  Coffee,
  GitBranch,
  Search,
  BookOpen,
  GraduationCap
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Tools", href: "#tools" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS = [
  { name: "Python", level: 90, icon: "terminal" },
  { name: "Java", level: 45, icon: "coffee" },
  { name: "Data Visualization", level: 70, icon: "bar-chart" },
  { name: "C & C++", level: 70, icon: "code" },
  { name: "Machine Learning", level: 80, icon: "brain" },
  { name: "SQL & Databases", level: 70, icon: "database" },
];

export const TOOLS = [
  {
    category: "ML / Data Science",
    items: ["Pandas", "NumPy", "Scikit-learn", "Flask", "Keras", "TensorFlow"]
  },
  {
    category: "Visualization",
    items: ["Matplotlib", "Seaborn", "Tableau", "Power BI"]
  },
  {
    category: "Databases & Tools",
    items: ["MySQL", "Excel", "SQLite"]
  },
  {
    category: "Development",
    items: ["VS Code", "Jupyter NoteBook", "Git", "GitHub"]
  },
];

export const PROJECTS = [
  {
    title: "Diabetes Prediction",
    description: "ML model to predict diabetes using patient health records (PIMA Indian dataset). Implemented using Scikit-learn with rigorous EDA and feature engineering.",
    github: "https://github.com/saravana5632/Diabetes_Prediction",
    tags: ["Python", "ML", "Pandas", "Scikit-Learn"]
  },
  {
    title: "IPL Score Forecasting",
    description: "Predictive model for IPL match scores using historical player and team data. Features real-time score estimation based on match progress.",
    github: "https://github.com/saravana5632",
    tags: ["Python", "Machine Learning", "Data Analysis"]
  },
  {
    title: "Breast Cancer Prediction",
    description: "ML model to predict likelihood of breast cancer using hospital datasets. Achieved high accuracy with ensemble methods.",
    github: "https://github.com/saravana5632/Breast-Cancer-Prediction",
    tags: ["Python", "Scikit-Learn", "Medical AI"]
  },
  {
    title: "Employee Attrition Prediction & Dashboard",
    description: "Developed a machine learning model to predict employee attrition using historical HR data. Built an interactive dashboard to visualize key factors influencing employee turnover.",
    github: "https://github.com/saravana5632/Employee_Attrition_Prediction",
    demo: "https://employee-attrition-analysis-one.vercel.app/",
    tags: ["Machine Learning", "Data Analysis", "Dashboard"]
  },
  {
    title: "UniFlow ERP System",
    description: "A full-stack ERP web application to manage organizational workflows and data efficiently.",
    github: "https://github.com/saravana5632/UniFlow-ERP",
    demo: "https://uni-flow-erp.vercel.app/",
    tags: ["Full-Stack", "ERP", "React", "Node.js"]
  }
];

export const CERTIFICATIONS = [
  {
    title: "Data Processing and Visualisation",
    issuer: "Nasscom",
    date: "Mar 2026",
    credentialId: "82781947-85367-735576-4",
    link: "https://www.futureskillsprime.in//LX/ecertificate/verification?id=82781947-85367-735576-4",
    image: "images/nasscom_cert_1777100563603.png"
  },
  {
    title: "Problem Solving in Artificial Intelligence",
    issuer: "Udemy",
    date: "Mar 2026",
    credentialId: "UC-d60f417d-eb38-4fd2-9ba5-24e7efed0022",
    link: "https://www.udemy.com/certificate/UC-d60f417d-eb38-4fd2-9ba5-24e7efed0022",
    image: "images/udemy_cert_1777100582659.png"
  },
  {
    title: "Employability Skills",
    issuer: "Wadhwani Foundation",
    date: "Jun 2025",
    credentialId: "685fbc8edbb1c63612fbe69a",
    link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=685fbc8edbb1c63612fbe69a",
    image: "images/wadhwani_cert_1777100599415.png"
  },
  {
    title: "AI for Beginners",
    issuer: "HP LIFE",
    date: "Dec 2024",
    credentialId: "524fb972-ba1d-41f2-9518-a47d363f1972",
    link: "https://www.life-global.org/certificate/524fb972-ba1d-41f2-9518-a47d363f1972",
    image: "images/hp_life_cert_1777100616723.png"
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Great Learning",
    date: "Oct 2024",
    credentialId: "VJXMJUOR",
    link: "https://www.mygreatlearning.com/certificate/VJXMJUOR",
    image: "images/great_learning_cert_1777100630955.png"
  }
];

export const EDUCATION = [
  {
    institution: "Panimalar Engineering College",
    degree: "B.Tech (Computer Science and Business Systems)",
    period: "Sep 2024 – Sep 2028",
    details: "Focusing on AI, ML, and Data-driven business solutions. Current CGPA: 7.89"
  },
  {
    institution: "Sri Krishnammal Matriculation Higher Secondary School",
    degree: "HSC, Mathematics and Computer Science",
    period: "Jul 2022 – May 2024",
    details: "Top percentile in Mathematics and Computer Science."
  },
  {
    institution: "Joshua Model Matric Higher Secondary School",
    degree: "SSLC",
    period: "Jun 2022",
    details: "Completed with distinction."
  }
];

export const EXPERIENCE = [
  {
    role: "Data Analyst Intern",
    company: "Codec Technologies",
    duration: "Dec 2025",
    highlights: [
      "Cleaned and validated 300+ spreadsheets.",
      "Improved data accuracy by 25%.",
      "Created dashboards and analytical visualizations.",
      "Automated repetitive reporting workflows.",
      "Reduced manual effort and improved reporting consistency."
    ],
    techStack: ["Excel", "SQL", "Python", "Data Visualization", "Data Cleaning"],
    metrics: [
      { label: "Spreadsheets Processed", value: "300+" },
      { label: "Data Accuracy Improvement", value: "25%" },
      { label: "Reduction in Manual Effort", value: "15%" }
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "InternPe",
    duration: "Jul 2025 – Aug 2025",
    highlights: [
      "Built 5+ ML models including Diabetes Prediction, Car Price Estimation, IPL Forecasting, and Breast Cancer Detection.",
      "Performed EDA and feature engineering on datasets containing 10,000+ records.",
      "Improved model performance through hyperparameter tuning and cross-validation.",
      "Developed Flask APIs for demonstrating model deployment.",
      "Achieved accuracy improvements up to 82%."
    ],
    techStack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Flask", "Machine Learning"],
    metrics: [
      { label: "Models Built", value: "5+" },
      { label: "Records Analyzed", value: "10,000+" },
      { label: "Accuracy Improvement", value: "82%" }
    ]
  }
];
