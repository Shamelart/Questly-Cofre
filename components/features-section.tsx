import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Zap, Shield, Users, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Interfaz Intuitiva",
    description: "Diseño moderno y elegante que hace que gestionar proyectos sea un placer, no una tarea.",
  },
  {
    icon: Zap,
    title: "Productividad Extrema",
    description: "Automatiza tareas repetitivas y enfócate en lo que realmente importa para tu negocio.",
  },
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    description: "Protección de datos de nivel bancario con encriptación end-to-end y backups automáticos.",
  },
  {
    icon: Users,
    title: "Colaboración Real",
    description: "Trabaja en equipo sin fricciones con herramientas de comunicación y sincronización instantánea.",
  },
  {
    icon: Heart,
    title: "Totalmente Personalizable",
    description: "Adapta cada aspecto de Questly a tu flujo de trabajo único y preferencias personales.",
  },
  {
    icon: Sparkles,
    title: "IA Avanzada",
    description: "Asistente inteligente que aprende de tus patrones y sugiere optimizaciones automáticamente.",
  },
]

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">
            Características que te <span className="text-gradient-questly">enamorarán</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
            Cada función de Questly ha sido diseñada pensando en tu éxito. Descubre cómo podemos transformar tu
            productividad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-gray-700 bg-gray-800/90 backdrop-blur-sm hover:border-purple-500/50"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 border border-purple-500/20">
                    <feature.icon className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
