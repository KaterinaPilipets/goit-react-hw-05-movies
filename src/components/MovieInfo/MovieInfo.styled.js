import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 8px;
  margin-bottom: 16px;
  color: gray;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 0.5px grey;
  :hover {
    color: teal;
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 20px;
`;
export const ContainerLink = styled.div`
  display: flex;
  gap: 20px;
`;

export const Li = styled.li`
  width: 200px;
`;

export const Year = styled.span`
  color: teal;
  //   font-size: 18px;
  font-weight: 600;
`;
export const Galery = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  list-style: none;
`;
