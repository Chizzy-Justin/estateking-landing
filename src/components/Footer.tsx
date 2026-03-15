import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER, BUSINESS_NAME, BUSINESS_EMAIL } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-text-primary)] pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          
          {/* Column 1 - Brand */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6 inline-block" prefetch={false}>
              <span className="font-heading text-2xl font-bold text-[var(--color-primary)]">
                Estate<span className="text-white">King</span>
              </span>
            </Link>
            <p className="mb-6 text-slate-400">
              Professional real estate websites for Nigerian agents. High-converting, mobile-first, and delivered in 7 days.
            </p>
            {/* Optional Social Icons here */}
            <div className="flex items-center gap-4">
              {/* Add social links if needed later */}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col">
            <h3 className="mb-6 font-heading text-lg font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#demo" className="text-slate-400 transition-colors hover:text-white" prefetch={false}>
                  View Live Demo
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-slate-400 transition-colors hover:text-white" prefetch={false}>
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-slate-400 transition-colors hover:text-white" prefetch={false}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-slate-400 transition-colors hover:text-white" prefetch={false}>
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[var(--color-whatsapp)] transition-colors hover:text-emerald-400 flex items-center gap-2">
                  Chat on WhatsApp
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="flex flex-col">
            <h3 className="mb-6 font-heading text-lg font-bold text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-5">
              <li>
                <a href={`tel:${PHONE_NUMBER}`} className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 group-hover:bg-[var(--color-primary)] transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-semibold">{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_EMAIL}`} className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 group-hover:bg-[var(--color-primary)] transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>{BUSINESS_EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row md:text-left">
          <p>
            &copy; {currentYear} {BUSINESS_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            Built in Nigeria 🇳🇬
          </div>
        </div>
        
      </div>
    </footer>
  );
}
