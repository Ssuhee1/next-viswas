import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1>Home</h1>;
      <ul>
        <li>
          <Link href='/users'>
            <a>Users</a>
          </Link>
        </li>
        <li>
          <Link href='/posts'>
            <a>Posts</a>
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Home;
