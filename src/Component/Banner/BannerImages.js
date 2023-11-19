import React from 'react';
import Banner from './Banner';

const BannerImages = () => {
    const imageNames = ['bannerOffer.png', 'bannerOffer.png', 'bannerOffer.png', 'bannerOffer.png', 'bannerOffer.png'];
    return (
        <div className='bannerSlide'>

            <Banner imageNames={imageNames} />
        </div>
    );
};

export default BannerImages;
