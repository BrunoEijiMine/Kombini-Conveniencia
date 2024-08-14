import React from "react";
import { NavContainer, NavText, NavButton } from "../Nav/navStyles";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@fortawesome/free-solid-svg-icons'

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


const Nav = () => {

    return (
        <>
            <NavContainer>
                {links.map((link, index) => {
                    return (
                        <NavText href={link.href} key={index}>
                            {link.name}
                        </NavText>
                    );

                })}

                <NavButton>Nos visite</NavButton>

            </NavContainer>

        </>
    );

}

export default Nav