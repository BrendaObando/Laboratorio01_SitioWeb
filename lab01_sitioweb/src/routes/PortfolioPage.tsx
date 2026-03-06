import { ProjectCard } from "@/components/project-card"
import { projects } from "@/modules/portfolio/data/projects"

export function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Portafolio</h1>
        <p className="text-muted-foreground">
          Proyectos desarrollados durante mi carrera universitaria en ingeniería de sistemas.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
