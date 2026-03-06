import { Outlet } from "@tanstack/react-router"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
