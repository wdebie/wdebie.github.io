import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Willem De Bie</h1>
      <p className="text-xl md:text-2xl mb-8 text-muted-foreground">Tech Hobbyist & Student at Thomas More University</p>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/wdebie" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/willem-de-bie-0703a8301/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
          <Linkedin size={24} />
        </a>
        <a href="mailto:debiewillem@outlook.com" className="text-foreground hover:text-primary">
          <Mail size={24} />
        </a>
      </div>
    </section>
  )
}