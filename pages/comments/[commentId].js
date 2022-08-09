import { comments } from '../../data/comments';

const Comment = ({ comment }) => {
  return (
    <div>
      <h2>Comment detail</h2>
      {comment.id} {comment.text}
    </div>
  );
};
export default Comment;

export const getStaticProps = async (context) => {
  const { commentId } = context.params;
  const comment = comments.find((t) => t.id === parseInt(commentId));
  return { props: { comment } };
};
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { commentId: '1' } },
      { params: { commentId: '2' } },
      { params: { commentId: '3' } },
    ],
    fallback: false,
  };
};
