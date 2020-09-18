import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Header from '../../components/Header';

import { Container, FormContainer } from './styles';
import { SelectInput } from '../../components/Select/styles';
import Button from '../../components/Button';
import PropertiesList from '../PropertiesList';

interface IRequest {
  uf: string;
  city: string;
  // type: 'Venda' | 'Aluguel';
}

const SearchProperties: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

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

  const handleSubmit = useCallback(async (data: IRequest) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Header title="Procure seu imóvel" />
      <FormContainer>
        <Form onSubmit={handleSubmit} ref={formRef}>
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
            <Button type="submit">Buscar</Button>
          </div>
        </Form>
      </FormContainer>
      <PropertiesList />
    </Container>
  );
};

export default SearchProperties;
