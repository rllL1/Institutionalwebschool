'use client';

export default function HeroCarousel() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/savio.mp4" type="video/mp4" />
        </video>
      </div>

      <section className="relative w-full" style={{ height: 'calc(100vh - 72px)' }} />
    </>
  );
}
