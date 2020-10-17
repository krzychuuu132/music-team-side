import React from 'react';

import About from './About/About';
import Squad from './Squad/Squad';
import Cooperating from './Cooperating/Cooperating';
import Realization from './Realization/Realization';
import Offer from './Offer/Offer';
import Contact from './Contact/Contact';
import Visits from './Visits/Visits';
import Footer from './Footer/Footer';



import './Main.scss';


const Main = () => {
    return ( 
        <main className="main">
            <About />
            <Squad />
            <Cooperating />
            <Realization />
            <Offer />
            <Contact />
            <Visits />
            <Footer />
        </main>
     );
}
 
export default Main;