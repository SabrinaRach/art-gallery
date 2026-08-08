import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    /* French Renaissance gallery palette */
    --color-primary:    #2E4B8B;   /* outremer — lapis blue   */
    --color-secondary:  #C39A3B;   /* or       — burnished gold */
    --color-tertiary:   #6E2A34;   /* sang     — oxblood       */
    --color-accent:     #6C7355;   /* vert     — sage green    */
    --color-highlight:  #A6592F;   /* sienne   — sienna earth  */
    --color-neutral:    #E7DBC0;   /* ivoire   — aged ivory    */

    /* semantic aliases — swap these to re-theme in one place */
    --bg-page:   var(--color-neutral);
    --text-main: var(--color-tertiary);
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Garamond,Bodoni, Didot, "Didot LT STD", "Hoefler Text";
    background-color: var(--bg-page);
    color: var(--text-main);
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


