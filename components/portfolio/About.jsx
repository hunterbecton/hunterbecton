import {
  ColumnTitle,
  ColumnText,
  ColumnList,
  ColumnListItem,
  ColumnListItemLink,
  ColumnTwo,
  ColumnThree,
  NameTitle,
} from 'components';

export const About = () => {
  return (
    <section className='about relative grid w-full grid-cols-7 gap-4 bg-zinc-800 p-10 lg:p-20'>
      <NameTitle />
      <ColumnThree>
        <ColumnTitle>About</ColumnTitle>
        <ColumnText>
          {`I'm a full-stack JavaScript developer in Atlanta, GA. I'm building a community for anyone to learn how to code on Skillthrive, plus creating other entertaining and educational content for geeks alike.`}
        </ColumnText>
      </ColumnThree>
      <ColumnTwo>
        <ColumnTitle>Technologies</ColumnTitle>
        <ColumnList>
          <ColumnListItem>TypeScript</ColumnListItem>
          <ColumnListItem>Next.js</ColumnListItem>
          <ColumnListItem>React</ColumnListItem>
          <ColumnListItem>Tailwind</ColumnListItem>
          <ColumnListItem>MongoDB</ColumnListItem>
          <ColumnListItem>Express</ColumnListItem>
        </ColumnList>
      </ColumnTwo>
      <ColumnTwo>
        <ColumnTitle>Quick links</ColumnTitle>
        <ColumnList>
          <ColumnListItemLink
            color='text-[#fbbf24]'
            href='https://github.com/hunterbecton'
          >
            GitHub
          </ColumnListItemLink>
          <ColumnListItemLink
            color='text-[#fbbf24]'
            href='https://www.youtube.com/skillthrive'
          >
            YouTube
          </ColumnListItemLink>
          <ColumnListItemLink
            color='text-[#fbbf24]'
            href='https://twitter.com/hunterbecton'
          >
            Twitter
          </ColumnListItemLink>
          <ColumnListItemLink
            color='text-[#fbbf24]'
            href='https://www.linkedin.com/in/huntergarrett'
          >
            LinkedIn
          </ColumnListItemLink>
          <ColumnListItemLink
            color='text-[#fbbf24]'
            href='mailto:hunter@hunterbecton.com'
          >
            Email
          </ColumnListItemLink>
        </ColumnList>
      </ColumnTwo>
    </section>
  );
};
