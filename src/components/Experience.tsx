import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Applied Computer Science BASc Student",
      company: "Thomas More University",
      period: "2022 - Present",
      description: "Pursuing a Bachelor of Applied Science in Computer Science, focusing on cutting-edge technologies and best practices in software development. The program covers a wide range of topics including programming, software engineering, database management, and network security."
    },
    {
      title: "Python Programming Instructor",
      company: "Sint-Jan Berchmanscollege",
      period: "2021",
      description: "Taught Python programming to over 50 high-school students during the academic year, helping them understand the fundamentals of programming."
    },
    {
      title: "CoderDojo Volunteer",
      company: "CoderDojo Belgium",
      period: "2016",
      description: "Volunteered at CoderDojo Belgium, helping young people learn to code and fostering their interest in technology and computer science."
    }
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card text-card-foreground rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-primary flex items-center mt-2">
                    <Briefcase size={16} className="mr-2" />
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center mt-1">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </p>
                </div>
                <p className="md:w-2/3 mt-4 md:mt-0">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}