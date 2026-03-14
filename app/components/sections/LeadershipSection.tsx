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

function TierConnector() {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="w-3 h-3 rounded-full border-2 border-green-400 bg-white" />
      <div className="w-px h-6 bg-gradient-to-b from-green-400 to-green-300" />
      <div className="w-3 h-3 rounded-full border-2 border-green-400 bg-white" />
    </div>
  );
}

interface Props {
  content: Record<string, unknown>;
}

export default function LeadershipSection({ content }: Props) {
  const heading = (content.heading as string) || '';
  const subtitle = (content.subtitle as string) || '';
  const tiers = (content.tiers as { tier: number; members: { name: string; role: string; description: string; photo: string }[] }[]) || [];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
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

        {tiers.map((tier, tierIdx) => (
          <div key={tierIdx}>
            {tierIdx > 0 && <TierConnector />}
            {tier.members.length > 1 && (
              <div className="flex justify-center mb-0">
                <div className="relative" style={{ width: tier.members.length === 2 ? '40%' : '70%' }}>
                  <div className="h-px bg-gradient-to-r from-green-300 via-green-400 to-green-300 w-full" />
                  <div className="absolute top-0 left-0 w-px h-4 bg-green-400" />
                  <div className="absolute top-0 right-0 w-px h-4 bg-green-400" />
                  {tier.members.length === 3 && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-green-400" />
                  )}
                </div>
              </div>
            )}
            <div className={`flex flex-wrap justify-center gap-6 ${tier.members.length > 1 ? 'mt-4' : ''}`}>
              {tier.members.map((member, i) => (
                <motion.div
                  key={member.name}
                  className={`group bg-white rounded-2xl overflow-hidden flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    tierIdx === 0
                      ? 'w-80 md:w-96 shadow-lg shadow-green-100/50 border border-gray-100 border-t-4 border-t-green-500 ring-1 ring-green-100'
                      : 'w-72 shadow-md border border-gray-100'
                  }`}
                  custom={tierIdx * 3 + i} initial="hidden" whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
                >
                  <div className={`relative w-full ${tierIdx === 0 ? 'h-64' : 'h-52'} overflow-hidden`}>
                    <Image src={member.photo} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className={`-mt-4 z-10 bg-green-600 text-white font-bold rounded-full shadow-md tracking-wide ${tierIdx === 0 ? 'text-sm px-5 py-2' : 'text-xs px-4 py-1.5'}`}>
                    {member.role}
                  </div>
                  <div className="px-5 pt-4 pb-6">
                    <h3 className={`font-bold text-gray-800 mb-2 ${tierIdx === 0 ? 'text-lg md:text-xl' : 'text-base'}`}>{member.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
