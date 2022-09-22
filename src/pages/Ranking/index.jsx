import React from 'react';
import { ContainerStyle, RankingStyle, PositionsStyle } from './index-styles';
import Ranking from '../../components/Ranking';
import Header from '../../components/Header';

function RankingTotal() {

  const ranking = [{
    name: 'Gabriel Antonio',
    points: '12000',
	  place: '1'
   
},{
    name: 'Anderson Pereira',
    points: '11000',
	  place: '2'
   
},{
    name: 'Heitor Kalvon',
    points: '10000',
  	place: '3'
   
},{
    name: 'Maria Bessa',
    points: '9000',
  	place: '4'
   
},{
    name: 'Emilia Arruda',
    points: '8000',
	  place: '5'
   
},{
    name: 'Kenny Varão',
    points: '7000',
  	place: '6'
   
},{
  name: 'Matheus Gava',
  points: '6000',
  place: '6'
 
},{
  name: 'Anthony Lustosa',
  points: '6000',
  place: '6'
 
},{
  name: 'Serena Camarinho',
  points: '4500',
  place: '6'
 
},{
  name: 'Hadassa Marreiro',
  points: '3000',
  place: '6'
 
},{
  name: 'Inácio Caires',
  points: '2500',
  place: '6'
 
},{
  name: 'Aryan Valente',
  points: '2000',
  place: '6'
 
},{
  name: 'Nicole Ferreira',
  points: '1500',
  place: '6'
 
},{
  name: 'Rita Maior',
  points: '1000',
  place: '6'
 
},{
  name: 'Camilo Gorjão',
  points: '500',
  place: '6'
 
},{
  name: 'Denzel Salomão',
  points: '0',
  place: '6'
 
},{
  name: 'Vitória Cachão',
  points: '0',
  place: '6'
 
},{
  name: 'Thiago Andrade',
  points: '0',
  place: '6'
 
}]

  return (
    <ContainerStyle>
        <Header />
        <PositionsStyle>
          <RankingStyle>
            <Ranking ranking={ranking} />
          </RankingStyle>
        </PositionsStyle>
  </ContainerStyle>
  )
}

export default RankingTotal;