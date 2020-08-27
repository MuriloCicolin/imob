import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/imob.png';
import { Container, HeaderContainer } from './styles';

interface HeaderProps {
  title?: string;
  descriptionTitle?: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,

  children,
}) => {
  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <FiArrowLeft size={25} color="#FFF" />
        </Link>

        <h2>{title}</h2>
        <img src={logoImg} alt="logo" />
      </HeaderContainer>
    </Container>
  );
};

export default Header;
