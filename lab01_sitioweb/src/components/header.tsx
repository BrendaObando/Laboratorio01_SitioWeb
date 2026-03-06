import { Link, useRouterState } from "@tanstack/react-router"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/app/providers/theme-provider"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Contacto", href: "/#contacto" },
]

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            BO
          </div>
          <span className="hidden font-semibold sm:inline-block">Brenda Obando</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.href.includes("#") ? (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href.split("#")[0] ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Cambiar tema">
            <Sun className={cn("h-5 w-5 transition-all", theme === "dark" && "scale-0 rotate-90")} />
            <Moon className={cn("absolute h-5 w-5 transition-all", theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90")} />
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto flex flex-col gap-2 p-4">
            {navItems.map((item) =>
              item.href.includes("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
