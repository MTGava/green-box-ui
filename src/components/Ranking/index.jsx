import React from 'react';
import { Container, ContainerRanking, RankingStyle } from './index-styles';

function Ranking() {  
    return (
        <>
            <ContainerRanking>
                <RankingStyle nome="true" cor="#ffd700">Marcos Rossetto</RankingStyle>
                <RankingStyle cor="#ffd700" width="100px">1242423300</RankingStyle>
            </ContainerRanking>
            <ContainerRanking>
                <RankingStyle nome="true" cor="#c0c0c0">Matheus Gava Silva</RankingStyle>
                <RankingStyle cor="#c0c0c0" width="100px">1242423299</RankingStyle>
            </ContainerRanking>
            <ContainerRanking>
                <RankingStyle nome="true" cor="#cd7f32">Guilherme Moreira</RankingStyle>
                <RankingStyle cor="#cd7f32" width="100px">900</RankingStyle>
            </ContainerRanking>
            <ContainerRanking>
                <RankingStyle nome="true">Gabriel Aguiar</RankingStyle>
                <RankingStyle width="100px">5</RankingStyle> 
            </ContainerRanking>
        </>
    ) 
};

export default Ranking;