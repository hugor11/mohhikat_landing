
'use client'

import Image from 'next/image'
import { MapPin, Clock, ShoppingBag } from 'lucide-react'

const stores = [
  {
    name: 'Walmart México',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Logo_de_Walmart_Mexico_y_Centroamerica.svg/1280px-Logo_de_Walmart_Mexico_y_Centroamerica.svg.png',
    description: 'Disponible en más de 2,600 tiendas en todo México',
    availability: 'Nacional',
    delivery: 'Entrega a domicilio',
    highlight: 'Más popular'
  },
  {
    name: 'Bodega Aurrera',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Aurrera_logo.svg/2048px-Aurrera_logo.svg.png',
    description: 'En tu Bodega Aurrera de confianza, cerca de tu hogar',
    availability: 'Nacional',
    delivery: 'Disponible en tienda',
    highlight: 'Precio más bajo'
  },
  {
    name: 'Rappi',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rappi_logo.svg/1280px-Rappi_logo.svg.png',
    description: 'Delivery en 30 minutos a tu puerta',
    availability: 'Ciudades principales',
    delivery: 'Express 30 min',
    highlight: 'Más rápido'
  }
]

const regions = [
  { name: 'Ciudad de México', stores: 3 },
  { name: 'Estado de México', stores: 3 },
  { name: 'Jalisco', stores: 3 },
  { name: 'Nuevo León', stores: 3 },
  { name: 'Puebla', stores: 2 },
  { name: 'Yucatán', stores: 2 },
  { name: 'Sonora', stores: 2 },
  { name: 'Baja California', stores: 2 }
]

export default function StoresSection() {
  return (
    <section className="py-20 bg-white" data-section="stores">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-6 py-3 rounded-full mb-6">
            <ShoppingBag className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-semibold">Disponible en todo México</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Dónde comprar <span className="petrol-blue">Mohhikat</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="coral font-semibold">¡Fácil de encontrar!</span> Mohhikat está disponible en las tiendas más importantes de México. 
            Elige la opción que más te convenga.
          </p>
        </div>

        {/* Stores grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stores.map((store, index) => (
            <div 
              key={index}
              className="relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 animate-on-scroll"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Highlight badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-coral text-white text-xs font-bold px-3 py-1 rounded-full">
                  {store.highlight}
                </span>
              </div>

              {/* Logo */}
              <div className="mb-6">
                <div className="relative h-16 w-full">
                  <Image
                    src={store.logo}
                    alt={`Logo de ${store.name}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Store info */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{store.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{store.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-petrol-blue" />
                    {store.availability}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-coral" />
                    {store.delivery}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button 
                className="w-full bg-petrol-blue hover:bg-petrol-blue-light text-white py-3 px-6 rounded-full font-semibold transition-colors"
                onClick={() => {
                  const storeMap: { [key: string]: string } = {
                    'Walmart México': 'https://www.walmart.com.mx/search?query=arena%20para%20gatos',
                    'Bodega Aurrera': 'https://www.bodegaaurrera.com.mx/search?query=arena%20para%20gatos',
                    'Rappi': 'https://www.rappi.com.mx/search?query=arena%20para%20gatos'
                  };
                  const url = storeMap[store.name];
                  if (url) {
                    window.open(url, '_blank');
                  }
                }}
              >
                Comprar en {store.name}
              </button>
            </div>
          ))}
        </div>

        {/* Regional availability */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Cobertura Nacional 🇲🇽
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regions.map((region, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="font-semibold text-gray-900 mb-1">{region.name}</div>
                <div className="text-sm text-gray-600">
                  {region.stores} {region.stores === 1 ? 'cadena' : 'cadenas'}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              ¡Y seguimos creciendo! <span className="font-semibold petrol-blue">+12 estados más próximamente</span>
            </p>
          </div>
        </div>

        {/* Special offers */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Online offer */}
          <div className="bg-gradient-to-br from-coral to-coral-light text-white p-8 rounded-2xl">
            <div className="text-3xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold mb-3">¡Envío GRATIS!</h3>
            <p className="text-lg opacity-90 mb-4">
              En compras mayores a $500 pesos en Walmart y Rappi. 
              ¡Llega directo a tu puerta!
            </p>
            <button 
              className="bg-white text-coral px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => alert('¡Envío gratis en compras +$500! Aplican términos y condiciones 🚚')}
            >
              Ver Promoción
            </button>
          </div>

          {/* Store locator */}
          <div className="bg-gradient-to-br from-petrol-blue to-petrol-blue-light text-white p-8 rounded-2xl">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-2xl font-bold mb-3">Encuentra tu tienda</h3>
            <p className="text-lg opacity-90 mb-4">
              Usa nuestro localizador de tiendas para encontrar 
              Mohhikat en tu ciudad.
            </p>
            <button 
              className="bg-white text-petrol-blue px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => alert('Próximamente: Localizador de tiendas con GPS 📍')}
            >
              Buscar Tiendas
            </button>
          </div>
        </div>

        {/* Customer service */}
        <div className="text-center mt-16">
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              ¿No encuentras Mohhikat en tu tienda? 🤔
            </h4>
            <p className="text-gray-600 mb-4">
              ¡Contáctanos! Te ayudamos a encontrar el punto de venta más cercano 
              o hablamos con tu tienda para que lo tengan disponible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-coral text-white px-6 py-3 rounded-full font-semibold hover:bg-coral-light transition-colors"
                onClick={() => {
                  const message = '¡Hola! Me interesa conocer más sobre Mohhikat 🐱';
                  const url = `https://wa.me/5512345678?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
              >
                WhatsApp: 55-1234-5678
              </button>
              <button 
                className="border border-petrol-blue text-petrol-blue px-6 py-3 rounded-full font-semibold hover:bg-petrol-blue hover:text-white transition-colors"
                onClick={() => {
                  const email = 'hola@mohhikat.mx';
                  const subject = 'Consulta sobre Mohhikat';
                  const body = '¡Hola! Me gustaría obtener más información sobre sus productos.';
                  const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.open(url, '_blank');
                }}
              >
                hola@mohhikat.mx
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
