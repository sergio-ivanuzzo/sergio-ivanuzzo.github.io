import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    font-size: 14px;

    @media print {
      @page { margin: 0; }
      body { margin: 1.6cm; }
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