export const content = {
  hero: {
    name: "Willem De Bie",
    title: "Tech Enthusiast & Student at Thomas More University",
    github: "https://github.com/wdebie",
    linkedin: "https://www.linkedin.com/in/willem-de-bie-0703a8301/",
    email: "debiewillem@outlook.com"
  },
  experience: [
    {
      title: "Applied Computer Science (BASc)",
      company: "Thomas More University",
      period: "2022 - Present",
      description: "Learning all things computer science \u2013 from programming to network security \u2013 and hoping to become the next big thing in tech (or at least land a decent job)."
    },
    {
      title: "Python Programming Instructor",
      company: "KSOM Mol",
      period: "2021",
      description: "Taught Python to over 100 high schoolers. They learned the basics of coding, and no computers were harmed in the process."
    },
    {
      title: "Degree in IT Management",
      company: "Sint-Jan Berchmanscollege",
      period: "2016-2021",
      description: "Spent two years learning the ins and outs of IT management, including how to fix your WiFi without calling tech support."
    }
  ],
  projects: [
    {
      title: "Luminara",
      summary: "A fully-featured Discord Python bot with database integration and asynchronous programming. Developed with Python, MariaDB, Docker, and Poetry. Automated various tasks, enhanced database management skills, and improved deployment processes with Docker.",
      links: {
        "Invite to Discord": "https://discord.com/oauth2/authorize?client_id=1038050427272429588&permissions=8&scope=bot",
        "View Source Code": "https://github.com/wlinator/homelab"
      },
      builtWith: ["Python", "MariaDB", "Docker", "Poetry"],
      category: {
        subject: "Bot Development",
        period: "2022 - Present",
        who: "Willem De Bie",
        what: "A Python bot with database integration",
        where: "Thomas More University",
        why: "To automate various Discord tasks"
      },
      imageUrl: "/projects/luminara.png"
    },
    {
      title: "Homelab",
      summary: "A Raspberry Pi-based server hosting various services including a Discord bot and a wiki website. Utilized Debian, Docker, and Kubernetes. Self-hosted a Discord bot, created a wiki website using DokuWiki, and set up a self-hosted Git server.",
      links: {
        "View my selfhosted website": "https://git.wlinator.org/",
      },
      builtWith: ["Debian", "Docker", "Kubernetes"],
      category: {
        subject: "Personal homelab server",
        period: "2020 - Present",
        who: "Willem De Bie",
        what: "A Raspberry Pi-based server hosting various services (DietPi OS)",
        where: "My home",
        why: "To learn, experiment and self-host services"
      },
      imageUrl: "/projects/homelab.png"
    }
  ],
  skills: [
    {
      name: "Programming",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "Dart", "C#"]
    },
    {
      name: "Web & App",
      skills: ["Angular", "React", "React Native", "Flutter", "Next.js", "Node.js", "Express.js", "RESTful APIs", "HTML5", "CSS3"],
      note: "I built this website in React, TypeScript, TailwindCSS and Vite."
    },
    {
      name: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "SQLite"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "Docker", "Poetry", "AWS", "Heroku"]
    },
    {
      name: "Professional Skills",
      skills: ["Agile Methodologies", "Scrum", "UI/UX Design", "Responsive Web Design", "Test-Driven Development", "Project Management"]
    }
  ],
  resume: {
    description: "Download my resume to see my full educational background, work experience, and technical skills.",
    downloadLink: "/CV_DeBieWillem.pdf"
  },
  footer: {
    contact: {
      email: "debiewillem@outlook.com",
      phone: "+32 496 92 14 62"
    },
    location: "Balen, Belgium",
    copyright: "© 2024 Willem De Bie. All rights reserved."
  }
};