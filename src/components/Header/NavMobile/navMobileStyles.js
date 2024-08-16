import styled from 'styled-components';
import colors from '../../ui/colors'

export const NavMobileContainer = styled.div`
    position: absolute;
    background: ${colors.darkgray};
    top: 0;
    right: 0;
    width: 250px;
    padding: 0 2rem;
    height: 100vh;
    z-index: 9999;
    display: block;
`

export const NavMobileButton = styled.a`
    color: ${colors.white};
    background-color: ${colors.primary};
    border-radius: 20px;
    padding: 8px 16px;
    font-weight: 600;
`;

export const BackgroundNavOpacity = styled.div`
    z-index: 100;
    background: #000000d4;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const MobileListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
`;

export const NavMobileTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${colors.gray};

    > .logo {
        width: 80px;
    }

     > .icon {
        color: ${colors.white};
        cursor: pointer;
    }
`;

export const MobileListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    > a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${colors.white};
        text-decoration: none;

        &:hover {
            color: black; 
        }
    }
`;