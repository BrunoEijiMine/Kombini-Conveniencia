import styled from 'styled-components';
import colors from '../ui/colors';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${colors.dark}; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavContainer = styled.div`
  width: 1150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px 0 10px;
`