import React from 'react';
import { Container, SideBarStyle, MenuStyle } from './index-styles';

function SideBar(props) {
    return (
    <Container>
        <SideBarStyle active={props.active}>
            <MenuStyle>
                <p>Home</p>
                <p>Ranking geral</p>
                <p>Troca de pontos</p>
                <p>Perfil</p>
                <p>Logout</p>
            </MenuStyle>
        </SideBarStyle>
    </Container>
  )
}

export default SideBar;