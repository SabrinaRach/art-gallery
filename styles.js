import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Garamond,Bodoni, Didot, "Didot LT STD", "Hoefler Text";
  }

  main{
  width:30%;
  height:30%;
  margin-left:35%;
  
  }
  h1{
  text-align:center;
  }
`;
