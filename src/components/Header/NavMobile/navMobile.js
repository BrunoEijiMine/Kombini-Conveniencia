import React, { useState, useEffect } from "react";
import { 
    NavMobileContainer,
    NavMobileButton, 
    BackgroundNavOpacity, 
    NavMobileTitle, 
    MobileListWrapper,
    MobileListContainer 
} from "./navMobileStyles";

// Logo
import logo from "../../../assets/img/logo-kombini.png";

// Biblioteca de ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const links = [
    {
        name: "Início",
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
];

const NavMobile = () => {

    // Estados para fechar o nav
    const [navOpen, setNavOpen] = useState(false)

    const openNav = () => {
        setNavOpen(true)
    }

    const closeNav = () => {
        setNavOpen(false)
    }

    // Aqui realizo a funçao para abrir o nav
    const [isVisible, setIsVisible] = useState(window.innerWidth < 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth < 1200);
            openNav();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {isVisible && navOpen && (
                <>
                    <BackgroundNavOpacity /> {/* Opacidade do fundo ao ativar o mobile */}
                    <NavMobileContainer>
                        <MobileListWrapper>
                            <NavMobileTitle>
                                <img src={logo} alt="Logo Kombini" className="logo" />
                                <FontAwesomeIcon className="icon" icon={faX} onClick={closeNav}/>
                            </NavMobileTitle>

                            <MobileListContainer>
                                {links.map((link, index) => (
                                    <a href={link.href} key={index}>
                                        {link.name}
                                    </a>
                                ))}
                                <NavMobileButton>Nos visite</NavMobileButton>
                            </MobileListContainer>
                        </MobileListWrapper>
                    </NavMobileContainer>
                </>
            )}
        </>
    );
};

export default NavMobile;
