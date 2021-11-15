import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  html,
  *{
    box-sizing:border-box;
  }
`;

export default GlobalStyles;
