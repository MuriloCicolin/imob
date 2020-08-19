import React from 'react';

import {
  Container,
  HeaderContent,
  Image,
  LogOffIcon,
  BackgroundImage,
  RegisterButton,
  ListButton,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <Image src="https://avatars1.githubusercontent.com/u/49662901?v=4" />
        <LogOffIcon />
      </HeaderContent>

      <BackgroundImage />

      <h1>
        Seja Bem-vindo, <strong>O que deseja fazer ?</strong>
      </h1>

      <RegisterButton>
        <span>Cadastra Imóveis</span>
      </RegisterButton>

      <ListButton>
        <span>Procurar Imóveis Imóveis</span>
      </ListButton>

      <span>Total de 250 móveis cadastrados</span>
    </Container>
  );
};

export default Dashboard;
