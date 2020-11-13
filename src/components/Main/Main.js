import React,{ useEffect,useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { request } from 'graphql-request';

import About from './About/About';
import Squad from './Squad/Squad';
import Cooperating from './Cooperating/Cooperating';
import Realization from './Realization/Realization';
import Offer from './Offer/Offer';
import Contact from './Contact/Contact';
import Visits from './Visits/Visits';
import Footer from './Footer/Footer';

import 'swiper/swiper-bundle.css';


import './Main.scss';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {

    const mainRef = useRef(null);
    const [dataPage,setDataPage] = useState([]);
    
   

    useEffect(()=>{

        const main_children = mainRef.current.children;
      
        const section_lines = document.querySelectorAll('.section__title > span').forEach((section_line,index)=>{

          const classNames = main_children[index].className;
          const className = classNames.slice(8,classNames.length).trim();
         
         
          gsap.fromTo([section_line,document.querySelector('.about-team__picture-line')],{x:'-100%'},{x:0,ease: "Power4.easeOuteaseOut" ,duration:1,scrollTrigger:{
              trigger:`.${className}`,
              start:'top 20%',
              pinReparent:true,
              
             
          }})
      })
        
        gsap.fromTo(document.querySelector('.about-team__picture-line'),{x:'100%'},{x:0,ease: "Power4.easeOuteaseOut",delay:.2,duration:1,scrollTrigger:{
            trigger:`.about-team`,
            start:'top 20%',
            pinReparent:true,
              
           
        }});

        gsap.fromTo(document.querySelector('.squad__text-description-line'),{x:'100%'},{x:0,ease: "Power4.easeOuteaseOut",delay:.2,duration:1,scrollTrigger:{
            trigger:`.squad`,
            start:'top 20%',
            pinReparent:true,
             
           
        }})
        
      
    },[dataPage])

    useEffect(()=>{
        const fetchData = async () => {
            const  data  = await request(
              'https://api-eu-central-1.graphcms.com/v2/ckgv5v32w6umh01wf98f906kr/master',
              `
              {
 
                coopertns{
                  name
                  zdjecie{
                    url
                  }
                  
                  
                }
                squads{
                  opis
                  imie
                  zdjecie{
                    url
                  }
                }
                
                  visits{
                  tytul
                  data
                  godzina
                  miejsce
                }

                archiwums{
                  tytul
                  data
                  godzina
                  miejsce
                }

                playlists{
                  zdjecie{
                    url
                  }
                  link
                }
                
                offers{
                  opis
                  tytul
                  zdjecie{
                    url
                  }
                }

                audios{
                  tytul
                  source{
                    url
                  }
                }
              }
          `
            );
      
            setDataPage(data);
          };
      
          fetchData();
    },[])

    const {coopertns,squads,visits,playlists,offers,audios,archiwums} = dataPage;
    
   
    return ( 
        <main className="main" ref={mainRef}>
           {
                dataPage.length !== 0 ? (
                <>
                    <About squads={squads}>
                      
                    </About>
                     <Realization  playlists={playlists} audios={audios}/>
                    <Offer  offers={offers}/>
                   
                    <Visits  visits={visits} archiwums={archiwums}/>
                    <Contact />
                   
                    <Footer />

                </>
               ):null
           }
            
        </main>
     );
}
 
export default Main;