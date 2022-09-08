import styled from 'styled-components';

export const RankingStyle = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: ${props => props.nome ? "" : "center" };
  background-color: ${props => props.cor || "#EEEE"};
  padding: 4px 8px;
  width: ${props => props.width || "300px"};
  height: 30px;
  margin: 0 5px;
`;

export const ContainerRanking = styled.div`
    margin-top: 20px;  
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px; 
    width: 100%;
    height: 100%;
`;

