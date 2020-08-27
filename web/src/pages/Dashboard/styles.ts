import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  width: 100vw;
  height: 100%;
  background: #ddf3f5;

  > h1 {
    color: #1b6ca8;
    display: flex;
    justify-content: center;
  }

  > span {
    color: #1b6ca8;
    display: block;
    text-align: center;
    padding-top: 2rem;
    font-size: 1.8rem;
    background: #ddf3f5;
  }

  @media (min-width: 1100px) {
    > span {
      padding-top: 2.5rem;
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 2rem 2rem 2rem;

  > div {
    display: flex;
    align-items: center;

    h2 {
      margin-left: 2rem;
    }
  }
`;

export const Image = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;

export const ButtonIcon = styled.button`
  outline: 0;
  border: 0;
  margin-right: 3rem;
  cursor: pointer;
`;

export const BackgroundImage = styled.img`
  width: 32rem;
  height: 32rem;
  display: block;
  margin: 0 auto;

  @media (min-width: 1100px) {
    width: 45rem;
    height: 45rem;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    background: #0a97b0;
    margin: 0.8rem auto;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    outline: 0;
    font-size: 2rem;
    transition: 0.2 background-color;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${shade(0.2, '#0a97b0')};
    }
  }

  .search {
    background: #1b6ca8;
    &:hover {
      background: ${shade(0.2, '#1b6ca8')};
    }
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    max-width: 700px;
  }
`;
