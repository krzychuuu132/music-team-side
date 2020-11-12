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

                        <h2 className="section__title offer__title">oferta <span className="section__title-line"></span></h2>

                        <div className="offer-wrapper">

                            
                            <MobileSlider 
                                data={offers} 
                                counter={counter} 
                                setCounter={setCounter}
                                setChangePersonMobile={setChangePersonMobile}
                                mainImgRef={mainImgRef.current}
                            />

                            <div className="offer__gallery">

                              

                                    

                                    <img 
                                    src={offers[counter].zdjecie.url}
                                    alt="main-offer" 
                                    className="offer__gallery-img"
                                    ref={mainImgRef}
                                    />

                                 
                                <div className="offer__gallery-description">

                                    <p className="offer__gallery-description-text">{ offers[counter].opis}</p>

                                    <button className="section__btn offer__btn" >
                                        <a href="#contact" className="offer__btn-link">zapytaj o szczegóły</a>
                                    </button>
                                    
                                </div>

                              

                                

                            </div>

                            

                        </div>

            </div>

        </section>

     );
}
 
export default Offer;