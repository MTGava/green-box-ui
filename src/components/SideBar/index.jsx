import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SideBarStyle, MenuStyle } from './index-styles';

function SideBar(props) {
    return (
    <Container active={props.active}>
        <SideBarStyle active={props.active}>
            <MenuStyle>
                <Link to="/home" ><p>Home</p></Link>
                <Link to="/home" ><p>Ranking geral</p></Link>
                <Link to="/home" ><p>Troca de pontos</p></Link>
                <Link to="/perfil" ><p>Perfil</p></Link>
                <Link to="/" ><p>Logout</p></Link>
            </MenuStyle>
        </SideBarStyle>
    </Container>
  )
}

export default SideBar;