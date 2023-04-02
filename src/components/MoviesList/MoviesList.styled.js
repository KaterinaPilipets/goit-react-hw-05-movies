import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListMovie = styled.ul`
  list-style: none;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  text-decoration: underline;
  &.active {
    color: white;
    background-color: teal;
  }
  &:hover {
    color: teal;
  }
`;
