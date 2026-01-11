import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1: À propos */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GC</span>
              </div>
              <h3 className="text-xl font-bold">GeoConstruction</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Expert en géoconstruction à Yaoundé, Cameroun. Nous transformons vos projets de construction en réalités durables et sécurisées.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-navy-800 p-2 rounded-lg hover:bg-navy-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-navy-800 p-2 rounded-lg hover:bg-navy-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-navy-800 p-2 rounded-lg hover:bg-navy-700 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  À Propos de nous
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Nos Projets
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Nos Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Études géotechniques</li>
              <li className="text-gray-300">Conception de projets</li>
              <li className="text-gray-300">Supervision de chantier</li>
              <li className="text-gray-300">Expertise technique</li>
              <li className="text-gray-300">Contrôle qualité</li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Contactez-nous</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-300">
                  Quartier Nyom<br />
                  Yaoundé, Cameroun
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={20} />
                <span className="text-gray-300">+237 677 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={20} />
                <span className="text-gray-300">contact@geoconstruction-cm.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-blue-400" size={20} />
                <span className="text-gray-300">Lun - Ven: 8h00 - 18h00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} GeoConstruction Cameroun. Tous droits réservés.</p>
          <p className="mt-2 text-sm">Site conçu pour les besoins de géoconstruction au Cameroun</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer