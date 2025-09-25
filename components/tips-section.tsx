
'use client'

import { BookOpen, Lightbulb, Clock, Heart } from 'lucide-react'
import NewsletterSignup from './newsletter-signup'

const tips = [
  {
    icon: Lightbulb,
    title: '¿Cuántas veces cambiar la arena?',
    preview: 'La frecuencia correcta para mantener feliz a tu michito...',
    content: 'Con Mohhikat, gracias a su súper absorción, puedes cambiar completamente la arena cada 7-10 días para un gato, o cada 5-7 días para múltiples gatos. Solo retira los desechos sólidos diariamente.',
    readTime: '2 min',
    category: 'Higiene Básica'
  },
  {
    icon: Heart,
    title: 'Señales de una buena arena para gatos',
    preview: 'Cómo saber si tu gato está cómodo con su arena...',
    content: 'Un gato feliz usa su caja regularmente, no hay olores fuertes entre cambios, y no hay rastros de humedad. Si tu gato evita su caja, podría ser momento de cambiar de marca.',
    readTime: '3 min',
    category: 'Comportamiento'
  },
  {
    icon: Clock,
    title: 'Transición a nueva arena: paso a paso',
    preview: 'Cómo cambiar de arena sin estresar a tu gato...',
    content: 'Mezcla gradualmente 25% de Mohhikat con tu arena actual, aumentando la proporción cada 2-3 días. En una semana tendrás la transición completa sin estrés para tu michito.',
    readTime: '4 min',
    category: 'Cambio de Producto'
  },
  {
    icon: BookOpen,
    title: 'Ubicación perfecta para la caja de arena',
    preview: 'Dónde colocar la caja para máxima comodidad...',
    content: 'Busca un lugar silencioso, ventilado, de fácil acceso pero privado. Evita cerca de la comida, en lugares con mucho tráfico o junto a electrodomésticos ruidosos.',
    readTime: '3 min',
    category: 'Ubicación'
  }
]

const categories = [
  'Higiene Básica',
  'Comportamiento', 
  'Cambio de Producto',
  'Ubicación',
  'Múltiples Gatos',
  'Problemas Comunes'
]

export default function TipsSection() {
  return (
    <section className="py-20 bg-gray-50" data-section="tips">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-petrol-blue rounded-2xl mb-6">
            <BookOpen className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tips para Cuidar a tu Michito
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="coral font-semibold">Consejos de expertos mexicanos</span> para mantener a tu gato feliz, 
            saludable y tu hogar siempre limpio. ¡Aprende de los mejores!
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-petrol-blue hover:text-white transition-colors shadow-sm border border-gray-200"
              onClick={() => alert(`Filtrando por: ${category}. ¡Próximamente más artículos! 📚`)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tips grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tips.map((tip, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 animate-on-scroll"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-coral-light bg-opacity-20 rounded-xl flex items-center justify-center">
                    <tip.icon className="h-6 w-6 text-coral" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-petrol-blue-light bg-opacity-10 text-petrol-blue text-xs font-medium px-3 py-1 rounded-full">
                        {tip.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {tip.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {tip.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {tip.preview}
                </p>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <div className="bg-gray-50 p-4 rounded-xl mb-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {tip.content}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <button 
                    className="text-petrol-blue font-semibold text-sm hover:text-petrol-blue-light transition-colors"
                    onClick={() => alert('¡Artículo completo próximamente en nuestro blog! 📚')}
                  >
                    Leer artículo completo →
                  </button>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <button 
                      className="hover:text-coral transition-colors"
                      onClick={() => alert('¡Gracias por el like! ❤️')}
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                    <button 
                      className="hover:text-petrol-blue transition-colors"
                      onClick={() => alert('¡Guardado en favoritos! 📖')}
                    >
                      <BookOpen className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-4xl mx-auto border border-gray-100">
          <div className="mb-6">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¡Recibe tips semanales gratis! 
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada semana te enviamos los <span className="coral font-semibold">mejores consejos para cuidar a tu gato</span>, 
              ofertas exclusivas y novedades de Mohhikat. ¡100% libre de spam!
            </p>
          </div>

          <NewsletterSignup />

          <p className="text-xs text-gray-500 mt-4">
            Al suscribirte aceptas recibir emails de Mohhikat. Puedes cancelar en cualquier momento.
          </p>
        </div>

        {/* Expert section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-petrol-blue to-petrol-blue-light text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes una pregunta específica? 🤔
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Nuestro equipo de expertos mexicanos en comportamiento felino está listo para ayudarte. 
              ¡Consulta gratuita para todos los usuarios de Mohhikat!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-petrol-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => {
                  const message = '¡Hola! Me gustaría una consulta gratuita sobre el cuidado de mi gato 🐱';
                  const url = `https://wa.me/5512345678?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
              >
                Consulta Gratuita
              </button>
              <button 
                className="border border-white text-white hover:bg-white hover:text-petrol-blue px-8 py-3 rounded-full font-semibold transition-colors"
                onClick={() => alert('¡Próximamente más tips y artículos en nuestro blog! 📚🐱')}
              >
                Ver Más Tips
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
