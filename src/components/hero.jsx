import React from 'react';
import './style/hero.css';
import img from '../assets/desktop/image-hero@2x.jpg';
import arrow from '../assets/icon-arrow-right.svg';
const Hero = () => {
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
                    <img src={img} alt='Modern Art Gallery' />
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
                    <button className='btn text text--M '>
                        <span>
                            Our location
                        </span>
                        <span className='arrow'>
                            <img src={arrow} alt='arrow' />
                        </span>
                    </button>
                </div>
            </div>
        </div >
    );

};

export default Hero;
