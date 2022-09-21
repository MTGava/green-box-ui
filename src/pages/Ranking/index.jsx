import React from 'react';
import { ContainerStyle, RankingStyle, PositionsStyle } from './index-styles';
import Ranking from '../../components/Ranking';
import Header from '../../components/Header';

function RankingTotal() {

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
   
},{
    name: 'Marcos V',
    points: '8000',
	  place: '5'
   
},{
    name: 'Marcos V',
    points: '7000',
  	place: '6'
   
},{
  name: 'Marcos V',
  points: '6000',
  place: '6'
 
},{
  name: 'Marcos V',
  points: '5000',
  place: '6'
 
},{
  name: 'Marcos V',
  points: '4000',
  place: '6'
 
},{
  name: 'Marcos V',
  points: '3000',
  place: '6'
 
},{
  name: 'Marcos V',
  points: '3000',
  place: '6'
 
},{
  name: 'Marcos V',
  points: '3000',
  place: '6'
 
},{
  name: 'Marcos V',
  points: '3000',
  place: '6'
 
},{
  name: 'Marcos V',
  points: '3000',
  place: '6'
 
},{
  name: 'Marcos V',
  points: '3000',
  place: '6'
 
},{
  name: 'Marcos V',
  points: '3000',
  place: '6'
 
},{
  name: 'Marcos V',
  points: '3000',
  place: '6'
 
},{
  name: 'Marcos V',
  points: '3000',
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