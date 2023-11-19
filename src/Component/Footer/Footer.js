import React, { Component } from 'react'
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='fotter-color'>
                    <div className='footer-content'>
                        <div className='footer-content-left'>
                            <h1>Samaridhi </h1>
                            <span>Digital pvt ltd</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                            <div className='downloaditem'>
                                <div className='iconsbutton store-button'>
                                    <i class="fa-brands fa-apple"></i>
                                    <span id="appstore">Download from<br /> App store</span>
                                </div>
                                <br />
                                <div className='iconsbutton store-button'>
                                    <i class="fa-brands fa-apple"></i>
                                    <span id="appstore">Download from<br /> Play store</span>
                                </div>
                            </div>
                        </div>
                        <div className='footer-content-right'>
                            <div className='one'>
                                <h2>Company</h2>
                                <ul className='footer-link'>
                                    <li>
                                        About us
                                    </li>
                                    <li>
                                        Privacy Policy
                                    </li>
                                    <li>
                                        Terms
                                    </li>
                                    <li>
                                        Blogs
                                    </li>
                                    <li>
                                        Branding
                                    </li>
                                    <li>
                                        Career
                                    </li>
                                </ul>
                            </div>
                            <div className='two'><h2>General</h2>
                                <ul className='footer-link'>
                                    <li>
                                        Partnership with us
                                    </li>
                                    <li>
                                        Write to us
                                    </li>
                                    <li>
                                        Mobile App
                                    </li>
                                    <li>
                                        Site map
                                    </li>
                                </ul>
                            </div>
                            <div className='three'><h2>Pages</h2>
                                <ul className='footer-link'>
                                    <li>
                                        Amazonpay Offers
                                    </li>
                                    <li>
                                        Paypal offers
                                    </li>
                                    <li>
                                        Google pay Offers
                                    </li>
                                    <li>
                                        Festival Offers
                                    </li>
                                    <li>
                                        Bank offers
                                    </li>
                                    <li>
                                        Phonepe offers
                                    </li>

                                </ul>
                            </div>
                            <div className='four'><h2>More</h2>
                                <ul className='footer-link'>
                                    <li>
                                        Citi offers
                                    </li>
                                    <li>
                                        Brand offers
                                    </li>
                                    <li>
                                        Product deal
                                    </li>
                                    <li>
                                        Gift cards
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
