'use client';

import Image from 'next/image';

interface Props {
  content: Record<string, unknown>;
}

export default function FeatureListSection({ content }: Props) {
  const heading = (content.heading as string) || '';
  const sideImage = (content.sideImage as string) || '';
  const features = (content.features as { title: string; description: string; icon: string }[]) || [];

  return (
    <section className="relative z-10 px-1 py-8 md:px-2">
      <div className="max-w-[100rem] mx-auto overflow-hidden rounded-[2rem] bg-white/95 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-green-800 via-emerald-700 to-green-900 px-6 py-8 md:px-10 md:py-12 text-white">
            {heading && <h2 className="mb-8 text-4xl font-bold leading-tight text-lime-300">{heading}</h2>}
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-emerald-500/30 ring-1 ring-emerald-200/40 flex items-center justify-center text-xs font-bold tracking-wider">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight">{f.title}</h3>
                    <p className="mt-2 text-base text-emerald-100/90 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {sideImage && (
            <div className="relative min-h-[420px] lg:min-h-[680px]">
              <Image src={sideImage} alt={heading} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
