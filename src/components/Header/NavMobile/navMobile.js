import React, { useState } from "react";
import {
  NavMobileContainer,
  NavMobileButton,
  BackgroundNavOpacity,
  NavMobileTitle,
  MobileListWrapper,
  MobileListContainer,
} from "./navMobileStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/img/logo-kombini.png";

const links = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Menu", href: "/menu" },
  { name: "Contato", href: "/contato" },
];

function NavMobile({ openNav, closeNav }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseNav = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsClosing(false);
      closeNav(); 
    }, 500);
  };

  return (
    <>
      {openNav && (
        <>
          <BackgroundNavOpacity onClick={handleCloseNav} />
          <NavMobileContainer className={isClosing ? "close" : "open"}>
            <MobileListWrapper>
              <NavMobileTitle>
                <img src={logo} alt="Logo Kombini" className="logo" />
                <FontAwesomeIcon className="icon" icon={faX} onClick={handleCloseNav} />
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
}

export default NavMobile;
