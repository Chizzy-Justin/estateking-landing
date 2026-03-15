"use client";

import { motion } from 'framer-motion';
import { MapPin, Zap, ShieldCheck, UserCheck } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

export default function WhyUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-[var(--color-primary)]" />,
      title: "🇳🇬 Nigeria-First Features",
      description: "Naira pricing, WhatsApp-first workflow, optimized for slow Nigerian networks, and mobile-first design.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[var(--color-primary)]" />,
      title: "⚡ 7-Day Delivery Guaranteed",
      description: "While most web developers take 4–6 weeks, we deliver in 7 days. Every time.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-[var(--color-primary)]" />,
      title: "💪 Zero Tech Skills Required",
      description: "If you can use WhatsApp, you can manage your listings. We train you personally.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[var(--color-primary)]" />,
      title: "🔒 You Own Everything",
      description: "Your domain, your content, your website. No monthly subscriptions. No lock-in. It works forever.",
    },
  ];

  return (
    <SectionWrapper id="why-us" className="bg-[var(--color-bg)] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Built Specifically for Nigerian Real Estate Professionals
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:gap-12"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center rounded-2xl bg-[var(--color-bg-alt)] p-8 text-center transition-shadow hover:shadow-md border border-[var(--color-border)]"
          >
            <div className="mb-6 rounded-2xl bg-[var(--color-primary-light)] p-4">
              {feature.icon}
            </div>
            <h3 className="mb-4 text-xl font-bold text-[var(--color-text-primary)]">
              {feature.title}
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
