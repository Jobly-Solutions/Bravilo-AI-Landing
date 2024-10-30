'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Cpu, Sparkles, MessageSquare, Zap, ArrowRight, ExternalLink, Shield, Code, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000304]">
      {/* Announcement Banner */}
      <div className="bg-[#00B7D4] text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span className="text-sm">¡Nuevo! Crea tu primer agente de IA en menos de 2 minutos</span>
          </div>
          <Link 
            href="#" 
            className="text-sm hover:underline inline-flex items-center gap-1"
          >
            Aprende más <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <header className="border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo-simple.png"
                  alt="Bravilo Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-white font-bold text-xl">Bravilo</span>
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                <Link href="#caracteristicas" className="text-gray-300 hover:text-white transition-colors">
                  Características
                </Link>
                <Link href="#agentes" className="text-gray-300 hover:text-white transition-colors">
                  Agentes
                </Link>
                <Link href="#precios" className="text-gray-300 hover:text-white transition-colors">
                  Precios
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/login" 
                className="text-gray-300 hover:text-white transition-colors px-4 py-2"
              >
                Iniciar sesión
              </Link>
              <Link 
                href="/signup"
                className="bg-[#00B7D4] hover:bg-[#00B7D4]/90 text-white px-4 py-2 rounded-md transition-colors"
              >
                Comenzar gratis
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[600px]">
          <div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,183,212,0.15),transparent_50%)]" 
            style={{ pointerEvents: 'none' }}
            aria-hidden="true"
          />
          
          <div className="container relative mx-auto px-4 py-20 md:py-32">
            {/* Floating Agent Cards */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute left-10 top-1/3 hidden lg:block"
              style={{ zIndex: 20 }}
            >
              <Card className="bg-black/40 backdrop-blur-sm border-gray-800/50 p-4 flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-[#00B7D4]/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#00B7D4]" />
                </div>
                <div>
                  <p className="text-white font-medium">Asistente de Ventas</p>
                  <p className="text-sm text-gray-400">97% de efectividad</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute right-10 top-1/2 hidden lg:block"
              style={{ zIndex: 20 }}
            >
              <Card className="bg-black/40 backdrop-blur-sm border-gray-800/50 p-4 flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-[#00B7D4]/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#00B7D4]" />
                </div>
                <div>
                  <p className="text-white font-medium">Soporte 24/7</p>
                  <p className="text-sm text-gray-400">Respuesta inmediata</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </Card>
            </motion.div>

            {/* Main Content */}
            <div className="relative max-w-4xl mx-auto text-center" style={{ zIndex: 30 }}>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
              >
                Transforma tu equipo con{' '}
                <span className="text-[#00B7D4]">
                  Agentes de IA
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
              >
                Crea e implementa agentes de IA personalizados sin código. 
                Automatiza tareas, mejora la productividad y escala tu operación.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Link 
                  href="/signup"
                  className="bg-[#00B7D4] hover:bg-[#00B7D4]/90 text-white px-8 py-3 rounded-md transition-colors text-lg font-medium"
                >
                  Comenzar gratis
                </Link>
                <Link 
                  href="/demo"
                  className="border border-gray-800 hover:border-gray-700 text-white px-8 py-3 rounded-md transition-colors text-lg font-medium"
                >
                  Ver demo
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-4 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#00B7D4]">✨</span>
                  <span>Sin tarjeta de crédito</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-800" />
                <div className="flex items-center gap-2">
                  <span className="text-[#00B7D4]">🚀</span>
                  <span>Configuración en 2 minutos</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platform Preview */}
        <section className="py-20 border-t border-gray-800/50 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Image
                src="/dashboard-bravilo-ai-2.png"
                alt="Bravilo Platform Interface"
                width={1200}
                height={675}
                className="rounded-lg border border-gray-800/50 shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Integration Logos */}
        <section className="py-16 border-t border-gray-800/50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-semibold text-white mb-2">
        Conecta con tus herramientas favoritas
      </h2>
      <p className="text-gray-400">
        Integra Bravilo con las plataformas que ya utilizas
      </p>
    </div>
   
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
      {[
         { name: 'WhatsApp', url: 'https://whatsapp.com', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
         { name: 'Messenger', url: 'https://messenger.com', img: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg' },
         { name: 'Zapier', url: 'https://zapier.com', img: 'https://images.ctfassets.net/lzny33ho1g45/6YoKV9RS3goEx54iFv96n9/78100cf9cba971d04ac52d927489809a/logo-symbol.png' },
         { name: 'Google Drive', url: 'https://drive.google.com', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1024px-Google_Drive_icon_%282020%29.svg.png' },
        { name: 'WordPress', url: 'https://wordpress.com', img: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg' },
        { name: 'Notion', url: 'https://notion.so', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg' },
        { name: 'YouTube', url: 'https://youtube.com', img: 'https://www.svgrepo.com/show/13671/youtube.svg' },
        { name: 'Slack', url: 'https://slack.com', img: 'logos/slack.webp' },
        
      ].map((tool) => (
        <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
          <div className="w-24 h-16 bg-gray-800/30 rounded-lg flex items-center justify-center p-4">
          <img
              src={tool.img}
              alt={`${tool.name} logo`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <span className="text-gray-400 text-sm mt-2">{tool.name}</span>
        </a>
      ))}
    </div>
   
  </div>
</section>



        {/* Features Section */}
        <section className="py-20 border-t border-gray-800/50 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Resuelve el 80% de tus consultas al instante
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Bravilo utiliza modelos de IA generativa para proporcionar respuestas precisas y seguras,
                reduciendo instantáneamente el volumen de tickets de tu equipo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    title: "Respuestas instantáneas 24/7",
                    description: "Ingesta contenido de múltiples fuentes incluyendo documentos, sitios web y APIs.",
                    icon: MessageSquare
                  },
                  {
                    title: "IA Confiable",
                    description: "Con salvaguardas incorporadas que garantizan respuestas precisas y seguras.",
                    icon: Shield
                  },
                  {
                    title: "Fácil integración",
                    description: "Implementa el widget en tu sitio web en minutos, sin conocimientos técnicos.",
                    icon: Code
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-lg bg-black/40 border border-gray-800/50">
                    <div className="w-12 h-12 rounded-lg bg-[#00B7D4]/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[#00B7D4]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <Image
                  src="/dashboard-bravilo-ai-conversations.png"
                  alt="Chat Interface"
                  width={600}
                  height={800}
                  className="rounded-lg border border-gray-800/50 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 border-t border-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tres pasos para potenciar tu negocio
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comienza a utilizar agentes de IA en minutos, no en semanas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Bot,
                  title: "1. Importa tus datos",
                  description: "Conecta tus fuentes de datos: documentos, sitios web, APIs y más."
                },
                {
                  icon: Cpu,
                  title: "2. Personaliza tu agente",
                  description: "Define el comportamiento, personalidad y objetivos de tu agente."
                },
                {
                  icon: Sparkles,
                  title: "3. Implementa y escala",
                  description: "Integra tu agente en múltiples canales y escala según  necesites."
                }
              ].map((step, i) => (
                <Card 
                  key={i} 
                  className="bg-black/40 border-gray-800/50 p-6 hover:border-[#00B7D4]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,212,0.1)]"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#00B7D4]/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-[#00B7D4]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-gray-800/50 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comienza a crear tu primer agente ahora
              </h2>
              <p className="text-gray-400 mb-8">
                Únete a cientos de empresas que ya están utilizando Bravilo para automatizar sus operaciones
              </p>
              <form 
                onSubmit={(e) => {
                  e.preventDefault()
                }} 
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Input 
                  type="url"
                  placeholder="Ingresa tu sitio web" 
                  className="max-w-sm bg-black/40 border-gray-800/50 text-white placeholder:text-gray-500 focus:border-[#00B7D4] focus:ring-[#00B7D4]"
                />
                <button
                  type="submit"
                  className="bg-[#00B7D4] hover:bg-[#00B7D4]/90 text-white px-6 py-2 rounded-md transition-colors whitespace-nowrap font-medium"
                >
                  Crear agente
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-simple.png"
                alt="Bravilo Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-white">© 2024 Bravilo</span>
            </div>
            <nav className="flex gap-6">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Términos
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}