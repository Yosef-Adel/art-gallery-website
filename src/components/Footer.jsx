import React from 'react';
import './style/footer.css';
import facebookIcon from '../assets/icon-facebook.svg';
import instagramIcon from '../assets/icon-instagram.svg';
import twitterIcon from '../assets/icon-twitter.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__content'>
                <div className='col col__1'>
                    <h1 className='heading--S'>
                        Modern
                        <br />
                        Art Gallery
                    </h1>
                </div>
                <div className='col col__2'>
                    <p className='text--S'>
                        The Modern Art Gallery is free to all visitors and open seven days a week
                        from 8am to 9pm. Find us at 99 King Street, Newport, USA.
                    </p>
                </div>
                <div className='col col__3'>
                    <img src={facebookIcon} alt='facebook' />
                    <img src={instagramIcon} alt='instagram' />
                    <img src={twitterIcon} alt='twitter' />
                </div>
                    
            </div>
        </div>
    )
};


export default Footer;
