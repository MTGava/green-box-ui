import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Image from '../../components/Image';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import GreenBoxIcon from '../../assets/green-box.png'
import { ContainerShadow, ContainerStyle, ContainerRoot } from './index-styles'
import Divisor from '../../components/Divisor'
import TextLink from '../../components/TextLink';


function Login() {
  return (
    <ContainerRoot>
      <ContainerStyle>
        <ContainerShadow>
          <Image src={GreenBoxIcon} width="220px" height="220px" style={{"margin-bottom":"5rem"}}/>
          <Input icone={faUser} mensagem="E-mail corporativo" type="email"/>
          <Input icone={faLock} mensagem="Senha" type="Password"/>
          <Button>Entrar</Button>    
          <div style={{"margin-top":"1rem"}}>
            <TextLink>Cadastre-se</TextLink>
            <Divisor />
            <TextLink>Esqueci minha senha</TextLink>
          </div>      
        </ContainerShadow>
      </ContainerStyle>
      </ContainerRoot>
  );
}

export default Login;