import { Building2, Target, Globe2, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero About */}
      <section className="bg-gradient-to-br from-navy-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Nous</h1>
          <p className="text-xl text-blue-200 max-w-3xl">
            GeoConstruction, votre partenaire de confiance en géoconstruction au Cameroun depuis 2013.
            Expertise, innovation et engagement au service de vos projets.
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fondée en 2013 par M. Armand, ingénieur géotechnicien de formation, 
                  GeoConstruction est née d'une vision : apporter des solutions de construction 
                  durables et adaptées aux spécificités du sol camerounais.
                </p>
                <p>
                  Basée dans le quartier Nyom à Yaoundé, notre entreprise a rapidement gagné 
                  la confiance des promoteurs immobiliers et des particuliers grâce à notre 
                  expertise technique et notre engagement qualité.
                </p>
                <p>
                  Aujourd'hui, avec plus de 50 projets réalisés à travers le Cameroun, 
                  nous continuons d'innover et de nous adapter aux défis géotechniques 
                  locaux pour garantir la sécurité et la durabilité de chaque construction.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2013</div>
                    <div className="text-gray-700">Année de création</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-700">Experts techniques</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-700">Projets réalisés</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                    <div className="text-gray-700">Régions couvertes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">
            Nos Valeurs Fondamentales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Excellence Technique</h3>
              <p className="text-gray-600">
                Nous nous engageons à fournir des services de la plus haute qualité technique, 
                en utilisant les dernières technologies et méthodologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Engagement Client</h3>
              <p className="text-gray-600">
                La satisfaction de nos clients est notre priorité. Nous écoutons, 
                conseillons et accompagnons chaque projet avec dévouement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Globe2 className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Développement Durable</h3>
              <p className="text-gray-600">
                Nous intégrons les principes du développement durable dans tous 
                nos projets pour préserver l'environnement et les ressources.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Innovation Continue</h3>
              <p className="text-gray-600">
                Nous investissons continuellement dans la recherche et l'innovation 
                pour améliorer nos services et répondre aux nouveaux défis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">
            Notre Équipe de Direction
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full mb-6"></div>
              <h3 className="text-xl font-semibold text-navy-900">Armand</h3>
              <p className="text-blue-600 mb-2">Fondateur & Directeur Général</p>
              <p className="text-gray-600">
                Ingénieur géotechnicien avec 15 ans d'expérience, expert en sols tropicaux.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full mb-6"></div>
              <h3 className="text-xl font-semibold text-navy-900">Marie Ngo</h3>
              <p className="text-blue-600 mb-2">Directrice Technique</p>
              <p className="text-gray-600">
                Spécialiste en génie civil avec expertise en structures complexes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-navy-400 to-blue-300 rounded-full mb-6"></div>
              <h3 className="text-xl font-semibold text-navy-900">Samuel Tchoumi</h3>
              <p className="text-blue-600 mb-2">Chef de Projets</p>
              <p className="text-gray-600">
                Gestionnaire de projets certifié avec expertise en coordination de chantiers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}