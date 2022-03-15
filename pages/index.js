import { About, MainLayout, Container, PortfolioSection } from 'components';

export default function Home() {
  return (
    <MainLayout>
      <Container padding='py-0 sm:py-12 lg:py-28'>
        <About />
        <PortfolioSection
          title='LeapPage'
          bgColor='bg-[#3B82F6]'
          selectClass='leappage'
          img='/leappage-logo.png'
          description={`LeapPage is a landing page builder made for sales teams to create relevant content experiences for their leads that perform and look great across any device.`}
          technologies={['Next.js', 'React', 'Stripe', 'Tailwind', 'MongoDB']}
          links={[
            {
              text: 'Site',
              href: 'https://leappage.com?ref=hunterbecton',
              color: 'text-[#3B82F6]',
            },
          ]}
        />
        <PortfolioSection
          title='Mattermix'
          bgColor='bg-[#4f46e5]'
          selectClass='mattermix'
          img='/mattermix-logo.png'
          description={`Mattermix is an image generation API to help automate and create images at scale with HTML and CSS. The API is RESTful and has an integration with Zapier to simplifying automation with other apps.`}
          technologies={[
            'Next.js',
            'React',
            'Lambda',
            'Stripe',
            'Tailwind',
            'MongoDB',
            'Zapier',
          ]}
          links={[
            {
              text: 'Site',
              href: 'https://mattermix.com?ref=hunterbecton',
              color: 'text-[#4f46e5]',
            },
            {
              text: 'Zapier',
              href: 'https://zapier.com/apps/mattermix/integrations',
              color: 'text-[#4f46e5]',
            },
          ]}
        />
        <PortfolioSection
          title='Skillthrive'
          bgColor='bg-[#30bc72]'
          selectClass='skillthrive'
          img='/skillthrive-logo.png'
          description={`What started as a fun way to share my knowledge and explore new topics has now grown into a YouTube channel with over 50K subscribers. I've recently launched a new version of the site that features comprehensive written guides that are paired with video and code.`}
          technologies={[
            'Next.js',
            'React',
            'Stripe',
            'Tailwind',
            'MongoDB',
            'MDX',
          ]}
          links={[
            {
              text: 'Site',
              href: 'https://www.skillthrive.com?ref=hunterbecton',
              color: 'text-[#30bc72]',
            },
            {
              text: 'YouTube',
              href: 'https://www.youtube.com/skillthrive',
              color: 'text-[#30bc72]',
            },
          ]}
        />
        <PortfolioSection
          title='Whamboard'
          bgColor='bg-[#ff3377]'
          selectClass='wham'
          img='/wham-logo.png'
          description={`No more sitting in awkward silence during a video conference. Whamboard is a fun way to respond to your teammates or friends with sounds. Pick from default sounds or upload your own to create an interactive soundboard you can share and use in realtime.`}
          technologies={[
            'WebSockets',
            'React',
            'Node',
            'Stripe',
            'Express',
            'Style Components',
          ]}
          links={[
            {
              text: 'Site',
              href: 'https://whamboard.com?ref=hunterbecton',
              color: 'text-[#ff3377]',
            },
          ]}
        />
        <PortfolioSection
          title='Dog Adoption Bot'
          bgColor='bg-[#ff7e62]'
          selectClass='dog'
          img='/dog-emoji.png'
          description={`I wanted to explore the Twitter API by building a Twitter bot in Node, but I wanted the bot to do something good. I decided to work with the PetFinder API to search dogs within the Atlanta area that are up for adoption and share one every hour.`}
          technologies={['Node', 'Twitter API']}
          links={[
            {
              text: 'Twitter',
              href: 'https://twitter.com/ATLDogAdoptions',
              color: 'text-[#ff7e62]',
            },
            {
              text: 'Tutorial',
              href: 'https://youtu.be/lco4xCX85Cw',
              color: 'text-[#ff7e62]',
            },
          ]}
        />
      </Container>
    </MainLayout>
  );
}
