'use client'

import { useState, useEffect } from 'react'
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Plus, Minus, Calculator } from 'lucide-react'

export default function CalculatorSection() {
  const [numCats, setNumCats] = useState(1)
  const [monthlyUsage, setMonthlyUsage] = useState(0)
  const [monthlyCost, setMonthlyCost] = useState(0)

  const handleCatChange = (delta) => {
    setNumCats(prev => Math.max(1, Math.min(10, prev + delta)))
  }

  useEffect(() => {
    const usage = numCats * 3.5
    const costPerKg = 85
    const cost = Math.round(usage * costPerKg)
    
    setMonthlyUsage(Math.round(usage))
    setMonthlyCost(cost)
  }, [numCats])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="bg-mint-green text-white p-4 rounded-2xl shadow-lg mb-8 inline-block">
            <p className="text-lg font-bold flex items-center gap-2">
              ¡La elección es clara! 
              <span className="text-2xl">🎯</span>
            </p>
            <p className="text-sm mt-2">
              Mohhikat ofrece más beneficios por menos dinero. ¡Es la decisión inteligente!
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-mint-green rounded-2xl mb-6">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Calculadora de Consumo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Cuánta arena necesitas? <span className="text-mint-green-dark font-semibold">¡Calcula tu consumo mensual</span> y descubre cuánto ahorras con Mohhikat.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              ¿Cuántos michitos tienes en casa?
            </h3>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <Button
                onClick={() => handleCatChange(-1)}
                disabled={numCats <= 1}
                className="w-12 h-12 rounded-full bg-mint-green hover:bg-mint-green-dark disabled:opacity-50"
              >
                <Minus className="h-5 w-5 text-white" />
              </Button>
              
              <div className="text-6xl">🐱</div>
              
              <div className="text-center min-w-[100px]">
                <div className="text-4xl font-bold text-mint-green-dark mb-2">
                  {numCats}
                </div>
                <div className="text-sm text-gray-600">
                  {numCats === 1 ? 'michito' : 'michitos'}
                </div>
              </div>
              
              <div className="text-6xl">🐱</div>
              
              <Button
                onClick={() => handleCatChange(1)}
                disabled={numCats >= 10}
                className="w-12 h-12 rounded-full bg-mint-green hover:bg-mint-green-dark disabled:opacity-50"
              >
                <Plus className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-mint-green to-mint-green-dark text-white border-0">
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="text-lg font-bold mb-2">Consumo Mensual</h4>
                <div className="text-3xl font-black mb-2">{monthlyUsage} kg</div>
                <p className="text-sm opacity-90">de arena Mohhikat</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-mint-pastel to-mint-green text-mint-green-dark border-0">
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-lg font-bold mb-2">Costo Mensual Aprox.</h4>
                <div className="text-3xl font-black mb-2 text-mint-green">${monthlyCost} MXN</div>
                <p className="text-sm">con Mohhikat</p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8 p-4 bg-mint-green/10 rounded-2xl">
            <p className="text-mint-green-dark font-medium">
              💡 <strong>¡Ahorra hasta 30%</strong> comparado con otras marcas premium y obtén mejor calidad!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
