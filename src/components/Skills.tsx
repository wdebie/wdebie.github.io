export function Skills() {
  const skills = [
    "Python", "Linux", "Docker", "PHP", "Kubernetes", "Git", "Laravel",
    "Vagrant", "MS Office", "Java", "C#", "React", "Angular", "Mobile Development",
    "Node.js", "TypeScript", "SQL", "NoSQL", "RESTful APIs", "GraphQL",
    "AWS", "Azure", "CI/CD", "Agile Methodologies", "Scrum", "Test-Driven Development",
    "Microservices", "Serverless Architecture", "DevOps", "System Administration",
    "Network Security", "Data Analysis", "Machine Learning", "IoT",
    "Bash Scripting", "PowerShell", "Virtualization", "Containerization",
    "Web Accessibility", "SEO", "Performance Optimization", "Responsive Design",
    "UX/UI Design", "Version Control", "Code Review", "Technical Writing"
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-muted text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}