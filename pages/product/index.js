import Link from 'next/link';

const Product = () => {
  const productList = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
  return (
    <div>
      <h1>Product</h1>;
      <ul>
        {productList.map((t, idx) => (
          <li key={idx}>
            <Link href={`/product/${idx + 1}`}>
              <a>{t}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Product;
