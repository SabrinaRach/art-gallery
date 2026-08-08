import styled from "styled-components";

// 1. Style the form wrapper to layout children properly
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 12px;
  margin-top: 20px;

  width: 100%;
  max-width: 500px;
  box-sizing: border-box;

  background-color: #eae5e5;
  border-radius: 8px;
`;

const StyledHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 4px;
  padding-left: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  box-sizing: border-box;

  align-items: flex-start;

  padding: 0 10px 10px;

  @media (min-width: 400px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

// 2. Style the comment text box
const StyledTextarea = styled.textarea`
  width: 320px;
  max-width: 100%;
  height: 90px;
  box-sizing: border-box;

  padding: 10px;
  margin: 0;

  border: 1px solid #ccc;
  border-radius: 8px;

  background-color: #dcdcdc;
  color: #333;

  font-size: 0.95rem;
  resize: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #5f7a6b; /* Matches your theme */
    box-shadow: 0 0 0 2px rgba(95, 122, 107, 0.2);
    background-color: #ffffff;
  }

  &::placeholder {
    color: #888;
  }
`;

// 3. Style the post button
const StyledButton = styled.button`
  height: 50px;
  width: 80px;
  min-width: 80px;
  box-sizing: border-box;

  background-color: #5f7a6b;
  color: #ffffff;
  font-weight: 600;

  padding: 10px 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 6px;

  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4a6154;
  }

  &:active {
    transform: translateY(1px);
  }
`;

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
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Leave a comment</StyledHeading>
      <InputGroup>
        <StyledTextarea
          name="comment"
          placeholder="Add your thoughts here..."
          required
          maxLength={100}
        />
        <StyledButton type="submit">Post</StyledButton>
      </InputGroup>
    </StyledForm>
  );
}
