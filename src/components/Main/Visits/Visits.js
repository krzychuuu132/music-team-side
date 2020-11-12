import React from 'react';

import './Visits.scss';


const showVisits = (data) =>{

    
    return(
        data.map((visit,index)=>(

            <div className="realization__element" key={index}>

                <div className="realization__element-location">
                    <span className="realization__element-location_dot"></span>

                    <div className="realization__element-location_area">
                        <p className="realization__element-location_area-text">{visit.tytul}</p>
                        <span className="realization__element-location_area-text">{visit.data} <span>{visit.godzina}</span></span> 
                        <span className="realization__element-location_area-text">{visit.miejsce}</span>
                    </div>
                </div>

                <div className="realization__element-ticket">
                    <span className="realization__element-ticket_road">Jak dojechać?</span>

                    <button className="realization__element-ticket_btn "><a href={visit.link} target="blank">bilety</a></button>
                </div>

            </div>

            ))
    )
}


const Visits = ({visits,archiwums}) => {


    const handleArchiwumsClick = (e) =>{
        e.target.nextSibling.classList.toggle('visits__archiwums--active');
    }

 return ( 
       
        <section className="section visits" id="visits">

            <div className="wrapper">

                        <h2 className="section__title realization__title">tu będziemy! <span className="section__title-line"></span></h2>

                        <div className="realization-wrapper">

                            {
                                showVisits(visits)
                            }

                            <button className="section__btn realization__btn" onClick={handleArchiwumsClick}>archwiwum wydarzeń</button>

                            <div className="visits__archiwums">
                                {
                                    showVisits(archiwums)
                                }
                            </div>

                        </div>
            </div>

        </section>

     );
}
 
export default Visits;