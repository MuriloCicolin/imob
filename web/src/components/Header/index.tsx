import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/imob.png';
import { Container, HeaderContainer, TopBarContainer } from './styles';

interface HeaderProps {
  title?: string;
  descriptionTitle?: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  description,
  descriptionTitle,
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

      <TopBarContainer>
        <div>
          <h2>{descriptionTitle}</h2>
          <p>{description}</p>
        </div>
      </TopBarContainer>
    </Container>
  );
};

export default Header;
