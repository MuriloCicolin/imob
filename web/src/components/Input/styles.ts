import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #FFFFFF;
  border-radius: 1rem;
  padding: 1.8rem;
  width: 100%;
  border: 2px solid #47BAE2;
  color: #47BAE2;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 0.8rem;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #47bae2;
      border-color: #47bae2;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #47bae2;
    `}
  input {
    background: transparent;
    flex: 1;
    border: 0;
    outline: 0;
    color: #000;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
