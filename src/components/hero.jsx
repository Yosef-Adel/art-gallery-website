import React from 'react';
import { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import './style/hero.css';
import img from '../assets/desktop/image-hero@2x.jpg';
import img1 from '../assets/tablet/image-hero@2x.jpg';
import img2 from '../assets/mobile/image-hero@2x.jpg';
import arrow from '../assets/icon-arrow-right.svg';
const Hero = () => {
    const [imgs, setImgs] = useState(img);

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth <= 768) {
                setImgs(img1);
            } else if (window.innerWidth <= 375) {
                setImgs(img2);
            } else {
                setImgs(img);
            }
        };
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])
    return (
        <div className='hero'>
            <div className='hero__content'>
                <div className='col__1'>
                    <h1 className='heading--XL heading'>
                        Modern
                        <br />
                        Art Gallery
                    </h1>
                </div>
                <div className='col__2'>
                    <img src={imgs} alt='Modern Art Gallery' />
                </div>
                <div className='col__3'>
                    <h1 className='heading--XL heading'>
                        Modern
                        <br />
                        Art Gallery
                    </h1>
                    <p className='text--M text'>
                        The arts in the collection of the Modern Art Gallery all started
                        from a spark of inspiration. Will these pieces inspire you? Visit
                        us and find out.
                    </p>
                    <Link to="/location" className='btn text text--M '>
                        <span>
                            Our location
                        </span>
                        <span className='arrow'>
                            <img src={arrow} alt='arrow' />
                        </span>
                    </Link>
                </div>
            </div>
        </div >
    );

};

export default Hero;
