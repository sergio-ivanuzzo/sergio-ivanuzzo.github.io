import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Nunito", sans-serif;
    font-size: 14px;
    margin: 5px;

    @media print {
      @page {
        size: A4 portrait;
        margin: 0;
      }
      
      padding: .2cm .5cm;
    }
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