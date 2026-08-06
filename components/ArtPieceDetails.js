import Link from "next/link";
import Image from "next/image";
import styledComponents from "styled-components";
import Comments from "./Comments/Comments";
import CommentForm from "./CommentForm/CommentForm";
import { useState, useEffect } from "react";
import { Artwork } from "./art-piece-preview/styles";

//Styled Panel to split screen side by side
const StyledSplitContainer = styledComponents.div`
display: flex;
  width: 100%;
  height: 60vh;
  overflow: hidden; /* Prevents scrollbars from appearing */`;
const StyledRightPanel = styledComponents.div`
align: right;
height: 100%;
  overflow-y: auto; /* Enables independent vertical scrolling for details & comments */
  background-color: #c5eae7;
  padding: 2rem;
width:50%;
    `;
const StyledLeftPanel = styledComponents.div`
flex:1;
height:100%;
width:50%;
align: left;
overflow-y: auto;
  background-color: #959292; /* Dark background to showcase art nicely */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-right: 2px solid #dcdfe5;
    `;

const StyledArticle = styledComponents.article`
display: flex;
flex-direction: column;
align-items: center;
    max-width: 300px;
    max-height: 4500px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
    `;
const StyledImageContainer = styledComponents.div`
  position: relative;
  width: 100%;
  height: 300px; /* Gives the Next.js fill image a defined area */
  margin-bottom: 20px;
`;
//Ensures the image covers the container without distortion
const StyledImage = styledComponents(Image)`
     object-fit=cover; 
    `;
const StyledLink = styledComponents(Link)`
    margin-bottom: 20px;
    text-decoration: none;
    `;
const StyledHeading = styledComponents.h1`
    font-size: 2rem;
    margin-bottom: 10px;
`;
const StyledSubheading = styledComponents.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;
const StyledSpan = styledComponents.span`
    font-size: 1.25rem;
    margin-bottom: 10px;
`;
const StyledParagraph = styledComponents.p`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export default function ArtPieceDetails({ artPiece }) {
  // Retrieve/initialize comments from localStorage or default to an empty object dictionary
  // { [slug]: [comments] }
  const [artComments, setArtComments] = useState(() => {
    const saved = localStorage.getItem("art-comments");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("art-comments", JSON.stringify(artComments));
  }, [artComments]);

  function handleAddComment(newCommentText) {
    const timestamp = new Date().toLocaleString(); // Formats date and time
    const newComment = {
      text: newCommentText,
      date: timestamp,
    };

    setArtComments({
      ...artComments,
      [artPiece.slug]: [newComment, ...currentComments],
    });
  }

  // Get comments specific to this art piece using its slug or ID
  const currentComments = artComments[artPiece.slug] || [];
  return (
    <>
      <StyledHeading>Name of the Artwork: {artPiece.name}</StyledHeading>
      <StyledSplitContainer>
        <StyledLeftPanel>
          <StyledImageContainer>
            <StyledImage src={artPiece.imageSource} alt={artPiece.name} fill />
          </StyledImageContainer>
        </StyledLeftPanel>

        <StyledRightPanel>
          <StyledArticle>
            {/* <StyledLink href="/art-pieces">Back to Gallery</StyledLink> */}

            <StyledSpan>
              Artist: {artPiece.artist} {artPiece.year}
            </StyledSpan>
            <StyledParagraph>Genre: {artPiece.genre}</StyledParagraph>
            {/* New Comment Components */}
            <Comments comments={currentComments} />
            <CommentForm onSubmitComment={handleAddComment} />
          </StyledArticle>
        </StyledRightPanel>
      </StyledSplitContainer>
    </>
  );
}
