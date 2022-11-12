'use client';

import { useEffect } from 'react';
import localFont from '@next/font/local';
import Router from 'next/router';
import * as Fathom from 'fathom-client';

import { classNames } from '../utils';

const Aspekta = localFont({ src: './AspektaVF.woff2' });

import './global.css';

// Record a pageview when route changes
Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <html>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width' />
      </head>
      <body className={classNames(Aspekta.className, 'bg-stone-100')}>
        {children}
      </body>
    </html>
  );
}
