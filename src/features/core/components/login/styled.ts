import styled, { css } from 'styled-components';

type Props = {
  light?: boolean;
};

export const LoginWrapper = styled.div`
  background-color: #fff;
  width: 330px;
  height: 570px;
  margin: 2em auto;
  border-radius: 5px;
  padding: 1em;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 31px -2px rgba(0, 0, 0, 0.3);
`;

export const Form = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 2em;
`;

export const FormInputBox = styled.div<Props>`
  margin-top: -4em;
  position: relative;
  input {
    width: 100%;
    padding: 13px 15px;
    margin: 0.7em auto;
    border-radius: 100px;
    border: none;
    background: rgba(255, 255, 255, 0.3);
    outline: none;
    color: #fff;
    &::placeholder {
      color: #fff;
      font-size: 13px;
    }
  }

  ${props =>
    props.light &&
    css`
      text-align: right;
      color: #fff;
      a {
        color: #fff;
      }
    `}
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2em;
  text-align: center;

  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
  }

  p {
    font-size: 13px;
    color: $text-color;
    line-height: 2;
  }

  button {
    cursor: pointer;
    width: 100%;
    padding: 13px 15px;
    border-radius: 100px;
    border: none;
    background: ${props => props.theme.primary};
    outline: none;
    color: #fff;
  }
`;
