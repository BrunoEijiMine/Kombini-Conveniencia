import React, { useState } from "react";
import { HeaderContainer, NavContainer } from "../Header/headerStyles";
import Nav from "./Nav/nav";
import NavMobile from "./NavMobile/navMobile";

import logo from "../../assets/img/logo-kombini.png"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (
        <HeaderContainer>
            <NavContainer>
                <img src={logo} width={146} height={37} />
                <Nav />
                <NavMobile />
            </NavContainer>
        </HeaderContainer>
    );

}

export default Header