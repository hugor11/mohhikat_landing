
import { Shield, Droplet, Clock, Heart, Home, Star } from 'lucide-react'
import Image from 'next/image'

const benefits = [
  {
    icon: Droplet,
    title: 'Máxima Absorción',
    description: 'Tecnología avanzada que absorbe hasta 4 veces más líquidos que la arena convencional, manteniendo el arenero seco por más tiempo.'
  },
  {
    icon: Shield,
    title: 'Control Total de Olores',
    description: 'Fórmula especializada que neutraliza y elimina los olores al instante, garantizando un ambiente fresco en tu hogar las 24 horas.'
  },
  {
    icon: Clock,
    title: 'Larga Duración',
    description: 'Mayor rendimiento por saco. Dura hasta 30% más que otras marcas premium, ofreciendo el mejor valor por tu inversión.'
  },
  {
    icon: Heart,
    title: '100% Segura para tu Gato',
    description: 'Elaborada con materiales naturales, libre de químicos tóxicos y fragancias artificiales. Suave con las patitas de tu michito.'
  },
  {
    icon: Home,
    title: 'Ideal para Hogares Mexicanos',
    description: 'Desarrollada específicamente para nuestro clima y condiciones. Se adapta perfectamente al estilo de vida de las familias mexicanas.'
  },
  {
    icon: Star,
    title: 'Calidad Premium Garantizada',
    description: 'Respaldada por años de investigación y desarrollo. La confianza de miles de familias mexicanas nos avala.'
  }
]

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white" data-section="benefits">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mr-4">¿Por qué elegir</h2>
            <Image
              src="/images/logotipo.jpg"
              alt="Mohhikat"
              width={120}
              height={70}
              className="rounded-lg"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 ml-4">?</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La arena que tu gato merece y tu familia necesita. Calidad premium con el respaldo de una marca mexicana.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 animate-on-scroll"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-mint-green rounded-xl flex items-center justify-center group-hover:bg-mint-green-dark transition-colors duration-300">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-mint-green-dark transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-coral-light bg-opacity-20 px-6 py-3 rounded-full">
            <span className="text-lg font-semibold text-gray-900">
              ¡Más de 50,000 familias mexicanas ya confían en nosotros!
            </span>
            <span className="text-2xl">🐱💕</span>
          </div>
        </div>
      </div>
    </section>
  )
}
