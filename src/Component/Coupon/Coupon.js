import React from 'react'
import "./Coupon.css";
import iPhone from "../../Assets/iphonOne.webp";
import girl from "../../Assets/ladygirl.avif";
const Coupon = () => {
    return (
        <div className='container coupon-container'>
            <div className='coupon-containers'>
                <h2>How it works</h2>
                <hr style={{ width: '70px', height: '3px', backgroundColor: 'red' }} />
            </div>
            <div className='coupon-container-boxes'>
                <div className='coupon-box1 boxes'>
                    <div className='icon-box'>
                        <i className="fa-solid fa-location-crosshairs icons" id="icons"></i>
                    </div>
                    <button className='coupon-btn'>Signup</button>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. </p>

                </div>
                <div className='coupon-box1 boxes'>
                    <div className='icon-box'>
                        <i className="fa-brands fa-buffer icons icons"></i>
                    </div>
                    <button className='coupon-btn'>Signup</button>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. </p>

                </div>
                <div className='coupon-box1 boxes'>
                    <div className='icon-box'>
                        <i className="fa-brands fa-padlet icons"></i>
                    </div>
                    <button className='coupon-btn'>Signup</button>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. </p>

                </div>

            </div>

            <div className='coupon-image-phone'>
                <div className='coupon-image-background'>
                    <div className='coupon-box'>
                        <div className='coupon-contentpara'>
                            <h2>Want to be a part of this Team</h2>
                            <p>be a part of best offer discount site</p>
                            <div className='small-icons'>
                                <div className='ab'>
                                    <i class="fa-brands fa-apple"></i>

                                </div>
                                <div className='bc'>
                                    <span>Download From</span>
                                    <b>PlayStore</b>
                                </div>
                            </div>
                        </div>
                        <div className='image-coupon'>
                            <img src={iPhone} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='popular-category'>
                <div className='popu'>
                    <div className='category-image'>
                        <img src={girl} alt="image" />
                    </div>
                    <div className='popular-category-right-content'>
                        <h2>popular category</h2>
                        <hr style={{ backgroundColor: 'red', width: '60px', height: '5px', position: 'relative', right: '13vw' }} />

                        <table style={{ width: '100%', height: '40vh' }}>
                            <tr>
                                <td>Flight</td>
                                <td>Smith</td>
                                <td>Entertainment</td>
                                <td>Jewellary</td>
                            </tr>
                            <tr>
                                <td>Meidicine</td>
                                <td>Bus</td>
                                <td>Flowers</td>
                                <td>Beauty</td>
                            </tr>
                            <tr>
                                <td>OTT</td>
                                <td>Housing</td>
                                <td>Kids</td>
                                <td>Travel</td>
                            </tr>
                            <tr>
                                <td>Food </td>
                                <td>Bill</td>
                                <td>LifeStyle</td>
                                <td>Kitechen</td>
                            </tr>
                            <tr>
                                <td>Reacher</td>
                                <td>Eyewear</td>
                                <td>Hotel</td>
                                <td>Furniture</td>
                            </tr>
                            <tr>
                                <td>Lab</td>
                                <td>Electronics</td>
                                <td>Services</td>
                                <td>Footwear</td>
                            </tr>
                            <tr>
                                <td>Fashion</td>
                                <td>Pizza</td>
                                <td>Bike</td>
                                <td>Novelities</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coupon;