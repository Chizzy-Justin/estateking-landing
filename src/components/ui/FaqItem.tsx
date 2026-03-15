"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Props {
  question: string;
  answer: string;
  isOpen?: boolean;
  onClick?: () => void;
}

export default function FaqItem({ question, answer, isOpen = false, onClick }: Props) {
  // If not controlled by parent, use internal state
  const [internalOpen, setInternalOpen] = useState(false);
  const open = onClick ? isOpen : internalOpen;
  
  const handleToggle = () => {
    if (onClick) {
      onClick();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <div className="border-b border-[var(--color-border)] last:border-0">
      <button
        type="button"
        onClick={handleToggle}
        className="flex w-full items-center justify-between py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-[var(--color-text-primary)]">{question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-[var(--color-text-secondary)]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[var(--color-text-secondary)]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
