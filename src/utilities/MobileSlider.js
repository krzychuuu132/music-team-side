import React,{ useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



export const MobileSlider  = ({data,counter,setCounter,setChangePersonMobile,mainImgRef}) =>{

    const swiperRef = useRef(null);
    const nextRef = useRef(null);
    const previousRef = useRef(null);

   
    
    return(
    
        <div className="squad__view-slider">
    
            <div className="squad__view-slider-btns">                   
                                
                <button className="squad__view-slider_btn prev" 
                  onClick={()=> {

                  setChangePersonMobile(mainImgRef,counter,'previous',data,setCounter);
                  swiperRef.current.swiper.slidePrev();}} 

                  ref={previousRef}>

                    <span className="fas fa-chevron-left" ></span>
                </button>
    
                <div className="squad__view-slider_dots ">{
    
                    data.map((person,index)=> <span className={index===counter?"squad__view-slider_dot squad__view-slider_dot--active":"squad__view-slider_dot"} key={index}></span>)  
    
                }</div>
    
                <button className="squad__view-slider_btn next" 
                onClick={()=>{
                  setChangePersonMobile(mainImgRef,counter,'next',data,setCounter);
                  swiperRef.current.swiper.slideNext();
                }} 
                ref={nextRef}>
                        <span className="fas fa-chevron-right"></span>
                </button>
    
            </div> 
       
            <Swiper
               ref={swiperRef}
               height={300}
               direction='horizontal'
               loop={true}
               navigation={{nextEl:nextRef.current,prevEl:previousRef.current}}
               pagination={{ el:'.swiper-pagination',clickable:true}}
               scrollbar={{el:'.swiper-scrollbar',draggable:true}}
               
              onSlideChange={(swiper) => setCounter(swiper.realIndex)}
            
            >
            {
              data.length !== 0  ?
                data.map((thing,index)=>(
                    <SwiperSlide  key={index} virtualIndex> 
                    
                    <img 
                      src={thing.zdjecie["url"]}
                      className="swiper-slide__img"
                    />
                    
                    </SwiperSlide>
                ))
              :null
            }
            </Swiper>
       
              
    
           
     </div>

    )
    
    }
    