import styled from 'styled-components';

export const InputStyle = styled.input`
  margin-left: 4px;
  background: none;
  border: none;
  color: #7F7F7F;
  outline: 0;
  width: 100%;
  ::placeholder {
    font-weight: 700;
  }
`;

export const Container = styled.div`
    margin: 4px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    background-color: #F2F2F2;
    width: 300px;
    height: 30px;
    border-radius: 4px;
`;
