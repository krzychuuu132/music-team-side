import React,{ useEffect,useState } from 'react';


import { fetchSquad } from '../../../utilities/fetchData';

import YoutubeIcon from '../../../img/youtube.png';

import './Realization.scss';



const Realization = ({url}) => {

    const [realizations,setRealizations] = useState([]);

    useEffect(()=>{
        //
        const fetchData = async () => {

            const data  = await fetchSquad(`${url}/playlists`);

            if(data!==null) {
                
               return setRealizations(data);
            }
        };

      fetchData();
        
        
    },[])

    return (

        <section className="section realization" id="realizations">

            <div className="wrapper">

                        <h2 className="section__title realization__title">Realizacje <span className="section__title-line"></span></h2>

                            <div className="realization-wrapper">

                                <div className="realization-playlist">
                                    {
                                        realizations.map((realization,index)=>(
                                            <a href={realization.link} target="blank" key={index} className="realization-playlist-link">
                                                <picture>
                                                <source media="(min-width:350px)" src={url+realization.zdjecie[0].formats.thumbnail.url} />
                                                <source media="(min-width:500px)" src={url+realization.zdjecie[0].formats.small.url} />
                                                <img 
                                                
                                                src={url+realization.zdjecie[0].formats.small.url} 
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
                                    <p className="realization__stoper-text"><b>Now playing</b>: Audio test vol 1</p>
                                    
                                    <div className="realization__stoper-pannel">                                            
                                    <audio controls>
	                                        <source src="http://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
                                            <source src="http://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
	
                                    </audio>
                                    
                                    </div>
                                </div>

                                <div className="realization__musics">

                                        <div className="realization__musics-music">

                                            <span class="fas fa-play realization__musics-music_icon"></span>

                                            <p className="realization__musics-music_text">Audio test vol 1</p>

                                        </div>

                                        <div className="realization__musics-music">

                                            <span class="fas fa-play realization__musics-music_icon">
                                                

                                    </span>

                                            <p className="realization__musics-music_text">Audio test vol 1</p>

                                        </div>

                                </div>

                                

                            </div>

            </div>

        </section>

     );
}
 
export default Realization;