export interface ProgramItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  accentColor: string;
  bgTint: string;
  tags: string[];
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export interface ContributionPath {
  id: string;
  title: string;
  iconName: string;
  badge: string;
  description: string;
  beginnerFriendly: boolean;
  starterTasks: string[];
  resources: { name: string; url: string }[];
}

export const COMMUNITY_DATA = {
  name: "Everything Open Source",
  tagline: "The Future of Open Source Software",
  subTagline: "A Community United by Open Knowledge",
  vision: "Our vision is to create a future where Open Source is embraced and accessible by all...",
  aboutText: "Everything Open Source was founded to spotlight the diverse paths into open source and empower individuals, regardless of their background or technical experience, to get involved, make a difference, and grow.",
  codeAndNoCodeTitle: "Embracing code and no-code Open Source contributions",
  codeAndNoCodeDesc: "We believe that impactful contributions come in many forms. Open source isn't just about programming, it is about people. From design, documentation and translation to storytelling, community building, and mentorship, everyone has a role to play.",

  contact: {
    email: "hello@everythingopensource.org",
    canvaSite: "https://everythingopensource.my.canva.site/",
    canvaDisplayUrl: "everythingopensource.my.canva.site",
    socials: [
      {
        platform: "GitHub",
        handle: "EverythingOpenSource",
        url: "https://github.com/EverythingOpenSource",
        color: "#181717",
      },
      {
        platform: "X (Twitter)",
        handle: "@everything_oss",
        url: "https://x.com/everything_oss?s=21",
        color: "#000000",
      },
      {
        platform: "Instagram",
        handle: "@everything_opensource",
        url: "https://www.instagram.com/everything_opensource/",
        color: "#E1306C",
      },
      {
        platform: "LinkedIn",
        handle: "Everything Open Source",
        url: "https://www.linkedin.com/company/everything-open-source/?viewAsMember=true",
        color: "#0A66C2",
      },
    ],
  },

  pillars: [
    {
      id: "collaboration",
      name: "collaboration",
      tagline: "Co-creating without boundaries",
      description: "Open source thrives when developers, designers, writers, and organizers build in the open, learning together and lifting each other up across borders.",
      bulletPoints: [
        "Cross-functional sprint teams teaming up on real repos",
        "Peer-to-peer code reviews and feedback sessions",
        "Inclusive contribution etiquette for beginners",
      ],
    },
    {
      id: "creativity",
      name: "creativity",
      tagline: "Valuing non-traditional contributions",
      description: "Code is just one expression of innovation. We celebrate visual design, clear storytelling, UX research, localization, and accessible education as vital open-source crafts.",
      bulletPoints: [
        "Open-source UI/UX design challenges",
        "Technical storytelling and community blog posts",
        "Multilingual documentation and translation work",
      ],
    },
    {
      id: "community",
      name: "community",
      tagline: "A safe, empowering launchpad",
      description: "We are cultivating a warm ecosystem where newcomers find mentors, graduates land their first open-source contributions, and African builders gain global visibility.",
      bulletPoints: [
        "Weekly Twitter/X Spaces discussions with industry leaders",
        "Safe, welcoming onboarding sprints",
        "Direct access to open-source maintainers and peers",
      ],
    },
  ],

  programs: [
    {
      id: "explorers",
      title: "Open Source Explorers Program",
      shortDesc: "Empowering first-timers, especially recent graduates, to explore the world of open source and make their first contribution.",
      fullDesc: "A structured, beginner-first incubation pathway specifically designed to eliminate the intimidation factor of open source. Explorers are paired with experienced maintainers, receive hands-on Git & GitHub guidance, and complete their very first merged pull requests in a supportive environment.",
      image: "/assets/101441366733cc065db1c27a77a1c707.png",
      accentColor: "#FD5D3D",
      bgTint: "#FFF5F3",
      tags: ["Beginners", "Recent Graduates", "Mentorship", "First PR"],
      features: [
        "Hands-on Git & GitHub workflows from scratch",
        "Curated Good-First-Issues across top OSS projects",
        "Maintainer review assistance & constructive feedback",
        "Certificate of First Open Source Contribution",
      ],
      ctaText: "Join Explorers Cohort",
      ctaLink: "https://github.com/EverythingOpenSource/open-source-sprints",
    },
    {
      id: "resources",
      title: "Sharing Resources",
      shortDesc: "Through initiatives such as “Books for Techies”, “Open Source events to attend”, “X Spaces” we provide resources to support the journeys of our community.",
      fullDesc: "Knowledge sharing is at the heart of our mission. We provide curated event calendars, host live audio discussions with open source experts, and deliver physical and digital books to African learners through 'Books for Techies'.",
      image: "/assets/81965822f34ea5277b24d5fbb7bc4777.svg",
      accentColor: "#F6B737",
      bgTint: "#FFFDF0",
      tags: ["Books for Techies", "Events Calendar", "X Spaces", "Knowledge"],
      features: [
        "Books for Techies book distribution program",
        "Comprehensive Global & African OSS Event Tracker",
        "Bi-weekly X Spaces with global open source leaders",
        "Curated starter kits for code & no-code contributors",
      ],
      ctaText: "Explore Community Resources",
      ctaLink: "https://github.com/EverythingOpenSource/open-source-events",
    },
    {
      id: "moonshot",
      title: "Open Source Moonshot Program",
      shortDesc: "Supporting the development of projects and tools that solve societal problems, encouraging entrepreneurship.",
      fullDesc: "An acceleration track supporting open-source maintainers building high-impact civic, educational, agricultural, and healthcare tools that tackle real-world challenges across Africa and developing ecosystems.",
      image: "/assets/522c81cbffd577e70a3103765f08c946.png",
      accentColor: "#FD5D3D",
      bgTint: "#FFF5F3",
      tags: ["Social Impact", "Civic Tech", "Entrepreneurship", "Tools"],
      features: [
        "Architectural & security code audits for public tools",
        "Community testing & feedback sessions",
        "Grant application guidance & ecosystem sponsorships",
        "Open Source sustainability & licensing consulting",
      ],
      ctaText: "Pitch a Moonshot Project",
      ctaLink: "https://github.com/EverythingOpenSource",
    },
    {
      id: "documentation",
      title: "Documentation",
      shortDesc: "Documenting the work of African Open Source Contributors, Communities and Projects on Wikipedia.",
      fullDesc: "Preserving and amplifying the legacy of African builders in the global technological commons. We organize Wikipedia edit-a-thons and documentation sprints to ensure African open-source creators, organizations, and repositories receive proper archival recognition.",
      image: "/assets/92ffdfd48dd2977804fa02bf69457cc7.svg",
      accentColor: "#7EC0A4",
      bgTint: "#F2FAF6",
      tags: ["Wikipedia", "African Contributors", "History", "Open Wiki"],
      features: [
        "Wikipedia Edit-a-thons focused on African Tech Pioneers",
        "Standardized open source project documentation templates",
        "Cross-language translation of developer guides",
        "Oral history & maintainer spotlight interviews",
      ],
      ctaText: "Join Wikipedia Edit-a-thon",
      ctaLink: "https://github.com/EverythingOpenSource/open-source-communities-in-africa",
    },
  ],

  contributionPaths: [
    {
      id: "design",
      title: "Design & UX",
      iconName: "Palette",
      badge: "No-Code",
      description: "Create accessible icons, craft responsive user flows, design brand marks, and improve software visual usability.",
      beginnerFriendly: true,
      starterTasks: [
        "Redesigning inconsistent icons or buttons in OSS web apps",
        "Auditing contrast ratios for WCAG AA compliance",
        "Creating social media banner templates for project releases",
      ],
      resources: [
        { name: "Open Source Design Guide", url: "https://opensourcedesign.net" },
        { name: "EverythingOpenSource Repos", url: "https://github.com/EverythingOpenSource" },
      ],
    },
    {
      id: "documentation",
      title: "Documentation & Writing",
      iconName: "FileText",
      badge: "No-Code / Low-Code",
      description: "Write crystal-clear installation guides, fix broken documentation links, translate READMEs, and create step-by-step tutorials.",
      beginnerFriendly: true,
      starterTasks: [
        "Fixing typos, stale links, or ambiguous setup instructions",
        "Writing quickstart guides for first-time repo clones",
        "Translating developer guides into French, Swahili, Yoruba, or Hausa",
      ],
      resources: [
        { name: "The Good Docs Project", url: "https://thegooddocsproject.dev" },
        { name: "Write the Docs", url: "https://www.writethedocs.org" },
      ],
    },
    {
      id: "community",
      title: "Community & Events",
      iconName: "Users",
      badge: "People-First",
      description: "Help organize hackathons, coordinate Twitter/X spaces, onboard new members, and foster welcoming online discussions.",
      beginnerFriendly: true,
      starterTasks: [
        "Moderating community discussion forums and Discord/Slack channels",
        "Co-hosting Twitter/X audio spaces on open source topics",
        "Curating upcoming conferences for the open-source-events repository",
      ],
      resources: [
        { name: "WG Community Management Repo", url: "https://github.com/EverythingOpenSource/wg-community-management" },
        { name: "Open Source Events Repo", url: "https://github.com/EverythingOpenSource/open-source-events" },
      ],
    },
    {
      id: "code",
      title: "Code & Engineering",
      iconName: "Code2",
      badge: "Technical",
      description: "Resolve open bugs, write automated tests, optimize performance, and build requested features in public codebases.",
      beginnerFriendly: true,
      starterTasks: [
        "Finding repository issues tagged 'good first issue' or 'help wanted'",
        "Adding automated CI tests for uncovered edge cases",
        "Refactoring outdated dependencies or styling variables",
      ],
      resources: [
        { name: "Good First Issue Finder", url: "https://goodfirstissue.dev" },
        { name: "Everything Open Source Sprints", url: "https://github.com/EverythingOpenSource/open-source-sprints" },
      ],
    },
    {
      id: "wikipedia",
      title: "Wikipedia & Archiving",
      iconName: "BookOpen",
      badge: "Research & Writing",
      description: "Research and publish verified articles documenting African tech communities, tools, and pioneering maintainers.",
      beginnerFriendly: true,
      starterTasks: [
        "Gathering secondary sources for African open-source initiatives",
        "Improving Wikipedia stubs about African technology organizations",
        "Contributing citations and verifiable press links",
      ],
      resources: [
        { name: "African OSS Communities List", url: "https://github.com/EverythingOpenSource/open-source-communities-in-africa" },
        { name: "Wikipedia Notability Guidelines", url: "https://en.wikipedia.org/wiki/Wikipedia:Notability" },
      ],
    },
  ],

  stats: [
    { label: "Community Members", value: "850+" },
    { label: "Flagship Programs", value: "4" },
    { label: "Code & No-Code Paths", value: "6+" },
    { label: "African Countries Reached", value: "18+" },
  ],
};
