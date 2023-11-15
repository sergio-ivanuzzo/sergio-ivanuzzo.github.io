import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Nunito", sans-serif;
    margin: 5px;

    @media 
    only screen and (max-width: 600px), 
    only screen and (min-width: 600px), 
    only screen and (min-width: 768px) {
      font-size: 15px;
    }

    @media 
    only screen and (min-width: 992px), 
    only screen and (min-width: 1200px) {
      font-size: 16px;
    }

    @media only print {
      @page {
        size: A4 portrait;
        margin: 0;
        font-size: 14px;
      }
      
      .not-print {
        display: none !important;
      }
      
      padding: .1cm .5cm;
    }
  }

  ul {
    margin: 5px 0 15px 0;
    padding: 0;
    list-style: none;
    
    & > li {
      font-size: 14px;
      padding: 1px;
      &::before {
        content: "\\270E";
        font-weight: bold;
        color: #562B08;
        display: inline-block;
        margin-right: 6px;
        vertical-align: middle;
      }
    }
  }

  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    margin-top: 0;
    margin-bottom: 14px;
  }
`;