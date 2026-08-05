import styled from "styled-components";

export const Artwork = styled.li`
  position: relative;

  grid-column: span ${({ $colSpan }) => $colSpan};
  grid-row: span ${({ $rowSpan }) => $rowSpan};

  overflow: hidden;

  padding: 18px;

  background: #efe2c6;

  /* every picture has now a different frame style assigned */
  ${({ $frame }) =>
    $frame === "baroqueGold" &&
    `
      border: 20px solid transparent;

      background:
        linear-gradient(#efe2c6, #efe2c6) padding-box,
        linear-gradient(
          135deg,
          #6b4700,
          #f8df72,
          #b8860b,
          #fff2a6,
          #8a5a00
        ) border-box;

      box-shadow:
        inset 0 0 12px rgba(255,215,80,.8),
        inset 0 0 25px rgba(90,50,0,.8),
        0 15px 30px rgba(0,0,0,.55);
    `}

  ${({ $frame }) =>
    $frame === "empireGold" &&
    `
      border: 16px solid transparent;

      background:
        linear-gradient(#efe2c6,#efe2c6) padding-box,
        linear-gradient(
          90deg,
          #7a5200,
          #e7c65a,
          #fff0a0,
          #a87500
        ) border-box;

      box-shadow:
        inset 0 0 8px #fff2a6,
        0 12px 25px rgba(0,0,0,.5);
    `}


  ${({ $frame }) =>
    $frame === "darkWalnut" &&
    `
      border: 18px solid #4b2a16;

      box-shadow:
        inset 0 0 0 4px #8b5a32,
        inset 0 0 12px #1b0d05,
        0 12px 25px rgba(0,0,0,.6);
    `}


  ${({ $frame }) =>
    $frame === "renaissanceCarved" &&
    `
      border: 20px solid #6b3d20;

      box-shadow:
        inset 0 0 0 5px #b8860b,
        inset 0 0 15px #2a1205,
        0 15px 30px rgba(0,0,0,.55);
    `}


  ${({ $frame }) =>
    $frame === "louisXVI" &&
    `
      border: 14px solid transparent;

      background:
        linear-gradient(#efe2c6,#efe2c6) padding-box,
        linear-gradient(
          45deg,
          #b8860b,
          #fff3a6,
          #d4af37,
          #7c5400
        ) border-box;

      box-shadow:
        inset 0 0 10px #fff2a6,
        0 12px 25px rgba(0,0,0,.45);
    `}


  ${({ $frame }) =>
    $frame === "ebonyBlack" &&
    `
      border: 12px solid #111;

      box-shadow:
        inset 0 0 0 3px #444,
        inset 0 0 10px #000,
        0 12px 25px rgba(0,0,0,.6);
    `}

    /* creating a hover effect for the art piece preview to show the title, artist, and a link to view details */
.image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: absolute;

    inset: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.65);

    color: white;

    opacity: 0;

    transition: opacity 0.35s ease;

    text-align: center;

    z-index: 5;
  }

  .image-container:hover .overlay {
    opacity: 1;
  }

  .overlay h2 {
    margin-bottom: 10px;
    font-family: serif;
  }

  .overlay p {
    margin-bottom: 15px;
  }

  .overlay a {
    color: #f5d76e;
    text-decoration: none;
    border: 1px solid #f5d76e;
    padding: 8px 14px;
  }

  .overlay a:hover {
    background: #f5d76e;
    color: black;
  }
`;
