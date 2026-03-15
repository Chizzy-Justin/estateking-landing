"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import CtaButton from './CtaButton';
import { WHATSAPP_LINK } from '@/lib/constants';

interface Props {
  name: string;
  price: string;
  features: string[];
  paymentPlan: string;
  isPopular?: boolean;
  ctaLabel?: string;
}

export default function PricingCard({ 
  name, 
  price, 
  features, 
  paymentPlan, 
  isPopular = false,
  ctaLabel = "Get Started on WhatsApp"
}: Props) {
  return (
    <motion.div 
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative flex flex-col rounded-2xl bg-[var(--color-bg)] p-8 shadow-sm transition-shadow hover:shadow-xl border ${
        isPopular ? 'border-[var(--color-primary)] scale-105 shadow-md md:z-10' : 'border-[var(--color-border)]'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-[var(--color-primary)] px-4 py-1 text-sm font-semibold text-white">
          MOST POPULAR
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{name}</h3>
        <div className="mt-4 flex items-baseline text-4xl font-extrabold text-[var(--color-text-primary)]">
          {price}
        </div>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{paymentPlan}</p>
      </div>

      <ul className="mb-8 flex-1 space-y-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className="h-5 w-5 shrink-0 text-[var(--color-success)]" />
            <span className="text-[var(--color-text-secondary)]">{feature}</span>
          </li>
        ))}
      </ul>

      <CtaButton 
        variant="whatsapp" 
        label={ctaLabel} 
        href={WHATSAPP_LINK}
        className="w-full"
      />
    </motion.div>
  );
}
