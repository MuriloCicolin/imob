import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../assets/home.png';

export const Container = styled.section`
  height: 100vh;
  display: flex;

  @media (min-width: 1100px) {
    height: 100vh;
    display: flex;
    align-items: stretch;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  flex-direction: column;

  width: 100vw;

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  background: #ddf3f5;
  width: 100vw;
  height: 100vh;

  animation: ${appearFromLeft} 1s;

  h1 {
    margin-bottom: 4rem;
    font-size: 3.6rem;
  }

  img {
    width: 30rem;
    height: 30rem;
    display: flex;
  }

  form {
    width: 32rem;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;

    a {
      display: flex;
      text-decoration: none;
      margin-top: 2rem;
      color: #000;
    }

    a:hover {
      color: ${shade(0.2, '#A6DCEF')};
    }
  }

  > a {
    text-decoration: none;
    margin-top: 4rem;
    display: block;
    transition: color 0.2s;
    color: #000;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#A6DCEF')};
    }

    svg {
      margin-right: 1rem;
    }
  }
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
  }
`;
