import React from 'react';
import { Container, ContainerRanking, RankingStyle, Title } from './index-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';


function Ranking(props) {  
    return (
        <Container>
            <Title>
                <FontAwesomeIcon icon={faRankingStar} color="#739963" fontSize={60} />
            </Title>
            {props.ranking.map((i, index) => <ContainerRanking key={index}>
                <RankingStyle nome="true">{i.name}</RankingStyle>
                <RankingStyle width="100px">{i.points}</RankingStyle>
            </ContainerRanking>
            )}
        </Container>
    ) 
};

export default Ranking;