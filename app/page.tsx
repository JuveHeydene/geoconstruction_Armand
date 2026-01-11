import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Users, Award } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 overflow-hidden">
        {/* Effets décoratifs */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Géoconstruction</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                d'Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Expert en études géotechniques et réalisation de projets de construction à Yaoundé, Cameroun.
              Des solutions durables adaptées aux spécificités locales.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/projects"
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <span>Voir nos réalisations</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Nos Services Spécialisés
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Une gamme complète de services pour assurer la réussite de vos projets de construction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                Études Géotechniques
              </h3>
              <p className="text-gray-600 mb-4">
                Analyses approfondies des sols, études de faisabilité, et recommandations techniques adaptées aux conditions camerounaises.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-2" size={18} />
                  <span>Caractérisation des sols</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-2" size={18} />
                  <span>Études de portance</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-2" size={18} />
                  <span>Recommandations de fondation</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📐</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                Conception de Projets
              </h3>
              <p className="text-gray-600 mb-4">
                Plans détaillés et stratégies d'exécution optimisées pour garantir la viabilité et la durabilité de votre projet.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-2" size={18} />
                  <span>Plans techniques détaillés</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-2" size={18} />
                  <span>Optimisation des coûts</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-2" size={18} />
                  <span>Respect des normes locales</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-navy-800 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                Réalisation & Supervision
              </h3>
              <p className="text-gray-600 mb-4">
                Exécution professionnelle avec suivi qualité rigoureux et respect des délais pour des résultats garantis.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-2" size={18} />
                  <span>Supervision de chantier</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-2" size={18} />
                  <span>Contrôle qualité continu</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-2" size={18} />
                  <span>Gestion des délais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Nous Choisir */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Pourquoi choisir GeoConstruction ?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Avec plus de 10 ans d'expérience dans le secteur de la géoconstruction au Cameroun, 
                nous combinons expertise technique et connaissance locale pour des résultats exceptionnels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Expertise locale certifiée</h4>
                    <p className="text-gray-600">
                      Connaissance approfondie des sols et conditions géologiques spécifiques à Yaoundé et au Cameroun.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Équipe hautement qualifiée</h4>
                    <p className="text-gray-600">
                      Ingénieurs, géologues et techniciens certifiés avec une expertise reconnue dans toute l'Afrique centrale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Engagement qualité total</h4>
                    <p className="text-gray-600">
                      Respect strict des normes internationales avec une attention particulière à la durabilité et à la sécurité.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistiques */}
            <div className="bg-gradient-to-br from-navy-800 to-blue-900 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Notre Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-blue-200">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-blue-200">Ans d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-blue-200">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-blue-200">Support technique</div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white/10 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Basé à Yaoundé</h4>
                    <p className="text-blue-200 text-sm">Quartier Nyom</p>
                  </div>
                </div>
                <p className="text-blue-100">
                  Notre implantation à Yaoundé nous permet une réactivité optimale et une connaissance parfaite des spécificités locales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à concrétiser votre projet de construction ?
          </h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une étude préliminaire gratuite et un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-navy-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/projects"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Voir nos réalisations
            </Link>
          </div>
          <p className="mt-8 text-blue-300">
            Ou appelez-nous directement au <span className="font-semibold">+237 677 123 456</span>
          </p>
        </div>
      </section>
    </>
  )
}