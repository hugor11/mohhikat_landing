
'use client'

import Image from 'next/image'
import { Leaf, Heart, Recycle, MapPin } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Hecho en México',
    description: 'Producido en nuestras plantas mexicanas, generando empleos locales y reduciendo la huella de carbono.'
  },
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Elaborado con materiales naturales mexicanos, sin químicos artificiales que dañen a tu gato o al medio ambiente.'
  },
  {
    icon: Recycle,
    title: 'Empaque Reciclable',
    description: 'Nuestros empaques son 100% reciclables. Cuidamos a tu gato y también a nuestro planeta.'
  },
  {
    icon: Heart,
    title: 'Apoyo Local',
    description: 'Cada compra apoya a familias mexicanas y contribuye al desarrollo de nuestra economía nacional.'
  }
]

export default function EcoFriendlySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full mb-6">
                <span className="text-2xl">🇲🇽</span>
                <span className="text-green-700 font-semibold">Orgullosamente Mexicana</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                <span className="petrol-blue">Hecho en México</span>, <br />
                <span className="coral">para México</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                En Mohhikat creemos en el poder de lo mexicano. Nuestra arena no solo cuida a tu gato, 
                sino que también <span className="font-semibold petrol-blue">apoya a familias mexicanas, 
                protege el medio ambiente</span> y fortalece nuestra economía local.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-coral rounded-full"></div>
                  <span className="text-gray-700">Empleos dignos para trabajadores mexicanos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-coral rounded-full"></div>
                  <span className="text-gray-700">Materia prima nacional de la mejor calidad</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-coral rounded-full"></div>
                  <span className="text-gray-700">Proceso productivo sustentable y responsable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.abacus.ai/images/610e360e-011f-47d9-bf6c-8d588e6509e9.png"
                alt="Paisaje mexicano representando sustentabilidad"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-white bg-opacity-95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <div className="font-bold text-green-700 text-sm">Eco-Friendly</div>
                    <div className="text-xs text-gray-600">Sustentable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-on-scroll"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="bg-gradient-to-r from-petrol-blue to-petrol-blue-light text-white rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Nuestro Impacto en México 🇲🇽
            </h3>
            <p className="text-lg opacity-90">
              Datos que nos enorgullecen y que reflejan nuestro compromiso con México
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Empleos directos</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">12</div>
              <div className="text-sm opacity-90">Estados con distribución</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">85%</div>
              <div className="text-sm opacity-90">Materiales nacionales</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">3 años</div>
              <div className="text-sm opacity-90">Creciendo en México</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Al elegir Mohhikat, eliges México 🌟
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Cada bolsa que compras fortalece nuestra economía, cuida el medio ambiente y 
              demuestra que los productos mexicanos pueden ser los mejores del mundo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-coral hover:bg-coral-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg"
                onClick={() => {
                  const storesSection = document.querySelector('[data-section="stores"]');
                  storesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                ¡Apoya lo Mexicano!
              </button>
              <button 
                className="border-2 border-petrol-blue text-petrol-blue hover:bg-petrol-blue hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
                onClick={() => {
                  alert('¡Próximamente! Conoce más sobre nuestra historia y compromiso con México 🇲🇽');
                }}
              >
                Conoce Nuestra Historia
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
