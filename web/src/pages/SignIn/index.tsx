import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content, AnimationContainer, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/imob.png';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit() {
    console.log('oi');
  }

  return (
    <>
      <Container>
        <Content>
          <AnimationContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <img src={logoImg} alt="Logo" />
              <h1>Faça seu login</h1>

              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />

              <Button type="submit">Entrar</Button>

              <Link to="/forgot-password"> Esqueci minha senha</Link>
            </Form>

            <Link to="/signup">
              <FiLogIn />
              Criar conta
            </Link>
          </AnimationContainer>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
