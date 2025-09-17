import courseImg from "@/assets/courses/course-image.jpg";

export const courses = [
  {
    id: "web-development",
    title: "Web Development Mastery",
    desc: "Learn HTML, CSS, JavaScript, React & Next.js with real-world projects.",
    price: "$99",
    duration: "3 Months",
    level: "Beginner to Advanced",
    image: courseImg,
    details:
      "A complete guide to front-end and back-end development using HTML, CSS, JavaScript, React, and Next.js. Includes 10+ real-world projects.",
    objectives: [
      "Understand HTML, CSS, and JavaScript fundamentals",
      "Build responsive websites with modern design patterns",
      "Master React and Next.js for scalable apps",
      "Deploy and host projects on the cloud",
    ],
    modules: [
      {
        name: "Module 1: HTML & CSS Basics",
        lessons: [
          "Introduction to HTML",
          "HTML Forms & Tables",
          "CSS Selectors & Box Model",
          "Flexbox & Grid Layout",
        ],
      },
      {
        name: "Module 2: JavaScript Foundations",
        lessons: [
          "Variables & Data Types",
          "Functions & Events",
          "DOM Manipulation",
          "ES6+ Features",
        ],
      },
      {
        name: "Module 3: React & Next.js",
        lessons: [
          "React Components & Props",
          "State & Hooks",
          "Routing in Next.js",
          "Server-Side Rendering",
        ],
      },
      {
        name: "Module 4: Final Projects",
        lessons: ["Portfolio Website", "E-commerce Store", "Blog with CMS"],
      },
    ],
    requirements: [
      "Basic computer skills",
      "No prior coding experience required",
    ],
    outcomes: [
      "Be job-ready as a full-stack developer",
      "Create and deploy professional projects",
      "Understand real-world coding workflows",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Pro",
    desc: "Master SEO, Google Ads, Social Media Marketing & Analytics.",
    price: "$79",
    duration: "2 Months",
    level: "Beginner to Intermediate",
    image: courseImg,
    details:
      "Become an expert in SEO, Google Ads, Facebook Ads, and Analytics. Includes practical assignments and live campaigns.",
    objectives: [
      "Learn how search engines rank websites",
      "Run effective Google Ads and Facebook Ads",
      "Understand social media strategies",
      "Track performance with Google Analytics",
    ],
    modules: [
      {
        name: "Module 1: SEO",
        lessons: [
          "Keyword Research",
          "On-Page Optimization",
          "Off-Page SEO & Backlinks",
        ],
      },
      {
        name: "Module 2: Paid Advertising",
        lessons: [
          "Google Ads Campaign Setup",
          "Facebook & Instagram Ads",
          "Budget Optimization",
        ],
      },
      {
        name: "Module 3: Analytics",
        lessons: [
          "Google Analytics Setup",
          "Understanding Metrics",
          "Conversion Tracking",
        ],
      },
    ],
    requirements: [
      "Basic computer knowledge",
      "Familiarity with internet browsing",
    ],
    outcomes: [
      "Run and optimize ad campaigns",
      "Boost website rankings",
      "Analyze and improve marketing results",
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design Essentials",
    desc: "Build stunning designs with Photoshop, Illustrator, and Figma.",
    price: "$59",
    duration: "2 Months",
    level: "Beginner Friendly",
    image: courseImg,
    details:
      "Learn Photoshop, Illustrator, and Figma. Create real-world branding, social media, and UI/UX projects.",
    objectives: [
      "Master Photoshop & Illustrator tools",
      "Design social media posts & branding",
      "Create UI/UX layouts in Figma",
    ],
    modules: [
      {
        name: "Module 1: Photoshop Basics",
        lessons: [
          "Tools & Layers",
          "Photo Retouching",
          "Social Media Post Design",
        ],
      },
      {
        name: "Module 2: Illustrator",
        lessons: ["Vector Design", "Logos & Icons", "Print Design"],
      },
      {
        name: "Module 3: UI/UX with Figma",
        lessons: [
          "Wireframing & Prototyping",
          "UI Kits & Components",
          "Final Project: Mobile App UI",
        ],
      },
    ],
    requirements: ["A computer with Photoshop/Illustrator/Figma installed"],
    outcomes: [
      "Build branding & graphic design portfolios",
      "Design real-world projects",
      "Kickstart a freelance career",
    ],
  },
  {
    id: "basic-computer",
    title: "Basic Computer Course",
    desc: "Perfect for beginners: MS Office, typing, internet basics, and computer skills.",
    price: "$39",
    duration: "1 Month",
    level: "Beginner",
    image: courseImg,
    details:
      "Learn MS Word, Excel, PowerPoint, email, internet basics, and typing. Best for beginners starting with computers.",
    objectives: [
      "Get comfortable using a computer",
      "Learn MS Office tools",
      "Use the internet safely",
    ],
    modules: [
      {
        name: "Module 1: MS Office",
        lessons: [
          "MS Word Basics",
          "Excel Formulas",
          "PowerPoint Presentations",
        ],
      },
      {
        name: "Module 2: Computer Essentials",
        lessons: ["Typing Practice", "File Management", "Internet & Email"],
      },
    ],
    requirements: ["No prior computer knowledge needed"],
    outcomes: [
      "Confidently use MS Office",
      "Type and browse efficiently",
      "Prepare basic reports & presentations",
    ],
  },
];

// This is services data
export const servicesData = [
  {
    title: "Graphics Design",
    desc: "Creative designs to make your brand stand out.",
    href: "/services/graphics-design",
    packages: [
      { name: "Basic", price: "$99", features: ["Logo Design", "1 Revision"] },
      {
        name: "Standard",
        price: "$199",
        features: ["Logo + Banner", "3 Revisions"],
      },
      {
        name: "Premium",
        price: "$299",
        features: ["Full Branding Kit", "Unlimited Revisions"],
      },
    ],
  },
  {
    title: "Web Development",
    desc: "Modern, responsive, and scalable websites.",
    href: "/services/web-development",
    packages: [
      {
        name: "Basic",
        price: "$299",
        features: ["1 Page Website", "Basic Hosting"],
      },
      {
        name: "Standard",
        price: "$599",
        features: ["5 Pages", "Responsive Design", "SEO Setup"],
      },
      {
        name: "Premium",
        price: "$999",
        features: ["Ecommerce", "Custom Features", "1 Year Support"],
      },
    ],
  },
  {
    title: "Digital Marketing",
    desc: "Grow your audience with smart strategies.",
    href: "/services/digital-marketing",
    packages: [
      {
        name: "Basic",
        price: "$199",
        features: ["Social Media Setup", "1 Campaign"],
      },
      {
        name: "Standard",
        price: "$399",
        features: ["3 Campaigns", "Ad Optimization"],
      },
      {
        name: "Premium",
        price: "$699",
        features: ["Full Strategy", "Content + Ads", "Reports"],
      },
    ],
  },
  {
    title: "Business Consulting",
    desc: "Expert advice to scale your business.",
    href: "/services/business-consulting",
    packages: [
      { name: "Basic", price: "$149", features: ["1 Hour Consultation"] },
      {
        name: "Standard",
        price: "$399",
        features: ["3 Sessions", "Growth Report"],
      },
      {
        name: "Premium",
        price: "$799",
        features: ["Full Business Plan", "6 Sessions"],
      },
    ],
  },
  {
    title: "Ecommerce Store Management",
    desc: "Complete management for your online store.",
    href: "/services/ecommerce",
    packages: [
      { name: "Basic", price: "$249", features: ["10 Products Upload"] },
      {
        name: "Standard",
        price: "$499",
        features: ["50 Products", "Store Optimization"],
      },
      {
        name: "Premium",
        price: "$999",
        features: ["Unlimited Products", "Full Store Setup"],
      },
    ],
  },
  {
    title: "Content Marketing",
    desc: "Engaging content to boost your brand presence.",
    href: "/services/content-marketing",
    packages: [
      { name: "Basic", price: "$149", features: ["2 Blog Posts"] },
      {
        name: "Standard",
        price: "$299",
        features: ["5 Blog Posts", "Social Content"],
      },
      {
        name: "Premium",
        price: "$599",
        features: ["10 Blog Posts", "Video Content", "Full Strategy"],
      },
    ],
  },
  {
    title: "SEO",
    desc: "Rank higher and attract organic traffic.",
    href: "/services/seo",
    packages: [
      { name: "Basic", price: "$199", features: ["On-Page SEO"] },
      {
        name: "Standard",
        price: "$399",
        features: ["On + Off Page SEO", "5 Keywords"],
      },
      {
        name: "Premium",
        price: "$799",
        features: ["Full SEO Strategy", "20 Keywords", "Reports"],
      },
    ],
  },
];
