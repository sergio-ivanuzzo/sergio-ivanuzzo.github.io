import styled from "styled-components";

export const Section = styled.section`
  h3 {
    width: calc(100% - 10px);
    text-transform: uppercase;
    background: #EFF8FF;
    box-shadow: 2px 2px 3px 1px silver;

    @media only print {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    padding: 5px 5px 5px 0;

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

export const Content = styled.div.attrs(props => ({
    background: props.background,
}))`
  word-break: break-word;
  padding: 5px 5px 5px 0;  

  background: ${props => props.background || "transparent"};

  @media only print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;