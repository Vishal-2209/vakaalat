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
    name: "Lakshya Saraf",
    role: "Co-Founder",
    image: "LS",
    bio: "Strategizing financial growth and stability for long-term success."
  }
];

export function TeamSection() {
  return (
    <section className="py-24 px-6 mb-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">Meet the <span className="text-accent">Team</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="w-full aspect-square bg-subtle rounded-[2rem] mb-6 flex items-center justify-center text-3xl font-bold text-foreground/20 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:shadow-accent/20">
                {member.image}
              </div>
              <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-foreground/50 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
