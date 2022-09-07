import React, { useState } from 'react';
import { InputStyle, Container } from './index-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input(props) {

  const [iconFocus, setIconFocus] = useState(false)
  const corIconesInativo = '#7F7F7F'
  const corIconesAtivo = '#739963'
    
  return (
    <Container> 
     <FontAwesomeIcon icon={props.icone} color={iconFocus ? corIconesAtivo : corIconesInativo}/>
     <InputStyle placeholder={props.mensagem} {...props} onFocus={()=>setIconFocus(true)} onBlur={()=>setIconFocus(false)}/>
    </Container>
   );

}

export default Input;