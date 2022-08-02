import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const navLink = [
    {
      name: 'Profile',
      path: '/profile',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Product',
      path: '/product',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'Docs',
      path: '/docs',
    },
  ];
  const router = useRouter();
  const onClick = () => {
    router.push('/product');
    // router.replace('/product');
  };

  return (
    <div>
      <ul>
        {navLink.map((t, idx) => (
          <li key={idx}>
            <Link href={t.path}>
              <a>{t.name}</a>
            </Link>
          </li>
        ))}
        <li>
          <button onClick={onClick}>Place order your product</button>
        </li>
      </ul>
      <h1>This is home page</h1>;
    </div>
  );
};
export default Home;
