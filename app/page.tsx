import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, Lock, Sparkles } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-4">
      <main className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center">Enseignant3.0</h1>
        <p className="text-xl text-center text-gray-600">
          Assistant IA pour Enseignants
        </p>
        <p className="text-sm text-center text-green-600 font-medium mt-2">
          Bienvenue dans notre outil gratuit pour nos bêta-testeurs !
        </p>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Accédez à nos outils IA</CardTitle>
            <CardDescription>Connectez-vous ou inscrivez-vous pour utiliser nos outils pédagogiques innovants.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="/connexion">
                Connexion <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/inscription">
                Inscription <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="Générateur de séquences"
            description="Créez des séquences pédagogiques complètes en quelques clics."
          />
          <FeatureCard
            title="Générateur de vocabulaire"
            description="Obtenez des listes de vocabulaire adaptées à vos besoins."
          />
          <FeatureCard
            title="Créateur de QCM"
            description="Générez des questionnaires à choix multiples personnalisés."
          />
          <FeatureCard
            title="Assistant de différenciation"
            description="Adaptez vos contenus pour répondre aux besoins de chaque élève."
          />
        </div>
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-blue-500" />
              Accédez à nos autres outils
            </CardTitle>
            <CardDescription className="text-gray-700">
              Découvrez notre suite complète d'outils pédagogiques innovants. Créez un compte gratuit pour explorer toutes nos fonctionnalités.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/inscription">
                Commencer gratuitement <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      <footer className="mt-16 text-center text-gray-500">
        <p>&copy; 2024 Enseignant3.0. Tous droits réservés.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2 flex items-center">
        <Lock className="mr-2 h-4 w-4" /> {title}
      </h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}