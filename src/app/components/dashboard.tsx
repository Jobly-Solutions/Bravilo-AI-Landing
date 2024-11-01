'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  Inbox, 
  Bot, 
  Database, 
  FileText, 
  BarChart2, 
  Mail, 
  Users, 
  Settings, 
  FileCode2, 
  Search, 
  Plus,
  ExternalLink,
  MoreHorizontal
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

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
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null)

  const toggleAgent = (name: string) => {
    setExpandedAgent(expandedAgent === name ? null : name)
  }

  return (
    <div className="min-h-screen bg-[#000304] text-white flex">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 border-r border-gray-800 flex flex-col"
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-800">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-simple.png"
              alt="Bravilo Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-xl">Bravilo</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                item.active 
                  ? 'bg-[#00B7D4]/10 text-[#00B7D4]' 
                  : 'hover:bg-gray-800/50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
              {item.count && (
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {item.count}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Usage Stats */}
        <div className="p-4 border-t border-gray-800 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Queries</span>
              <span>21 / 200</span>
            </div>
            <motion.div 
              className="h-1 bg-gray-800 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="h-full bg-[#00B7D4]" 
                initial={{ width: 0 }}
                animate={{ width: "10%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Storage</span>
              <span>0.003 / 0.02 MB</span>
            </div>
            <motion.div 
              className="h-1 bg-gray-800 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="h-full bg-[#00B7D4]" 
                initial={{ width: 0 }}
                animate={{ width: "15%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
            >
              Upgrade Plan
            </Button>
          </motion.div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <motion.header 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="border-b border-gray-800 bg-[#000304]/50 backdrop-blur-sm sticky top-0 z-10"
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Agents</span>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#00B7D4] hover:bg-[#00B7D4]/90">
                <Plus className="w-4 h-4 mr-2" />
                New Agent
              </Button>
            </motion.div>
          </div>
        </motion.header>

        {/* Content */}
        <div className="p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {/* Info Card */}
            <Card className="bg-gray-900/50 border-gray-800 p-4 mb-6">
              <div className="flex items-start gap-3">
                <Bot className="w-5 h-5 text-[#00B7D4] mt-0.5" />
                <p className="text-gray-400">
                  Agents are customizable instances of large language models tailored to fit your specific use cases. 
                  By connecting them to a datastore, you can train them on your unique knowledge base.
                </p>
              </div>
            </Card>

            {/* Agents Table */}
            <div className="rounded-lg border border-gray-800 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-800 hover:bg-transparent">
                    <TableHead className="text-gray-400">Name</TableHead>
                    <TableHead className="text-gray-400">Description</TableHead>
                    <TableHead className="text-gray-400">Model</TableHead>
                    <TableHead className="text-gray-400">Visibility</TableHead>
                    <TableHead className="text-gray-400 w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <motion.tr
                    layout
                    className="border-gray-800"
                    onClick={() => toggleAgent('bravilo')}
                  >
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-[#00B7D4]" />
                        bravilo
                      </div>
                    </TableCell>
                    <TableCell>agente de ai conversacional</TableCell>
                    <TableCell>gpt-4</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                        public
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-2">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button variant="ghost" size="icon" className="hover:bg-gray-800">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button variant="ghost" size="icon" className="hover:bg-gray-800">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </TableCell>
                  </motion.tr>
                  <AnimatePresence>
                    {expandedAgent === 'bravilo' && (
                      <motion.tr
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <TableCell colSpan={5}>
                          <div className="p-4 bg-gray-900/50 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Agent Details</h3>
                            <p className="text-gray-400 mb-4">
                              This AI agent is designed for conversational interactions, 
                              utilizing the powerful GPT-4 model to provide human-like responses.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-medium mb-1">Training Data</h4>
                                <p className="text-sm text-gray-400">Custom dataset + GPT-4 base knowledge</p>
                              </div>
                              <div>
                                <h4 className="font-medium mb-1">Last Updated</h4>
                                <p className="text-sm text-gray-400">2023-10-15 14:30 UTC</p>
                              </div>
                              <div>
                                <h4 className="font-medium mb-1">API Endpoint</h4>
                                <p className="text-sm text-gray-400">/api/agents/bravilo</p>
                              </div>
                              <div>
                                <h4 className="font-medium mb-1">Usage</h4>
                                <p className="text-sm text-gray-400">1,234 queries this month</p>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}