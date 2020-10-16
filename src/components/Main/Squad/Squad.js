import React,{ useEffect,useState } from 'react';
import  { Transition } from 'react-transition-group';

import { fetchSquad } from '../../../utilities/fetchData';

import "./Squad.scss";



const Squad = () => {

    const [squad,setSquad] = useState([]);
    const [counter,setCounter] = useState(0);

    useEffect(()=>{
        //
        const fetchData = async () => {

            const data  = await fetchSquad('http://localhost:1337/squads');

            if(data!==null) {
                
               return setSquad(data);
            }
        };

      fetchData();
        

    },[])
   
    const handleChangePerson  = (index) =>{
        console.log(index)
        setCounter(index)
    }

    const setChangePersonMobile  =(type) =>{
        
       
      
        setCounter(prevState=>type === 'next'?counter === squad.length-1 ? 0:++prevState:counter <= 0 ? squad.length-1:--prevState);
     console.log(counter)
    }
    
    return ( 
       <section className="section squad">

           <div className="wrapper">

                    <h2 className="section__title about-team__title">stały skład</h2>

                    <div className="squad-wrapper">
                   
                    <div className="squad__view">

                        <div className="squad__view-slider">

                            <button className="squad__view-slider_btn"><span className="fas fa-chevron-left" onClick={()=>setChangePersonMobile('previous')}></span></button>

                                <div className="squad__view-slider_dots">{

                                  squad.map((person,index)=> <span className="squad__view-slider_dot" key={index}></span>)  

                                }</div>

                            <button className="squad__view-slider_btn" onClick={()=>setChangePersonMobile('next')}><span className="fas fa-chevron-right"></span></button>

                        </div>
                 
                        <div className="squad__view-picture">

                            <div className="squad__view-picture_gallery">{
                                    
                                   squad.map((person,index)=>
                                   // eslint-disable-next-line jsx-a11y/alt-text
                                   <img 
                                   src={'http://localhost:1337'+person.zdjecie[0].formats.thumbnail.url}
                                   key={index} 
                                   className="squad__view-picture_gallery-img" onClick={()=>handleChangePerson(index)}/>
                                    )  
                            }</div>
                            
                            <img src={squad.length!==0?'http://localhost:1337'+squad[counter].zdjecie[0].url:null} alt="squad-persons" className="squad__view-picture_img"/>

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