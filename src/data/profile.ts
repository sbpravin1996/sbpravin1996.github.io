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

export const profile = {
  name: "Your Name",
  title: "Software Developer",
  intro:
    "I build thoughtful, accessible web products with a focus on clean interfaces, reliable systems, and practical user outcomes.",
  location: "Your City, Your Region",
  links: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
    { label: "Email", href: "mailto:you@example.com" }
  ],
  skills: {
    Frontend: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS"],
    Backend: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
    Tools: ["Git", "GitHub Actions", "Vercel", "Figma", "Agile"],
    "AI Tools": ["Cursor", "Claude", "OpenAI", "Automation"]
  },
  experience: [
    {
      company: "Current Company",
      role: "Software Engineer",
      period: "2025 - Present",
      highlights: [
        "Build and maintain user-facing product features across the stack.",
        "Collaborate with stakeholders to turn ambiguous requirements into shipped work.",
        "Improve reliability, accessibility, and maintainability across key workflows."
      ]
    },
    {
      company: "Previous Company",
      role: "Web Developer",
      period: "2022 - 2025",
      highlights: [
        "Led feature development from planning through release.",
        "Reduced recurring issues by improving tests, monitoring, and code quality.",
        "Partnered with design and product teams to refine user experiences."
      ]
    }
  ] satisfies Experience[],
  projects: [
    {
      name: "Featured Product Website",
      period: "2025 - 2026",
      description: [
        "Designed and developed a modern, responsive website for a community or business.",
        "Gathered requirements, iterated on content, and shipped a polished public presence."
      ],
      tags: ["Next.js", "TypeScript", "CSS"]
    },
    {
      name: "Data Dashboard",
      period: "2024 - 2025",
      description: [
        "Built an interactive dashboard that turns complex data into clear visual insights.",
        "Structured reusable components and data utilities for maintainable growth."
      ],
      tags: ["React", "Charts", "APIs"]
    },
    {
      name: "Automation Tool",
      period: "2024",
      description: [
        "Created a utility that removes manual work from a repetitive research or operations process.",
        "Improved turnaround time while keeping outputs easy to review and share."
      ],
      tags: ["Python", "Automation", "CLI"]
    }
  ] satisfies Project[],
  hackathons: [
    {
      name: "AI Product Hackathon",
      date: "March 2026",
      description: [
        "Created a prototype that combines AI workflows with a focused user experience.",
        "Built the core product flow, presentation, and demo in a short timeframe."
      ],
      result: "Finalist",
      tags: ["AI", "Next.js", "Automation"]
    },
    {
      name: "Developer Tools Sprint",
      date: "November 2025",
      description: [
        "Built a practical tool for improving developer productivity and workflow clarity."
      ],
      tags: ["TypeScript", "APIs", "UX"]
    }
  ] satisfies Hackathon[]
};
