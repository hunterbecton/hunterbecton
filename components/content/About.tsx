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
    <section className='mx-auto max-w-6xl py-12 px-4 md:py-16 md:px-8 lg:py-24'>
      <header className='flex flex-wrap place-content-center lg:justify-between'>
        <motion.h3
          ref={sectionRef}
          initial='hidden'
          animate={ctrls}
          variants={titleAnimation}
          className='w-full max-w-[32.5rem] text-2xl font-bold text-stone-900 md:text-4xl lg:w-max lg:max-w-[28.75rem]'
        >
          Full stack developer with a passion for web design
        </motion.h3>
        <motion.div
          initial='hidden'
          animate={ctrls}
          variants={descriptionAnimation}
          className='mt-4 w-full max-w-[32.5rem] text-left text-sm font-normal text-stone-700 md:mt-8 md:text-lg lg:mt-0 lg:w-max lg:max-w-[28.75rem]'
        >
          <p>
            I can help you or your team design memorable, user-friendly web
            experiences and write the code to bring them to life.
          </p>
          <p className='mt-[1.5rem] md:mt-[1.75rem]'>
            In my free time, I share my knowledge with aspiring developers
            through blog posts and video tutorials so others can learn how to
            code.
          </p>
        </motion.div>
      </header>
    </section>
  );
};
