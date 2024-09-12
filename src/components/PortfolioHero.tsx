"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProjectCarousel from "./ProjectCarousel"

import NavbarCustom from "@/components/NavbarCustom"
export default function PortfolioHero() {
  const handleDownloadResume = () => {
    const resumeUrl = '/Temel Lodos Durak Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Temel Lodos Durak Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="container px-4 md:px-6 relative z-10 pt-16">
        <div className="flex flex-col items-center space-y-8 text-center mt-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter gradient-text ">
            Temel Lodos Durak
          </h1>
          <p className="mx-auto max-w-[700px] text-xl text-foreground">
            Full Stack Developer | Cloud Engineer | Automation Enthusiast
          </p>
          <p className="mx-auto max-w-[800px] text-lg text-foreground">
            Fall 2024 Software Engineering graduate with strong expertise in design, development, and testing. 
            Proficient in multiple programming languages and development frameworks, with hands-on experience 
            in full-stack development, database management, and cloud services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <Button asChild size="lg">
              <Link href="#projects">View Projects</Link>
            </Button> */}
            <Button size="lg" onClick={handleDownloadResume}>
              Download Resume
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://www.youtube.com/@top10countryrankings/shorts" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
            </Button>
          </div>
          <div className="container px-4 md:px-6">
            <ProjectCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
