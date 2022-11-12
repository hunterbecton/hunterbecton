import { FC } from 'react';

export interface DetailSectionProps {
  title: string;
  details: string;
}

export const DetailSection: FC<DetailSectionProps> = ({ title, details }) => {
  return (
    <div className='flex border-b-2 border-stone-200 py-4 md:py-5 lg:py-6'>
      <p className='text-lg font-normal text-stone-700 md:text-xl lg:text-2xl'>
        {title}
      </p>
      <p className='ml-auto text-lg font-normal text-stone-700 md:text-xl  lg:text-2xl'>
        {details}
      </p>
    </div>
  );
};
