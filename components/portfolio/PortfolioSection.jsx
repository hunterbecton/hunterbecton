import Image from 'next/image';

import {
  ColumnThree,
  ColumnTitle,
  ColumnText,
  ColumnTwo,
  ColumnList,
  ColumnListItem,
  ColumnListItemLink,
} from 'components';

export const PortfolioSection = ({
  title,
  bgColor,
  img,
  description,
  technologies,
  links,
  selectClass,
}) => {
  return (
    <section className={`${selectClass} bg-zinc-800`}>
      <div
        className={`${bgColor} flex w-full justify-between pt-12 pl-12 pr-12`}
      >
        <h3 className='mb-1 self-end font-serif text-3xl text-zinc-50 sm:text-4xl md:mb-2 lg:text-5xl'>
          {title}
        </h3>
        <div className='flex h-32 w-32 items-center justify-center bg-zinc-900'>
          <div className='relative h-10 w-10'>
            <Image
              src={img}
              alt={`Feature image for ${title}`}
              layout='fill'
              objectFit='contain'
              objectPosition='center center'
            />
          </div>
        </div>
      </div>
      <div className='relative grid w-full grid-cols-7 gap-4 bg-zinc-800 p-20'>
        <ColumnThree>
          <ColumnTitle>Description</ColumnTitle>
          <ColumnText>{description}</ColumnText>
        </ColumnThree>
        <ColumnTwo>
          <ColumnTitle>Technologies</ColumnTitle>
          <ColumnList>
            {technologies.map((tech) => (
              <ColumnListItem key={tech}>{tech}</ColumnListItem>
            ))}
          </ColumnList>
        </ColumnTwo>
        <ColumnTwo>
          <ColumnTitle>Links</ColumnTitle>
          <ColumnList>
            {links.map((link) => (
              <ColumnListItemLink
                key={link.text}
                href={link.href}
                color={link.color}
              >
                {link.text}
              </ColumnListItemLink>
            ))}
          </ColumnList>
        </ColumnTwo>
      </div>
    </section>
  );
};
