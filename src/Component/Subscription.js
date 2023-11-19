import React from 'react'
import subscribe from "../Assets/dakimge.webp";
import "./Subscription.css";
function Subscription() {
    return (
        <>
            <div className='subscribe-box'>

                <div className='container main-subscription'>
                    <div className='container-main'>
                        <div className='left-image-box'>
                            <img id="subscribe" src={subscribe} alt="image" />
                        </div>
                        <div className='right-content-box'>
                            <h2>Subscribe to our NewsLetter</h2>
                            <p>Be the first to get the exclusive offer and the first news</p>
                            <input type="text" placeholder='type your text' />
                            <button> Subscribe Now</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Subscription