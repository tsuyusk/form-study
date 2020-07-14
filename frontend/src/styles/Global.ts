import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #ecfff2;
    font-family: Roboto, sans-serif;
  }
  h1, h2, h3, h4, h5, strong {
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
