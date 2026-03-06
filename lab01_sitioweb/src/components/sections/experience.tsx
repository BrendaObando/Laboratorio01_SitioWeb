import { Briefcase, Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experienceData = [
  {
    company: "Empresa Tech S.A.",
    position: "Práctica Profesional - Desarrollador Web",
    period: "Enero 2025 - Presente",
    description:
      "Desarrollo de aplicaciones web utilizando React y Node.js. Participación en proyectos de mejora de sistemas internos y mantenimiento de bases de datos.",
    technologies: ["React", "Node.js", "PostgreSQL", "Git"],
    type: "Práctica Profesional",
  },
  {
    company: "Universidad Técnica Nacional",
    position: "Asistente de Laboratorio",
    period: "Agosto 2024 - Diciembre 2024",
    description:
      "Apoyo en cursos de programación web, tutoría a estudiantes y mantenimiento de equipos del laboratorio de computación.",
    technologies: ["HTML", "CSS", "JavaScript", "Python"],
    type: "Asistencia",
  },
  {
    company: "Proyecto Universitario",
    position: "Desarrollador Full Stack",
    period: "Marzo 2024 - Julio 2024",
    description:
      "Desarrollo de un sistema de gestión de inventario para una pequeña empresa local como parte del curso de Ingeniería de Software.",
    technologies: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
    type: "Proyecto Académico",
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experiencia Laboral</h2>
          <p className="text-muted-foreground">
            Mi trayectoria profesional y proyectos realizados en empresas y entornos académicos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

            {experienceData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {item.type}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-1">{item.position}</h3>
                      <p className="text-primary font-medium mb-2 flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {item.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {item.period}
                      </p>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
