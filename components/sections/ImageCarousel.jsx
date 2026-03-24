'use client';
import Image from 'next/image';

const images = [
  '/images/x1.jpeg',
  '/images/x2.jpeg',
  '/images/x3.jpeg',
  '/images/x4.jpeg',
];

// Mobile: 3× duplication for seamless horizontal loop (cinema-scroll scrolls 33.3%)
const mobileTrack = [...images, ...images, ...images];

// Desktop columns: 2× duplication each — cinema-scroll-up/down scroll 50%
const col1 = [...images, ...images];
const col2 = [[...images].reverse(), [...images].reverse()].flat();

// Gap between images in vertical columns (px) — must be consistent for seamless loop
const COL_GAP = 10;

export default function ImageCarousel() {
  return (
    <>
      {/* ── Mobile: full-width horizontal strip, 3:2 aspect (taller than before) ── */}
      <div
        className="md:hidden relative w-full overflow-hidden"
        style={{ aspectRatio: '3/2' }}
      >
        {/* Subtle edge vignettes */}
        <div
          className="absolute inset-y-0 left-0 z-10 w-16 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--background), transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 z-10 w-16 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--background), transparent)' }}
          aria-hidden="true"
        />

        <div
          className="flex h-full"
          style={{
            width: `${mobileTrack.length * 100}%`,
            animation: 'cinema-scroll 52s linear infinite',
            willChange: 'transform',
          }}
        >
          {mobileTrack.map((src, i) => (
            <div
              key={i}
              className="relative h-full flex-shrink-0"
              style={{ width: `${100 / mobileTrack.length}%` }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop: 2-column vertical infinite scroll grid ── */}
      <div className="hidden md:block px-8 lg:px-20 py-6">
        <div
          className="max-w-3xl mx-auto grid grid-cols-2 gap-3 overflow-hidden rounded-2xl"
          style={{ height: '72vh' }}
        >
          {/* Column 1 — scrolls upward */}
          <div className="overflow-hidden rounded-xl">
            <div
              style={{
                animation: 'cinema-scroll-up 36s linear infinite',
                willChange: 'transform',
              }}
            >
              {col1.map((src, i) => (
                <div
                  key={i}
                  className="relative w-full overflow-hidden rounded-lg"
                  style={{ aspectRatio: '4/3', marginBottom: `${COL_GAP}px` }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1280px) 38vw, 28vw"
                    priority={i < 2}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 — scrolls downward, reversed for visual variety */}
          <div className="overflow-hidden rounded-xl">
            <div
              style={{
                animation: 'cinema-scroll-down 44s linear infinite',
                willChange: 'transform',
              }}
            >
              {col2.map((src, i) => (
                <div
                  key={i}
                  className="relative w-full overflow-hidden rounded-lg"
                  style={{ aspectRatio: '4/3', marginBottom: `${COL_GAP}px` }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1280px) 38vw, 28vw"
                    priority={i < 2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
