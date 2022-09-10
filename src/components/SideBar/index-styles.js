import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  width: ${props => props.barWidth};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #FFF;
  overflow-x: hidden;
  padding-top: 60px;
  transition: width 0.5s;
  box-shadow: 0 0 1.2rem #888;
`;

export const StyledLink = styled(Link)`
  padding: 8px 8px 8px 16px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #739963;
  display: block;
  transition: 0.5s;
  white-space: nowrap;
  text-transform: uppercase;
  :hover {
    color: #FFF;
    background-color: #4D6642;    
  }
  &:nth-child(1) {
    margin-top: 32px;
  }
`;
