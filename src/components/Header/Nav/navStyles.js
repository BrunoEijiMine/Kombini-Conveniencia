import styled from 'styled-components';
import colors from '../../ui/colors';

export const NavContainer = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    gap: 2em;
`;

export const NavText = styled.p`
    color: ${colors.white};
`;

export const NavButton = styled.a`
    color: ${colors.white};
    background-color: ${colors.primary};
    border-radius: 20px;
    padding: 8px 16px;
    font-weight: 600;
`;