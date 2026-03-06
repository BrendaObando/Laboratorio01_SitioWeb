import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router"
import { AppLayout } from "@/app/layout/AppLayout"
import { HomePage } from "@/routes/HomePage"
import { PortfolioPage } from "@/routes/PortfolioPage"

const rootRoute = createRootRoute({
  component: () => <AppLayout />,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portafolio",
  component: PortfolioPage,
})

const routeTree = rootRoute.addChildren([indexRoute, portfolioRoute])

export const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
