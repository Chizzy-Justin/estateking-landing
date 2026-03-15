"use client";

import { motion, Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import CtaButton from './ui/CtaButton';
import SectionWrapper from './ui/SectionWrapper';
import { WHATSAPP_LINK, DEMO_URL } from '@/lib/constants';

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="relative overflow-hidden pt-20">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 z-[-1] opacity-30" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at center, var(--color-primary-light) 0%, transparent 70%)',
             backgroundSize: '100% 100%' 
           }} 
      />
      
      <SectionWrapper className="pt-12 pb-16 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Left Column - Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6 inline-block rounded-full bg-[var(--color-primary-light)] px-4 py-1.5 text-sm font-semibold text-[var(--color-primary)]">
              🏆 Nigeria&apos;s #1 Real Estate Website Builder
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="mb-6 text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl"
            >
              Get Your Professional Real Estate Website in <span className="text-[var(--color-primary)]">7 Days</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mb-8 max-w-2xl text-lg text-[var(--color-text-secondary)]"
            >
              One-Time Payment. No Monthly Fees. Built for Nigerian Agents. Starts at ₦350,000.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mb-10 flex flex-col w-full gap-4 sm:flex-row sm:w-auto sm:justify-center lg:justify-start"
            >
              <CtaButton 
                variant="whatsapp" 
                label="WhatsApp Us" 
                href={WHATSAPP_LINK} 
                size="lg" 
              />
              <CtaButton 
                variant="outline" 
                label="See Live Demo" 
                href={DEMO_URL} 
                size="lg" 
              />
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 text-sm font-medium sm:gap-6 justify-center lg:justify-start"
            >
              <span className="flex items-center gap-1">
                <Check className="h-5 w-5 text-[var(--color-success)]" />
                7-Day Delivery
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-5 w-5 text-[var(--color-success)]" />
                One-Time Payment
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-5 w-5 text-[var(--color-success)]" />
                Nationwide
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex w-full flex-col items-center"
          >
            {/* Desktop Mockup */}
            <div className="hidden w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-2xl md:block relative pb-[56.25%]">
              {/* Browser Top Bar */}
              <div className="absolute top-0 left-0 right-0 flex h-[30px] items-center gap-1.5 border-b border-[var(--color-border)] bg-[var(--color-bg-alt)] px-3 w-full z-10">
                <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
              </div>
              <iframe
                src={DEMO_URL}
                title="EstateKing Live Demo"
                loading="lazy"
                className="absolute top-[30px] left-0 w-full h-[calc(100%-30px)] border-none bg-[var(--color-bg)] pointer-events-auto"
              />
            </div>
            
            {/* Mobile Mockup Placeholder */}
            <div className="flex w-full flex-col items-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-6 shadow-lg md:hidden">
              <div className="mb-4 aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-lg bg-[var(--color-border)] relative">
                 <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-bg-alt)]">
                     <span className="font-heading font-bold text-[var(--color-primary)] text-xl">Live Demo Preview</span>
                 </div>
              </div>
              <CtaButton variant="primary" label="Open Demo" href={DEMO_URL} size="md" />
            </div>

            <p className="mt-4 rounded-full bg-[var(--color-bg-alt)] px-4 py-1 text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)] shadow-sm">
              👆 This is a real, live website — click around
            </p>
          </motion.div>
          
        </div>
      </SectionWrapper>
    </div>
  );
}
