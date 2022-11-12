import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { useCursorStore } from '../../store/useCursorStore';

export const Cursor = () => {
  const cursorText = useCursorStore((state) => state.cursorText);
  const cursorPosition = useCursorStore((state) => state.cursorPosition);
  const setCursorPosition = useCursorStore((state) => state.setCursorPosition);
  const cursorVariant = useCursorStore((state) => state.cursorVariant);

  useEffect(() => {
    const mouseMove = (e) => {
      setCursorPosition(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', mouseMove);

    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  const variants = {
    hidden: {
      x: cursorPosition.x - 40,
      y: cursorPosition.y - 40,
      opacity: 0,
      scale: 0.2,
    },
    visible: {
      x: cursorPosition.x - 40,
      y: cursorPosition.y - 40,
      opacity: 100,
      scale: 1,
    },
    down: {
      x: cursorPosition.x - 40,
      y: cursorPosition.y - 40,
      opacity: 100,
      scale: 0.8,
    },
  };

  return (
    <motion.div
      className='pointer-events-none fixed top-0 left-0 z-20 hidden h-20 w-20 items-center justify-center rounded-full bg-stone-50 shadow-lg lg:flex'
      initial='hidden'
      variants={variants}
      animate={cursorVariant}
      transition={{
        ease: 'easeOut',
        duration: 0,
        scale: {
          duration: 0.5,
          type: 'spring',
        },
      }}
    >
      <p className='select-none	text-center text-base font-medium text-stone-900'>
        {cursorText}
      </p>
    </motion.div>
  );
};
