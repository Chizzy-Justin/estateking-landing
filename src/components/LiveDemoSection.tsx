"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import CtaButton from './ui/CtaButton';
import { DEMO_URL } from '@/lib/constants';

export default function LiveDemoSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <SectionWrapper id="demo" className="bg-[var(--color-bg-alt)]">
      <div className="mb-12 text-center md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
        >
          See It for Yourself — A Real, Working Website
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)]"
        >
          This isn&apos;t a mockup. Browse it, test it on your phone, view the listings.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex flex-col items-center"
      >
        {/* Desktop Iframe Container */}
        <div className="hidden md:block w-full max-w-[1000px] overflow-hidden rounded-xl border border-[var(--color-border)] shadow-2xl relative bg-white pb-[56.25%]">
            {/* Browser Top Bar */}
            <div className="absolute top-0 left-0 right-0 flex h-[40px] items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 z-10 w-full">
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                    <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                    <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex-1 px-4">
                    <div className="mx-auto w-1/2 max-w-sm rounded-md bg-[var(--color-border)] py-1 text-center text-xs font-medium text-[var(--color-text-secondary)] opacity-50">
                        {new URL(DEMO_URL).hostname}
                    </div>
                </div>
            </div>

            {/* Loading Skeleton */}
            {!iframeLoaded && (
                <div className="absolute top-[40px] left-0 w-full h-[calc(100%-40px)] animate-pulse bg-slate-100 flex flex-col pt-8 px-8">
                     <div className="h-10 w-48 rounded bg-slate-300 mb-8 mx-auto" />
                     <div className="flex flex-col md:flex-row gap-6">
                         <div className="flex-1 h-64 rounded bg-slate-300" />
                         <div className="flex-1 h-64 rounded bg-slate-300" />
                     </div>
                </div>
            )}

            <iframe
                src={DEMO_URL}
                title="EstateKing Interactive Demo"
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
                className={`absolute top-[40px] left-0 w-full h-[calc(100%-40px)] border-none transition-opacity duration-700 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>

        {/* Mobile Static View (Better performance than iframe on touch devices) */}
        <div className="flex w-full flex-col items-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-slate-50 p-6 md:hidden shadow-lg">
            <div className="relative mb-6 flex w-full max-w-[320px] items-center justify-center aspect-[9/16] rounded-xl border-4 border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
                 <div className="absolute top-0 left-1/2 h-5 w-32 -translate-x-1/2 rounded-b-xl bg-slate-800 z-10" />
                 <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] to-slate-900 flex flex-col items-center justify-center p-6 text-center">
                    <h4 className="text-xl font-bold text-white mb-2">Mobile Demo Ready</h4>
                    <p className="text-sm text-slate-300 mb-6">Experience how your clients will see your listings on their phones.</p>
                 </div>
            </div>
            
            <CtaButton 
                variant="primary" 
                label="Open Demo on Phone" 
                href={DEMO_URL} 
                icon={<ExternalLink className="h-5 w-5" />} 
            />
        </div>

        <div className="mt-8 text-center flex flex-col items-center">
            <p className="mb-6 text-lg font-medium italic text-[var(--color-text-secondary)]">
                &quot;Imagine this is your brand, your listings, your business.&quot;
            </p>
            <CtaButton
                variant="outline"
                label="Open in New Window →"
                href={DEMO_URL}
                className="hidden md:inline-flex"
            />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
