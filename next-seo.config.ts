import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  titleTemplate: 'Hunter Becton | %s',
  title: 'Web developer and content marketer in Atlanta, GA',
  description: `Web developer and content marketer focused on crafting exceptional developer experiences and bridging the gap between marketing and technology.`,
  openGraph: {
    title: 'Web developer and content marketer in Atlanta, GA',
    description: `Web developer and content marketer focused on crafting exceptional developer experiences and bridging the gap between marketing and technology.`,
    type: 'website',
    locale: 'en_US',
    site_name: 'Hunter Becton',
    images: [
      {
        url: `https://hunterbecton.com/social.jpg`,
        width: 1200,
        height: 600,
        alt: 'Web developer and content marketer in Atlanta, GA',
      },
    ],
  },
  twitter: {
    site: '@hunterbecton',
    cardType: 'summary_large_image',
  },
};
