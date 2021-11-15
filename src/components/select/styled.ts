import styled, { css } from 'styled-components';

type Props = {
  show?: boolean;
  width?: number | string;
};

export const Dropdown = styled.div<Props>`
  color: ${props => props.theme.primary};
  width: ${(props => props.width) || '100%'};
  position: relative;
  border-radius: 8px;
`;

export const DropdownSelectBox = styled.div<Props>`
  .dropdown-caret {
    width: 12px;
    fill: ${props => props.theme.primary};

    ${props =>
      props.show &&
      css`
        transform: rotate(180deg);
      `};
  }
  .selected {
    background-color: white;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
`;

export const DropdownList = styled.ul<Props>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.4rem;
  background-color: white;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 8px;
  display: none;
  &::before {
    content: '';
    height: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    transform: translateY(-100%);
  }

  ${props =>
    props.show &&
    css`
      display: block;
    `}
`;

export const DropdownItem = styled.li`
  padding: 1rem;
  color: #47536b;
  transition: all 0.25s ease;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.primary};
    background-color: #f1fbff;
  }
`;
