import React, { useState, useEffect } from "react";
import { NavContainer, NavText, NavButton, Icon } from "../Nav/navStyles";
import NavMobile from "../NavMobile/navMobile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const links = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Menu", href: "/menu" },
    { name: "Contato", href: "/contato" },
];

function Nav() {
    const [menuMobile, setMenuMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(window.innerWidth > 1150);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth > 1150);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {isVisible ? (
                <NavContainer>
                    {links.map((link, index) => (
                        <NavText href={link.href} key={index}>
                            {link.name}
                        </NavText>
                    ))}
                    <NavButton>Nos visite</NavButton>
                </NavContainer>
            ) : (
                <>
                    <Icon onClick={() => setMenuMobile(true)}>
                        <FontAwesomeIcon icon={faBarsStaggered} style={{cursor: "pointer"}}/>
                    </Icon>
                    
                    {menuMobile && (
                        <NavMobile 
                            openNav={menuMobile} 
                            closeNav={() => setMenuMobile(false)} 
                        />
                    )}
                </>
            )}
        </>
    );
}

export default Nav;
