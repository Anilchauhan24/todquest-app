import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = ({ imageNames }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [imagePath, setImagePath] = useState('');

    useEffect(() => {
        const loadImage = async () => {
            try {
                const imageModule = await import(`../../Assets/${imageNames[imageIndex]}`);
                const path = imageModule.default;
                setImagePath(path);
            } catch (error) {
                console.error('Error loading image:', error);
            }
        };

        loadImage();
    }, [imageIndex, imageNames]);

    // const nextImage = () => {
    //     setImageIndex((imageIndex) => (imageIndex + 1) % imageNames.length);
    // };

    // const prevImage = () => {
    //     setImageIndex((imageIndex) => (imageIndex - 1 + imageNames.length) % imageNames.length);
    // };

    return (
        <div className='container'>
            <div className='banner-image'>
                <div className='image-slider'>
                    {/* <button id='prev' onClick={prevImage}>
                        Previous
                    </button> */}
                    <img src={imagePath} alt={`Slide ${imageIndex + 1}`} />
                    {/* <button onClick={nextImage}>Next</button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
