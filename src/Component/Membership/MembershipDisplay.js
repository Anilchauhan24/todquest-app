import React from 'react'
import "./MemberDisplay.css";
import travel from "../../Assets/outer-banner.jpg";
const MembershipDisplay = (props) => {

    const getData = ({ newData }) => {
        if (newData) {
            return newData.map((item) => {
                return (

                    <div className='member-right'>
                        <div className='member-content'>
                            <img src={item.logo} alt="img" />
                            <p>{item.site}</p>
                            <p>{item.discount}</p>
                            <button>{item.link}</button>
                        </div>

                    </div>



                )
            })
        }
    }
    return (
        <>
            <div className='getFlex'>
                {getData(props)}
            </div>
            <div className='imgd'>
                <img src={travel} />
            </div>
        </>
    )
}

export default MembershipDisplay