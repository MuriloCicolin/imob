import styled from 'styled-components';
import ReactSelect from 'react-select';

export const SelectInput = styled(ReactSelect)`
  outline: 0;
  border-radius: 1rem;
  height: 2rem;
  margin-top: 3.5rem;
  width: 100%;
  padding: 2rem 0;

  .react-select__control {
    border: 2px solid #47bae2;
    border-radius: 1rem;
    padding: 0.8rem 0;
  }
`;
