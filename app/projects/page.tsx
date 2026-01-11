import { MapPin, Calendar, Users } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "Complexe Résidentiel Les Berges",
    category: "Résidentiel",
    location: "Yaoundé, Bastos",
    year: 2023,
    description: "Étude géotechnique complète pour un complexe de 50 appartements.",
    imageColor: "from-blue-500 to-cyan-400",
    client: "Promotion Immobilière CI",
    duration: "3 mois",
    team: "5 experts"
  },
  {
    id: 2,
    title: "Centre Commercial Bonamoussadi",
    category: "Commercial",
    location: "Douala, Bonamoussadi",
    year: 2022,
    description: "Conception et supervision des fondations pour un centre commercial de 3 étages.",
    imageColor: "from-green-500 to-emerald-400",
    client: "Groupe Commercial SA",
    duration: "6 mois",
    team: "8 experts"
  },
  {
    id: 3,
    title: "Hôpital Régional de l'Ouest",
    category: "Public",
    location: "Bafoussam",
    year: 2023,
    description: "Expertise géotechnique pour les infrastructures hospitalières.",
    imageColor: "from-purple-500 to-pink-400",
    client: "Ministère de la Santé",
    duration: "8 mois",
    team: "12 experts"
  },
  {
    id: 4,
    title: "Usine Agro-industrielle",
    category: "Industriel",
    location: "Edea",
    year: 2021,
    description: "Étude de sol et recommandations pour fondations d'installations lourdes.",
    imageColor: "from-orange-500 to-red-400",
    client: "AgroCam Industries",
    duration: "4 mois",
    team: "6 experts"
  },
  {
    id: 5,
    title: "Campus Universitaire",
    category: "Éducatif",
    location: "Yaoundé, Ngoa-Ekelle",
    year: 2022,
    description: "Supervision géotechnique pour la construction de 5 bâtiments universitaires.",
    imageColor: "from-indigo-500 to-blue-400",
    client: "Université de Yaoundé I",
    duration: "10 mois",
    team: "10 experts"
  },
  {
    id: 6,
    title: "Pont Routier",
    category: "Infrastructure",
    location: "Mbalmayo",
    year: 2023,
    description: "Analyse géotechnique pour les fondations de pont sur 200 mètres.",
    imageColor: "from-teal-500 to-green-400",
    client: "Ministère des Travaux Publics",
    duration: "5 mois",
    team: "7 experts"
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Projets</h1>
          <p className="text-xl text-blue-200 max-w-3xl">
            Découvrez nos réalisations à travers le Cameroun. Chaque projet est une preuve 
            de notre expertise et de notre engagement envers l'excellence.
          </p>
        </div>
      </section>

      {/* Liste des Projets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900">
              Projets Réalisés
            </h2>
            <p className="text-gray-600 mt-2">
              {projects.length} projet{projects.length > 1 ? 's' : ''} réalisé{projects.length > 1 ? 's' : ''} avec succès
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image placeholder avec gradient */}
                <div className={`h-48 bg-gradient-to-r ${project.imageColor} relative`}>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  {/* Infos */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <MapPin size={18} className="mr-3 text-gray-400" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar size={18} className="mr-3 text-gray-400" />
                      <span>Année : {project.year}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users size={18} className="mr-3 text-gray-400" />
                      <span>Équipe : {project.team}</span>
                    </div>
                  </div>

                  {/* Client et durée */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium text-gray-800">{project.client}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Durée</p>
                      <p className="font-medium text-gray-800">{project.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Projets */}
      <section className="py-16 bg-gradient-to-r from-navy-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Vous avez un projet de construction ?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Confiez-nous l'étude géotechnique et la supervision de votre prochain projet.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-navy-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Discuter de votre projet
          </Link>
        </div>
      </section>
    </div>
  )
}