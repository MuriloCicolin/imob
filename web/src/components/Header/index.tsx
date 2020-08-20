import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/imob.png';
import { Container, HeaderContainer, TopBarContainer } from './styles';

interface HeaderProps {
  title?: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({ title, description, children }) => {
  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <FiArrowLeft size={25} color="#FFF" />
        </Link>

        <h2>Cadastrar Imóveis</h2>
        <img src={logoImg} alt="logo" />
      </HeaderContainer>

      <TopBarContainer>
        <div>
          <h2>Aqui é o caminho para fazer o cadastro de imóveis</h2>
          <p>Preencha o formulário para completar o cadastro</p>
        </div>
      </TopBarContainer>
    </Container>
  );
};

export default Header;
