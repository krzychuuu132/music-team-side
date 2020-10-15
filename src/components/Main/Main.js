import React from 'react';

import About from './About/About';
import Squad from './Squad/Squad';
import Cooperating from './Cooperating/Cooperating';

import './Main.scss';


const Main = () => {
    return ( 
        <main className="main">
            <About />
            <Squad />
            <Cooperating />
        </main>
     );
}
 
export default Main;