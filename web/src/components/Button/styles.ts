import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const animateButton = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.button`
  background: #a6dcef;
  height: 6.5rem;
  border-radius: 1rem;
  border: 0;
  outline: 0;
  padding: 0 16px;
  font-size: 2rem;
  color: #000000;
  cursor: pointer;
  width: 20rem;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#A6DCEF')};
  }
  .loading {
    animation: ${animateButton} 2s linear infinite;
  }
`;
