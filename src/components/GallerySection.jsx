import React from 'react';
import { useState, useEffect } from 'react';
import './style/gallerySection.css';
import img1 from '../assets/desktop/image-grid-1@2x.jpg';
import img2 from '../assets/desktop/image-grid-2@2x.jpg';
import img3 from '../assets/desktop/image-grid-3@2x.jpg';
import img4 from '../assets/tablet/image-grid-1@2x.jpg';
import img5 from '../assets/tablet/image-grid-2@2x.jpg';
import img6 from '../assets/tablet/image-grid-3@2x.jpg';
import img7 from '../assets/mobile/image-grid-1@2x.jpg';
import img8 from '../assets/mobile/image-grid-2@2x.jpg';
import img9 from '../assets/mobile/image-grid-3@2x.jpg';

const GallerySection = () => {
    const [imgs, setImgs] = useState([img1, img2, img3]);

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth <= 768) {
                setImgs([img4, img5, img6]);
            } else if (window.innerWidth <= 375) {
                setImgs([img7, img8, img9]);
            } else {
                setImgs([img1, img2, img3]);
            }
        };
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    return (
        <div className='gallerySection'>
            <div className='row row__1'>
                <div className='col col__1'>
                    <h1 className='heading--L'>
                        Your day at
                        <br />
                        the gallery
                    </h1>
                    <p className='text--M'>
                        Wander through our distinct collections and find new insights about
                        our artists.Dive into the details of their creative process.
                    </p>
                </div>
                <div className='col col__2'>
                    <img src={imgs[0]} alt="gallery" />
                </div>
            </div>
            <div className='row row__2'>
                <div className='col col__1'>
                    <img src={imgs[1]} alt="gallery" />
                </div>
                <div className='col col__2'>
                    <div className='row row_1'>
                        <img src={imgs[2]} alt="gallery" />
                    </div>
                    <div className='row__2'>

                        <h1 className='heading--L'>
                            Come &amp; be
                            <br />
                            inspired
                        </h1>
                        <p className='text--M'>
                            We’re excited to welcome you to our gallery and see how our collections
                            influence you.

                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GallerySection;
