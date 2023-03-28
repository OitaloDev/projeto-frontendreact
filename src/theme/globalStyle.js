import { createGlobalStyle } from "styled-components";

import bg from "../assets/bg.jpg";

const GlobalStyle = createGlobalStyle`  
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  body {
    max-width: 100vw;
    color:  white;
    font-family: 'Allerta Stencil';
    font-weight: 300;
    font-size: 18px;
    background: url(${bg}) no-repeat center center;
    background-size: cover;
    min-height: 100vh;
  }

  button {
    color: inherit;
    font-family: inherit;
  }
`;

export default GlobalStyle;
