'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-mint-green/5" id="porque-elegir">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6 flex-wrap gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">¿Por qué elegir</h2>
            <div className="relative">
              <div className="absolute inset-0 bg-mint-green rounded-2xl blur-lg opacity-30 scale-110"></div>
              <Image
                src="/images/logotipo.jpg"
                alt="Mohhikat"
                width={120}
                height={70}
                className="relative rounded-xl shadow-2xl border-2 border-white bg-white p-2 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">?</h2>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            La arena que tu gato merece y tu familia necesita. Calidad premium con el respaldo de una marca mexicana.
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen decorativa */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-purple-100 via-blue-100 to-mint-green/20 rounded-3xl p-8">
              {/* Elementos decorativos modernos */}
              <div className="absolute top-4 right-4">
                <div className="bg-pink-400 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  BRAND
                </div>
              </div>
              
              {/* Gato ilustrativo */}
              <div className="flex justify-center items-center h-64">
                <div className="text-6xl">🐱</div>
              </div>
              
              {/* Elementos geométricos */}
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-yellow-400 rounded-lg"></div>
              <div className="absolute top-1/2 left-4 w-6 h-6 bg-purple-500 rounded-full"></div>
              <div className="absolute top-1/4 right-8 w-10 h-6 bg-blue-400 rounded-lg"></div>
            </div>
          </div>

          {/* Lista de beneficios */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-mint-green/5 transition-colors">
                <div className="flex-shrink-0 w-3 h-3 bg-mint-green-dark rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-bold text-mint-green-dark mb-2">
                    MODERNA – CONECTAMOS CON EL ESTILO DE VIDA ACTUAL DE LOS CAT LOVERS.
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-mint-green/5 transition-colors">
                <div className="flex-shrink-0 w-3 h-3 bg-mint-green-dark rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-bold text-mint-green-dark mb-2">
                    DIVERTIDA Y ÚNICA – EMPAQUES SENCILLO, FÁCIL TRANSPORTACIÓN
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-mint-green/5 transition-colors">
                <div className="flex-shrink-0 w-3 h-3 bg-mint-green-dark rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-bold text-mint-green-dark mb-2">
                    ATRACTIVA Y FUNCIONAL – ALTO RENDIMIENTO
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-mint-green/5 transition-colors">
                <div className="flex-shrink-0 w-3 h-3 bg-mint-green-dark rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-bold text-mint-green-dark mb-2">
                    EXPRESIVA – CELEBRAMOS QUE CADA GATO ES ÚNICO
                  </h3>
                </div>
              </div>
            </div>

            {/* Mensaje de confianza */}
            <div className="mt-12 bg-gradient-to-r from-mint-green/10 to-mint-pastel/10 border border-mint-green/20 rounded-2xl p-6">
              <p className="text-lg font-bold text-center text-mint-green-dark flex items-center justify-center gap-2">
                <span className="text-2xl">🐱</span>
                ¡Más de 50,000 familias mexicanas ya confían en nosotros!
                <span className="text-2xl">💕</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}