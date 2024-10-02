import { ExternalLink } from "lucide-react";
import { content } from "@/content";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Types
interface Project {
  title: string;
  summary: string;
  links?: Record<string, string>;
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

// Utility functions
const generateUrlSlug = (title: string): string => 
  title.toLowerCase().replace(/\s+/g, '-');

const findProjectByUrlSlug = (projects: Project[], urlSlug: string): Project | undefined =>
  projects.find(p => generateUrlSlug(p.title) === urlSlug);

// Sub-components
const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate('/', { state: { scrollToProjects: true } })}
      className="group flex items-center text-primary hover:text-primary/80 transition-colors"
    >
      <span className="mr-2 transition-transform group-hover:-translate-x-1">
        ←
      </span>
      Back to Projects
    </button>
  );
};

const ProjectHeader = ({ project }: { project: Project }) => (
  <div className="space-y-8 text-center">
    {project.imageUrl && (
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="h-64 object-cover rounded-lg mx-auto"
        loading="lazy"
      />
    )}
    <div>
      <p className="text-lg text-muted-foreground">{project.summary}</p>
      {project.links && (
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          {Object.entries(project.links).map(([text, url]) => (
            <a
              key={text}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline font-medium transition-colors"
            >
              {text}
              <ExternalLink size={16} className="ml-1" />
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);

const TechStack = ({ technologies }: { technologies: string[] }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Built With</h3>
    <div className="flex flex-wrap justify-center gap-3">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const ProjectDetails = ({ category }: { category: Project['category'] }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Project Details</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {Object.entries(category).map(([key, value]) => (
        <div
          key={key}
          className="p-4 bg-card rounded-lg border border-border shadow-sm"
        >
          <span className="block font-medium capitalize text-primary mb-1">
            {key}
          </span>
          <span className="text-muted-foreground">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

// Main component
export default function ProjectPage() {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projectName 
    ? findProjectByUrlSlug(content.projects as unknown as Project[], projectName) // Cast content.projects to unknown first
    : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Project Not Found</h2>
          <BackButton />
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10">
          <BackButton />
        </div>
        
        <article className="space-y-12">
          <h1 className="text-4xl font-bold text-center">
            {project.title}
          </h1>

          <div className="bg-card rounded-xl shadow-lg overflow-hidden p-8 space-y-12">
            <ProjectHeader project={project} />
            <TechStack technologies={project.builtWith} />
            <ProjectDetails category={project.category} />
          </div>
        </article>
      </div>
    </section>
  );
}