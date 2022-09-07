import React from 'react';
import { ContainerStyle, PerfilStyle, RankingStyle, UsuarioStyle } from './index-styles';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faUser } from '@fortawesome/free-solid-svg-icons';

function Perfil() {
  return (
    <ContainerStyle>
        <Header />
        <PerfilStyle>
            <RankingStyle>
                <FontAwesomeIcon icon={faRankingStar} color="#739963" fontSize={50} />
            </RankingStyle>
            <UsuarioStyle>
                <FontAwesomeIcon icon={faUser} color="#739963" fontSize={80} />
            </UsuarioStyle>
        </PerfilStyle>
    </ContainerStyle>
  )
}

export default Perfil;