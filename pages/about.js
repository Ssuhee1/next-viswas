import Footer from '../components/layout/Footer';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Sukhbat</title>
        <meta name='description' content='Free web development' />
      </Head>
      <h1 className='content'>About</h1>;
    </>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
