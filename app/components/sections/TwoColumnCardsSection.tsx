'use client';

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

export default function TwoColumnCardsSection({ content }: Props) {
  const heading = (content.heading as string) || '';
  const subtitle = (content.subtitle as string) || '';
  const cards = (content.cards as { title: string; body: string; color?: string }[]) || [];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              custom={i} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.15 }} variants={fadeUp}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
