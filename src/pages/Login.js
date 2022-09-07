import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <>
      <Input icone={faUser} mensagem="E-mail corporativo"/>
      <Input icone={faLock} mensagem="Senha"/>
      <Button titulo="Entrar"/>
    </>
  );
}

export default Login;