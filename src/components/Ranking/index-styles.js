import styled from 'styled-components';

export const RankingStyle = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: ${props => props.nome ? "" : "center" };
  background-color: #EEEE;
  padding: 4px 8px;
  width: ${props => props.width || "300px"};
  height: 30px;
  margin: 0 5px;
  font-weight: 500;
`;

export const ContainerRanking = styled.div`
    margin-top: 20px;  
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    &:nth-child(2) ${RankingStyle} {
      background-color: #ffd700;
    }
    &:nth-child(3) ${RankingStyle} {
      background-color: #c0c0c0;
    }
    &:nth-child(4) ${RankingStyle} {
      background-color: #cd7f32;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
`;

export const Title = styled.h1`
    color: #739963;
    font-weight: 400;
    font-size: 48;
    text-transform: uppercase;
`;