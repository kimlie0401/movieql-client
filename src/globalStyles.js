import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');
  ${reset};
  body{
    font-family: 'Indie Flower', cursive;
    background-color: #2f2f2f;
    color: white;
  }
  a{
      color:inherit;
  }
  main {
    margin: 0 auto;
    padding: 20px;
  }
`;
