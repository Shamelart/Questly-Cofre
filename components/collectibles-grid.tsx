"use client"

import { Trophy, Star, Crown, Zap, Target, Award, Shield, Gem } from "lucide-react"
import { useState } from "react"

const collectibles = [
  {
    id: 1,
    name: "Primera Victoria",
    icon: Trophy,
    unlocked: true,
    rarity: "common",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Racha de 7 días",
    icon: Star,
    unlocked: true,
    rarity: "rare",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    name: "Maestro del Tiempo",
    icon: Crown,
    unlocked: true,
    rarity: "epic",
    color: "from-yellow-500 to-yellow-600",
  },
  { id: 4, name: "Velocista", icon: Zap, unlocked: false, rarity: "rare", color: "from-cyan-500 to-cyan-600" },
  {
    id: 5,
    name: "Objetivo Cumplido",
    icon: Target,
    unlocked: true,
    rarity: "common",
    color: "from-green-500 to-green-600",
  },
  { id: 6, name: "Campeón", icon: Award, unlocked: false, rarity: "legendary", color: "from-orange-500 to-orange-600" },
  { id: 7, name: "Defensor", icon: Shield, unlocked: true, rarity: "rare", color: "from-indigo-500 to-indigo-600" },
  { id: 8, name: "Gema Rara", icon: Gem, unlocked: false, rarity: "epic", color: "from-pink-500 to-pink-600" },
  {
    id: 9,
    name: "Estrella Fugaz",
    icon: Star,
    unlocked: false,
    rarity: "legendary",
    color: "from-purple-500 to-pink-500",
  },
  { id: 10, name: "Rayo Dorado", icon: Zap, unlocked: true, rarity: "epic", color: "from-yellow-400 to-orange-500" },
  {
    id: 11,
    name: "Corona Imperial",
    icon: Crown,
    unlocked: false,
    rarity: "legendary",
    color: "from-yellow-300 to-red-500",
  },
  {
    id: 12,
    name: "Trofeo Supremo",
    icon: Trophy,
    unlocked: false,
    rarity: "legendary",
    color: "from-purple-400 to-pink-600",
  },
]

const rarityColors = {
  common: "border-gray-500/50 shadow-gray-500/20",
  rare: "border-blue-500/50 shadow-blue-500/30",
  epic: "border-purple-500/50 shadow-purple-500/40",
  legendary: "border-yellow-500/50 shadow-yellow-500/50 animate-pulse-slow",
}

export function CollectiblesGrid() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const unlockedCollectibles = collectibles.filter((item) => item.unlocked)

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Mis Logros
          </h2>
          <p className="text-lg text-purple-300/80">Logros que has desbloqueado hasta el momento</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {unlockedCollectibles.map((item) => {
            const Icon = item.icon
            const isSelected = selectedItem === item.id

            return (
              <button
                key={item.id}
                onClick={() => setSelectedItem(isSelected ? null : item.id)}
                className={`
                  relative group
                  bg-gradient-to-br from-slate-900/80 to-slate-800/80
                  backdrop-blur-sm border-2 rounded-2xl p-6
                  transition-all duration-300
                  ${rarityColors[item.rarity]}
                  ${isSelected ? "scale-105 shadow-2xl" : "hover:scale-105"}
                `}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${item.color} blur-xl -z-10`}
                />

                <div className="flex flex-col items-center gap-3">
                  <div
                    className={`
                    w-16 h-16 rounded-full flex items-center justify-center
                    bg-gradient-to-br ${item.color}
                    shadow-lg
                  `}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-center">
                    <h3 className="font-bold text-white text-sm mb-1">{item.name}</h3>
                    <span
                      className={`
                      text-xs px-2 py-1 rounded-full
                      ${item.rarity === "common" && "bg-gray-500/30 text-gray-300"}
                      ${item.rarity === "rare" && "bg-blue-500/30 text-blue-300"}
                      ${item.rarity === "epic" && "bg-purple-500/30 text-purple-300"}
                      ${item.rarity === "legendary" && "bg-yellow-500/30 text-yellow-300"}
                    `}
                    >
                      {item.rarity.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute -inset-full top-0 block w-1/2 h-full transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
                </div>
              </button>
            )
          })}
        </div>

        {/* Progress bar */}
        <div className="mt-12 bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-purple-300 font-semibold">Progreso Total</span>
            <span className="text-purple-400 font-bold">
              {unlockedCollectibles.length} / {collectibles.length}
            </span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-500 rounded-full"
              style={{ width: `${(unlockedCollectibles.length / collectibles.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
