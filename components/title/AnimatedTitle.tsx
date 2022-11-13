import { FC, useEffect, useRef } from 'react';
import { useAnimation, motion, useInView } from 'framer-motion';

interface AnimatedTitleProps {
  as?: string;
  text: string;
  styles: string;
}

export const AnimatedTitle: FC<AnimatedTitleProps> = ({ as, text, styles }) => {
  const ctrls = useAnimation();

  const titleRef = useRef(null);

  const isInView = useInView(titleRef, { once: true });

  useEffect(() => {
    if (isInView) {
      ctrls.start('visible');
    }
    if (!isInView) {
      ctrls.start('hidden');
    }
  }, [ctrls, isInView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  switch (as) {
    case 'h1':
      return (
        <h1 ref={titleRef} className={styles} aria-label={text} role='heading'>
          {text.split(' ').map((word, index) => {
            return (
              <motion.span
                className='mr-[0.25em] inline-block whitespace-nowrap'
                aria-hidden='true'
                key={index}
                initial='hidden'
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,
                  staggerChildren: 0.05,
                }}
              >
                {word.split('').map((character, index) => {
                  return (
                    <motion.span
                      className=' inline-block'
                      aria-hidden='true'
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </motion.span>
                  );
                })}
              </motion.span>
            );
          })}
        </h1>
      );
    case 'h2':
      return (
        <h2 ref={titleRef} className={styles} aria-label={text} role='heading'>
          {text.split(' ').map((word, index) => {
            return (
              <motion.span
                className='mr-[0.25em] inline-block whitespace-nowrap'
                aria-hidden='true'
                key={index}
                initial='hidden'
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,
                  staggerChildren: 0.05,
                }}
              >
                {word.split('').map((character, index) => {
                  return (
                    <motion.span
                      className=' inline-block'
                      aria-hidden='true'
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </motion.span>
                  );
                })}
              </motion.span>
            );
          })}
        </h2>
      );
    case 'h3':
      return (
        <h3 ref={titleRef} className={styles} aria-label={text} role='heading'>
          {text.split(' ').map((word, index) => {
            return (
              <motion.span
                className='mr-[0.25em] inline-block whitespace-nowrap'
                aria-hidden='true'
                key={index}
                initial='hidden'
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,
                  staggerChildren: 0.05,
                }}
              >
                {word.split('').map((character, index) => {
                  return (
                    <motion.span
                      className=' inline-block'
                      aria-hidden='true'
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </motion.span>
                  );
                })}
              </motion.span>
            );
          })}
        </h3>
      );
    case 'h4':
      return (
        <h4 ref={titleRef} className={styles} aria-label={text} role='heading'>
          {text.split(' ').map((word, index) => {
            return (
              <motion.span
                className='mr-[0.25em] inline-block whitespace-nowrap'
                aria-hidden='true'
                key={index}
                initial='hidden'
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,
                  staggerChildren: 0.05,
                }}
              >
                {word.split('').map((character, index) => {
                  return (
                    <motion.span
                      className=' inline-block'
                      aria-hidden='true'
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </motion.span>
                  );
                })}
              </motion.span>
            );
          })}
        </h4>
      );
    default:
      return (
        <h2 ref={titleRef} className={styles} aria-label={text} role='heading'>
          {text.split(' ').map((word, index) => {
            return (
              <motion.span
                className='mr-[0.25em] inline-block whitespace-nowrap'
                aria-hidden='true'
                key={index}
                initial='hidden'
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,
                  staggerChildren: 0.05,
                }}
              >
                {word.split('').map((character, index) => {
                  return (
                    <motion.span
                      className=' inline-block'
                      aria-hidden='true'
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </motion.span>
                  );
                })}
              </motion.span>
            );
          })}
        </h2>
      );
  }
};
