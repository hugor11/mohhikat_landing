
import { Check, X } from 'lucide-react'

const features = [
  {
    feature: 'Control de olores superior',
    mohhikat: true,
    whiskas: false,
    otros: false,
    description: 'Neutraliza olores al instante'
  },
  {
    feature: 'Súper absorción (3x)',
    mohhikat: true,
    whiskas: true,
    otros: false,
    description: 'Absorbe 3 veces su peso'
  },
  {
    feature: 'Precio accesible',
    mohhikat: true,
    whiskas: false,
    otros: true,
    description: 'Calidad premium a precio justo'
  },
  {
    feature: 'Disponible en todo México',
    mohhikat: true,
    whiskas: true,
    otros: false,
    description: 'En Walmart, Aurrera y Rappi'
  },
  {
    feature: '100% natural',
    mohhikat: true,
    whiskas: false,
    otros: false,
    description: 'Sin químicos dañinos'
  },
  {
    feature: 'Marca mexicana',
    mohhikat: true,
    whiskas: false,
    otros: false,
    description: 'Hecho en México, para México'
  },
  {
    feature: 'Larga duración',
    mohhikat: true,
    whiskas: true,
    otros: false,
    description: 'Menos cambios, más ahorro'
  }
]

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo nos comparamos con la competencia?
          </h2>
          <p className="text-xl text-gray-600">
            La comparación habla por sí sola. <span className="mint-green font-semibold">¡Mohhikat es la mejor opción!</span>
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-4 bg-gray-100">
            <div className="p-4 sm:p-6 font-semibold text-gray-900">
              <span className="hidden sm:inline">Características</span>
              <span className="sm:hidden">Comparación</span>
            </div>
            <div className="p-4 sm:p-6 text-center">
              <div className="font-bold text-lg mint-green-dark">Mohhikat</div>
              <div className="text-sm text-gray-600 hidden sm:block">¡La mejor!</div>
            </div>
            <div className="p-4 sm:p-6 text-center">
              <div className="font-bold text-lg text-purple-600">Whiskas</div>
              <div className="text-sm text-gray-600 hidden sm:block">Cara</div>
            </div>
            <div className="p-4 sm:p-6 text-center">
              <div className="font-bold text-lg text-gray-600">Otras</div>
              <div className="text-sm text-gray-600 hidden sm:block">Variables</div>
            </div>
          </div>

          {/* Feature rows */}
          {features.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="p-4 sm:p-6">
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  {item.feature}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">
                  {item.description}
                </div>
              </div>
              
              {/* Mohhikat column */}
              <div className="p-4 sm:p-6 text-center">
                {item.mohhikat ? (
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                )}
              </div>

              {/* Whiskas column */}
              <div className="p-4 sm:p-6 text-center">
                {item.whiskas ? (
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                )}
              </div>

              {/* Others column */}
              <div className="p-4 sm:p-6 text-center">
                {item.otros ? (
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-mint-green-dark text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              ¡La elección es clara! 🎯
            </h3>
            <p className="text-lg opacity-90">
              Mohhikat ofrece más beneficios por menos dinero. 
              <span className="mint-pastel font-semibold"> ¡Es la decisión inteligente!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
