import React from 'react';
import { ContainerStyle, PerfilStyle, RankingStyle, UsuarioStyle } from './index-styles';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faRecycle, faStar, faUserCircle, faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons';
import Ranking from '../../components/Ranking';
import User from '../../components/User';

function Perfil() {
  return (
    <ContainerStyle>
        <Header />
        <PerfilStyle>
            <RankingStyle>
                <FontAwesomeIcon icon={faRankingStar} color="#739963" fontSize={50} />
                <Ranking />
            </RankingStyle>
            <UsuarioStyle>
                <FontAwesomeIcon icon={faUserCircle} color="#739963" fontSize={80} />
                <User top="20px" main="center">Olá, Matheus!</User>
                <User top="20px">Relatório do seu GreenBox:</User>
                <User top="20px">
                  <FontAwesomeIcon icon={faRecycle} color="#739963" fontSize={30} style={{"margin-right" : "10px"}}/>
                  3
                </User>
                <User top="40px">
                  <FontAwesomeIcon icon={faStar} color="#739963" fontSize={30} style={{"margin-right" : "10px"}}/>
                  1300
                </User>
                <User top="40px">
                  <FontAwesomeIcon icon={faArrowUpShortWide} color="#739963" fontSize={30} style={{"margin-right" : "10px"}}/>
                  {Math.round(30 / 5)}
                </User>
                
            </UsuarioStyle>
        </PerfilStyle>
    </ContainerStyle>
  )
}

export default Perfil;