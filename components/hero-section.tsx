import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/questly-bg-1-Wd01c8ln6GHq2CC5IHlcmJCyglUlnw.png"
            alt="Questly Background"
            fill
            className="object-cover scale-110"
          />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full animate-float opacity-30 shadow-sm shadow-purple-300/20" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-pink-300 to-cyan-300 rounded-full animate-float-delayed opacity-25 shadow-sm shadow-pink-300/20" />
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full animate-float-slow opacity-30 shadow-sm shadow-cyan-300/20" />
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full animate-float opacity-25 shadow-sm shadow-purple-200/20" />

        <div className="absolute top-1/4 left-1/4 w-32 h-20 border-2 border-cyan-200/30 bg-cyan-200/3 rounded-lg animate-pulse-slow opacity-40 shadow-sm shadow-cyan-200/15" />
        <div className="absolute top-1/3 right-1/3 w-24 h-16 border-2 border-purple-200/30 bg-purple-200/3 rounded-lg animate-pulse-slow delay-500 opacity-40 shadow-sm shadow-purple-200/15" />
        <div className="absolute bottom-1/3 left-1/2 w-28 h-18 border-2 border-pink-200/30 bg-pink-200/3 rounded-lg animate-pulse-slow delay-1000 opacity-40 shadow-sm shadow-pink-200/15" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-6 justify-center items-center">
          {/* Card principal - más grande */}
          <Card className="w-[95%] bg-gray-900/90 backdrop-blur-sm border-gray-700 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center h-full flex flex-col justify-center">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 text-sm text-purple-300 animate-fade-in">
                  <div className="w-2 h-2 bg-gradient-questly rounded-full animate-pulse" />
                  {"Ahora disponible para descarga"}
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight animate-fade-in-up text-white">
                  Revoluciona tu forma de <span className="text-gradient-questly">trabajar</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-pretty leading-relaxed animate-fade-in-up delay-200">
                  Questly transforma tu productividad con tecnología de vanguardia. Gestiona proyectos, colabora en
                  tiempo real y alcanza tus objetivos como nunca antes.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up delay-300">
                  <Button
                    size="lg"
                    className="group text-lg px-8 py-6 bg-gradient-questly hover:opacity-90 text-white hover:scale-105 transition-all duration-300"
                  >
                    Descargar Questly
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 group bg-gray-800/80 backdrop-blur-sm border-purple-400/30 text-purple-300 hover:bg-gray-700/80 hover:scale-105 transition-all duration-300"
                  >
                    <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Ver demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card de estadísticas - más pequeña */}
          <Card className="w-full max-w-2xl bg-gray-900/90 backdrop-blur-sm border-gray-700 shadow-2xl">
            <CardContent className="p-6 md:p-8 h-full flex flex-col justify-center">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white text-center mb-6">Nuestros números</h3>
                <div className="flex justify-around items-center animate-fade-in-up delay-500">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gradient-questly">100K+</div>
                    <div className="text-sm text-gray-400 mt-1">Usuarios activos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gradient-questly">4.8</div>
                    <div className="text-sm text-gray-400 mt-1">Rating App Store</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gradient-questly">95%</div>
                    <div className="text-sm text-gray-400 mt-1">Productividad</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 hidden lg:block animate-float-phone">
        <div className="w-64 h-96 bg-white border-8 border-gray-200 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
            <div className="text-6xl animate-bounce-slow">📱</div>
          </div>
        </div>
      </div>
    </section>
  )
}
