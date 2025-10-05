"use client"

import { CheckCircle2, Sword, Flame, Sparkles, Users, BookOpen, Coins } from "lucide-react"
import { useState } from "react"

interface Mission {
  id: number
  title: string
  description: string
  icon: any
  reward: string
  completed: boolean
  progress?: {
    current: number
    total: number
  }
}

const initialMissions: Mission[] = [
  {
    id: 1,
    title: "Completa tu primera tarea",
    description: "Marca tu primera tarea como completada en Questly",
    icon: CheckCircle2,
    reward: "50 monedas + Logro 'Primera Victoria'",
    completed: true,
  },
  {
    id: 2,
    title: "Racha de 7 días",
    description: "Completa al menos una tarea durante 7 días consecutivos",
    icon: Flame,
    reward: "200 monedas + Logro 'Racha de Fuego'",
    completed: false,
    progress: { current: 3, total: 7 },
  },
  {
    id: 3,
    title: "Maestro de la productividad",
    description: "Completa 50 tareas en total",
    icon: Sparkles,
    reward: "500 monedas + Logro 'Maestro del Tiempo'",
    completed: false,
    progress: { current: 23, total: 50 },
  },
  {
    id: 4,
    title: "Trabajo en equipo",
    description: "Invita a 3 amigos a unirse a Questly",
    icon: Users,
    reward: "300 monedas + Logro 'Líder de Equipo'",
    completed: false,
    progress: { current: 1, total: 3 },
  },
  {
    id: 5,
    title: "Explorador de categorías",
    description: "Crea tareas en 5 categorías diferentes",
    icon: BookOpen,
    reward: "150 monedas + Logro 'Explorador'",
    completed: true,
  },
  {
    id: 6,
    title: "Coleccionista de monedas",
    description: "Acumula 1000 monedas en total",
    icon: Coins,
    reward: "Cofre Legendario + Logro 'Millonario'",
    completed: false,
    progress: { current: 450, total: 1000 },
  },
  {
    id: 7,
    title: "Guerrero de la semana",
    description: "Completa 20 tareas en una semana",
    icon: Sword,
    reward: "400 monedas + Logro 'Guerrero'",
    completed: false,
    progress: { current: 12, total: 20 },
  },
]

export function MissionsList() {
  const [missions, setMissions] = useState<Mission[]>(initialMissions)

  const handleToggleComplete = (id: number) => {
    setMissions((prev) =>
      prev.map((mission) =>
        mission.id === id && !mission.progress ? { ...mission, completed: !mission.completed } : mission,
      ),
    )
  }

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Mis Misiones
          </h2>
          <p className="text-lg text-cyan-300/80">Completa misiones para ganar recompensas y desbloquear logros</p>
        </div>

        <div className="space-y-4">
          {missions.map((mission) => {
            const Icon = mission.icon
            const hasProgress = mission.progress !== undefined
            const progressPercent = hasProgress ? (mission.progress!.current / mission.progress!.total) * 100 : 0

            return (
              <div
                key={mission.id}
                className={`
                  relative group
                  bg-gradient-to-br from-slate-900/80 to-slate-800/80
                  backdrop-blur-sm border-2 rounded-2xl p-6
                  transition-all duration-300
                  ${mission.completed ? "border-green-500/50 shadow-green-500/20" : "border-cyan-500/30 hover:border-cyan-500/50"}
                `}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`
                    flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center
                    ${mission.completed ? "bg-gradient-to-br from-green-500 to-green-600" : "bg-gradient-to-br from-cyan-500 to-blue-600"}
                    shadow-lg
                  `}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-bold text-white text-lg mb-1">{mission.title}</h3>
                        <p className="text-slate-300 text-sm">{mission.description}</p>
                      </div>

                      {/* Complete button */}
                      {!hasProgress && (
                        <button
                          onClick={() => handleToggleComplete(mission.id)}
                          className={`
                            flex-shrink-0 px-6 py-2 rounded-lg font-semibold
                            transition-all duration-300
                            ${
                              mission.completed
                                ? "bg-green-500/20 text-green-400 border-2 border-green-500/50"
                                : "bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-cyan-500/50"
                            }
                          `}
                        >
                          {mission.completed ? "Completado" : "Completar"}
                        </button>
                      )}
                    </div>

                    {/* Progress bar for missions with progress */}
                    {hasProgress && (
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-cyan-300 text-sm font-medium">Progreso</span>
                          <span className="text-cyan-400 text-sm font-bold">
                            {mission.progress!.current} / {mission.progress!.total}
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 rounded-full"
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Reward */}
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-yellow-400 text-sm font-semibold">Recompensa:</span>
                      <span className="text-yellow-300/80 text-sm">{mission.reward}</span>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                {!mission.completed && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl -z-10" />
                )}
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-cyan-400 mb-2">{missions.filter((m) => m.completed).length}</div>
            <div className="text-slate-300 text-sm">Misiones Completadas</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-purple-400 mb-2">
              {missions.filter((m) => !m.completed).length}
            </div>
            <div className="text-slate-300 text-sm">Misiones Activas</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-yellow-400 mb-2">
              {missions.filter((m) => m.completed).length * 50}
            </div>
            <div className="text-slate-300 text-sm">Monedas Ganadas</div>
          </div>
        </div>
      </div>
    </section>
  )
}
