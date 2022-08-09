const NewsList = ({ articles }) => {
  return (
    <>
      <h1>List of News</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h1>
            {article.id} {article.title} | {article.category}
          </h1>
        </div>
      ))}
    </>
  );
};
export default NewsList;
export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();
  return { props: { articles: data } };
};
