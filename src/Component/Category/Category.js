import React, { useEffect, useState } from 'react';
import "./Category.css";
const Category = ({ data }) => {

    const [content, setContent] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/offer")
            .then((response) => response.json())
            .then((data) => {
                setContent(data);
                console.log(data)
            })
            .catch((err) => console.error(err))

    }, []);


    return (
        <div className='containero'>
            <div className='category-box'>
                <h2>Coupon by Category</h2>
                <hr style={{ width: '70px', backgroundColor: 'red', height: '4px' }} />
            </div>

            <div className='category-box-one'>
                {data.map((item, index) => (

                    <div className='category-content' key={index}>
                        <img src={item.item_image} alt={item.item_name} />
                        <p>{item.item_name}</p>
                    </div>
                ))}

                {/* <div className='category-content'>
                    <img src="" alt="img"/>
                    <p>Yes</p>
                </div>
                <div className='category-content'>
                    <h2>Hello</h2>
                    <p>Yes</p>
                </div>
                <div className='category-content'>
                    <h2>Hello</h2>
                    <p>Yes</p>
                </div>
                <div className='category-content'>
                    <h2>Hello</h2>
                    <p>Yes</p>
                </div>
                <div className='category-content'>
                    <h2>Hello</h2>
                    <p>Yes</p>
                </div>
                <div className='category-content'>
                    <h2>Hello</h2>
                    <p>Yes</p>
                </div> */}

            </div>
            <div className='line'></div>
            <div className='category-boxTwo'>
                <div className="categorybox-content">
                    <div className="categorybox-inside-content">
                        {content.map((items, index) => (
                            <div className="boxTwo" key={index} >
                                <img src={items.logo} />
                                <p>{items.site}</p>
                                <p>{items.discount}</p>
                                <button>{items.link}</button>
                            </div>

                        ))}


                    </div>
                </div>
            </div>
        </div>
    )

}
export default Category;