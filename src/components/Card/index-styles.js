import styled from 'styled-components';

export const ContainerStyle = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 8px;
  width: 240px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px 16px;
`;

export const Title = styled.h4`
  color: #739963;
  font-weight: 700;
  font-size: 16px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
`;

export const RewardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: 32px;
`;

export const TotalPoints = styled.p`
    color: #739963;
    font-weight: 700;
    font-size: 14px;
`;