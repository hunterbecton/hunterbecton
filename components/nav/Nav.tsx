import { useEffect, useState } from 'react';
import { useScroll, motion } from 'framer-motion';

import { useNavStore } from '../../store/useNavStore';
import { classNames } from '../../utils';

export const Nav = () => {
  const [isTop, setIsTop] = useState(true);
  const inView = useNavStore((state) => state.inView);

  const { scrollY } = useScroll();

  const nav = [
    { tag: 'about', href: '#about', text: 'About' },
    { tag: 'work', href: '#work', text: 'Work' },
    { tag: 'contact', href: '#contact', text: 'Contact' },
  ];

  useEffect(() => {
    return scrollY.onChange((latest) => {
      latest === 0 ? setIsTop(true) : setIsTop(false);
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    let navHeight = document.getElementById('nav').offsetHeight;
    let target = e.target.getAttribute('href');
    let location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - navHeight,
      behavior: 'smooth',
    });
  };

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      id='nav'
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
      className={classNames(
        isTop ? 'border-transparent' : 'border-stone-200',
        'sticky top-0 z-30 border-b-2 bg-stone-100 transition-all duration-500 ease-out'
      )}
    >
      <nav className='mx-auto flex max-w-6xl flex-wrap items-center gap-y-6 py-8 px-4 md:px-8'>
        <button
          type='button'
          onClick={handleScrollToTop}
          className='text-2xl font-medium text-stone-900 focus:outline-none focus-visible:text-orange-600 focus-visible:underline'
        >
          Hunter Becton
        </button>
        <ul className='ml-auto flex w-full justify-between gap-x-8 rounded-full bg-stone-200 px-8 py-3 md:w-auto md:justify-start'>
          {nav.map((item) => (
            <li key={item.tag} className='relative flex items-center'>
              <span
                className={classNames(
                  inView === item.tag ? 'opacity-100' : 'opacity-0',
                  'absolute -left-4 h-[8px] w-[8px] rounded-full bg-orange-600 transition-opacity duration-500 ease-out'
                )}
              ></span>
              <a
                href={item.href}
                onClick={handleClick}
                className='text-base font-normal text-stone-700 no-underline hover:underline focus:outline-none focus-visible:text-orange-600 focus-visible:underline'
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};
