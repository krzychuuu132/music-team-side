import React,{ useEffect, useState } from 'react';
import gsap from 'gsap';

import { fetchSquad } from '../../../utilities/fetchData';

import './Offer.scss';
import { UseMobileSlider } from '../../../utilities/customhooks/UseMobileSlider';

const Offer = ({url}) => {

    
    const [offers,setOffers] = useState([]);

    const [counter,setCounter] = useState(0);

    useEffect(()=>{
        
        const fetchData = async () => {

            const data  = await fetchSquad(`${url}/offers`);

            if(data!==null) {
                
               return setOffers(data);
            }
        };

      fetchData();
        

    },[])

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
                                url={url} 
                                counter={counter} 
                                setChangePersonMobile={setChangePersonMobile}
                            />

                            <div className="offer__gallery">

                                <div className="offer__gallery-main">

                                    

                                    <img 
                                    src={offers.length !== 0 ? url+offers[counter].zdjecie[0].url:null} 
                                    alt="main-offer" 
                                    className="offer__gallery-main-img"
                                    onTouchMove={(e)=>{
                                            console.log(e.targetTouches[0])
                                    }}
                                    />

                                    <h2 className="offer__gallery-main-title">{offers.length !== 0 ? offers[counter].tytul:null}</h2>

                                    <p className="offer__gallery-main-text">{offers.length !== 0 ? offers[counter].opis:null}</p>

                                    
                                </div>

                                <div className="offer__gallery-offers">
                                   {
                                       offers.map((offer,index)=>(
                                           <img 
                                           src={url+offer.zdjecie[0].formats.thumbnail.url} 
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