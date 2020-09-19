import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 2rem auto;
`;

export const CardProperty = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  section {
    background: #47bae2;
    position: relative;
    display: flex;
    padding: 1rem;
    margin-top: -4.7rem;
    align-items: center;

    div {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }
  }

  img {
    width: 36rem;
    height: 33rem;
    border-radius: 0.8rem;
  }

  @media (min-width: 960px) {
    section {
      width: 36rem;
    }
  }
`;
