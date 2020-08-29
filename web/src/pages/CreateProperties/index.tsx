import React, { useState, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, FormContainer } from './styles';
import SelectInput from '../../components/Select';
import Button from '../../components/Button';
import Dropzone from '../../components/Dropzone';

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

  const handleSubmit = useCallback(async data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Header title="Cadastrar Imóveis" />

      <FormContainer>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <fieldset>
            <legend>Dados do Imóvel</legend>

            <Input name="address" placeholder="Rua/Avenida" mask="" />
            <Input name="number" placeholder="Número" mask="" />
            <Input
              name="value"
              placeholder="R$ Valor"
              mask="R$ 999.999,99"
              alwaysShowMask={false}
            />

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
