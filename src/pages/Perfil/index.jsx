import React from 'react';
import { ContainerStyle, PerfilStyle, RankingStyle, UsuarioStyle } from './index-styles';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faRecycle, faStar, faUserCircle, faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons';
import Ranking from '../../components/Ranking';
import User from '../../components/User';

function Perfil() {
  const ranking = [{
    name: 'Marcos V',
    points: '12000',
	  place: '1'
   
},{
    name: 'Marcos V',
    points: '11000',
	  place: '2'
   
},{
    name: 'Marcos V',
    points: '10000',
  	place: '3'
   
},{
    name: 'Marcos V',
    points: '9000',
  	place: '4'
   
}];
  return (
    <ContainerStyle>
        <Header />
        <PerfilStyle>
            <RankingStyle>
                <Ranking ranking={ranking} />
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