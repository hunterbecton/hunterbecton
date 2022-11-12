import { FC, useRef, useEffect } from 'react';
import { useInView, useAnimation, motion } from 'framer-motion';

import { useNavStore } from '../../store/useNavStore';

interface SectionProps {
  title: string;
  subtitle: string;
  tag: string;
}

export const Section: FC<SectionProps> = ({ title, subtitle, tag }) => {
  const ref = useRef(null);

  const isInViewOnce = useInView(ref, { once: true });

  const isInView = useInView(ref);

  const ctrls = useAnimation();

  const setInView = useNavStore((state) => state.setInView);

  const sectionAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  useEffect(() => {
    if (isInViewOnce) {
      ctrls.start('visible');
    }

    if (!isInViewOnce) {
      ctrls.start('hidden');
    }
  }, [ctrls, isInViewOnce]);

  useEffect(() => {
    if (isInView) {
      setInView(tag);
    }
  }, [isInView]);

  return (
    <motion.div
      initial='hidden'
      variants={sectionAnimation}
      animate={ctrls}
      transition={{
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
      id={tag}
      ref={ref}
      className='mx-auto flex max-w-6xl justify-between py-6 px-4 md:py-8 md:px-8'
    >
      <p className='text-lg font-bold	uppercase text-stone-500 md:text-xl'>
        {subtitle}
      </p>
      <h2 className='text-lg font-bold uppercase text-stone-900 md:text-xl'>
        {title}
      </h2>
    </motion.div>
  );
};
