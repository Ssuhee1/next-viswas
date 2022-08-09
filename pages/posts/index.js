import Link from 'next/link';

const PostList = ({ posts }) => (
  <>
    <h1>List of Post</h1>
    {posts.map((post) => (
      <div key={post.id}>
        <Link href={`/posts/${post.id}`} passHref>
          <h2>
            {post.id} {post.title}
          </h2>
        </Link>
      </div>
    ))}
  </>
);
export default PostList;
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return { props: { posts: data } };
};
