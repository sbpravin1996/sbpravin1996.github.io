export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Project = {
  name: string;
  period: string;
  description: string[];
  tags: string[];
  href?: string;
};

export type Hackathon = {
  name: string;
  date: string;
  description: string[];
  result?: string;
  tags: string[];
  href?: string;
};

export type Profile = {
  name: string;
  title: string;
  intro: string;
  location: string;
  links: Array<{
    label: string;
    href: string;
  }>;
  skills: Record<string, string[]>;
  experience: Experience[];
  projects: Project[];
  hackathons: Hackathon[];
};

export const profile: Profile = {
  name: "Pravin Senkottiayan Baskaran",
  title: "Data Engineer",
  intro:
    "I build reliable data pipelines, analytics workflows, and database-backed solutions that turn raw information into useful business insights.",
  location: "San Francisco Bay Area, California",
  links: [
    { label: "GitHub", href: "https://github.com/sbpravin1996" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-linkedin" },
    { label: "Email", href: "mailto:you@example.com" }
  ],
  skills: {
    "Programming & Scripting": ["Python", "SQL", "JavaScript", "Bash"],
    "Databases & Warehousing": [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Data Modeling",
      "ETL",
      "Data Warehousing"
    ],
    "Data Analytics & BI": [
      "Data Analysis",
      "Power BI",
      "Tableau",
      "Excel",
      "Reporting",
      "Dashboarding"
    ],
    "Machine Learning": ["scikit-learn", "Pandas", "NumPy", "Feature Engineering"],
    "Cloud & Tools": ["Git", "GitHub", "Docker", "Airflow", "AWS", "Vercel"],
    "AI Tools": ["Cursor", "Claude", "OpenAI", "Automation"]
  },
  experience: [
    {
      company: "Portfolio Focus",
      role: "Data Engineering",
      period: "Current",
      highlights: [
        "Design data workflows that move, clean, transform, and organize information for analysis.",
        "Use Python and SQL to prepare reliable datasets for reporting, dashboards, and decision-making.",
        "Focus on database design, ETL concepts, analytics engineering, and practical business insight."
      ]
    },
    {
      company: "Analytics Practice",
      role: "Data Analyst Skills",
      period: "Ongoing",
      highlights: [
        "Analyze datasets with SQL, Python, Pandas, and visualization tools.",
        "Build reports and dashboards with Power BI, Tableau, and spreadsheet workflows.",
        "Apply statistics and machine learning fundamentals using scikit-learn for exploratory projects."
      ]
    }
  ],
  projects: [
    {
      name: "PostgreSQL Data Pipeline",
      period: "Portfolio Project",
      description: [
        "Built a Python ETL workflow that extracts raw data, cleans inconsistent fields, and loads structured tables into PostgreSQL.",
        "Designed relational tables and SQL queries for repeatable reporting and downstream analysis."
      ],
      tags: ["Python", "PostgreSQL", "ETL", "SQL"]
    },
    {
      name: "Business Intelligence Dashboard",
      period: "Portfolio Project",
      description: [
        "Created an analytics dashboard to track key metrics, trends, and category-level performance.",
        "Prepared clean datasets and translated analysis into visuals that are easy for stakeholders to understand."
      ],
      tags: ["Power BI", "Tableau", "SQL", "Data Analysis"]
    },
    {
      name: "Machine Learning Analysis",
      period: "Portfolio Project",
      description: [
        "Explored a dataset with Pandas and NumPy, engineered useful features, and trained baseline models with scikit-learn.",
        "Compared model performance and documented insights from the analysis."
      ],
      tags: ["Python", "Pandas", "NumPy", "scikit-learn"]
    }
  ],
  hackathons: [
    {
      name: "Data Engineering Preparation",
      date: "Learning Track",
      description: [
        "Practicing SQL, Python data processing, ETL patterns, and database design through portfolio projects.",
        "Building a foundation for production-style data workflows and analytics engineering."
      ],
      result: "In Progress",
      tags: ["SQL", "Python", "ETL", "PostgreSQL"]
    },
    {
      name: "Analytics & Visualization",
      date: "Learning Track",
      description: [
        "Developing dashboarding and reporting skills with Power BI, Tableau, Excel, and SQL-based analysis."
      ],
      tags: ["Power BI", "Tableau", "Excel", "Reporting"]
    }
  ]
};
