import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 10px;
  
  h3 {
    width: calc(100% - 10px);
    text-transform: uppercase;
    background: #EFF8FF;
    box-shadow: 2px 2px 3px 1px silver;

    @media only print {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    padding: 5px;

    @media 
    only screen and (max-width: 600px), 
    only screen and (min-width: 600px), 
    only screen and (min-width: 768px) {
      border-top-right-radius: 0;
    }

    @media 
    only screen and (min-width: 992px), 
    only screen and (min-width: 1200px) {
      border-top-right-radius: 10px;
    }
  }
`;