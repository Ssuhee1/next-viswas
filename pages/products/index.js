import Link from 'next/link';
const ProductList = ({ products }) => {
  return (
    <>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
          </Link>
        </div>
      ))}
    </>
  );
};
export default ProductList;
export const getStaticProps = async () => {
  const response = await fetch('http://localhost:4000/products');
  const data = await response.json();
  return { props: { products: data }, revalidate: 10 };
};
