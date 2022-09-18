import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyle } from './index-styles'

function Button(props) {
  return (
    <Link to="/perfil" style={{ "text-decoration": "none", "color": "white" }}>
      <ButtonStyle buttonWidth={props.buttonWidth}>
        {props.children}
      </ButtonStyle>
    </Link>
  )
}

export default Button;