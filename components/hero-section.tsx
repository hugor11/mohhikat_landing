
'use client'

import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight, ShoppingCart } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con parallax */}
      <div className="absolute inset-0 hero-parallax z-0">
        <Image
          src="https://cdn.abacus.ai/images/d1bda92c-25bd-4241-867a-81971f6f562a.png"
          alt="Familia mexicana feliz con gatos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white bg-opacity-95 p-8 sm:p-12 rounded-2xl shadow-2xl backdrop-blur-sm">
          {/* Logo de Mohhikat */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-mint-green rounded-full blur-xl opacity-20 scale-110"></div>
              <Image
                src="/images/logotipo.jpg"
                alt="Mohhikat - Arena para Gatos"
                width={200}
                height={120}
                className="relative rounded-2xl shadow-2xl border-4 border-white/80 bg-white p-2 hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          {/* Mensaje principal */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Arena pensada para el hogar mexicano, con{' '}
            <span className="mint-green-dark">máxima absorción</span> y{' '}
            <span className="mint-green">control de olores</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
            ¡Para gatos felices y familias tranquilas!
          </p>

          {/* Subtítulos */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-gray-600">
            <span className="flex items-center text-lg font-medium">
              🇲🇽 Orgullosamente mexicana
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center text-lg font-medium">
              ✅ Calidad garantizada
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center text-lg font-medium">
              🐱 Para todas las etapas
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-mint-green hover:bg-mint-green-light text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const storesSection = document.querySelector('[data-section="stores"]');
                storesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Comprar Ahora
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-mint-green-dark text-mint-green-dark hover:bg-mint-green-dark hover:text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const benefitsSection = document.querySelector('[data-section="benefits"]');
                benefitsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Conoce los Beneficios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Indicador de precio/valor */}
          <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 font-semibold">
              💰 ¡Precio accesible para todas las familias mexicanas!
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
