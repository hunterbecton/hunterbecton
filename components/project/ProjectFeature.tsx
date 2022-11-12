import { FC, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useInView, motion, useAnimation } from 'framer-motion';

import { useProjectStore } from '../../store/useProjectStore';
import { ImageSliderImage } from '../modal/ImageSlider';
import { useCursorStore } from '../../store/useCursorStore';

interface ProjectFeatureProps {
  projectId: string;
  title: string;
  description: string;
  features: ImageSliderImage[];
}

export const ProjectFeature: FC<ProjectFeatureProps> = ({
  projectId,
  title,
  description,
  features,
}) => {
  const setIsOpen = useProjectStore((state) => state.setIsOpen);
  const setActiveProjectId = useProjectStore(
    (state) => state.setActiveProjectId
  );
  const setCursorVariant = useCursorStore((state) => state.setCursorVariant);
  const setCursorText = useCursorStore((state) => state.setCursorText);

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true });
  const ctrls = useAnimation();

  const titleAnimation = {
    hidden: {
      opacity: 0,
      y: `50%`,
    },
    visible: {
      opacity: 1,
      y: `0%`,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const descriptionAnimation = {
    hidden: {
      opacity: 0,
      y: `50%`,
    },
    visible: {
      opacity: 1,
      y: `0%`,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: 0.2,
      },
    },
  };

  const imageAnimation = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      ctrls.start('visible');
    }
    if (!isInView) {
      ctrls.start('hidden');
    }
  }, [ctrls, isInView]);

  const handleClick = (projectId) => {
    setActiveProjectId(projectId);
    setIsOpen(true);
  };

  const handleMouseEnter = () => {
    setCursorText('View');
    setCursorVariant('visible');
  };

  const handleMouseLeave = () => {
    setCursorVariant('hidden');
  };

  const handleMouseDown = () => {
    setCursorVariant('down');
  };

  const handleMouseUp = () => {
    setCursorVariant('visible');
  };

  return (
    <section className='relative mx-auto grid max-w-6xl grid-cols-2 gap-x-0 overflow-y-hidden py-12 px-4 md:py-16 md:px-8 lg:gap-x-8 lg:py-24'>
      <div className='col-span-2 flex flex-col lg:col-span-1'>
        <header className='mb-8 max-w-[28.75rem] md:mb-12 lg:mb-20'>
          <h3 ref={sectionRef} className='sr-only'>
            {title}
          </h3>
          <motion.button
            initial='hidden'
            animate={ctrls}
            variants={titleAnimation}
            type='button'
            className='text-4xl font-bold text-stone-900 hover:underline focus:outline-none focus-visible:text-orange-600 focus-visible:underline md:text-5xl'
            onClick={() => handleClick(projectId)}
          >
            {title}
          </motion.button>
          <motion.p
            initial='hidden'
            animate={ctrls}
            variants={descriptionAnimation}
            className='mt-2.5 text-base font-normal text-stone-700 md:mt-3 md:text-lg'
          >
            {description}
          </motion.p>
        </header>
        <motion.button
          type='button'
          initial='hidden'
          animate={ctrls}
          variants={imageAnimation}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={() => handleClick(projectId)}
          className='relative mt-auto hidden aspect-square w-full max-w-[22.5rem] cursor-pointer place-self-end focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-orange-600 lg:block lg:cursor-none'
        >
          <Image
            className='z-0 object-cover'
            src={features[0].src}
            alt={features[0].alt}
            fill
          />
        </motion.button>
      </div>
      <div className='col-span-2 flex flex-wrap items-end gap-4 md:flex-nowrap md:gap-8 lg:col-span-1'>
        <motion.button
          type='button'
          initial='hidden'
          animate={ctrls}
          variants={imageAnimation}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={() => handleClick(projectId)}
          className='group relative mt-auto block aspect-square w-full max-w-none cursor-pointer place-self-end focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-orange-600 lg:hidden lg:max-w-[22.5rem] lg:cursor-none'
        >
          <div className='absolute top-1/2 left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-stone-50 shadow-lg group-hover:underline lg:hidden'>
            View
          </div>
          <Image
            className='z-0 object-cover'
            src={features[0].src}
            alt={features[0].alt}
            fill
          />
        </motion.button>
        <motion.button
          type='button'
          initial='hidden'
          animate={ctrls}
          variants={imageAnimation}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={() => handleClick(projectId)}
          className='group relative aspect-square w-full max-w-none cursor-pointer focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-orange-600 lg:max-w-[35rem] lg:cursor-none'
        >
          <div className='absolute top-1/2 left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-stone-50 shadow-lg group-hover:underline lg:hidden'>
            View
          </div>
          <Image
            className='z-0 object-cover'
            src={features[1].src}
            alt={features[1].alt}
            fill
          />
        </motion.button>
      </div>
    </section>
  );
};
