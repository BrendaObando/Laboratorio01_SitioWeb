import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { router } from "@/app/router"
import { ThemeProvider } from "@/app/providers/theme-provider"
import "@/styles/globals.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} position="bottom-right" />
    </ThemeProvider>
  </React.StrictMode>
)
