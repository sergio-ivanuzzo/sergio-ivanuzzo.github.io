import styled from "styled-components";

export const Section = styled.section`
  h3 {
    width: calc(100% - 10px);
    border-bottom: 1px solid silver;
    text-transform: uppercase;
    background: rgba(221, 211, 221, .8);

    @media print {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    padding: 5px;

    @media screen and (orientation:landscape) {
      border-top-right-radius: 10px;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      border-top-right-radius: 10px;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      border-top-right-radius: 10px;
    }
  }
`;