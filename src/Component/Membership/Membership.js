import React, { Component } from 'react'
import memberBanner from "../../Assets/bannertwo.jpg";
import MembershipDisplay from './MembershipDisplay';
import "./Membership.css";
import menu from "../../Assets/menui.avif";

import fashionImage from "../../Assets/fash1.avif";



const url = "http://localhost:5000/offer";
export default class Membership extends Component {
    constructor() {
        super();
        this.state = {
            membership: ""
        }
    }
    render() {
        return (
            <div className='container two-container'>
                <div className='membership-content'>
                    <img src={memberBanner} />
                </div>
                <div className='prime-membership'>
                    <h2>Popular Membership</h2>
                </div>
                <div className='four-membership-card'>
                    <div className='left-membership'>
                        <div className='img'>
                            <img id="img" src={fashionImage} alt="img" />
                        </div>
                        <div className='member-shop-box'>
                            <img id="menuImg" src={menu} />
                        </div>
                    </div>
                    <div className='right-membership'>
                        <MembershipDisplay newData={this.state.membership} />
                    </div>
                </div>

            </div>
        )
    }
    componentDidMount() {
        fetch(`${url}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ membership: data })
            })
    }
}
