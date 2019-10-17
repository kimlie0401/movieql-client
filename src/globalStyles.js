import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500');
  ${reset};
  body{
    font-family: 'Maven Pro', sans-serif;
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
