import { Github, Linkedin, Mail } from "lucide-react";
import { content } from "@/lib/content";

export function Hero() {
  const { hero } = content;

  return (
    <section id="hero" className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{hero.name}</h1>
      <p className="text-xl md:text-2xl mb-8 text-muted-foreground">{hero.title}</p>
      <div className="flex justify-center space-x-4">
        <a href={hero.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
          <Github size={24} />
        </a>
        <a href={hero.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
          <Linkedin size={24} />
        </a>
        <a href={`mailto:${hero.email}`} className="text-foreground hover:text-primary">
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
}