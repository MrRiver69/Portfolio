'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
  id?: number;
  type?: 'game' | 'model';
}

interface CarouselProps {
  images: CarouselImage[];
  onImageClick?: (id: number, type: 'game' | 'model') => void;
}

export default function Carousel({ images, onImageClick }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleImageClick = () => {
    const currentImage = images[currentIndex];
    if (onImageClick && currentImage.id !== undefined && currentImage.type) {
      onImageClick(currentImage.id, currentImage.type);
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative h-[400px] bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-md">
          <p className="text-gray-500 dark:text-gray-400">No images available</p>
        </div>
      </div>
    );
  }

  const isClickable = onImageClick && images[currentIndex].id !== undefined;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div 
        className={`relative h-[400px] overflow-hidden rounded-md ${isClickable ? 'cursor-pointer' : ''}`}
        onClick={isClickable ? handleImageClick : undefined}
      >
        <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center relative">
          <img 
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const container = target.parentElement;
              if (container) {
                const fallback = document.createElement('p');
                fallback.className = 'text-gray-700 dark:text-gray-300';
                fallback.textContent = images[currentIndex].alt;
                container.appendChild(fallback);
              }
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
            <p className="text-white text-sm">{images[currentIndex].alt}</p>
          </div>
        </div>
      </div>
      
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
} 