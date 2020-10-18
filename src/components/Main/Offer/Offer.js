import React,{ useEffect, useState } from 'react';

import { fetchSquad } from '../../../utilities/fetchData';

import './Offer.scss';

const Offer = () => {

    
    const [offers,setOffers] = useState([]);

    useEffect(()=>{
        //
        const fetchData = async () => {

            const data  = await fetchSquad('http://localhost:1337/offers');

            if(data!==null) {
                
               return setOffers(data);
            }
        };

      fetchData();
        

    },[])

    console.log(offers[0])

    return ( 
      
        <section className="section offer" id="offer">

            <div className="wrapper">

                        <h2 className="section__title offer__title">nasza oferta</h2>

                        <div className="offer-wrapper">

                            <div className="offer__gallery">

                                <div className="offer__gallery-main">
                                    <img src={offers.length !== 0 ? 'http://localhost:1337'+offers[0].zdjecie[0].url:null} alt="main-offer" className="offer__gallery-main-img"/>

                                    <h2 className="offer__gallery-main-title">{offers.length !== 0 ? offers[0].tytul:null}</h2>

                                    <p className="offer__gallery-main-text">{offers.length !== 0 ? offers[0].opis:null}</p>
                                </div>

                                <div className="offer__gallery-offers">
                                   {
                                       offers.map((offer,index)=>(
                                           <img src={'http://localhost:1337'+offer.zdjecie[0].formats.thumbnail.url} alt="offers" key={index} className="offer__gallery-offers-img"/>
                                       ))
                                   }
                                </div>

                            </div>


                        </div>

            </div>

        </section>

     );
}
 
export default Offer;