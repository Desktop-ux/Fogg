import React from 'react'
import "./FragnanceCard.css"

const FragnanceCard = ({ name, descp, newPrice, oldPricw, category, fragImg, dot_color, car_badge }) => {
    return (
        <div className='fragnanceCard'>
            <div className="fragnance_category">
                <div
                    className="circle"
                    style={{ backgroundColor: dot_color }}
                ></div>

                <div
                    className="frag_cat"
                    style={{ backgroundColor: car_badge }}
                >
                    {category}
                </div>
            </div>
            <div className="frag_bottle">
                <img src={fragImg} alt="" />
            </div>
            <div className="frag_detail">
                <h2>{name}</h2>
                <p>{descp}</p>
                <div className="frag_price">
                    <p className="new_frag_price">{newPrice}</p>
                    <p className="old_frag_price">{oldPricw}</p>
                </div>
                {/* <i class="fa-regular fa-heart"></i> */}
                <div className="frag_actions">
                    <button className="addToCart">Add to Cart</button>
                    <div className="wishlist_btn"><i class="fa-regular fa-heart"></i></div>
                </div>
            </div>
        </div>
    )
}

export default FragnanceCard