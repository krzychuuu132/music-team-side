import React,{useEffect,useState} from 'react';

import { fetchSquad } from '../../../utilities/fetchData';

import './Cooperating.scss';

const Cooperating = ({coopertns:cooperating}) => {

    

  
    
    return ( 

        <section className="section cooperating">

              <div className="wrapper">

              <h2 className="section__title cooperating__title">współpraca <span className="section__title-line"></span></h2>

              <div className="cooperating-wrapper">

              {
                  cooperating.map((person,index)=>(

                    <div className="cooperating__person" key={index}>
                       
                        <img  src={person.zdjecie["url"]} alt="cooperating-person" className="cooperating__person-picture"/>

                    <p className="cooperating__person-name">{person.name}</p>

                    </div>
                  ))
              }

                </div>

              </div>

        </section>

     );
}
 
export default Cooperating;