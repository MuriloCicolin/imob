import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../assets/home.png';

export const Container = styled.section`
  height: 100vh;
  display: flex;
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
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  background: #ddf3f5;
  width: 100vw;

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

    /* a {
      display: flex;
      align-items: center;
      text-decoration: none;
      margin-top: 2rem;
      color: #000;
    }

    a:hover {
      color: ${shade(0.2, '#A6DCEF')};
    } */
  }

  a {
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

    > svg {
      margin-right: 1rem;
    }
  }

  @media (min-width: 1100px) {
    form {
      width: 36rem;
      height: 100vh;
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
