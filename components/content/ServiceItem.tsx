import { useEffect, useRef, FC } from 'react';
import {
  useAnimation,
  useInView,
  motion,
  useReducedMotion,
} from 'framer-motion';

interface ServiceItemProps {
  service: {
    title: string;
    description: string;
  };
}

export const ServiceItem: FC<ServiceItemProps> = ({ service }) => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true });
  const ctrls = useAnimation();

  const serviceTitleAnimation = {
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

  const serviceDescriptionAnimation = {
    hidden: {
      opacity: 0,
      y: '50%',
    },
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: 0.2,
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

  return (
    <div
      ref={sectionRef}
      key={service.title}
      className='mt-2.5 border-b-2 border-stone-200 py-8 md:mt-4 md:py-10'
    >
      <motion.h3
        initial='hidden'
        animate={ctrls}
        variants={serviceTitleAnimation}
        className='text-2xl font-medium text-stone-900 md:text-3xl'
      >
        {service.title}
      </motion.h3>
      <motion.p
        initial='hidden'
        animate={ctrls}
        variants={serviceDescriptionAnimation}
        className='mt-2 text-sm font-normal text-stone-700 md:mt-3 md:text-base'
      >
        {service.description}
      </motion.p>
    </div>
  );
};
