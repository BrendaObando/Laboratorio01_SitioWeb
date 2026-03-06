import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "light" | "dark"
type ThemeContextValue = {
  theme: Theme
  setTheme: (t: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyThemeToDom(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "light" || saved === "dark") return saved
    // default: system preference
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light"
  })

  useEffect(() => {
    applyThemeToDom(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: setThemeState,
      toggleTheme: () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useTheme debe usarse dentro de <ThemeProvider />")
  }
  return ctx
}
