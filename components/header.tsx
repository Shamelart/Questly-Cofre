"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-z2htDsHnnqI9YXifXIYrNbjnegknNc.png"
              alt="Questly"
              width={280}
              height={84}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-purple-200 hover:text-purple-400 transition-colors font-medium">
              Inicio
            </Link>
            <Link href="/logros" className="text-purple-200 hover:text-purple-400 transition-colors font-medium">
              Logros
            </Link>
            <Link href="/misiones" className="text-purple-200 hover:text-purple-400 transition-colors font-medium">
              Misiones
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-purple-200 hover:text-purple-400 hover:bg-purple-900/30">
              Iniciar Sesión
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold shadow-lg shadow-purple-500/30">
              Jugar Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-purple-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={handleNavClick}
                className="text-purple-200 hover:text-purple-400 transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="/logros"
                onClick={handleNavClick}
                className="text-purple-200 hover:text-purple-400 transition-colors"
              >
                Logros
              </Link>
              <Link
                href="/misiones"
                onClick={handleNavClick}
                className="text-purple-200 hover:text-purple-400 transition-colors"
              >
                Misiones
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start text-purple-200 hover:bg-purple-900/30">
                  Iniciar Sesión
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold justify-start">
                  Jugar Ahora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
