import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

import bgImage from '../../assets/home.png';

import {
  Container,
  HeaderContent,
  Image,
  ButtonIcon,
  BackgroundImage,
  ContainerButton,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const [propertySum, setPropertySum] = useState(0);

  useEffect(() => {
    api.get('/properties/count').then(response => {
      setPropertySum(response.data);
    });
  }, []);

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
        <Link to="/create">Cadastrar Imóveis</Link>

        <Link className="search" to="/search">
          Procurar Imóveis
        </Link>
      </ContainerButton>

      <span>Total de {propertySum} imoveis cadastrados</span>
    </Container>
  );
};

export default Dashboard;
