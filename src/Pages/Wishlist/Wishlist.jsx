import React from 'react'
import "./Wishlist.css"

const Wishlist = () => {
  return (
    <div className='wishlist_container'>
        <div className="wishlist_head">
            <button className="exclusive">Your Wishlist</button>
        <h1>Elite <br />Wishlist</h1>
        <div class="lux-line-blue"></div>
        <p  >Your personal collection of scents that caught your attention.</p>
        </div>
        <div className="wishlist_actions">
            <button className="to_cart"><i class="fa-solid fa-basket-shopping"></i> Add All to Cart</button>
            <button className="remove_wishlist">Clear Wishlist</button>
        </div>
    </div>
  )
}

export default Wishlist