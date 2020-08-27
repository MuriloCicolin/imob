import React, { useState } from 'react';
import { Form } from '@unform/web';
import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, FormContainer } from './styles';
import SelectInput from '../../components/Select';
import Button from '../../components/Button';
import Dropzone from '../../components/Dropzone';

const CreateProperties: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();

  const optionUf = [
    {
      value: 'Estado',
      label: 'PR',
    },
  ];

  const optionsCity = [
    { label: 'Maringá', value: 'Maringá' },
    { label: 'Curitiba', value: 'Curitiba' },
  ];

  return (
    <Container>
      <Header title="Cadastrar Imóveis" />

      <FormContainer>
        <Form onSubmit={() => {}}>
          <fieldset>
            <legend>Dados do Imóvel</legend>

            <Input name="street" placeholder="Rua/Avenida" />
            <Input name="number" placeholder="Número" />
            <Input name="value" placeholder="R$ Valor" />
            <SelectInput
              name="name"
              options={optionUf}
              defaultValue={{ value: 'PR', label: 'Estado' }}
            />
            <SelectInput
              name="city"
              options={optionsCity}
              defaultValue={{ label: 'Cidade' }}
            />
            <div>
              <Dropzone onFileUploaded={setSelectedFile} />
            </div>
          </fieldset>
          <div className="button">
            <Button type="button">Cadastrar</Button>
          </div>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default CreateProperties;
