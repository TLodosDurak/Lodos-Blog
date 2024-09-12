import { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import projects from '@/data/projects.json';

export default function ProjectCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = useCallback(() => {
    if (api) {
      api.scrollNext()
    }
  }, [api]);

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrentIndex(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextProject();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [nextProject]);

  const project = projects[currentIndex];

  return (
    <Carousel className="w-full max-w-3xl mx-auto" opts={{
        align: "start",
        loop: true,
      }}
      setApi={setApi}
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <Card className="bg-white/10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-white/80">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md" />
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}