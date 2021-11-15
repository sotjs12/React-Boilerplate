import { css } from 'styled-components';

const sizes: Props = {
  mobile: 320 - 1,
  tablet: 768 - 1,
  laptop: 1024 - 1,
  desktop: 2560 - 1,
};

type Props = {
  [key: string]: any;
};

export default Object.keys(sizes).reduce((acc: Props, label: string) => {
  acc[label] = (...args: any) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css({ ...args })};
    }
  `;
  return acc;
}, {});
