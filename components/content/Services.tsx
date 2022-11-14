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
        'I create pixel-perfect, memorable web designs for your marketing campaigns and website while adhering to brand guidelines.',
    },
    {
      id: '0SwerDam',
      title: 'Full stack development',
      description:
        'I write code for all your marketing needs while implementing systems to empower your team to manage content and make quick updates.',
    },
    {
      id: '12QWsldf',
      title: 'Marketing engineering',
      description:
        'I automate marketing and sales tasks, ensure every valuable metric is tracked, and implement your current marketing tech stack.',
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
