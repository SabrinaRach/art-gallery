import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  main{
  width:60%;
  margin-left:30%;
  }

  /* RESPONSIVE DESIGN */

/*  tablet */
@media (max-width: 900px) {
  
}

/*  smartphone */
@media (max-width: 600px) {
}
`;



