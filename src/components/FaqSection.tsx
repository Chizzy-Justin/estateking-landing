"use client";

import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import FaqItem from './ui/FaqItem';
import { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: "How long does it actually take?",
      answer: "7 days from deposit payment. We've done it consistently and we guarantee it in writing."
    },
    {
      question: "I'm not tech-savvy. Can I still manage the website?",
      answer: "Absolutely. We give you 2 hours of hands-on training. If you can send a WhatsApp message, you can manage your listings."
    },
    {
      question: "Can I see an example before I pay anything?",
      answer: "Yes — visit our live demo right now. That's a complete, real website."
    },
    {
      question: "What exactly is included in the price?",
      answer: "Custom domain, 1 year of hosting, unlimited property listings, training, and 3 months of support. Everything."
    },
    {
      question: "Is there a payment plan?",
      answer: "Yes. Pay ₦200,000 to start, then the balance only when your website is live."
    },
    {
      question: "What if I'm not happy with the design?",
      answer: "We work with you until you're satisfied. The first 3 design revisions are completely free."
    },
    {
      question: "Is this a one-time payment or subscription?",
      answer: "One-time payment. You own the website outright. The only cost after year one is optional hosting renewal at ₦50,000/year."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq" className="bg-[var(--color-bg-alt)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl rounded-2xl bg-[var(--color-bg)] p-6 shadow-md border border-[var(--color-border)] md:p-8"
      >
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
