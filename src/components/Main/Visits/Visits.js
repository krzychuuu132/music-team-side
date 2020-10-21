import React,{ useEffect,useState } from 'react';

import { fetchSquad } from '../../../utilities/fetchData';

import './Visits.scss';

const Visits = ({url}) => {

    const [visits,setVisits] = useState([]);

    useEffect(()=>{
        
        const fetchData = async () => {

            const data  = await fetchSquad(`${url}/visits`);

            if(data!==null) {
                
               return setVisits(data);
            }
        };

      fetchData();
        

    },[])

  

    return ( 
       
        <section className="section realization" id="visits">

            <div className="wrapper">

                        <h2 className="section__title realization__title">tu będziemy!</h2>

                        <div className="realization-wrapper">

                            {
                                visits.map((visit,index)=>(

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

                                        <button className="realization__element-ticket_btn ">bilety</button>
                                    </div>

                                </div>

                                ))
                            }

                        </div>
            </div>

        </section>

     );
}
 
export default Visits;