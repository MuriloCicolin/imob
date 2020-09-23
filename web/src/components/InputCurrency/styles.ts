import styled from 'styled-components';
import ReactNumberFormat from 'react-number-format';

export const LabelContainer = styled.label`
  background: #ffffff;
  border-radius: 1rem;
  padding: 1.8rem;
  margin-top: 1rem;
  width: 100%;
  border: 2px solid #47bae2;
  color: #47bae2;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 0.8rem;
  }

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
  /* span {
    font-size: 16px;

    display: block;
    margin: 8px 0 0 8px;
  } */
`;

export const NumberFormat = styled(ReactNumberFormat)``;
