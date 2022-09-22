import React from 'react';
import { ContainerStyle, PointsStyle, TrocaPontosStyle, HeaderPoints, Points, Title, ContainerCard } from './index-styles';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/Card';

function TrocaPontos() {
  const products = [{
    name: 'Assinatura E-mail: "1000" Pontos no GreenBox',
    points: '1000'
   
}, {
    name: 'Assinatura E-mail: "5000" Pontos no GreenBox',
    points: '5000'
   
}, {
  name: 'Assinatura E-mail: "10000" Pontos no GreenBox',
  points: '10000'
  
}, {
  name: 'Assinatura E-mail: "15000" Pontos no GreenBox',
  points: '15000'
  
}]

let pontuacao = 6000;

  return (
    <ContainerStyle>
      <Header />
      <PointsStyle>
        <TrocaPontosStyle>
          <HeaderPoints>
            <Title>Troca de Pontos</Title>
            <Points>
              <FontAwesomeIcon icon={faCoins} color="#739963" fontSize={24} style={{ "marginRight": "10px" }} />
              {pontuacao}
            </Points>
          </HeaderPoints>
          <ContainerCard>
            {products.map((i, index) => <Card key={index} 
            title={i.name}
            points={i.points}
            pontuacao={pontuacao}
            />)}
          </ContainerCard>
        </TrocaPontosStyle>
      </PointsStyle>
    </ContainerStyle>
  );
}

export default TrocaPontos;