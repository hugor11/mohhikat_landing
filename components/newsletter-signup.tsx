
'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState<string>('')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      alert('Por favor ingresa tu email')
      return
    }
    
    if (!email.includes('@')) {
      alert('Por favor ingresa un email válido')
      return
    }
    
    // Simulated newsletter signup
    alert('¡Gracias! Te has suscrito exitosamente a nuestros tips semanales 🐱')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu-email@ejemplo.com"
        className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-petrol-blue focus:ring-2 focus:ring-petrol-blue focus:ring-opacity-20"
      />
      <button 
        type="submit"
        className="bg-coral hover:bg-coral-light text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
      >
        Suscribirme
      </button>
    </form>
  )
}
