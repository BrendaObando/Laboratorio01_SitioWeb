import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-primary uppercase tracking-wider">Bienvenido a mi portafolio</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Hola, soy <span className="text-primary">Juan Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Estudiante de Ingeniería en Sistemas apasionado por crear experiencias web accesibles, modernas y
                funcionales.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/portafolio">Ver Proyectos</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#contacto">Contactar</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:juan@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Avatar/Image placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-4 border-card">
                <div className="h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-card flex items-center justify-center">
                  <span className="text-6xl sm:text-8xl font-bold text-primary">JD</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-primary animate-bounce" />
              <div className="absolute -bottom-2 -left-2 h-6 w-6 rounded-full bg-accent" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
