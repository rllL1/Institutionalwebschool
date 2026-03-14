'use client';

import { motion } from 'framer-motion';

interface Props {
  content: Record<string, unknown>;
}

export default function TextBlockSection({ content }: Props) {
  const heading = (content.heading as string) || '';
  const body = (content.body as string) || '';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          {heading && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{heading}</h2>
              <div className="w-12 h-0.5 bg-green-600 rounded-full mb-6" />
            </>
          )}
          <div className="text-gray-600 leading-relaxed whitespace-pre-line">{body}</div>
        </motion.div>
      </div>
    </section>
  );
}
