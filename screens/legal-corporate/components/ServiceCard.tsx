'use client';

import Link from '@/components/ui/Link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  href: string;
}

export const ServiceCard = ({ title, href }: ServiceCardProps) => {
  return (
    <motion.div
    key={title + href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      whileHover={{ scale: 1.025 }}    >
      <Link href={href}>
        <div className="bg-slate-100 outline outline-1 outline-slate-200 hover:outline-orange-600 hover:text-orange-600 text-center rounded-2xl py-5 text-lg font-semibold transition-all duration-200 cursor-pointer">
          {title}
        </div>
      </Link>
    </motion.div>
  );
};
