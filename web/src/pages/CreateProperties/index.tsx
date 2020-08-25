import React from 'react';
import { Form } from '@unform/web';
import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, FormContainer } from './styles';

const CreateProperties: React.FC = () => {
  return (
    <Container>
      <Header
        title="Cadastrar Imóveis"
        descriptionTitle="Aqui é o caminho para fazer o cadastro de imóveis"
        description="Preencha o formulário para completar o cadastro"
      />

      <FormContainer>
        <Form onSubmit={() => {}}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input name="street" placeholder="Rua/Avenida" />
            <Input name="number" placeholder="Número" />
            <Input name="value" placeholder="R$ Valor" />
          </fieldset>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default CreateProperties;
