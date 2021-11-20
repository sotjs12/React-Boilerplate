import styled, { css, keyframes } from 'styled-components';

type Props = {
  one?: boolean;
  two?: boolean;
  three?: boolean;
  white?: boolean;
};

export const LoadingWrapper = styled.div`
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
`;

export const LoadingInner = styled.div<Props>`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  ${({ one, theme, white }) =>
    one &&
    css`
      left: 0%;
      top: 0%;
      animation: ${rotateOne} 1s linear infinite;
      border-bottom: 3px solid ${theme.palette.primary.main};
      ${white &&
      css`
        border-bottom: 3px solid #efeffa;
      `}
    `}

  ${({ two, theme, white }) =>
    two &&
    css`
      right: 0%;
      top: 0%;
      animation: ${rotateTwo} 1s linear infinite;
      border-bottom: 3px solid ${theme.palette.primary.main};
      ${white &&
      css`
        border-right: 3px solid #efeffa;
      `}
    `}

  ${({ three, theme, white }) =>
    three &&
    css`
      right: 0%;
      bottom: 0%;
      animation: ${rotateThree} 1s linear infinite;
      border-bottom: 3px solid ${theme.palette.primary.main};
      ${white &&
      css`
        border-top: 3px solid #efeffa;
      `}
    `}
`;

const rotateOne = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`;
const rotateTwo = keyframes`
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`;
const rotateThree = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`;
