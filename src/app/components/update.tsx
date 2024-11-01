
'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Bot, 
  Cpu, 
  Sparkles, 
  MessageSquare, 
  Zap, 
  ArrowRight, 
  ExternalLink, 
  Shield, 
  Code, 
  Check, 
  Star, 
  Play,
  Inbox,
  Database,
  FileText,
  BarChart2,
  Mail,
  Users,
  Settings,
  FileCode2,
  Search,
  Plus,
  MoreHorizontal
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const sidebarItems = [
  { icon: Inbox, label: 'Inbox', count: 3 },
  { icon: Bot, label: 'Agents', active: true },
  { icon: Database, label: 'Datastores' },
  { icon: FileText, label: 'Forms' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: Mail, label: 'Email Inboxes' },
  { icon: Users, label: 'Contacts' },
  { icon: Settings, label: 'Settings' },
  { icon: FileCode2, label: 'Documentation' },
]

export default function Component() {
  const [showDashboard, setShowDashboard] = useState(false)
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null)

  const toggleDashboard = () => setShowDashboard(!showDashboard)
  const toggleAgent = (name: string) => setExpandedAgent(expandedAgent === name ? null : name)

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
      <header className="border-b border-gray-800/50 sticky top-0 bg-[#000304]/80 backdrop-blur-sm z-50">
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
                <Link href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">
                  Cómo funciona
                </Link>
                <Link href="#precios" className="text-gray-300 hover:text-white transition-colors">
                  Precios
                </Link>
                <Link href="#testimonios" className="text-gray-300 hover:text-white transition-colors">
                  Testimonios
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
        <section className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
          <div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,183,212,0.15),transparent_50%)]" 
            style={{ pointerEvents: 'none' }}
            aria-hidden="true"
          />
          
          <div className="container relative mx-auto px-4 py-20 md:py-32 flex items-center">
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
                Revoluciona tu negocio con{' '}
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
                Multiplica tu productividad, reduce costos y mejora la satisfacción del cliente con agentes de IA personalizados. Sin código. Sin complicaciones. Resultados inmediatos.
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
                  Prueba gratis por 14 días
                </Link>
                <Link 
                  href="/demo"
                  className="border border-gray-800 hover:border-gray-700 text-white px-8 py-3 rounded-md transition-colors text-lg font-medium"
                >
                  Ver demostración
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

        {/* Why Choose Bravilo Section */}
        <section className="py-20 border-t border-gray-800/50 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              ¿Por qué elegir Bravilo?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "IA de vanguardia",
                  description: "Utiliza los modelos de IA más avanzados para ofrecer respuestas precisas y relevantes.",
                  icon: Cpu
                },
                {
                  title: "Personalización total",
                  description: "Adapta tus agentes a tu marca y necesidades específicas sin escribir una línea de código.",
                  icon: Sparkles
                },
                {
                  title: "Integración sin problemas",
                  description: "Conecta Bravilo con tus herramientas favoritas en cuestión de minutos.",
                  icon: Code
                },
                {
                  title: "Escalabilidad empresarial",
                  description: "Crece sin límites. Bravilo se adapta a tu negocio, ya sea una startup o una multinacional.",
                  icon: ArrowRight
                },
                {
                  title: "Seguridad de nivel bancario",
                  description: "Tus datos están seguros con nosotros. Utilizamos encriptación de grado militar.",
                  icon: Shield
                },
                {
                  title: "Soporte 24/7",
                  description: "Nuestro equipo de expertos está siempre disponible para ayudarte.",
                  icon: MessageSquare
                }
              ].map((feature, i) => (
                <Card 
                  key={i} 
                  className="bg-black/40 border-gray-800/50 p-6 hover:border-[#00B7D4]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,212,0.1)]"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#00B7D4]/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#00B7D4]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="como-funciona" className="py-20 border-t border-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Cómo funciona Bravilo
            </h2>
            <div className="max-w-4xl mx-auto bg-black/40 border border-gray-800/50 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
              <iframe width="1104" height="621" src="https://www.youtube.com/embed/-NkVS2l66Zs" title="Train a custom GPT Agent on custom data in 1 minute ⚡️with Chaindesk.ai"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="w-full"></iframe>
              </div>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "1. Importa tus datos",
                  description: "Conecta tus fuentes de datos: documentos, sitios web, APIs y más."
                },
                {
                  title: "2. Personaliza tu agente",
                  description: "Define el comportamiento, personalidad y objetivos de tu agente."
                },
                {
                  title: "3. Implementa y escala",
                  description: "Integra tu agente en múltiples canales y escala según necesites."
                }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="caracteristicas" className="py-20 border-t border-gray-800/50 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Características que impulsan tu negocio
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Bravilo ofrece un conjunto completo de herramientas para crear, gestionar y optimizar tus agentes de IA.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl  mx-auto">
              <div className="space-y-8">
                {[
                  {
                    title: "Respuestas instantáneas 24/7",
                    description: "Atiende a tus clientes en cualquier momento, mejorando la satisfacción y reduciendo los tiempos de espera.",
                    icon: MessageSquare
                  },
                  {
                    title: "IA Confiable y Precisa",
                    description: "Nuestros modelos de IA están entrenados para proporcionar información precisa y relevante, manteniendo la confianza de tus clientes.",
                    icon: Shield
                  },
                  {
                    title: "Integración multikanal",
                    description: "Implementa tus agentes en tu sitio web, aplicaciones móviles, redes sociales y más, ofreciendo una experiencia consistente en todos los canales.",
                    icon: Code
                  },
                  {
                    title: "Análisis y optimización",
                    description: "Obtén insights valiosos sobre el rendimiento de tus agentes y optimiza su funcionamiento con nuestras herramientas de análisis avanzadas.",
                    icon: Cpu
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
                  alt="Interfaz de Bravilo"
                  width={600}
                  height={800}
                  className="rounded-lg border border-gray-800/50 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="py-20 border-t border-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Lo que dicen nuestros clientes
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "María González",
                  position: "CEO, TechSolutions",
                  content: "Bravilo ha transformado completamente nuestra atención al cliente. Nuestros tiempos de respuesta se han reducido en un 80% y la satisfacción del cliente ha aumentado significativamente.",
                  image: "/placeholder.svg"
                },
                {
                  name: "Carlos Rodríguez",
                  position: "Director de Marketing, E-commerce Pro",
                  content: "La capacidad de personalizar los agentes de IA para que se alineen con nuestra marca ha sido increíble. Nuestros clientes ni siquiera se dan cuenta de que están hablando con un bot.",
                  image: "/placeholder.svg"
                },
                {
                  name: "Ana Martínez",
                  position: "Gerente de Soporte, MegaRetail",
                  content: "La implementación fue sorprendentemente fácil y rápida. En cuestión de días, teníamos agentes de IA respondiendo preguntas complejas y resolviendo problemas de los clientes.",
                  image: "/placeholder.svg"
                }
              ].map((testimonial, i) => (
                <Card key={i} className="bg-black/40 border-gray-800/50 p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precios" className="py-20 border-t border-gray-800/50 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Planes flexibles para cada necesidad
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Básico",
                  price: "49",
                  features: [
                    "1 agente de IA",
                    "1,000 conversaciones/mes",
                    "Soporte por email",
                    "Integraciones básicas"
                  ]
                },
                {
                  name: "Pro",
                  price: "149",
                  features: [
                    "5 agentes de IA",
                    "10,000 conversaciones/mes",
                    "Soporte prioritario",
                    "Todas las integraciones",
                    "Análisis avanzados"
                  ],
                  highlighted: true
                },
                {
                  name: "Empresa",
                  price: "Personalizado",
                  features: [
                    "Agentes ilimitados",
                    "Conversaciones ilimitadas",
                    "Soporte 24/7",
                    "Integraciones personalizadas",
                    "Implementación dedicada"
                  ]
                }
              ].map((plan, i) => (
                <Card 
                  key={i} 
                  className={`bg-black/40 border-gray-800/50 p-6 ${plan.highlighted ? 'border-[#00B7D4] shadow-[0_0_30px_rgba(0,183,212,0.2)]' : ''}`}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    {plan.price !== "Personalizado" && <span className="text-gray-400">/mes</span>}
                  </div>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 mr-2 text-[#00B7D4]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#00B7D4] hover:bg-[#00B7D4]/90 text-white">
                    {plan.price === "Personalizado" ? "Contactar ventas" : "Comenzar ahora"}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 border-t border-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Preguntas frecuentes
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "¿Qué es un agente de IA?",
                  answer: "Un agente de IA es un programa de inteligencia artificial diseñado para interactuar con los usuarios, responder preguntas y realizar tareas específicas de manera autónoma."
                },
                {
                  question: "¿Necesito conocimientos técnicos para usar Bravilo?",
                  answer: "No, Bravilo está diseñado para ser fácil de usar incluso sin conocimientos técnicos. Nuestra interfaz intuitiva te guiará en el proceso de creación y gestión de tus agentes de IA."
                },
                {
                  question: "¿Cómo puedo integrar Bravilo en mi sitio web?",
                  answer: "Bravilo ofrece un widget fácil de implementar que puedes añadir a tu sitio web con solo copiar y pegar un fragmento de código. También ofrecemos integraciones con plataformas populares y APIs para una integración más personalizada."
                },
                {
                  question: "¿Mis datos están seguros con Bravilo?",
                  answer: "Sí, la seguridad de tus datos es nuestra prioridad. Utilizamos encriptación de grado militar y cumplimos con las normativas de protección de datos más estrictas, incluyendo GDPR y CCPA."
                },
                {
                  question: "¿Puedo personalizar las respuestas de mi agente de IA?",
                  answer: "Absolutamente. Bravilo te permite personalizar completamente las respuestas y el comportamiento de tus agentes de IA para que se alineen con tu marca y tus necesidades específicas."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-black/40 border border-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-gray-800/50 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Revoluciona tu negocio hoy mismo
              </h2>
              <p className="text-gray-400 mb-8">
                Únete a las empresas líderes que ya están aprovechando el poder de la IA con Bravilo. Comienza tu prueba gratuita de 14 días sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/signup"
                  className="bg-[#00B7D4] hover:bg-[#00B7D4]/90 text-white px-8 py-3 rounded-md transition-colors text-lg font-medium"
                >
                  Comenzar prueba gratuita
                </Link>
                <Link 
                  href="/demo"
                  className="border border-gray-800 hover:border-gray-700 text-white px-8 py-3 rounded-md transition-colors text-lg font-medium"
                >
                  Solicitar demostración
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo-simple.png"
                  alt="Bravilo Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-white font-bold text-xl">Bravilo</span>
              </Link>
              <p className="text-gray-400">Transformando negocios con IA inteligente y accesible.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Producto</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Características</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Precios</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Casos de uso</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Integraciones</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Documentación</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Guías</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Compañía</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nosotros</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Carreras</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Prensa</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400">
              © 2024 Bravilo. Todos los derechos reservados.
            </div>
            <div className="flex gap-6">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Términos
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
      
      <section className="py-20 border-t border-gray-800/50 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Dashboard Interactivo
          </h2>
          <button
            onClick={ toggleDashboard }
            className="bg-[#00B7D4] hover:bg-[#00B7D4]/90 text-white px-8 py-3 rounded-md transition-colors text-lg font-medium"
          >
            { showDashboard ? "Ocultar Dashboard" : "Mostrar Dashboard" }
          </button>
          {showDashboard && (
            <div className="mt-8">
              <Dashboard />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
