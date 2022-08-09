const CategoryDetail = ({ articles }) => {
  return (
    <>
      <h1>Category detail</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title} {article.description}
          </h2>
          <p>{article.description}</p>
        </div>
      ))}
    </>
  );
};

export default CategoryDetail;
export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;

  res.setHeader('Set-Cookie', ['name=Sukhbat']);
  const response = await fetch(
    `http://localhost:4000/news?category=${params.category}`
  );
  const data = await response.json();
  console.log(
    `Pre-rendering News article for catgory : ${params.category} ;`,
    `Cookie : ${req.headers.cookie}`
  );
  return { props: { articles: data } };
};
