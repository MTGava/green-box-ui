import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: #739963;
  display: inline;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  margin-left: ${props => props.spacing ? '8px' : '0px'};
  transition: color 0.3s;
  :hover {
    color: #4D6642;
  }
`;