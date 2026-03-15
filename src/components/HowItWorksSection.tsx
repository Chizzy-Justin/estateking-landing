"use client";

import { motion } from 'framer-motion';
import { PhoneCall, CreditCard, Rocket, Laptop } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

export default function HowItWorksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const steps = [
    {
      icon: <PhoneCall className="h-6 w-6 text-white" />,
      title: "Contact Us",
      description: "WhatsApp or call for a free 15-minute consultation. We'll answer every question.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-white" />,
      title: "Pay Deposit",
      description: "₦200,000 deposit to begin. Balance of ₦150,000 paid only on delivery.",
    },
    {
      icon: <Laptop className="h-6 w-6 text-white" />,
      title: "We Build It",
      description: "Send your property photos via WhatsApp. We handle design, setup, and content upload.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-white" />,
      title: "Go Live",
      description: "Your website is live in 7 days. Start receiving inquiries immediately.",
    },
  ];

  return (
    <SectionWrapper id="how-it-works" className="bg-[var(--color-bg)] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          From WhatsApp Message to Live Website in 4 Simple Steps
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative grid gap-10 md:grid-cols-4 md:gap-6 lg:gap-8"
      >
        {/* Connecting line (Desktop only) */}
        <div className="absolute top-8 left-[10%] hidden w-[80%] border-t-2 border-dashed border-[var(--color-border)] md:block" />

        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="relative flex flex-col items-center"
          >
            <div className="z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] shadow-lg ring-8 ring-[var(--color-bg)]">
                {/* Pulse animation wrapper for icon */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: index * 0.5 }}
                >
                    {step.icon}
                </motion.div>
            </div>
            
            <div className="flex h-10 w-10 -translate-y-12 items-center justify-center rounded-full bg-[var(--color-primary-light)] font-bold text-[var(--color-primary)]">
                {index + 1}
            </div>

            <h3 className="mb-3 mt-[-1rem] text-xl font-bold text-[var(--color-text-primary)]">
              {step.title}
            </h3>
            
            <p className="text-[var(--color-text-secondary)]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
