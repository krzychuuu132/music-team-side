import React from 'react';

import Navigation from "./Navigation/Navigation";

import "./Header.scss";

import Logo from "../../img/logo.png";

const Header = () => {

    const menuSections = [
        {
            id:0,
            title: 'o zespole'
        },
        {
            id:1,
            title: 'skład'
        },
        {
            id:2,
            title: 'realizacje'
        },
        {
            id:3,
            title: 'o zespole'
        },
        {
            id:4,
            title: 'oferta'
        },
        {
            id:5,
            title: 'kontakt'
        },
        {
            id:0,
            title: 'tu będziemy'
        },
    ]
    return ( 
        <header className="header">

            <div className="wrapper">
                    <div className="logo">
                        <img src={Logo} alt="team-logo" /> 
                    </div>
                    <Navigation menuSections={menuSections}/>
            </div>

        </header>
     );
}
 
export default Header;