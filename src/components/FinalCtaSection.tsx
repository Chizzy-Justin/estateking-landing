"use client";

import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import CtaButton from './ui/CtaButton';
import { WHATSAPP_LINK, PHONE_NUMBER, SLOTS_REMAINING } from '@/lib/constants';

export default function FinalCtaSection() {
  return (
    <SectionWrapper id="cta" className="bg-[var(--color-primary)] text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5 opacity-50 blur-3xl md:-top-48 md:-right-48 md:h-[600px] md:w-[600px]" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/5 opacity-50 blur-3xl md:-bottom-48 md:-left-48 md:h-[600px] md:w-[600px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
          Ready to Get More Clients Online?
        </h2>
        
        <p className="mb-10 text-xl text-white/80 md:text-2xl max-w-2xl">
          Join Nigerian real estate professionals closing more deals with a website that works as hard as they do.
        </p>

        <div className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto sm:justify-center">
          <CtaButton
            variant="whatsapp"
            label="📲 Chat on WhatsApp Now"
            href={WHATSAPP_LINK}
            size="lg"
            className="shadow-xl"
            icon={<MessageCircle className="hidden" />} // Icon handled in label to match requested design
          />
          <CtaButton
            variant="primary"
            label={`📞 Call ${PHONE_NUMBER}`}
            href={`tel:${PHONE_NUMBER}`}
            size="lg"
            className="bg-white text-[var(--color-primary)] hover:bg-slate-100 shadow-xl"
            icon={<Phone className="hidden" />} // Icon handled in label
          />
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ delay: 0.4, duration: 0.5 }}
           className="mt-12 rounded-xl border border-[var(--color-accent)] bg-black/20 px-6 py-4 backdrop-blur-sm"
        >
          <p className="font-semibold text-white">
            ⏰ We only take 5 new projects per month — <span className="text-[var(--color-accent)]">{SLOTS_REMAINING} slots remaining</span>
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
