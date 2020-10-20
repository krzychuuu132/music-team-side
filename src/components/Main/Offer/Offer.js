import React,{ useEffect, useState } from 'react';
import gsap from 'gsap';

import { fetchSquad } from '../../../utilities/fetchData';

import './Offer.scss';

const Offer = () => {

    
    const [offers,setOffers] = useState([]);

    const [counter,setCounter] = useState(0);

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

                        <h2 className="section__title offer__title">nasza oferta</h2>

                        <div className="offer-wrapper">

                            
                        <div className="squad__view-slider">

                            <button className="squad__view-slider_btn"><span className="fas fa-chevron-left" onClick={()=>setChangePersonMobile('previous')}></span></button>

                            <div className="squad__view-slider_dots">{

                            offers.map((person,index)=> <span className="squad__view-slider_dot" key={index}></span>)  

                            }</div>

                            <button className="squad__view-slider_btn" onClick={()=>setChangePersonMobile('next')}><span className="fas fa-chevron-right"></span></button>

                        </div>

                            <div className="offer__gallery">

                                <div className="offer__gallery-main">
                                    <img src={offers.length !== 0 ? 'http://localhost:1337'+offers[counter].zdjecie[0].url:null} alt="main-offer" className="offer__gallery-main-img"/>

                                    <h2 className="offer__gallery-main-title">{offers.length !== 0 ? offers[counter].tytul:null}</h2>

                                    <p className="offer__gallery-main-text">{offers.length !== 0 ? offers[counter].opis:null}</p>
                                </div>

                                <div className="offer__gallery-offers">
                                   {
                                       offers.map((offer,index)=>(
                                           <img 
                                           src={'http://localhost:1337'+offer.zdjecie[0].formats.thumbnail.url} 
                                           alt="offers" 
                                           key={index} 
                                           className="offer__gallery-offers-img"
                                           onClick={()=>handleChangePerson(index)}
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