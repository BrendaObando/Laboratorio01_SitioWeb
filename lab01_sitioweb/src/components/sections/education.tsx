import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const educationData = [
  {
    institution: "Universidad Técnica Nacional",
    degree: "Bachillerato en Ingeniería en Sistemas",
    period: "2022 - Presente",
    location: "San José, Costa Rica",
    description: "Enfoque en desarrollo de software, bases de datos y sistemas web.",
  },
  {
    institution: "Colegio Técnico Profesional",
    degree: "Técnico Medio en Informática",
    period: "2018 - 2021",
    location: "Heredia, Costa Rica",
    description: "Formación técnica en programación, redes y soporte técnico.",
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
