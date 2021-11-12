import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  html,
  *{
    box-sizing:border-box;
  }
  @mixin mediaQueryMin($screen) {
    @media screen and (min-width: $screen) {
      @content;
    }
  }
  @mixin mediaQueryMax($screen) {
    @media screen and (max-width: $screen - 1) {
      @content;
    }
  }
  @mixin s-mobile() {
    @media screen and (max-width: $screenSM - 1) {
      @content;
    }
  }
  @mixin mobile() {
    @media screen and (max-width: $screenMD - 1) {
      @content;
    }
  }
  @mixin ipad() {
    @media screen and (max-width: $screenLG - 1) {
      @content;
    }
  }
`;

export default GlobalStyles;
