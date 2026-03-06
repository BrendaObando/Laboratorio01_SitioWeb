export type Project = {
  id: number
  title: string
  description: string
  fullDescription?: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  videoUrl?: string
  role: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión de Inventario",
    description:
      "Aplicación web full-stack para gestionar inventarios. Incluye control de stock, alertas y reportes.",
    fullDescription:
      "Proyecto académico donde se implementó autenticación, dashboard administrativo y reportes. Se trabajó con un enfoque modular y buenas prácticas de UI.",
    image: "/placeholder.jpg",
    technologies: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://ejemplo-inventario.com",
    githubUrl: "https://github.com/usuario/inventario",
    role: "Desarrollador Full Stack",
  },
  {
    id: 2,
    title: "Portafolio Personal",
    description:
      "Sitio web responsive para mostrar CV y proyectos con secciones, temas y navegación limpia.",
    fullDescription:
      "Este mismo laboratorio adaptado a React + Tailwind + TanStack Router, con componentes reutilizables y un diseño minimalista.",
    image: "/placeholder.jpg",
    technologies: ["React", "TanStack Router", "Tailwind CSS"],
    githubUrl: "https://github.com/usuario/portafolio",
    role: "Frontend Developer",
  },
  {
    id: 3,
    title: "Demo con Video",
    description:
      "Ejemplo de proyecto mostrando multimedia (video) dentro de la tarjeta, con detalles expandibles.",
    fullDescription:
      "Incluye un video local en /public/projects/demo.mp4 para cumplir el requisito de multimedia.",
    image: "/placeholder.jpg",
    technologies: ["React", "UI Components", "Tailwind CSS"],
    videoUrl: "/projects/demo.mp4",
    role: "Frontend Developer",
  },
]
