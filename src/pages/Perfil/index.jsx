import React from 'react';
import { ContainerStyle, PerfilStyle, RankingStyle, Relatorio, UsuarioStyle } from './index-styles';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faRecycle, faStar, faUserCircle, faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons';
import Ranking from '../../components/Ranking';
import User from '../../components/User';

function Perfil() {
  const ranking = [{
    name: 'Gabriel A',
    points: '12000',
	  place: '1'
   
},{
    name: 'Anderson P',
    points: '11000',
	  place: '2'
   
},{
    name: 'Heitor K',
    points: '10000',
  	place: '3'
   
},{
    name: 'Matheus G',
    points: '6000',
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
                <Relatorio>
                <User top="20px" main="center">Olá, Matheus!</User>
                <User top="20px">Relatório do seu GreenBox:</User>
                <User top="20px">
                  <FontAwesomeIcon icon={faRecycle} fontSize="32"/>
                  <span style={{"margin-left":"10px"}}>Itens reciclados: 120</span>
                  
                </User>
                <User top="40px">
                  <FontAwesomeIcon icon={faStar} fontSize="32"/>
                  <span style={{"margin-left":"10px"}}>Pontos: 6000</span>
                </User>
                <User top="40px">
                  <FontAwesomeIcon icon={faArrowUpShortWide} fontSize="32"/>
                  <span style={{"margin-left":"10px"}}>Nível: {Math.round(120 / 5)}</span>
                </User>
                </Relatorio>
            </UsuarioStyle>
        </PerfilStyle>
    </ContainerStyle>
  )
}

export default Perfil;