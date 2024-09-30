import { content } from "@/content";
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Projects() {
  const { projects } = content;
  const location = useLocation();
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (location.state && location.state.scrollToProjects && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <section ref={projectsRef} id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              {project.imageUrl && (
                <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${project.imageUrl})` }}></div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.category.period}</p>
                <p className="text-muted-foreground mb-6">{project.summary}</p>
                <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}