import Image from 'next/image';

export const NameTitle = () => {
  return (
    <div className='col-span-7 mb-12 flex flex-wrap'>
      <div className='relative mr-8 mb-8 h-32 w-32'>
        <Image
          src='/hunter.jpeg'
          alt='Hunter Becton'
          layout='fill'
          objectFit='cover'
          objectPosition='center center'
        />
      </div>
      <div>
        <p className='mb-2 text-base font-semibold uppercase tracking-wider text-zinc-400'>
          Full-Stack JavaScript Developer
        </p>
        <h1 className='font-serif text-6xl text-zinc-50'>Hunter Becton</h1>
      </div>
    </div>
  );
};
