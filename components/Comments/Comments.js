export default function Comments({ comments }) {
  if (!comments || comments.length === 0) {
    return <p>No comments yet. Be the first to share your thoughts!</p>;
  }

  return (
    <section>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.text}</p>
            <small>{comment.date}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
