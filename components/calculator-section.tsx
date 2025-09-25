
'use client'

import { useState, useEffect } from 'react'
import { Calculator, Cat, ShoppingBag } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'

export default function CalculatorSection() {
  const [numCats, setNumCats] = useState<number>(1)
  const [monthlyUsage, setMonthlyUsage] = useState<number>(0)
  const [monthlyCost, setMonthlyCost] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  // Cálculos basados en datos reales de uso de arena para gatos
  useEffect(() => {
    // Un gato promedio usa aproximadamente 2-3 kg de arena por mes
    const kgPerCatPerMonth = 2.5
    const pricePerKg = 12 // Precio aproximado por kg en pesos mexicanos
    
    const usage = numCats * kgPerCatPerMonth
    const cost = usage * pricePerKg
    
    setMonthlyUsage(Math.round(usage * 10) / 10)
    setMonthlyCost(Math.round(cost))
  }, [numCats])

  const handleCatChange = (change: number) => {
    const newValue = Math.max(1, Math.min(10, numCats + change))
    setNumCats(newValue)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-mint-green rounded-2xl mb-6">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Calculadora de Consumo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Cuánta arena necesitas? <span className="mint-green-dark font-semibold">¡Calcula tu consumo mensual</span> y descubre cuánto ahorras con Mohhikat.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-gray-50 to-white shadow-2xl border-0">
            {/* Cat selector */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Cuántos michitos tienes en casa?
              </h3>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleCatChange(-1)}
                  disabled={numCats <= 1}
                  className="w-12 h-12 rounded-full border-2 border-petrol-blue text-petrol-blue hover:bg-petrol-blue hover:text-white disabled:opacity-50"
                >
                  -
                </Button>
                
                <div className="flex items-center space-x-2 bg-petrol-blue text-white px-6 py-4 rounded-2xl shadow-lg min-w-[150px]">
                  <Cat className="h-6 w-6" />
                  <span className="text-2xl font-bold">{numCats}</span>
                  <span className="text-lg">{numCats === 1 ? 'gato' : 'gatos'}</span>
                </div>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleCatChange(1)}
                  disabled={numCats >= 10}
                  className="w-12 h-12 rounded-full border-2 border-petrol-blue text-petrol-blue hover:bg-petrol-blue hover:text-white disabled:opacity-50"
                >
                  +
                </Button>
              </div>

              {/* Visual cats */}
              <div className="flex justify-center space-x-2 mb-8">
                {Array.from({ length: Math.min(numCats, 8) }).map((_, index) => (
                  <div key={index} className="text-3xl animate-bounce" style={{ animationDelay: `${index * 100}ms` }}>
                    🐱
                  </div>
                ))}
                {numCats > 8 && (
                  <div className="text-2xl text-gray-500">
                    +{numCats - 8}
                  </div>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Monthly usage */}
              <div className="text-center p-6 bg-mint-green-light bg-opacity-10 rounded-2xl">
                <ShoppingBag className="h-12 w-12 text-mint-green-dark mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Consumo Mensual
                </h4>
                <div className="text-3xl font-bold mint-green-dark mb-2">
                  {monthlyUsage} kg
                </div>
                <p className="text-gray-600">
                  de arena Mohhikat
                </p>
              </div>

              {/* Monthly cost */}
              <div className="text-center p-6 bg-mint-pastel bg-opacity-10 rounded-2xl">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Costo Mensual Aprox.
                </h4>
                <div className="text-3xl font-bold mint-green mb-2">
                  ${monthlyCost} MXN
                </div>
                <p className="text-gray-600">
                  con Mohhikat
                </p>
              </div>
            </div>

            {/* Savings comparison */}
            <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-200">
              <div className="text-center">
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  ¡Ahorro vs otras marcas! 🎉
                </h4>
                <div className="text-lg text-green-700">
                  Con Mohhikat ahorras aproximadamente <span className="font-bold">${Math.round(monthlyCost * 0.2)} MXN al mes</span> comparado con marcas premium.
                </div>
                <div className="mt-2 text-sm text-green-600">
                  Eso son <span className="font-semibold">${Math.round(monthlyCost * 0.2 * 12)} MXN al año</span> que puedes usar para consentir más a tu michito 🐾
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-mint-green hover:bg-mint-green-light text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const storesSection = document.querySelector('[data-section="stores"]');
                  storesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                ¡Comprar mi Cantidad Ideal!
              </Button>
            </div>
          </Card>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            * Los cálculos son aproximados y pueden variar según el tamaño del gato, frecuencia de limpieza y preferencias individuales. 
            Mohhikat dura más que la arena promedio gracias a su superior absorción.
          </p>
        </div>
      </div>
    </section>
  )
}
