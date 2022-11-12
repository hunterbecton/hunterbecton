import { FC, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

import { useProjectStore } from '../../store/useProjectStore';
import { DetailSection, DetailTitle, ImageSlider } from '..';
import { DetailSectionProps } from './DetailSection';
import { ImageSliderImage } from './ImageSlider';
import Image from 'next/image';

interface ProjectModalProps {
  projectId: string;
  description: string;
  title: string;
  details: DetailSectionProps[];
  images: ImageSliderImage[];
  link: string;
}

export const ProjectModal: FC<ProjectModalProps> = ({
  title,
  description,
  projectId,
  details,
  images,
  link,
}) => {
  const isOpen = useProjectStore((state) => state.isOpen);
  const setIsOpen = useProjectStore((state) => state.setIsOpen);
  const activeProjectId = useProjectStore((state) => state.activeProjectId);
  const setActiveProjectId = useProjectStore(
    (state) => state.setActiveProjectId
  );

  const closeRef = useRef(null);

  const handleClose = () => {
    setIsOpen(false);
    setActiveProjectId(null);
  };

  return (
    <AnimatePresence>
      {isOpen && projectId === activeProjectId ? (
        <Dialog
          open={isOpen}
          onClose={() => handleClose()}
          as='div'
          className='fixed inset-0 z-50 overflow-x-hidden overflow-y-scroll lg:overflow-hidden'
          initialFocus={closeRef}
          static
        >
          <div className='min-h-screen'>
            <Dialog.Overlay />
            <motion.div
              initial={{
                opacity: 0,
                y: '40%',
              }}
              animate={{
                opacity: 1,
                y: '0',
                transition: {
                  ease: 'easeOut',
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                y: '40%',
                transition: {
                  ease: 'easeIn',
                  duration: 0.2,
                },
              }}
            >
              <div
                className='relative w-screen transform bg-stone-100 py-12 px-4 transition-all md:py-16 md:px-8 lg:h-screen lg:px-0 lg:py-24 lg:pl-8'
                role='dialog'
                aria-modal='true'
                aria-labelledby='modal-headline'
              >
                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='right-0 z-20 hidden bg-orange-600 px-10 py-5 text-lg font-semibold uppercase tracking-wide text-stone-50 duration-500 ease-out hover:bg-orange-700 focus:outline-none focus-visible:bg-orange-700 focus-visible:underline md:px-12 md:py-6 lg:absolute lg:bottom-24 lg:inline'
                >
                  Visit live site
                </a>
                <motion.button
                  ref={closeRef}
                  type='button'
                  tabIndex={0}
                  className='absolute top-4 right-4 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 md:top-6 md:right-6'
                  onClick={() => handleClose()}
                  whileHover={{
                    rotate: 90,
                    transition: { type: 'spring', duration: 0.5 },
                  }}
                >
                  <svg
                    className='h-8 w-8 md:h-12 md:w-12'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.758 17.243 12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </motion.button>
                <div className='mx-auto flex h-full max-w-6xl'>
                  {/* Content */}
                  <div className='flex w-full max-w-none flex-col lg:w-auto lg:max-w-[32.5rem] lg:shrink-0 lg:justify-between'>
                    <header className='max-w-[32.5rem]'>
                      <h4 className='text-4xl font-bold text-stone-900 md:text-6xl lg:text-7xl'>
                        {title}
                      </h4>
                      <p className='mt-2 text-lg font-medium text-stone-700 md:mt-2.5 md:text-2xl lg:mt-4 lg:text-3xl'>
                        {description}
                      </p>
                    </header>
                    <a
                      href={link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='z-20 mt-6 inline w-max bg-orange-600 px-10 py-5 text-base font-semibold uppercase tracking-wide text-stone-50 duration-500 ease-out hover:bg-orange-700 focus:outline-none focus-visible:bg-orange-700 focus-visible:underline md:mt-8 md:px-12 md:py-6 md:text-lg lg:hidden '
                    >
                      Visit live site
                    </a>
                    <div className='mt-6 md:mt-8'>
                      <DetailTitle title='Details' />
                      {details.map((detail) => (
                        <DetailSection
                          key={detail.title}
                          title={detail.title}
                          details={detail.details}
                        />
                      ))}
                    </div>
                    {/* Images for tablet & mobile */}
                    <div className='mt-6 flex flex-col gap-6 md:mt-8 lg:hidden lg:gap-8'>
                      {images.map((image) => (
                        <div
                          key={image.id}
                          className='relative aspect-video w-full bg-stone-200 shadow'
                        >
                          <Image
                            className='object-cover'
                            src={image.src}
                            alt={image.alt}
                            fill
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Image slider for desktop only */}
                  <ImageSlider images={images} />
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      ) : null}
    </AnimatePresence>
  );
};
