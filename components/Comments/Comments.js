import styled from "styled-components";

const CommentsContainer = styled.section`
  margin-top: 1px;
  width: 100%;
`;

const Heading = styled.h3`
  font-size: 1.2rem;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 200px;
  overflow-y: auto; /* Adds a scrollbar if there are many comments */
  padding-bottom: 80px; /* Ensures the last comment isn't hidden behind the form */
  flex-grow: 1; /* Allows the comment list to take up available space */
`;

const CommentCard = styled.li`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #f4dbdb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CommentText = styled.p`
  font-size: 0.95rem;
  color: white;
  margin: 0;
  word-break: break-word;
`;

const CommentDate = styled.small`
  font-size: 0.75rem;
  color: #fbdcdc;
  align-self: flex-end;
`;

const NoCommentsText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-top: 10px;
`;

export default function Comments({ comments, artPiece }) {
  const colorArray = artPiece?.colors || [];
  const commentBgColor = colorArray[colorArray.length - 2];
  //const commentTextColor = colorArray[colorArray.length - 1];
  if (!comments || comments.length === 0) {
    return (
      <NoCommentsText style={{ color: colorArray[0] || "black" }}>
        No comments yet. Be the first to share your thoughts!
      </NoCommentsText>
    );
  }

  return (
    <CommentsContainer>
      <Heading>Comments</Heading>
      <CommentList>
        {comments.map((comment, index) => (
          <CommentCard
            key={index}
            style={{
              backgroundColor: commentBgColor || "#f8acac",
            }}
          >
            <CommentText>{comment.text}</CommentText>
            <CommentDate>{comment.date}</CommentDate>
          </CommentCard>
        ))}
      </CommentList>
    </CommentsContainer>
  );
}
