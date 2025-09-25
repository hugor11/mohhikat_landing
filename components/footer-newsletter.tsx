
'use client'

import { useState } from 'react'

export default function FooterNewsletter() {
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
    
    alert('¡Gracias! Te has suscrito exitosamente 🐱')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu email"
        className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-[#005677] text-sm"
      />
      <button 
        type="submit"
        className="bg-[#FF6B6B] hover:bg-[#FF8E8E] px-4 py-2 rounded-r-lg text-white font-medium transition-colors"
      >
        ✓
      </button>
    </form>
  )
}
