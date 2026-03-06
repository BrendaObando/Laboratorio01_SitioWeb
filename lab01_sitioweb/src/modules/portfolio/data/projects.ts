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
  externalVideoUrl?: string
  role: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión Municipal – Municipalidad de Nicoya",
    description:
      "Plataforma web desarrollada para apoyar la digitalización de procesos administrativos de la Municipalidad de Nicoya, permitiendo gestionar contribuyentes, trámites, permisos y pagos municipales.",
    fullDescription:
      "Este proyecto consistió en el desarrollo de un sistema web orientado a modernizar la gestión administrativa de la Municipalidad de Nicoya. La plataforma busca digitalizar procesos que tradicionalmente se realizaban de forma manual, como la administración de contribuyentes, bienes inmuebles, trámites municipales, permisos y pagos. El sistema permite registrar, consultar y administrar información municipal mediante una interfaz web accesible, facilitando la organización de los datos y mejorando la eficiencia de los procesos internos. El objetivo principal del sistema es mejorar la transparencia, reducir los tiempos de trámite y ofrecer servicios municipales más accesibles para los ciudadanos. Dentro del proyecto participé en el desarrollo full stack del sistema, contribuyendo en la implementación del frontend, desarrollo de servicios en el backend y diseño de la base de datos.",
    image: "/SsitemaMunicipalidadNicoyaLogin.png",
    technologies: ["React", "C#", ".NET", "SQL Server"],
    role: "Desarrollador Full Stack",
  },
  {
    id: 2,
    title: "Maqueta de Planta de Tratamiento de Aguas Residuales",
    description:
      "Prototipo funcional desarrollado con Arduino para simular el funcionamiento de una planta de tratamiento de aguas residuales mediante sensores, bombeo de agua y control electrónico.",
    fullDescription:
      "Este proyecto consistió en el desarrollo de una maqueta funcional que simula el funcionamiento básico de una planta de tratamiento de aguas residuales. Fue desarrollado como parte del curso de Arquitectura de Computadoras con el objetivo de representar de forma práctica algunos procesos utilizados en sistemas reales de tratamiento de agua. Para su construcción se utilizó un microcontrolador Arduino junto con distintos componentes electrónicos, como sensores ultrasónicos para detectar niveles de agua, un motor de bombeo para simular el flujo del líquido, relés para el control de dispositivos eléctricos y luces LED para indicar el estado del sistema. Durante el proyecto se realizaron pruebas de integración de los componentes, así como la construcción de la estructura de la maqueta y la verificación del funcionamiento conjunto de todos los elementos.",
    image: "/TratamientoAgua.jpg",
    technologies: ["Arduino",
    "Sensor Ultrasónico",
    "Motor de Bombeo de Agua",
    "Relay",
    "ProtoBoard",
    ],
    externalVideoUrl: "https://youtu.be/oby5HRS9V-8?si=62neSgODLMF0XH4d",
    role: "Hardware & Prototyping Developer",
  },
  {
    id: 3,
    title: "RedSanPablo",
    description:
      "Sistema web desarrollado para la ASADA San Pablo que permite gestionar usuarios, proyectos, materiales, reportes y solicitudes de los abonados, además de ofrecer una página informativa para la comunidad.",
    fullDescription:
      "RedSanPablo es una plataforma web desarrollada para apoyar la gestión administrativa y operativa de la ASADA San Pablo. El sistema incluye módulos para la administración de usuarios, notificaciones, reportes, gestión de proyectos y control de materiales utilizados en cada proyecto, permitiendo llevar un seguimiento organizado de los recursos y actividades. También incorpora una página informativa donde los usuarios pueden conocer los servicios de la ASADA, consultar información relevante y realizar comentarios de forma anónima. Además, el sistema cuenta con un rol específico para los abonados, quienes pueden enviar solicitudes, reportar averías y recibir notificaciones relacionadas con el servicio. Dentro del proyecto participé principalmente en el desarrollo del frontend, diseñando interfaces de usuario, integrando módulos del sistema y contribuyendo a la experiencia de uso de la plataforma.",
    image: "/placeholder.jpg",
    technologies: [
      "React",
      "Tailwind CSS",
      "NestJS",
      "MySQL",
      "GitHub",
    ],
    videoUrl: "/demoASADA.mp4",
    liveUrl: "https://redsanpbalo-frontend-abonados.vercel.app/",
    role: "Desarrollador Frontend",
  },
]
