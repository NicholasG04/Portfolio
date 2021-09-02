import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { useAnalytics } from '@happykit/analytics';

export default function MyApp({ Component, pageProps }) {
  useAnalytics({ publicKey: 'analytics_pub_8d944e8f56' });

  return (
    <>
      <Head>
        <title>Nicholas G</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
        title="Nicholas G"
        description="Personal Website, Portfolio and Blog of Nicholas G"
        openGraph={{
          url: 'https://nicholasg.me',
          title: 'Nicholas G',
          description: 'Personal Website, Portfolio and Blog of Nicholas G',
          site_name: 'Nicholas G',
          images: [
            {
              url: 'https://nicholasg.me/favicon.ico',
            },
          ],
        }}
        twitter={{
          cardType: 'summary',
        }}
      />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <style jsx global>{`
      html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          color: #17252a;
          background-color: #def2f1;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }
      `}
      </style>
    </>
  );
}
