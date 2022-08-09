const PostDetail = ({ post }) => {
  return (
    <>
      <h1>Post Default page</h1>
      <h3>
        {post.id} {post.title}
      </h3>
      <p>{post.body}</p>
    </>
  );
};
export default PostDetail;
export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.post_id}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  console.log(`Generating page for /posts/${params.post_id}`);
  return { props: { post: data } };
};
export const getStaticPaths = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const data = await response.json();
  //
  //   const paths = data.map((post) => ({ params: { post_id: `${post.id}` } }));
  return {
    paths: [
      { params: { post_id: '1' } },
      { params: { post_id: '2' } },
      { params: { post_id: '3' } },
    ],
    fallback: 'blocking',
  };
};
