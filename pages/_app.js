import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import Router, { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

import 'styles/globals.css';

// Record a pageview when route changes
Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

function MyApp({ Component, pageProps }) {
  // Initialize Fathom when the app loads
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load('OZYQRSVC', {
        url: 'https://admire-creative.hunterbecton.com/script.js',
        includedDomains: ['hunterbecton.com', 'www.hunterbecton.com'],
      });
      Fathom.trackPageview();
    }
  }, []);

  return (
    <>
      <DefaultSeo
        titleTemplate='Hunter Becton | %s'
        title='Full-stack JavaScript developer in Atlanta, GA'
        description={`I'm a full-stack JavaScript developer and indie maker in Atlanta, GA. I love to build web apps with TypeScript, Next.js, React, Express, Tailwind and MongoDB.`}
        openGraph={{
          title: 'Full-stack JavaScript developer in Atlanta, GA',
          description: `I'm a full-stack JavaScript developer and indie maker in Atlanta, GA. I love to build web apps with TypeScript, Next.js, React, Express, Tailwind and MongoDB.`,
          type: 'website',
          locale: 'en_US',
          site_name: 'Hunter Becton',
          images: [
            {
              url: `https://hunterbecton.com/social.jpg`,
              width: 1200,
              height: 600,
              alt: 'Hunter Becton Full-Stack Developer in Atlanta, GA',
            },
          ],
        }}
        twitter={{
          site: '@hunterbecton',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
