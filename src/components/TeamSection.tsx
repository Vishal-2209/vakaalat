'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: "Vishal Aidasani",
    role: "Co-Founder",
    image: "VA",
    bio: "Driving the vision for a unified legal ecosystem."
  },
  {
    name: "Chirag Buliya",
    role: "Co-Founder",
    image: "CB",
    bio: "Building scalable technology for the modern legal practice."
  },
  {
    name: "Rakshit Jain",
    role: "Co-Founder",
    image: "RJ",
    bio: "Ensuring seamless operations and user experience."
  },
  {
    name: "Adv. Arpit Azad",
    role: "Legal Advisor",
    image: "AA",
    bio: "Providing expert legal guidance and industry insights."
  }
];

export function TeamSection() {
  return (
    <section className="py-24 bg-white/5 mx-6 rounded-3xl mb-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Meet the <span className="text-accent">Team</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white/40 group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                {member.image}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-accent font-medium text-sm mb-4">{member.role}</p>
              <p className="text-white/50 text-sm max-w-[200px] mx-auto">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
