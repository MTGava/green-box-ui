import React from 'react';
import { Container, ContainerRanking, RankingStyle } from './index-styles';

function Ranking() {  
    return (
        <>
            <ContainerRanking>
                <RankingStyle nome="true">Marcos Rossetto</RankingStyle>
                <RankingStyle width="100px">1242423300</RankingStyle>
            </ContainerRanking>
            <ContainerRanking>
                <RankingStyle nome="true">Matheus Gava Silva</RankingStyle>
                <RankingStyle width="100px">1242423299</RankingStyle>
            </ContainerRanking>
            <ContainerRanking>
                <RankingStyle nome="true">Guilherme Moreira</RankingStyle>
                <RankingStyle width="100px">900</RankingStyle>
            </ContainerRanking>
            <ContainerRanking>
                <RankingStyle nome="true">Gabriel Aguiar</RankingStyle>
                <RankingStyle width="100px">5</RankingStyle> 
            </ContainerRanking>
        </>
    ) 
};

export default Ranking;