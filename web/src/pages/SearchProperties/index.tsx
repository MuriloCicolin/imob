import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import Header from '../../components/Header';

import { Container, FormContainer } from './styles';
import { SelectInput } from '../../components/Select/styles';
import Button from '../../components/Button';
import PropertiesList from '../PropertiesList';

const SearchProperties: React.FC = () => {
  const optionUf = [
    {
      label: 'PR',
      value: 'PR',
    },
  ];

  const optionsCity = [
    { label: 'Maringá', value: 'Maringá' },
    { label: 'Curitiba', value: 'Curitiba' },
  ];

  const optionsTypeProperties = [
    { label: 'Aluguel', value: 'Aluguel' },
    { label: 'Venda', value: 'Venda' },
  ];

  const handleSubmit = useCallback(() => {
    console.log('handlesubmit');
  }, []);

  return (
    <Container>
      <Header title="Procure seu imóvel" />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Selecione as opções abaixo</legend>
            <SelectInput name="uf" options={optionUf} placeholder="Estado" />
            <SelectInput
              name="city"
              options={optionsCity}
              placeholder="Cidade"
            />
            <SelectInput
              name="type"
              options={optionsTypeProperties}
              placeholder="Negócio"
            />
          </fieldset>
          <div className="button">
            <Button>Buscar</Button>
          </div>
        </Form>
      </FormContainer>
      <PropertiesList />
    </Container>
  );
};

export default SearchProperties;
