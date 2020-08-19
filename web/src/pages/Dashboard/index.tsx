import React from 'react';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

import bgImage from '../../assets/home.png';

import {
  Container,
  HeaderContent,
  Image,
  ButtonIcon,
  BackgroundImage,
  ContainerButton,
  RegisterButton,
  ListButton,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <div>
          <Image src="https://avatars1.githubusercontent.com/u/49662901?v=4" />
          <h2>Murilo Cicolin</h2>
        </div>
        <ButtonIcon type="button" onClick={signOut}>
          <FiPower size={25} />
        </ButtonIcon>
      </HeaderContent>

      <BackgroundImage src={bgImage} />

      <h1>
        Seja Bem-vindo, <br /> O que deseja fazer ?
      </h1>

      <ContainerButton>
        <RegisterButton>
          <span>Cadastrar Imóveis</span>
        </RegisterButton>

        <ListButton>
          <span>Procurar Imóveis</span>
        </ListButton>
      </ContainerButton>

      <span>Total de 250 móveis cadastrados</span>
    </Container>
  );
};

export default Dashboard;
