import { useState } from 'react';

const CommentsPage = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  };
  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('data', data);
  };
  const deleteComment = async (id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };
  return (
    <>
      <input
        type='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <br />
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id} {comment.text}
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default CommentsPage;
