import React from 'react';
import { StyledLink } from './index-styles'

function TextLink(props) {
  return <StyledLink to="" {...props}>{props.children}</StyledLink>;
}

export default TextLink;