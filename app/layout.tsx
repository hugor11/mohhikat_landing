
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohhikat - Arena para Gatos Mexicana | Máxima Absorción y Control de Olores',
  description: 'Arena pensada para el hogar mexicano, con máxima absorción y control de olores. ¡Para gatos felices y familias tranquilas! Orgullosamente mexicana.',
  keywords: 'arena para gatos, arena mexicana, control olores, absorción, Mohhikat, gatos felices',
  authors: [{ name: 'Mohhikat' }],
  openGraph: {
    title: 'Mohhikat - Arena para Gatos Mexicana',
    description: 'Arena pensada para el hogar mexicano, con máxima absorción y control de olores',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
