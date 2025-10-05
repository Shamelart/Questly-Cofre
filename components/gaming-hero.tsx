"use client"

import { useState } from "react"
import { Coins, Key } from "lucide-react"

export function GamingHero() {
  const [isOpening, setIsOpening] = useState(false)
  const [rewards, setRewards] = useState<Array<{ id: number; type: "coin" | "key"; x: number; y: number }>>([])

  const openChest = () => {
    if (isOpening) return

    setIsOpening(true)

    // Generate random rewards
    const newRewards = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      type: Math.random() > 0.5 ? "coin" : ("key" as "coin" | "key"),
      x: Math.random() * 200 - 100,
      y: Math.random() * -150 - 50,
    }))

    setRewards(newRewards)

    setTimeout(() => {
      setIsOpening(false)
      setRewards([])
    }, 2000)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 leading-tight">
            QUESTLY
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-4 font-medium">
            Convierte tu vida en una aventura épica
          </p>
          <p className="text-lg text-purple-300/80 max-w-2xl mx-auto">
            Completa misiones, desbloquea logros y colecciona recompensas mientras conquistas tus objetivos diarios
          </p>
        </div>

        {/* Chest Button Section */}
        <div className="flex flex-col items-center gap-8 mb-16">
          <div className="relative">
            {/* Rewards animation */}
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className="absolute top-1/2 left-1/2 pointer-events-none animate-reward-float z-20"
                style={{
                  transform: `translate(${reward.x}px, ${reward.y}px)`,
                  animation: "rewardFloat 1.5s ease-out forwards",
                }}
              >
                {reward.type === "coin" ? (
                  <Coins className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
                ) : (
                  <Key className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                )}
              </div>
            ))}

            {/* Chest Image Button */}
            <button
              onClick={openChest}
              disabled={isOpening}
              className={`
                relative group cursor-pointer
                transition-all duration-300
                ${isOpening ? "scale-110" : "hover:scale-105"}
                focus:outline-none focus:ring-4 focus:ring-yellow-500/50
              `}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-yellow-400/30 via-amber-400/30 to-yellow-400/30 blur-2xl" />

              {/* Chest container */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Chest image with opening animation */}
                <div
                  className={`relative w-full h-full transition-all duration-500 ${isOpening ? "animate-bounce" : ""}`}
                >
                  {/* Closed chest - shows when not opening */}
                  {!isOpening && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/gaming-chest-closed.jpg"
                        alt="Closed Treasure Chest"
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  )}

                  {/* Open chest - shows when opening */}
                  {isOpening && (
                    <div className="absolute inset-0 flex items-center justify-center animate-scale-up">
                      <img
                        src="/gaming-chest-open.jpg"
                        alt="Open Treasure Chest"
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Text label */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {isOpening ? "¡Abriendo!" : "Abrir Cofre"}
                </span>
              </div>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mt-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-purple-300 mb-1">247</div>
              <div className="text-sm text-purple-400">Misiones</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/50 to-pink-800/30 backdrop-blur-sm border border-pink-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-pink-300 mb-1">1,523</div>
              <div className="text-sm text-pink-400">Monedas</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-cyan-300 mb-1">89</div>
              <div className="text-sm text-cyan-400">Logros</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
