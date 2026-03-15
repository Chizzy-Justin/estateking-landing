"use client";

import { motion, Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import SectionWrapper from './ui/SectionWrapper';

export default function SolutionSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const features = [
    { title: "Custom domain", desc: "(yourname.com.ng or .com)" },
    { title: "Unlimited property listings", desc: "" },
    { title: "WhatsApp button on every property page", desc: "" },
    { title: "Mobile-first design", desc: "(perfect on any Nigerian phone)" },
    { title: "Easy admin dashboard", desc: "— add listings in 2 minutes" },
    { title: "Contact form with instant email alerts", desc: "" },
    { title: "1 year hosting included", desc: "" },
    { title: "2-hour hands-on training session", desc: "" },
    { title: "3 months post-launch support", desc: "" },
  ];

  return (
    <SectionWrapper id="solution" className="bg-[var(--color-bg)]">
      <div className="mb-12 text-center md:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
        >
          Your Complete Real Estate Website — Live in 7 Days
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)]"
        >
          No technical skills needed. No ongoing subscriptions. Just results.
        </motion.p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        
        {/* Left Column - Features List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="flex gap-3">
              <Check className="h-6 w-6 shrink-0 text-[var(--color-success)]" />
              <div>
                <span className="font-semibold text-[var(--color-text-primary)]">{feature.title}</span>
                {feature.desc && <span className="text-[var(--color-text-secondary)]"> {feature.desc}</span>}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column - Overview Card */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="relative flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-8 shadow-xl"
        >
          <div className="mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary-light)] to-blue-50 p-6">
            <span className="text-6xl font-black text-[var(--color-primary)]">7</span>
            <div className="ml-4 flex flex-col">
              <span className="text-xl font-bold uppercase leading-tight text-[var(--color-primary-dark)]">Days</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">To Launch</span>
            </div>
          </div>
          
          <h3 className="mb-4 text-center text-2xl font-bold text-[var(--color-text-primary)]">
            What You Get at a Glance
          </h3>
          
          <div className="mb-8 space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-[var(--color-bg)] px-4 py-3 shadow-sm border border-[var(--color-border)]">
              <span className="font-medium">Setup & Design</span>
              <span className="text-[var(--color-success)] font-semibold text-lg">Included</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[var(--color-bg)] px-4 py-3 shadow-sm border border-[var(--color-border)]">
              <span className="font-medium">Hosting (Year 1)</span>
              <span className="text-[var(--color-success)] font-semibold text-lg">Included</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[var(--color-bg)] px-4 py-3 shadow-sm border border-[var(--color-border)]">
              <span className="font-medium">Monthly Fees</span>
              <span className="text-[var(--color-text-secondary)] font-bold text-lg">₦0</span>
            </div>
          </div>

          <div className="mt-auto border-t border-[var(--color-border)] pt-6 text-center">
            <p className="mb-4 font-semibold text-[var(--color-text-secondary)]">
              Starting from <span className="text-[var(--color-text-primary)] text-xl">₦350,000</span> — One-Time
            </p>
            <Link 
              href="#pricing"
              className="inline-block font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] hover:underline"
            >
              See Pricing ↓
            </Link>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
