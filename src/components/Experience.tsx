import { Briefcase, Calendar } from "lucide-react";
import { content } from "@/content";
import { twMerge } from "tailwind-merge";

export default function Experience() {
  const { experience } = content;

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className={twMerge("bg-card text-card-foreground rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl")}>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-2/5">
                  <h3 className="text-2xl font-semibold text-left mb-2">{exp.title}</h3>
                  <p className="text-primary flex items-center">
                    <Briefcase size={16} className="mr-2" />
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center mt-1">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </p>
                </div>
                <p className="md:w-1/2 mt-4 md:mt-0">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}