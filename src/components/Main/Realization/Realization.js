import React,{ useRef, useState } from 'react';

import YoutubeIcon from '../../../img/youtube.png';

import './Realization.scss';



const Realization = ({playlists:realizations,audios}) => {

    const audioRef = useRef(null);
    const currentMusicTitleRef= useRef(null);

    const [play,setPlay]  = useState(true);

    const handleMusicClick  = (audio) =>{
        console.log(audio.source.url)
        currentMusicTitleRef.current.innerText = audio.tytul;
        audioRef.current.src = audio.source.url;
        audioRef.current.parentNode.play()
    }

        const handleAudioPlay = (e) =>{
            
            setPlay(prevState=>!prevState);
            
            console.log(play)
            if(play){
                e.target.className = "fas fa-pause";
                audioRef.current.parentNode.play();
            } 
            else{
                e.target.className = "fas fa-play";
                audioRef.current.parentNode.pause()
            }
            
           
        }

    return (

        <section className="section realization" id="realizations">

            <div className="wrapper">

                        <h2 className="section__title realization__title">audio | video <span className="section__title-line"></span></h2>

                            <div className="realization-wrapper">

                                <div className="realization-playlist">
                                    {
                                        realizations.map((realization,index)=>(
                                            <a href={realization.link} target="blank" key={index} className="realization-playlist-link">
                                                <picture>
                                                <source media="(min-width:350px)" src={realization.zdjecie["url"]} />
                                                <source media="(min-width:500px)" src={realization.zdjecie["url"]} />
                                                <img 
                                                
                                                src={realization.zdjecie["url"]}
                                                alt="realizations-piece"
                                                className="realization-playlist-img"
                                                />
                                                </picture>

                                                <div className="realization-playlist-icon">
                                                    <img src={YoutubeIcon} alt="playlist-icon" className="realization-playlist-icon_img"/>
                                                </div>
                                            </a>
                                        ))
                                    }
                                    
                                </div>

                                <div className="realization__stoper">
                                    <p className="realization__stoper-text"><b>Now playing</b>:<span ref={currentMusicTitleRef} className="realization__stoper-title"> Audio test vol 1</span></p>
                                    
                                    <div className="realization__stoper-pannel">  

                                    <button className="realization__stoper-pannel-btn"><span className="fas fa-step-forward"></span></button>

                                    <button className="realization__stoper-pannel-btn"><span className="fas fa-play" onClick={(e)=>handleAudioPlay(e)}></span></button>

                                    <button className="realization__stoper-pannel-btn"><span className="fas fa-step-backward"></span></button>

                                    <audio controls style={{visibility:'hidden',display:'none'}} >
	                                        <source src={audios[0].source.url} type="audio/mpeg" ref={audioRef}/>
                                         
	
                                    </audio>
                                    
                                    </div>
                                </div>

                                <div className="realization__musics">
                                        {
                                            audios.map((audio,index)=>(

                                                        <div className="realization__musics-music" key={index} onClick={()=>handleMusicClick(audio)}>

                                                                <span className="fas fa-play realization__musics-music_icon"></span>

                                                                <p className="realization__musics-music_text">{audio.tytul}</p>

                                                        </div>
                                            ))
                                        }
                                        

                                     

                                </div>

                                

                            </div>

            </div>

        </section>

     );
}
 
export default Realization;