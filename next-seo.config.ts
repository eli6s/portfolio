import { DefaultSeoProps } from 'next-seo';
import { DOMAIN } from './src/util/constants';

const config: DefaultSeoProps = {
  title: 'home',
  description: '$HOME',
  canonical: DOMAIN,
  openGraph: {
    siteName: 'eli6s.vercel.app',
    title: 'eli6s',
    description: '$HOME',
    type: 'website',
    locale: 'en_US',
    url: DOMAIN,
  },
};

export default config;
