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
  width:30%;
  height:30%;
  margin-left:35%;
  }
h1{
  text-align:center;
  }
  /* RESPONSIVE DESIGN */

/*  tablet */
@media (max-width: 900px) {
  
}

/*  smartphone */
@media (max-width: 600px) {
}
`;
