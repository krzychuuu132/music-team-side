import React from 'react';

import './Contact.scss';

const Contact = () => {
    return ( 
       
        <section className="section contact">

            <div className="wrapper">

                        <h2 className="section__title contact__title">kontakt</h2>

                        <div className="contact-wrapper">

                            <div className="contact__data">

                                <h3 className="contact__data-title">dane kontaktowe:</h3>

                                <div className="contact__data-container">

                                    <span className="contact__data-text">nr. telefonu: <b>xxx-xxx-xxx</b></span>

                                    <span className="contact__data-text">mail: <b>xxxxxxxxx@cbc.pl</b></span>

                                </div>

                                <div className="contact__data-container">

                                <span className="contact__data-text">ul. Długa 55/4</span>

                                <span className="contact__data-text">Kraków 00-000</span>

                                <span className="contact__data-text">Kraków 00-000</span>

                                </div>

                            </div>

                            <div className="contact__validation">

                                <form className="contact__validation-form">

                                   
                                    <input type="text" name="name"  placeholder="Imię" className="contact__validation-form_input"/>

                                 
                                    <input type="email" name="e-mail"  placeholder="Adres email" className="contact__validation-form_input"/>

                                    <textarea placeholder="Treść wiadomości" className="contact__validation-form_input" rows="7" ></textarea>

                                    <div className="contact__validation-form_check">
                                        <input type="checkbox" id="agree" name="agree" className="contact__validation-form_checkbox"/>
                                        <label for="agree" className="contact__validation-form_checkbox-text">Wyrażam zgodę na przetwarzanie 
                                            moich danych osobowych zgodnie 
                                            z <u>polityką prywatności</u></label>
                                    </div>

                                     <button type="submit" className="contact__validation-btn section__btn">wyślij!</button>   
                                </form>
                            </div>

                        </div>

            </div>

        </section>

     );
}
 
export default Contact;