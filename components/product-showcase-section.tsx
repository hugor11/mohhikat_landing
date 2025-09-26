'use client'

import Image from 'next/image'

export default function ProductShowcaseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100/50 via-white to-mint-green/10 relative overflow-hidden" id="producto-mohhikat">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-mint-green/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Contenido Principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Título y mensaje principal */}
          <div className="order-1 lg:order-1 space-y-8">
            {/* Título principal */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-black text-mint-green leading-tight">
                MOHHIKAT: LA<br/>
                ARENA QUE HARÁ<br/>
                LA DIFERENCIA EN<br/>
                TU ANAQUEL
              </h2>
            </div>

            {/* Mensaje de agradecimiento */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-mint-green/20">
              <p className="text-xl lg:text-2xl font-medium text-gray-700 leading-relaxed text-center">
                <span className="text-mint-green-dark font-bold">GRACIAS POR SU TIEMPO Y POR CONFIAR EN MOHHIKAT PARA SEGUIR CUIDANDO DE LOS GATOS Y SUS FAMILIAS.</span>
              </p>
            </div>
          </div>

          {/* Imagen del producto */}
          <div className="order-2 lg:order-2 relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-8 left-8 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-mint-green/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 right-8 w-48 h-48 bg-gradient-to-br from-mint-green/30 to-purple-100/40 blur-xl"></div>
            
            {/* Producto principal */}
            <div className="relative z-10 flex justify-center items-center h-[600px]">
              <div className="relative group">
                {/* Sombra del producto */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-48 h-12 bg-black/15 rounded-full blur-lg"></div>
                
                {/* Efecto de brillo/glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-mint-green/10 via-transparent to-white/20 rounded-3xl blur-2xl scale-110"></div>
                
                {/* Contenedor del producto */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl group-hover:scale-105 transition-all duration-500">
                  {/* Aquí iría la imagen real del producto si la tenemos */}
                  <div className="w-80 h-96 bg-gradient-to-b from-mint-green to-mint-green-dark rounded-2xl shadow-xl relative overflow-hidden">
                    {/* Simulación del empaque Mohhikat */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-mint-green flex items-center justify-center">
                      <div className="text-white font-bold text-xl">ARENA PARA GATO</div>
                    </div>
                    
                    <div className="absolute top-20 left-0 right-0 h-32 bg-white flex items-center justify-center">
                      <div className="text-mint-green-dark font-black text-4xl">Mohhikat</div>
                    </div>
                    
                    {/* Imagen del gato simulada */}
                    <div className="absolute top-48 left-0 right-0 bottom-16 bg-gradient-to-b from-orange-200 to-orange-400 flex items-center justify-center">
                      <div className="text-6xl">🐱</div>
                    </div>
                    
                    {/* Iconos de beneficios en la parte inferior */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-mint-green to-mint-pastel flex items-center justify-around px-4">
                      <div className="flex flex-col items-center">
                        <div className="text-white text-sm font-bold">💧</div>
                        <div className="text-white text-xs">ABSORCIÓN</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-white text-sm font-bold">🛡️</div>
                        <div className="text-white text-xs">CONTROL</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-white text-sm font-bold">🌿</div>
                        <div className="text-white text-xs">NATURAL</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-white text-sm font-bold">🇲🇽</div>
                        <div className="text-white text-xs">MEXICANO</div>
                      </div>
                    </div>
                    
                    {/* Peso del producto */}
                    <div className="absolute bottom-2 right-4 bg-white/90 rounded-lg px-2 py-1">
                      <span className="text-mint-green-dark font-bold text-sm">10 kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elementos flotantes decorativos */}
            <div className="absolute top-16 right-12 z-20">
              <div className="bg-mint-green text-white p-3 rounded-full shadow-lg animate-pulse">
                <span className="text-xl">⭐</span>
              </div>
            </div>
            
            <div className="absolute bottom-24 left-8 z-20">
              <div className="bg-purple-500 text-white p-2 rounded-lg shadow-lg rotate-12">
                <span className="font-bold text-sm">PREMIUM</span>
              </div>
            </div>
            
            <div className="absolute top-32 left-16 z-20">
              <div className="bg-yellow-400 w-4 h-4 rounded-full shadow-lg animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}