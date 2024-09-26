import { CheckCircle } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Luminara",
      period: "2022 - Present",
      achievements: [
        "Developed a Python bot with strict typing",
        "Integrated MariaDB database",
        "Implemented Docker for development and deployment",
        "Utilized Poetry for dependency management"
      ],
      link: "https://github.com/wlinator/luminara"
    },
    {
      title: "Dementia Task Reminder",
      period: "2023 - 2024",
      achievements: [
        "Created a PHP Laravel web application",
        "Designed to assist dementia patients with task management",
        "Collaborated in a 7-person team",
        "Applied Agile and SCRUM methodologies"
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                <ul className="space-y-2 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={20} className="mr-2 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}