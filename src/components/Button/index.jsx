import React from 'react';
import { ButtonStyle } from './index-styles'

function Button(props) {
  return (
      <ButtonStyle>{props.titulo}</ButtonStyle>
  )
}

export default Button;