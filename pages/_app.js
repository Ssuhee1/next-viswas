import Head from 'next/head';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import 'styles/globals.css';
import 'styles/layout.css';
// Above all in relative

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>My Site</title>
        <meta name='description' content='Awesome youtube channel' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
