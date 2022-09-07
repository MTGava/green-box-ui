import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Image from '../../components/Image';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import GreenBoxIcon from '../../assets/green-box.png'
import { ContainerStyle } from './index-styles'


function Login() {
  return (
    <ContainerStyle>
      <Image src={GreenBoxIcon} width="220px" height="220px" style={{"margin-bottom":"60px"}}/>
      <Input icone={faUser} mensagem="E-mail corporativo"/>
      <Input icone={faLock} mensagem="Senha" type="Password"/>
      <Button titulo="Entrar"/>
    </ContainerStyle>
  );
}

export default Login;