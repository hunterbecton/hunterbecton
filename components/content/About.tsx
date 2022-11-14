import { useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';

export const About = () => {
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

  useEffect(() => {
    if (isInView) {
      ctrls.start('visible');
    }
    if (!isInView) {
      ctrls.start('hidden');
    }
  }, [ctrls, isInView]);

  return (
    <section
      ref={sectionRef}
      className='mx-auto max-w-6xl py-12 px-4 md:py-16 md:px-8 lg:py-24'
    >
      <header className='flex flex-wrap place-content-center lg:justify-between'>
        <motion.h3
          initial='hidden'
          animate={ctrls}
          variants={titleAnimation}
          className='w-full max-w-[32.5rem] text-2xl font-bold text-stone-900 md:text-4xl lg:w-max lg:max-w-[28.75rem]'
        >
          Remove design and technical blockers.
        </motion.h3>
        <motion.div
          initial='hidden'
          animate={ctrls}
          variants={descriptionAnimation}
          className='mt-4 w-full max-w-[32.5rem] text-left text-sm font-normal text-stone-700 md:mt-8 md:text-lg lg:mt-0 lg:w-max lg:max-w-[28.75rem]'
        >
          <p>
            Not having the appropriate design and development resources for your
            marketing team can leave everyone scrambling to piece together
            landing pages, site updates, and technical implementations.
          </p>
          <p className='mt-[1.5rem] md:mt-[1.75rem]'>
            Too often, teams overlook brand guidelines and best practices in the
            frenzy to get campaigns launched. I'm here to help your marketing
            team stay on brand and write the code to exceed your marketing
            goals.
          </p>
        </motion.div>
      </header>
    </section>
  );
};
