"use client";

import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';

export default function VideoSection() {
  return (
    <SectionWrapper id="video-preview" className="bg-[var(--color-bg)]">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Experience EstateKing in Action
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Watch how easy it is to manage your real estate business with our professional website builder. 
            From listing properties to capturing leads, see the full power of EstateKing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-[900px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] shadow-2xl"
        >
          {/* Responsive aspect ratio container */}
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src="https://www.youtube.com/embed/kSPrG9r2aiQ"
              title="EstateKing Website Builder Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-sm font-medium text-[var(--color-text-secondary)]">
            ✨ Video: 2 minutes — learn everything you need to start.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
