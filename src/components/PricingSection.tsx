"use client";

import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import PricingCard from './ui/PricingCard';

export default function PricingSection() {
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
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <SectionWrapper id="pricing" className="bg-[var(--color-bg-alt)]">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
        >
          Transparent Pricing. No Surprises.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)]"
        >
          One-time payment. You own everything. No recurring fees.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 md:gap-6 lg:gap-8 items-center"
      >
        <motion.div variants={itemVariants}>
          <PricingCard
            name="BASIC"
            price="₦350,000"
            features={[
              "All core features",
              "1 year hosting",
              "2-hour training session",
              "3 months support"
            ]}
            paymentPlan="₦200,000 deposit + ₦150,000 on delivery"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="md:-mt-8">
          <PricingCard
            name="PROFESSIONAL"
            price="₦650,000"
            features={[
              "Everything in Basic",
              "Premium custom design",
              "Analytics dashboard",
              "6 months support"
            ]}
            paymentPlan="₦350,000 deposit + ₦300,000 on delivery"
            isPopular={true}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <PricingCard
            name="ENTERPRISE"
            price="₦1,200,000"
            features={[
              "Everything in Professional",
              "Multi-agent support",
              "Custom branding",
              "12 months support",
              "Monthly performance reports"
            ]}
            paymentPlan="3 equal installments"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-xl bg-[var(--color-accent)] shadow-lg"
      >
        <div className="flex flex-col items-center justify-center p-6 text-center text-[var(--color-text-primary)] sm:flex-row sm:text-left">
          <span className="text-3xl mr-0 mb-4 sm:mr-4 sm:mb-0">💰</span>
          <p className="text-lg font-bold">
            Pay in full and save ₦50,000 — mention this offer on WhatsApp
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
