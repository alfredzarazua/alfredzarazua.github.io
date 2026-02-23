import { Icons } from "@/components/icons";
import { link } from "fs";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Alfredo Zarazua",
  initials: "AZ",
  url: "https://alfredzarazua.github.io",
  location: "San Luis Potosi, Mexico",
  locationLink: "https://www.google.com/maps/place/sanluispotosi",
  description:
    "Computer engineer focused on designing scalable systems that improve processes and empower teams.",
  summary:
    "Full Stack Software Developer specializing in C# and the .NET platform, with over 2 years of professional experience building and maintaining production systems. Experienced in taking ownership of complex features and infrastructure responsibilities, improving user experience, optimizing database performance, and delivering secure, reliable solutions through close collaboration with cross-functional teams.",
  avatarUrl: "/propic.jpg",
  skills: [
    "C#",
    "ASP.Net Core",    
    "Python",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "SQL Server",
    "Docker",
    "TSQL",
    "Kotlin",
    "Android Development",
    "Restful APIs",
    "Authentication & Authorization",
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
      title: "Software Developer",
      logoUrl: "/logo-blue.png",
      start: "Jan 2024",
      end: "Current",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Reis",
      badges: [],
      href: "https://www.reislogistica.com/",
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/logo-blue.png",
      start: "Oct 2023",
      end: "Jan 2024",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "UASLP",
      href: "https://www.uaslp.mx/",
      badges: [],
      location: "San Luis Potosi, Mexico",
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
      school: "Autonoma University of San Luis Potosi",
      href: "https://www.uaslp.mx/",
      degree: "Computer Engineering",
      logoUrl: "/uaslp-logo.png",
      start: "2018",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Barcode Scanning App for Android",
      href: "#",
      dates: "Jul 2025 - Sept 2025",
      active: true,
      description:
        "A lightweight yet robust Android application designed to streamline the validation of long serial numbers in warehouse environments. Built with a focus on security, accuracy, and seamless integration, the app empowers users to scan and verify data using either the device camera or Android based handhelds with laser scanners.",
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
      description: "Authentication and authorization platform based on OAuth 2.0 and OpenId connect, enabling centralized identity management for multiple client applications. The solution supports interactive web logins, API access control, secure logout flows, and multilingual user interfaces. The system separates authentication from application logic, allowing developers to integrate robust security features without handling sensitive user credentials directly.",
      technologies: ["C#", "ASP.Net Core", "OAuth 2.0 / OpenId Connect", "ASP.Net Core Identity", "Policy-based authorization", "IdentityServer", "SQL Server", "CBA & TBA", "DaisyUI", "Tailwind CSS"],
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
        "A custom-built web application designed to provide customers with secure, real-time access to inventory data. Seamlessly integrated with the Warehouse Management System (WMS), the portal enables users to view and download up-to-date inventory reports. Filtering tools included to allow for intuitive search and review of shipment and receipt orders, streamlining logistics visibility and decision-making. The [platform](https://reisbl.com) also supports multiple languages, ensuring accessibility for a diverse user base and enhancing international usability.",
      technologies: ["C#", "ASP.Net Core", "Entity Framework Core", "SQL Server", "Razor", "DaisyUI", "Tailwind CSS"],
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
      href: "/get-in-touch",
      dates: "Jan 2024 - Jan 2025",
      active: true,
      description:
        "A robust desktop application designed to streamline core warehouse operations. It enables users to register merchandise receipts and generate legally compliant documentation, as well as validate and track outbound shipments. Integrated to [Oracle Netsuite](https://netsuite.com) ERP. The system offers real-time inventory reporting with advanced filtering capabilities for complex queries, supporting fast data retrieval. Automated document generation and material tag printing. Support for multiple inventory transaction types (e.g., transfers, adjustments, returns). Optimized for performance and scalability in high-volume environments.",
      technologies: ["C#", ".NET", "Windows Forms", "SQL", "RDLC", "Async/Await Tasks"],
      image: "/wms.png",
      video: "",
      links: [],
    }

  ],
  academicProjects: [
    {
      title: "SESAT",
      dates: "Jan - Nov, 2023",      
      description:
        "A web application to manage and track the complete evaluation lifecycle for Master's and PhD candidates. Maintains an auditable history of thesis submissions, reviews, committee decisions, and attached documents. Features a shared calendar for scheduling defenses, supervision meetings, and deadlines with configurable notifications and role-based access for students, advisors, and committee members. Includes search, filtering, and export tools to support progress monitoring and institutional reporting.",
      icon: "public",
      technologies: ["NextJS", "NestJS", "PostgreSQL", "TypeScript", "Tailwind CSS"],
      image: "/img/sesat.png",
      links: [
        {
          type: "Source",
          href: "https://github.com/alfredzarazua/sesat",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Assembly Language Compiler",
      dates: "Jan - June, 2022",      
      description:
        "A two step compiler made with ANTLR tool. Designed for SIC/XE architecture. SIC uses a special assembly language with its own operation codes that hold the hex values needed to assemble and execute programs. This compiler allows you to edit your source code, analyze it lexically and syntactically, and finally translate it into binary, it also generates data such as addressing modes, program counter, instruction format, etc. Also includes a Linker and Loader, it is useful to emulate the execution of your program and see the memory usage",
      icon: "public",
      technologies: ["C#", ".NET Framework", "ANTLR", "Windows Forms", "NuGet"],
      image: "/img/compiler.png",
      links: [
        {
          type: "Source",
          href: "https://github.com/alfredzarazua/sesat",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Audio filtering tool",
      dates: "Aug - Dec, 2022",      
      description:
        "GUI tool to filter audio frequencies from a live recording. The tool includes: High-pass filter, Low-pass filter and Band-pass filter. Made in Python using Tkinter and Audio processing libraries.",
      icon: "public",
      image: "/img/audio_filter.png",
      technologies: ["Python", "Tkinter", "Waveio", "MathPlot"],
      links: [
        {
          type: "Source",
          href: "https://github.com/alfredzarazua/sesat",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Uno Game",
      dates: "Jan - June, 2023",      
      description:
        "The classic UNO game made with JAVA FX. This first version supports one room with up to four players online, you can use Discord to chat with your friends while play UNO. Just login or register to play. I collaborated with other students to develop this project.",
      icon: "public",
      image: "/img/uno-b.png",
      technologies: ["JAVA", "JavaFX", "MySQL", "Multi-threading", "Sockets"],
      links: [
        {
          type: "Source",
          href: "https://github.com/alfredzarazua/sesat",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Horse challenge",
      dates: "Jun - Aug, 2023",      
      description:
        "This game looks like chess, but you only have horses, the challenge is to fill the board before you run out of moves or your horse gets stuck in a place where it can't move",
      icon: "public",
      image: "horse-game.png",
      technologies: ["Kotlin", "Android Studio", "XML", "Android"],
      links: [
        {
          type: "Source",
          href: "https://github.com/alfredzarazua/sesat",
          icon: <Icons.github className="size-3" />,
        },
      ],
    }
  ],
} as const;
