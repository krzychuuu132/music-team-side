import React,{ useState } from 'react';

import "./Navigation.scss";

const Navigation = ({menuSections}) => {

    const [ activeHamburger , setActiveHamburger] = useState(false);
    return ( 
        <>
        <nav className={activeHamburger?"navigation navigation--active":"navigation"}>

                <div className="navigation__hamburger">

                    <button className="navigation__hamburger-btn" onClick={()=>setActiveHamburger(!activeHamburger)}>
                            <span className="navigation__hamburger-line"></span>
                    </button>

                </div>

              
        </nav>
        
        <ul className="navigation__list">
                {
                    menuSections.map(menuSection=>(
                        <li key={menuSection.id} className="navigation__item">
                            <a href="#" className="navigation__link">{menuSection.title}</a>
                        </li>
                    ))
                }
        </ul>
        </>
     );
}
 
export default Navigation;