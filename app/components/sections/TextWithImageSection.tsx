'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  content: Record<string, unknown>;
}

export default function TextWithImageSection({ content }: Props) {
  const heading = (content.heading as string) || '';
  const paragraphs = (content.paragraphs as string[]) || [];
  const image = (content.image as string) || '';
  const imageAlt = (content.imageAlt as string) || heading;
  const imagePosition = (content.imagePosition as string) || 'right';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${imagePosition === 'left' ? '' : ''}`}>
          {imagePosition === 'left' && image && (
            <motion.div
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <Image src={image} alt={imageAlt} fill className="object-cover" />
            </motion.div>
          )}
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
            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
              ))}
            </div>
          </motion.div>
          {imagePosition !== 'left' && image && (
            <motion.div
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <Image src={image} alt={imageAlt} fill className="object-cover" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
