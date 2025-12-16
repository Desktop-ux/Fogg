import React from 'react'
import "./FragnanceCard.css"

const FragnanceCard = () => {
  return (
    <div className='fragnanceCard'>
        <div className="fragnance_category">
            <div className="circle"></div>
            <div className="frag_cat">Fresh</div>
        </div>
        <div className="frag_bottle">

        </div>
        <div className="frag_detail">
            <h2>Crimson Royale</h2>
            <p>Fresh and invigorating with essence of emerald mint and forest woods.</p>
            <div className="frag_price">
                <p className="new_frag_price">$329</p>
                <p className="old_frag_price">$400</p>
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