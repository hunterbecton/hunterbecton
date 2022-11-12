import { FC } from 'react';

interface DetailTitleProps {
  title: string;
}

export const DetailTitle: FC<DetailTitleProps> = ({ title }) => {
  return (
    <div className='border-b-2 border-stone-200 py-4 md:py-5 lg:py-6'>
      <p className='text-lg font-bold text-stone-900 md:text-xl lg:text-2xl'>
        {title}
      </p>
    </div>
  );
};
