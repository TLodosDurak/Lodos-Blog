import ProjectCard from './ProjectCard';
import projects from '@/data/projects.json';

export default function ProjectGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}