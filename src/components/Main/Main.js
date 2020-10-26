import React,{ useEffect,useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

    
   
    //https://music-team-cms.herokuapp.com
    const url = "http://localhost:1337";

    useEffect(()=>{

        const main_children = mainRef.current.children;

        const section_lines = document.querySelectorAll('.section__title > span').forEach((section_line,index)=>{

            const classNames = main_children[index].className;
            const className = classNames.slice(8,classNames.length).trim();
            console.log(className)
           
            gsap.fromTo([section_line,document.querySelector('.about-team__picture-line')],{x:'-100%'},{x:0,ease: "elastic.out(1, 0.3)" ,duration:1,scrollTrigger:{
                trigger:`.${className}`,
                start:'top 20%',
               
               
            }})
        })
        
        gsap.fromTo(document.querySelector('.about-team__picture-line',),{x:'100%'},{x:0,ease: "elastic.out(1, 0.3)",delay:.2,duration:1,scrollTrigger:{
            trigger:`.about-team`,
            start:'top 20%',
           
           
        }});

        gsap.fromTo(document.querySelector('.squad__text-description-line',),{x:'100%'},{x:0,ease: "elastic.out(1, 0.3)",delay:.2,duration:1,scrollTrigger:{
            trigger:`.squad`,
            start:'top 20%',
           
           
        }})
      
    },[])

    return ( 
        <main className="main" ref={mainRef}>
            <About />
            <Squad url={url}/>
            <Cooperating url={url}/>
            <Realization url={url}/>
            <Offer url={url}/>
            <Contact />
            <Visits url={url}/>
            <Footer />
        </main>
     );
}
 
export default Main;