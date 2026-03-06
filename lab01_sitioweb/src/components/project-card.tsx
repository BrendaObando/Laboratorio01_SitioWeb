import { useState } from "react"
import { ExternalLink, Github, ChevronDown, ChevronUp, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Project } from "@/modules/portfolio/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-500",
        "hover:shadow-xl hover:-translate-y-2 hover:border-primary/50"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image / Video */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
        {project.videoUrl ? (
          <video className="absolute inset-0 h-full w-full object-cover" src={project.videoUrl} muted loop playsInline />
        ) : (
          <img className="absolute inset-0 h-full w-full object-cover" src={project.image} alt={project.title} />
        )}

        {/* Default gradient overlay when not hovered */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20",
            "flex items-center justify-center transition-opacity duration-300",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        >
          <span className="text-4xl font-bold text-primary/50">{project.title.charAt(0)}</span>
        </div>

        {/* Hover overlay with actions */}
        <div
          className={cn(
            "absolute inset-0 bg-background/90 backdrop-blur-sm",
            "flex items-center justify-center gap-4",
            "transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          {project.liveUrl && (
            <Button size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Ver Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button size="sm" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Código
              </a>
            </Button>
          )}
          {project.videoUrl && (
            <Button size="sm" variant="secondary" asChild>
              <a href={project.videoUrl} target="_blank" rel="noreferrer">
                <Play className="h-4 w-4 mr-1" />
                Video
              </a>
            </Button>
          )}
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>

        <Badge variant="secondary" className="mb-3">
          {project.role}
        </Badge>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

        {project.fullDescription && (
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              isExpanded ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
            )}
          >
            <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
              {project.fullDescription}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {project.fullDescription && (
          <Button
            variant="ghost"
            size="sm"
            className="w-full"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1" />
                Ver menos
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1" />
                Ver más detalles
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
