import React,{ useEffect,useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



export const UseMobileSlider  = ({data,url,counter,setChangePersonMobile}) =>{


    const nexRef = useRef(null);
    console.log(data)
    
    return(
    
        <div className="squad__view-slider">
    
            <div className="squad__view-slider-btns">                   
                                
                <button className="squad__view-slider_btn prev" onClick={()=>setChangePersonMobile('previous')} ref={nexRef}>
                    <span className="fas fa-chevron-left" ></span>
                </button>
    
                <div className="squad__view-slider_dots ">{
    
                    data.map((person,index)=> <span className={index===counter?"squad__view-slider_dot squad__view-slider_dot--active":"squad__view-slider_dot"} key={index}></span>)  
    
                }</div>
    
                <button className="squad__view-slider_btn next" onClick={()=>setChangePersonMobile('next')} >
                        <span className="fas fa-chevron-right"></span>
                </button>
    
            </div> 
       
            <Swiper
          
               height={300}
               direction='horizontal'
               loop={true}
               navigation={{nextEl:nexRef.current,prevEl:'.prev'}}
               pagination={{ el:'.swiper-pagination',clickable:true}}
               scrollbar={{el:'.swiper-scrollbar',draggable:true}}
            >
            {
              data.length !== 0  ?  data.map((thing,index)=>(
                    <SwiperSlide  key={index}> 
                    <img 
                    src={url+thing.zdjecie[0].url}
                   
                    className="swiper-slide__img"
                    />
                    
                    </SwiperSlide>
                )):console.log('eloo')
            }
            </Swiper>
       
              
    
           
     </div>

    )
    
    }
    