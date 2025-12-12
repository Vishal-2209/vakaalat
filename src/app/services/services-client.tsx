'use client';

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, User, FileText, CheckCircle2, Clock, Lightbulb, X, ChevronRight, ArrowUpRight, Zap } from 'lucide-react';
import { Button } from "@/components/Button";
import type { Settings } from "@/lib/settings-data";

const products = [
  {
    id: "law-connect",
    name: "Law Connect",
    status: "Web & Mobile App",
    statusColor: "text-accent",
    icon: <MessageSquare className="w-8 h-8 text-white" />,
    description: "The client relationship hub. Get matched with relevant clients and manage consultation bookings seamlessly.",
    features: ["Verified Leads", "Consultation Requests", "Video Consultations"],
    cta: "Launch Platform",
    gradient: "from-violet-600 to-indigo-600"
  },
  {
    id: "law-profile",
    name: "Law Profile",
    status: "Early Access",
    statusColor: "text-yellow-400",
    icon: <User className="w-8 h-8 text-black" />,
    description: "Your digital command center. Manage cases, track workflows, and handle billing in one unified dashboard.",
    features: ["Workflow Tracking", "Smart Billing", "Case Timeline"],
    cta: "Request Access",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    id: "law-draft",
    name: "Law Draft",
    status: "In Development",
    statusColor: "text-blue-400",
    icon: <FileText className="w-8 h-8 text-white" />,
    description: "Next-gen document automation. AI-driven drafting that slashes paperwork time by 70%.",
    features: ["AI Templates", "Auto-Fill", "Cloud Storage"],
    cta: "Join Waitlist",
    gradient: "from-blue-500 to-cyan-400"
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
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-card border border-white/10 rounded-[2rem] p-8 max-w-md w-full relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-purple-400 to-accent animate-gradient" />
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-foreground/40 hover:text-foreground rounded-full hover:bg-foreground/5 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <h2 className="text-3xl font-bold mb-2 text-foreground tracking-tight">Select Role</h2>
                    <p className="text-foreground/60 mb-8 text-lg">
                        Who are you signing in as?
                    </p>

                    <div className="space-y-4">
                        <button 
                            onClick={() => handleSelect('client')}
                            className="w-full bg-subtle hover:bg-accent/5 border border-black/5 hover:border-accent/30 rounded-2xl p-6 flex items-center justify-between group transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                    <User className="w-7 h-7" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-xl text-foreground group-hover:text-blue-500 transition-colors">Client</h3>
                                    <p className="text-sm text-foreground/40 font-medium">Seeking legal help</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-foreground/20 group-hover:text-blue-500 transition-colors group-hover:translate-x-1" />
                        </button>

                        <button 
                            onClick={() => handleSelect('lawyer')}
                            className="w-full bg-subtle hover:bg-accent/5 border border-black/5 hover:border-accent/30 rounded-2xl p-6 flex items-center justify-between group transition-all"
                        >
                             <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                    <MessageSquare className="w-7 h-7" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-xl text-foreground group-hover:text-accent transition-colors">Lawyer</h3>
                                    <p className="text-sm text-foreground/40 font-medium">Managing practice</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-foreground/20 group-hover:text-accent transition-colors group-hover:translate-x-1" />
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
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const openModal = (type: 'web' | 'download') => {
      setModalType(type);
      setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32 pb-20">
      <Navbar />
      
      <RoleSelectionModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={modalType}
        settings={settings}
      />

       {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center mb-32">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 text-accent font-bold text-sm mb-8 border border-accent/10"
           >
                <Zap className="w-4 h-4 fill-current" />
                The Vakaalat Ecosystem
           </motion.div>
           
           <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter"
           >
            One Suite. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">Infinite Possibilities.</span>
           </motion.h1>
           
           <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed"
           >
             Forget fragmented tools. We provide a unified digital infrastructure designed for the modern Indian legal practice.
           </motion.p>
        </div>

        {/* Product Cards - Vertical Stack for Impact */}
        <div className="space-y-32">
            {products.map((product, index) => (
                <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`group relative grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                >
                    {/* Visual Side */}
                    <div className={`relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 ${index % 2 === 1 ? 'lg:order-2' : ''} ${hoveredProduct === product.id ? 'scale-[1.02]' : ''}`}>
                         <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10`} />
                         <div className="absolute inset-0 bg-subtle/50 backdrop-blur-sm" />
                         
                         {/* Meaningful UI Representation */}
                         <div className="absolute inset-8 bg-white rounded-3xl shadow-2xl border border-black/5 overflow-hidden flex flex-col font-sans">
                             {/* Mac-style Window Header */}
                             <div className="h-10 border-b border-black/5 flex items-center px-4 gap-2 bg-gray-50/80 backdrop-blur-md">
                                 <div className="w-3 h-3 rounded-full bg-red-400" />
                                 <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                 <div className="w-3 h-3 rounded-full bg-green-400" />
                                 <div className="ml-4 flex-1 text-[10px] sm:text-xs text-center text-gray-400 font-medium opacity-60 truncate px-2">
                                     {product.id === 'law-connect' ? 'vakaalat.in/connect/dashboard' : 
                                      product.id === 'law-profile' ? 'vakaalat.in/profile/analytics' : 
                                      'vakaalat.in/draft/editor'}
                                 </div>
                             </div>

                             <div className="flex-1 relative bg-white overflow-hidden">
                                 {/* LAW CONNECT: Consultation Request Interface */}
                                 {product.id === 'law-connect' && (
                                     <div className="flex h-full bg-gray-50/50 p-6 items-center justify-center">
                                          <div className="w-full max-w-[280px] bg-white rounded-3xl shadow-xl border border-black/5 p-5 relative">
                                              <div className="absolute top-4 right-4 text-[9px] font-bold text-white bg-accent px-2 py-0.5 rounded-full shadow-md shadow-accent/20">NEW REQUEST</div>
                                              <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Consultation</div>
                                              <div className="text-base font-bold text-gray-900 mb-3">Property Dispute</div>
                                              
                                              <div className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-2xl border border-gray-100 mb-4">
                                                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex flex-col items-center justify-center border border-orange-200">
                                                      <span className="text-[9px] font-bold leading-none">NOV</span>
                                                      <span className="text-sm font-bold leading-none">14</span>
                                                  </div>
                                                  <div>
                                                      <div className="text-[11px] font-bold text-gray-900">10:00 AM</div>
                                                      <div className="text-[9px] text-gray-500">Video Call</div>
                                                  </div>
                                              </div>
                                              <div className="grid grid-cols-2 gap-2">
                                                   <button className="py-2.5 bg-foreground text-white rounded-xl text-[10px] font-bold hover:bg-black/80 transition-colors">Accept</button>
                                                   <button className="py-2.5 bg-white border border-gray-200 text-foreground rounded-xl text-[10px] font-bold hover:bg-gray-50 transition-colors">Reschedule</button>
                                              </div>
                                          </div>
                                     </div>
                                 )}

                                 {/* LAW PROFILE: Analytics Dashboard */}
                                 {product.id === 'law-profile' && (
                                     <div className="p-4 sm:p-6 h-full flex flex-col gap-4">
                                         <div className="flex justify-between items-end mb-2">
                                            <div>
                                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Total Revenue</div>
                                                <div className="text-2xl font-bold text-gray-900">₹4.2L</div>
                                            </div>
                                            <div className="text-[10px] text-green-600 bg-green-100 px-2 py-1 rounded-full font-bold">+12% vs last month</div>
                                         </div>
                                         
                                         <div className="flex-1 flex items-end gap-2 sm:gap-4 h-32 pb-2 border-b border-black/5">
                                             {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                                 <div key={i} className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer">
                                                     <div 
                                                        className={`w-full bg-gray-900 rounded-t-lg transition-all duration-500 relative group-hover:bg-accent ${i === 5 ? 'bg-accent shadow-lg shadow-accent/20' : 'bg-gray-100'}`} 
                                                        style={{ height: `${h}%` }}
                                                     >
                                                         {i === 5 && (
                                                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] py-1 px-2 rounded-lg whitespace-nowrap">
                                                                 High Performance
                                                             </div>
                                                         )}
                                                     </div>
                                                 </div>
                                             ))}
                                         </div>

                                         <div className="grid grid-cols-2 gap-3">
                                             <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                                                 <div className="text-[9px] text-orange-400 font-bold uppercase mb-1">Active Cases</div>
                                                 <div className="text-lg font-bold text-gray-800">24</div>
                                             </div>
                                             <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                                                 <div className="text-[9px] text-blue-400 font-bold uppercase mb-1">Pending Invoices</div>
                                                 <div className="text-lg font-bold text-gray-800">03</div>
                                             </div>
                                         </div>
                                     </div>
                                 )}

                                 {/* LAW DRAFT: Document Editor */}
                                 {product.id === 'law-draft' && (
                                     <div className="p-6 sm:p-8 relative h-full bg-white">
                                         <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
                                             <div className="w-1/3 h-full bg-blue-500" />
                                         </div>
                                         <div className="max-w-[80%] mx-auto bg-white shadow-sm border border-gray-100 min-h-[120%] p-6 sm:text-[10px] text-[8px] leading-relaxed text-gray-500 font-serif">
                                             <div className="font-bold text-gray-900 text-center mb-4 text-xs sm:text-sm uppercase tracking-widest border-b pb-2">Legal Notice</div>
                                             <p className="mb-2">To,</p>
                                             <p className="mb-4 font-bold text-gray-800">The Managing Director,<br/>XYZ Corporations Pvt Ltd.</p>
                                             <p className="mb-2">
                                                 <span className="bg-blue-50 text-blue-700 px-1 rounded mx-0.5 border-b border-blue-200">Subject: Notice for Breach of Contract</span>
                                             </p>
                                             <p>
                                                 Under instructions from my client, <span className="font-semibold text-gray-900">Mr. Sharma</span>, I hereby serve upon you the following notice:
                                             </p>
                                             <div className="my-2 p-3 bg-blue-50/50 border border-blue-100 rounded-lg flex gap-3 shadow-sm">
                                                 <div className="mt-0.5"><Zap className="w-3 h-3 text-blue-500 fill-current" /></div>
                                                 <div>
                                                     <div className="text-blue-700 font-bold mb-0.5 text-[9px] uppercase">AI Suggestion</div>
                                                     <p className="text-blue-600/80">Clause 4.2 regarding "Force Majeure" is missing. Add standard clause?</p>
                                                     <div className="mt-2 flex gap-2">
                                                         <button className="bg-blue-600 text-white px-2 py-0.5 rounded text-[8px]">Add Clause</button>
                                                         <button className="text-blue-400 text-[8px] hover:text-blue-600">Dismiss</button>
                                                     </div>
                                                 </div>
                                             </div>
                                             <p className="opacity-50 blur-[0.5px]">
                                                 That my client entered into an agreement dated 12th Jan 2024...
                                             </p>
                                         </div>
                                     </div>
                                 )}
                             </div>
                         </div>
                    </div>

                    {/* Content Side */}
                    <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-black/5 shadow-sm ${product.statusColor}`}>
                            {product.status}
                        </div>
                        
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            {product.name}
                        </h2>
                        
                        <p className="text-xl text-foreground/60 leading-relaxed">
                            {product.description}
                        </p>
                        
                        <ul className="space-y-4">
                            {product.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-medium text-foreground/80">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br ${product.gradient} text-white`}>
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-8 flex gap-4">
                            {product.id === 'law-connect' ? (
                                <>
                                    <Button variant="accent" size="lg" className="rounded-full px-8 text-lg h-14" onClick={() => openModal('web')}>
                                        Launch Web App
                                    </Button>
                                    <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-black/10" onClick={() => openModal('download')}>
                                        Download App
                                    </Button>
                                </>
                            ) : (
                                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-black/10 hover:bg-black/5">
                                    {product.cta} <ArrowUpRight className="ml-2 w-5 h-5" />
                                </Button>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
      <Footer />
    </main>
  );
}
