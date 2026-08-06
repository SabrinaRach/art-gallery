export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Pass the comment text back up
    onSubmitComment(data.comment);
    event.target.reset();
    event.target.comment.focus(); // Focus back on the textarea after submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave a comment</h3>
      <div>
        <textarea
          name="comment"
          rows="3"
          placeholder="Add your thoughts here..."
          style={{
            background: "paleblue",
            color: "purple",
            width: "250px",
            height: "100px",
          }}
          required
          maxLength={100}
        ></textarea>
        <span>
          <button
            style={{
              height: "50px",
              width: "80px",
              marginBottom: "5%",
            }}
            type="submit"
          >
            Post
          </button>
        </span>
      </div>
    </form>
  );
}
