import React, { useState, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, FormContainer } from './styles';
import SelectInput from '../../components/Select';
import Button from '../../components/Button';
import Dropzone from '../../components/Dropzone';
import api from '../../services/api';

interface CreatePropertyData {
  address: string;
  number: number;
  value: number;
  type: string;
  city: string;
  uf: string;
}

const CreateProperties: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [selectedFile, setSelectedFile] = useState<File>();

  const history = useHistory();

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

  const handleSubmit = useCallback(
    async (data: CreatePropertyData) => {
      const fileData = new FormData();

      fileData.append('address', data.address);
      fileData.append('city', data.city);
      fileData.append('uf', data.uf);
      fileData.append('number', String(data.number));
      fileData.append('type', data.type);
      fileData.append('value', String(data.value));

      if (selectedFile) {
        fileData.append('property_image', selectedFile);
      }

      await api.post('/properties', fileData);

      toast.success('Imóvel cadastrado com sucesso!');

      history.push('/');
    },
    [selectedFile, history],
  );

  return (
    <Container>
      <Header title="Cadastrar Imóveis" />

      <FormContainer>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <fieldset>
            <legend>Dados do Imóvel</legend>

            <Input name="address" placeholder="Rua/Avenida" />
            <Input name="number" placeholder="Número" />
            <Input name="value" placeholder="R$ Valor" />

            <SelectInput
              name="type"
              options={optionsTypeProperties}
              placeholder="Tipo Imóvel"
            />
            <SelectInput name="uf" options={optionUf} placeholder="Estado" />
            <SelectInput
              name="city"
              options={optionsCity}
              placeholder="Cidade"
            />
            <div>
              <Dropzone onFileUploaded={setSelectedFile} />
            </div>
          </fieldset>
          <div className="button">
            <Button type="submit">Cadastrar</Button>
          </div>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default CreateProperties;
