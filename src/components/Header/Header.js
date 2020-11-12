import React from 'react';

import Navigation from "./Navigation/Navigation";

import "./Header.scss";

import Logo from "../../img/logo.png";

const Header = () => {

    const menuSections = [
        {
            id:0,
            title: 'o nas',
            path: '#about-tem'
        },
        
        {
            id:2,
            title: 'Audio/Video',
            path: '#realizations'
        },
        
        {
            id:3,
            title: 'oferta',
            path: '#offer'
        },
        {
            id:5,
            title: 'tu będziemy',
            path: '#visits'
        },
        {
            id:4,
            title: 'kontakt',
            path: '#contact'
        },
        
    ]
    return ( 
        <header className="header">

            <div className="wrapper">
                    <div className="logo">
                        <img src={Logo} alt="team-logo" className="logo__img"/> 
                    </div>
                    <Navigation menuSections={menuSections}/>
            </div>

        </header>
     );
}
 
export default Header;