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
  width: 100%;
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
