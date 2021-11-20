import styled from 'styled-components';

type Props = {
  showLoading: number | boolean;
};

export const StyledPageLoading = styled.div<Props>`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.2);
  display: ${({ showLoading }) => (showLoading ? '' : 'none')};
`;
