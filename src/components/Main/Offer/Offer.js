import React,{ useState,useRef } from 'react';


import { MobileSlider } from '../../../utilities/MobileSlider';
import { handleChangePerson, setChangePersonMobile } from '../../../utilities/sliderFunctions';

import './Offer.scss';


const Offer = ({offers}) => {

    const [counter,setCounter] = useState(0);

    const mainImgRef = useRef(null);

    return ( 
      
        <section className="section offer" id="offer">

            <div className="wrapper">

                        <h2 className="section__title offer__title">nasza oferta <span className="section__title-line"></span></h2>

                        <div className="offer-wrapper">

                            
                            <MobileSlider 
                                data={offers} 
                                counter={counter} 
                                setCounter={setCounter}
                                setChangePersonMobile={setChangePersonMobile}
                                mainImgRef={mainImgRef.current}
                            />

                            <div className="offer__gallery">

                                <div className="offer__gallery-main">

                                    

                                    <img 
                                    src={offers[counter].zdjecie.url}
                                    alt="main-offer" 
                                    className="offer__gallery-main-img"
                                    ref={mainImgRef}
                                    />

                                    <h2 className="offer__gallery-main-title">{offers[counter].tytul}</h2>

                                    <p className="offer__gallery-main-text">{ offers[counter].opis}</p>

                                    <button className="section__btn offer__btn" >
                                        <a href="#contact" className="offer__btn-link">zapytaj o szczegóły</a>
                                    </button>
                                    
                                </div>

                                <div className="offer__gallery-offers">
                                   {
                                       offers.map((offer,index)=>(
                                           <img 
                                           src={offer.zdjecie["url"]}
                                           alt="offers" 
                                           key={index} 
                                           className="offer__gallery-offers-img"
                                           onClick={()=>handleChangePerson(mainImgRef.current,index,setCounter)}
                                           />
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