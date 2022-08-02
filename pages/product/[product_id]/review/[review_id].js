import { useRouter } from 'next/router';

const ReviewDetail = () => {
  const router = useRouter();
  const { review_id, product_id } = router.query;
  return (
    <h1>
      ReviewDetail : {review_id} for product : {product_id}
    </h1>
  );
};

export default ReviewDetail;
