import React,{ useState,useRef } from 'react';

import { MobileSlider } from '../../../utilities/MobileSlider';
import { handleChangePerson, setChangePersonMobile } from '../../../utilities/sliderFunctions';

import "./Squad.scss";





const Squad = ({squads: squad}) => {
   
   
    const [counter,setCounter] = useState(0);
   
    const pictureGallery  = useRef(null);
    const squadMainPictureRef  = useRef(null);
  
    return ( 
        
         
        

                <div className="wrapper">

                   

                    <div className="squad-wrapper">
                   
                    <div className="squad__view">
                       
                                <MobileSlider 
                                data={squad} 
                                counter={counter} 
                                setCounter={setCounter}
                                setChangePersonMobile={setChangePersonMobile}
                                mainImgRef={squadMainPictureRef.current}
                                />
                           

                        <div className="squad__view-picture">

                            <div className="squad__view-picture_gallery" ref={pictureGallery}>{
                                    
                                   squad.map((person,index)=>{
                                        
                                    return(
                                         <img 
                                            src={person.zdjecie["url"]}
                                            key={index} 
                                            className="squad__view-picture_gallery-img" onClick={()=>handleChangePerson(squadMainPictureRef.current,index,setCounter)}/>
                                   
                                    ) 
                                   
                                   } )
                                 
                                   
                                   
                            }</div>
                            
                            <img src={squad[counter].zdjecie.url} alt="squad-persons" className="squad__view-picture_img" ref={squadMainPictureRef}/>

                        </div>
                     
                    </div>
                    
                    <div className="squad__text">

                        <h3 className="squad__text-name">{squad[counter].imie}</h3>
                        <p className="squad__text-description section__text">{squad[counter].opis} <span className="squad__text-description-line"></span></p>

                    </div>

                </div>
            </div>

 
          
        
       
     );

}
 
export default Squad;