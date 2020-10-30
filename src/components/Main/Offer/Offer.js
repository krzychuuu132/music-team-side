import React,{ useEffect, useState } from 'react';
import gsap from 'gsap';

import { fetchSquad } from '../../../utilities/fetchData';

import './Offer.scss';
import { UseMobileSlider } from '../../../utilities/customhooks/UseMobileSlider';

const Offer = ({offers}) => {

    const [counter,setCounter] = useState(0);

    

    const handleChangePerson  = (index) =>{

        gsap.fromTo(document.querySelector('.offer__gallery-main-img'),.5,{
            opacity:0,
        
        },{opacity:1})

        setCounter(index)
    }

    const setChangePersonMobile  =(type) =>{
        
        gsap.fromTo(document.querySelector('.offer__gallery-main-img'),.5,{
            opacity:0,
            
        },{opacity:1})
      
        setCounter(prevState=>type === 'next'?counter === offers.length-1 ? 0:++prevState:counter <= 0 ? offers.length-1:--prevState);
     
    }

    return ( 
      
        <section className="section offer" id="offer">

            <div className="wrapper">

                        <h2 className="section__title offer__title">nasza oferta <span className="section__title-line"></span></h2>

                        <div className="offer-wrapper">

                            
                            <UseMobileSlider 
                                data={offers} 
                                counter={counter} 
                                setCounter={setCounter}
                                setChangePersonMobile={setChangePersonMobile}
                            />

                            <div className="offer__gallery">

                                <div className="offer__gallery-main">

                                    

                                    <img 
                                    src={offers[counter].zdjecie.url}
                                    alt="main-offer" 
                                    className="offer__gallery-main-img"
                                  
                                    />

                                    <h2 className="offer__gallery-main-title">{offers[counter].tytul}</h2>

                                    <p className="offer__gallery-main-text">{ offers[counter].opis}</p>

                                    
                                </div>

                                <div className="offer__gallery-offers">
                                   {
                                       offers.map((offer,index)=>(
                                           <img 
                                           src={offer.zdjecie["url"]}
                                           alt="offers" 
                                           key={index} 
                                           className="offer__gallery-offers-img"
                                           onClick={()=>handleChangePerson(index)}
                                           />
                                       ))
                                   }
                                </div>

                                

                            </div>

                            <button className="section__btn offer__btn">zapytaj o szczegóły</button>

                        </div>

            </div>

        </section>

     );
}
 
export default Offer;