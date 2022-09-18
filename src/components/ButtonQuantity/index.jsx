import React from 'react';
import { ButtonStyle } from './index-styles'

function ButtonQuantity(props) {
  return (
    <ButtonStyle buttonWidth={props.buttonWidth} {...props}>
      {props.children}
    </ButtonStyle>
  )
}

export default ButtonQuantity;