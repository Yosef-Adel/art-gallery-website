import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/icon-arrow-left.svg';
import './style/location.css';
import locationImg from '../assets/desktop/image-map@2x.png';
import locationImg1 from '../assets/tablet/image-map@2x.png';
import locationImg2 from '../assets/mobile/image-map@2x.png';



const Location = () => {
    const [imgs, setImgs] = useState(locationImg);

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth <= 768) {
                setImgs(locationImg1);
            } else if (window.innerWidth <= 375) {
                setImgs(locationImg2);
            } else {
                setImgs(locationImg);
            }
        };
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])
    return (
        <div className='locationSection'>
            <div className='row row__1'>
                <img src={locationImg} alt='location' />
                <Link to="/" className='btn text text--M '>
                    <span className='arrow'>
                        <img src={arrow} alt='arrow' />
                    </span>
                    <span>
                        Back to Home
                    </span>
                </Link>
            </div>
            <div className=' row__2'>
                <h1 className='col__1 heading--XL'>
                    Our 
                    <br />
                    location
                </h1>
                <div className='col__2'>
                    <h2 className='row row__1 heading--M'>
                        99 King Street
                    </h2>
                    <p className='row row__2 text--M'>
                        Newport
                        <br />
                        RI 02840
                        <br />
                        United States of America
                    </p>
                    <p className='row row__3 text--M'>
                        Our newly opened gallery is located near the Edward King House on 99 King
                        Street, the Modern Art Gallery is free to all visitors and open seven days
                        a week from 8am to 9pm.
                    </p>
                </div>

            </div>
        </div>
    )

};


export default Location;
