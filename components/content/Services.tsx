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
      title: 'Developer experience',
      description: `I enhance the developer journey by creating intuitive tools, clear documentation, and streamlined workflows that improve productivity and foster community engagement.`,
    },
    {
      id: '0SwerDam',
      title: 'Full-stack development',
      description: `I build robust, scalable web applications that meet your marketing goals, seamlessly integrating front-end and back-end systems to empower your team with efficient, manageable solutions.`,
    },
    {
      id: '12QWsldf',
      title: 'Content marketing',
      description: `I craft high-quality, educational content that resonates with developers, driving engagement and aligning your brand's voice with your technical audience.`,
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
    <section ref={sectionRef} className="py-12 px-4 md:py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[32.5rem]">
        <motion.h2
          initial="hidden"
          animate={ctrls}
          variants={titleAnimation}
          className="text-3xl font-bold text-stone-900 md:text-4xl"
        >
          Skillset
        </motion.h2>
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
