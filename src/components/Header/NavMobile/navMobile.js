import React from "react";
import { NavMobileContainer, NavMobileText, NavMobileButton, BackgroundNavOpacity, NavMobileTitle } from "./navMobileStyles";
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
            <BackgroundNavOpacity />
            <NavMobileContainer>
                <NavMobileTitle>
                    <p>Teste</p>
                    <FontAwesomeIcon icon={faX} />
                </NavMobileTitle>










                {links.map((link, index) => {
                    return (
                        <NavMobileText href={link.href} key={index}>
                            {link.name}
                        </NavMobileText>
                    );
                })}

                <NavMobileButton>Nos visite</NavMobileButton>


            </NavMobileContainer>

        </>
    );

}

export default NavMobile