'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './hero.module.css';
import LightboxImages from '@/components/light-box-images';
import { Maximize } from '@/constants/icons';

interface LightboxImage {
  url: string;
  alt: string;
}

interface GalleryViewerProps {
  images: LightboxImage[];
  title: string;
  item:any[]
}

export default function Gallery({ images, title,item }: GalleryViewerProps) {
  console.log(item)
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeViewer = () => setIsOpen(false);

  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <>
      <div className={styles.images}>
        <div className={styles.image} onClick={() => openViewer(0)}>
          <Image
            src={images[0]?.url}
            alt={images[0]?.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.grid_images}>
          <div className={styles.row_images}>
            {[1, 2].map((i) => (
              <div key={i} className={styles.image} onClick={() => openViewer(i)}>
                <Image
                  src={images[i].url}
                  alt={images[i].alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>

          {images.length > 0 && images[3] && <div className={styles.image} onClick={() => openViewer(3)}>
            <Image
              src={images[3].url}
              alt={images[3].alt}
              layout="fill"
              objectFit="cover"
            />
          </div>}
        </div>

        <button className='bg-[#000000CF] hover:bg-black transition-all duration-500 absolute bottom-3 text-white font-medium text-sm right-3 rounded-2xl py-4 px-6 flex gap-1.5 items-center' onClick={() => openViewer(0)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
          </svg>
          View Additional Media

        </button>
      </div>

      <LightboxImages
        images={images}
        currentIndex={currentIndex}
        onClose={closeViewer}
        onNext={nextImage}
        onPrev={prevImage}
        isOpen={isOpen}
      />
    </>
  );
}
