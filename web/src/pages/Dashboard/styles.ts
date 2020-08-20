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

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    max-width: 700px;
  }
`;

export const CreateButton = styled.button`
  border: 0;
  background: #0a97b0;
  padding: 2.5rem;
  width: 30rem;
  border-radius: 0.8rem;
  margin: 0 auto;
  cursor: pointer;
  outline: 0;
  color: #7169c1;
  font-weight: 500;
  font-size: 2rem;
  transition: 0.2 background-color;

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background: ${shade(0.2, '#0a97b0')};
  }

  @media (min-width: 1100px) {
    margin-top: 3rem;
  }
`;

export const ListButton = styled.button`
  border: 0;
  background: #1b6ca8;
  padding: 2.5rem;
  width: 30rem;
  border-radius: 0.8rem;
  outline: 0;
  margin: 0 auto;
  cursor: pointer;
  margin-top: 2rem;

  color: #ffffff;
  font-weight: 500;
  font-size: 2rem;

  transition: 0.2 background-color;

  &:hover {
    background: ${shade(0.2, '#1b6ca8')};
  }

  @media (min-width: 1100px) {
    margin-top: 3rem;
  }
`;
