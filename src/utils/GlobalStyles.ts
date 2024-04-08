import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    letter-spacing: -0.025em;
  }
  html,body {
    font-family: "PokemonGSK2";
  }
  a {
    text-decoration: none;
    color:inherit;
  }
`;