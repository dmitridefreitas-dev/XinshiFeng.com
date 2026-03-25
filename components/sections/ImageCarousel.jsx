'use client';
import Image from 'next/image';

const images = [
  '/images/x1.jpeg',
  '/images/x2.jpeg',
  '/images/x3.jpeg',
  '/images/x4.jpeg',
];

export default function ImageGrid() {
  return (
    <section className="px-6 lg:px-12 py-12" aria-label="Image Grid">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-full overflow-hidden rounded-xl bg-[var(--surface-hover)] border border-border"
              style={{ aspectRatio: '4/3' }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 40vw, 30vw"
                priority={i < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
