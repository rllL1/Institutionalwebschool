'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

interface Props {
  content: Record<string, unknown>;
}

export default function ImageCardsSection({ content }: Props) {
  const heading = (content.heading as string) || '';
  const subtitle = (content.subtitle as string) || '';
  const cards = (content.cards as { title: string; description: string; image: string; icon?: string }[]) || [];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {heading && (
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">{heading}</h2>
            {subtitle && <p className="text-gray-500 max-w-xl mx-auto">{subtitle}</p>}
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-green-500" />
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 border-l-4 border-l-green-500 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              custom={i} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.15 }} variants={fadeUp}
            >
              {card.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-white text-xs font-semibold bg-green-600/80 px-2.5 py-1 rounded-full backdrop-blur-sm">{card.title}</span>
                  </div>
                </div>
              )}
              <div className="p-5">
                <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
