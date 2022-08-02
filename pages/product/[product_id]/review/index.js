import { useRouter } from 'next/router';

const Review = () => {
  const router = useRouter();
  const { product_id } = router.query;
  return <h1>Review for product : {product_id}</h1>;
};
export default Review;
