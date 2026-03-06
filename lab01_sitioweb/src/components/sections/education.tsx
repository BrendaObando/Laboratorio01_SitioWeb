import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const educationData = [
  {
    institution: "Universidad Nacional de Costa Rica",
    degree: "Diplomado en Programación de Aplicaciones Informáticas",
    period: "2025",
    location: "Nicoya, Guanacaste, Costa Rica",
    description: "Formación universitaria orientada al desarrollo de aplicaciones informáticas, incluyendo programación, desarrollo web, bases de datos y principios de ingeniería de software.",
  },
  {
    institution: "Colegio Técnico Profesional de Corralillo",
    degree: "Técnico Medio en Informática Redes de Computadoras",
    period: "2022",
    location: "Nicoya, Guanacaste, Costa Rica",
    description: "Formación técnica orientada a redes de computadoras, soporte técnico, mantenimiento de equipos y fundamentos de programación aplicados a entornos tecnológicos.",
  },
  {
    institution: "Colegio Técnico Profesional de Corralillo",
    degree: "Bachillerato en Educación Media",
    period: "2022",
    location: "Nicoya, Guanacaste, Costa Rica",
    description: "Formación académica secundaria con énfasis en el desarrollo de habilidades analíticas, pensamiento crítico y bases para la educación superior.",
  },
]

export function EducationSection() {
  return (
    <section id="educacion" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Educación</h2>
          <p className="text-muted-foreground">
            Mi formación académica y trayectoria educativa.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold">{item.degree}</h3>
                    <p className="text-primary font-medium">{item.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
