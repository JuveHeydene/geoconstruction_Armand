import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'GeoConstruction Cameroun - Expert en géoconstruction à Yaoundé',
  description: 'Entreprise spécialisée en géoconstruction à Yaoundé, Cameroun. Études géotechniques, conception et réalisation de projets de construction.',
  keywords: 'géoconstruction, Cameroun, Yaoundé, Nyom, études géotechniques, construction, ingénierie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}