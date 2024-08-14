import styled from 'styled-components';
import colors from '../../ui/colors'

export const NavMobileContainer = styled.div`
    position: absolute;
    background: blue;
    top: 0;
    right: 0;
    width: 250px;
    padding: 0 1rem;
    height: 100vh;
    z-index: 9999;
    display: block;
`

export const NavMobileText = styled.p`
    color: ${colors.white};
`;

export const NavMobileButton = styled.a`
    color: ${colors.white};
    background-color: ${colors.primary};
    border-radius: 20px;
    padding: 8px 16px;
    font-weight: 600;
`;

export const BackgroundNavOpacity = styled.div`
    z-index: 100;
    background: #000000a3;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const NavMobileTitle = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;