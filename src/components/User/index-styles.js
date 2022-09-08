import styled from 'styled-components';

export const ContainerUser = styled.div`
   margin-top: ${props => props.top || "20px"};  
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.main || ""};
    align-items: center;
    
`;

export const UserStyle = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  width: ${props => props.width || "300px"};
  height: 30px;
  margin: 0 5px;
`;