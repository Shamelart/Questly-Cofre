"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sofia Hernández",
    role: "CEO, TechStart",
    content: "Questly revolucionó nuestra gestión de proyectos. Aumentamos la productividad un 200% en solo 3 meses.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    name: "Miguel Torres",
    role: "Director de Producto",
    content: "La mejor inversión que hemos hecho. La IA de Questly predice problemas antes de que ocurran.",
    rating: 5,
    avatar: "👨‍💻",
  },
  {
    name: "Carmen López",
    role: "Freelancer",
    content: "Como freelancer, Questly me permite manejar múltiples clientes sin perder el control. Es increíble.",
    rating: 5,
    avatar: "👩‍🎨",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonios" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">
            Lo que dicen nuestros <span className="text-gradient-questly">usuarios</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
            Más de 100,000 profesionales ya han transformado su productividad con Questly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-700 shadow-2xl bg-gray-800/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-purple-400 text-purple-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-white mb-8 text-balance leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="text-4xl">{testimonials[currentIndex].avatar}</div>
                  <div className="text-left">
                    <div className="font-semibold text-white">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-300">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-gradient-questly" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
