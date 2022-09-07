import React from 'react';
import { Input } from '../components/Input';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <>
      <Input icone={faUser} />
      <Input icone={faLock} />
    </>
  );
}

export default Login;