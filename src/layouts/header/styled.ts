import styled, { css } from 'styled-components';

type Props = {
  github?: boolean;
  active?: boolean;
};

export const StyledHeader = styled.header`
  box-shadow: 0 0px 19px 0px #0000001a;
  padding: 0px 20px;
  display: flex;
`;

export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxImgFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
  cursor: pointer;
  img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
  h4 {
    margin: 5px;
    font-family: inherit;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    color: ${props => props.theme.primary};
  }
`;

export const Menu = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    display: flex;
    align-items: center;
  }
`;

export const MenuItem = styled.li<Props>`
  padding: 8px 10px;

  ${props =>
    props.github &&
    css`
      cursor: pointer;
      display: block;
      padding: 0;
      padding-left: 0;
    `};
`;

export const MenuItemLink = styled.a<Props>`
  display: block;
  text-align: center;
  font-size: 15px;
  color: 'black';
  padding: 5px 15px;

  ${props =>
    props.active &&
    css`
      color: ${props.theme.primary};
      border-bottom: ${props.theme.primary};
    `};

  ${props =>
    props.github &&
    css`
      display: 'flex';
      align-items: 'center';
    `};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  span {
    display: block;
  }
`;

export const MobileMenuButton = styled.a`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 34px;
  position: relative;
  display: none;
  margin-left: 20px;

  ${props => props.theme.mobile` // theme props의 media 객체 사용하기
     & {
      display: flex;
    }
  `};

  span {
    display: block;
    width: 100%;
    height: 3px;
    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }
`;
