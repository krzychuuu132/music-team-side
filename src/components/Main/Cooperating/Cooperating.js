import React,{useEffect,useState} from 'react';

import { fetchSquad } from '../../../utilities/fetchData';

import './Cooperating.scss';

const Cooperating = () => {

    const [cooperating,setCooperating] = useState([]);

    useEffect(()=>{
        //
        const fetchData = async () => {

            const data  = await fetchSquad('http://localhost:1337/coops');

            if(data!==null) {
                
               return setCooperating(data);
            }
        };

      fetchData();
        

    },[])
    
    return ( 

        <section className="section cooperating">

              <div className="wrapper">

              <h2 className="section__title cooperating__title">współpraca</h2>

              <div className="cooperating-wrapper">

              {
                  cooperating.map((person,index)=>(

                    <div className="cooperating__person" key={index}>
                        {
                            console.log(person)
                        }
                        <img src={'http://localhost:1337'+person.zdjecie[0].url} alt="cooperating-person" className="cooperating__person-picture"/>

                    <p className="cooperating__person-name">{person.name}</p>

                    </div>
                  ))
              }

                </div>

              </div>

        </section>

     );
}
 
export default Cooperating;