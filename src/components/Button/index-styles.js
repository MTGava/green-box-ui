import styled from 'styled-components';

export const ButtonStyle = styled.button`
  font-weight: 700;
  margin: 1rem 0;
  background-color: #739963;
  border: none;
  outline: none;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  width: ${props => props.buttonWidth || '280px'};
  height: 30px;
  border-radius: 4px;
  color: white;
  justify-content: center;
  transition: color 0.3s;
  cursor: pointer;
  :hover {background: #4D6642}
`;