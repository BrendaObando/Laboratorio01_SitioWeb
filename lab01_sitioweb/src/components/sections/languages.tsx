import { Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const languagesData = [
  {
    language: "Español",
    level: "Nativo",
    percentage: 100,
    flag: "🇨🇷",
  },
  {
    language: "Inglés",
    level: "Avanzado (B2)",
    percentage: 80,
    flag: "🇺🇸",
  },
  {
    language: "Portugués",
    level: "Básico (A2)",
    percentage: 30,
    flag: "🇧🇷",
  },
]

export function LanguagesSection() {
  return (
    <section id="idiomas" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Idiomas</h2>
          <p className="text-muted-foreground">
            Competencias lingüísticas y nivel de dominio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {languagesData.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.flag}</span>
                  <div>
                    <h3 className="font-semibold">{item.language}</h3>
                    <p className="text-sm text-muted-foreground">{item.level}</p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500 group-hover:bg-accent"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <p className="text-right text-xs text-muted-foreground mt-1">
                  {item.percentage}%
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
