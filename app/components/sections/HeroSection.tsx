'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  content: Record<string, unknown>;
}

export default function HeroSection({ content }: Props) {
  const title = (content.title as string) || '';
  const subtitle = (content.subtitle as string) || '';
  const description = (content.description as string) || '';
  const backgroundImage = (content.backgroundImage as string) || '/images/background.png';

  return (
    <section className="relative h-[520px] md:h-[560px] overflow-hidden">
      <Image src={backgroundImage} alt={title} fill className="object-cover" priority quality={85} />
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 via-black/55 to-black/75" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          className="text-green-300 text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
        <motion.h1
          className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
