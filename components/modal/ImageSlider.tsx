import { FC, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useWindowSize } from 'react-use';

import useWheelScroll from '../../hooks/useWheelScroll';
import { classNames } from '../../utils';

export interface ImageSliderImage {
  id: string;
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: ImageSliderImage[];
}

export const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  const sliderRef = useRef(null);

  const marginLeft = useMotionValue(0);

  const [maxScroll, setMaxScroll] = useState(0);

  const { width: windowWidth } = useWindowSize();

  const { deltaY } = useWheelScroll();

  useEffect(() => {
    const newMaxScroll = sliderRef.current.scrollWidth - windowWidth / 2 + 64;

    setMaxScroll(newMaxScroll);
  }, [windowWidth]);

  useEffect(() => {
    // Handle scroll up
    if (deltaY < 0) {
      let currentMargin = Math.abs(marginLeft.get());

      let newMargin = currentMargin - Math.abs(deltaY);

      // Avoid scrolling up if margin is 0
      if (newMargin <= 0) {
        return marginLeft.set(0);
      }

      marginLeft.set(-newMargin);
    }

    // Handle scroll down
    if (deltaY > 0) {
      let currentMargin = Math.abs(marginLeft.get());

      let newMargin = currentMargin + Math.abs(deltaY);

      // Avoid scrolling past max
      if (currentMargin >= Math.abs(maxScroll)) {
        return marginLeft.set(-maxScroll);
      }

      marginLeft.set(-newMargin);
    }
  }, [deltaY]);

  return (
    <motion.div
      ref={sliderRef}
      style={{
        marginLeft: useSpring(marginLeft, {
          stiffness: 1000,
          damping: 50,
          restDelta: 0.005,
        }),
      }}
      className='hidden items-center gap-16 px-16 lg:flex'
    >
      {images.map((image) => (
        <div
          key={image.id}
          className={classNames(
            marginLeft.get() === 0 ? 'shadow' : 'shadow-2xl',
            'relative aspect-video h-full bg-stone-200 transition-shadow duration-700	ease-out'
          )}
        >
          <Image
            className='object-cover'
            src={image.src}
            alt={image.alt}
            fill
          />
        </div>
      ))}
    </motion.div>
  );
};
