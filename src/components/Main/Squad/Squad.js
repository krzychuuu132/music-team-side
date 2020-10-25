import React,{ useEffect,useState,useRef } from 'react';
import gsap from 'gsap';


import { fetchSquad } from '../../../utilities/fetchData';
import { UseMobileSlider } from '../../../utilities/customhooks/UseMobileSlider';

import "./Squad.scss";




const Squad = ({url}) => {

    const [squad,setSquad] = useState([]);
    const [counter,setCounter] = useState(0);
   
    const pictureGallery  = useRef(null);



    useEffect(()=>{
        
        const fetchData = async () => {

            const data  = await fetchSquad(`${url}/squads`);

            if(data!==null) {
                
               return setSquad(data);
            }
        };

      fetchData();
        
    
    },[])
    



    const handleChangePerson  = (index) =>{
      
        setCounter(index)

        gsap.fromTo(document.querySelector('.squad__view-picture_img'),.5,{
            opacity:0,
          
        },{opacity:1})
    }

    const setChangePersonMobile  =(type) =>{
        
        gsap.fromTo(document.querySelector('.squad__view-picture_img'),.5,{
            opacity:0,
          
        },{opacity:1})
      
        setCounter(prevState=>type === 'next'?counter === squad.length-1 ? 0:++prevState:counter <= 0 ? squad.length-1:--prevState);
     
    }
    
    return ( 
       <section className="section squad" id="team">

           <div className="wrapper">

                    <h2 className="section__title about-team__title">stały skład</h2>

                    <div className="squad-wrapper">
                   
                    <div className="squad__view">
                       
                      
                            
                                <UseMobileSlider data={squad} url={url} counter={counter} setChangePersonMobile={setChangePersonMobile}/>
                           

                       
                 

                        

                        <div className="squad__view-picture">

                            <div className="squad__view-picture_gallery" ref={pictureGallery}>{
                                    
                                   squad.map((person,index)=>
                                   // eslint-disable-next-line jsx-a11y/alt-text
                                   <img 
                                   src={url+person.zdjecie[0].formats.thumbnail.url}
                                   key={index} 
                                  
                                   style={{height:pictureGallery.current.height+'px'}}
                                   className="squad__view-picture_gallery-img" onClick={()=>handleChangePerson(index)}/>
                                   
                                    )  
                            }</div>
                            
                            <img src={squad.length!==0?url+squad[counter].zdjecie[0].url:null} alt="squad-persons" className="squad__view-picture_img"/>

                        </div>
                     
                    </div>
                    
                    <div className="squad__text">

                        <h3 className="squad__text-name">{squad.length!==0?squad[counter].imie:null}</h3>
                        <p className="squad__text-description section__text">{squad.length!==0?squad[counter].opis:null}</p>

                    </div>

                </div>
            </div>

       </section>
     );

}
 
export default Squad;