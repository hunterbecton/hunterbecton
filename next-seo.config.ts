import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  titleTemplate: 'Hunter Becton | %s',
  title: 'Web designer and developer in Atlanta, GA',
  description:
    'I am a web designer and developer that can help your marketing team design and code memorable, user-friendly web experiences and implement your marketing tech stack.',
  openGraph: {
    title: 'Web designer and developer in Atlanta, GA',
    description:
      'I am a web designer and developer that can help your marketing team design and code memorable, user-friendly web experiences and implement your marketing tech stack.',
    type: 'website',
    locale: 'en_US',
    site_name: 'Hunter Becton',
    images: [
      {
        url: `https://hunterbecton.com/social.jpg`,
        width: 1200,
        height: 600,
        alt: 'Web designer and developer in Atlanta, GA',
      },
    ],
  },
  twitter: {
    site: '@hunterbecton',
    cardType: 'summary_large_image',
  },
};
