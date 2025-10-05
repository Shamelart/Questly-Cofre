import { Header } from "@/components/header"
import { GamingHero } from "@/components/gaming-hero"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <Header />
      <GamingHero />
      <Footer />
    </main>
  )
}
