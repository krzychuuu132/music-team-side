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
           
            console.log(className)
            gsap.fromTo([section_line,document.querySelector('.about-team__picture-line')],{x:'-100%'},{x:0,ease: "elastic.out(1, 0.3)" ,duration:1,scrollTrigger:{
                trigger:`.${className}`,
                start:'top 20%',
                pinReparent:true,
                toggleActions: "play reverse play reverse"
               
            }})
        })
        
        gsap.fromTo(document.querySelector('.about-team__picture-line'),{x:'100%'},{x:0,ease: "elastic.out(1, 0.3)",delay:.2,duration:1,scrollTrigger:{
            trigger:`.about-team`,
            start:'top 20%',
            pinReparent:true,
                toggleActions: "play reverse play reverse"
           
        }});

        gsap.fromTo(document.querySelector('.squad__text-description-line'),{x:'100%'},{x:0,ease: "elastic.out(1, 0.3)",delay:.2,duration:1,scrollTrigger:{
            trigger:`.squad`,
            start:'top 20%',
            pinReparent:true,
                toggleActions: "play reverse play reverse"
           
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

    const {coopertns,squads,visits,playlists,offers,audios} = dataPage;
    
   
    return ( 
        <main className="main" ref={mainRef}>
           {
                dataPage.length !== 0 ? (
                <>
                    <About />
                    <Squad  squads={squads}/>
                    <Cooperating  coopertns={coopertns}/>
                    <Realization  playlists={playlists} audios={audios}/>
                    <Offer  offers={offers}/>
                    <Contact />
                    <Visits  visits={visits}/>
                    <Footer />
                    </>
               ):null
           }
            
        </main>
     );
}
 
export default Main;