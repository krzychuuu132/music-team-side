import React,{ useRef,useEffect } from 'react';

import './About.scss';

import about_team_picture from '../../../img/about-team_picture.png';

const About = () => {

  const aboutInfoRef  = useRef(null);
  const aboutImgRef  = useRef(null);
  

  useEffect(()=>{

  
    aboutImgRef.current.style.height = `${aboutInfoRef.current.offsetHeight -20}px`;

    const h1 = document.querySelector('.section__title');
    var styles = window.getComputedStyle(h1, ':after');
    console.log(styles)

  },[])

    return ( 

        <section className="section about-team" id="about-tem">

          <div className="wrapper">

            <div className="about-team__info" ref={aboutInfoRef}>

                <h2 className="section__title about-team__title">o zespole  <span className="section__title-line"></span></h2>

               

                <p className="section__text about-team__text"><b>Cracow Baroque Consort </b>– to kameralny zespół wokalny, utworzony z inicjatywy studentów oraz absolwentów krakowskiej Akademii Muzycznej.</p>

                <p className="section__text about-team__text">W jego skład wchodzą ludzie, którzy pomimo młodego wieku, zdołali już zebrać bogate doświadczenia sceniczne zarówno w obsadzie solowej jak i zespołowej w Polsce oraz poza jej granicami.</p>

                <p className="section__text about-team__text">Artystyczna droga Cracow Baroque Consort skrzyżowała się z drogą młodego krakowskiego kompozytora – Mariusza Kramarza. Ich wspólna praca zaowocowała nagraniami kolęd i pieśni w opracowaniu kompozytora. Ensemble stale koncertuje współpracując z różnymi instytucjami, a w szczególności z fundacją InCanto, przez którą został zauważony na początku swojego istnienia. </p>

            </div>

            <div className="about-team__picture">

                    <img src={about_team_picture} alt='about-team-picture' className="about-team__picture-img" ref={aboutImgRef}/>

                    <span className="about-team__picture-line"></span>

            </div>

          </div>

        </section>

     );
}
 
export default About;