'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/images/x1.jpeg',
  '/images/x2.jpeg',
  '/images/x3.jpeg',
  '/images/x4.jpeg',
];

export default function ImageCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-8">
      <motion.div
        className="flex"
        animate={{
          x: ['0%', '-100%'],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          },
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="flex-shrink-0 w-1/4 px-2">
            <Image
              src={src}
              alt={`Carousel image ${i + 1}`}
              width={500}
              height={300}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}