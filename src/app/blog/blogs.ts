const blogs = [
  {
    id: 1,
    slug: "mastering-angular-ui",
    title: "Mastering Angular UI Development",
    desc: "Best practices, tips, and tricks for building scalable Angular user interfaces.",
    date: "Aug 2025",
    readTime: "6 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-angular.webp",
    tags: ["Angular", "TypeScript", "UI/UX"],
    intro: "Best practices, tips, and tricks for building scalable Angular user interfaces.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Mastering Angular UI Development Overview",
        text: "Best practices, tips, and tricks for building scalable Angular user interfaces."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Mastering Angular UI Development");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 2,
    slug: "nextjs-tailwind-portfolio",
    title: "Building a Portfolio with Next.js & Tailwind CSS",
    desc: "How I built my personal portfolio with Next.js, TypeScript, and Tailwind CSS.",
    date: "Jul 2025",
    readTime: "7 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-nextjs.webp",
    tags: ["Next.js", "Portfolio"],
    intro: "How I built my personal portfolio with Next.js, TypeScript, and Tailwind CSS.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Building a Portfolio with Next.js & Tailwind CSS Overview",
        text: "How I built my personal portfolio with Next.js, TypeScript, and Tailwind CSS."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Building a Portfolio with Next.js & Tailwind CSS");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 3,
    slug: "responsive-design-secrets",
    title: "Responsive Design Secrets for Modern Web Apps",
    desc: "Learn key strategies to make your web apps look great on all devices.",
    date: "Jun 2025",
    readTime: "8 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-responsive.webp",
    tags: ["CSS", "Responsive Design"],
    intro: "Learn key strategies to make your web apps look great on all devices.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Responsive Design Secrets for Modern Web Apps Overview",
        text: "Learn key strategies to make your web apps look great on all devices."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Responsive Design Secrets for Modern Web Apps");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 4,
    slug: "figma-to-code",
    title: "From Figma to Code: A Developer’s Workflow",
    desc: "How to translate design prototypes into pixel-perfect code efficiently.",
    date: "May 2025",
    readTime: "9 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-figma.webp",
    tags: ["Figma", "UI Development"],
    intro: "How to translate design prototypes into pixel-perfect code efficiently.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "From Figma to Code: A Developer’s Workflow Overview",
        text: "How to translate design prototypes into pixel-perfect code efficiently."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from From Figma to Code: A Developer’s Workflow");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 5,
    slug: "state-management-angular",
    title: "State Management in Angular – RxJS & NgRx",
    desc: "Exploring state management patterns in Angular with RxJS and NgRx.",
    date: "Apr 2025",
    readTime: "5 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-state.webp",
    tags: ["Angular", "RxJS", "NgRx"],
    intro: "Exploring state management patterns in Angular with RxJS and NgRx.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "State Management in Angular – RxJS & NgRx Overview",
        text: "Exploring state management patterns in Angular with RxJS and NgRx."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from State Management in Angular – RxJS & NgRx");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 6,
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Frontend Developers",
    desc: "Practical tips to write safer and cleaner TypeScript code.",
    date: "Mar 2025",
    readTime: "6 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-ts.webp",
    tags: ["TypeScript", "Best Practices"],
    intro: "Practical tips to write safer and cleaner TypeScript code.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "TypeScript Best Practices for Frontend Developers Overview",
        text: "Practical tips to write safer and cleaner TypeScript code."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from TypeScript Best Practices for Frontend Developers");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 7,
    slug: "solid-principles-js",
    title: "Why SOLID Matters in JavaScript & TypeScript",
    desc: "Understanding SOLID principles with frontend code examples.",
    date: "Feb 2025",
    readTime: "7 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-solid.webp",
    tags: ["Clean Code", "SOLID"],
    intro: "Understanding SOLID principles with frontend code examples.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Why SOLID Matters in JavaScript & TypeScript Overview",
        text: "Understanding SOLID principles with frontend code examples."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Why SOLID Matters in JavaScript & TypeScript");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 8,
    slug: "ui-ux-trends-2025",
    title: "Top UI/UX Design Trends in 2025",
    desc: "What’s hot in UI/UX design this year? Minimalism, neumorphism, and accessibility.",
    date: "Jan 2025",
    readTime: "8 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-uiux.webp",
    tags: ["UI/UX", "Design Trends"],
    intro: "What’s hot in UI/UX design this year? Minimalism, neumorphism, and accessibility.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Top UI/UX Design Trends in 2025 Overview",
        text: "What’s hot in UI/UX design this year? Minimalism, neumorphism, and accessibility."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Top UI/UX Design Trends in 2025");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 9,
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox – When to Use Which?",
    desc: "A practical comparison of CSS Grid and Flexbox for layouts.",
    date: "Dec 2024",
    readTime: "9 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-css.webp",
    tags: ["CSS", "Layouts"],
    intro: "A practical comparison of CSS Grid and Flexbox for layouts.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "CSS Grid vs Flexbox – When to Use Which? Overview",
        text: "A practical comparison of CSS Grid and Flexbox for layouts."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from CSS Grid vs Flexbox – When to Use Which?");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 10,
    slug: "performance-optimization-web",
    title: "Performance Optimization for Web Apps",
    desc: "How to make your frontend apps load faster and run smoother.",
    date: "Nov 2024",
    readTime: "5 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-performance.webp",
    tags: ["Performance", "Frontend"],
    intro: "How to make your frontend apps load faster and run smoother.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Performance Optimization for Web Apps Overview",
        text: "How to make your frontend apps load faster and run smoother."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Performance Optimization for Web Apps");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 11,
    slug: "dark-mode-implementation",
    title: "How to Implement Dark Mode in Web Apps",
    desc: "Adding dark mode support with CSS variables and JavaScript.",
    date: "Oct 2024",
    readTime: "6 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-darkmode.webp",
    tags: ["CSS", "Dark Mode"],
    intro: "Adding dark mode support with CSS variables and JavaScript.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "How to Implement Dark Mode in Web Apps Overview",
        text: "Adding dark mode support with CSS variables and JavaScript."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from How to Implement Dark Mode in Web Apps");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 12,
    slug: "deploy-nextjs-vercel",
    title: "Deploying Next.js Apps on Vercel",
    desc: "Step-by-step guide to deploy a Next.js project on Vercel.",
    date: "Sep 2024",
    readTime: "7 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-vercel.webp",
    tags: ["Next.js", "Deployment"],
    intro: "Step-by-step guide to deploy a Next.js project on Vercel.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Deploying Next.js Apps on Vercel Overview",
        text: "Step-by-step guide to deploy a Next.js project on Vercel."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Deploying Next.js Apps on Vercel");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 13,
    slug: "testing-angular-apps",
    title: "Unit Testing Angular Applications",
    desc: "How to write tests in Angular using Jasmine & Karma.",
    date: "Aug 2024",
    readTime: "8 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-testing.webp",
    tags: ["Angular", "Testing"],
    intro: "How to write tests in Angular using Jasmine & Karma.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Unit Testing Angular Applications Overview",
        text: "How to write tests in Angular using Jasmine & Karma."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Unit Testing Angular Applications");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 14,
    slug: "react-vs-angular",
    title: "React vs Angular – A Developer’s Perspective",
    desc: "Comparing React and Angular in real-world use cases.",
    date: "Jul 2024",
    readTime: "9 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-react-vs-angular.webp",
    tags: ["React", "Angular"],
    intro: "Comparing React and Angular in real-world use cases.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "React vs Angular – A Developer’s Perspective Overview",
        text: "Comparing React and Angular in real-world use cases."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from React vs Angular – A Developer’s Perspective");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 15,
    slug: "git-tips-developers",
    title: "Essential Git Tips for Frontend Developers",
    desc: "Handy Git commands and workflows for smoother development.",
    date: "Jun 2024",
    readTime: "5 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-git.webp",
    tags: ["Git", "Version Control"],
    intro: "Handy Git commands and workflows for smoother development.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Essential Git Tips for Frontend Developers Overview",
        text: "Handy Git commands and workflows for smoother development."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Essential Git Tips for Frontend Developers");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 16,
    slug: "seo-for-developers",
    title: "SEO Basics Every Developer Should Know",
    desc: "Improve visibility of your web apps with SEO best practices.",
    date: "May 2024",
    readTime: "6 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-seo.webp",
    tags: ["SEO", "Web Development"],
    intro: "Improve visibility of your web apps with SEO best practices.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "SEO Basics Every Developer Should Know Overview",
        text: "Improve visibility of your web apps with SEO best practices."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from SEO Basics Every Developer Should Know");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 17,
    slug: "accessibility-web",
    title: "Web Accessibility – A Developer’s Guide",
    desc: "Building inclusive apps with ARIA, semantic HTML, and contrast checks.",
    date: "Apr 2024",
    readTime: "7 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-a11y.webp",
    tags: ["Accessibility", "Frontend"],
    intro: "Building inclusive apps with ARIA, semantic HTML, and contrast checks.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Web Accessibility – A Developer’s Guide Overview",
        text: "Building inclusive apps with ARIA, semantic HTML, and contrast checks."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Web Accessibility – A Developer’s Guide");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 18,
    slug: "component-design-patterns",
    title: "Component Design Patterns in Frontend",
    desc: "Smart patterns for reusable and maintainable UI components.",
    date: "Mar 2024",
    readTime: "8 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-patterns.webp",
    tags: ["Frontend", "Design Patterns"],
    intro: "Smart patterns for reusable and maintainable UI components.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Component Design Patterns in Frontend Overview",
        text: "Smart patterns for reusable and maintainable UI components."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Component Design Patterns in Frontend");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 19,
    slug: "career-tips-frontend",
    title: "Career Tips for Frontend Developers",
    desc: "How to grow your frontend career and stay relevant in 2025.",
    date: "Feb 2024",
    readTime: "9 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-career.webp",
    tags: ["Career", "Frontend"],
    intro: "How to grow your frontend career and stay relevant in 2025.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Career Tips for Frontend Developers Overview",
        text: "How to grow your frontend career and stay relevant in 2025."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Career Tips for Frontend Developers");`,
        codeLang: "ts"
      }
    ]
  },
  {
    id: 20,
    slug: "freelancing-tips-devs",
    title: "Freelancing Tips for Developers",
    desc: "How I managed freelance projects and clients effectively.",
    date: "Jan 2024",
    readTime: "5 min read",
    author: {
      name: "Narendra Pandagre",
      role: "Frontend Engineer",
      avatar: "/avatar.png",
    },
    image: "/blogs/blog-freelance.webp",
    tags: ["Freelance", "Developer Life"],
    intro: "How I managed freelance projects and clients effectively.",
    introBox: {
      prerequisites: [
        "Basic knowledge of frontend development",
        "Familiarity with modern JavaScript frameworks"
      ],
      whatYouWillLearn: [
        "Core concepts of the topic",
        "Best practices and patterns",
        "Real-world code examples",
        "How to apply in projects"
      ],
    },
    contentSections: [
      {
        heading: "Freelancing Tips for Developers Overview",
        text: "How I managed freelance projects and clients effectively."
      },
      {
        heading: "Key Concepts",
        text: "Detailed explanation of important concepts with examples."
      },
      {
        heading: "Code Example",
        text: "Here’s a sample code to illustrate:",
        code: `console.log("Example from Freelancing Tips for Developers");`,
        codeLang: "ts"
      }
    ]
  },
];

export default blogs;
