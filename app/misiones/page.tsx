import { Header } from "@/components/header"
import { MissionsList } from "@/components/missions-list"
import { Footer } from "@/components/footer"

export default function MisionesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <Header />
      <div className="pt-24">
        <MissionsList />
      </div>
      <Footer />
    </main>
  )
}
