import React from 'react';
import { Container, StyledLink } from './index-styles';

function SideBar(props) {
  return (
      <Container barWidth={props.barWidth}>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/ranking">Ranking geral</StyledLink>
        <StyledLink to="/home">Troca de pontos</StyledLink>
        <StyledLink to="/perfil">Perfil</StyledLink>
        <StyledLink to="/login">Logout</StyledLink>
      </Container>
  )
}

export default SideBar;