import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface Props {
  variant: 'whatsapp' | 'phone' | 'primary' | 'outline';
  label: string;
  href: string;
  icon?: ReactNode; // Allow custom icon, but default for whatsapp/phone
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CtaButton({ variant, label, href, icon, size = 'md', className = '' }: Props) {
  let bgClass = '';
  let textClass = 'text-white';
  let borderClass = 'border border-transparent';
  let defaultIcon = null;

  switch (variant) {
    case 'whatsapp':
      bgClass = 'bg-[var(--color-whatsapp)] hover:bg-[#1EBE5D]';
      defaultIcon = <MessageCircle className="w-5 h-5" />;
      break;
    case 'phone':
    case 'primary':
      bgClass = 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]';
      if (variant === 'phone') defaultIcon = <Phone className="w-5 h-5" />;
      break;
    case 'outline':
      bgClass = 'bg-transparent hover:bg-[var(--color-primary-light)]';
      textClass = 'text-[var(--color-primary)]';
      borderClass = 'border-2 border-[var(--color-primary)]';
      break;
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-bold',
  };

  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${bgClass} ${textClass} ${borderClass} ${sizeClasses[size]} ${className}`}
    >
      {icon || defaultIcon}
      {label}
    </Link>
  );
}
