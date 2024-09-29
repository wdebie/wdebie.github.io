import { useState } from 'react'
import { ChevronDown, ChevronUp, Code, Globe, Database, Wrench, Briefcase } from 'lucide-react'
import { content } from "@/content"

interface IconMap {
  [key: string]: React.ElementType;
}

const iconMap: IconMap = {
  "Programming": Code,
  "Web & App": Globe,
  "Databases": Database,
  "Tools & Platforms": Wrench,
  "Professional Skills": Briefcase
}

interface SkillCategoryProps {
  category: {
    name: string;
    skills: string[];
    note?: string;
  };
}

export default function Skills() {
  const { skills } = content

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = iconMap[category.name] || Code

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full p-4 bg-card text-card-foreground rounded-lg shadow-md hover:bg-muted transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <Icon size={20} />
          <h3 className="text-lg font-semibold ml-2">{category.name}</h3>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-background rounded-lg shadow-inner">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {category.skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <Icon size={16} className="mr-2" />
                {skill}
              </li>
            ))}
          </ul>
          {category.note && (
            <p className="mt-4 text-sm text-muted-foreground">
              {category.note}
            </p>
          )}
        </div>
      )}
    </div>
  )
}