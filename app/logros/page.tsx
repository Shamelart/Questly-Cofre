import { Header } from "@/components/header"
import { CollectiblesGrid } from "@/components/collectibles-grid"
import { Footer } from "@/components/footer"

export default function LogrosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <Header />
      <div className="pt-24">
        <CollectiblesGrid />
      </div>
      <Footer />
    </main>
  )
}
