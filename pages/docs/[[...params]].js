import { useRouter } from 'next/router';

const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  let renderContent;
  if (params.length === 1) {
    renderContent = 'feature :' + params[0];
  } else if (params.length === 2) {
    renderContent = 'feature :' + params[0] + ', concept :' + params[1];
  } else {
    renderContent = params;
  }
  return (
    <h1>
      Docs {'=>'} {renderContent}
    </h1>
  );
};
export default Docs;
