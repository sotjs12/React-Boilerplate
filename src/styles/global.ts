import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  @font-face {
  font-family: 'Kakao-Lt';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/Kakao-Lt.eot');
  src: url('../fonts/Kakao-Lt.eot?#iefix') format('embedded-opentype'),
    url('../fonts/Kakao-Lt.woff') format('woff'),
    url('../fonts/Kakao-Lt.woff2') format('woff2');
}
`;

export default GlobalStyles;

// @font-face {
//   font-family: 'Kakao-Rg';
//   font-style: normal;
//   font-weight: 400;
//   src: url('../fonts/Kakao-Rg.eot');
//   src: url('../fonts/Kakao-Rg.eot?#iefix') format('embedded-opentype'),
//     url('../fonts/Kakao-Rg.woff') format('woff'),
//     url('../fonts/Kakao-Rg.woff2') format('woff2');
// }

// @font-face {
//   font-family: 'Kakao-Bd';
//   font-style: normal;
//   font-weight: 700;
//   src: url('../fonts/Kakao-Bd.eot');
//   src: url('../fonts/Kakao-Bd.eot?#iefix') format('embedded-opentype'),
//     url('../fonts/Kakao-Bd.woff') format('woff'),
//     url('../fonts/Kakao-Bd.woff2') format('woff2');
// }

// @font-face {
//   font-family: 'NotoSansKR-Bold';
//   font-style: normal;
//   font-weight: 700;
//   src: url('../fonts/NotoSansKR-Bold.eot');
//   src: url('../fonts/NotoSansKR-Bold.eot?#iefix') format('embedded-opentype'),
//     url('../fonts/NotoSansKR-Bold.woff') format('woff'),
//     url('../fonts/NotoSansKR-Bold.woff2') format('woff2');
// }

// /* Mobile Reset CSS */
// html,
// body,
// div,
// header,
// footer,
// section,
// nav,
// article,
// aside,
// h1,
// h2,
// h3,
// h4,
// h5,
// h6,
// p,
// span,
// a,
// blockquote,
// dl,
// dt,
// dd,
// ol,
// ul,
// li,
// form,
// fieldset,
// legend,
// table,
// tr,
// th,
// td,
// textarea,
// input,
// select,
// button {
//   margin: 0;
//   padding: 0;
//   line-height: 1;
//   -moz-box-sizing: border-box;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
// }
// body {
//   -webkit-text-size-adjust: none;
// }
// ul,
// ol,
// li {
//   list-style: none;
// }
// table {
//   border-collapse: collapse;
//   border-spacing: 0;
// }
// button {
//   display: block;
//   margin: 0;
//   padding: 0;
//   border: 0;
//   background-color: transparent;
//   cursor: pointer;
//   outline: none;
// }
// a {
//   color: inherit;
//   text-decoration: none;
// }
// em,
// address {
//   font-style: normal;
// }
// iframe,
// fieldset,
// img {
//   border: 0;
// }
// textarea {
//   resize: none;
// }

// html,
// body {
//   height: 100%;
// }
// body {
//   overflow-x: hidden;
//   max-width: 2560px;
//   margin: 0 auto;
//   color: #222;
//   font-family: 'Kakao-Rg';
//   letter-spacing: -0.025em;
// }
// img {
//   display: block;
//   width: 100%;
// }
// a {
//   outline: none;
// }
