export const TagMarquee = () => {
  const tags = [
    'marketing automation',
    'headless cms',
    'web design',
    'front end development',
    'marketing analytics',
    'event tracking',
    'landing pages',
    'content management',
    'email marketing',
    'back end development',
  ];

  return (
    <section className='m-auto max-w-[100vw] overflow-hidden py-8'>
      <div className='flex gap-x-4 md:gap-x-6 lg:gap-x-8'>
        <div className='flex min-w-full shrink-0 animate-marquee-small items-center justify-around gap-x-4 motion-reduce:animate-none md:animate-marquee-medium md:gap-x-6 lg:animate-marquee-large lg:gap-x-8'>
          {tags.map((tag) => (
            <p
              key={tag}
              className='text-lg font-bold text-stone-900 md:text-xl lg:text-2xl'
            >
              {tag}
            </p>
          ))}
        </div>
        <div className='flex min-w-full shrink-0 animate-marquee-small items-center justify-around gap-x-4 motion-reduce:animate-none md:animate-marquee-medium md:gap-x-6 lg:animate-marquee-large lg:gap-x-8'>
          {tags.map((tag) => (
            <p
              key={tag}
              className='text-lg font-bold text-stone-900 md:text-xl lg:text-2xl'
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
