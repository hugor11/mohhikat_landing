
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Camera, Share2, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'

const communityPhotos = [
  {
    id: 1,
    image: 'https://cdn.abacus.ai/images/11f341d7-6544-40fd-9809-4126485a8275.png',
    likes: 24,
    caption: '¡Mi Peluso feliz con su nueva arena! #Mohhikat #GatoFeliz',
    author: '@maria_cdmx',
    location: 'Ciudad de México'
  },
  {
    id: 2,
    image: 'https://cdn.abacus.ai/images/78aac05d-a1e8-49bf-8ac1-b156458d1f19.png',
    likes: 31,
    caption: 'Negro aprovechando el patiecito 🌿 #MohhikatFamily',
    author: '@carlos_gdl',
    location: 'Guadalajara'
  },
  {
    id: 3,
    image: 'https://cdn.abacus.ai/images/8af10794-375f-4e3e-9cbc-9d515ba8191f.png',
    likes: 18,
    caption: 'Blanquita siempre en la cocina supervisando ✨ #Mohhikat',
    author: '@ana_mty',
    location: 'Monterrey'
  },
  {
    id: 4,
    image: 'https://cdn.abacus.ai/images/be6401a2-2d25-43a1-b6d3-82d089f00fc0.png',
    likes: 42,
    caption: 'Naranjito explorando la terraza 🧡 #MohhikatLife #Mexico',
    author: '@sofia_puebla',
    location: 'Puebla'
  },
  {
    id: 5,
    image: 'https://cdn.abacus.ai/images/a0507b54-ade3-4683-adc2-f7faa4349828.png',
    likes: 36,
    caption: 'La siesta perfecta de Simón 😴 #Mohhikat #SiestaMexicana',
    author: '@luis_merida',
    location: 'Mérida'
  },
  {
    id: 6,
    image: 'https://cdn.abacus.ai/images/7aaa4ad9-5fc9-4e95-938f-7810c91f87be.png',
    likes: 29,
    caption: 'Manchitas jugando en casa 🏠 #MohhikatFamily #GatosMx',
    author: '@claudia_tijuana',
    location: 'Tijuana'
  }
]

export default function CommunitySection() {
  const [likedPhotos, setLikedPhotos] = useState<Set<number>>(new Set())

  const handleLike = (photoId: number) => {
    setLikedPhotos(prev => {
      const newSet = new Set(prev)
      if (newSet.has(photoId)) {
        newSet.delete(photoId)
      } else {
        newSet.add(photoId)
      }
      return newSet
    })
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Comunidad Mohhikat',
          text: '¡Únete a la comunidad #Mohhikat y comparte las aventuras de tu michito!',
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('¡Enlace copiado! Compártelo con tus amigos 😺')
    }
  }

  return (
    <section className="py-20 bg-gray-50" data-section="community">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-coral-light bg-opacity-20 px-6 py-3 rounded-full mb-6">
            <Camera className="h-5 w-5 text-coral" />
            <span className="text-coral font-semibold">#Mohhikat</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comunidad <span className="petrol-blue">Mohhikat</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            <span className="coral font-semibold">¡Miles de familias mexicanas</span> ya comparten las aventuras de sus michitos con #Mohhikat. 
            ¡Únete a nuestra comunidad gatuna!
          </p>

          {/* Community stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold petrol-blue">15K+</div>
              <div className="text-sm text-gray-600">Fotos compartidas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold coral">8.5K</div>
              <div className="text-sm text-gray-600">Seguidores activos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold petrol-blue">32</div>
              <div className="text-sm text-gray-600">Estados participando</div>
            </div>
          </div>
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {communityPhotos.map((photo, index) => (
            <div 
              key={photo.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 animate-on-scroll"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Photo */}
              <div className="relative aspect-square">
                <Image
                  src={photo.image}
                  alt={`Foto de la comunidad #Mohhikat - ${photo.caption}`}
                  fill
                  className="object-cover"
                />
                
                {/* Overlay icons */}
                <div className="absolute top-3 right-3">
                  <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-full p-2">
                    <Camera className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Author info */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{photo.author}</div>
                    <div className="text-xs text-gray-500">{photo.location}</div>
                  </div>
                  <div className="text-xs text-gray-500">2h</div>
                </div>

                {/* Caption */}
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  {photo.caption}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(photo.id)}
                      className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <Heart 
                        className={`h-5 w-5 ${likedPhotos.has(photo.id) ? 'fill-red-500 text-red-500' : ''}`} 
                      />
                      <span className="text-sm">
                        {photo.likes + (likedPhotos.has(photo.id) ? 1 : 0)}
                      </span>
                    </button>
                    
                    <button 
                      className="flex items-center space-x-1 text-gray-500 hover:text-petrol-blue transition-colors"
                      onClick={() => alert('¡Función de comentarios próximamente! 💬')}
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-sm">3</span>
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleShare}
                    className="text-gray-500 hover:text-coral transition-colors"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¡Comparte a tu michito con #Mohhikat!
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Súbete fotos usando <span className="coral font-semibold">#Mohhikat</span> en redes sociales y 
                podrías ganar productos gratis para tu gato. ¡Cada mes premiamos las mejores fotos!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                size="lg"
                className="bg-coral hover:bg-coral-light text-white px-8 py-3 rounded-full shadow-lg"
                onClick={handleShare}
              >
                <Camera className="mr-2 h-5 w-5" />
                Compartir mi Foto
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-petrol-blue text-petrol-blue hover:bg-petrol-blue hover:text-white px-8 py-3 rounded-full"
                onClick={() => alert('¡Próximamente tendremos una galería completa! 📸')}
              >
                Ver Más Fotos
              </Button>
            </div>

            {/* Hashtags */}
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">#Mohhikat</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">#MohhikatFamily</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">#GatosFelices</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">#MexicanoYOrgullo</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">#ArenaParaGatos</span>
            </div>
          </div>
        </div>

        {/* Contest info */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-6 rounded-2xl text-center">
          <h4 className="text-xl font-bold mb-2">🏆 Concurso Mensual #Mohhikat</h4>
          <p className="opacity-90">
            ¡Cada mes premiamos las 3 mejores fotos con productos gratis y sorpresas especiales!
          </p>
        </div>
      </div>
    </section>
  )
}
