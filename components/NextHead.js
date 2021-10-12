import Head from 'next/head';

const NextHead = ({
  title,
  image,
  description,
  url,
  pageType,
  siteName,
  ...rest
}) => {
  const defaultImage =
    image ||
    'https://res.cloudinary.com/dvqycwvqm/image/upload/v1598424832/logo_wqjqjg.png';

  const defaultUrl = url || 'https://jsonplaceholder.typicode.com/users';

  return (
    <Head {...rest}>
      {/* Open Graph */}
      <title>{title || 'My Web'}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="preload"
        href="/fonts/Roboto-Bold.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-Regular.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <link rel="canonical" href={defaultUrl} key="canonical" />
      <meta property="og:locale" content="en" />
      <meta charSet="utf-8" />
      <meta property="og:title" content={`${title || "Product detail page"}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content={pageType} />
      <meta property="og:image" content={defaultImage} key="ogimage" />

      <meta name="description" content={`${description || "Product description page"}`} />
      <meta property="og:description" content={`${description || "Product description page"}`} key="ogdesc" />

      <meta property="og:url" content={defaultUrl} key="ogurl" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta property="og:site_name" content={siteName} key="ogsite" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} key="ogdesc" />
    </Head>
  );
};

export default NextHead;
