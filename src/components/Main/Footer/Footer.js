import React from 'react';

import './Footer.scss';

import { ReactComponent as YoutubeImage } from '../../../img/Youtube.svg';
import { ReactComponent as InstagramImage } from '../../../img/Instagram.svg';
import { ReactComponent as FacebookImage } from '../../../img/Facebook.svg';

const Footer = () => {
    return ( 

        <footer className="footer">

            <div className="wrapper">

                <p className="footer__text">Copyright Cracow Baroque Consort 2020</p>

                <p className="footer__text"><u>Polityka prywatności</u></p>

                <div className="footer__social-media">

                    <YoutubeImage alt="youtube-image" className="footer__social-media-img"/> 
                    <InstagramImage alt="instagram-image" className="footer__social-media-img"/> 
                    <FacebookImage alt="facebook-image" className="footer__social-media-img"/> 

                </div>

            </div>

        </footer>

     );
}
 
export default Footer;