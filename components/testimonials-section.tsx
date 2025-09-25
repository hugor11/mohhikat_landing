
'use client'

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'María González',
    location: 'Ciudad de México',
    image: 'https://cdn.abacus.ai/images/b3b2bb9f-7352-49c0-a3f4-a63ddb0d87be.png',
    rating: 5,
    text: '¡Por fin una arena mexicana que sí funciona! Mi gato Peluso está feliz y mi casa ya no huele mal. Lo mejor de todo es que no me cuesta una fortuna como las marcas extranjeras.',
    cats: ['Peluso'],
    verified: true
  },
  {
    name: 'Carlos y Ana Martínez',
    location: 'Guadalajara, Jalisco',
    image: 'https://cdn.abacus.ai/images/4a2a39de-1b3a-404b-9842-e30ee118d6df.png',
    rating: 5,
    text: 'Tenemos 3 gatos rescatados y probamos muchas arenas. Mohhikat es la única que controla los olores de verdad y dura mucho más tiempo. ¡Los nietos pueden jugar sin problemas!',
    cats: ['Mimi', 'Toño', 'Luna'],
    verified: true
  },
  {
    name: 'Sofía Herrera',
    location: 'Monterrey, N.L.',
    image: 'https://cdn.abacus.ai/images/8c8f1008-8d30-455c-bdfc-e228fae55550.png',
    rating: 5,
    text: 'Como mamá soltera, necesito productos que funcionen y no rompan mi presupuesto. Mohhikat es perfecto: calidad premium a precio justo. Mis dos gatas la aman y yo también.',
    cats: ['Nala', 'Simba'],
    verified: true
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen las familias mexicanas
          </h2>
          <p className="text-xl text-gray-600">
            <span className="mint-green font-semibold">¡Más de 50,000 hogares satisfechos!</span> Lee las experiencias reales de quienes ya eligieron Mohhikat.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative animate-on-scroll"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-coral opacity-20" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-700 text-base leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* User info */}
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={`Testimonio de ${testimonial.name}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 mb-2">{testimonial.location}</div>
                  
                  {/* Cats */}
                  <div className="flex items-center space-x-1 text-sm">
                    <span className="text-gray-600">Gatos:</span>
                    {testimonial.cats.map((cat, catIndex) => (
                      <span key={catIndex} className="petrol-blue font-medium">
                        {cat}{catIndex < testimonial.cats.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                    <span className="text-xl">🐱</span>
                  </div>
                </div>
              </div>

              {/* Verified badge */}
              {testimonial.verified && (
                <div className="mt-4 inline-flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 font-medium">Cliente verificado</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social proof stats */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold petrol-blue mb-2">50,000+</div>
              <div className="text-gray-600">Familias satisfechas</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold coral mb-2">4.8/5</div>
              <div className="text-gray-600">Calificación promedio</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold petrol-blue mb-2">95%</div>
              <div className="text-gray-600">Lo recomiendan</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold coral mb-2">3 años</div>
              <div className="text-gray-600">En el mercado</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-mint-green-dark text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              ¡Únete a miles de familias satisfechas! 🇲🇽
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Prueba Mohhikat y descubre por qué somos la arena favorita de México.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-mint-green hover:bg-mint-green-light text-white px-8 py-3 rounded-full font-semibold transition-colors"
                onClick={() => {
                  const storesSection = document.querySelector('[data-section="stores"]');
                  storesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Comprar Ahora
              </button>
              <button 
                className="border border-white text-white hover:bg-white hover:text-mint-green-dark px-8 py-3 rounded-full font-semibold transition-colors"
                onClick={() => {
                  const communitySection = document.querySelector('[data-section="community"]');
                  communitySection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Más Testimonios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
