/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BarChart,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Clock,
  MessageCircleOff,
  PlayCircle,
  Smartphone,
  Star,
  TrendingDown,
  Users,
  Video,
} from 'lucide-react';

const CTA_URL = 'https://coincarriere.com/register?type=company';

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <img src="/logo.png" alt="CoinCarrière" className="h-10 w-auto" />
    </a>
  );
}

function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center gap-6">
          <a href="https://coincarriere.com/login" className="text-gray-600 hover:text-brand-navy font-medium text-sm transition-colors">
            Connexion
          </a>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-lime hover:bg-brand-lime-hover text-brand-navy font-bold py-2.5 px-6 rounded-lg transition-colors shadow-sm"
          >
            Essai Gratuit
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-blue"></span>
              Spécialisé Restauration & Hôtellerie
            </div>
            <h1 className="text-[3rem] font-bold text-brand-navy tracking-tight leading-[1.1] mb-6">
              Restaurateurs au Maroc :<br />
              <span className="text-brand-blue font-bold">
                Recrutez le bon profil en 48h
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Fini les profils inadaptés et le temps perdu. Attirez, triez et recrutez vos équipes en salle et en cuisine <strong>jusqu'à 4x plus vite</strong> avec CoinCarrière.
            </p>

            <div className="flex flex-row items-center gap-4">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-brand-lime hover:bg-brand-lime-hover text-brand-navy font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(180,220,2,0.39)] hover:shadow-[0_6px_20px_rgba(180,220,2,0.23)] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                Publier mon annonce gratuitement
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm font-medium text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={`https://images.unsplash.com/photo-1595273611364-7fc11c1df117?w=100&h=100&fit=crop&crop=faces&q=80&auto=format&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&v=${i}`} alt="Recruteur" />
                ))}
              </div>
              <p>Rejoignez +450 restaurateurs au Maroc</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-lime/20 blur-3xl rounded-full transform scale-110 -z-10"></div>
             {/* TOF Visual Representation */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white group">
              <img 
                src="/hero.png" 
                alt="Restaurateur montrant l'application CoinCarrière" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="bg-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-4">
                  <MessageCircleOff className="w-5 h-5" />
                  <span className="font-semibold text-sm">Arrêtez de gérer 150 messages non lus</span>
                </div>
                <h3 className="text-white text-2xl font-bold leading-tight drop-shadow-md">
                  Centralisez vos candidatures aujourd'hui.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="py-12 border-b border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
          Ils accélèrent leurs recrutements avec nous
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Simulated Logos - In a real app these would be actual brand logos */}
          <div className="flex items-center gap-2 text-xl font-bold font-serif"><div className="w-8 h-8 rounded bg-gray-300"></div> Le Marrakech</div>
          <div className="flex items-center gap-2 text-xl font-bold font-serif"><div className="w-8 h-8 rounded-full bg-gray-300"></div> Café Blanc</div>
          <div className="flex items-center gap-2 text-xl font-bold tracking-widest"><div className="w-8 h-8 rounded-sm bg-gray-300"></div> BISTROT 54</div>
          <div className="flex items-center gap-2 text-xl font-bold italic"><div className="w-8 h-8 rounded-full bg-gray-300"></div> La Rive</div>
          <div className="flex items-center gap-2 text-xl font-bold"><div className="w-8 h-8 rounded bg-gray-300"></div> Burger Station</div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      num: "1",
      title: "Publiez",
      desc: "Décrivez le poste en ligne en 2 minutes (Cuisinier, Serveur, Chef...)",
    },
    {
      num: "2",
      title: "Recevez",
      desc: "Les candidats du secteur qualifiés postulent directement.",
    },
    {
      num: "3",
      title: "Évaluez",
      desc: "Pipeline visuel, notes, profils vérifiés et planification d'entretiens.",
    },
    {
      num: "4",
      title: "Embauchez",
      desc: "Envoyez l'offre, suivez en temps réel et intégrez votre équipe.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Recruter n'a jamais été aussi simple
          </h2>
          <p className="text-lg text-gray-600">
            Une méthode en 4 étapes pour constituer votre brigade sans stress.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative mt-8 md:mt-0">
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 flex-1 w-full left-1/2">
                  <div className="h-0.5 w-full bg-gray-100 border-t-2 border-dashed border-gray-200"></div>
                </div>
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white border-2 border-brand-blue text-brand-blue rounded-full flex items-center justify-center text-xl font-bold mb-6 z-10 shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BofFeatures() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Trouvez les meilleurs candidats, laissez l'IA faire le tri.
          </h2>
          <p className="text-lg text-gray-600">
            Conçu spécifiquement pour absorber le volume des candidatures en restauration.
          </p>
        </div>

        {/* Feature 1: IA Sorting */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-brand-lime/20 blur-3xl rounded-full"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform -rotate-1">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue">
                   <BrainCircuit className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg text-brand-navy">Tri IA Automatique</h4>
                   <p className="text-sm text-gray-500">De la masse à la qualité</p>
                 </div>
               </div>
               
               <div className="flex items-center justify-between bg-slate-50 p-6 rounded-xl border border-dashed border-gray-200">
                 <div className="text-center">
                   <div className="text-4xl font-black text-gray-400 mb-1">100</div>
                   <div className="text-xs uppercase font-bold text-gray-500">CV Reçus (Bruts)</div>
                 </div>
                 <ChevronRight className="w-8 h-8 text-brand-lime" />
                 <div className="text-center relative">
                   <div className="absolute -inset-4 bg-brand-lime/20 blur-lg rounded-full"></div>
                   <div className="text-5xl font-black text-brand-blue relative z-10 mb-1">5</div>
                   <div className="text-xs uppercase font-bold text-brand-navy relative z-10">Profils Qualifiés</div>
                   <div className="text-[10px] text-gray-500 relative z-10">Scorés & Vérifiés</div>
                 </div>
               </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-brand-navy mb-4">Votre Restaurant recrute ? Laissez Coin Carrière s'en occuper.</h3>
            <p className="text-lg text-gray-600 mb-6">Ne perdez plus des heures à lire des CV inadaptés. Notre intelligence artificielle filtre les profils selon vos critères exacts de restauration (expérience, spécialité cuisine, langues).</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-lime shrink-0" />
                <span className="text-gray-700">Mise en avant des candidats avec un <strong>Score de Profil à 95%+</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-lime shrink-0" />
                <span className="text-gray-700">Identification des mentions fiables "Profil Vérifié par IA".</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 2: Video Interviews */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-brand-navy mb-4">Passez de la sélection à l'entretien en un clic.</h3>
            <p className="text-lg text-gray-600 mb-6">Simplifiez la logistique. Organisez des entretiens vidéo directement depuis la plateforme sans jongler entre les applications.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-lime shrink-0" />
                <span className="text-gray-700">Gagnez jusqu'à <strong>75% de temps</strong> sur vos processus.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-lime shrink-0" />
                <span className="text-gray-700">Visioconférences et suivi centralisés au même endroit.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-blue/10 blur-3xl rounded-full"></div>
            <div className="relative bg-brand-navy p-2 pt-6 rounded-[2rem] shadow-2xl border-4 border-gray-800 rotate-2 max-w-sm mx-auto">
               <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl"></div>
               <div className="bg-white rounded-[1.5rem] overflow-hidden">
                 <div className="bg-brand-blue text-white text-center py-3 text-sm font-bold">
                   Mardi 21 Avril - 10:30
                 </div>
                 <div className="p-6 text-center">
                   <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg">
                      <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&h=200&fit=crop&crop=faces&q=80" alt="Candidate" className="w-full h-full object-cover" />
                   </div>
                   <h4 className="font-bold text-brand-navy mb-1">Fatima Alami</h4>
                   <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-6">Chef de Partie</p>
                   
                   <div className="bg-brand-lime text-brand-navy font-bold py-4 px-6 rounded-xl flex flex-col items-center justify-center gap-1 shadow-md">
                     <Video className="w-6 h-6 mb-1" />
                     Rejoindre l'entretien vidéo
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function MofPromo() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full border-[40px] border-white/5 opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full border-[40px] border-brand-lime/10 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Prêt à réduire votre temps de recrutement ?
            </h2>
            <div className="inline-block bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-black text-brand-lime mb-2">Pack Découverte Restaurateur</h3>
              <p className="text-blue-100 font-medium text-lg mb-4">Zéro risque, Zéro Engagement.</p>
              <ul className="text-blue-200 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Star className="w-4 h-4 text-brand-lime fill-current" /> Publication de votre première offre</li>
                <li className="flex items-center gap-2"><Star className="w-4 h-4 text-brand-lime fill-current" /> Accès à la base CV Restauration</li>
                <li className="flex items-center gap-2"><Star className="w-4 h-4 text-brand-lime fill-current" /> Tri assisté par IA</li>
              </ul>
            </div>
            
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-brand-lime hover:bg-brand-lime-hover text-brand-navy font-bold text-lg py-4 px-8 rounded-xl transition-transform hover:scale-105"
            >
              ESSAYER GRATUITEMENT
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="hidden lg:block relative">
             <img 
               src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1000&auto=format&fit=crop" 
               alt="Restaurateur confiant" 
               className="rounded-2xl shadow-2xl ring-1 ring-white/10"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
             
             {/* Floating UI Element */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4">
               <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                 <TrendingDown className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-sm font-bold text-gray-900">Temps de recrutement</p>
                 <p className="text-xl font-black text-green-600">-75% cette semaine</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  const features = [
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Pipeline visuel",
      desc: "Suivez chaque candidature d'un coup d'oeil grâce à notre tableau de bord Kanban intuitif.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Travail en équipe",
      desc: "Partagez les profils avec vos chefs de salle ou de cuisine, décidez ensemble.",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Entretiens intégrés",
      desc: "Planifiez et réalisez vos entretiens vidéo directement depuis la plateforme.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Page carrière",
      desc: "Votre page de recrutement aux couleurs de votre restaurant, auto-générée.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Analytics",
      desc: "Mesurez le temps de recrutement et optimisez le coût par embauche.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Accompagnement",
      desc: "Un conseiller dédié spécialiste de la restauration à chaque étape.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Tout ce qu'il faut pour bâtir une équipe solide
          </h2>
          <p className="text-lg text-gray-600">
            Faites passer votre marque employeur au niveau supérieur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-brand-blue mb-6">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{feat.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-24 bg-brand-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-multiply"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Votre prochain recrutement commence ici
        </h2>
        <p className="text-xl text-blue-100 mb-10">
          Publiez votre première annonce en moins de 5 minutes.
        </p>
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center gap-2 bg-brand-lime hover:bg-brand-lime-hover text-brand-navy font-bold text-lg md:text-xl py-5 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Publier votre annonce maintenant
          <ChevronRight className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="/" className="inline-block bg-white p-2 rounded-xl opacity-90 hover:opacity-100 transition-opacity">
           <img src="/logo.png" alt="CoinCarrière" className="h-8 w-auto" />
        </a>
        <p className="text-sm">
          © {new Date().getFullYear()} CoinCarrière. Tous droits réservés.
        </p>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          <a href="#" className="hover:text-white transition-colors">Conditions générales</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans text-gray-900 selection:bg-brand-lime selection:text-brand-navy">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Process />
        <BofFeatures />
        <MofPromo />
        <Advantages />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
