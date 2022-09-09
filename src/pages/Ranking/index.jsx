import React from 'react';
import { Container, ContainerStyle } from './index-styles';
import DataTable from './Table'
import Header from '../../components/Header';

function Ranking() {
  return (
    <ContainerStyle>
        <Header />
    <DataTable />
  </ContainerStyle>
  )
}

export default Ranking;