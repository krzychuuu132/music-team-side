import React from 'react';

import slider_one from '../../img/slider_one.png';

import './Article.scss';

const Article = () => {
    return (  

        <article className="article">

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                                <img className="d-block w-100 slide__img" src={slider_one} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                                <img className="d-block w-100 slide__img" src={slider_one}  alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                                <img className="d-block w-100 slide__img" src={slider_one}  alt="Third slide"/>
                        </div>
                    </div>
                    
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                    </a>

            </div>

        </article>
    );
}
 
export default Article;