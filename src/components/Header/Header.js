import React from 'react';

import Navigation from "./Navigation/Navigation";

import "./Header.scss";

import Logo from "../../img/logo.png";

const Header = () => {

    const menuSections = [
        {
            id:0,
            title: 'o zespole',
            path: '#about-tem'
        },
        {
            id:1,
            title: 'skład',
            path: '#team'
        },
        {
            id:2,
            title: 'realizacje',
            path: '#realizations'
        },
        
        {
            id:3,
            title: 'oferta',
            path: '#offer'
        },
        {
            id:4,
            title: 'kontakt',
            path: '#contact'
        },
        {
            id:5,
            title: 'tu będziemy',
            path: '#visits'
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