'use client'

import Image from 'next/image'

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-mint-green/10 relative overflow-hidden" id="porque-elegir">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-mint-green/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200/30 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Contenido Principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto e información */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Título principal */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-black text-mint-green leading-tight">
                ¿POR QUÉ<br/>
                ELEGIR<br/>
                MOHHIKAT?
              </h2>
            </div>

            {/* Lista de beneficios con iconos de huellitas */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 text-mint-green-dark">🐾</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-mint-green-dark mb-1">
                    MODERNA – CONECTAMOS CON EL ESTILO DE VIDA ACTUAL DE LOS CAT LOVERS.
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 text-mint-green-dark">🐾</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-mint-green-dark mb-1">
                    DIVERTIDA Y ÚNICA – EMPAQUES SENCILLO, FÁCIL TRANSPORTACIÓN
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 text-mint-green-dark">🐾</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-mint-green-dark mb-1">
                    ATRACTIVA Y FUNCIONAL – ALTO RENDIMIENTO
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 text-mint-green-dark">🐾</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-mint-green-dark mb-1">
                    EXPRESIVA – CELEBRAMOS QUE CADA GATO ES ÚNICO
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Lado visual con gato y elementos decorativos */}
          <div className="order-1 lg:order-2 relative">
            {/* Círculos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-purple-200/40 to-mint-green/30 blur-sm"></div>
            <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-gradient-to-br from-mint-green/20 to-purple-100/40 blur-sm"></div>
            
            {/* Elementos decorativos modernos flotantes */}
            <div className="absolute top-8 right-8 z-20">
              <div className="bg-pink-500 text-white px-3 py-2 rounded-xl font-bold text-sm shadow-lg rotate-12 hover:rotate-0 transition-transform">
                BRAND
              </div>
            </div>
            
            <div className="absolute top-20 left-8 z-20">
              <div className="w-8 h-8 bg-blue-400 rounded-lg shadow-lg rotate-45 hover:rotate-0 transition-transform"></div>
            </div>
            
            <div className="absolute bottom-32 left-4 z-20">
              <div className="w-6 h-6 bg-purple-500 rounded-full shadow-lg"></div>
            </div>
            
            <div className="absolute top-32 right-20 z-20">
              <div className="w-10 h-4 bg-yellow-400 rounded-lg shadow-lg -rotate-12 hover:rotate-0 transition-transform"></div>
            </div>
            
            <div className="absolute bottom-20 right-12 z-20">
              <div className="w-12 h-8 bg-blue-500 rounded-lg shadow-lg rotate-12"></div>
            </div>

            {/* Gato principal */}
            <div className="relative z-10 flex justify-center items-center h-[500px]">
              <div className="relative">
                {/* Sombra del gato */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-40 h-8 bg-black/10 rounded-full blur-md"></div>
                
                {/* Imagen del gato */}
                <div className="text-8xl lg:text-9xl filter drop-shadow-2xl hover:scale-105 transition-transform duration-300">
                  🐱
                </div>
                
                {/* Efecto de brillo */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-white/5 to-white/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
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