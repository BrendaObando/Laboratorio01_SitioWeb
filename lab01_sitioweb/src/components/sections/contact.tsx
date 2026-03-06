import { useState } from "react"
import { useForm } from "@tanstack/react-form"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // TanStack Form configuration
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      setIsSubmitted(true)
      form.reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    },
  })

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <p className="text-muted-foreground">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para 
            colaboraciones y nuevas oportunidades.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:juan@example.com" 
                        className="font-medium hover:text-primary transition-colors"
                      >
                        brenobandogo0805@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <a 
                        href="tel:+50687462594" 
                        className="font-medium hover:text-primary transition-colors"
                      >
                        +506 8746-2594
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="font-medium">Nicoya, Guanacaste, Costa Rica</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Disponibilidad</h3>
                <p className="text-muted-foreground">
                Abierto a oportunidades de práctica profesional, colaboración en proyectos 
                y desarrollo de soluciones web modernas. Siempre dispuesto a aprender, 
                mejorar y aportar en equipos de tecnología.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-muted-foreground">
                    Gracias por contactarme. Te responderé pronto.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                  }}
                  className="space-y-4"
                >
                  {/* Name Field */}
                  <form.Field
                    name="name"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value || value.trim().length === 0) {
                          return "El nombre es requerido"
                        }
                        if (value.length < 2) {
                          return "El nombre debe tener al menos 2 caracteres"
                        }
                        if (value.length > 50) {
                          return "El nombre no puede exceder 50 caracteres"
                        }
                        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
                          return "El nombre solo puede contener letras"
                        }
                        return undefined
                      },
                      onChangeAsyncDebounceMs: 500,
                    }}
                    children={(field) => (
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                          id="name"
                          name="name"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Tu nombre completo"
                          className={field.state.meta.errors.length > 0 ? "border-destructive" : ""}
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  {/* Email Field */}
                  <form.Field
                    name="email"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value || value.trim().length === 0) {
                          return "El email es requerido"
                        }
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                          return "Ingresa un email válido (ejemplo: usuario@dominio.com)"
                        }
                        if (value.length > 100) {
                          return "El email no puede exceder 100 caracteres"
                        }
                        return undefined
                      },
                      onChangeAsyncDebounceMs: 500,
                    }}
                    children={(field) => (
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="tu@email.com"
                          className={field.state.meta.errors.length > 0 ? "border-destructive" : ""}
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  {/* Subject Field */}
                  <form.Field
                    name="subject"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value || value.trim().length === 0) {
                          return "El asunto es requerido"
                        }
                        if (value.length < 3) {
                          return "El asunto debe tener al menos 3 caracteres"
                        }
                        if (value.length > 100) {
                          return "El asunto no puede exceder 100 caracteres"
                        }
                        return undefined
                      },
                      onChangeAsyncDebounceMs: 500,
                    }}
                    children={(field) => (
                      <div className="space-y-2">
                        <Label htmlFor="subject">Asunto</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="¿De qué quieres hablar?"
                          className={field.state.meta.errors.length > 0 ? "border-destructive" : ""}
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  {/* Message Field */}
                  <form.Field
                    name="message"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value || value.trim().length === 0) {
                          return "El mensaje es requerido"
                        }
                        if (value.length < 10) {
                          return "El mensaje debe tener al menos 10 caracteres"
                        }
                        if (value.length > 500) {
                          return "El mensaje no puede exceder 500 caracteres"
                        }
                        return undefined
                      },
                      onChangeAsyncDebounceMs: 500,
                    }}
                    children={(field) => (
                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Mensaje
                          <span className="text-xs text-muted-foreground ml-2">
                            ({field.state.value.length}/500)
                          </span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Cuéntame sobre tu proyecto..."
                          rows={4}
                          className={field.state.meta.errors.length > 0 ? "border-destructive" : ""}
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children={([canSubmit, isSubmitting]) => (
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={!canSubmit || isSubmitting}
                      >
                        {isSubmitting ? (
                          "Enviando..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Enviar Mensaje
                          </>
                        )}
                      </Button>
                    )}
                  />
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
