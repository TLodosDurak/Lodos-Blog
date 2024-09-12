import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={600}
        className="rounded-md mb-6"
      />
      <p className="text-lg mb-4">{project.description}</p>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
        <ul className="list-disc list-inside">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <Button asChild>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      </Button>
    </div>
  );
}