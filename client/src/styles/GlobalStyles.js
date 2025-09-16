import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      *, *::after, *::before {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
      }

      body {
            font-family: sans-serif;
            color: #444;
            line-height: 1;
            font-weight: 400;
      }
`;

export default GlobalStyles;
