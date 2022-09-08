import React from 'react';
import { Container, ContainerRanking, RankingStyle } from './index-styles';

function Ranking() {  
    return (
        <>
            <ContainerRanking>
                <RankingStyle cor="#ffd700"/>
                <RankingStyle cor="#ffd700" width="100px"/> 
            </ContainerRanking>
            <ContainerRanking>
                <RankingStyle cor="#c0c0c0" />
                <RankingStyle cor="#c0c0c0" width="100px"/> 
            </ContainerRanking>
            <ContainerRanking>
                <RankingStyle cor="#cd7f32"/>
                <RankingStyle cor="#cd7f32" width="100px"/> 
            </ContainerRanking>
            <ContainerRanking>
                <RankingStyle />
                <RankingStyle width="100px"/> 
            </ContainerRanking>
        </>
    ) 
};

export default Ranking;