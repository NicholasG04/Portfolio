const { NextSeo } = require('next-seo');

const SEO = () => (
  <NextSeo
    title="Nicholas G"
    description="Personal Website and Portfolio of Nicholas G"
    openGraph={{
      url: 'https://nicholasg.me',
      title: 'Nicholas G',
      description: 'Personal Website and Portfolio of Nicholas G',
      site_name: 'Nicholas G',
      images: [
        {
          url: 'https://nicholasg.me/favicon.ico',
        },
      ],
    }}
  />
);
export default SEO;
