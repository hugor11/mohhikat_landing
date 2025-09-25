
'use client'

import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import FooterNewsletter from './footer-newsletter'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                <span className="text-[#005677]">Mohhi</span><span className="text-[#FF6B6B]">kat</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Arena mexicana pensada para el hogar mexicano. 
                Para gatos felices y familias tranquilas.
              </p>
            </div>
            
            {/* Social media */}
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 hover:bg-[#005677] rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-[#005677] rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-[#005677] rounded-full flex items-center justify-center transition-colors">
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Productos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Arena Clásica</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Arena Premium</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Arena Natural</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Accesorios</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Calculadora</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Ayuda</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Tips y Consejos</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Encuentra tu Tienda</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Garantía</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#FF6B6B]" />
                <span>55-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#FF6B6B]" />
                <span>hola@mohhikat.mx</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#FF6B6B] mt-1 flex-shrink-0" />
                <span className="text-sm">Ciudad de México, México</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-white font-medium mb-3">Newsletter</h5>
              <FooterNewsletter />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-500">
              © 2025 Mohhikat. Todos los derechos reservados. Hecho con{' '}
              <Heart className="inline h-4 w-4 text-[#FF6B6B] fill-current" />{' '}
              en México.
            </div>
            
            <div className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#FF6B6B] transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-500 hover:text-[#FF6B6B] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-[#FF6B6B] transition-colors">
                Aviso de Privacidad
              </a>
            </div>
          </div>

          {/* Mexican pride */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <div className="text-sm text-gray-500">
              🇲🇽 Orgullosamente mexicana • Calidad garantizada • Para todas las etapas 🇲🇽
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
