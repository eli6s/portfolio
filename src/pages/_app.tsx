import '../styles/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Fira_Code, Overpass_Mono, Roboto_Slab, Inria_Sans } from 'next/font/google';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import config from '../../next-seo.config';


const mono = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-body',
});

const serif = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-serif',
});

const overpass = Overpass_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const sans = Inria_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-body: ${mono.style.fontFamily};
          --font-serif: ${serif.style.fontFamily};
          --font-mono: ${overpass.style.fontFamily};
          --font-sans: ${sans.style.fontFamily};
        }
        body {
          font-family: var(--font-body);
        }
        .serif {
          font-family: var(--font-serif);
        }
        .mono {
          font-family: var(--font-mono);
        }
        .sans {
          font-family: var(--font-sans);
        }
      `}</style>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1 user-scalable=no"
          key="viewport"
        />
      </Head>
      <DefaultSeo {...config} />
      <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
