import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-height: 100%;
  height: 100vh;
`;

export const FormContainer = styled.main`
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;

  fieldset {
    border: 0;
    padding: 0 2.4rem;
    margin-bottom: 2rem;
  }

  legend {
    font: 700 2.4rem;
    color: #000;
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 1.6rem;
    font-size: 2.8rem;
  }

  .button {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1100px) {
    max-width: 84rem;
  }
`;
