import { useEffect, useState, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import { useCopyToClipboard } from 'react-use';

import { useCursorStore } from '../../store/useCursorStore';
import { classNames } from '../../utils';

export const Email = () => {
  const setCursorVariant = useCursorStore((state) => state.setCursorVariant);
  const setCursorText = useCursorStore((state) => state.setCursorText);

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true });
  const ctrls = useAnimation();

  const emailAnimation = {
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

  const [isCopied, setIsCopied] = useState(false);

  const [state, copyToClipboard] = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard('hunter@hunterbecton.com');
  };

  const handleMouseEnter = () => {
    setCursorText('Copy');
    setCursorVariant('visible');
  };

  const handleMouseLeave = () => {
    setCursorVariant('hidden');
    setCursorText('Copy');
  };

  const handleMouseDown = () => {
    setCursorVariant('down');
  };

  const handleMouseUp = () => {
    setCursorVariant('visible');
  };

  useEffect(() => {
    const setTimer = setTimeout(() => {
      setIsCopied(false);
      setCursorText('Copy');
    }, 3000);

    if (isCopied) {
      setTimer;
    }

    return () => clearTimeout(setTimer);
  }, [isCopied]);

  useEffect(() => {
    if (state.value) {
      setIsCopied(true);
      setCursorText('Done!');
    }
  }, [state]);

  return (
    <section className='mx-auto max-w-6xl px-4 py-16 md:px-8 lg:py-24'>
      <motion.button
        ref={sectionRef}
        type='button'
        initial='hidden'
        animate={ctrls}
        variants={emailAnimation}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={() => handleCopy()}
        className='cursor-pointer text-2xl font-bold text-stone-900 hover:underline focus:outline-none focus-visible:text-orange-600 focus-visible:underline md:text-5xl lg:cursor-none lg:text-7xl'
      >
        hunter@hunterbecton.com
      </motion.button>
      <motion.p
        initial='hidden'
        animate={ctrls}
        variants={descriptionAnimation}
        className={classNames(
          isCopied ? 'text-orange-600' : 'text-stone-700',
          'mt-4 text-lg font-medium md:mt-8 md:text-2xl lg:mt-16 lg:text-4xl'
        )}
      >
        {isCopied ? 'Success!' : 'Click email to copy'}
      </motion.p>
    </section>
  );
};
