'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    src: '/images/homepage2.jpg',
    caption: 'Shaping the Future of Education',
    sub: 'World-class learning environment designed for student success',
    position: 'center center',
  },
  {
    src: '/images/homapage3.png',
    caption: 'Excellence in Every Classroom',
    sub: "Dedicated faculty committed to nurturing every student's potential",
    position: 'center top',
  },
  {
    src: '/images/background.png',
    caption: 'Our Graduates, Our Difference',
    sub: 'Producing leaders, innovators, and responsible citizens since 2001',
    position: 'center center',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '600px' }}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: index === current ? 1 : 0 }}
        >
          {/* Background Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt={slide.caption}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: slide.position,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.40)' }} />
          {/* Caption */}
          <div className="absolute inset-0 flex flex-col items-start justify-center px-12 md:px-24 text-white text-left" style={{ zIndex: 10 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg max-w-3xl">
              {slide.caption}
            </h1>
            <p className="text-lg md:text-2xl drop-shadow-md max-w-xl leading-relaxed">
              {slide.sub}
            </p>
          </div>
        </div>
      ))}

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              backgroundColor: index === current ? '#2a9d5f' : 'rgba(255,255,255,0.6)',
              transform: index === current ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* Prev Arrow */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all"
      >
        ‹
      </button>

      {/* Next Arrow */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all"
      >
        ›
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-30 z-20">
        <div
          key={current}
          className="h-full"
          style={{
            backgroundColor: '#2a9d5f',
            animation: 'progress 10s linear forwards',
          }}
        />
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
