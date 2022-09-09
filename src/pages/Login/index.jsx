import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Image from '../../components/Image';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import GreenBoxIcon from '../../assets/green-box.png'
import { ContainerShadow, ContainerStyle } from './index-styles'


function Login() {
  return (
      <ContainerStyle className='container'>
        <ContainerShadow>
        <Image src={GreenBoxIcon} width="220px" height="220px" style={{"margin-bottom":"5rem"}}/>
        <Input icone={faUser} mensagem="E-mail corporativo"/>
        <Input icone={faLock} mensagem="Senha" type="Password"/>
        <Button titulo="Entrar"/>    
        <div style={{"margin-top":"1rem"}}>
        <p>Novo por aqui? <a href='#'>Cadastre-se!</a></p>
        <p>Esqueceu sua senha? <a href='#'>Clique aqui!</a></p>
          </div>      
        </ContainerShadow>
      </ContainerStyle>
  );
}

export default Login;