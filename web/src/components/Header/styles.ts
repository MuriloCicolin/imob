import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.nav`
  background: #0a97b0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  color: #fff;
  padding: 2rem;

  h2 {
    font-size: 3rem;
  }

  img {
    width: 8rem;
    height: 8rem;
  }
`;

export const TopBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #1b6ca8;
  height: 20rem;

  > div {
    width: 40rem;
    align-self: center;

    color: #fff;

    h2 {
      font-weight: 500;
      margin: 1rem 0;
    }

    p {
      width: 30rem;
      text-align: center;
      margin: 1rem 0;
    }
  }
`;
