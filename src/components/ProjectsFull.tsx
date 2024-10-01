import { ExternalLink } from "lucide-react";
import { content } from "@/content";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface Project {
  title: string;
  summary: string;
  links?: { [key: string]: string };
  builtWith: string[];
  category: {
    subject: string;
    period: string;
    who: string;
    what: string;
    where: string;
    why: string;
  };
  imageUrl?: string;
}

export default function ProjectsFull() {
  const { projectName } = useParams<{ projectName: string }>();
  const navigate = useNavigate();
  // TODO: fix this without using 'as unknown as Project'
  const project = projectName ? content.projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === projectName) as unknown as Project : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  const handleBackClick = () => {
    navigate('/', { state: { scrollToProjects: true } });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={handleBackClick} className="mb-10 text-primary hover:underline flex items-center">
          <span className="mr-2">&larr;</span> Back to Projects
        </button>
        <h1 className="text-4xl font-bold mb-10 text-center">{project.title}</h1>
        <div className="bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden p-10">
          <div className="space-y-10 text-center">
            {project.imageUrl && (
              <img src={project.imageUrl} alt={project.title} className="h-64 object-cover rounded-lg mb-10 mx-auto max-w-full" style={{ width: 'auto' }} />
            )}
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">{project.summary}</p>
              {project.links && (
                <div className="mt-6">
                  {Object.entries(project.links).map(([text, url]) => (
                    <div key={text} className="mb-2 flex justify-center items-center">
                      <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center font-bold text-lg">
                        {text} <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Built With</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {project.builtWith.map((tech, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Project Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(project.category).map(([key, value]) => (
                  <div key={key} className="flex flex-col items-start p-4 bg-background rounded-lg shadow-md text-left">
                    <span className="font-semibold capitalize text-primary mb-2">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}