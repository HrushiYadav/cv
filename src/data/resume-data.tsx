import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hrushikesh Yadav",
  initials: "HY",
  location: "Bengaluru, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about: "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: `As a Full Stack Developer with over 3 years of experience, I excel in transforming ideas into scalable applications. My expertise spans across Javascript, React, Node.js, Typescript, and .NET, with a strong focus on optimizing performance and streamlining development processes. Currently, I work on enhancing systems with advanced .NET solutions and React projects, leveraging my skills in various frameworks to deliver high-quality results.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/136978914?v=4",
  contact: {
    email: "yadavhrushikesh65@gmail.com",
    tel: "+91-9370342994",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/HrushiYadav",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hrushikeshyadav/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/hrushi_tw",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "BHARTI VIDHYAPEETH",
      degree: "Master's Degree in Computer Application",
      start: "2021",
      end: "2023",
    },
    {
      school: "SHIVAJI UNIVERSITY",
      degree: "Bachelor's Degree in Computer Application",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "TE Connectivity",
      link: "https://www.te.com/",
      badges: ["Onsite"],
      title: "Application Developer",
      start: "11-2021",
      end: null,
      description: `Revamped a .NET project with advanced coding and performance optimizations, slashing build time by 5% and reducing application load time by an impressive 20%. Collaborated on a centralized access management API, replacing 20 logic apps with a single one, leading to significant cost savings. Established pipelines in Azure DevOps to automate the release process for four standalone applications in production environment. These pipelines facilitate the creation of build artifacts and their subsequent deployment to Azure Blob Storage. Additionally, upon successful deployment, the pipelines automatically generate tickets containing the links to the respective blobs, providing a streamlined approach for tracking and managing the releases. Led the development of a cutting-edge Umbraco CMS project using .NET Core. Successfully integrated blob storage, enhancing system scalability and performance. Actively engaged in React projects, troubleshooting bugs, and elevating user experiences. Implemented Redux for centralized state management, resulting in improved code quality and streamlined development.`,
    },
    {
      company: "SAFEHOUSE TECH",
      badges: ["Remote"],
      title: "Intern",
      start: "06-2021",
      end: "06-2021",
      description: `Engaged in cybersecurity concepts, including loophole identification and issue reporting, with opportunities to converse with Gurgaon CyberCell.`,
    },
    {
      company: "FreeLance Self Employed",
      badges: ["Remote"],
      title: "MERN Fullstack Developer",
      start: "10-2020",
      end: "08-2021",
      description: `Collaborated with the aviation industry to develop applications for order management and streamlining complex supply chains system. Additionally, I implemented .NET automation to extract data from shared Excel sheets, cleanse it, and seamlessly integrate it into databases, enhancing operational efficiency and enabling optimization processes.`,
    },
  ],
  skills: [
    "JavaScript / TypeScript",
    "Dotnet Core MVC",
    "React/Next.js/Angular",
    "Node.js",
    "GraphQL",
    "Azure",
    "SQL",
    "Umbraco",
    "ReactNative",
    "Express",
    "Websockets",
  ],
  projects: [
    {
      title: "Meduim Clone",
      techStack: [
        "Side Project",
        "React",
        "Prisma",
        "Typescript",
        "Hono.js",
        "PostgreSQL",
        "TailwindCSS",
      ],
      description: `Medium is a blogging website which allows users to perform CRUD operations on their blogs. Hono.js library of wrangler is used here for writing the backend server, which is hosted on Cloudflare Workers. Connection-pooling is used for maintaining PostgreSQL requests.`,
      link: {
        label: "Medium",
        href: "https://blog-website-seven-chi.vercel.app/signup",
      },
    },
    {
      title: "Realtime Chatapp",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "Node.js",
        "Websockets",
        "Express",
        "TailwindCSS",
      ],
      description: `Realtime Chat app showcases how Websockets work by letting users send messages seen by everyone. It includes an upvote button to highlight popular messages. It’s great for live classes, making it easy to handle questions from lots of people.`,
      link: {
        label: "Chat App",
        href: "https://github.com/HrushiYadav/realtime-chat-app",
      },
    },
    {
      title: "Evolve",
      techStack: ["Side Project", "React Native"],
      description: `Evolve is a tech news app that delivers real-time updates on startup funding, open-source projects, and hiring trends. It offers personalized news feeds and in-depth analyses to keep you informed. Stay ahead in the tech world with Evolve’s comprehensive and interactive updates.`,
      link: {
        label: "Evolve",
        href: "https://www.youtube.com/shorts/Dku4E3gR5U8",
      },
    },
  ],
} as const;
