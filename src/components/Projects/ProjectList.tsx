import { content } from "@/content";
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
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
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
