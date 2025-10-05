import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Smartphone } from "lucide-react"

export function DownloadSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-border/50 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-8">
              {/* Icon */}
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  ¿Listo para <span className="text-primary">comenzar</span>?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                  Únete a miles de usuarios que ya han descubierto una nueva forma de trabajar y colaborar. Descarga
                  gratis y comienza hoy mismo.
                </p>
              </div>

              {/* Download buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="group text-lg px-8 py-6 min-w-[200px]">
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  App Store
                </Button>

                <Button variant="outline" size="lg" className="text-lg px-8 py-6 min-w-[200px] group bg-transparent">
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Google Play
                </Button>
              </div>

              {/* Additional info */}
              <div className="pt-8 border-t border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-sm text-muted-foreground">Descarga gratuita</div>
                    <div className="font-semibold text-card-foreground">Sin costos ocultos</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Disponible en</div>
                    <div className="font-semibold text-card-foreground">iOS y Android</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Soporte 24/7</div>
                    <div className="font-semibold text-card-foreground">Siempre disponible</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
