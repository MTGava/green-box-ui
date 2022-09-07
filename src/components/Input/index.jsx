import React from 'react';
import { InputStyle, Container } from './index-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input(props) {

  const corIcones = '#7F7F7F'
    
  return (
    <Container> 
     <FontAwesomeIcon icon={props.icone} color={corIcones}/>
     <InputStyle placeholder={props.mensagem} {...props}/>
    </Container>
   );

}

export default Input;