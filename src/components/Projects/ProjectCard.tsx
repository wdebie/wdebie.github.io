import { Link } from 'react-router-dom';

export interface Project {
  title: string;
  category: {
    period: string;
  };
  summary: string;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
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
  );
}