import React,{ useEffect } from 'react';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export const UseMobileSlider  = ({data,url,counter,setChangePersonMobile}) =>{


    
    
    const swiper = new Swiper('.swiper-container',{
        width:window.innerWidth,
        height: 300,
        direction: 'horizontal',
        loop: true,
      
      
        pagination: {
          el: '.swiper-pagination',
        },
      
       
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },
      
      
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    })
    
    
    
    return(
    
        <div className="squad__view-slider">
    
            <div className="squad__view-slider-btns">                   
                                
                <button className="squad__view-slider_btn prev" onClick={()=>setChangePersonMobile('previous')}>
                    <span className="fas fa-chevron-left" ></span>
                </button>
    
                <div className="squad__view-slider_dots ">{
    
                    data.map((person,index)=> <span className={index===counter?"squad__view-slider_dot squad__view-slider_dot--active":"squad__view-slider_dot"} key={index}></span>)  
    
                }</div>
    
                <button className="squad__view-slider_btn next" onClick={()=>setChangePersonMobile('next')} >
                        <span className="fas fa-chevron-right"></span>
                </button>
    
            </div> 
    
            <div className="swiper-container">
       
                <div className="swiper-wrapper">
    
                {
                    data.map((thing,index)=>(
                        <div className="swiper-slide" key={index}> 
                        <img 
                        src={url+thing.zdjecie[0].url}
                       
                        className="swiper-slide__img"
                        />
                        
                        </div>
                    ))
                }
             
    
    
            
                </div>
    
            </div>
     </div>

    )
    
    }
    