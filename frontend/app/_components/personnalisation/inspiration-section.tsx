'use client';

import Image from 'next/image';
import React from 'react';

export default function ImageSlider() {
  const images = [
    '/slider/image1.jpg',
    '/slider/image2.jpg',
    '/slider/image3.jpg',
  ];

  return (
    <div className="w-full overflow-hidden">
      <h2 className="p-4 text-3xl font-bold uppercase">Inspirations</h2>
      <div className="flex animate-slide">
        {images.map((src, index) => (
          <div className="relative w-1/3 p-2" key={index}>
            <div className="relative w-full h-80 rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                className="object-cover"
                layout="fill"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
