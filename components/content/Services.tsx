import { useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import { ServiceItem } from './ServiceItem';

export const Services = () => {
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

  const services = [
    {
      id: '9dRe540S',
      title: 'Web design',
      description:
        'I will create pixel-perfect web designs for your business while maintaining an organized design system and brand guidelines.',
    },
    {
      id: '0SwerDam',
      title: 'Front end development',
      description:
        'I will use React and modern CSS frameworks to create accessible and responsive web designs that your users love.',
    },
    {
      id: '12QWsldf',
      title: 'Back end development',
      description:
        'I will write the backend code for authentication, APIs, database management, business logic, and much more.',
    },
  ];

  useEffect(() => {
    if (isInView) {
      ctrls.start('visible');
    }
    if (!isInView) {
      ctrls.start('hidden');
    }
  }, [ctrls, isInView]);

  return (
    <section ref={sectionRef} className='py-12 px-4 md:py-16 md:px-8 lg:py-24'>
      <div className='mx-auto max-w-[32.5rem]'>
        <motion.h2
          initial='hidden'
          animate={ctrls}
          variants={titleAnimation}
          className='text-3xl font-bold text-stone-900 md:text-4xl'
        >
          Services
        </motion.h2>
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
