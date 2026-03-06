import { Code, Database, Layout, Server, Terminal, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skillsData = [
  {
    category: "Frontend",
    icon: Layout,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "Java", "REST APIs"],
  },
  {
    category: "Bases de Datos",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Herramientas",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
  {
    category: "Lenguajes",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  {
    category: "DevOps",
    icon: Terminal,
    skills: ["Linux", "Docker", "Vercel", "Netlify", "GitHub Actions"],
  },
]

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-muted-foreground">
            Tecnologías y herramientas que utilizo en mis proyectos de desarrollo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillsData.map((category, index) => {
            const Icon = category.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
