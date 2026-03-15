"use client";

import { motion, Variants } from 'framer-motion';
import { XCircle, TrendingDown, Globe } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

export default function ProblemSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const painPoints = [
    {
      icon: <XCircle className="h-8 w-8 text-red-500" />,
      title: "Clients Don't Take You Seriously",
      description: "Without a website, you look unprofessional to high-value buyers.",
    },
    {
        icon: <TrendingDown className="h-8 w-8 text-red-500" />,
        title: "You're Invisible on Google",
        description: "When buyers search for agents online, your competitors show up — not you.",
    },
    {
      icon: <Globe className="h-8 w-8 text-red-500" />,
      title: "Diaspora Clients Can't Find You",
      description: "Overseas buyers exclusively search online. No website = no diaspora deals.",
    },
  ];

  return (
    <SectionWrapper id="problem" className="bg-[var(--color-bg-alt)]">
      <div className="flex flex-col items-center">
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Are You Losing Deals to Agents With Professional Websites?
          </h2>
          
          <div className="mx-auto max-w-3xl rounded-xl border-l-4 border-l-[var(--color-accent)] bg-[var(--color-bg)] p-6 shadow-sm">
            <p className="text-lg font-medium text-[var(--color-text-secondary)] italic">
              &quot;78% of property buyers research agents online before making contact — if they can&apos;t find you, they choose someone else.&quot;
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 w-full"
        >
          {painPoints.map((point, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center rounded-2xl border-l-4 border-l-red-500 bg-red-50/50 p-8 text-center shadow-sm"
            >
              <div className="mb-4 rounded-full bg-red-100 p-3">
                {point.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[var(--color-text-primary)]">
                {point.title}
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </SectionWrapper>
  );
}
