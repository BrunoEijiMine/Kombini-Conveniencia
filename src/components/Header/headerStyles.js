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
  display: flex;
  width: 1600px;
  justify-content: space-between;
  align-items: center;


@media only screen and (max-width: 768px) {
    background-color: ${colors.primary}
}
`