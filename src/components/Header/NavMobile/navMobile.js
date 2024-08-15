import React from "react";
import { 
    NavMobileContainer,
    NavMobileButton, 
    BackgroundNavOpacity, 
    NavMobileTitle, 
    MobileListWrapper,
    MobileListContainer 
    } 
from "./navMobileStyles";

// Logo
import logo from "../../../assets/img/logo-kombini.png"

// Biblioteca de icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const links = [
    {
        name: "Inicio",
        href: "/",
    },
    {
        name: "Sobre",
        href: "/sobre",
    },
    {
        name: "Menu",
        href: "/menu",
    },
    {
        name: "Contato",
        href: "/contato",
    },
]


const NavMobile = () => {

    return (
        <>
            
            <BackgroundNavOpacity />{/* Opacidade do fundo ao ativar o mobile */}

            <NavMobileContainer>
                <MobileListWrapper>
                    <NavMobileTitle>
                        <img src={logo} className="logo"/>
                        <FontAwesomeIcon className="icon" icon={faX} />
                    </NavMobileTitle>

                    <MobileListContainer>
                        {links.map((link, index) => {
                            return (
                                <a href={link.href} key={index}>
                                    {link.name}
                                </a>
                            );
                        })}
                        <NavMobileButton>Nos visite</NavMobileButton>
                    </MobileListContainer>
                </MobileListWrapper>

            </NavMobileContainer>

        </>
    );

}

export default NavMobile