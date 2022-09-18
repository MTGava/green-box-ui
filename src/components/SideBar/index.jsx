import React from 'react';
import { Container, StyledLink } from './index-styles';

function SideBar(props) {
  return (
      <Container barWidth={props.barWidth}>
        <StyledLink to="/ranking">Ranking geral</StyledLink>
        <StyledLink to="/troca-de-pontos">Troca de pontos</StyledLink>
        <StyledLink to="/perfil">Perfil</StyledLink>
        <StyledLink to="/">Logout</StyledLink>
      </Container>
  )
}

export default SideBar;