import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: ${(props) => props.theme["gray-500"]};
  }

  body {
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
  }

  body, 
  input, 
  textarea, 
  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  /* task overflow scrollbar costumization */
  /* width */
  /* ::-webkit-scrollbar {
    width: 3px;
  } */

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme["gray-800"]};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-corner{
    display: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["gray-500"]};
    border-radius: 5px;
  }

`;
