import { CheckCircle } from "lucide-react";
import { content } from "@/content";
import { useParams } from 'react-router-dom';

interface Project {
  title: string;
  period: string;
  achievements: string[];
  link?: string;
  publishedOn: string;
  readingTime: string;
  builtWith: string[];
  category: {
    subject: string;
    who: string;
    what: string;
    where: string;
    why: string;
  };
  realizations: string[];
  whatIveLearned: string[];
}

export default function ProjectsFull() {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projectName ? content.projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === projectName) as Project : null;

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <section id="projects-full" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">{project.title}</h1>
        <div className="bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <table className="w-full mb-6">
                <tbody>
                  <tr>
                    <td className="font-semibold pr-4">Period:</td>
                    <td>{project.period}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pr-4">Published On:</td>
                    <td>{project.publishedOn}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold pr-4">Reading Time:</td>
                    <td>{project.readingTime}</td>
                  </tr>
                </tbody>
              </table>
              <h3 className="text-xl font-semibold mb-2">Built With</h3>
              <ul className="list-disc list-inside mb-6">
                {project.builtWith.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  View Project
                </a>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
              <ul className="space-y-2 mb-6">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="mr-2 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Category</h3>
                <table className="w-full mb-6">
                  <tbody>
                    {Object.entries(project.category).map(([key, value]) => (
                      <tr key={key}>
                        <td className="font-semibold pr-4 capitalize">{key}:</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Realizations</h3>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  {project.realizations.map((realization, index) => (
                    <li key={index}>{realization}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold mb-2">What I've Learned</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  {project.whatIveLearned.map((learned, index) => (
                    <li key={index}>{learned}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}