import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const { product_id } = router.query;
  return <h1>ProductDetail {product_id}</h1>;
};
export default ProductDetail;
