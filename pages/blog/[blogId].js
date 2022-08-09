import Head from 'next/head';

const Blog = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <h1>Blog page</h1>
      <p>ID : {process.env.NEXT_PUBLIC_TEST_ID}</p>
    </>
  );
};
export default Blog;
// export const getStaticProps = async () => {
//   return {
//     props: {
//       title: 'Article Title',
//       description: 'Article description',
//     },
//   };
// };
// export const getStaticPaths = async () => {
//   return {
//     paths: [{ params: { blogId: '1' } }],
//     fallback: false,
//   };
// };

export const getServerSideProps = async () => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(user, password);
  return {
    props: {
      title: 'Article Title',
      description: 'Article description',
    },
  };
};
