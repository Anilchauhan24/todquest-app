import React, { useState, useEffect } from "react";
import "./SeasonOffer.css";

const SeasonOffer = ({ data, newData }) => {
    const [slideContent, setSlideContent] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlideContent((prevIndex) => (prevIndex + 1) % data.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [data.length]);

    return (
        <div className="container">
            <div className="offerwise-list">
                <ul>
                    <li>
                        <i className="fa-solid fa-trophy"></i>
                        <span style={{ color: "red" }}>Popular Coupons </span>
                    </li>
                    <li>
                        <i className="fa-solid fa-clock"></i>Ending Soon
                    </li>
                    <li>
                        <i className="fa-solid fa-fire"></i>Latest Coupons
                    </li>
                </ul>
            </div>
            <div className="offer-cards">
                <div className="offer-cards-main">
                    {data.map((item, index) => (
                        <div className={`box1 ${index === slideContent ? "active" : ""}`} key={index}>
                            <p className="para">{item.content}</p>
                            <img src={item.logo} alt={item.content_one} />
                            <p>{item.content_one}</p>
                            <button>{item.link}</button>
                        </div>
                    ))}
                </div>
                <div className="indicators">
                    {data.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === slideContent ? "active" : ""}`}
                        ></div>
                    ))}
                </div>
                <div className="dealsOfDay">
                    <h2>Deals of the Day</h2>
                </div>
                <div className="dealsOfDayContent">
                    <div className="inside-content">
                        {newData.map((item, index) => (
                            <div className="boxOne" key={index}>
                                <img src={item.logo} alt={item.site} />
                                <p>{item.site}</p>
                                <p>{item.discount}</p>
                                <button>Garb now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeasonOffer;
