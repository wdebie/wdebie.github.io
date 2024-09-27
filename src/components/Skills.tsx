import { useState } from 'react'
import { ChevronDown, ChevronUp, Code, Globe, Database, Wrench, Briefcase } from 'lucide-react'

type Skill = {
  name: string
  icon: React.ReactNode
}

type SkillCategory = {
  name: string
  icon: React.ReactNode
  skills: Skill[]
  note?: React.ReactNode
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    icon: <Code size={20} />,
    skills: [
    { name: "Python", icon: <Code size={16} /> },
      { name: "JavaScript", icon: <Code size={16} /> },
      { name: "TypeScript", icon: <Code size={16} /> },
      { name: "Java", icon: <Code size={16} /> },
      { name: "Dart", icon: <Code size={16} /> },
      { name: "C#", icon: <Code size={16} /> },
    ]
  },
  {
    name: "Web & App",
    icon: <Globe size={20} />,
    skills: [
      { name: "Angular", icon: <Globe size={16} /> },
      { name: "React", icon: <Globe size={16} /> },
      { name: "React Native", icon: <Globe size={16} /> },
      { name: "Flutter", icon: <Globe size={16} /> },
      { name: "Next.js", icon: <Globe size={16} /> },
      { name: "Node.js", icon: <Globe size={16} /> },
      { name: "Express.js", icon: <Globe size={16} /> },
      { name: "RESTful APIs", icon: <Globe size={16} /> },
      { name: "HTML5", icon: <Globe size={16} /> },
      { name: "CSS3", icon: <Globe size={16} /> },
    ],
    note: (
      <p className="mt-4 text-sm text-muted-foreground">
        I built this website in React, you can view the source <a href="https://github.com/wdebie/wdebie.github.io/tree/main" className="text-primary hover:underline">here</a>.
      </p>
    )
  },
  {
    name: "Databases",
    icon: <Database size={20} />,
    skills: [
      { name: "MongoDB", icon: <Database size={16} /> },
      { name: "PostgreSQL", icon: <Database size={16} /> },
      { name: "MySQL", icon: <Database size={16} /> },
      { name: "MongoDB", icon: <Database size={16} /> },
      { name: "Firebase", icon: <Database size={16} /> },
      { name: "Supabase", icon: <Database size={16} /> },
      { name: "SQLite", icon: <Database size={16} /> },
    ]
  },
  {
    name: "Tools & Platforms",
    icon: <Wrench size={20} />,
    skills: [
      { name: "Git", icon: <Wrench size={16} /> },
      { name: "Docker", icon: <Wrench size={16} /> },
      { name: "Poetry", icon: <Wrench size={16} /> },
      { name: "AWS", icon: <Wrench size={16} /> },
      { name: "Heroku", icon: <Wrench size={16} /> },
    ]
  },
  {
    name: "Professional Skills",
    icon: <Briefcase size={20} />,
    skills: [
      { name: "Agile Methodologies", icon: <Briefcase size={16} /> },
      { name: "Scrum", icon: <Briefcase size={16} /> },
      { name: "UI/UX Design", icon: <Briefcase size={16} /> },
      { name: "Responsive Web Design", icon: <Briefcase size={16} /> },
      { name: "Test-Driven Development", icon: <Briefcase size={16} /> },
      { name: "Project Management", icon: <Briefcase size={16} /> },
    ]
  }
]

function SkillCategory({ category }: { category: SkillCategory }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full p-4 bg-card text-card-foreground rounded-lg shadow-md hover:bg-muted transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {category.icon}
          <h3 className="text-lg font-semibold ml-2">{category.name}</h3>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-background rounded-lg shadow-inner">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {category.skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
          {category.note}
        </div>
      )}
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="max-w-3xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}