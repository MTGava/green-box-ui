import React from 'react';
import { ContainerStyle, PointsStyle, TrocaPontosStyle, HeaderPoints, Points, Title, ContainerCard } from './index-styles';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/Card';

function TrocaPontos() {
  const products = [{
    name: 'Ifood',
    value: '30,00',
    image: 'https://play-lh.googleusercontent.com/1Y_VGOwYBFGY30KWxT4EpFkxkhr4VXAnMdPtbF56yUVpPkbSVV5mGdCvw1RI7aNX8Q',
    points: '6000'
   
}, {
    name: 'Uber',
    value: '18,90',
    image: 'https://media.hugogloss.uol.com.br/uploads/2019/05/pennsylvania-sues-uber-over-late-breach-notification-showcase_image-7-a-10703-1.jpg',
    points: '3780'
   
}, {
  name: 'Spotify',
  value: '45,90',
  image: 'https://www.scdn.co/i/_global/open-graph-default.png',
  points: '9180'
  
}, {
  name: 'Netflix',
  value: '99,90',
  image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/12/netflix-logo.png',
  points: '19980'
  
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
            value={i.value}
            image={i.image}
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