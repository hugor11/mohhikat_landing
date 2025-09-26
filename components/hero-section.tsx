'use client'

import { Button } from './ui/button'
import { ArrowRight, ShoppingCart } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-mint-green to-mint-green-dark">
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white bg-opacity-95 p-8 rounded-2xl shadow-2xl">
          <div className="mb-8">
            <div className="w-48 h-24 mx-auto bg-mint-green rounded-2xl flex items-center justify-center mb-6">
              <h1 className="text-3xl font-bold text-white">MOHHIKAT</h1>
            </div>
            <p className="text-lg text-mint-green-dark font-semibold">Arena Premium para Gatos</p>
          </div>

          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-mint-green">Arena Premium</span> Hecha en México
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Control superior de olores y máxima absorción para hogares mexicanos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-mint-green/10 rounded-xl">
              <div className="text-3xl mb-2"></div>
              <h3 className="font-bold text-mint-green-dark">Premium</h3>
              <p className="text-sm text-gray-600">Calidad superior</p>
            </div>
            <div className="p-4 bg-mint-green/10 rounded-xl">
              <div className="text-3xl mb-2"></div>
              <h3 className="font-bold text-mint-green-dark">100% Mexicana</h3>
              <p className="text-sm text-gray-600">Hecha con orgullo</p>
            </div>
            <div className="p-4 bg-mint-green/10 rounded-xl">
              <div className="text-3xl mb-2"></div>
              <h3 className="font-bold text-mint-green-dark">Gatos Felices</h3>
              <p className="text-sm text-gray-600">Textura perfecta</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-mint-green hover:bg-mint-green-dark text-white px-8 py-4 text-lg rounded-full">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Comprar Ahora
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-mint-green text-mint-green hover:bg-mint-green hover:text-white px-8 py-4 text-lg rounded-full">
              Conoce Más
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
