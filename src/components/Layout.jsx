import Head from 'next/head';
import React from 'react';

const Layout = ({
  children,
  title = 'XGen Tech Bot',
  description = 'XGen Tech Bot',
  favicon = 'https://xgentechnologies.com/wp-content/uploads/2023/06/Xgen-14.png',
}) => (
  <div className="font-basier-circle">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href={favicon} />
    </Head>
    <div className="min-h-screen bg-gray-60">{children}</div>
  </div>
);

export default Layout;
