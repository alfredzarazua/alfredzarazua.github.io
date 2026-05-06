import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Alfredo Zarazua",
  initials: "AZ",
  url: "https://alfredzarazua.github.io",
  location: "San Luis Potosi, Mexico",
  locationLink: "https://www.google.com/maps/place/sanluispotosi",
  description:
    "Backend Software Engineer. I enjoy turning complex business workflows into reliable production systems.",
  summary:"With 2+ years of experience, I build production .NET applications, REST APIs, and SQL Server-backed systems. My work focuses on reliable transactional workflows, data consistency, performance optimization, and service-oriented architecture. Recently, I have also taken technical lead responsibilities, coordinating delivery across desktop, web, and API platforms.",
  avatarUrl: "/propic.jpg",
  skills: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "SQL Server",
    "Indexing",
    "Query Optimization",
    "REST APIs",
    "Distributed Systems",
    "Stored Procedures",
    "Concurrency Handling",
    "OAuth 2.0",
    "OpenID Connect",
    "JWT",
    "CI/CD",
    "GitHub Actions",
    "IIS",
    "Production Deployments",
    "Python",
    "Git",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },    
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alfredzarazua",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alfredo-zarazua-507434264/",
        icon: Icons.linkedin,

        navbar: true,
      },      
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Reis",
      href: "https://www.reislogistica.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer (Acting Technical Lead)",
      logoUrl: "/logo-blue.png",
      start: "Jan 2024",
      end: "Present",
      description:
        "Led architecture and technical decision-making for a multi-tenant Warehouse Management System (WMS), supporting multiple clients within a shared platform while maintaining data isolation and performance. Coordinated and mentored a team of 4 developers through code reviews, implementation guidance, and support for junior engineers. Owned end-to-end delivery across desktop Windows Forms, web, and API platforms, including requirements definition, development, production deployment, release cycles, and rollback strategies. Led the technical integration with Oracle NetSuite using the SuiteTalk REST API, enabling synchronization of customers, orders, and customer estimates used for monthly billing calculations based on WMS inventory data. Designed synchronization workflows, error handling, and data validation strategies to preserve consistency under real-world failure scenarios. Designed and implemented ASP.NET Core REST APIs for transactional inventory workflows, implemented stored procedures for atomic multi-step operations under concurrent usage, migrated legacy SQL-based architecture toward a service-oriented API model, deployed centralized OAuth 2.0 / OpenID Connect authentication, optimized high-volume SQL Server operations through indexing, query refactoring, and execution plan analysis, and developed an Android barcode scanning application for real-time inventory updates.",
    },
    {
      company: "Reis",
      badges: [],
      href: "https://www.reislogistica.com/",
      location: "Remote",
      title: "Programmer Analyst Intern",
      logoUrl: "/logo-blue.png",
      start: "Oct 2023",
      end: "Jan 2024",
      description:
        "Developed Python and SQL scripts to extract, transform, and process large datasets from legacy systems. Designed validation logic to detect and correct inconsistent data, ensuring integrity during migration processes. Collaborated with the engineering team to refine requirements and support feature implementation.",
    },
    {
      company: "UASLP",
      href: "https://www.uaslp.mx/",
      badges: [],
      location: "San Luis Potosí, Mexico",
      title: "Mandatory social service",
      logoUrl: "/uaslp-logo.png",
      start: "January 2023",
      end: "Aug 2023",
      description:
        "Managed on‑site computer systems, supported students, and wrote Linux shell scripts to automate deployment of instructional software to over 100 lab computers.",
    },
  ],
  education: [
    {
      school: "Universidad Autónoma de San Luis Potosí",
      href: "https://www.uaslp.mx/",
      degree: "Bachelor of Science in Computer Engineering",
      logoUrl: "/uaslp-logo.png",
      start: "Aug 2018",
      end: "Dec 2023",
    },
  ],
  projects: [
    {
      title: "Barcode Scanning App for Android",
      href: "#",
      dates: "Jul 2025 - Sept 2025",
      active: true,
      description:
        "Android barcode scanning app for warehouse workflows, supporting camera and handheld laser scanner input for faster serial number validation and inventory updates.",
      technologies: ["kotlin", "Android", "Camera API", "XML"],
      image: "/app-views.png",
      video: "",
      links: [],
    },
    {
      title: "Secure Authentication & Authorization Platform",
      href: "#",
      dates: "March 2025 - Jul 2025",
      active: true,
      description:
        "Centralized OAuth 2.0 / OpenID Connect platform for securing web applications and APIs with shared login, access control, logout flows, and multilingual UI support.",
      technologies: ["C#", "ASP.NET Core", "OAuth 2.0 / OpenID Connect", "ASP.NET Core Identity", "Policy-based authorization", "IdentityServer", "SQL Server", "DaisyUI", "Tailwind CSS"],
      image: "/security.svg",
      video: "",
      links: [],
    },
    {
      title: "Customer Inventory Portal",
      href: "https://reisbl.com",
      dates: "March 2024 - Jun 2024",
      active: true,
      description:
        "Customer-facing portal integrated with the WMS to provide secure inventory visibility, filtering, report downloads, and multilingual access for logistics users.",
      technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Razor", "DaisyUI", "Tailwind CSS"],
      image: "/website-view.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://reisbl.com",
          icon: <Icons.globe className="size-3" />,
        }
      ],
    },
    {
      title: "Warehouse Management System",
      href: "#",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Production WMS for receipts, outbound validation, inventory reporting, document generation, NetSuite synchronization, and high-volume transactional warehouse operations.",
      technologies: ["C#", ".NET", "ASP.NET Core", "Windows Forms", "SQL Server", "Stored Procedures", "Oracle NetSuite", "SuiteTalk REST API", "OAuth 2.0", "OpenID Connect", "IIS"],
      image: "/wms.png",
      video: "",
      links: [],
    }

  ],
  academicProjects: [
    {
      title: "SESAT - Academic Evaluation System",
      dates: "Jan - Nov, 2023",      
      description:
        "Full-stack academic evaluation platform for tracking thesis submissions, reviews, committee decisions, schedules, and role-based workflows.",
      icon: "public",
      technologies: ["TypeScript", "Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
      image: "/sesat.png",
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Assembly Language Compiler",
      dates: "Jan - June, 2022",      
      description:
        "Built a two-pass compiler for SIC/XE architecture using ANTLR, including parsing, error detection, and memory simulation.",
      icon: "public",
      technologies: ["C#", ".NET", "ANTLR", "Windows Forms"],
      image: "/compiler.png",
      links: [
        {
          type: "Source",
          href: "https://github.com/alfredzarazua/sicxe-compiler",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Audio filtering tool",
      dates: "Aug - Dec, 2022",      
      description:
        "Desktop GUI for recording audio and applying high-pass, low-pass, and band-pass filters using Python audio processing libraries.",
      icon: "public",
      image: "/audio_filter.png",
      technologies: ["Python", "Tkinter", "Waveio", "MathPlot"],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Uno Game",
      dates: "Jan - June, 2023",      
      description:
        "Online multiplayer UNO game built with JavaFX, sockets, threading, authentication, and MySQL persistence for up to four players.",
      icon: "public",
      image: "/uno-b.png",
      technologies: ["JAVA", "JavaFX", "MySQL", "Multi-threading", "Sockets"],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Horse challenge",
      dates: "Jun - Aug, 2023",      
      description:
        "Android puzzle game based on knight movement, challenging players to cover the board before running out of valid moves.",
      icon: "public",
      image: "/horse-game.jpg",
      technologies: ["Kotlin", "Android Studio", "XML", "Android"],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
    }
  ],
} as const;
