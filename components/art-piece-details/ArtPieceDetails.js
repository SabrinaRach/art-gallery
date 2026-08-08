import Link from "next/link";
import Image from "next/image";
import styledComponents from "styled-components";
/* importing FavoriteButton component from the favorite-button directory. 
This component is used to allow users to mark an art piece as a favorite. */
import FavoriteButton from "../favorite-button/favorite-button.js";
import Comments from "../Comments/Comments.js";
import CommentForm from "../CommentForm/CommentForm.js";
import { useState, useEffect } from "react";
import { Artwork } from "../art-piece-preview/styles.js";
import { ColorPalette } from "../Color-palette/ColorPalette.js";

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
  background-color: #5F7A6B;
  padding: 2rem;
width:50%;
    `;
const StyledLeftPanel = styledComponents.div`
flex:1;
height:100%;
width:50%;
align: left;
overflow-y: auto;
  background-color: #8A8175; /* Dark background to showcase art nicely */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  border-right: 2px solid #dcdfe5;
    `;
const StyleBody = styledComponents.body`
width: 100%;
height: 100%;
/* Dynamically set background color, falling back to a default if undefined */
  background-color: ${(props) => props.$bgColor || "#8A8175"}; 
  transition: background-color 0.3s ease;`;
const StyledArticle = styledComponents.article`
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
    width: 50%;
   height: 70%;
    margin-left: 30%;
    padding: 20px;
    
    
    `;
const StyledImageContainer = styledComponents.div`
  
  width: 100%;
  padding: 10px;
  margin: 0;
  
  
`;
//Ensures the image covers the container without distortion
const StyledImage = styledComponents(Image)`
    width: 100%;
    height: 80vh;
    align-self: center;
    `;
const StyledLink = styledComponents(Link)`
     
     width:80%;
     margin-left: 10%;
    `;
const StyledInfo = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 10px;
   
    `;

const StyledHeading = styledComponents.h1`
    font-size: 2rem;
    margin-bottom: 10px;
    text-align: center;
    
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

export default function ArtPieceDetails({
  artPiece,
  toggleFavorite,
  children,
}) {
  console.log("children", { children });
  // Extract the first color from the array to use as the background, with a fallback
  const primaryColor =
    artPiece?.colors?.[artPiece.colors.length - 1] || "#8A8175";

  //-------------------------------------------------------------------------------------------------------------------
  /*  naming different frame styles */
  const frameStyles = [
    "baroqueGold",
    "empireGold",
    "darkWalnut",
    "renaissanceCarved",
    "louisXVI",
    "ebonyBlack",
  ];
  const slug = artPiece.slug || ""; // Ensure slug is defined to avoid errors
  const hash = [...slug].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const frame = frameStyles[hash % frameStyles.length];
  const colSpan = 2 + (hash % 4);
  const rowSpan = 10 + (hash % 12);
  //-------------------------------------------------------------------------------------------------------------------
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
  const currentComments = artComments[artPiece.slug] || []; // || [] handles the case where there are no comments for this art piece yet
  return (
    <>
      <StyleBody $bgColor={primaryColor}>
        <StyledArticle>
          <StyledHeading>{artPiece.name}</StyledHeading>
          <Artwork $colSpan={colSpan} $rowSpan={rowSpan} $frame={frame}>
            <div className="image-container">
              <StyledImageContainer>
                <Image
                  src={artPiece.imageSource}
                  alt={artPiece.title}
                  width={artPiece.dimensions.width}
                  height={artPiece.dimensions.height}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <FavoriteButton
                  slug={artPiece.slug}
                  isFavorite={artPiece.isFavorite}
                  toggleFavorite={toggleFavorite}
                />
              </StyledImageContainer>
            </div>
          </Artwork>

          {children}

          <StyledInfo>
            <StyledSpan>
              Artist: <strong>{artPiece.artist}</strong>{" "}
            </StyledSpan>
            <StyledParagraph>Genre: {artPiece.genre}</StyledParagraph>
            <StyledParagraph>Year of Origin: {artPiece.year}</StyledParagraph>
          </StyledInfo>
          <Comments comments={currentComments} />
          <CommentForm onSubmitComment={handleAddComment} />
        </StyledArticle>
      </StyleBody>
    </>
  );
}
