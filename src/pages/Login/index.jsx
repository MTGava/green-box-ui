import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Image from '../../components/Image';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import GreenBoxIcon from '../../assets/green-box.png'
import { Container } from './index-styles'


function Login() {
  return (
    <Container>
      <Image src={GreenBoxIcon}/>
      <Input icone={faUser} mensagem="E-mail corporativo"/>
      <Input icone={faLock} mensagem="Senha" type="Password"/>
      <Button titulo="Entrar"/>
    </Container>
  );
}

export default Login;