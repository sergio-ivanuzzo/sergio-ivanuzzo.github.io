import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  ul {
    margin-top: 5px;
    margin-bottom: 15px;
    list-style-type: square;
    
    & > li {
      padding: 1px;
    }
  }
`;