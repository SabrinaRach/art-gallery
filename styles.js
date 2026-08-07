import { createGlobalStyle } from "styled-components";








export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--font-cormorant), Georgia, 'Times New Roman', serif;
  }

  main{
  width:60%;
  margin-left:30%;
  }
`;















