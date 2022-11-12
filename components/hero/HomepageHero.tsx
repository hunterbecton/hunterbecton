import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion';

import { useProjectStore } from '../../store/useProjectStore';
import { Project } from '../../app/page';
import { AnimatedTitle } from '../../components';

interface HomepageHeroProps {
  projects: Project[];
}

export const HomepageHero: FC<HomepageHeroProps> = ({ projects }) => {
  const setIsOpen = useProjectStore((state) => state.setIsOpen);
  const setActiveProjectId = useProjectStore(
    (state) => state.setActiveProjectId
  );

  const handleClick = (projectId) => {
    setActiveProjectId(projectId);
    setIsOpen(true);
  };

  return (
    <section className='mx-auto max-w-6xl py-12 px-4 md:py-16 md:px-8 lg:py-24'>
      <AnimatedTitle
        text='I design and code for the web'
        styles='mx-auto max-w-[32.5rem] text-center text-4xl font-bold text-stone-900 md:text-6xl lg:mx-0 lg:max-w-[38.25rem] lg:text-left lg:text-7xl'
      />
      <div className='mt-8 flex flex-wrap justify-between gap-x-8 md:mt-10 lg:mt-12'>
        <div className='mx-auto h-[21.25rem] w-[32.5rem] overflow-y-hidden lg:mx-0'>
          <motion.div
            initial={{
              y: '100%',
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className='relative h-full w-full'
          >
            <Image
              className='object-cover'
              src='/hunter-skyline.jpg'
              alt='Hunter Becton in front of the Atlanta skyline'
              fill
              priority
            />
          </motion.div>
        </div>
        <div className='mx-auto mt-auto w-full max-w-[32.5rem] overflow-x-hidden lg:mx-0 lg:w-[22.5rem]'>
          {projects.map((project, i) => (
            <div
              key={project.projectId}
              className='flex justify-end border-b-2 border-stone-200 py-6'
            >
              <motion.button
                type='button'
                initial={{
                  x: '100%',
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.2, 0.65, 0.3, 0.9],
                  delay: i * 0.2,
                }}
                className='text-xl font-bold text-stone-700 hover:underline focus:outline-none focus-visible:text-orange-600 focus-visible:underline'
                onClick={() => handleClick(project.projectId)}
              >
                {project.title}
              </motion.button>
            </div>
          ))}
          <motion.p
            initial={{
              x: '100%',
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.2, 0.65, 0.3, 0.9],
              delay: 0.6,
            }}
            className='mt-16 text-right text-xl font-medium text-stone-500'
          >
            Based in Atlanta{' '}
            <span role='img' aria-label='peach'>
              🍑
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};
