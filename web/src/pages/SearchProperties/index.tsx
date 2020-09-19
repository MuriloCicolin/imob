import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Header from '../../components/Header';

import { Container, FormContainer } from './styles';
import { SelectInput } from '../../components/Select/styles';
import Button from '../../components/Button';
import PropertiesList from '../PropertiesList';
import api from '../../services/api';

interface IProperties {
  id: string;
  address: string;
  number: string;
  uf: string;
  type: 'Aluguel' | 'Venda';
  value: number;
  property_url: string;
}

const SearchProperties: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [type, setType] = useState('');
  const [properties, setProperties] = useState<IProperties[]>([]);

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

  const handleSearch = useCallback(async () => {
    const response = await api.get('/properties', {
      params: {
        uf,
        city,
        type,
      },
    });

    setProperties(response.data);
  }, [city, type, uf]);

  const handleChangeCity = useCallback(data => {
    setCity(data.value);
  }, []);

  const handleChangeUf = useCallback(data => {
    setUf(data.value);
  }, []);

  const handleChangeType = useCallback(data => {
    setType(data.value);
  }, []);

  return (
    <Container>
      <Header title="Procure seu imóvel" />
      <FormContainer>
        <Form onSubmit={handleSearch} ref={formRef}>
          <fieldset>
            <legend>Selecione as opções abaixo</legend>
            <SelectInput
              name="uf"
              options={optionUf}
              placeholder="Estado"
              onChange={handleChangeUf}
            />
            <SelectInput
              name="city"
              options={optionsCity}
              onChange={handleChangeCity}
              placeholder="Cidade"
            />
            <SelectInput
              name="type"
              options={optionsTypeProperties}
              onChange={handleChangeType}
              placeholder="Negócio"
            />
          </fieldset>
          <div className="button">
            <Button type="submit">Buscar</Button>
          </div>
        </Form>
      </FormContainer>
      {properties &&
        properties.map(prop => (
          <PropertiesList key={prop.id} property={prop} />
        ))}
    </Container>
  );
};

export default SearchProperties;
