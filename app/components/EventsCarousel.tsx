'use client';

import { useState } from 'react';

const events = [
  { src: '/images/gball_home.jpg',    title: 'Grand Ball 2025',                   date: 'April 5, 2025' },
  { src: '/images/mrmssdsc_home.jpg', title: 'Mr & Ms SDSC',                      date: 'Feb 15, 2025' },
  { src: '/images/pres_home.jpg',     title: 'Visit of The Philippine President', date: 'March 25, 2025' },
  { src: '/images/rosary_home.jpg',   title: 'Living Rosary',                     date: 'October 14, 2024' },
  { src: '/images/sportf_home.JPG',   title: 'Sportfest',                         date: 'November 24, 2025' },
];

const VISIBLE = 4;

export default function EventsCarousel() {
  const [start, setStart] = useState(0);

  const canPrev = start > 0;
  const canNext = start + VISIBLE < events.length;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10" style={{ color: '#2a9d5f' }}>Life at SDSC</h2>

        <div className="relative flex items-center gap-4">
          {/* Prev Button */}
          <button
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={!canPrev}
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition-all"
            style={{
              backgroundColor: canPrev ? '#2a9d5f' : '#d1d5db',
              cursor: canPrev ? 'pointer' : 'not-allowed',
            }}
          >
            ‹
          </button>

          {/* Cards */}
          <div className="flex gap-6 flex-1 overflow-hidden">
            {events.slice(start, start + VISIBLE).map((event, i) => (
              <div
                key={start + i}
                className="flex-1 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-50 group"
                style={{ minWidth: 0 }}
              >
                <div className="overflow-hidden" style={{ height: '280px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={event.src}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.3s ease',
                    }}
                    className="group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 leading-snug mb-1">{event.title}</h3>
                  <p className="text-sm font-medium" style={{ color: '#2a9d5f' }}>{event.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setStart((s) => Math.min(events.length - VISIBLE, s + 1))}
            disabled={!canNext}
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition-all"
            style={{
              backgroundColor: canNext ? '#2a9d5f' : '#d1d5db',
              cursor: canNext ? 'pointer' : 'not-allowed',
            }}
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: events.length - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{
                backgroundColor: i === start ? '#2a9d5f' : '#d1d5db',
                transform: i === start ? 'scale(1.3)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
