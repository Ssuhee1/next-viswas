import { useRouter } from 'next/router';

const ProductDetail = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
    </div>
  );
};
export default ProductDetail;
export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();
  return { props: { product: data } };
};
export const getStaticPaths = async () => {
  return { paths: [{ params: { productId: '1' } }], fallback: true };
};
