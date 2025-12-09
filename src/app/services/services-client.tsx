'use client';

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, User, FileText, CheckCircle2, Clock, Lightbulb, X, ChevronRight } from 'lucide-react';
import { Button } from "@/components/Button";
import type { Settings } from "@/lib/settings-data";

const products = [
  {
    id: "law-connect",
    name: "Law Connect",
    status: "Ready",
    statusColor: "text-accent",
    icon: <MessageSquare className="w-10 h-10 text-accent" />,
    description: "The ultimate client relationship and communication hub. Ensure lawyers stop depending on WhatsApp chaos and manual follow-ups.",
    features: [
      "Centralized Client Directory",
      "Secure Messaging",
      "Auto-generated Case Updates",
      "Appointment Scheduler"
    ],
    cta: "Get Started"
  },
  {
    id: "law-profile",
    name: "Law Profile",
    status: "Under Development",
    statusColor: "text-yellow-400",
    icon: <User className="w-10 h-10 text-yellow-400" />,
    description: "Your digital identity and practice command center. Manage cases, workflow, and billing in one unified dashboard.",
    features: [
      "Case & Workflow Management",
      "Timeline View of Progress",
      "Billing & Payments",
      "Firm-Level Collaboration"
    ],
    cta: "Join Waitlist"
  },
  {
    id: "law-draft",
    name: "Law Draft",
    status: "In Ideation",
    statusColor: "text-blue-400",
    icon: <FileText className="w-10 h-10 text-blue-400" />,
    description: "Next-gen document automation. Secure cloud storage, structured templates, and auto-fill tools to slash drafting time.",
    features: [
      "Secure Cloud Storage",
      "Smart Legal Templates",
      "Auto-fill Repetitive Data",
      "Version Tracking"
    ],
    cta: "Learn More"
  }
];

interface RoleSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'web' | 'download';
  settings: Settings;
}

function RoleSelectionModal({ isOpen, onClose, type, settings }: RoleSelectionModalProps) {
    if (!isOpen) return null;

    const handleSelect = (role: 'client' | 'lawyer') => {
        let url = '';
        if (type === 'web') {
            url = role === 'client' ? settings.clientWebAppUrl : settings.lawyerWebAppUrl;
        } else {
            url = role === 'client' ? settings.clientAppDownloadUrl : settings.lawyerAppDownloadUrl;
        }
        window.open(url, '_blank');
        onClose();
    };

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 max-w-md w-full relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-white/40 hover:text-white rounded-full hover:bg-white/5 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <h2 className="text-2xl font-bold mb-2">Select your Role</h2>
                    <p className="text-white/60 mb-8">
                        Are you using Vakaalat as a Client or a Lawyer?
                    </p>

                    <div className="space-y-4">
                        <button 
                            onClick={() => handleSelect('client')}
                            className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/30 rounded-xl p-4 flex items-center justify-between group transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <User className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">I am a Client</h3>
                                    <p className="text-sm text-white/40">Looking for legal services</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-blue-400 transition-colors" />
                        </button>

                        <button 
                            onClick={() => handleSelect('lawyer')}
                            className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/30 rounded-xl p-4 flex items-center justify-between group transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-lg text-white group-hover:text-accent transition-colors">I am a Lawyer</h3>
                                    <p className="text-sm text-white/40">Managing my practice</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-accent transition-colors" />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export function ServicesClient({ settings }: { settings: Settings }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'web' | 'download'>('web');

  const openModal = (type: 'web' | 'download') => {
      setModalType(type);
      setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
      <Navbar />
      
      <RoleSelectionModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={modalType}
        settings={settings}
      />

      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
            The Vakaalat Ecosystem
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-accent">Softwares</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
             A unified digital suite designed to empower the modern lawyer at every stage of their practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all hover:-translate-y-1 relative group flex flex-col"
                >
                    <div className="absolute top-6 right-6 text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                        {product.status === "Ready" ? <CheckCircle2 className="w-3 h-3 text-accent" /> : 
                         product.status === "Under Development" ? <Clock className="w-3 h-3 text-yellow-400" /> :
                         <Lightbulb className="w-3 h-3 text-blue-400" />}
                        <span className={product.statusColor}>{product.status}</span>
                    </div>

                    <div className="mb-8 bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {product.icon}
                    </div>

                    <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                    <p className="text-white/60 mb-8 leading-relaxed flex-grow">
                        {product.description}
                    </p>

                    <ul className="space-y-4 mb-8">
                        {product.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-white/50">
                                <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                                    product.status === "Ready" ? "bg-accent" :
                                    product.status === "Under Development" ? "bg-yellow-400" : "bg-blue-400"
                                }`} />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto">
                        {product.id === "law-connect" ? (
                            <div className="flex flex-col gap-3">
                                <Button variant="accent" className="w-full" onClick={() => openModal('web')}>
                                    Web App
                                </Button>
                                <Button variant="outline" className="w-full" onClick={() => openModal('download')}>
                                    Download Android App
                                </Button>
                            </div>
                        ) : product.cta === "Join Waitlist" ? (
                             <a href="/contact">
                                <Button variant="outline" className="w-full">
                                    {product.cta}
                                </Button>
                             </a>
                        ) : (
                             <Button variant={product.status === "Ready" ? "accent" : "outline"} className="w-full">
                                {product.cta}
                             </Button>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
