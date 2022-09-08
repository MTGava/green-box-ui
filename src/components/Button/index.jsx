import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyle } from './index-styles'

function Button(props) {
  return (
      <ButtonStyle>
        <Link to="/home" style={{"text-decoration" : "none", "color" : "white"}}>{props.titulo}</Link>
      </ButtonStyle>
  )
}

export default Button;